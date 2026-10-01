'use client';

import React from 'react';
import { Flame, Star, CheckCircle2, ArrowRight, Sparkles, ChevronRight } from 'lucide-react';
import { TRENDING_FOODS } from '../../data/foodsData';
import { TrendingCard } from './TrendingCard';
import { Button } from '../ui/Button';

import i18n from '../../data/i18n/en.json';

interface TrendingAndPickSectionProps {
  onSelectFood: (foodId: string) => void;
}

export const TrendingAndPickSection: React.FC<TrendingAndPickSectionProps> = ({ onSelectFood }) => {
  return (
    <section className="pt-1 pb-4 sm:pt-1.5 sm:pb-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Container: Trending Today */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 border border-slate-100 dark:border-slate-800/80 shadow-xs flex flex-col justify-between space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Flame className="w-5 h-5 text-orange-500 fill-orange-500" />
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                  {i18n.trending.title}
                </h2>
              </div>
              <button
                onClick={() => alert('Viewing all trending foods')}
                className="text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 flex items-center gap-0.5 cursor-pointer"
              >
                {i18n.trending.viewAll} <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* 5 Columns Grid for Trending Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3">
              {TRENDING_FOODS.map((item) => (
                <TrendingCard
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  badge={item.badge}
                  badgeType={item.badgeType}
                  views={item.views}
                  image={item.image}
                  onClick={onSelectFood}
                />
              ))}
            </div>
          </div>

          {/* Right Container: Daily Healthy Pick */}
          <div className="lg:col-span-5 bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 border border-slate-100 dark:border-slate-800/80 shadow-xs flex flex-col justify-between space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-500 fill-amber-500" />
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                {i18n.trending.dailyPick}
              </h2>
            </div>

            {/* Featured Daily Pick Card Layout */}
            <div className="grid grid-cols-12 gap-4 items-center flex-1">
              {/* Almonds Image Showcase */}
              <div className="col-span-5 relative aspect-square rounded-2xl overflow-hidden shadow-xs border border-slate-100 dark:border-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1543208541-0961a29a8c3d?auto=format&fit=crop&w=400&q=80"
                  alt="Almonds bowl"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=400&q=80';
                  }}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Details & Bullet Points */}
              <div className="col-span-7 space-y-3">
                <div className="space-y-1">
                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    Almonds
                  </h3>
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                </div>

                <ul className="space-y-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Supports Heart Health</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Brain Health</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Rich in Vitamin E</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Good Source of Protein</span>
                  </li>
                </ul>

                <div className="pt-1">
                  <Button
                    variant="primary"
                    onClick={() => onSelectFood('almonds')}
                    icon={<ArrowRight className="w-4 h-4 ml-1" />}
                    className="bg-emerald-600 hover:bg-emerald-700 font-bold text-xs px-4 py-2"
                  >
                    {i18n.trending.learnMore}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
