'use client';

import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface SimilarFoodItem {
  id: string;
  name: string;
  rating: number;
  image: string;
}

interface SimilarFoodsCarouselProps {
  similarFoods?: SimilarFoodItem[];
}

export const SimilarFoodsCarousel: React.FC<SimilarFoodsCarouselProps> = ({
  similarFoods = [
    {
      id: 'banana',
      name: 'Banana',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=300&q=80',
    },
    {
      id: 'blueberries',
      name: 'Blueberries',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?auto=format&fit=crop&w=300&q=80',
    },
    {
      id: 'orange',
      name: 'Orange',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&w=300&q=80',
    },
    {
      id: 'mango',
      name: 'Mango',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=300&q=80',
    },
    {
      id: 'pomegranate',
      name: 'Pomegranate',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=300&q=80',
    },
    {
      id: 'strawberry',
      name: 'Strawberry',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=300&q=80',
    },
  ],
}) => {
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -260, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 260, behavior: 'smooth' });
    }
  };

  return (
    <section id="similar-foods" className="space-y-4">
      {/* Header with Arrow Navigation */}
      <div className="flex items-center justify-between">
        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight">
          Similar Foods You May Like
        </h3>

        <div className="flex items-center gap-2">
          <button
            onClick={scrollLeft}
            aria-label="Previous similar foods"
            className="w-8 h-8 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:bg-emerald-50 dark:hover:bg-slate-700 transition-colors shadow-xs cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={scrollRight}
            aria-label="Next similar foods"
            className="w-8 h-8 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:bg-emerald-50 dark:hover:bg-slate-700 transition-colors shadow-xs cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 6-Column Grid Layout matching 12-column full page width */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        {similarFoods.map((item) => (
          <div
            key={item.id}
            onClick={() => router.push(`/healthy-foods/${item.id}`)}
            className="group bg-white dark:bg-slate-900 rounded-3xl p-3 sm:p-3.5 border border-slate-100 dark:border-slate-800 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 w-full cursor-pointer text-center space-y-2"
          >
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-50 dark:bg-slate-800">
              <img
                src={item.image}
                alt={item.name}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=300&q=80';
                }}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="space-y-0.5">
              <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white group-hover:text-emerald-600 transition-colors truncate">
                {item.name}
              </h4>
              <div className="flex items-center justify-center gap-1 text-[11px] font-bold text-slate-600 dark:text-slate-300">
                <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                <span>{item.rating.toFixed(1)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
