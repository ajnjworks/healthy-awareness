import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  maxStars?: number;
  showNumeric?: boolean;
  reviewCount?: number;
  size?: 'sm' | 'md' | 'lg';
}

export const StarRating: React.FC<StarRatingProps> = ({
  rating,
  maxStars = 5,
  showNumeric = false,
  reviewCount,
  size = 'sm',
}) => {
  const iconSizes = {
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  return (
    <div className="inline-flex items-center gap-1">
      <div className="flex items-center gap-0.5 text-amber-400">
        {Array.from({ length: maxStars }).map((_, idx) => {
          const filled = idx < Math.floor(rating);
          const half = !filled && idx < rating;
          return (
            <Star
              key={idx}
              className={`${iconSizes[size]} ${
                filled
                  ? 'fill-amber-400 text-amber-400'
                  : half
                  ? 'fill-amber-400/50 text-amber-400'
                  : 'fill-slate-200 dark:fill-slate-700 text-slate-300 dark:text-slate-600'
              }`}
            />
          );
        })}
      </div>
      {showNumeric && (
        <span className="text-xs font-bold text-slate-800 dark:text-slate-200 ml-1">
          {rating.toFixed(1)}
        </span>
      )}
      {reviewCount !== undefined && (
        <span className="text-xs text-slate-500 dark:text-slate-400">
          ({reviewCount} reviews)
        </span>
      )}
    </div>
  );
};
