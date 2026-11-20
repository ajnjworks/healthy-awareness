'use client';

import React, { useState } from 'react';
import { Share2, Heart, Check } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { StarRating } from '../ui/StarRating';
import { FoodItem } from '../../types/food';

interface FoodHeaderCardProps {
  food: FoodItem;
}

export const FoodHeaderCard: React.FC<FoodHeaderCardProps> = ({ food }) => {
  const [isSaved, setIsSaved] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Share/Save Actions */}
      <div className="flex items-center justify-end gap-2 text-xs sm:text-sm">
        <button
          onClick={handleShare}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5 text-slate-500" />}
          <span>{copied ? 'Copied!' : 'Share'}</span>
        </button>
        <button
          onClick={() => setIsSaved(!isSaved)}
          className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border text-xs font-semibold transition-colors cursor-pointer ${
            isSaved
              ? 'bg-rose-50 text-rose-600 border-rose-200 dark:bg-rose-950/50 dark:border-rose-900 dark:text-rose-400'
              : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800'
          }`}
        >
          <Heart className={`w-3.5 h-3.5 ${isSaved ? 'fill-rose-500 text-rose-500' : 'text-slate-500'}`} />
          <span>{isSaved ? 'Saved' : 'Save'}</span>
        </button>
      </div>

      {/* Main Header Content: Image + Details */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-center bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-7 border border-slate-100 dark:border-slate-800 shadow-sm w-full max-w-full overflow-hidden">
        {/* Left Food Image */}
        <div className="md:col-span-5 relative aspect-square w-full max-w-full rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-md group">
          <img
            src={food.image}
            alt={food.name}
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1543208541-0961a29a8c3d?auto=format&fit=crop&w=800&q=80';
            }}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Right Info */}
        <div className="md:col-span-7 space-y-4">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {food.name}
          </h1>

          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="superfood" size="md">
              {food.badge}
            </Badge>
            <StarRating rating={food.rating} reviewCount={food.reviewCount} showNumeric />
          </div>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
            {food.description}
          </p>

          {/* Quick Metadata Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
            <div className="bg-slate-50 dark:bg-slate-800/60 p-3 rounded-2xl border border-slate-100 dark:border-slate-700/60 space-y-0.5">
              <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Type</span>
              <p className="text-sm font-bold text-slate-900 dark:text-white">{food.type}</p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800/60 p-3 rounded-2xl border border-slate-100 dark:border-slate-700/60 space-y-0.5">
              <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Origin</span>
              <p className="text-sm font-bold text-slate-900 dark:text-white">{food.origin}</p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800/60 p-3 rounded-2xl border border-slate-100 dark:border-slate-700/60 space-y-0.5">
              <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Calories</span>
              <p className="text-sm font-bold text-slate-900 dark:text-white">{food.calories}</p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800/60 p-3 rounded-2xl border border-slate-100 dark:border-slate-700/60 space-y-0.5">
              <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Best For</span>
              <p className="text-sm font-bold text-slate-900 dark:text-white">{food.bestFor}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
