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
import { VEGETABLES_LIST, VEGETABLE_SUB_CATEGORIES } from '../../../data/vegetablesData';
import { SlidersHorizontal, LayoutGrid, List, ChevronDown, Sparkles } from 'lucide-react';
import i18n from '../../../data/i18n/en.json';

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
  const filteredItems = VEGETABLES_LIST.filter((item: any) => {
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

  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-300">
      {/* Schema.org JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Healthy Foods - Vegetables Collection',
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
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Breadcrumb Navigation */}
        <Breadcrumb items={[{ label: 'Healthy Foods', path: '/healthy-foods' }, { label: 'Vegetables' }]} />

        {/* 1. Hero Banner */}
        <FoodListingBanner
          categoryTitle="Vegetables Collection"
          categoryDescription="Fresh, crisp and bursting with vital nutrients! Packed with iron, calcium, antioxidants and gut-friendly fiber for sustained vitality."
          itemCountText={`${VEGETABLES_LIST.length}+ Vegetables Available`}
        />

        {/* 2. Sub-Category Filter Bar */}
        <FoodSubCategoryBar
          selectedSubCat={selectedSubCat}
          onSelectSubCat={setSelectedSubCat}
          guideTitle="Vegetable Cooking Guide"
          subCategories={VEGETABLE_SUB_CATEGORIES}
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

            {/* Product Display Container */}
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
              <span>Tip: Gentle steaming or light stir-frying keeps bioavailable antioxidants and vitamins intact in leafy greens and cruciferous vegetables.</span>
            </div>
          </div>

          {/* Right Filter Sidebar Area (3 Columns) */}
          <div className="lg:col-span-3">
            <FoodFilterSidebar
              filterTitle="Filter Vegetables"
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
