'use client';

import React, { useState, useEffect, useMemo, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { HeroBanner } from '../../components/common/HeroBanner';
import {
  Scale as ScaleIcon,
  Heart,
  Brain,
  Sun,
  ShieldCheck,
  Sparkles,
  Flame,
  Dumbbell,
  Moon,
  ChevronDown,
  ChevronRight,
  Share2,
  Lightbulb,
  Info,
  CheckCircle2,
  Utensils,
  ArrowRight,
  ArrowLeftRight,
  Star,
  Check,
  Crown,
} from 'lucide-react';

import { useTheme } from '@/utils/useTheme';
import {
  buildComparedFood,
  getAllUniqueFoods,
  POPULAR_COMPARISONS,
  ComparedFoodData,
} from '../../utils/foodComparisonHelper';
import { FoodSelectModal } from '../../components/modals/FoodSelectModal';

function CompareFoodsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { darkMode, toggleDarkMode: handleToggleDarkMode } = useTheme();

  // Read initial foods from query params or fallback
  const initialFoodA = searchParams?.get('foodA') || 'almonds';
  const initialFoodB = searchParams?.get('foodB') || 'walnuts';

  const [foodAId, setFoodAId] = useState(initialFoodA);
  const [foodBId, setFoodBId] = useState(initialFoodB);

  // Serving mode: 100g vs standard serving
  const [portionA, setPortionA] = useState<'100g' | 'serving'>('100g');
  const [portionB, setPortionB] = useState<'100g' | 'serving'>('100g');

  const [modalTarget, setModalTarget] = useState<'A' | 'B' | null>(null);
  const [shared, setShared] = useState(false);
  const [activeNav, setActiveNav] = useState('Compare');

  // Load all unique foods from productDetailsData.json
  const allFoods = useMemo(() => getAllUniqueFoods(), []);

  // Update state if URL query params change externally
  useEffect(() => {
    const qA = searchParams?.get('foodA');
    const qB = searchParams?.get('foodB');
    if (qA && qA !== foodAId) setFoodAId(qA);
    if (qB && qB !== foodBId) setFoodBId(qB);
  }, [searchParams]);

  // Keep URL in sync when food selection changes without refreshing
  const updateComparison = (newA: string, newB: string) => {
    setFoodAId(newA);
    setFoodBId(newB);
    const params = new URLSearchParams();
    params.set('foodA', newA);
    params.set('foodB', newB);
    if (typeof window !== 'undefined') {
      window.history.replaceState(null, '', `?${params.toString()}`);
    }
  };

  // Build dynamic food objects directly from productDetailsData.json
  const foodA: ComparedFoodData = useMemo(
    () => buildComparedFood(foodAId, portionA),
    [foodAId, portionA]
  );
  const foodB: ComparedFoodData = useMemo(
    () => buildComparedFood(foodBId, portionB),
    [foodBId, portionB]
  );

  // Swap foods A and B
  const handleSwap = () => {
    updateComparison(foodBId, foodAId);
  };

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setShared(true);
      setTimeout(() => setShared(false), 2000);
    }
  };

  const handleNavClick = (navItem: string) => {
    setActiveNav(navItem);
    if (navItem === 'Home') router.push('/');
    else if (navItem === 'Foods') router.push('/healthy-foods');
    else if (navItem === 'Compare') router.push('/compare-foods');
    else router.push('/');
  };

  // Nutritional Comparison Metrics array
  const comparisonMetrics = [
    {
      name: 'Calories',
      unit: 'kcal',
      valA: foodA.metrics.calories.formatted,
      rawA: foodA.metrics.calories.raw,
      valB: foodB.metrics.calories.formatted,
      rawB: foodB.metrics.calories.raw,
      advantage: foodA.metrics.calories.raw < foodB.metrics.calories.raw ? 'A' : 'B',
      advantageNote: 'Lower Calorie Density',
    },
    {
      name: 'Protein',
      unit: 'g',
      valA: foodA.metrics.protein.formatted,
      rawA: foodA.metrics.protein.raw,
      valB: foodB.metrics.protein.formatted,
      rawB: foodB.metrics.protein.raw,
      advantage: foodA.metrics.protein.raw > foodB.metrics.protein.raw ? 'A' : 'B',
      advantageNote: 'Higher Protein',
    },
    {
      name: 'Dietary Fiber',
      unit: 'g',
      valA: foodA.metrics.fiber.formatted,
      rawA: foodA.metrics.fiber.raw,
      valB: foodB.metrics.fiber.formatted,
      rawB: foodB.metrics.fiber.raw,
      advantage: foodA.metrics.fiber.raw > foodB.metrics.fiber.raw ? 'A' : 'B',
      advantageNote: 'Higher Fiber',
    },
    {
      name: 'Total Carbohydrates',
      unit: 'g',
      valA: foodA.metrics.carbs.formatted,
      rawA: foodA.metrics.carbs.raw,
      valB: foodB.metrics.carbs.formatted,
      rawB: foodB.metrics.carbs.raw,
      advantage: foodA.metrics.carbs.raw < foodB.metrics.carbs.raw ? 'A' : 'B',
      advantageNote: 'Lower Carbs',
    },
    {
      name: 'Net Carbs',
      unit: 'g',
      valA: foodA.metrics.netCarbs.formatted,
      rawA: foodA.metrics.netCarbs.raw,
      valB: foodB.metrics.netCarbs.formatted,
      rawB: foodB.metrics.netCarbs.raw,
      advantage: foodA.metrics.netCarbs.raw < foodB.metrics.netCarbs.raw ? 'A' : 'B',
      advantageNote: 'Lower Net Carbs',
    },
    {
      name: 'Healthy Fats',
      unit: 'g',
      valA: foodA.metrics.fat.formatted,
      rawA: foodA.metrics.fat.raw,
      valB: foodB.metrics.fat.formatted,
      rawB: foodB.metrics.fat.raw,
      advantage: foodA.metrics.fat.raw > foodB.metrics.fat.raw ? 'A' : 'B',
      advantageNote: 'Higher Lipids',
    },
    {
      name: 'Potassium',
      unit: 'mg',
      valA: foodA.metrics.potassium.formatted,
      rawA: foodA.metrics.potassium.raw,
      valB: foodB.metrics.potassium.formatted,
      rawB: foodB.metrics.potassium.raw,
      advantage: foodA.metrics.potassium.raw > foodB.metrics.potassium.raw ? 'A' : 'B',
      advantageNote: 'Higher Potassium',
    },
    {
      name: 'Calcium',
      unit: 'mg',
      valA: foodA.metrics.calcium.formatted,
      rawA: foodA.metrics.calcium.raw,
      valB: foodB.metrics.calcium.formatted,
      rawB: foodB.metrics.calcium.raw,
      advantage: foodA.metrics.calcium.raw > foodB.metrics.calcium.raw ? 'A' : 'B',
      advantageNote: 'Higher Calcium',
    },
    {
      name: 'Iron',
      unit: 'mg',
      valA: foodA.metrics.iron.formatted,
      rawA: foodA.metrics.iron.raw,
      valB: foodB.metrics.iron.formatted,
      rawB: foodB.metrics.iron.raw,
      advantage: foodA.metrics.iron.raw > foodB.metrics.iron.raw ? 'A' : 'B',
      advantageNote: 'Higher Iron',
    },
    {
      name: 'Health Score',
      unit: '',
      valA: `${foodA.score}`,
      rawA: foodA.score,
      valB: `${foodB.score}`,
      rawB: foodB.score,
      advantage: foodA.score >= foodB.score ? 'A' : 'B',
      advantageNote: 'Higher Score',
    },
  ];

  // Dynamic "Which is Better For?" evaluations based on real JSON data
  const whichIsBetter = [
    {
      category: 'Muscle Growth (High Protein)',
      icon: Dumbbell,
      iconColor: 'text-emerald-500',
      winner: foodA.metrics.protein.raw >= foodB.metrics.protein.raw ? foodA.name : foodB.name,
      reason: `${Math.max(foodA.metrics.protein.raw, foodB.metrics.protein.raw)}g protein vs ${Math.min(foodA.metrics.protein.raw, foodB.metrics.protein.raw)}g`,
    },
    {
      category: 'Calorie Control & Weight Loss',
      icon: ScaleIcon,
      iconColor: 'text-sky-500',
      winner: foodA.metrics.calories.raw <= foodB.metrics.calories.raw ? foodA.name : foodB.name,
      reason: `${Math.min(foodA.metrics.calories.raw, foodB.metrics.calories.raw)} kcal vs ${Math.max(foodA.metrics.calories.raw, foodB.metrics.calories.raw)} kcal`,
    },
    {
      category: 'Gut Health & Digestion (Fiber)',
      icon: Sparkles,
      iconColor: 'text-amber-500',
      winner: foodA.metrics.fiber.raw >= foodB.metrics.fiber.raw ? foodA.name : foodB.name,
      reason: `${Math.max(foodA.metrics.fiber.raw, foodB.metrics.fiber.raw)}g dietary fiber`,
    },
    {
      category: 'Electrolytes & Blood Pressure',
      icon: Heart,
      iconColor: 'text-rose-500',
      winner: foodA.metrics.potassium.raw >= foodB.metrics.potassium.raw ? foodA.name : foodB.name,
      reason: `${Math.max(foodA.metrics.potassium.raw, foodB.metrics.potassium.raw)}mg potassium`,
    },
    {
      category: 'Overall Nutritional Rating',
      icon: Star,
      iconColor: 'text-yellow-500 fill-yellow-500',
      winner: foodA.score >= foodB.score ? foodA.name : foodB.name,
      reason: `Grade score of ${Math.max(foodA.score, foodB.score)} / 10`,
    },
  ];

  // Dynamic recommendation synthesis
  const recommendationSynthesis = useMemo(() => {
    const higherProtein = foodA.metrics.protein.raw >= foodB.metrics.protein.raw ? foodA : foodB;
    const lowerCal = foodA.metrics.calories.raw <= foodB.metrics.calories.raw ? foodA : foodB;

    if (higherProtein.id === lowerCal.id) {
      return `Both foods offer exceptional nutritional density. ${higherProtein.name} provides superior protein (${higherProtein.metrics.protein.formatted}) with lower overall caloric density, while ${higherProtein.id === foodA.id ? foodB.name : foodA.name} shines in complementary micronutrients and bioavailable plant lipids.`;
    }

    return `Choose ${higherProtein.name} if your primary health goal is sustained muscle repair and higher dietary fiber (${higherProtein.metrics.fiber.formatted}). Opt for ${lowerCal.name} if you are seeking a lighter caloric profile (${lowerCal.metrics.calories.formatted}) or distinct phytonutrients. Incorporating both into your weekly diet ensures optimal nutritional balance.`;
  }, [foodA, foodB]);

  // Related foods from the same categories
  const relatedFoods = useMemo(() => {
    return allFoods
      .filter((f) => f.id !== foodA.id && f.id !== foodB.id)
      .slice(0, 6);
  }, [allFoods, foodA.id, foodB.id]);

  return (
    <div className="min-h-screen bg-slate-50/60 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-300">
      {/* Top Navbar */}
      <Navbar
        darkMode={darkMode}
        onToggleDarkMode={handleToggleDarkMode}
        activeNav={activeNav}
        onNavClick={handleNavClick}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8 w-full min-w-0 overflow-hidden">
        {/* Breadcrumb */}
        <Breadcrumb items={[{ label: 'Compare Foods' }]} />

        {/* 1. HERO HEADER SECTION */}
        <HeroBanner
          title="Compare Foods"
          subtitle={
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-xl flex items-center gap-1.5">
              <span>Dynamic side-by-side comparison of nutrition, benefits, and metrics</span>
              <span className="text-emerald-600">🌿</span>
            </p>
          }
          extraContent={<div className="w-12 h-1 bg-emerald-600 rounded-full mt-1" />}
          rightContent={
            <div className="relative w-44 h-44 sm:w-64 sm:h-64 lg:w-72 lg:h-72 flex items-center justify-center shrink-0 max-w-full">
              <img
                src="/images/hero-banner.png"
                alt="Food Comparison Scale"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80';
                }}
                className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          }
        />

        {/* POPULAR COMPARISON CHIPS PRESETS */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-bold text-slate-600 dark:text-slate-400">
            <span>Popular Comparisons:</span>
          </div>
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            {POPULAR_COMPARISONS.map((preset) => {
              const isActive =
                (foodAId === preset.foodA && foodBId === preset.foodB) ||
                (foodAId === preset.foodB && foodBId === preset.foodA);
              return (
                <button
                  key={preset.label}
                  onClick={() => updateComparison(preset.foodA, preset.foodB)}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold transition-all shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-emerald-500 hover:text-emerald-600'
                  }`}
                >
                  <span>{preset.emoji}</span>
                  <span>{preset.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. HEAD-TO-HEAD FOOD COMPARISON SELECTOR */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Head-to-Head Cards (8 Cols) */}
          <div className="lg:col-span-8 bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-7 border border-slate-100 dark:border-slate-800 shadow-xs relative">
            {/* Top Grid: Food A vs Food B Main Cards */}
            <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-6 pb-6 border-b border-slate-100 dark:border-slate-800/80">
              {/* VS Badge & Swap Button in Center */}
              <div className="sm:absolute sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 flex sm:flex-col items-center justify-center gap-2 z-20 my-2 sm:my-0">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white dark:bg-slate-800 border-2 border-emerald-500 text-emerald-600 dark:text-emerald-400 shadow-md flex items-center justify-center text-xs sm:text-sm font-black select-none">
                  VS
                </div>
                <button
                  onClick={handleSwap}
                  title="Swap Food A and Food B"
                  className="flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/60 hover:text-emerald-600 text-[11px] font-bold border border-slate-200 dark:border-slate-700 transition-colors cursor-pointer shadow-2xs"
                >
                  <ArrowLeftRight className="w-3 h-3 text-emerald-600" />
                  <span>Swap</span>
                </button>
              </div>

              {/* Food A Card */}
              <div className="space-y-4 flex flex-col items-center text-center p-5 rounded-2xl bg-slate-50/60 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-800 relative group">
                <div className="w-32 h-32 sm:w-36 sm:h-36 relative flex items-center justify-center">
                  <img
                    src={foodA.image}
                    alt={foodA.name}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://images.unsplash.com/photo-1543208541-0961a29a8c3d?auto=format&fit=crop&w=400&q=80';
                    }}
                    className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-300 drop-shadow-sm"
                  />
                </div>

                <div className="space-y-1.5 w-full flex flex-col items-center text-center">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                    Food A
                  </span>
                  <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">
                    {foodA.name}
                  </h2>
                  <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-slate-600 dark:text-slate-300">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                    <span>{foodA.category}</span>
                  </div>

                  {/* Health Score Pill */}
                  <div className="pt-1 flex items-center justify-center gap-2">
                    <div className="px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-black flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-emerald-500 text-emerald-500" />
                      <span>{foodA.score}</span>
                    </div>
                    <span className="text-xs font-semibold text-slate-500">Health Score</span>
                  </div>

                  {/* Change Food Button */}
                  <button
                    onClick={() => setModalTarget('A')}
                    className="mt-3 w-full max-w-[200px] py-2 px-3 rounded-xl bg-white dark:bg-slate-800 border border-emerald-300 dark:border-emerald-700/80 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/50 text-xs font-bold transition-all shadow-2xs flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Change Food A</span>
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Food B Card */}
              <div className="space-y-4 flex flex-col items-center text-center p-5 rounded-2xl bg-slate-50/60 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-800 relative group">
                <div className="w-32 h-32 sm:w-36 sm:h-36 relative flex items-center justify-center">
                  <img
                    src={foodB.image}
                    alt={foodB.name}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://images.unsplash.com/photo-1543208541-0961a29a8c3d?auto=format&fit=crop&w=400&q=80';
                    }}
                    className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-300 drop-shadow-sm"
                  />
                </div>

                <div className="space-y-1.5 w-full flex flex-col items-center text-center">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                    Food B
                  </span>
                  <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">
                    {foodB.name}
                  </h2>
                  <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-slate-600 dark:text-slate-300">
                    <span className="w-2 h-2 rounded-full bg-sky-500 inline-block" />
                    <span>{foodB.category}</span>
                  </div>

                  {/* Health Score Pill */}
                  <div className="pt-1 flex items-center justify-center gap-2">
                    <div className="px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-950/80 border border-sky-200 dark:border-sky-800 text-sky-800 dark:text-sky-300 text-xs font-black flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-sky-500 text-sky-500" />
                      <span>{foodB.score}</span>
                    </div>
                    <span className="text-xs font-semibold text-slate-500">Health Score</span>
                  </div>

                  {/* Change Food Button */}
                  <button
                    onClick={() => setModalTarget('B')}
                    className="mt-3 w-full max-w-[200px] py-2 px-3 rounded-xl bg-white dark:bg-slate-800 border border-sky-300 dark:border-sky-700/80 text-sky-700 dark:text-sky-300 hover:bg-sky-50 dark:hover:bg-sky-950/50 text-xs font-bold transition-all shadow-2xs flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Change Food B</span>
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Serving Size Selector Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex items-center gap-3">
                <label className="text-xs font-bold text-slate-500 whitespace-nowrap shrink-0">
                  {foodA.name} Portion:
                </label>
                <div className="relative flex-1">
                  <select
                    value={portionA}
                    onChange={(e) => setPortionA(e.target.value as any)}
                    className="w-full appearance-none bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200 py-2 pl-3 pr-8 rounded-xl shadow-xs focus:outline-none cursor-pointer"
                  >
                    <option value="100g">100g (Standard Reference)</option>
                    <option value="serving">Standard Serving</option>
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <label className="text-xs font-bold text-slate-500 whitespace-nowrap shrink-0">
                  {foodB.name} Portion:
                </label>
                <div className="relative flex-1">
                  <select
                    value={portionB}
                    onChange={(e) => setPortionB(e.target.value as any)}
                    className="w-full appearance-none bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200 py-2 pl-3 pr-8 rounded-xl shadow-xs focus:outline-none cursor-pointer"
                  >
                    <option value="100g">100g (Standard Reference)</option>
                    <option value="serving">Standard Serving</option>
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* Quick View & Share Sidebar (4 Cols) */}
          <div className="lg:col-span-4 bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-100 dark:border-slate-800 shadow-xs space-y-4">
            <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">
              Comparison Navigation
            </h3>

            <div className="space-y-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
              <a
                href="#nutritional-comparison"
                className="flex items-center gap-2 hover:text-emerald-600 transition-colors py-1"
              >
                <span>📈</span>
                <span>Nutritional Side-by-Side</span>
              </a>
              <a
                href="#health-benefits"
                className="flex items-center gap-2 hover:text-emerald-600 transition-colors py-1"
              >
                <span>🩺</span>
                <span>Health Benefits</span>
              </a>
              <a
                href="#which-is-better"
                className="flex items-center gap-2 hover:text-emerald-600 transition-colors py-1"
              >
                <span>🏆</span>
                <span>Which is Better For?</span>
              </a>
              <a
                href="#recommendation"
                className="flex items-center gap-2 hover:text-emerald-600 transition-colors py-1"
              >
                <span>⏰</span>
                <span>Best Time & Verdict</span>
              </a>
              <a
                href="#similar-foods"
                className="flex items-center gap-2 hover:text-emerald-600 transition-colors py-1"
              >
                <span>🌱</span>
                <span>Related Healthy Foods</span>
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={handleShare}
                className="w-full py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-xs font-extrabold flex items-center justify-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              >
                {shared ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Link Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Share Comparison URL</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* 3. NUTRITIONAL COMPARISON DUAL BAR CHART SECTION */}
        <div id="nutritional-comparison" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start scroll-mt-24">
          {/* Dual Bar Charts (8 Cols) */}
          <div className="lg:col-span-8 bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-7 border border-slate-100 dark:border-slate-800 shadow-xs space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
              <div>
                <h2 className="text-lg font-extrabold text-slate-900 dark:text-white">
                  Nutritional Breakdown
                </h2>
                <p className="text-xs text-slate-500">
                  Side-by-side values per selected portion
                </p>
              </div>

              <div className="flex items-center gap-4 text-xs font-bold">
                <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                  <span className="w-3 h-3 rounded-full bg-emerald-600 inline-block" /> {foodA.name}
                </span>
                <span className="flex items-center gap-1.5 text-sky-600 dark:text-sky-400">
                  <span className="w-3 h-3 rounded-full bg-sky-600 inline-block" /> {foodB.name}
                </span>
              </div>
            </div>

            <div className="space-y-4 pt-1">
              {comparisonMetrics.map((item, idx) => {
                const maxVal = Math.max(1, item.rawA, item.rawB);
                const percentA = Math.min(100, Math.round((item.rawA / maxVal) * 100));
                const percentB = Math.min(100, Math.round((item.rawB / maxVal) * 100));

                return (
                  <div key={idx} className="space-y-1.5">
                    {/* Value Labels Row */}
                    <div className="flex items-center justify-between text-xs font-extrabold">
                      <span className="text-emerald-700 dark:text-emerald-400 w-28 text-left flex items-center gap-1">
                        {item.advantage === 'A' && <Crown className="w-3 h-3 text-amber-500 shrink-0" />}
                        {item.valA}
                      </span>
                      <span className="text-slate-600 dark:text-slate-300 font-bold text-center flex-1">
                        {item.name}
                      </span>
                      <span className="text-sky-700 dark:text-sky-400 w-28 text-right flex items-center justify-end gap-1">
                        {item.valB}
                        {item.advantage === 'B' && <Crown className="w-3 h-3 text-amber-500 shrink-0" />}
                      </span>
                    </div>

                    {/* Dual Horizontal Progress Bars */}
                    <div className="grid grid-cols-2 gap-2 items-center">
                      {/* Food A Bar (Green growing right-to-left) */}
                      <div className="h-2.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden flex justify-end">
                        <div
                          className="h-full bg-emerald-600 rounded-full transition-all duration-700"
                          style={{ width: `${percentA}%` }}
                        />
                      </div>

                      {/* Food B Bar (Blue growing left-to-right) */}
                      <div className="h-2.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden flex justify-start">
                        <div
                          className="h-full bg-sky-600 rounded-full transition-all duration-700"
                          style={{ width: `${percentB}%` }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Which is Better for? Card (4 Cols) */}
          <div
            id="which-is-better"
            className="lg:col-span-4 bg-emerald-50/50 dark:bg-emerald-950/30 rounded-3xl p-5 border border-emerald-100 dark:border-emerald-900/60 shadow-xs space-y-4 scroll-mt-24"
          >
            <div>
              <h3 className="text-sm font-extrabold text-emerald-800 dark:text-emerald-300">
                Which is Better For?
              </h3>
              <p className="text-[11px] text-emerald-700 dark:text-emerald-400">
                Data-driven outcome based on macronutrients & minerals
              </p>
            </div>

            <div className="space-y-3">
              {whichIsBetter.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-3 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-emerald-100 dark:border-emerald-900/40 space-y-1"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1.5 font-bold text-slate-800 dark:text-slate-200">
                        <IconComponent className={`w-3.5 h-3.5 ${item.iconColor}`} />
                        <span>{item.category}</span>
                      </div>
                      <span className="font-black text-emerald-700 dark:text-emerald-400">
                        {item.winner}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 pl-5">
                      {item.reason}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 4. HEALTH BENEFITS SECTION */}
        <div id="health-benefits" className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch scroll-mt-24">
          {/* Food A Benefits Box */}
          <div className="bg-emerald-50/60 dark:bg-emerald-950/40 rounded-3xl p-5 sm:p-6 border border-emerald-100 dark:border-emerald-900/60 shadow-xs space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
              <h3 className="text-base font-extrabold text-emerald-900 dark:text-emerald-200">
                {foodA.name} Core Benefits
              </h3>
            </div>

            <div className="space-y-3.5">
              {foodA.benefits.map((b, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="p-2 rounded-xl shrink-0 mt-0.5 shadow-2xs bg-emerald-100/80 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300">
                    <Heart className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs font-extrabold text-slate-900 dark:text-white">
                      {b.title}
                    </h4>
                    <p className="text-[11px] text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                      {b.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Food B Benefits Box */}
          <div className="bg-sky-50/60 dark:bg-sky-950/40 rounded-3xl p-5 sm:p-6 border border-sky-100 dark:border-sky-900/60 shadow-xs space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-600" />
              <h3 className="text-base font-extrabold text-sky-900 dark:text-sky-200">
                {foodB.name} Core Benefits
              </h3>
            </div>

            <div className="space-y-3.5">
              {foodB.benefits.map((b, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="p-2 rounded-xl shrink-0 mt-0.5 shadow-2xs bg-sky-100/80 dark:bg-sky-900/60 text-sky-700 dark:text-sky-300">
                    <Brain className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs font-extrabold text-slate-900 dark:text-white">
                      {b.title}
                    </h4>
                    <p className="text-[11px] text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                      {b.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Did You Know? / Synergy Card */}
          <div className="bg-amber-50/50 dark:bg-amber-950/30 rounded-3xl p-5 sm:p-6 border border-amber-200/60 dark:border-amber-900/40 shadow-xs flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/60 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 shadow-2xs">
                  <Lightbulb className="w-4 h-4 fill-amber-400 text-amber-500" />
                </div>
                <h3 className="text-base font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Dietary Synergy
                </h3>
              </div>
              <p className="text-xs text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                Combining <strong>{foodA.name}</strong> and <strong>{foodB.name}</strong> creates a balanced spectrum of both bioavailable macronutrients and cellular antioxidants. Alternating them throughout the week ensures a diverse microbiome and balanced amino acid uptake.
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-amber-200/50 dark:border-amber-900/40 text-[11px] text-slate-600 dark:text-slate-400 space-y-1">
              <div className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Combined Nutritional Rating
              </div>
              <p>Both foods rank in the top tier of whole food dietary choices.</p>
            </div>
          </div>
        </div>

        {/* 5. RECOMMENDATION & OPTIMAL TIMING */}
        <div id="recommendation" className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-100 dark:border-slate-800 shadow-xs grid grid-cols-1 md:grid-cols-12 gap-6 items-center scroll-mt-24">
          <div className="md:col-span-8 flex items-start gap-4 border-l-4 border-emerald-600 pl-4">
            <div className="p-2.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">
                Nutritional Verdict & Recommendation
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                {recommendationSynthesis}
              </p>
            </div>
          </div>

          <div className="md:col-span-4 bg-emerald-50/70 dark:bg-emerald-950/40 p-4 rounded-2xl border border-emerald-100 dark:border-emerald-900/60 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-900 dark:text-emerald-200">
              <Utensils className="w-4 h-4 text-emerald-600" />
              <span>Recommended Consumption Timing</span>
            </div>
            <div className="text-[11px] text-slate-600 dark:text-slate-300 space-y-1">
              <div>
                <strong>{foodA.name}:</strong> {foodA.bestTime.morning.slice(0, 75)}...
              </div>
              <div>
                <strong>{foodB.name}:</strong> {foodB.bestTime.evening.slice(0, 75)}...
              </div>
            </div>
          </div>
        </div>

        {/* 6. "YOU MAY ALSO LIKE" RELATED FOODS */}
        <div id="similar-foods" className="space-y-4 scroll-mt-24">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">
              Compare with Other Foods
            </h2>
            <Link
              href="/healthy-foods"
              className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-0.5"
            >
              Browse all 450+ foods <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {relatedFoods.map((item) => (
              <div
                key={item.id}
                onClick={() => updateComparison(foodAId, item.id)}
                title={`Compare ${foodA.name} with ${item.name}`}
                className="group bg-white dark:bg-slate-900 rounded-3xl p-3.5 border border-slate-100 dark:border-slate-800 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center space-y-3 cursor-pointer relative"
              >
                <span className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-[10px] font-black border border-emerald-200 dark:border-emerald-800">
                  ⭐ {item.rating}
                </span>

                <div className="w-20 h-20 relative flex items-center justify-center pt-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://images.unsplash.com/photo-1543208541-0961a29a8c3d?auto=format&fit=crop&w=200&q=80';
                    }}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
                  />
                </div>

                <div className="space-y-0.5">
                  <h3 className="text-xs font-extrabold text-slate-900 dark:text-white group-hover:text-emerald-600 transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-[10px] text-slate-400 block">{item.category}</span>
                </div>

                <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 group-hover:underline">
                  Compare with {foodA.name} →
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Searchable Food Selection Modal */}
      <FoodSelectModal
        isOpen={modalTarget !== null}
        onClose={() => setModalTarget(null)}
        title={`Select Food ${modalTarget || ''}`}
        currentFoodId={modalTarget === 'A' ? foodAId : foodBId}
        allFoods={allFoods}
        onSelect={(newFoodId) => {
          if (modalTarget === 'A') {
            updateComparison(newFoodId, foodBId);
          } else {
            updateComparison(foodAId, newFoodId);
          }
          setModalTarget(null);
        }}
      />
    </div>
  );
}

export default function CompareFoodsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
          <div className="text-sm font-bold text-slate-600 dark:text-slate-300 animate-pulse">
            Loading food comparison...
          </div>
        </div>
      }
    >
      <CompareFoodsContent />
    </Suspense>
  );
}
