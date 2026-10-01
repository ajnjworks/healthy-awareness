'use client';

import React from 'react';
import { Clock, Flame, ChefHat, ArrowUpRight } from 'lucide-react';

import recipesRaw from '../../data/recipesData.json';

interface Recipe {
  id: string;
  title: string;
  category: string;
  prepTime: string;
  calories: string;
  difficulty: string;
  description: string;
  image: string;
  badgeColor: string;
}

interface RecipeSuggestionsSectionProps {
  foodName?: string;
  recipes?: Recipe[];
}

export const RecipeSuggestionsSection: React.FC<RecipeSuggestionsSectionProps> = ({
  foodName,
  recipes: customRecipes,
}) => {
  const recipes: Recipe[] = (customRecipes && customRecipes.length > 0) ? customRecipes : (recipesRaw as Recipe[]);
  const displayName = foodName || 'Healthy Foods';

  return (
    <section id="recipes" className="scroll-mt-24 bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 border border-slate-100 dark:border-slate-800 shadow-xs space-y-5 w-full flex flex-col justify-between">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300">
            <ChefHat className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight">
              Delicious Ways to Enjoy {displayName}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              Quick, nutritious, and easy recipes for your daily diet
            </p>
          </div>
        </div>
        <button
          onClick={() => alert('Viewing full healthy recipe catalog')}
          className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-0.5 cursor-pointer"
        >
          Explore All Recipes <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 3 Recipe Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {recipes.slice(0, 3).map((recipe) => (
          <div
            key={recipe.id}
            className="group bg-slate-50/70 dark:bg-slate-800/40 rounded-2xl p-3.5 border border-slate-100 dark:border-slate-700/60 hover:border-emerald-300 dark:hover:border-emerald-700 transition-all duration-300 flex flex-col justify-between space-y-3 cursor-pointer"
          >
            <div className="space-y-3">
              {/* Recipe Image Thumbnail */}
              <div className="relative h-36 w-full rounded-xl overflow-hidden shadow-xs">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1543208541-0961a29a8c3d?auto=format&fit=crop&w=400&q=80';
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className={`absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full text-[11px] font-bold shadow-xs ${recipe.badgeColor}`}>
                  {recipe.category}
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-1">
                <h4 className="text-sm font-extrabold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {recipe.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 font-medium line-clamp-2 leading-relaxed">
                  {recipe.description}
                </p>
              </div>
            </div>

            {/* Recipe Meta Info (Prep Time & Calories) */}
            <div className="pt-2 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between text-[11px] font-bold text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                {recipe.prepTime}
              </span>
              <span className="flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 text-amber-500" />
                {recipe.calories}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
