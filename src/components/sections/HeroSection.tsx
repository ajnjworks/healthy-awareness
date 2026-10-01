'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FoodSearchBar } from './FoodSearchBar';

import heroSlidesRaw from '../../data/heroData.json';

interface HeroSectionProps {
  onSearch: (query: string) => void;
  activeQuery: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSearch, activeQuery }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroSlides = heroSlidesRaw;

  const slide = heroSlides[currentSlide];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative py-3 sm:py-5 lg:py-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column Text & Search */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 z-10">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.1]">
                {slide.titlePart1}
                <br />
                {slide.titlePart2}
                <span className="text-emerald-600 dark:text-emerald-400">
                  {slide.titleHighlight}
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-lg font-medium leading-relaxed">
                {slide.subtitle}
              </p>
            </div>

            {/* Interactive Search Component */}
            <FoodSearchBar onSearch={onSearch} activeQuery={activeQuery} />

            {/* Carousel Dot Indicators */}
            <div className="flex items-center gap-2 pt-2">
              {heroSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    currentSlide === idx
                      ? 'w-7 bg-emerald-600 dark:bg-emerald-400'
                      : 'w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Visual Image & Controls */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-4/3 sm:aspect-16/10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 transform lg:rotate-1 hover:rotate-0 transition-transform duration-500">
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Navigation Carousel Buttons */}
            <button
              onClick={handlePrev}
              aria-label="Previous slide"
              className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 shadow-xl border border-slate-100 dark:border-slate-700 flex items-center justify-center hover:bg-emerald-50 dark:hover:bg-slate-700 transition-all cursor-pointer z-20"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <button
              onClick={handleNext}
              aria-label="Next slide"
              className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 shadow-xl border border-slate-100 dark:border-slate-700 flex items-center justify-center hover:bg-emerald-50 dark:hover:bg-slate-700 transition-all cursor-pointer z-20"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
