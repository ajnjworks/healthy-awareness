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
import { FISHES_LIST, FISHES_SUB_CATEGORIES } from '../../../data/fishesData';
import { Sparkles } from 'lucide-react';
import i18n from '../../../data/i18n/en.json';

const FISHES_SEASONAL_PICKS: SeasonalPickItem[] = [
  {
    id: 'salmon',
    name: 'Wild Salmon',
    tag: 'Omega-3 EPA/DHA',
    description: 'Premier marine source of anti-inflammatory docosahexaenoic acid and astaxanthin',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=300&q=80',
    tagBg: 'bg-rose-200/60 text-rose-800 dark:bg-rose-900/80 dark:text-rose-300',
  },
  {
    id: 'prawn',
    name: 'Coastal Prawns',
    tag: 'Zinc & Selenium',
    description: 'Succulent crustacean delivering lean amino acids, iodine and cellular antioxidant minerals',
    image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=300&q=80',
    tagBg: 'bg-amber-200/60 text-amber-800 dark:bg-amber-900/80 dark:text-amber-300',
  },
  {
    id: 'silver-pomfret',
    name: 'Silver Pomfret',
    tag: 'Lean Protein',
    description: 'Delicate, easily digestible white fish loaded with natural vitamin D and B-complex',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=300&q=80',
    tagBg: 'bg-sky-200/60 text-sky-800 dark:bg-sky-900/80 dark:text-sky-300',
  },
  {
    id: 'sardine',
    name: 'Atlantic Sardine',
    tag: 'Calcium & CoQ10',
    description: 'Small cold-water fish rich in bioavailable calcium, phosphorus and cardiovascular CoQ10',
    image: 'https://images.unsplash.com/photo-1534483509719-3feaee7c30da?auto=format&fit=crop&w=300&q=80',
    tagBg: 'bg-emerald-200/60 text-emerald-800 dark:bg-emerald-900/80 dark:text-emerald-300',
  },
];

export default function FishesListingPage() {
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

  const filteredItems = FISHES_LIST.filter((item: any) => {
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
        if (bId === 'heart' && (lowerSub.includes('heart') || lowerSub.includes('omega'))) return true;
        if (bId === 'brain' && (lowerSub.includes('brain') || lowerSub.includes('dha'))) return true;
        if (bId === 'skin' && lowerSub.includes('skin')) return true;
        if (bId === 'muscle' && (lowerSub.includes('protein') || lowerSub.includes('muscle'))) return true;
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
        <Breadcrumb items={[{ label: 'Healthy Foods', path: '/healthy-foods' }, { label: 'Fishes & Seafood' }]} />

        <FoodListingBanner
          categoryTitle="Fishes & Seafood Catalog"
          categoryDescription="Cold-water fatty fish, freshwater treasures, wild crustaceans, mollusks and nutrient-packed roe rich in marine Omega-3 fatty acids."
          itemCountText={`${FISHES_LIST.length} Seafood Items Available`}
        />

        <FoodSubCategoryBar
          selectedSubCat={selectedSubCat}
          onSelectSubCat={handleSelectSubCat}
          guideTitle="Healthy Seafood Guide"
          subCategories={FISHES_SUB_CATEGORIES}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2 w-full min-w-0">
          <div className="lg:col-span-9 space-y-6 w-full min-w-0">
            {/* Grid Controls Header with Live Search */}
            <FoodListingControls
              searchQuery={searchQuery}
              onSearchChange={handleSearchChange}
              placeholder="Search in fishes..."
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
                      router.push(`/healthy-foods/fishes/${id}`);
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
              itemTypeLabel="seafood"
            />
          </div>

          <div className="lg:col-span-3 space-y-6">
            <FoodFilterSidebar
              filterTitle="Filter Seafood"
              selectedBenefits={selectedBenefits}
              onToggleBenefit={handleToggleBenefit}
              onClearAll={handleClearAll}
              seasonalPicks={FISHES_SEASONAL_PICKS}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
