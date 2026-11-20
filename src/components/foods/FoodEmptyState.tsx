'use client';

import React from 'react';
import { Search, RotateCcw } from 'lucide-react';

interface FoodEmptyStateProps {
  searchQuery?: string;
  onReset: () => void;
  message?: string;
}

export const FoodEmptyState: React.FC<FoodEmptyStateProps> = ({
  searchQuery,
  onReset,
  message,
}) => {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 text-center border border-slate-100 dark:border-slate-800 shadow-xs space-y-4 w-full min-w-0">
      <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
        <Search className="w-7 h-7" />
      </div>
      <div className="space-y-1">
        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
          No foods found
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
          {message
            ? message
            : searchQuery
            ? `We couldn't find any foods matching "${searchQuery}". Try another keyword or reset active filters.`
            : 'No foods match your selected filters. Try clearing some filters to see more results.'}
        </p>
      </div>
      <button
        type="button"
        onClick={onReset}
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 transition-colors cursor-pointer"
      >
        <RotateCcw className="w-3.5 h-3.5" />
        <span>Reset Search &amp; Filters</span>
      </button>
    </div>
  );
};
