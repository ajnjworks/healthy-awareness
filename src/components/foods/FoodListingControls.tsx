'use client';

import React from 'react';
import { Search, X, SlidersHorizontal, LayoutGrid, List, ChevronDown } from 'lucide-react';
import i18n from '../../data/i18n/en.json';

export function matchesFoodSearch(item: any, searchQuery: string): boolean {
  if (!searchQuery || searchQuery.trim() === '') return true;
  const q = searchQuery.toLowerCase().trim();
  const nameMatch = (item.name || '').toLowerCase().includes(q);
  const subMatch = (item.subtitle || '').toLowerCase().includes(q);
  const catMatch = (item.category || '').toLowerCase().includes(q);
  const botMatch = (item.botanicalName || '').toLowerCase().includes(q);
  const nutrientMatch = (item.nutrients || []).some((n: any) => {
    if (typeof n === 'string') return n.toLowerCase().includes(q);
    return (n?.label || '').toLowerCase().includes(q);
  });
  const benefitMatch = (item.benefits || []).some((b: any) => {
    if (typeof b === 'string') return b.toLowerCase().includes(q);
    return (b?.name || b?.id || '').toLowerCase().includes(q);
  });
  return nameMatch || subMatch || catMatch || botMatch || nutrientMatch || benefitMatch;
}

interface FoodListingControlsProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  placeholder?: string;
  totalItems: number;
  visibleCount: number;
  sortBy: string;
  onSortChange: (sort: string) => void;
  viewMode: 'grid' | 'list';
  onViewModeChange: (mode: 'grid' | 'list') => void;
}

export const FoodListingControls: React.FC<FoodListingControlsProps> = ({
  searchQuery,
  onSearchChange,
  placeholder = 'Search in this category...',
  totalItems,
  visibleCount,
  sortBy,
  onSortChange,
  viewMode,
  onViewModeChange,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 bg-white dark:bg-slate-900 p-3 sm:p-3.5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-xs w-full min-w-0 max-w-full">
      {/* Search Input */}
      <div className="relative flex-1 min-w-0 w-full md:max-w-xs lg:max-w-sm xl:max-w-md">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={placeholder}
          aria-label={placeholder}
          className="w-full pl-9 pr-8 py-2 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700 text-xs sm:text-sm font-medium text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            aria-label="Clear search"
            type="button"
            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1 rounded-full cursor-pointer transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Right Controls: Count, Sort Dropdown & View Mode Switcher */}
      <div className="flex items-center justify-between md:justify-end gap-2 sm:gap-3 flex-wrap min-w-0">
        <span className="text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-300 whitespace-nowrap">
          {totalItems === 0
            ? '0 items'
            : `${i18n.listing.showingPrefix} 1-${Math.min(visibleCount, totalItems)} ${i18n.listing.of} ${totalItems} ${i18n.listing.items}`}
        </span>

        {/* Sort Dropdown */}
        <div className="relative inline-flex items-center gap-1.5 sm:gap-2 text-xs font-bold text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 pl-2.5 sm:pl-3 pr-2 py-1.5 rounded-xl border border-slate-200/80 dark:border-slate-700">
          <SlidersHorizontal className="w-3.5 h-3.5 text-slate-500 shrink-0" />
          <span className="hidden xs:inline">{i18n.listing.sortBy}</span>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            aria-label="Sort products"
            className="appearance-none bg-transparent font-extrabold text-slate-900 dark:text-white cursor-pointer focus:outline-none text-xs pr-4"
          >
            <option value="popular" className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white">Popular</option>
            <option value="rating" className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white">Highest Rated</option>
            <option value="name" className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white">Name A-Z</option>
          </select>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        {/* View Switchers */}
        <div className="flex items-center gap-1 bg-slate-50 dark:bg-slate-800 p-1 rounded-xl border border-slate-200/80 dark:border-slate-700">
          <button
            type="button"
            onClick={() => onViewModeChange('grid')}
            aria-label="Switch to Grid View"
            aria-pressed={viewMode === 'grid'}
            className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
              viewMode === 'grid'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <LayoutGrid className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => onViewModeChange('list')}
            aria-label="Switch to List View"
            aria-pressed={viewMode === 'list'}
            className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
              viewMode === 'list'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <List className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
