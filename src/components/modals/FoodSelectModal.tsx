'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import { X, Search, Check, Star, Filter } from 'lucide-react';

export interface FoodSelectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (foodId: string) => void;
  title: string;
  currentFoodId?: string;
  allFoods: Array<{
    id: string;
    name: string;
    category: string;
    image: string;
    calories: string;
    rating: number;
  }>;
}

export const FoodSelectModal: React.FC<FoodSelectModalProps> = ({
  isOpen,
  onClose,
  onSelect,
  title,
  currentFoodId,
  allFoods,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const inputRef = useRef<HTMLInputElement>(null);

  // Extract unique categories
  const categories = useMemo(() => {
    const set = new Set<string>();
    allFoods.forEach((f) => {
      if (f.category) set.add(f.category);
    });
    return ['All', ...Array.from(set).sort()];
  }, [allFoods]);

  // Filter foods by query and category
  const filteredFoods = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return allFoods.filter((food) => {
      const matchesCategory = selectedCategory === 'All' || food.category === selectedCategory;
      const matchesQuery =
        !q ||
        food.name.toLowerCase().includes(q) ||
        food.category.toLowerCase().includes(q) ||
        food.id.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [allFoods, searchQuery, selectedCategory]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus input on open
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/75 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-slate-900 w-full max-w-2xl max-h-[85vh] rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden animate-scale-in"
      >
        {/* Header */}
        <div className="px-5 sm:px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/80 dark:bg-slate-800/50">
          <div>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
              {title}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Select from {allFoods.length} verified foods in our healthy catalog
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close food selection"
            className="p-2 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Bar & Category Filter Bar */}
        <div className="p-4 border-b border-slate-100 dark:border-slate-800 space-y-3 bg-white dark:bg-slate-900">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              ref={inputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search food by name (e.g. pecans, chia, spinach, salmon)..."
              className="w-full pl-10 pr-9 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/80 dark:bg-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 font-medium"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer p-0.5"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Category Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5 text-[11px] font-bold">
            {categories.slice(0, 10).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-full whitespace-nowrap transition-colors cursor-pointer shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Food Items Grid / List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5">
          {filteredFoods.length === 0 ? (
            <div className="text-center py-12 space-y-2">
              <p className="text-sm font-bold text-slate-700 dark:text-slate-300">
                No matching foods found for &quot;{searchQuery}&quot;
              </p>
              <p className="text-xs text-slate-500">
                Try searching for general terms like &quot;nuts&quot;, &quot;berry&quot;, &quot;leafy&quot;, or clear filters.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="mt-2 px-4 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 text-xs font-bold hover:underline"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {filteredFoods.map((food) => {
                const isSelected = currentFoodId === food.id;
                return (
                  <button
                    key={food.id}
                    onClick={() => {
                      onSelect(food.id);
                      onClose();
                    }}
                    className={`flex items-center gap-3 p-2.5 rounded-2xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-emerald-50/80 dark:bg-emerald-950/60 border-emerald-500 ring-1 ring-emerald-500'
                        : 'bg-slate-50/50 dark:bg-slate-800/40 border-slate-200/80 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-slate-300'
                    }`}
                  >
                    <div className="w-12 h-12 rounded-xl overflow-hidden bg-white dark:bg-slate-700 shrink-0 border border-slate-100 dark:border-slate-700">
                      <img
                        src={food.image}
                        alt={food.name}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            'https://images.unsplash.com/photo-1543208541-0961a29a8c3d?auto=format&fit=crop&w=200&q=80';
                        }}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white truncate">
                          {food.name}
                        </h4>
                        {isSelected && <Check className="w-4 h-4 text-emerald-600 shrink-0" />}
                      </div>
                      <div className="flex items-center gap-2 text-[10px] text-slate-500 dark:text-slate-400 font-medium">
                        <span className="truncate">{food.category}</span>
                        <span>•</span>
                        <span className="flex items-center gap-0.5 text-amber-500 font-bold">
                          <Star className="w-2.5 h-2.5 fill-amber-500" />
                          {food.rating}
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
