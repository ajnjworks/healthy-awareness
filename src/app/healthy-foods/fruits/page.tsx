'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Navbar } from '../../../components/layout/Navbar';
import { Footer } from '../../../components/layout/Footer';
import { Breadcrumb } from '../../../components/common/Breadcrumb';
import { FoodListingBanner } from '../../../components/foods/FoodListingBanner';
import { FoodSubCategoryBar } from '../../../components/foods/FoodSubCategoryBar';
import { FoodCard } from '../../../components/foods/FoodCard';
import { FoodFilterSidebar } from '../../../components/foods/FoodFilterSidebar';
import { FRUITS_LIST, FruitProduct } from '../../../data/fruitsData';
import { SlidersHorizontal, LayoutGrid, List, ChevronDown, Sparkles, ChevronRight, Home } from 'lucide-react';
import { useRouter } from 'next/navigation';
import i18n from '../../../data/i18n/en.json';

export default function FruitsListingPage() {
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

  // Filter items by sub-category filter & selected health benefits
  const filteredItems = FRUITS_LIST.filter((item: any) => {
    if (selectedSubCat !== 'all' && item.category !== selectedSubCat) {
      return false;
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

  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-300">
      {/* Schema.org JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Healthy Foods - Fruits Collection',
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
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Breadcrumb Navigation */}
        <Breadcrumb items={[{ label: 'Healthy Foods', path: '/healthy-foods' }, { label: 'Fruits' }]} />

        {/* 1. Hero Banner */}
        <FoodListingBanner
          categoryTitle="Fruits Collection"
          categoryDescription="Nature's sweetest gifts! Packed with vitamins, minerals, antioxidants and fiber for a healthier you."
          itemCountText={`${FRUITS_LIST.length}+ Fruits Available`}
        />

        {/* 2. Sub-Category Filter Bar */}
        <FoodSubCategoryBar
          selectedSubCat={selectedSubCat}
          onSelectSubCat={setSelectedSubCat}
          guideTitle="How to Eat Fruits"
        />

        {/* 3. Main Grid + Sidebar Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
          {/* Product Grid Area (9 Columns) */}
          <div className="lg:col-span-9 space-y-6">
            {/* Grid Controls Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 bg-white dark:bg-slate-900 p-3.5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-xs">
              <span className="text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-300">
                {i18n.listing.showingPrefix} 1-{Math.min(visibleCount, sortedAndFilteredItems.length)} {i18n.listing.of} {sortedAndFilteredItems.length} {i18n.listing.items}
              </span>

              <div className="flex items-center gap-3">
                {/* Sort Dropdown */}
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-200/80 dark:border-slate-700">
                  <SlidersHorizontal className="w-3.5 h-3.5 text-slate-500" />
                  <span>{i18n.listing.sortBy}</span>
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

                {/* View Switchers */}
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

            {/* Product Display Container (Grid vs List Layout) */}
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
                    router.push(`/healthy-foods/${id}`);
                  }}
                />
              ))}
            </div>

            {/* Load More Button */}
            {visibleCount < sortedAndFilteredItems.length && (
              <div className="flex justify-center pt-4">
                <button
                  onClick={() => setVisibleCount((prev) => prev + 4)}
                  className="flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-extrabold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 transition-all shadow-xs cursor-pointer"
                >
                  <span>{i18n.listing.loadMore}</span>
                  <ChevronDown className="w-4 h-4 text-emerald-600" />
                </button>
              </div>
            )}

            {/* Bottom Tip Banner */}
            <div className="bg-emerald-50/70 dark:bg-emerald-950/40 rounded-2xl p-4 border border-emerald-200/60 dark:border-emerald-800/60 flex items-center justify-center gap-2.5 text-center text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
              <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>{i18n.listing.tip}</span>
            </div>
          </div>

          {/* Right Filter Sidebar Area (3 Columns) */}
          <div className="lg:col-span-3">
            <FoodFilterSidebar
              filterTitle="Filter Fruits"
              selectedBenefits={selectedBenefits}
              onToggleBenefit={handleToggleBenefit}
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
