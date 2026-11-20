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
import { PULSES_LIST, PULSES_SUB_CATEGORIES } from '../../../data/pulsesData';
import { ChevronDown, Sparkles } from 'lucide-react';

const PULSES_SEASONAL_PICKS: SeasonalPickItem[] = [
  {
    id: 'chickpeas',
    name: 'Kabuli Chickpeas',
    tag: 'Plant Protein & Fiber',
    description: 'Mediterranean & Indian superstar providing 20.5g complete plant protein and 12.2g gut-friendly dietary fiber',
    image: 'https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?auto=format&fit=crop&w=300&q=80',
    tagBg: 'bg-amber-200/60 text-amber-800 dark:bg-amber-900/80 dark:text-amber-300',
  },
  {
    id: 'rajma',
    name: 'Red Kidney Beans (Rajma)',
    tag: 'Highest Dietary Fiber',
    description: 'Hearty legumes containing an extraordinary 24.9g fiber and 23.6g protein per 100g for lasting fullness',
    image: 'https://images.unsplash.com/photo-1551462147-37885acc36f1?auto=format&fit=crop&w=300&q=80',
    tagBg: 'bg-rose-200/60 text-rose-800 dark:bg-rose-900/80 dark:text-rose-300',
  },
  {
    id: 'soybeans',
    name: 'Whole Soybeans',
    tag: 'Complete Amino Acids',
    description: 'Protein powerhouse with over 36.5g complete protein per 100g and essential isoflavones for cardiovascular health',
    image: 'https://images.unsplash.com/photo-1585994192701-f1a505c817ea?auto=format&fit=crop&w=300&q=80',
    tagBg: 'bg-emerald-200/60 text-emerald-800 dark:bg-emerald-900/80 dark:text-emerald-300',
  },
];

export default function PulsesListingPage() {
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
  useEffect(() => {
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

  const filteredItems = PULSES_LIST.filter((item: any) => {
    if (selectedSubCat !== 'all' && item.category !== selectedSubCat) {
      return false;
    }

    if (!matchesFoodSearch(item, searchQuery)) {
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

  const { visibleCount, sentinelRef, hasMore, resetCount } = useInfiniteScroll(
    sortedAndFilteredItems.length,
    {
      initialCount: 8,
      batchSize: 8,
    }
  );

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
        <Breadcrumb items={[{ label: 'Healthy Foods', path: '/healthy-foods' }, { label: 'Pulses, Dals & Legumes' }]} />

        <FoodListingBanner
          categoryTitle="Pulses, Dals & Legumes"
          categoryDescription="Verified nutrition, plant protein concentrations, prebiotic fiber values and cooking tips for toor, moong, masoor, chana dal, rajma and chickpeas."
          itemCountText={`${PULSES_LIST.length} Dals & Legumes Available`}
        />

        <FoodSubCategoryBar
          selectedSubCat={selectedSubCat}
          onSelectSubCat={handleSelectSubCat}
          guideTitle="Plant Protein Guide"
          subCategories={PULSES_SUB_CATEGORIES}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2 w-full min-w-0">
          <div className="lg:col-span-9 space-y-6 w-full min-w-0">
            {/* Grid Controls Header with Live Search */}
            <FoodListingControls
              searchQuery={searchQuery}
              onSearchChange={handleSearchChange}
              placeholder="Search in pulses..."
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
                      router.push(`/healthy-foods/pulses/${id}`);
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
              itemTypeLabel="dals & legumes"
            />
          </div>

          <div className="lg:col-span-3 space-y-6">
            <FoodFilterSidebar
              filterTitle="Filter Dals & Legumes"
              selectedBenefits={selectedBenefits}
              onToggleBenefit={handleToggleBenefit}
              onClearAll={handleClearAll}
              seasonalPicks={PULSES_SEASONAL_PICKS}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
