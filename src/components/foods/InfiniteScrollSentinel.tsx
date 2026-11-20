'use client';

import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { FoodCardSkeleton } from './FoodCardSkeleton';

interface InfiniteScrollSentinelProps {
  sentinelRef: React.RefObject<HTMLDivElement | null>;
  hasMore: boolean;
  totalItems: number;
  viewMode?: 'grid' | 'list';
  variant?: 'food' | 'recipe' | 'tip';
  count?: number;
  itemTypeLabel?: string;
}

export const InfiniteScrollSentinel: React.FC<InfiniteScrollSentinelProps> = ({
  sentinelRef,
  hasMore,
  totalItems,
  viewMode = 'grid',
  variant = 'food',
  count = 4,
  itemTypeLabel = 'items',
}) => {
  if (totalItems === 0) return null;

  return (
    <div className="w-full flex flex-col items-center justify-center">
      {hasMore ? (
        <div className="w-full space-y-4">
          {/* Ghost Loading Skeleton Cards */}
          {variant === 'food' && (
            <div
              className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 w-full'
                  : 'flex flex-col gap-3.5 w-full'
              }
            >
              {Array.from({ length: count }).map((_, idx) => (
                <FoodCardSkeleton key={idx} viewMode={viewMode} />
              ))}
            </div>
          )}

          {variant === 'recipe' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 w-full">
              {Array.from({ length: 3 }).map((_, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-900 rounded-3xl p-4 border border-slate-100 dark:border-slate-800 shadow-xs space-y-3 animate-pulse"
                >
                  <div className="aspect-16/10 rounded-2xl bg-slate-200 dark:bg-slate-800" />
                  <div className="space-y-1.5">
                    <div className="h-4 w-3/4 bg-slate-200 dark:bg-slate-800 rounded-md" />
                    <div className="h-3 w-1/2 bg-slate-100 dark:bg-slate-800/60 rounded" />
                  </div>
                  <div className="flex items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                    <div className="h-5 w-16 bg-slate-100 dark:bg-slate-800 rounded-md" />
                    <div className="h-5 w-16 bg-slate-100 dark:bg-slate-800 rounded-md" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {variant === 'tip' && (
            <div className="space-y-4 w-full">
              {Array.from({ length: 2 }).map((_, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-100 dark:border-slate-800 shadow-xs space-y-3 animate-pulse"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-200 dark:bg-slate-800" />
                    <div className="space-y-1.5 flex-1">
                      <div className="h-4 w-1/2 bg-slate-200 dark:bg-slate-800 rounded-md" />
                      <div className="h-3 w-1/4 bg-slate-100 dark:bg-slate-800/60 rounded" />
                    </div>
                  </div>
                  <div className="space-y-1 pt-1">
                    <div className="h-3 w-full bg-slate-100 dark:bg-slate-800/60 rounded" />
                    <div className="h-3 w-4/5 bg-slate-100 dark:bg-slate-800/60 rounded" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Invisible Observer Trigger Anchor */}
          <div ref={sentinelRef} className="h-10 w-full pointer-events-none opacity-0" />
        </div>
      ) : totalItems > 8 ? (
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 dark:text-slate-500 py-6 select-none">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500/70" />
          <span>You have viewed all {totalItems} {itemTypeLabel}</span>
        </div>
      ) : null}
    </div>
  );
};
