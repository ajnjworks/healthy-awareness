'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Navbar } from '../../../components/layout/Navbar';
import { Footer } from '../../../components/layout/Footer';
import { Breadcrumb } from '../../../components/common/Breadcrumb';
import { FoodListingBanner } from '../../../components/foods/FoodListingBanner';
import { FoodSubCategoryBar } from '../../../components/foods/FoodSubCategoryBar';
import { FoodCard } from '../../../components/foods/FoodCard';
import { FoodFilterSidebar, SeasonalPickItem } from '../../../components/foods/FoodFilterSidebar';
import { EGGS_LIST, EGGS_SUB_CATEGORIES } from '../../../data/eggsData';
import { SlidersHorizontal, LayoutGrid, List, ChevronDown, Sparkles } from 'lucide-react';
import i18n from '../../../data/i18n/en.json';

const EGGS_SEASONAL_PICKS: SeasonalPickItem[] = [
  {
    id: 'chicken-egg',
    name: 'Whole Chicken Egg',
    tag: 'Gold Standard (100)',
    description: 'Perfect biological protein benchmark delivering brain-nourishing choline and retinal lutein',
    image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=300&q=80',
    tagBg: 'bg-amber-200/60 text-amber-800 dark:bg-amber-900/80 dark:text-amber-300',
  },
  {
    id: 'chicken-egg-white',
    name: 'Egg Whites',
    tag: 'Pure Albumin',
    description: 'Fat-free, cholesterol-free pure protein building blocks for lean muscle repair and satiety',
    image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=300&q=80',
    tagBg: 'bg-sky-200/60 text-sky-800 dark:bg-sky-900/80 dark:text-sky-300',
  },
  {
    id: 'desi-chicken-egg',
    name: 'Desi Country Egg',
    tag: 'Heritage Free-Range',
    description: 'Pasture-foraged hen egg with vibrant golden yolk higher in omega-3 fats, carotenoids and vitamin D',
    image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=300&q=80',
    tagBg: 'bg-emerald-200/60 text-emerald-800 dark:bg-emerald-900/80 dark:text-emerald-300',
  },
  {
    id: 'quail-egg',
    name: 'Quail Egg',
    tag: 'Micro-Nutrient Dense',
    description: 'Bite-sized nutrient jewels offering concentrated iron, vitamin B12 and essential amino acids',
    image: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=300&q=80',
    tagBg: 'bg-rose-200/60 text-rose-800 dark:bg-rose-900/80 dark:text-rose-300',
  },
];

export default function EggsListingPage() {
  const router = useRouter();
  const [darkMode, setDarkMode] = useState(false);
  const [activeNav, setActiveNav] = useState('Foods');
  const [selectedSubCat, setSelectedSubCat] = useState('all');
  const [selectedBenefits, setSelectedBenefits] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('popular');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleToggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const handleNavClick = (navItem: string) => {
    setActiveNav(navItem);
    if (navItem === 'Home') {
      router.push('/');
    } else if (navItem === 'Foods') {
      router.push('/healthy-foods');
    } else {
      router.push('/');
    }
  };

  const handleToggleBenefit = (benefitId: string) => {
    setSelectedBenefits((prev) =>
      prev.includes(benefitId)
        ? prev.filter((id) => id !== benefitId)
        : [...prev, benefitId]
    );
  };

  const handleClearAll = () => {
    setSelectedBenefits([]);
    setSelectedSubCat('all');
  };

  const filteredItems = EGGS_LIST.filter((item: any) => {
    if (selectedSubCat !== 'all' && item.category !== selectedSubCat) {
      return false;
    }

    if (selectedBenefits.length > 0) {
      const hasBenefit = selectedBenefits.some((bId) => {
        if (item.benefits && Array.isArray(item.benefits)) {
          if (item.benefits.some((b: any) => (typeof b === 'string' ? b : b.id || b.name || '').toLowerCase().includes(bId.toLowerCase()))) {
            return true;
          }
        }
        const lowerSub = (item.subtitle || '').toLowerCase();
        if (bId === 'brain' && (lowerSub.includes('brain') || lowerSub.includes('choline'))) return true;
        if (bId === 'eye' && (lowerSub.includes('eye') || lowerSub.includes('lutein'))) return true;
        if (bId === 'muscle' && (lowerSub.includes('protein') || lowerSub.includes('amino') || lowerSub.includes('muscle'))) return true;
        return false;
      });
      if (!hasBenefit) return false;
    }

    return true;
  });

  const sortedAndFilteredItems = [...filteredItems].sort((a, b) => {
    if (sortBy === 'rating') {
      return b.score - a.score;
    }
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 8);
  };

  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-300">
      <Navbar
        darkMode={darkMode}
        onToggleDarkMode={handleToggleDarkMode}
        activeNav={activeNav}
        onNavClick={handleNavClick}
      />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        <Breadcrumb items={[{ label: 'Healthy Foods', path: '/healthy-foods' }, { label: 'Eggs' }]} />

        <FoodListingBanner
          categoryTitle="Eggs Catalog"
          categoryDescription="The gold standard of protein! Whole poultry eggs, egg whites, golden yolks and heritage free-range varieties rich in choline, lutein and B12."
          itemCountText={`${EGGS_LIST.length} Egg Varieties Available`}
        />

        <FoodSubCategoryBar
          selectedSubCat={selectedSubCat}
          onSelectSubCat={setSelectedSubCat}
          guideTitle="Healthy Eggs Guide"
          subCategories={EGGS_SUB_CATEGORIES}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
          <div className="lg:col-span-9 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 bg-white dark:bg-slate-900 p-3.5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-xs">
              <span className="text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-300">
                Showing 1-{Math.min(visibleCount, sortedAndFilteredItems.length)} of {sortedAndFilteredItems.length} items
              </span>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-200/80 dark:border-slate-700">
                  <SlidersHorizontal className="w-3.5 h-3.5 text-slate-500" />
                  <span>Sort By:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    aria-label="Sort products"
                    className="bg-transparent font-extrabold text-slate-900 dark:text-white cursor-pointer focus:outline-none"
                  >
                    <option value="popular">Popular</option>
                    <option value="rating">Highest Rated</option>
                    <option value="name">Name A-Z</option>
                  </select>
                  <ChevronDown className="w-3 h-3 text-slate-400" />
                </div>

                <div className="flex items-center gap-1 bg-slate-50 dark:bg-slate-800 p-1 rounded-xl border border-slate-200/80 dark:border-slate-700">
                  <button
                    onClick={() => setViewMode('grid')}
                    aria-label="Switch to Grid View"
                    aria-pressed={viewMode === 'grid'}
                    className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                      viewMode === 'grid'
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <LayoutGrid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    aria-label="Switch to List View"
                    aria-pressed={viewMode === 'list'}
                    className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                      viewMode === 'list'
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            <div
              className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5'
                  : 'flex flex-col gap-3.5'
              }
            >
              {sortedAndFilteredItems.slice(0, visibleCount).map((food) => (
                <FoodCard
                  key={food.id}
                  item={food}
                  viewMode={viewMode}
                  onSelectItem={(id) => {
                    router.push(`/healthy-foods/${id}`);
                  }}
                />
              ))}
            </div>

            {visibleCount < sortedAndFilteredItems.length && (
              <div className="flex justify-center pt-8 pb-4">
                <button
                  onClick={handleLoadMore}
                  className="flex items-center gap-2.5 px-6 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-500 text-slate-800 dark:text-slate-100 font-bold text-sm shadow-xs hover:shadow-md transition-all cursor-pointer group"
                >
                  <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400 group-hover:rotate-12 transition-transform" />
                  <span>Load More Eggs</span>
                </button>
              </div>
            )}
          </div>

          <div className="lg:col-span-3 space-y-6">
            <FoodFilterSidebar
              filterTitle="Filter Eggs"
              selectedBenefits={selectedBenefits}
              onToggleBenefit={handleToggleBenefit}
              onClearAll={handleClearAll}
              seasonalPicks={EGGS_SEASONAL_PICKS}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
