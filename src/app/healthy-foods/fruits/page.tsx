'use client';

import React, { useState } from 'react';
import { Navbar } from '../../../components/layout/Navbar';
import { Footer } from '../../../components/layout/Footer';
import { Breadcrumb } from '../../../components/common/Breadcrumb';
import { FoodListingBanner } from '../../../components/foods/FoodListingBanner';
import { FoodSubCategoryBar } from '../../../components/foods/FoodSubCategoryBar';
import { FoodCard } from '../../../components/foods/FoodCard';
import { FoodCardSkeleton } from '../../../components/foods/FoodCardSkeleton';
import { FoodFilterSidebar } from '../../../components/foods/FoodFilterSidebar';
import { FoodListingControls } from '../../../components/foods/FoodListingControls';
import { FoodEmptyState } from '../../../components/foods/FoodEmptyState';
import { InfiniteScrollSentinel } from '../../../components/foods/InfiniteScrollSentinel';
import { FRUITS_LIST, FruitProduct } from '../../../data/fruitsData';
import { Sparkles } from 'lucide-react';
import { useRouter } from 'next/navigation';
import i18n from '../../../data/i18n/en.json';
import { useTheme } from '../../../utils/useTheme';
import { useInfiniteScroll } from '../../../utils/useInfiniteScroll';

export default function FruitsListingPage() {
  const router = useRouter();
  const { darkMode, toggleDarkMode: handleToggleDarkMode } = useTheme();
  const [activeNav, setActiveNav] = useState('Foods');
  const [selectedSubCat, setSelectedSubCat] = useState('all');
  const [selectedBenefits, setSelectedBenefits] = useState<string[]>([]);
  const [selectedNutrients, setSelectedNutrients] = useState<string[]>([]);
  const [selectedCalories, setSelectedCalories] = useState<string[]>([]);
  const [selectedSeasons, setSelectedSeasons] = useState<string[]>([]);
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

  const handleToggleNutrient = (nutrientId: string) => {
    setSelectedNutrients((prev) =>
      prev.includes(nutrientId)
        ? prev.filter((id) => id !== nutrientId)
        : [...prev, nutrientId]
    );
  };

  const handleToggleCalorie = (calorieId: string) => {
    setSelectedCalories((prev) =>
      prev.includes(calorieId)
        ? prev.filter((id) => id !== calorieId)
        : [...prev, calorieId]
    );
  };

  const handleToggleSeason = (seasonId: string) => {
    setSelectedSeasons((prev) =>
      prev.includes(seasonId)
        ? prev.filter((id) => id !== seasonId)
        : [...prev, seasonId]
    );
  };

  const handleClearAll = () => {
    setSelectedBenefits([]);
    setSelectedNutrients([]);
    setSelectedCalories([]);
    setSelectedSeasons([]);
    setSelectedSubCat('all');
    setSearchQuery('');
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  // Filter items by sub-category filter, search query & selected health benefits
  const filteredItems = FRUITS_LIST.filter((item: FruitProduct) => {
    if (selectedSubCat !== 'all' && item.category !== selectedSubCat) {
      return false;
    }

    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase().trim();
      const nameMatch = (item.name || '').toLowerCase().includes(q);
      const subMatch = (item.subtitle || '').toLowerCase().includes(q);
      const catMatch = (item.category || '').toLowerCase().includes(q);
      const botMatch = (item.botanicalName || '').toLowerCase().includes(q);
      const nutrientMatch = (item.nutrients || []).some((n) =>
        (n.label || '').toLowerCase().includes(q)
      );
      const benefitMatch = (item.benefits || []).some((b) =>
        (b.name || b.id || '').toLowerCase().includes(q)
      );

      if (!nameMatch && !subMatch && !catMatch && !botMatch && !nutrientMatch && !benefitMatch) {
        return false;
      }
    }

    if (selectedBenefits.length > 0) {
      const hasBenefit = selectedBenefits.some((bId) => {
        if (item.benefits && Array.isArray(item.benefits)) {
          if (item.benefits.some((b) => (b.id || b.name || '').toLowerCase().includes(bId.toLowerCase()))) {
            return true;
          }
        }

        const lowerSub = (item.subtitle || '').toLowerCase();
        const nutrientLabels = (item.nutrients || []).map((n) => (n.label || '').toLowerCase()).join(' ');

        if (bId === 'heart' && (lowerSub.includes('heart') || nutrientLabels.includes('heart'))) return true;
        if (bId === 'immunity' && (lowerSub.includes('immun') || lowerSub.includes('vit c') || nutrientLabels.includes('vit c'))) return true;
        if (bId === 'digestion' && (lowerSub.includes('digest') || lowerSub.includes('fiber') || nutrientLabels.includes('fiber'))) return true;
        if (bId === 'skin' && (lowerSub.includes('skin') || lowerSub.includes('antioxidant'))) return true;
        if (bId === 'brain' && (lowerSub.includes('brain') || nutrientLabels.includes('brain'))) return true;
        if (bId === 'weight' && (lowerSub.includes('weight') || lowerSub.includes('fiber'))) return true;

        return false;
      });

      if (!hasBenefit) return false;
    }

    // Filter by Nutrients
    if (selectedNutrients.length > 0) {
      const nd = item.nutritionDetails;
      const vitC = nd?.vitaminC_mg ?? 0;
      const fiber = nd?.fiber_g ?? 0;
      const potassium = nd?.potassium_mg ?? 0;
      const nutrientsStr = (item.nutrients || []).map((n) => (n.label || '').toLowerCase()).join(' ');

      const matchesNutrient = selectedNutrients.some((nId) => {
        if (nId === 'vit-c') return vitC >= 15 || nutrientsStr.includes('vit c') || nutrientsStr.includes('c:');
        if (nId === 'fiber') return fiber >= 2.0 || nutrientsStr.includes('fiber');
        if (nId === 'potassium') return potassium >= 150 || nutrientsStr.includes('potassium');
        if (nId === 'antioxidants') {
          const lowerSub = (item.subtitle || '').toLowerCase();
          return (
            lowerSub.includes('antioxidant') ||
            (item.benefits || []).some((b) =>
              ['skin', 'immun', 'cellular'].some((term) =>
                (b.id || b.name || '').toLowerCase().includes(term)
              )
            )
          );
        }
        if (nId === 'hydration') {
          const lowerName = (item.name || '').toLowerCase();
          const lowerSub = (item.subtitle || '').toLowerCase();
          const calKcal = nd?.calories_kcal;
          return (
            lowerSub.includes('hydration') ||
            lowerSub.includes('water') ||
            ['watermelon', 'musk-melon', 'orange', 'grape', 'papaya', 'cantaloupe'].some((w) =>
              lowerName.includes(w)
            ) ||
            (calKcal !== null && calKcal !== undefined && calKcal < 45)
          );
        }
        return false;
      });

      if (!matchesNutrient) return false;
    }

    // Filter by Calories
    if (selectedCalories.length > 0) {
      const kcal = item.nutritionDetails?.calories_kcal ?? 55;
      const matchesCalorie = selectedCalories.some((cId) => {
        if (cId === 'low') return kcal < 50;
        if (cId === 'medium') return kcal >= 50 && kcal <= 80;
        if (cId === 'high') return kcal > 80;
        return false;
      });

      if (!matchesCalorie) return false;
    }

    // Filter by Season
    if (selectedSeasons.length > 0) {
      const SUMMER_FRUITS = new Set([
        'mango',
        'watermelon',
        'musk-melon',
        'cantaloupe',
        'honeydew',
        'lychee',
        'jackfruit',
        'pineapple',
        'papaya',
        'sweet-lime',
        'fig',
        'guava',
        'blackberry',
        'blackcurrant',
        'passion-fruit',
      ]);
      const WINTER_FRUITS = new Set([
        'apple',
        'orange',
        'guava',
        'pomegranate',
        'strawberry',
        'grape',
        'kiwi',
        'custard-apple',
        'mandarin',
        'tangerine',
        'amla',
        'ber',
        'grapefruit',
        'pomelo',
        'persimmon',
      ]);
      const MONSOON_FRUITS = new Set([
        'plum',
        'peach',
        'cherry',
        'pear',
        'jamun',
        'apricot',
        'nectarine',
        'karonda',
      ]);
      const ALL_YEAR_FRUITS = new Set([
        'banana',
        'papaya',
        'lemon',
        'lime',
        'coconut',
        'date',
        'avocado',
        'wood-apple',
        'bael',
      ]);

      const id = (item.id || '').toLowerCase();
      const matchesSeason = selectedSeasons.some((sId) => {
        if (sId === 'summer') return SUMMER_FRUITS.has(id);
        if (sId === 'winter') return WINTER_FRUITS.has(id);
        if (sId === 'monsoon') return MONSOON_FRUITS.has(id);
        if (sId === 'all-year')
          return (
            ALL_YEAR_FRUITS.has(id) ||
            (!SUMMER_FRUITS.has(id) && !WINTER_FRUITS.has(id) && !MONSOON_FRUITS.has(id))
          );
        return false;
      });

      if (!matchesSeason) return false;
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
    return 0; // 'popular' maintains default order
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

  React.useEffect(() => {
    resetCount();
  }, [
    selectedSubCat,
    selectedBenefits,
    selectedNutrients,
    selectedCalories,
    selectedSeasons,
    searchQuery,
    sortBy,
    resetCount,
  ]);

  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-300">
      {/* Schema.org JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Healthy Foods - Fruits',
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
        <Breadcrumb items={[{ label: 'Healthy Foods', path: '/healthy-foods' }, { label: 'Fruits' }]} />

        {/* 1. Hero Banner */}
        <FoodListingBanner
          categoryTitle="Fruits"
          categoryDescription="Nature's sweetest gifts! Packed with vitamins, minerals, antioxidants and fiber for a healthier you."
          itemCountText={`${FRUITS_LIST.length} Fruits Available`}
        />

        {/* 2. Sub-Category Filter Bar */}
        <FoodSubCategoryBar
          selectedSubCat={selectedSubCat}
          onSelectSubCat={handleSelectSubCat}
          guideTitle="How to Eat Fruits"
        />

        {/* 3. Main Grid + Sidebar Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2 w-full min-w-0">
          {/* Product Grid Area (9 Columns) */}
          <div className="lg:col-span-9 space-y-6 w-full min-w-0">
            {/* Grid Controls Header with Live Search */}
            <FoodListingControls
              searchQuery={searchQuery}
              onSearchChange={handleSearchChange}
              placeholder="Search fruits (e.g. apple, citrus, vitamin c)..."
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
                      router.push(`/healthy-foods/fruits/${id}`);
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
              itemTypeLabel="fruits"
            />

            {/* Bottom Tip Banner */}
            <div className="bg-emerald-50/70 dark:bg-emerald-950/40 rounded-2xl p-4 border border-emerald-200/60 dark:border-emerald-800/60 flex items-center justify-center gap-2.5 text-center text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
              <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>{i18n.listing.tip}</span>
            </div>
          </div>

          {/* Right Filter Sidebar Area (3 Columns) */}
          <div className="lg:col-span-3 w-full min-w-0">
            <FoodFilterSidebar
              filterTitle="Filter Fruits"
              category="fruits"
              selectedBenefits={selectedBenefits}
              onToggleBenefit={handleToggleBenefit}
              selectedNutrients={selectedNutrients}
              onToggleNutrient={handleToggleNutrient}
              selectedCalories={selectedCalories}
              onToggleCalorie={handleToggleCalorie}
              selectedSeasons={selectedSeasons}
              onToggleSeason={handleToggleSeason}
              onClearAll={handleClearAll}
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
