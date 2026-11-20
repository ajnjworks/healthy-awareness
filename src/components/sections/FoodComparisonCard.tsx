'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { FoodComparison } from '../../types/food';
import i18n from '../../data/i18n/en.json';

interface FoodComparisonCardProps {
  target: FoodComparison;
  competitor: FoodComparison;
}

const defaultTarget: FoodComparison = {
  id: 'target',
  name: 'Current Food',
  serving: 'Per 100g',
  image: 'https://images.unsplash.com/photo-1543208541-0961a29a8c3d?auto=format&fit=crop&w=300&q=80',
  calories: 52,
  protein: '0.3 g',
  fiber: '2.4 g',
  omega3: 'Low',
  bestFor: 'Daily Nutrition',
};

const defaultCompetitor: FoodComparison = {
  id: 'competitor',
  name: 'Comparison Food',
  serving: 'Per 100g',
  image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=300&q=80',
  calories: 60,
  protein: '3.2 g',
  fiber: '0.0 g',
  omega3: 'Low',
  bestFor: 'Bone Health',
};

// Distinct fallback benchmarks if target and competitor ever collide
const FALLBACK_BENCHMARKS: Record<string, FoodComparison> = {
  walnuts: {
    id: 'walnuts',
    name: 'Walnuts',
    serving: 'Per 100g raw',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=300&q=80',
    calories: 654,
    protein: '15.2 g',
    fiber: '6.7 g',
    omega3: 'Very High',
    bestFor: 'Brain & Cardiovascular Vitality',
  },
  almonds: {
    id: 'almonds',
    name: 'Almonds',
    serving: 'Per 100g raw',
    image: 'https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&w=300&q=80',
    calories: 579,
    protein: '21.2 g',
    fiber: '12.5 g',
    omega3: 'Vitamin E Rich',
    bestFor: 'Daily Wellness & Nutrition',
  },
  spinach: {
    id: 'spinach',
    name: 'Spinach',
    serving: 'Per 100g raw',
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=300&q=80',
    calories: 23,
    protein: '2.9 g',
    fiber: '2.2 g',
    omega3: 'Moderate',
    bestFor: 'Iron & Immune Defense',
  },
  salmon: {
    id: 'salmon',
    name: 'Salmon',
    serving: 'Per 100g raw',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=300&q=80',
    calories: 208,
    protein: '20.4 g',
    fiber: '0 g',
    omega3: 'Very High',
    bestFor: 'Omega-3 EPA/DHA & Lean Protein',
  },
  oats: {
    id: 'oats',
    name: 'Oats',
    serving: 'Per 100g',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=300&q=80',
    calories: 389,
    protein: '16.9 g',
    fiber: '10.6 g',
    omega3: 'Moderate',
    bestFor: 'Beta-Glucan Fiber & Satiety',
  },
};

export const FoodComparisonCard: React.FC<FoodComparisonCardProps> = ({
  target,
  competitor,
}) => {
  const t = { ...defaultTarget, ...target };
  let comp = { ...defaultCompetitor, ...competitor };

  // Safety check: ensure target and competitor are never identical
  const tName = (t.name || '').toLowerCase().trim();
  const compName = (comp.name || '').toLowerCase().trim();

  if (t.id === comp.id || tName === compName) {
    if (tName.includes('almond')) {
      comp = FALLBACK_BENCHMARKS.walnuts;
    } else if (tName.includes('broccoli')) {
      comp = FALLBACK_BENCHMARKS.spinach;
    } else if (tName.includes('chicken') || tName.includes('meat') || tName.includes('fish')) {
      comp = FALLBACK_BENCHMARKS.salmon;
    } else if (tName.includes('bread') || tName.includes('grain')) {
      comp = FALLBACK_BENCHMARKS.oats;
    } else {
      comp = FALLBACK_BENCHMARKS.walnuts;
    }
  }

  return (
    <section id="compare" className="scroll-mt-24 bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 border border-slate-100 dark:border-slate-800 shadow-xs space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight">
          {i18n.comparison.title}
        </h3>
        <Link
          href={`/compare-foods?foodA=${t.id || 'almonds'}&foodB=${comp.id || 'walnuts'}`}
          className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-0.5 cursor-pointer"
        >
          View all <ChevronRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Side by side food header with VS badge aligned with table columns below */}
      <div className="relative grid grid-cols-12 gap-2 items-center bg-amber-50/70 dark:bg-amber-950/30 p-4 rounded-2xl border border-amber-100 dark:border-amber-900/40 text-center">
        {/* Left Spacer / Label */}
        <div className="col-span-4 text-left pl-1 hidden sm:block">
          <span className="text-xs font-bold text-amber-800/60 dark:text-amber-300/60 uppercase tracking-wider">{i18n.comparison.title}</span>
        </div>

        {/* Target Food - Column 5 to 8 */}
        <div className="col-span-6 sm:col-span-4 flex flex-col items-center space-y-1">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-emerald-500 shadow-xs">
            <img
              src={t.image}
              alt={t.name}
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1543208541-0961a29a8c3d?auto=format&fit=crop&w=300&q=80';
              }}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-sm font-extrabold text-slate-900 dark:text-white">{t.name}</span>
          <span className="text-[11px] font-semibold text-slate-500">{t.serving}</span>
        </div>

        {/* VS Badge Floating Centered Between Target and Competitor Foods */}
        <div className="absolute left-1/2 sm:left-[66.666%] top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-600 text-white font-black text-[10px] sm:text-xs flex items-center justify-center shadow-md border-2 border-white dark:border-slate-900">
            {i18n.comparison.vs}
          </div>
        </div>

        {/* Competitor Food - Column 9 to 12 */}
        <div className="col-span-6 sm:col-span-4 flex flex-col items-center space-y-1">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-amber-400 shadow-xs">
            <img
              src={comp.image}
              alt={comp.name}
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=300&q=80';
              }}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-sm font-extrabold text-slate-900 dark:text-white">{comp.name}</span>
          <span className="text-[11px] font-semibold text-slate-500">{comp.serving}</span>
        </div>
      </div>

      {/* Comparison Attribute Table */}
      <div className="space-y-1.5 text-xs sm:text-sm font-medium pt-1">
        <div className="grid grid-cols-12 py-2 border-b border-slate-100 dark:border-slate-800/80 items-center">
          <span className="col-span-4 text-slate-500 font-semibold">{i18n.comparison.calories}</span>
          <span className="col-span-4 font-extrabold text-center text-slate-900 dark:text-white">{t.calories} kcal</span>
          <span className="col-span-4 font-bold text-center text-slate-600 dark:text-slate-300">{comp.calories} kcal</span>
        </div>

        <div className="grid grid-cols-12 py-2 border-b border-slate-100 dark:border-slate-800/80 items-center">
          <span className="col-span-4 text-slate-500 font-semibold">{i18n.comparison.protein}</span>
          <span className="col-span-4 font-extrabold text-center text-slate-900 dark:text-white">{t.protein}</span>
          <span className="col-span-4 font-bold text-center text-slate-600 dark:text-slate-300">{comp.protein}</span>
        </div>

        <div className="grid grid-cols-12 py-2 border-b border-slate-100 dark:border-slate-800/80 items-center">
          <span className="col-span-4 text-slate-500 font-semibold">{i18n.comparison.fiber}</span>
          <span className="col-span-4 font-extrabold text-center text-slate-900 dark:text-white">{t.fiber}</span>
          <span className="col-span-4 font-bold text-center text-slate-600 dark:text-slate-300">{comp.fiber}</span>
        </div>

        <div className="grid grid-cols-12 py-2 border-b border-slate-100 dark:border-slate-800/80 items-center">
          <span className="col-span-4 text-slate-500 font-semibold">{i18n.comparison.omega3}</span>
          <span className="col-span-4 font-extrabold text-center text-slate-900 dark:text-white">{t.omega3}</span>
          <span className="col-span-4 font-bold text-center text-slate-600 dark:text-slate-300">{comp.omega3}</span>
        </div>

        <div className="grid grid-cols-12 py-2 items-center">
          <span className="col-span-4 text-slate-500 font-semibold">{i18n.comparison.bestFor}</span>
          <span className="col-span-4 font-extrabold text-center text-slate-900 dark:text-white">{t.bestFor}</span>
          <span className="col-span-4 font-bold text-center text-slate-600 dark:text-slate-300">{comp.bestFor}</span>
        </div>
      </div>
    </section>
  );
};
