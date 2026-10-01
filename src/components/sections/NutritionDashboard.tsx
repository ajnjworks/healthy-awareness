'use client';

import React from 'react';
import { ChevronRight } from 'lucide-react';
import { ProgressRing } from '../ui/ProgressRing';
import { NutritionRing, QuickNutrient } from '../../types/food';

import i18n from '../../data/i18n/en.json';

interface NutritionDashboardProps {
  nutritionRings: NutritionRing[];
  quickNutrients: QuickNutrient[];
}

export const NutritionDashboard: React.FC<NutritionDashboardProps> = ({
  nutritionRings,
  quickNutrients,
}) => {
  return (
    <section id="nutrition" className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 border border-slate-100 dark:border-slate-800 shadow-xs space-y-5 w-full flex flex-col justify-between">
      {/* Header & View Full Link */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight">
          {i18n.nutrition.title} <span className="text-xs font-normal text-slate-500">({i18n.nutrition.perServing})</span>
        </h2>
        <button
          onClick={() => alert('Viewing full detailed nutritional table')}
          className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-0.5 cursor-pointer"
        >
          View Full Nutrition <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 4 Circular Percentage Progress Gauges */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2 border-b border-slate-100 dark:border-slate-800 pb-5">
        {nutritionRings.map((ring, idx) => (
          <ProgressRing
            key={idx}
            percentage={ring.percentage}
            label={ring.label}
            amount={ring.amount}
            color={ring.color}
            size={98}
          />
        ))}
      </div>

      {/* Quick Nutrients Grid Pills */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
        {quickNutrients.map((item, idx) => (
          <div
            key={idx}
            className="bg-slate-50 dark:bg-slate-800/50 p-2.5 rounded-2xl border border-slate-100 dark:border-slate-700/60 flex flex-col items-center justify-center text-center space-y-0.5"
          >
            <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">{item.label}</span>
            <span className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">{item.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
