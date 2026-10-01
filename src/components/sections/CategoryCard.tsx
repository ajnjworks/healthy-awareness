import React from 'react';
import { FoodCategory } from '../../types/food';

interface CategoryCardProps {
  category: FoodCategory;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  category,
  isSelected,
  onSelect,
}) => {
  return (
    <button
      onClick={() => onSelect(category.id)}
      className={`flex flex-col items-center justify-center pt-3 pb-2.5 px-3 sm:pt-3.5 sm:pb-3 sm:px-3.5 rounded-2xl transition-all duration-300 group cursor-pointer w-full text-center ${
        isSelected
          ? 'bg-emerald-50 dark:bg-emerald-950/60 border-2 border-emerald-400 dark:border-emerald-500 shadow-xs'
          : 'bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700 shadow-xs hover:shadow-sm'
      }`}
    >
      <div className="relative w-12 h-12 sm:w-14 sm:h-14 mb-1.5 rounded-xl overflow-hidden shrink-0 group-hover:scale-105 transition-transform duration-300">
        <img
          src={category.image}
          alt={category.name}
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1543208541-0961a29a8c3d?auto=format&fit=crop&w=300&q=80';
          }}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <span
        className={`text-xs sm:text-sm font-bold tracking-tight leading-snug transition-colors ${
          isSelected
            ? 'text-emerald-700 dark:text-emerald-300'
            : 'text-slate-900 dark:text-slate-100 group-hover:text-emerald-600'
        }`}
      >
        {category.name}
      </span>
    </button>
  );
};
