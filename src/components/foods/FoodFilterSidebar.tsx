'use client';

import React, { useState } from 'react';
import {
  Filter,
  ChevronDown,
  RotateCcw,
  Heart,
  Shield,
  Sparkles,
  Scale,
  Activity,
  Sun,
  Droplets,
  Zap,
  Wheat,
  Flame,
  Calendar,
  CloudRain,
  Snowflake,
  Lightbulb,
} from 'lucide-react';
import { DidYouKnowCard } from './DidYouKnowCard';

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
  category?: string;
  seasonalPicks?: SeasonalPickItem[];
  selectedNutrients?: string[];
  onToggleNutrient?: (nutrientId: string) => void;
  selectedCalories?: string[];
  onToggleCalorie?: (calorieId: string) => void;
  selectedSeasons?: string[];
  onToggleSeason?: (seasonId: string) => void;
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
  category,
  seasonalPicks = DEFAULT_SEASONAL_PICKS,
  selectedNutrients,
  onToggleNutrient,
  selectedCalories,
  onToggleCalorie,
  selectedSeasons,
  onToggleSeason,
}) => {
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({
    benefits: true,
    nutrients: true,
    calories: false,
    season: false,
  });

  const [localNutrients, setLocalNutrients] = useState<string[]>([]);
  const [localCalories, setLocalCalories] = useState<string[]>([]);
  const [localSeasons, setLocalSeasons] = useState<string[]>([]);

  const activeNutrients = selectedNutrients ?? localNutrients;
  const activeCalories = selectedCalories ?? localCalories;
  const activeSeasons = selectedSeasons ?? localSeasons;

  const handleToggleNutrient = (id: string) => {
    if (onToggleNutrient) {
      onToggleNutrient(id);
    } else {
      setLocalNutrients((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
    }
  };

  const handleToggleCalorie = (id: string) => {
    if (onToggleCalorie) {
      onToggleCalorie(id);
    } else {
      setLocalCalories((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
    }
  };

  const handleToggleSeason = (id: string) => {
    if (onToggleSeason) {
      onToggleSeason(id);
    } else {
      setLocalSeasons((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
    }
  };

  const handleClearAll = () => {
    setLocalNutrients([]);
    setLocalCalories([]);
    setLocalSeasons([]);
    onClearAll();
  };

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

  const nutrientsList = [
    { id: 'vit-c', label: 'Vitamin C Rich', icon: <Sun className="w-3.5 h-3.5 text-amber-500 fill-amber-400" /> },
    { id: 'fiber', label: 'High Dietary Fiber', icon: <Wheat className="w-3.5 h-3.5 text-emerald-500" /> },
    { id: 'potassium', label: 'Potassium Rich', icon: <Zap className="w-3.5 h-3.5 text-sky-500" /> },
    { id: 'antioxidants', label: 'Antioxidants & Polyphenols', icon: <Sparkles className="w-3.5 h-3.5 text-purple-500 fill-purple-400" /> },
    { id: 'hydration', label: 'High Water & Hydration', icon: <Droplets className="w-3.5 h-3.5 text-cyan-500 fill-cyan-400" /> },
  ];

  const caloriesList = [
    { id: 'low', label: 'Low Calorie (< 50 kcal)', icon: <Flame className="w-3.5 h-3.5 text-emerald-500" /> },
    { id: 'medium', label: 'Moderate (50 – 80 kcal)', icon: <Flame className="w-3.5 h-3.5 text-amber-500" /> },
    { id: 'high', label: 'Energy Dense (> 80 kcal)', icon: <Flame className="w-3.5 h-3.5 text-rose-500" /> },
  ];

  const seasonsList = [
    { id: 'summer', label: 'Summer Season', icon: <Sun className="w-3.5 h-3.5 text-amber-500" /> },
    { id: 'winter', label: 'Winter Season', icon: <Snowflake className="w-3.5 h-3.5 text-sky-400" /> },
    { id: 'monsoon', label: 'Monsoon / Rainy', icon: <CloudRain className="w-3.5 h-3.5 text-indigo-400" /> },
    { id: 'all-year', label: 'Available All Year', icon: <Calendar className="w-3.5 h-3.5 text-emerald-500" /> },
  ];

  // 2. Seasonal Picks Carousel Slider State & Data
  const [activeSlide, setActiveSlide] = useState(0);

  const currentPick = seasonalPicks[activeSlide];

  return (
    <aside className="space-y-6 w-full max-w-full min-w-0">
      {/* 1. Main Filter Card */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-100 dark:border-slate-800 shadow-xs space-y-4 w-full max-w-full overflow-hidden">
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
            className="w-full flex items-center justify-between py-1 text-xs font-extrabold text-slate-900 dark:text-white cursor-pointer select-none"
          >
            <span>Health Benefit</span>
            <ChevronDown
              className={`w-4 h-4 text-slate-400 transition-transform duration-300 ease-in-out ${
                expandedSections.benefits ? 'rotate-180 text-emerald-600' : ''
              }`}
            />
          </button>

          <div className={`accordion-collapse ${expandedSections.benefits ? 'expanded' : ''}`}>
            <div>
              <div className="mt-3 space-y-2.5 pt-1">
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
            </div>
          </div>
        </div>

        {/* Accordion 2: Nutrients */}
        <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
          <button
            onClick={() => toggleSection('nutrients')}
            className="w-full flex items-center justify-between py-1 text-xs font-extrabold text-slate-900 dark:text-white cursor-pointer select-none"
          >
            <div className="flex items-center gap-1.5">
              <span>Nutrients</span>
              {activeNutrients.length > 0 && (
                <span className="w-4 h-4 rounded-full bg-emerald-600 text-white text-[10px] flex items-center justify-center font-bold">
                  {activeNutrients.length}
                </span>
              )}
            </div>
            <ChevronDown
              className={`w-4 h-4 text-slate-400 transition-transform duration-300 ease-in-out ${
                expandedSections.nutrients ? 'rotate-180 text-emerald-600' : ''
              }`}
            />
          </button>

          <div className={`accordion-collapse ${expandedSections.nutrients ? 'expanded' : ''}`}>
            <div>
              <div className="mt-3 space-y-2.5 pt-1">
                {nutrientsList.map((item) => {
                  const isChecked = activeNutrients.includes(item.id);
                  return (
                    <label
                      key={item.id}
                      className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white cursor-pointer select-none"
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => handleToggleNutrient(item.id)}
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
            </div>
          </div>
        </div>

        {/* Accordion 3: Calories */}
        <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
          <button
            onClick={() => toggleSection('calories')}
            className="w-full flex items-center justify-between py-1 text-xs font-extrabold text-slate-900 dark:text-white cursor-pointer select-none"
          >
            <div className="flex items-center gap-1.5">
              <span>Calories</span>
              {activeCalories.length > 0 && (
                <span className="w-4 h-4 rounded-full bg-emerald-600 text-white text-[10px] flex items-center justify-center font-bold">
                  {activeCalories.length}
                </span>
              )}
            </div>
            <ChevronDown
              className={`w-4 h-4 text-slate-400 transition-transform duration-300 ease-in-out ${
                expandedSections.calories ? 'rotate-180 text-emerald-600' : ''
              }`}
            />
          </button>

          <div className={`accordion-collapse ${expandedSections.calories ? 'expanded' : ''}`}>
            <div>
              <div className="mt-3 space-y-2.5 pt-1">
                {caloriesList.map((item) => {
                  const isChecked = activeCalories.includes(item.id);
                  return (
                    <label
                      key={item.id}
                      className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white cursor-pointer select-none"
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => handleToggleCalorie(item.id)}
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
            </div>
          </div>
        </div>

        {/* Accordion 4: Season */}
        <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
          <button
            onClick={() => toggleSection('season')}
            className="w-full flex items-center justify-between py-1 text-xs font-extrabold text-slate-900 dark:text-white cursor-pointer select-none"
          >
            <div className="flex items-center gap-1.5">
              <span>Season</span>
              {activeSeasons.length > 0 && (
                <span className="w-4 h-4 rounded-full bg-emerald-600 text-white text-[10px] flex items-center justify-center font-bold">
                  {activeSeasons.length}
                </span>
              )}
            </div>
            <ChevronDown
              className={`w-4 h-4 text-slate-400 transition-transform duration-300 ease-in-out ${
                expandedSections.season ? 'rotate-180 text-emerald-600' : ''
              }`}
            />
          </button>

          <div className={`accordion-collapse ${expandedSections.season ? 'expanded' : ''}`}>
            <div>
              <div className="mt-3 space-y-2.5 pt-1">
                {seasonsList.map((item) => {
                  const isChecked = activeSeasons.includes(item.id);
                  return (
                    <label
                      key={item.id}
                      className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white cursor-pointer select-none"
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => handleToggleSeason(item.id)}
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
            </div>
          </div>
        </div>

        {/* Clear All Link */}
        <button
          onClick={handleClearAll}
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
        <div className="flex items-center gap-3 transition-all duration-500 w-full min-w-0">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shrink-0 border-2 border-amber-200 dark:border-amber-800 shadow-xs bg-white dark:bg-slate-800">
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

      {/* 3. Category-Specific Dynamic "Did You Know?" Card */}
      <DidYouKnowCard category={category || filterTitle} />
    </aside>
  );
};
