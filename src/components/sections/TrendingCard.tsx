import React from 'react';
import { Flame, Eye } from 'lucide-react';
import { Badge } from '../ui/Badge';

interface TrendingCardProps {
  id: string;
  name: string;
  badge: string;
  badgeType: any;
  views: string;
  image: string;
  onClick: (id: string) => void;
}

export const TrendingCard: React.FC<TrendingCardProps> = ({
  id,
  name,
  badge,
  badgeType,
  views,
  image,
  onClick,
}) => {
  return (
    <div
      onClick={() => onClick(id)}
      className="group relative rounded-2xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 cursor-pointer h-48 sm:h-52 flex flex-col justify-end p-3"
    >
      {/* Background Image */}
      <img
        src={image}
        alt={name}
        onError={(e) => {
          (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1543208541-0961a29a8c3d?auto=format&fit=crop&w=500&q=80';
        }}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />

      {/* Overlay Content */}
      <div className="relative z-10 space-y-1">
        <h3 className="text-sm sm:text-base font-extrabold text-white tracking-tight leading-tight drop-shadow-xs">
          {name}
        </h3>
        <p className="text-[11px] font-medium text-slate-300">
          {badge}
        </p>
        <div className="flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold text-amber-400 pt-0.5">
          <Flame className="w-3 h-3 text-orange-400 fill-orange-400" />
          <span>{views}</span>
        </div>
      </div>
    </div>
  );
};
