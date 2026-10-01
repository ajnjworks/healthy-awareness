'use client';

import React from 'react';
import { ChevronRight } from 'lucide-react';
import { FoodComparison } from '../../types/food';
import i18n from '../../data/i18n/en.json';

interface FoodComparisonCardProps {
  target: FoodComparison;
  competitor: FoodComparison;
}

export const FoodComparisonCard: React.FC<FoodComparisonCardProps> = ({
  target,
  competitor,
}) => {
  return (
    <section id="compare" className="scroll-mt-24 bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 border border-slate-100 dark:border-slate-800 shadow-xs space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight">
          {i18n.comparison.title}
        </h3>
        <button
          onClick={() => alert('Opening full comparison matrix')}
          className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-0.5 cursor-pointer"
        >
          View all <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Side by side food header with VS badge aligned with table columns below */}
      <div className="relative grid grid-cols-12 gap-2 items-center bg-amber-50/70 dark:bg-amber-950/30 p-4 rounded-2xl border border-amber-100 dark:border-amber-900/40 text-center">
        {/* Left Spacer / Label */}
        <div className="col-span-4 text-left pl-1 hidden sm:block">
          <span className="text-xs font-bold text-amber-800/60 dark:text-amber-300/60 uppercase tracking-wider">{i18n.comparison.title}</span>
        </div>

        {/* Target Food (Almonds) - Column 5 to 8 */}
        <div className="col-span-6 sm:col-span-4 flex flex-col items-center space-y-1">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-emerald-500 shadow-xs">
            <img
              src={target.image}
              alt={target.name}
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1543208541-0961a29a8c3d?auto=format&fit=crop&w=300&q=80';
              }}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-sm font-extrabold text-slate-900 dark:text-white">{target.name}</span>
          <span className="text-[11px] font-semibold text-slate-500">{target.serving}</span>
        </div>

        {/* VS Badge Floating Centered Between Target and Competitor Foods */}
        <div className="absolute left-1/2 sm:left-[66.666%] top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-600 text-white font-black text-[10px] sm:text-xs flex items-center justify-center shadow-md border-2 border-white dark:border-slate-900">
            {i18n.comparison.vs}
          </div>
        </div>

        {/* Competitor Food (Walnuts) - Column 9 to 12 */}
        <div className="col-span-6 sm:col-span-4 flex flex-col items-center space-y-1">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-amber-400 shadow-xs">
            <img
              src={competitor.image}
              alt={competitor.name}
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=300&q=80';
              }}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-sm font-extrabold text-slate-900 dark:text-white">{competitor.name}</span>
          <span className="text-[11px] font-semibold text-slate-500">{competitor.serving}</span>
        </div>
      </div>

      {/* Comparison Attribute Table */}
      <div className="space-y-1.5 text-xs sm:text-sm font-medium pt-1">
        <div className="grid grid-cols-12 py-2 border-b border-slate-100 dark:border-slate-800/80 items-center">
          <span className="col-span-4 text-slate-500 font-semibold">{i18n.comparison.calories}</span>
          <span className="col-span-4 font-extrabold text-center text-slate-900 dark:text-white">{target.calories} kcal</span>
          <span className="col-span-4 font-bold text-center text-slate-600 dark:text-slate-300">{competitor.calories} kcal</span>
        </div>

        <div className="grid grid-cols-12 py-2 border-b border-slate-100 dark:border-slate-800/80 items-center">
          <span className="col-span-4 text-slate-500 font-semibold">{i18n.comparison.protein}</span>
          <span className="col-span-4 font-extrabold text-center text-slate-900 dark:text-white">{target.protein}</span>
          <span className="col-span-4 font-bold text-center text-slate-600 dark:text-slate-300">{competitor.protein}</span>
        </div>

        <div className="grid grid-cols-12 py-2 border-b border-slate-100 dark:border-slate-800/80 items-center">
          <span className="col-span-4 text-slate-500 font-semibold">{i18n.comparison.fiber}</span>
          <span className="col-span-4 font-extrabold text-center text-slate-900 dark:text-white">{target.fiber}</span>
          <span className="col-span-4 font-bold text-center text-slate-600 dark:text-slate-300">{competitor.fiber}</span>
        </div>

        <div className="grid grid-cols-12 py-2 border-b border-slate-100 dark:border-slate-800/80 items-center">
          <span className="col-span-4 text-slate-500 font-semibold">{i18n.comparison.omega3}</span>
          <span className="col-span-4 font-extrabold text-center text-slate-900 dark:text-white">{target.omega3}</span>
          <span className="col-span-4 font-bold text-center text-slate-600 dark:text-slate-300">{competitor.omega3}</span>
        </div>

        <div className="grid grid-cols-12 py-2 items-center">
          <span className="col-span-4 text-slate-500 font-semibold">{i18n.comparison.bestFor}</span>
          <span className="col-span-4 font-extrabold text-center text-slate-900 dark:text-white">{target.bestFor}</span>
          <span className="col-span-4 font-bold text-center text-slate-600 dark:text-slate-300">{competitor.bestFor}</span>
        </div>
      </div>
    </section>
  );
};
