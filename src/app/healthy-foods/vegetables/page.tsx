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
import { VEGETABLES_LIST, VEGETABLE_SUB_CATEGORIES } from '../../../data/vegetablesData';
import { Sparkles } from 'lucide-react';

const VEG_SEASONAL_PICKS: SeasonalPickItem[] = [
  {
    id: 'spinach',
    name: 'Spinach (Palak)',
    tag: 'Iron & Vitamin K',
    description: 'Supreme leafy green supporting bone density & immunity',
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=300&q=80',
    tagBg: 'bg-emerald-200/60 text-emerald-800 dark:bg-emerald-900/80 dark:text-emerald-300',
  },
  {
    id: 'broccoli',
    name: 'Broccoli',
    tag: 'Sulforaphane Rich',
    description: 'Cruciferous powerhouse packed with Vitamin C & fiber',
    image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=300&q=80',
    tagBg: 'bg-green-200/60 text-green-800 dark:bg-green-900/80 dark:text-green-300',
  },
  {
    id: 'carrot',
    name: 'Carrot',
    tag: 'Vision & Skin',
    description: 'High beta-carotene for cellular defense and eye health',
    image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=300&q=80',
    tagBg: 'bg-amber-200/60 text-amber-800 dark:bg-amber-900/80 dark:text-amber-300',
  },
  {
    id: 'beetroot',
    name: 'Beetroot',
    tag: 'Nitrate Power',
    description: 'Boosts natural stamina, blood flow and heart vitality',
    image: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=300&q=80',
    tagBg: 'bg-rose-200/60 text-rose-800 dark:bg-rose-900/80 dark:text-rose-300',
  },
];

export default function VegetablesListingPage() {
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
  const filteredItems = VEGETABLES_LIST.filter((item: any) => {
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
        const nutrientLabels = (item.nutrients || []).map((n: any) => (n.label || '').toLowerCase()).join(' ');

        if (bId === 'heart' && (lowerSub.includes('heart') || nutrientLabels.includes('heart') || lowerSub.includes('nitrate'))) return true;
        if (bId === 'immunity' && (lowerSub.includes('immun') || lowerSub.includes('vit c') || nutrientLabels.includes('vit c') || lowerSub.includes('sulforaphane'))) return true;
        if (bId === 'digestion' && (lowerSub.includes('digest') || lowerSub.includes('fiber') || nutrientLabels.includes('fiber'))) return true;
        if (bId === 'skin' && (lowerSub.includes('skin') || lowerSub.includes('antioxidant') || lowerSub.includes('beta-carotene'))) return true;
        if (bId === 'weight' && (lowerSub.includes('weight') || lowerSub.includes('fiber') || lowerSub.includes('cal'))) return true;

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
            name: 'Healthy Foods - Vegetables & Greens',
            description: 'Fresh, nutrient-dense vegetables, greens, roots and pods supporting daily vitality.',
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
        <Breadcrumb items={[{ label: 'Healthy Foods', path: '/healthy-foods' }, { label: 'Vegetables' }]} />

        {/* 1. Hero Banner */}
        <FoodListingBanner
          categoryTitle="Vegetables & Greens"
          categoryDescription="Fresh, crisp and bursting with vital nutrients! Packed with iron, calcium, antioxidants and gut-friendly fiber for sustained vitality."
          itemCountText={`${VEGETABLES_LIST.length} Vegetables Available`}
        />

        {/* 2. Sub-Category Filter Bar */}
        <FoodSubCategoryBar
          selectedSubCat={selectedSubCat}
          onSelectSubCat={handleSelectSubCat}
          guideTitle="Vegetable Cooking Guide"
          subCategories={VEGETABLE_SUB_CATEGORIES}
        />

        {/* 3. Main Grid + Sidebar Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2 w-full min-w-0">
          {/* Product Grid Area (9 Columns) */}
          <div className="lg:col-span-9 space-y-6 w-full min-w-0">
            {/* Grid Controls Header with Live Search */}
            <FoodListingControls
              searchQuery={searchQuery}
              onSearchChange={handleSearchChange}
              placeholder="Search vegetables (e.g. spinach, broccoli, fiber)..."
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
                      router.push(`/healthy-foods/vegetables/${id}`);
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
              itemTypeLabel="vegetables"
            />

            {/* Bottom Tip Banner */}
            <div className="bg-emerald-50/70 dark:bg-emerald-950/40 rounded-2xl p-4 border border-emerald-200/60 dark:border-emerald-800/60 flex items-center justify-center gap-2.5 text-center text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
              <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>Tip: Gentle steaming or light stir-frying keeps bioavailable antioxidants and vitamins intact in leafy greens and cruciferous vegetables.</span>
            </div>
          </div>

          {/* Right Filter Sidebar Area (3 Columns) */}
          <div className="lg:col-span-3">
            <FoodFilterSidebar
              filterTitle="Filter Vegetables"
              category="vegetables"
              selectedBenefits={selectedBenefits}
              onToggleBenefit={handleToggleBenefit}
              onClearAll={handleClearAll}
              seasonalPicks={VEG_SEASONAL_PICKS}
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
