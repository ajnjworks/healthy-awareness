'use client';

import React, { useState } from 'react';
import { Heart, Droplets, Sun, Sparkles, Leaf, Zap, Milk, Wheat, HeartPulse } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { FruitProduct } from '../../data/fruitsData';

interface FoodCardProps {
  item: FruitProduct;
  onSelectItem?: (itemId: string) => void;
  viewMode?: 'grid' | 'list';
}

export const FoodCard: React.FC<FoodCardProps> = ({ item, onSelectItem, viewMode = 'grid' }) => {
  const router = useRouter();
  const [isFavorite, setIsFavorite] = useState(false);

  const handleCardClick = () => {
    if (onSelectItem) {
      onSelectItem(item.id);
    } else {
      router.push(`/foods/${item.id}`);
    }
  };

  const getNutrientIcon = (iconName: string) => {
    switch (iconName) {
      case 'Droplets':
      case 'Water':
        return <Droplets className="w-3.5 h-3.5 text-sky-500 fill-sky-400" />;
      case 'Sun':
      case 'Lemon':
        return <Sun className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />;
      case 'Sparkles':
        return <Sparkles className="w-3.5 h-3.5 text-purple-500 fill-purple-400" />;
      case 'Leaf':
        return <Leaf className="w-3.5 h-3.5 text-emerald-500 fill-emerald-400" />;
      case 'Zap':
        return <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />;
      case 'Milk':
        return <Milk className="w-3.5 h-3.5 text-indigo-500" />;
      case 'Wheat':
        return <Wheat className="w-3.5 h-3.5 text-amber-600" />;
      case 'HeartPulse':
      case 'Heart':
        return <HeartPulse className="w-3.5 h-3.5 text-rose-500" />;
      default:
        return <Droplets className="w-3.5 h-3.5 text-emerald-500" />;
    }
  };

  if (viewMode === 'list') {
    return (
      <div
        onClick={handleCardClick}
        className="group bg-white dark:bg-slate-900 rounded-3xl p-4 border border-slate-100 dark:border-slate-800 shadow-xs hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 cursor-pointer"
      >
        {/* Left Thumbnail & Info */}
        <div className="flex items-center gap-4 min-w-0">
          <div className="relative w-24 h-24 rounded-2xl overflow-hidden bg-slate-50 dark:bg-slate-800 shrink-0">
            <img
              src={item.image}
              alt={item.name}
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=500&q=80';
              }}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="space-y-1.5 min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="text-base font-extrabold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                {item.name}
              </h3>
              <span className="px-2 py-0.5 rounded-lg bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 text-[11px] font-extrabold">
                {item.score.toFixed(1)} Rating
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
              {item.subtitle}
            </p>
            {/* Nutrient Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-0.5">
              {(item.nutrients || []).map((nut, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60 text-[11px] font-bold text-slate-700 dark:text-slate-300"
                >
                  {getNutrientIcon(nut.icon)}
                  <span>{nut.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Favorite Heart Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsFavorite(!isFavorite);
          }}
          aria-label="Toggle favorite"
          className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:scale-110 transition-transform cursor-pointer shrink-0 self-end sm:self-center"
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              isFavorite ? 'fill-rose-500 text-rose-500' : 'text-slate-500'
            }`}
          />
        </button>
      </div>
    );
  }

  return (
    <div
      onClick={handleCardClick}
      className="group bg-white dark:bg-slate-900 rounded-3xl p-3.5 border border-slate-100 dark:border-slate-800 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full space-y-3 cursor-pointer"
    >
      {/* Top Image Container - Fixed Aspect Ratio & Exact Height */}
      <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden bg-slate-50 dark:bg-slate-800 shrink-0">
        <img
          src={item.image}
          alt={item.name}
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=500&q=80';
          }}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Favorite Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsFavorite(!isFavorite);
          }}
          aria-label="Toggle favorite"
          className="absolute top-2.5 left-2.5 w-8 h-8 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md flex items-center justify-center text-slate-600 dark:text-slate-300 hover:scale-110 transition-transform shadow-xs cursor-pointer"
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              isFavorite ? 'fill-rose-500 text-rose-500' : 'text-slate-500'
            }`}
          />
        </button>

        {/* Rating Score Badge */}
        <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-xl bg-emerald-600 text-white font-extrabold text-xs shadow-xs flex items-center gap-1">
          <span>{item.score.toFixed(1)}</span>
        </div>
      </div>

      {/* Content Details - Fixed Text Height for Horizontal Title Alignment */}
      <div className="flex-1 flex flex-col justify-start space-y-1 px-1">
        <h3 className="text-base font-extrabold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-1 leading-snug">
          {item.name}
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 font-medium line-clamp-2 leading-relaxed h-9">
          {item.subtitle}
        </p>
      </div>

      {/* Nutrient Tag Chips - Fixed Bottom Baseline */}
      <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-800/80 px-1 shrink-0">
        {(item.nutrients || []).map((nut, idx) => (
          <div
            key={idx}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60 text-[11px] font-bold text-slate-700 dark:text-slate-300"
          >
            {getNutrientIcon(nut.icon)}
            <span>{nut.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
