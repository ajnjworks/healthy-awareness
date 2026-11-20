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
import { FoodListingControls } from '../../../components/foods/FoodListingControls';
import { FoodEmptyState } from '../../../components/foods/FoodEmptyState';
import { InfiniteScrollSentinel } from '../../../components/foods/InfiniteScrollSentinel';
import { useInfiniteScroll } from '../../../utils/useInfiniteScroll';
import { NUTS_SEEDS_LIST, NUTS_SEEDS_SUB_CATEGORIES } from '../../../data/nutsSeedsData';
import { Sparkles } from 'lucide-react';

const NUTS_SEASONAL_PICKS: SeasonalPickItem[] = [
  {
    id: 'almonds',
    name: 'Raw Almonds',
    tag: 'Vitamin E Rich',
    description: 'Supreme brain food packed with healthy fats, magnesium and antioxidants',
    image: 'https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&w=300&q=80',
    tagBg: 'bg-amber-200/60 text-amber-800 dark:bg-amber-900/80 dark:text-amber-300',
  },
  {
    id: 'walnuts',
    name: 'Walnuts',
    tag: 'Omega-3 ALA',
    description: 'Crucial nut for neuro-protection, cognitive sharpness and cardiovascular health',
    image: 'https://images.unsplash.com/photo-1543208541-0961a29a8c3d?auto=format&fit=crop&w=300&q=80',
    tagBg: 'bg-yellow-200/60 text-yellow-800 dark:bg-yellow-900/80 dark:text-yellow-300',
  },
  {
    id: 'chia-seeds',
    name: 'Chia Seeds',
    tag: 'Fiber & Calcium',
    description: 'Tiny ancient super-seeds that absorb water and foster prolonged digestive satiety',
    image: 'https://images.unsplash.com/photo-1543208541-0961a29a8c3d?auto=format&fit=crop&w=300&q=80',
    tagBg: 'bg-emerald-200/60 text-emerald-800 dark:bg-emerald-900/80 dark:text-emerald-300',
  },
  {
    id: 'flax-seeds',
    name: 'Flax Seeds',
    tag: 'Lignan Powerhouse',
    description: 'Dense in soluble mucilage fiber and alpha-linolenic acid for total body harmony',
    image: 'https://images.unsplash.com/photo-1543208541-0961a29a8c3d?auto=format&fit=crop&w=300&q=80',
    tagBg: 'bg-orange-200/60 text-orange-800 dark:bg-orange-900/80 dark:text-orange-300',
  },
];

export default function NutsSeedsListingPage() {
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

  // Filter items by sub-category filter, search query & selected health benefits
  const filteredItems = NUTS_SEEDS_LIST.filter((item: any) => {
    if (selectedSubCat !== 'all' && item.category !== selectedSubCat) {
      return false;
    }

    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase().trim();
      const nameMatch = (item.name || '').toLowerCase().includes(q);
      const subMatch = (item.subtitle || '').toLowerCase().includes(q);
      const catMatch = (item.category || '').toLowerCase().includes(q);
      const botMatch = (item.botanicalName || '').toLowerCase().includes(q);
      const nutrientMatch = (item.nutrients || []).some((n: any) =>
        (n.label || '').toLowerCase().includes(q)
      );
      const benefitMatch = (item.benefits || []).some((b: any) =>
        (b.name || b.id || '').toLowerCase().includes(q)
      );

      if (!nameMatch && !subMatch && !catMatch && !botMatch && !nutrientMatch && !benefitMatch) {
        return false;
      }
    }

    if (selectedBenefits.length > 0) {
      const hasBenefit = selectedBenefits.some((bId) => {
        if (item.benefits && Array.isArray(item.benefits)) {
          if (item.benefits.some((b: any) => (b.id || b.name || '').toLowerCase().includes(bId.toLowerCase()))) {
            return true;
          }
        }

        const lowerSub = (item.subtitle || '').toLowerCase();
        const lowerName = (item.name || '').toLowerCase();

        if (bId === 'heart' && (lowerSub.includes('heart') || lowerSub.includes('omega') || lowerName.includes('walnut') || lowerName.includes('chia') || lowerName.includes('almond'))) return true;
        if (bId === 'brain' && (lowerSub.includes('brain') || lowerName.includes('walnut') || lowerName.includes('almond'))) return true;
        if (bId === 'skin' && (lowerSub.includes('skin') || lowerName.includes('almond') || lowerName.includes('seed'))) return true;
        if (bId === 'immunity' && (lowerSub.includes('immun') || lowerName.includes('amla') || lowerName.includes('raisin') || lowerName.includes('berry'))) return true;
        if (bId === 'digestion' && (lowerSub.includes('fiber') || lowerName.includes('chia') || lowerName.includes('flax') || lowerName.includes('prune'))) return true;
        if (bId === 'weight' && (lowerSub.includes('protein') || lowerName.includes('chia') || lowerName.includes('nut'))) return true;

        return false;
      });

      if (!hasBenefit) return false;
    }

    return true;
  });

  // Sort items dynamically
  const sortedAndFilteredItems = [...filteredItems].sort((a, b) => {
    if (sortBy === 'rating') {
      return b.score - a.score;
    }
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    }
    return 0; // 'popular'
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
      {/* Schema.org JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Healthy Foods - Dry Fruits, Nuts & Seeds',
            description: 'Nature’s concentrated nutrition: wholesome nuts, antioxidant dried fruits and super seeds.',
            numberOfItems: sortedAndFilteredItems.length,
            itemListElement: sortedAndFilteredItems.map((item, idx) => ({
              '@type': 'ListItem',
              position: idx + 1,
              name: item.name,
              description: item.subtitle,
              image: item.image,
            })),
          }),
        }}
      />

      {/* Top Navigation */}
      <Navbar
        darkMode={darkMode}
        onToggleDarkMode={handleToggleDarkMode}
        activeNav={activeNav}
        onNavClick={handleNavClick}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6 w-full min-w-0 overflow-hidden">
        {/* Breadcrumb Navigation */}
        <Breadcrumb items={[{ label: 'Healthy Foods', path: '/healthy-foods' }, { label: 'Nuts & Seeds' }]} />

        {/* 1. Hero Banner */}
        <FoodListingBanner
          categoryTitle="Dry Fruits, Nuts & Seeds"
          categoryDescription="Concentrated powerhouses of nutrition! Packed with heart-healthy omega fats, plant protein, dietary fiber and essential minerals for brain power and cellular energy."
          itemCountText={`${NUTS_SEEDS_LIST.length} Nuts & Seeds Available`}
        />

        {/* 2. Sub-Category Filter Bar */}
        <FoodSubCategoryBar
          selectedSubCat={selectedSubCat}
          onSelectSubCat={handleSelectSubCat}
          guideTitle="Nuts Soaking & Intake Guide"
          subCategories={NUTS_SEEDS_SUB_CATEGORIES}
        />

        {/* 3. Main Grid + Sidebar Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2 w-full min-w-0">
          {/* Product Grid Area (9 Columns) */}
          <div className="lg:col-span-9 space-y-6 w-full min-w-0">
            {/* Grid Controls Header with Live Search */}
            <FoodListingControls
              searchQuery={searchQuery}
              onSearchChange={handleSearchChange}
              placeholder="Search nuts & seeds (e.g. almond, walnut, chia)..."
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
                {sortedAndFilteredItems.slice(0, visibleCount).map((item) => (
                  <FoodCard
                    key={item.id}
                    item={item}
                    viewMode={viewMode}
                    onSelectItem={(id) => {
                      router.push(`/healthy-foods/nuts-seeds/${id}`);
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
              itemTypeLabel="nuts & seeds"
            />

            {/* Bottom Tip Banner */}
            <div className="bg-emerald-50/70 dark:bg-emerald-950/40 rounded-2xl p-4 border border-emerald-200/60 dark:border-emerald-800/60 flex items-center justify-center gap-2.5 text-center text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
              <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>Tip: Soaking raw almonds and walnuts overnight softens their skin and helps neutralize enzyme inhibitors for easier nutrient absorption.</span>
            </div>
          </div>

          {/* Right Filter Sidebar Area (3 Columns) */}
          <div className="lg:col-span-3">
            <FoodFilterSidebar
              filterTitle="Filter Nuts & Seeds"
              selectedBenefits={selectedBenefits}
              onToggleBenefit={handleToggleBenefit}
              onClearAll={handleClearAll}
              seasonalPicks={NUTS_SEASONAL_PICKS}
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
