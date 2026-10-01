'use client';

import React, { useState } from 'react';
import { Filter, ChevronDown, ChevronUp, RotateCcw, Lightbulb, Heart, Shield, Sparkles, Scale, Activity } from 'lucide-react';

export interface SeasonalPickItem {
  id: string;
  name: string;
  tag: string;
  description: string;
  image: string;
  tagBg: string;
}

interface FoodFilterSidebarProps {
  selectedBenefits: string[];
  onToggleBenefit: (benefitId: string) => void;
  onClearAll: () => void;
  filterTitle?: string;
  seasonalPicks?: SeasonalPickItem[];
}

const DEFAULT_SEASONAL_PICKS: SeasonalPickItem[] = [
  {
    id: 'mango',
    name: 'Mango',
    tag: 'Summer Special',
    description: 'Rich in Vitamin A & antioxidants',
    image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=300&q=80',
    tagBg: 'bg-amber-200/60 text-amber-800 dark:bg-amber-900/80 dark:text-amber-300',
  },
  {
    id: 'watermelon',
    name: 'Watermelon',
    tag: 'Hydration Boost',
    description: '92% water content & lycopene',
    image: 'https://images.unsplash.com/photo-1587049352847-4a222e784d38?auto=format&fit=crop&w=300&q=80',
    tagBg: 'bg-rose-200/60 text-rose-800 dark:bg-rose-900/80 dark:text-rose-300',
  },
  {
    id: 'strawberry',
    name: 'Strawberry',
    tag: 'Spring Favorite',
    description: 'Loaded with Vitamin C & manganese',
    image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=300&q=80',
    tagBg: 'bg-red-200/60 text-red-800 dark:bg-red-900/80 dark:text-red-300',
  },
  {
    id: 'pineapple',
    name: 'Pineapple',
    tag: 'Tropical Delight',
    description: 'Natural bromelain for digestion',
    image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=300&q=80',
    tagBg: 'bg-yellow-200/60 text-yellow-800 dark:bg-yellow-900/80 dark:text-yellow-300',
  },
];

export const FoodFilterSidebar: React.FC<FoodFilterSidebarProps> = ({
  selectedBenefits,
  onToggleBenefit,
  onClearAll,
  filterTitle = 'Filter Foods',
  seasonalPicks = DEFAULT_SEASONAL_PICKS,
}) => {
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({
    benefits: true,
    nutrients: false,
    calories: false,
    season: false,
    availability: false,
  });

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const healthBenefitsList = [
    { id: 'heart', label: 'Heart Health', icon: <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-400" /> },
    { id: 'immunity', label: 'Immunity Booster', icon: <Shield className="w-3.5 h-3.5 text-emerald-500 fill-emerald-400" /> },
    { id: 'digestion', label: 'Better Digestion', icon: <Activity className="w-3.5 h-3.5 text-emerald-600" /> },
    { id: 'skin', label: 'Skin Health', icon: <Sparkles className="w-3.5 h-3.5 text-purple-500 fill-purple-400" /> },
    { id: 'weight', label: 'Weight Management', icon: <Scale className="w-3.5 h-3.5 text-sky-500" /> },
  ];

  // 2. Seasonal Picks Carousel Slider State & Data
  const [activeSlide, setActiveSlide] = useState(0);

  const currentPick = seasonalPicks[activeSlide];

  return (
    <aside className="space-y-6">
      {/* 1. Main Filter Card */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-100 dark:border-slate-800 shadow-xs space-y-4">
        {/* Filter Title */}
        <div className="flex items-center gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
          <Filter className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
            {filterTitle}
          </h3>
        </div>

        {/* Accordion 1: Health Benefit */}
        <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
          <button
            onClick={() => toggleSection('benefits')}
            className="w-full flex items-center justify-between py-1 text-xs font-extrabold text-slate-900 dark:text-white cursor-pointer"
          >
            <span>Health Benefit</span>
            {expandedSections.benefits ? (
              <ChevronUp className="w-4 h-4 text-slate-400" />
            ) : (
              <ChevronDown className="w-4 h-4 text-slate-400" />
            )}
          </button>

          {expandedSections.benefits && (
            <div className="mt-3 space-y-2.5">
              {healthBenefitsList.map((item) => {
                const isChecked = selectedBenefits.includes(item.id);
                return (
                  <label
                    key={item.id}
                    className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white cursor-pointer select-none"
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => onToggleBenefit(item.id)}
                      className="w-4 h-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                    />
                    <div className="flex items-center gap-1.5">
                      {item.icon}
                      <span>{item.label}</span>
                    </div>
                  </label>
                );
              })}
            </div>
          )}
        </div>

        {/* Collapsed Accordions */}
        {['nutrients', 'calories', 'season', 'availability'].map((sectionKey) => (
          <div key={sectionKey} className="border-b border-slate-100 dark:border-slate-800 pb-3">
            <button
              onClick={() => toggleSection(sectionKey)}
              className="w-full flex items-center justify-between py-1 text-xs font-extrabold text-slate-900 dark:text-white capitalize cursor-pointer"
            >
              <span>{sectionKey}</span>
              {expandedSections[sectionKey] ? (
                <ChevronUp className="w-4 h-4 text-slate-400" />
              ) : (
                <ChevronDown className="w-4 h-4 text-slate-400" />
              )}
            </button>
            {expandedSections[sectionKey] && (
              <div className="mt-2 text-xs text-slate-400 italic">
                Filter by {sectionKey} options available.
              </div>
            )}
          </div>
        ))}

        {/* Clear All Link */}
        <button
          onClick={onClearAll}
          className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-emerald-600 transition-colors cursor-pointer pt-1"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Clear All</span>
        </button>
      </div>

      {/* 2. Interactive Seasonal Picks Spotlight Slider Card */}
      <div className="bg-amber-50/70 dark:bg-amber-950/30 rounded-3xl p-5 border border-amber-100 dark:border-amber-900/40 space-y-3 shadow-xs relative">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-extrabold text-slate-900 dark:text-white">
            Seasonal Picks
          </h4>
          <button
            onClick={() => setActiveSlide((prev) => (prev + 1) % seasonalPicks.length)}
            className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 hover:underline cursor-pointer"
          >
            View next
          </button>
        </div>

        {/* Active Slide Display */}
        <div className="flex items-center gap-3 transition-all duration-500">
          <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 border-2 border-amber-200 dark:border-amber-800 shadow-xs bg-white dark:bg-slate-800">
            <img
              src={currentPick.image}
              alt={currentPick.name}
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=300&q=80';
              }}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-1 min-w-0 flex-1">
            <h5 className="text-sm font-black text-slate-900 dark:text-white truncate">
              {currentPick.name}
            </h5>
            <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-md ${currentPick.tagBg}`}>
              {currentPick.tag}
            </span>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 font-medium leading-tight line-clamp-2">
              {currentPick.description}
            </p>
          </div>
        </div>

        {/* Interactive Carousel Indicator Dots */}
        <div className="flex justify-center items-center gap-2 pt-1">
          {seasonalPicks.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`transition-all duration-300 cursor-pointer rounded-full ${
                activeSlide === idx
                  ? 'w-5 h-2 bg-emerald-600'
                  : 'w-2 h-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* 3. Did You Know? Callout Card */}
      <div className="bg-emerald-50/80 dark:bg-emerald-950/40 rounded-3xl p-5 border border-emerald-200/80 dark:border-emerald-800/60 space-y-3 shadow-xs">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-xl bg-amber-100 text-amber-600">
            <Lightbulb className="w-4 h-4 fill-amber-400" />
          </div>
          <h4 className="text-xs font-extrabold text-slate-900 dark:text-white">
            Did You Know?
          </h4>
        </div>

        <p className="text-xs text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
          Berries are among the most nutrient-dense fruits on the planet. They are loaded with antioxidants that protect your cells.
        </p>

        <div className="h-28 w-full rounded-2xl overflow-hidden border border-emerald-200/60 dark:border-emerald-800/60 shadow-xs">
          <img
            src="https://images.unsplash.com/photo-1498557850523-fd3d118b962e?auto=format&fit=crop&w=400&q=80"
            alt="Berries"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </aside>
  );
};
