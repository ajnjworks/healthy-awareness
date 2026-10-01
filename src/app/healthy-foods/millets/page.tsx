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
import { MILLETS_LIST, MILLETS_SUB_CATEGORIES } from '../../../data/milletsData';
import { SlidersHorizontal, LayoutGrid, List, ChevronDown } from 'lucide-react';

const MILLETS_SEASONAL_PICKS: SeasonalPickItem[] = [
  {
    id: 'finger-millet',
    name: 'Finger Millet (Ragi)',
    tag: 'Highest Plant Calcium',
    description: 'Ancient staple containing unmatched natural calcium, high dietary fiber and sustained slow-release complex energy',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=300&q=80',
    tagBg: 'bg-amber-200/60 text-amber-800 dark:bg-amber-900/80 dark:text-amber-300',
  },
  {
    id: 'pearl-millet',
    name: 'Pearl Millet (Bajra)',
    tag: 'Iron & Magnesium',
    description: 'Hearty whole grain delivering 11g protein, 11.5g fiber and abundant iron for metabolic stamina and energy',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=300&q=80',
    tagBg: 'bg-emerald-200/60 text-emerald-800 dark:bg-emerald-900/80 dark:text-emerald-300',
  },
  {
    id: 'barnyard-millet',
    name: 'Barnyard Millet (Sanwa)',
    tag: 'Lowest Calorie & High Fiber',
    description: 'Light digestive grain containing 13.6g fiber per 100g with an exceptionally gentle glycemic profile',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=300&q=80',
    tagBg: 'bg-cyan-200/60 text-cyan-800 dark:bg-cyan-900/80 dark:text-cyan-300',
  },
];

export default function MilletsListingPage() {
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

  const filteredItems = MILLETS_LIST.filter((item: any) => {
    if (selectedSubCat !== 'all' && item.category !== selectedSubCat) {
      return false;
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

  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-300">
      <Navbar
        darkMode={darkMode}
        onToggleDarkMode={handleToggleDarkMode}
        activeNav={activeNav}
        onNavClick={handleNavClick}
      />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        <Breadcrumb items={[{ label: 'Healthy Foods', path: '/healthy-foods' }, { label: 'Millets' }]} />

        <FoodListingBanner
          categoryTitle="Ancient Millets"
          categoryDescription="Verified nutrition, dietary fiber, iron, calcium and low-glycemic profiles for ragi, bajra, jowar, foxtail, barnyard, kodo and little millets."
          itemCountText={`${MILLETS_LIST.length} Millets Available`}
        />

        <FoodSubCategoryBar
          selectedSubCat={selectedSubCat}
          onSelectSubCat={setSelectedSubCat}
          guideTitle="Ancient Millets Guide"
          subCategories={MILLETS_SUB_CATEGORIES}
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
          </div>

          <div className="lg:col-span-3 space-y-6">
            <FoodFilterSidebar
              filterTitle="Filter Millets"
              selectedBenefits={selectedBenefits}
              onToggleBenefit={handleToggleBenefit}
              onClearAll={handleClearAll}
              seasonalPicks={MILLETS_SEASONAL_PICKS}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
