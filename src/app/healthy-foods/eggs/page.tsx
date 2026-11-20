'use client';

import { useTheme } from '@/utils/useTheme';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Navbar } from '../../../components/layout/Navbar';
import { Footer } from '../../../components/layout/Footer';
import { Breadcrumb } from '../../../components/common/Breadcrumb';
import { FoodListingBanner } from '../../../components/foods/FoodListingBanner';
import { FoodSubCategoryBar } from '../../../components/foods/FoodSubCategoryBar';
import { FoodCard } from '../../../components/foods/FoodCard';
import { FoodCardSkeleton } from '../../../components/foods/FoodCardSkeleton';
import { FoodFilterSidebar, SeasonalPickItem } from '../../../components/foods/FoodFilterSidebar';
import { FoodListingControls, matchesFoodSearch } from '../../../components/foods/FoodListingControls';
import { FoodEmptyState } from '../../../components/foods/FoodEmptyState';
import { InfiniteScrollSentinel } from '../../../components/foods/InfiniteScrollSentinel';
import { useInfiniteScroll } from '../../../utils/useInfiniteScroll';
import { EGGS_LIST, EGGS_SUB_CATEGORIES } from '../../../data/eggsData';
import { Sparkles } from 'lucide-react';
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
  const { darkMode, toggleDarkMode: handleToggleDarkMode } = useTheme();
  const [activeNav, setActiveNav] = useState('Foods');
  const [selectedSubCat, setSelectedSubCat] = useState('all');
  const [selectedBenefits, setSelectedBenefits] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isLoading, setIsLoading] = useState(true);

  // Initial Flipkart / Amazon style skeleton ghost loading
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 280);
    return () => clearTimeout(timer);
  }, []);

  const handleSelectSubCat = (catId: string) => {
    if (catId === selectedSubCat) return;
    setIsLoading(true);
    setSelectedSubCat(catId);
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
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
    setSearchQuery('');
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  const filteredItems = EGGS_LIST.filter((item: any) => {
    if (selectedSubCat !== 'all' && item.category !== selectedSubCat) {
      return false;
    }

    if (!matchesFoodSearch(item, searchQuery)) {
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

  // Infinite Scroll / Lazy Load on Scroll
  const {
    visibleCount,
    resetCount,
    sentinelRef,
    isLoadingMore,
    hasMore,
  } = useInfiniteScroll(sortedAndFilteredItems.length, {
    initialCount: 8,
    batchSize: 8,
    rootMargin: '300px',
  });

  useEffect(() => {
    resetCount();
  }, [selectedSubCat, selectedBenefits, searchQuery, sortBy, resetCount]);

  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-300">
      <Navbar
        darkMode={darkMode}
        onToggleDarkMode={handleToggleDarkMode}
        activeNav={activeNav}
        onNavClick={handleNavClick}
      />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6 w-full min-w-0 overflow-hidden">
        <Breadcrumb items={[{ label: 'Healthy Foods', path: '/healthy-foods' }, { label: 'Eggs' }]} />

        {/* 1. Hero Banner */}
        <FoodListingBanner
          categoryTitle="Eggs"
          categoryDescription="The gold standard of protein! Whole poultry eggs, egg whites, golden yolks and heritage free-range varieties rich in choline, lutein and B12."
          itemCountText={`${EGGS_LIST.length} Egg Varieties Available`}
        />

        <FoodSubCategoryBar
          selectedSubCat={selectedSubCat}
          onSelectSubCat={handleSelectSubCat}
          guideTitle="Healthy Eggs Guide"
          subCategories={EGGS_SUB_CATEGORIES}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2 w-full min-w-0">
          <div className="lg:col-span-9 space-y-6 w-full min-w-0">
            {/* Grid Controls Header with Live Search */}
            <FoodListingControls
              searchQuery={searchQuery}
              onSearchChange={handleSearchChange}
              placeholder="Search in eggs..."
              totalItems={sortedAndFilteredItems.length}
              visibleCount={visibleCount}
              sortBy={sortBy}
              onSortChange={setSortBy}
              viewMode={viewMode}
              onViewModeChange={setViewMode}
            />

            {/* Product Display Container, Skeleton Ghost Loading, or Empty State */}
            {isLoading ? (
              <div
                className={
                  viewMode === 'grid'
                    ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5'
                    : 'flex flex-col gap-3.5'
                }
              >
                {Array.from({ length: 8 }).map((_, idx) => (
                  <FoodCardSkeleton key={idx} viewMode={viewMode} />
                ))}
              </div>
            ) : sortedAndFilteredItems.length === 0 ? (
              <FoodEmptyState
                searchQuery={searchQuery}
                onReset={handleClearAll}
              />
            ) : (
              <div
                className={
                  viewMode === 'grid'
                    ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5'
                    : 'flex flex-col gap-3.5'
                }
              >
                {sortedAndFilteredItems.slice(0, visibleCount).map((food: any) => (
                  <FoodCard
                    key={food.id}
                    item={food}
                    viewMode={viewMode}
                    onSelectItem={(id) => {
                      router.push(`/healthy-foods/eggs/${id}`);
                    }}
                  />
                ))}
              </div>
            )}

            {/* Infinite Scroll / Lazy Load on Scroll Sentinel */}
            <InfiniteScrollSentinel
              sentinelRef={sentinelRef}
              hasMore={hasMore}
              totalItems={sortedAndFilteredItems.length}
              viewMode={viewMode}
              itemTypeLabel="eggs"
            />
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
