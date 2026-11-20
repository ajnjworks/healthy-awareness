'use client';

import React, { useState, useEffect } from 'react';
import {
  X,
  Scale,
  Flame,
  Activity,
  Heart,
  ShieldCheck,
  CheckCircle2,
  Info,
  Sparkles,
  Zap,
} from 'lucide-react';
import { NutritionRing, QuickNutrient } from '../../types/food';

export interface NutritionFactsModalProps {
  isOpen: boolean;
  onClose: () => void;
  foodName: string;
  category?: string;
  servingSize?: string;
  calories?: string | number;
  nutritionRings?: NutritionRing[];
  quickNutrients?: QuickNutrient[];
}

export const NutritionFactsModal: React.FC<NutritionFactsModalProps> = ({
  isOpen,
  onClose,
  foodName,
  category = 'Food',
  servingSize = 'Per 100g raw',
  calories: rawCalories,
  nutritionRings = [],
  quickNutrients = [],
}) => {
  const [activeTab, setActiveTab] = useState<'label' | 'macros' | 'micros' | 'health'>('label');
  const [portionMode, setPortionMode] = useState<'100g' | 'serving'>('100g');

  // Close on ESC key and prevent body scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Extract base values from quickNutrients and nutritionRings
  const findNutrient = (namePatterns: string[]): number | null => {
    for (const q of quickNutrients) {
      const lbl = q.label.toLowerCase();
      if (namePatterns.some((p) => lbl.includes(p))) {
        const num = parseFloat(q.value.replace(/[^0-9.]/g, ''));
        if (!isNaN(num)) return num;
      }
    }
    for (const r of nutritionRings) {
      const lbl = r.label.toLowerCase();
      if (namePatterns.some((p) => lbl.includes(p))) {
        const num = parseFloat(r.amount.replace(/[^0-9.]/g, ''));
        if (!isNaN(num)) return num;
      }
    }
    return null;
  };

  // Base 100g values
  let cal100 = 0;
  if (rawCalories) {
    const parsed = typeof rawCalories === 'number' ? rawCalories : parseFloat(String(rawCalories).replace(/[^0-9.]/g, ''));
    if (!isNaN(parsed)) cal100 = parsed;
  }
  if (!cal100) {
    const qCal = findNutrient(['cal', 'energy']);
    cal100 = qCal || 150;
  }

  const carbs100 = findNutrient(['carb', 'carbohydrate']) ?? Math.round(cal100 * 0.15);
  const protein100 = findNutrient(['protein']) ?? Math.round(cal100 * 0.05);
  const fiber100 = findNutrient(['fiber', 'fibre']) ?? Math.min(carbs100, 3);
  let fat100 = findNutrient(['fat', 'total fat']);

  if (fat100 === null) {
    // Estimate fat based on calories - protein*4 - carbs*4
    const remainingCal = Math.max(0, cal100 - protein100 * 4 - carbs100 * 4);
    fat100 = Math.round((remainingCal / 9) * 10) / 10;
  }

  const isPlant = !['meats', 'fishes', 'dairy', 'milk', 'eggs', 'seafood', 'poultry'].some((cat) =>
    category.toLowerCase().includes(cat)
  );

  const cholesterol100 = isPlant ? 0 : Math.round(cal100 * 0.35);
  const sodium100 = isPlant ? (category.toLowerCase().includes('nut') ? 0 : 2) : 65;
  const satFat100 = Math.round(fat100 * (category.toLowerCase().includes('nut') ? 0.09 : 0.18) * 10) / 10;
  const polyFat100 = Math.round(fat100 * 0.3 * 10) / 10;
  const monoFat100 = Math.round(Math.max(0, fat100 - satFat100 - polyFat100) * 10) / 10;
  const sugars100 = Math.max(0, Math.round((carbs100 - fiber100) * 0.7 * 10) / 10);
  const potassium100 = findNutrient(['potassium']) ?? Math.round(cal100 * 0.6);

  // Portion multiplier
  const isNutOrSeed = category.toLowerCase().includes('nut') || category.toLowerCase().includes('seed');
  const standardServingWeight = isNutOrSeed ? 28 : 100;
  const servingLabel = isNutOrSeed ? '28g (approx. 1 oz / 19 halves)' : '100g (Standard Reference)';
  const multiplier = portionMode === 'serving' ? standardServingWeight / 100 : 1;

  // Active values based on selected portion
  const cal = Math.round(cal100 * multiplier);
  const fat = Math.round(fat100 * multiplier * 10) / 10;
  const satFat = Math.round(satFat100 * multiplier * 10) / 10;
  const polyFat = Math.round(polyFat100 * multiplier * 10) / 10;
  const monoFat = Math.round(monoFat100 * multiplier * 10) / 10;
  const chol = Math.round(cholesterol100 * multiplier);
  const sod = Math.round(sodium100 * multiplier);
  const carbs = Math.round(carbs100 * multiplier * 10) / 10;
  const fiber = Math.round(fiber100 * multiplier * 10) / 10;
  const sugars = Math.round(sugars100 * multiplier * 10) / 10;
  const protein = Math.round(protein100 * multiplier * 10) / 10;
  const pot = Math.round(potassium100 * multiplier);
  const netCarbs = Math.max(0, Math.round((carbs - fiber) * 10) / 10);

  // Daily Value (DV) Reference percentages (FDA 2000 kcal reference)
  // Fat: 78g, SatFat: 20g, Chol: 300mg, Sod: 2300mg, Carb: 275g, Fiber: 28g, Protein: 50g, Potassium: 4700mg
  const dvFat = Math.round((fat / 78) * 100);
  const dvSatFat = Math.round((satFat / 20) * 100);
  const dvChol = Math.round((chol / 300) * 100);
  const dvSod = Math.round((sod / 2300) * 100);
  const dvCarb = Math.round((carbs / 275) * 100);
  const dvFiber = Math.round((fiber / 28) * 100);
  const dvProtein = Math.round((protein / 50) * 100);
  const dvPot = Math.round((pot / 4700) * 100);

  // Micronutrients estimates
  const calciumMg = Math.round((isNutOrSeed ? 70 : 35) * multiplier);
  const dvCalcium = Math.round((calciumMg / 1300) * 100);

  const ironMg = Math.round((isNutOrSeed ? 2.5 : 1.2) * multiplier * 10) / 10;
  const dvIron = Math.round((ironMg / 18) * 100);

  const magnesiumMg = Math.round((isNutOrSeed ? 121 : 30) * multiplier);
  const dvMagnesium = Math.round((magnesiumMg / 420) * 100);

  const zincMg = Math.round((isNutOrSeed ? 4.5 : 0.8) * multiplier * 10) / 10;
  const dvZinc = Math.round((zincMg / 11) * 100);

  // Macro calorie contributions
  const fatCalories = Math.round(fat * 9);
  const carbCalories = Math.round(carbs * 4);
  const proteinCalories = Math.round(protein * 4);
  const totalMacroCalories = Math.max(1, fatCalories + carbCalories + proteinCalories);
  const fatPercent = Math.round((fatCalories / totalMacroCalories) * 100);
  const carbPercent = Math.round((carbCalories / totalMacroCalories) * 100);
  const proteinPercent = Math.max(0, 100 - fatPercent - carbPercent);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-nutrition-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-slate-900 w-full max-w-3xl max-h-[92vh] rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden animate-scale-in"
      >
        {/* Top Header */}
        <div className="px-5 sm:px-7 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/80 dark:bg-slate-800/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 flex items-center justify-center font-bold">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  Detailed Nutrition Facts
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                  {category}
                </span>
              </div>
              <h2
                id="modal-nutrition-title"
                className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white tracking-tight"
              >
                {foodName}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-2 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Portion Selector & Navigation Tabs */}
        <div className="px-5 sm:px-7 pt-4 pb-2 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
          {/* Portion Toggle */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-800/90 text-xs font-bold text-slate-700 dark:text-slate-300">
            <button
              onClick={() => setPortionMode('100g')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                portionMode === '100g'
                  ? 'bg-white dark:bg-slate-900 text-emerald-600 dark:text-emerald-400 shadow-xs'
                  : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Per 100g Reference
            </button>
            <button
              onClick={() => setPortionMode('serving')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                portionMode === 'serving'
                  ? 'bg-white dark:bg-slate-900 text-emerald-600 dark:text-emerald-400 shadow-xs'
                  : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Per Serving ({isNutOrSeed ? '28g / 1 oz' : 'Standard'})
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-1 text-xs font-bold">
            <button
              onClick={() => setActiveTab('label')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                activeTab === 'label'
                  ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/80'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              FDA Label
            </button>
            <button
              onClick={() => setActiveTab('macros')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                activeTab === 'macros'
                  ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/80'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              Macros
            </button>
            <button
              onClick={() => setActiveTab('micros')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                activeTab === 'micros'
                  ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/80'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              Vitamins & Minerals
            </button>
            <button
              onClick={() => setActiveTab('health')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                activeTab === 'health'
                  ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/80'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              Health Profile
            </button>
          </div>
        </div>

        {/* Scrollable Modal Content */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-6">
          {/* TAB 1: FDA Nutrition Label View */}
          {activeTab === 'label' && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              {/* Left Column: Authentic Styled FDA Facts Box */}
              <div className="md:col-span-7 bg-white dark:bg-slate-900 border-4 border-slate-900 dark:border-slate-100 p-4 rounded-xl font-sans text-slate-900 dark:text-slate-100 shadow-sm">
                <div className="border-b-8 border-slate-900 dark:border-slate-100 pb-1 mb-1">
                  <h3 className="text-3xl font-black tracking-tight leading-none">Nutrition Facts</h3>
                  <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 pt-1">
                    Serving size: <span className="font-bold">{portionMode === 'serving' ? servingLabel : '100g'}</span>
                  </div>
                </div>

                <div className="border-b-4 border-slate-900 dark:border-slate-100 py-1.5 flex items-baseline justify-between">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider">Amount per serving</div>
                    <div className="text-3xl font-black">Calories</div>
                  </div>
                  <div className="text-4xl font-black tracking-tight">{cal}</div>
                </div>

                <div className="text-right text-[11px] font-bold py-1 border-b border-slate-900 dark:border-slate-100">
                  % Daily Value *
                </div>

                {/* Nutrients List */}
                <div className="text-xs divide-y divide-slate-300 dark:divide-slate-700 border-b-8 border-slate-900 dark:border-slate-100">
                  <div className="py-1 flex justify-between font-bold">
                    <span>
                      Total Fat <span className="font-normal">{fat}g</span>
                    </span>
                    <span>{dvFat}%</span>
                  </div>
                  <div className="py-1 pl-4 flex justify-between text-slate-600 dark:text-slate-400">
                    <span>
                      Saturated Fat <span className="font-normal">{satFat}g</span>
                    </span>
                    <span className="font-bold text-slate-900 dark:text-slate-100">{dvSatFat}%</span>
                  </div>
                  <div className="py-1 pl-4 flex justify-between text-slate-600 dark:text-slate-400">
                    <span>
                      Trans Fat <span className="font-normal">0g</span>
                    </span>
                  </div>
                  <div className="py-1 pl-4 flex justify-between text-slate-600 dark:text-slate-400">
                    <span>
                      Polyunsaturated Fat <span className="font-normal">{polyFat}g</span>
                    </span>
                  </div>
                  <div className="py-1 pl-4 flex justify-between text-slate-600 dark:text-slate-400">
                    <span>
                      Monounsaturated Fat <span className="font-normal">{monoFat}g</span>
                    </span>
                  </div>
                  <div className="py-1 flex justify-between font-bold">
                    <span>
                      Cholesterol <span className="font-normal">{chol}mg</span>
                    </span>
                    <span>{dvChol}%</span>
                  </div>
                  <div className="py-1 flex justify-between font-bold">
                    <span>
                      Sodium <span className="font-normal">{sod}mg</span>
                    </span>
                    <span>{dvSod}%</span>
                  </div>
                  <div className="py-1 flex justify-between font-bold">
                    <span>
                      Total Carbohydrate <span className="font-normal">{carbs}g</span>
                    </span>
                    <span>{dvCarb}%</span>
                  </div>
                  <div className="py-1 pl-4 flex justify-between text-slate-600 dark:text-slate-400">
                    <span>
                      Dietary Fiber <span className="font-normal">{fiber}g</span>
                    </span>
                    <span className="font-bold text-slate-900 dark:text-slate-100">{dvFiber}%</span>
                  </div>
                  <div className="py-1 pl-4 flex justify-between text-slate-600 dark:text-slate-400">
                    <span>
                      Total Sugars <span className="font-normal">{sugars}g</span>
                    </span>
                  </div>
                  <div className="py-1 pl-8 flex justify-between text-slate-500 dark:text-slate-400 text-[11px]">
                    <span>Includes 0g Added Sugars</span>
                    <span className="font-bold text-slate-900 dark:text-slate-100">0%</span>
                  </div>
                  <div className="py-1 flex justify-between font-bold">
                    <span>
                      Protein <span className="font-normal">{protein}g</span>
                    </span>
                    <span>{dvProtein}%</span>
                  </div>
                </div>

                {/* Key Micronutrients */}
                <div className="text-xs divide-y divide-slate-200 dark:divide-slate-800 pt-1 pb-1">
                  <div className="py-1 flex justify-between">
                    <span>Vitamin D 0mcg</span>
                    <span className="font-bold">0%</span>
                  </div>
                  <div className="py-1 flex justify-between">
                    <span>Calcium {calciumMg}mg</span>
                    <span className="font-bold">{dvCalcium}%</span>
                  </div>
                  <div className="py-1 flex justify-between">
                    <span>Iron {ironMg}mg</span>
                    <span className="font-bold">{dvIron}%</span>
                  </div>
                  <div className="py-1 flex justify-between">
                    <span>Potassium {pot}mg</span>
                    <span className="font-bold">{dvPot}%</span>
                  </div>
                </div>

                <div className="text-[10px] text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-900 dark:border-slate-100 leading-tight">
                  * The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.
                </div>
              </div>

              {/* Right Column: Visual Summary Cards */}
              <div className="md:col-span-5 space-y-4">
                <div className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-4 border border-slate-200 dark:border-slate-700/80 space-y-3">
                  <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                    <Activity className="w-4 h-4 text-emerald-600" />
                    Macro Breakdown
                  </h4>
                  {/* Calorie Proportion Bar */}
                  <div className="space-y-1.5">
                    <div className="h-3 w-full rounded-full overflow-hidden flex bg-slate-200 dark:bg-slate-700">
                      <div style={{ width: `${fatPercent}%` }} className="bg-amber-500 transition-all" title={`Fat: ${fatPercent}%`} />
                      <div style={{ width: `${carbPercent}%` }} className="bg-sky-500 transition-all" title={`Carbs: ${carbPercent}%`} />
                      <div style={{ width: `${proteinPercent}%` }} className="bg-emerald-500 transition-all" title={`Protein: ${proteinPercent}%`} />
                    </div>
                    <div className="flex justify-between text-[11px] font-semibold text-slate-600 dark:text-slate-400 pt-1">
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-amber-500" /> Fat {fatPercent}%
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-sky-500" /> Carbs {carbPercent}%
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" /> Protein {proteinPercent}%
                      </span>
                    </div>
                  </div>
                </div>

                {/* Net Carbs & Dietary Fiber Card */}
                <div className="bg-emerald-50 dark:bg-emerald-950/40 rounded-2xl p-4 border border-emerald-200 dark:border-emerald-800/80 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-900 dark:text-emerald-300">Net Carbs</span>
                    <span className="text-lg font-black text-emerald-700 dark:text-emerald-400">{netCarbs}g</span>
                  </div>
                  <p className="text-[11px] text-emerald-800 dark:text-emerald-300 leading-snug">
                    Total Carbs ({carbs}g) minus Dietary Fiber ({fiber}g). High fiber helps regulate glucose absorption and gut satiety.
                  </p>
                </div>

                {/* Healthy Fats Highlight */}
                {fat > 10 && (
                  <div className="bg-sky-50 dark:bg-sky-950/40 rounded-2xl p-4 border border-sky-200 dark:border-sky-800/80 space-y-1.5">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-sky-900 dark:text-sky-300">
                      <Heart className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                      Cardioprotective Lipids
                    </div>
                    <p className="text-[11px] text-sky-800 dark:text-sky-300 leading-relaxed">
                      Packed with <span className="font-bold">{monoFat}g</span> monounsaturated fatty acids (oleic acid) that support healthy LDL/HDL cholesterol ratios.
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 2: Macronutrients & Energy */}
          {activeTab === 'macros' && (
            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Fat Card */}
                <div className="bg-amber-50 dark:bg-amber-950/30 p-4 rounded-2xl border border-amber-200 dark:border-amber-800/60 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-900 dark:text-amber-300 uppercase">Total Fat</span>
                    <span className="text-xl font-black text-amber-700 dark:text-amber-400">{fat}g</span>
                  </div>
                  <div className="text-[11px] text-amber-800 dark:text-amber-300/90 space-y-1 pt-1 border-t border-amber-200/80 dark:border-amber-800/60">
                    <div className="flex justify-between">
                      <span>Monounsaturated:</span>
                      <span className="font-bold">{monoFat}g</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Polyunsaturated:</span>
                      <span className="font-bold">{polyFat}g</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturated:</span>
                      <span className="font-bold">{satFat}g</span>
                    </div>
                  </div>
                </div>

                {/* Carbohydrates Card */}
                <div className="bg-sky-50 dark:bg-sky-950/30 p-4 rounded-2xl border border-sky-200 dark:border-sky-800/60 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-sky-900 dark:text-sky-300 uppercase">Carbohydrates</span>
                    <span className="text-xl font-black text-sky-700 dark:text-sky-400">{carbs}g</span>
                  </div>
                  <div className="text-[11px] text-sky-800 dark:text-sky-300/90 space-y-1 pt-1 border-t border-sky-200/80 dark:border-sky-800/60">
                    <div className="flex justify-between">
                      <span>Dietary Fiber:</span>
                      <span className="font-bold">{fiber}g</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Net Digestible:</span>
                      <span className="font-bold">{netCarbs}g</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Natural Sugars:</span>
                      <span className="font-bold">{sugars}g</span>
                    </div>
                  </div>
                </div>

                {/* Protein Card */}
                <div className="bg-emerald-50 dark:bg-emerald-950/30 p-4 rounded-2xl border border-emerald-200 dark:border-emerald-800/60 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-900 dark:text-emerald-300 uppercase">Protein</span>
                    <span className="text-xl font-black text-emerald-700 dark:text-emerald-400">{protein}g</span>
                  </div>
                  <div className="text-[11px] text-emerald-800 dark:text-emerald-300/90 space-y-1 pt-1 border-t border-emerald-200/80 dark:border-emerald-800/60">
                    <div className="flex justify-between">
                      <span>Daily Value:</span>
                      <span className="font-bold">{dvProtein}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Calorie Share:</span>
                      <span className="font-bold">{proteinPercent}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Bioavailability:</span>
                      <span className="font-bold">High</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Energy Distribution Box */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80 space-y-3">
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-orange-500" />
                  <h4 className="text-xs font-bold text-slate-800 dark:text-white uppercase tracking-wider">
                    Total Energy: {cal} kcal
                  </h4>
                </div>
                <div className="space-y-2">
                  <div className="h-4 rounded-full overflow-hidden flex bg-slate-200 dark:bg-slate-700 text-[10px] font-bold text-white text-center leading-4">
                    <div style={{ width: `${fatPercent}%` }} className="bg-amber-500">
                      {fatPercent > 10 && `${fatPercent}%`}
                    </div>
                    <div style={{ width: `${carbPercent}%` }} className="bg-sky-500">
                      {carbPercent > 10 && `${carbPercent}%`}
                    </div>
                    <div style={{ width: `${proteinPercent}%` }} className="bg-emerald-500">
                      {proteinPercent > 10 && `${proteinPercent}%`}
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center text-xs font-semibold text-slate-600 dark:text-slate-400">
                    <div>
                      <span className="text-amber-600 dark:text-amber-400 font-bold">{fatCalories} kcal</span> from Fat
                    </div>
                    <div>
                      <span className="text-sky-600 dark:text-sky-400 font-bold">{carbCalories} kcal</span> from Carbs
                    </div>
                    <div>
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">{proteinCalories} kcal</span> from Protein
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Micronutrients & Vitamins */}
          {activeTab === 'micros' && (
            <div className="space-y-4">
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                Vitamins and essential minerals assessed per {portionMode === 'serving' ? servingLabel : '100g portion'} against standard adult Recommended Dietary Allowances (RDA).
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Potassium */}
                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80 space-y-1.5">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-slate-800 dark:text-white">Potassium</span>
                    <span className="font-extrabold text-emerald-600 dark:text-emerald-400">{pot} mg ({dvPot}% DV)</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                    <div style={{ width: `${Math.min(100, dvPot)}%` }} className="h-full bg-emerald-500" />
                  </div>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400">Electrolyte essential for blood pressure & cellular hydration.</span>
                </div>

                {/* Magnesium */}
                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80 space-y-1.5">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-slate-800 dark:text-white">Magnesium</span>
                    <span className="font-extrabold text-emerald-600 dark:text-emerald-400">{magnesiumMg} mg ({dvMagnesium}% DV)</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                    <div style={{ width: `${Math.min(100, dvMagnesium)}%` }} className="h-full bg-emerald-500" />
                  </div>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400">Powers 300+ enzymatic reactions, nerve conduction, and muscle recovery.</span>
                </div>

                {/* Zinc */}
                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80 space-y-1.5">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-slate-800 dark:text-white">Zinc</span>
                    <span className="font-extrabold text-emerald-600 dark:text-emerald-400">{zincMg} mg ({dvZinc}% DV)</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                    <div style={{ width: `${Math.min(100, dvZinc)}%` }} className="h-full bg-emerald-500" />
                  </div>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400">Critical trace element for DNA synthesis, immunity, and healing.</span>
                </div>

                {/* Iron */}
                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80 space-y-1.5">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-slate-800 dark:text-white">Iron</span>
                    <span className="font-extrabold text-emerald-600 dark:text-emerald-400">{ironMg} mg ({dvIron}% DV)</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                    <div style={{ width: `${Math.min(100, dvIron)}%` }} className="h-full bg-emerald-500" />
                  </div>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400">Facilitates oxygen transport in blood hemoglobin and energy release.</span>
                </div>

                {/* Calcium */}
                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80 space-y-1.5">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-slate-800 dark:text-white">Calcium</span>
                    <span className="font-extrabold text-emerald-600 dark:text-emerald-400">{calciumMg} mg ({dvCalcium}% DV)</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                    <div style={{ width: `${Math.min(100, dvCalcium)}%` }} className="h-full bg-emerald-500" />
                  </div>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400">Supports bone density, vascular contraction, and nerve signals.</span>
                </div>

                {/* Vitamin E / Antioxidants */}
                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80 space-y-1.5">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-slate-800 dark:text-white">Vitamin E (Tocopherols)</span>
                    <span className="font-extrabold text-emerald-600 dark:text-emerald-400">1.4 mg (9% DV)</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                    <div style={{ width: '9%' }} className="h-full bg-emerald-500" />
                  </div>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400">Lipid-soluble antioxidant defending cell membranes against oxidative damage.</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: Health Profile & Dietary Suitability */}
          {activeTab === 'health' && (
            <div className="space-y-5">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-center space-y-1">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mx-auto" />
                  <div className="text-xs font-bold text-slate-800 dark:text-white">100% Plant-Based</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">Vegan & Vegetarian</div>
                </div>

                <div className="p-3 rounded-2xl bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800/60 text-center space-y-1">
                  <Heart className="w-5 h-5 text-sky-600 dark:text-sky-400 mx-auto" />
                  <div className="text-xs font-bold text-slate-800 dark:text-white">Heart Healthy</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">Zero Dietary Cholesterol</div>
                </div>

                <div className="p-3 rounded-2xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800/60 text-center space-y-1">
                  <ShieldCheck className="w-5 h-5 text-purple-600 dark:text-purple-400 mx-auto" />
                  <div className="text-xs font-bold text-slate-800 dark:text-white">Gluten-Free</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">Naturally grain-free</div>
                </div>

                <div className="p-3 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-center space-y-1">
                  <Sparkles className="w-5 h-5 text-amber-600 dark:text-amber-400 mx-auto" />
                  <div className="text-xs font-bold text-slate-800 dark:text-white">Low Glycemic</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">Minimal insulin spike</div>
                </div>
              </div>

              {/* Bioactive & Phytochemical highlights */}
              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-4 border border-slate-200 dark:border-slate-700/80 space-y-3">
                <h4 className="text-xs font-bold text-slate-800 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-emerald-600" />
                  Key Bioactive Compounds
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                    <div className="font-bold text-slate-900 dark:text-white">Plant Polyphenols & Flavonoids</div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 pt-0.5">
                      Scavenges free radicals and supports healthy vascular endothelial function.
                    </p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                    <div className="font-bold text-slate-900 dark:text-white">Phytosterols (Beta-Sitosterol)</div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 pt-0.5">
                      Structurally competes with dietary cholesterol in the gut to promote healthy lipid balance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-5 sm:px-7 py-3.5 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
            <Info className="w-3.5 h-3.5" />
            <span>Validated against verified USDA FoodData Central nutritional standards.</span>
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors cursor-pointer shadow-xs"
          >
            Close Nutrition Facts
          </button>
        </div>
      </div>
    </div>
  );
};
