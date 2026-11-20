'use client';

import React from 'react';

interface FoodCardSkeletonProps {
  viewMode?: 'grid' | 'list';
}

export const FoodCardSkeleton: React.FC<FoodCardSkeletonProps> = ({ viewMode = 'grid' }) => {
  if (viewMode === 'list') {
    return (
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-3 sm:p-4 border border-slate-100 dark:border-slate-800 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 w-full max-w-full overflow-hidden">
        <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1 w-full">
          {/* Thumbnail Skeleton */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl shimmer-box shrink-0" />

          {/* Details Skeleton */}
          <div className="space-y-2.5 min-w-0 flex-1 w-full">
            <div className="flex items-center gap-2">
              {/* Title Skeleton */}
              <div className="h-5 w-40 sm:w-56 shimmer-box rounded-md" />
              {/* Rating Skeleton */}
              <div className="h-4 w-14 shimmer-box rounded-md" />
            </div>
            {/* Subtitle / Description Lines Skeleton */}
            <div className="space-y-1.5 w-full">
              <div className="h-3.5 w-full max-w-md shimmer-box rounded" />
              <div className="h-3.5 w-2/3 max-w-sm shimmer-box rounded" />
            </div>
            {/* Nutrient Badges Skeleton */}
            <div className="flex items-center gap-2 pt-1">
              <div className="h-6 w-24 shimmer-box rounded-xl" />
              <div className="h-6 w-20 shimmer-box rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-3 sm:p-3.5 border border-slate-100 dark:border-slate-800 shadow-xs flex flex-col justify-between h-full space-y-3.5 w-full max-w-full overflow-hidden">
      {/* Top Image Container Skeleton */}
      <div className="relative aspect-16/10 md:aspect-4/3 w-full rounded-2xl shimmer-box shrink-0">
        {/* Rating Score Badge Skeleton */}
        <div className="absolute top-2.5 right-2.5 h-6 w-12 rounded-xl shimmer-box shadow-xs" />
      </div>

      {/* Title & Subtitle Skeleton */}
      <div className="space-y-2 px-1 flex-1 min-w-0">
        {/* Title Bar Ghost Skeleton */}
        <div className="h-5 w-4/5 shimmer-box rounded-md" />
        {/* Subtitle 2 Lines Ghost Skeleton */}
        <div className="space-y-1.5 pt-1">
          <div className="h-3.5 w-full shimmer-box rounded" />
          <div className="h-3.5 w-3/5 shimmer-box rounded" />
        </div>
      </div>

      {/* Nutrient Badges Ghost Skeleton */}
      <div className="flex items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800/80 px-1 shrink-0">
        <div className="h-6 w-24 shimmer-box rounded-xl" />
        <div className="h-6 w-20 shimmer-box rounded-xl" />
      </div>
    </div>
  );
};
