'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Share2, Heart, Camera, ChevronRight, Check } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { StarRating } from '../ui/StarRating';
import { FoodItem } from '../../types/food';

import i18n from '../../data/i18n/en.json';

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

  const getCategoryUrl = (cat: string) => {
    const c = (cat || '').toLowerCase();
    if (c.includes('snack') || c.includes('package')) return '/healthy-foods/snacks';
    if (c.includes('spice') || c.includes('herb')) return '/healthy-foods/spices';
    if (c.includes('breakfast')) return '/healthy-foods/breakfast';
    if (c.includes('dairy') || c.includes('milk')) return '/healthy-foods/dairy';
    if (c.includes('millet')) return '/healthy-foods/millets';
    if (c.includes('pulse') || c.includes('dal') || c.includes('legume')) return '/healthy-foods/pulses';
    if (c === 'seeds' || c.includes('seed')) return '/healthy-foods/seeds';
    if (c.includes('sweetener') || c.includes('sugar')) return '/healthy-foods/sweeteners';
    if (c.includes('bake') || c.includes('bread') || c.includes('bakery')) return '/healthy-foods/bakery';
    if (c.includes('beverage') || c.includes('drink')) return '/healthy-foods/beverages';
    if (c.includes('oil') || c.includes('fat')) return '/healthy-foods/cooking-oils';
    if (c.includes('grain') || c.includes('cereal') || c.includes('flour') || c.includes('rice')) return '/healthy-foods/grains-cereals';
    if (c.includes('fish') || c.includes('seafood')) return '/healthy-foods/fishes';
    if (c.includes('meat') || c.includes('poultry')) return '/healthy-foods/meats';
    if (c.includes('egg')) return '/healthy-foods/eggs';
    if (c.includes('veg')) return '/healthy-foods/vegetables';
    if (c.includes('groc')) return '/healthy-foods/groceries';
    if (c.includes('nut')) return '/healthy-foods/nuts-seeds';
    return '/healthy-foods/fruits';
  };

  return (
    <div className="space-y-6">
      {/* Breadcrumbs & Share/Save Actions */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
        <nav aria-label="Breadcrumb navigation" className="flex items-center gap-1.5 font-medium text-slate-500 dark:text-slate-400">
          <Link href="/" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
            {i18n.breadcrumb.home}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/healthy-foods" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
            {i18n.breadcrumb.healthyFoods}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href={getCategoryUrl(food.category)} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
            {food.category || 'Fruits'}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-bold text-slate-900 dark:text-white truncate">{food.name}</span>
        </nav>

        <div className="flex items-center gap-2">
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
      </div>

      {/* Main Header Content: Image + Details */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-center bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-7 border border-slate-100 dark:border-slate-800 shadow-sm">
        {/* Left Food Image with Gallery overlay */}
        <div className="md:col-span-5 relative aspect-square rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-md group">
          <img
            src={food.image}
            alt={food.name}
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1543208541-0961a29a8c3d?auto=format&fit=crop&w=800&q=80';
            }}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <button
            onClick={() => alert('Opening photo gallery preview')}
            className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-md hover:bg-white transition-colors cursor-pointer"
          >
            <Camera className="w-3.5 h-3.5 text-emerald-600" />
            <span>View Gallery</span>
          </button>
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
