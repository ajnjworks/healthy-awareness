'use client';

import React, { useMemo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Lightbulb, ArrowRight, Sparkles } from 'lucide-react';
import {
  getFactsForCategory,
  getDailyFactIndex,
  normalizeCategoryKey,
  DidYouKnowFact,
} from '../../data/didYouKnowData';

interface DidYouKnowCardProps {
  category?: string;
  className?: string;
}

export const DidYouKnowCard: React.FC<DidYouKnowCardProps> = ({
  category: propCategory,
  className = '',
}) => {
  const pathname = usePathname() || '';

  // Resolve category key from prop or active URL pathname
  const resolvedCategory = useMemo(() => {
    if (propCategory) return normalizeCategoryKey(propCategory);
    return normalizeCategoryKey(pathname);
  }, [propCategory, pathname]);

  // Retrieve facts list for this category
  const facts: DidYouKnowFact[] = useMemo(() => {
    return getFactsForCategory(resolvedCategory);
  }, [resolvedCategory]);

  // Single deterministic daily fact based on day-of-year (changes each calendar day)
  const dailyFact = useMemo(() => {
    if (!facts || facts.length === 0) return null;
    const dailyIndex = getDailyFactIndex(facts.length);
    return facts[dailyIndex] || facts[0];
  }, [facts]);

  if (!dailyFact) return null;

  return (
    <div
      className={`bg-emerald-50/80 dark:bg-emerald-950/40 rounded-3xl p-5 border border-emerald-200/80 dark:border-emerald-800/60 space-y-3.5 shadow-xs transition-all relative overflow-hidden group ${className}`}
    >
      {/* Header: Clean "Did You Know?" Title */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-xl bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400 shrink-0">
            <Lightbulb className="w-4 h-4 fill-amber-400 dark:fill-amber-400" />
          </div>
          <h4 className="text-xs font-extrabold text-slate-900 dark:text-white">
            Did You Know?
          </h4>
        </div>

        {/* Subtle pill for featured food */}
        <span className="inline-flex items-center gap-1 text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-white dark:bg-slate-900 text-emerald-800 dark:text-emerald-300 border border-emerald-200/80 dark:border-emerald-800/80 shadow-2xs">
          <Sparkles className="w-2.5 h-2.5 text-emerald-600 dark:text-emerald-400" />
          {dailyFact.foodName}
        </span>
      </div>

      {/* Fact Text */}
      <p className="text-xs text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
        {dailyFact.fact}
      </p>

      {/* High-Resolution Food Image */}
      <div className="relative h-28 w-full rounded-2xl overflow-hidden border border-emerald-200/60 dark:border-emerald-800/60 shadow-xs group/img bg-slate-100 dark:bg-slate-800">
        <img
          src={dailyFact.image}
          alt={dailyFact.foodName}
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=400&q=80';
          }}
          className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
        />

        {/* Overlay Badges */}
        <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between pointer-events-none">
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-900/80 text-white backdrop-blur-xs">
            {dailyFact.badge}
          </span>
          {dailyFact.foodUrl && (
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-600/95 text-white backdrop-blur-xs flex items-center gap-1">
              Explore <ArrowRight className="w-2.5 h-2.5" />
            </span>
          )}
        </div>

        {dailyFact.foodUrl && (
          <Link
            href={dailyFact.foodUrl}
            className="absolute inset-0 z-10"
            aria-label={`Explore ${dailyFact.foodName}`}
          />
        )}
      </div>
    </div>
  );
};
