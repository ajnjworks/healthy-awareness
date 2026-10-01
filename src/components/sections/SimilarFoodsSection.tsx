import React from 'react';
import { Star, ChevronRight, ChevronLeft } from 'lucide-react';

interface SimilarFood {
  id: string;
  name: string;
  rating: number;
  image: string;
}

interface SimilarFoodsSectionProps {
  foods: SimilarFood[];
  onSelectFood: (foodId: string) => void;
}

export const SimilarFoodsSection: React.FC<SimilarFoodsSectionProps> = ({
  foods,
  onSelectFood,
}) => {
  return (
    <section className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 border border-slate-100 dark:border-slate-800 shadow-xs space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight">
          Similar Foods You May Like
        </h3>
        <div className="flex items-center gap-2">
          <button
            onClick={() => alert('Viewing all similar foods')}
            className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-0.5 cursor-pointer mr-1"
          >
            View all
          </button>
        </div>
      </div>

      {/* Grid of Similar Foods */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4 relative">
        {foods.map((food) => (
          <div
            key={food.id}
            onClick={() => onSelectFood(food.id)}
            className="group p-3 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 hover:bg-white dark:hover:bg-slate-800 hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col items-center text-center space-y-2"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shadow-xs border border-slate-100 dark:border-slate-700 group-hover:scale-105 transition-transform duration-300">
              <img
                src={food.image}
                alt={food.name}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-sm font-bold text-slate-900 dark:text-white">{food.name}</span>
            <div className="flex items-center gap-1 text-amber-400 text-xs font-bold">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span>{food.rating.toFixed(1)}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
