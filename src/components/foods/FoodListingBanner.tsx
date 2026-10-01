'use client';

import React from 'react';
import Link from 'next/link';
import { Apple, Award, ShieldCheck, Sparkles, ChevronRight } from 'lucide-react';

import i18n from '../../data/i18n/en.json';

interface FoodListingBannerProps {
  categoryTitle?: string;
  categoryDescription?: string;
  itemCountText?: string;
}

export const FoodListingBanner: React.FC<FoodListingBannerProps> = ({
  categoryTitle = 'Fruits',
  categoryDescription = "Nature's sweetest gifts! Packed with vitamins, minerals, antioxidants and fiber for a healthier you.",
  itemCountText = '30+ Fruits',
}) => {
  return (
    <section className="bg-gradient-to-r from-emerald-50/60 via-slate-50 to-amber-50/40 dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-900 rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-100 dark:border-slate-800 shadow-xs relative overflow-hidden">
      {/* Background Hero Graphic */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 lg:w-5/12 hidden md:block pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=1000&q=80"
          alt="Category basket"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1546548970-71785318a17b?auto=format&fit=crop&w=1000&q=80';
          }}
          className="w-full h-full object-cover object-left opacity-90 dark:opacity-40"
        />
      </div>

      <div className="relative z-10 max-w-2xl space-y-6">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb navigation" className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400">
          <Link href="/" className="hover:text-emerald-600 transition-colors">
            {i18n.breadcrumb.home}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/healthy-foods" className="hover:text-emerald-600 transition-colors">
            {i18n.breadcrumb.healthyFoods}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-emerald-600 dark:text-emerald-400 font-bold">{categoryTitle}</span>
        </nav>

        {/* Title & Icon Header */}
        <div className="flex items-start gap-4">
          <div className="p-3.5 rounded-2xl bg-emerald-600 text-white shadow-md shadow-emerald-600/20 shrink-0">
            <Apple className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              {categoryTitle}
            </h1>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-xl">
              {categoryDescription}
            </p>
          </div>
        </div>

        {/* 3 Stat Badges */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-xs">
            <div className="p-1.5 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-300">
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="text-xs">
              <span className="font-extrabold text-slate-900 dark:text-white">{itemCountText}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-xs">
            <div className="p-1.5 rounded-xl bg-amber-100 dark:bg-amber-950/80 text-amber-600 dark:text-amber-300">
              <Award className="w-4 h-4" />
            </div>
            <div className="text-xs font-bold text-slate-700 dark:text-slate-200">
              Research Based Information
            </div>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-xs">
            <div className="p-1.5 rounded-xl bg-sky-100 dark:bg-sky-950/80 text-sky-600 dark:text-sky-300">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div className="text-xs">
              <span className="font-extrabold text-slate-900 dark:text-white">100%</span>
              <span className="text-slate-500 dark:text-slate-400 ml-1 font-semibold">Reliable</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
