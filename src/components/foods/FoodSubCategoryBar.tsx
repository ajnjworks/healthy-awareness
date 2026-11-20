'use client';

import React from 'react';
import Link from 'next/link';
import { BookOpen, ChevronRight } from 'lucide-react';
import { FRUIT_SUB_CATEGORIES, FruitSubCategory } from '../../data/fruitsData';

interface FoodSubCategoryBarProps {
  selectedSubCat: string;
  onSelectSubCat: (subCatId: string) => void;
  guideTitle?: string;
  guideHref?: string;
  subCategories?: FruitSubCategory[];
}

export function getGuideArticleSlug(title: string): string {
  const map: Record<string, string> = {
    'How to Eat Fruits': 'how-to-eat-fruits',
    'Vegetable Cooking Guide': 'vegetable-cooking-guide',
    'Nuts Soaking & Intake Guide': 'nuts-soaking-intake-guide',
    'Healthy Eggs Guide': 'healthy-eggs-guide',
    'Healthy Seafood Guide': 'healthy-seafood-guide',
    'Healthy Meats Guide': 'healthy-meats-guide',
    'Plant Protein Guide': 'plant-protein-guide',
    'Ancient Millets Guide': 'ancient-millets-guide',
    'Staple Grains & Cereals Guide': 'staple-grains-cereals-guide',
    'Healing Spices Guide': 'healing-spices-guide',
    'Pantry Storage Guide': 'pantry-storage-guide',
    'Morning Fuel Guide': 'clean-eating-schedule',
    'Dairy Nutrition Guide': 'calcium-rich-foods',
    'Healthy Cooking Oils Guide': 'foods-that-support-healthy-heart',
    'Mindful Beverages Guide': 'herbal-teas-immunity',
    'Artisanal Breads Guide': 'staple-grains-cereals-guide',
    'Super Seeds Guide': '12-nuts-seeds',
    'Smart Healthy Snacking Guide': 'clean-eating-schedule',
    'Mindful Sweeteners Guide': 'diabetes-management-foods',
  };
  return map[title] || title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export const FoodSubCategoryBar: React.FC<FoodSubCategoryBarProps> = ({
  selectedSubCat,
  onSelectSubCat,
  guideTitle = 'How to Eat Fruits',
  guideHref,
  subCategories = FRUIT_SUB_CATEGORIES,
}) => {
  const articleHref = guideHref || `/articles/${getGuideArticleSlug(guideTitle)}`;

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 py-2 w-full max-w-full min-w-0">
      {/* Sub-Category Pills */}
      <div role="tablist" aria-label="Sub-category filters" className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto no-scrollbar py-1 flex-1 min-w-0 max-w-full">
        {subCategories.map((cat) => {
          const isSelected = selectedSubCat === cat.id;
          return (
            <button
              key={cat.id}
              role="tab"
              aria-selected={isSelected}
              aria-label={`Filter by ${cat.name}`}
              onClick={() => onSelectSubCat(cat.id)}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 shrink-0 cursor-pointer ${
                isSelected
                  ? 'bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border-2 border-emerald-500 shadow-xs'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              <div className="w-6 h-6 rounded-full overflow-hidden shrink-0 border border-slate-100 dark:border-slate-800">
                <img
                  src={cat.image}
                  alt=""
                  aria-hidden="true"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=200&q=80';
                  }}
                  className="w-full h-full object-cover"
                />
              </div>
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>

      {/* Right Action Button -> Navigates to Article Page */}
      <Link
        href={articleHref}
        className="flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold text-emerald-700 dark:text-emerald-300 bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-800/80 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:border-emerald-400 dark:hover:border-emerald-600 transition-all shrink-0 shadow-xs cursor-pointer self-start md:self-auto group"
      >
        <BookOpen className="w-4 h-4 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform" />
        <span>{guideTitle}</span>
        <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
      </Link>
    </div>
  );
};
