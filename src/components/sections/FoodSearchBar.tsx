'use client';

import React, { useState } from 'react';
import { Search, ArrowRight } from 'lucide-react';
import { POPULAR_TAGS } from '../../data/foodsData';

import i18n from '../../data/i18n/en.json';

interface FoodSearchBarProps {
  onSearch: (query: string) => void;
  activeQuery: string;
}

export const FoodSearchBar: React.FC<FoodSearchBarProps> = ({ onSearch, activeQuery }) => {
  const [inputVal, setInputVal] = useState(activeQuery);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(inputVal);
  };

  const handleTagClick = (tag: string) => {
    setInputVal(tag);
    onSearch(tag);
  };

  return (
    <div className="w-full space-y-3">
      {/* Search Input Container */}
      <form onSubmit={handleSubmit} className="relative flex items-center w-full max-w-xl">
        <div className="absolute left-4 text-slate-400 pointer-events-none">
          <Search className="w-5 h-5" />
        </div>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder={i18n.search.placeholder}
          className="w-full pl-12 pr-14 py-3.5 sm:py-4 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 text-sm sm:text-base font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition-all"
        />
        <button
          type="submit"
          aria-label={i18n.search.search}
          className="absolute right-2 p-2.5 sm:p-3 rounded-full bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white transition-all shadow-xs cursor-pointer"
        >
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </form>

      {/* Popular Chips */}
      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
        <span className="font-semibold text-slate-500 dark:text-slate-400 mr-1">{i18n.search.popularPrefix}</span>
        {POPULAR_TAGS.map((tag) => {
          const isSelected = activeQuery.toLowerCase() === tag.toLowerCase();
          return (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className={`px-3 py-1 rounded-full font-medium transition-all duration-200 cursor-pointer ${
                isSelected
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-white dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-slate-700/60 border border-slate-200 dark:border-slate-700'
              }`}
            >
              {tag}
            </button>
          );
        })}
      </div>
    </div>
  );
};
