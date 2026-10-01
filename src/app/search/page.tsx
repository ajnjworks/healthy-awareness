'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { HeroBanner } from '../../components/common/HeroBanner';
import {
  Search,
  X,
  LayoutGrid,
  List as ListIcon,
  Filter,
  ChevronDown,
  ChevronUp,
  Heart,
  Brain,
  Scale,
  ShieldCheck,
  Sparkles,
  Flame,
  Clock,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Users,
  Lightbulb,
} from 'lucide-react';

import searchData from '../../data/searchResultsData.json';

function SearchResultsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || searchData.searchQuery;

  const [darkMode, setDarkMode] = useState(false);
  const [activeNav, setActiveNav] = useState('Foods');
  const [query, setQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedBenefits, setSelectedBenefits] = useState<string[]>([]);
  const [selectedFoodTypes, setSelectedFoodTypes] = useState<string[]>([]);
  const [selectedDietTypes, setSelectedDietTypes] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('relevance');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [requestedFoodName, setRequestedFoodName] = useState('');
  const [requestSuccess, setRequestSuccess] = useState(false);

  useEffect(() => {
    const qParam = searchParams.get('q');
    if (qParam) {
      setQuery(qParam);
    }
  }, [searchParams]);

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

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const handleClearQuery = () => {
    setQuery('');
  };

  const toggleBenefitFilter = (id: string) => {
    setSelectedBenefits((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleFoodTypeFilter = (id: string) => {
    setSelectedFoodTypes((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleDietTypeFilter = (id: string) => {
    setSelectedDietTypes((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleClearAllFilters = () => {
    setSelectedCategory('all');
    setSelectedBenefits([]);
    setSelectedFoodTypes([]);
    setSelectedDietTypes([]);
  };

  const handleRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRequestSuccess(true);
    setTimeout(() => {
      setRequestSuccess(false);
      setShowRequestModal(false);
      setRequestedFoodName('');
    }, 3000);
  };

  // 1. Items matching search query
  const queryMatchedResults = searchData.results.filter((item) => {
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return (
      item.name.toLowerCase().includes(q) ||
      item.subtitle.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
    );
  });

  // 2. Dynamic Filter Counts
  const dynamicCategories = searchData.categories.map((cat) => {
    const count =
      cat.id === 'all'
        ? queryMatchedResults.length
        : queryMatchedResults.filter((i) => i.categoryId === cat.id).length;
    return { ...cat, count };
  });

  const dynamicBenefits = searchData.benefits.map((b) => {
    const count = queryMatchedResults.filter((i) => i.benefits.includes(b.id)).length;
    return { ...b, count };
  });

  const dynamicFoodTypes = searchData.foodTypes.map((ft) => {
    const count = queryMatchedResults.filter((i) => i.foodType === ft.id).length;
    return { ...ft, count };
  });

  const dynamicDietTypes = searchData.dietTypes.map((dt) => {
    const count = queryMatchedResults.filter((i) => i.dietTypes.includes(dt.id)).length;
    return { ...dt, count };
  });

  // 3. Final Filtered Results (Applying Sidebar Checkboxes)
  let filteredResults = queryMatchedResults.filter((item) => {
    // Category Filter Match
    const matchesCategory =
      selectedCategory === 'all' || item.categoryId === selectedCategory;

    // Benefit Filter Match
    const matchesBenefit =
      selectedBenefits.length === 0 ||
      selectedBenefits.some((b) => item.benefits.includes(b));

    // Food Type Match
    const matchesFoodType =
      selectedFoodTypes.length === 0 || selectedFoodTypes.includes(item.foodType);

    // Diet Type Match
    const matchesDietType =
      selectedDietTypes.length === 0 ||
      selectedDietTypes.some((d) => item.dietTypes.includes(d));

    return (
      matchesCategory &&
      matchesBenefit &&
      matchesFoodType &&
      matchesDietType
    );
  });

  // Sorting Logic
  if (sortBy === 'score') {
    filteredResults.sort((a, b) => b.score - a.score);
  } else if (sortBy === 'name') {
    filteredResults.sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
    <div className="min-h-screen bg-[#f8f9f6] dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-300">
      {/* Schema.org JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SearchResultsPage',
            name: `Search Results for "${query}" - Healthy Awareness`,
            url: `https://healthylife.app/search?q=${encodeURIComponent(query)}`,
          }),
        }}
      />

      {/* Sticky Header Navigation */}
      <Navbar
        darkMode={darkMode}
        onToggleDarkMode={handleToggleDarkMode}
        activeNav={activeNav}
        onNavClick={handleNavClick}
      />

      {/* Main Content Layout Container */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Breadcrumb */}
        <Breadcrumb items={[{ label: 'Search Results' }]} />

        {/* 1. HERO HEADER BANNER (Pixel Match with Mockup) */}
        <HeroBanner
          title="Search Results"
          subtitle={
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium">
              Showing results for{' '}
              <strong className="text-emerald-700 dark:text-emerald-400 font-extrabold">
                "{query}"
              </strong>
            </p>
          }
          extraContent={
            <form onSubmit={handleSearchSubmit} className="pt-2">
              <div className="flex items-center gap-3 bg-white dark:bg-slate-800 p-2.5 pl-4 rounded-2xl border-2 border-emerald-600/70 dark:border-emerald-500/70 shadow-xs max-w-xl">
                <Search className="w-5 h-5 text-slate-400 shrink-0" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search any food..."
                  className="w-full bg-transparent text-xs sm:text-sm text-slate-900 dark:text-white font-semibold focus:outline-none placeholder-slate-400"
                />
                {query && (
                  <button
                    type="button"
                    onClick={handleClearQuery}
                    className="p-1 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer shrink-0"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </form>
          }
          rightContent={
            <div className="w-full max-w-[360px] aspect-4/3 rounded-[24px] overflow-hidden shadow-md border-2 border-white dark:border-slate-800 bg-white dark:bg-slate-800">
              <img
                src={searchData.hero.graphic}
                alt="Overflowing bowl of fresh raw almonds"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&w=800&q=80';
                }}
                className="w-full h-full object-cover"
              />
            </div>
          }
        />

        {/* 2. RESULTS HEADER BAR (Found Count | Sort By | View Toggle) */}
        <section className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200/70 dark:border-slate-800 shadow-2xs">
          <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
            Found <span className="text-emerald-700 dark:text-emerald-400 font-extrabold">{filteredResults.length}</span> results for "{query}"
          </div>

          <div className="flex items-center gap-4">
            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 text-xs">
              <span className="font-semibold text-slate-500">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-800 dark:text-slate-200 focus:outline-none cursor-pointer"
              >
                <option value="relevance">Relevance</option>
                <option value="score">Health Score (High to Low)</option>
                <option value="name">Alphabetical (A-Z)</option>
              </select>
            </div>

            {/* View Mode Toggle Buttons */}
            <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-[#1c6628] text-white'
                    : 'text-slate-500 hover:text-slate-800 dark:hover:text-white'
                }`}
                aria-label="Grid View"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                  viewMode === 'list'
                    ? 'bg-[#1c6628] text-white'
                    : 'text-slate-500 hover:text-slate-800 dark:hover:text-white'
                }`}
                aria-label="List View"
              >
                <ListIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* 3. THREE COLUMN MAIN CONTENT CONTAINER */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* LEFT COLUMN: FILTER RESULTS SIDEBAR (3 cols) */}
          <aside className="lg:col-span-3 bg-white dark:bg-slate-900 rounded-[28px] p-5 border border-slate-200/70 dark:border-slate-800 shadow-2xs space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                <h2 className="text-xs sm:text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">
                  Filter Results
                </h2>
              </div>
              <button
                onClick={handleClearAllFilters}
                className="text-[11px] font-extrabold text-emerald-700 dark:text-emerald-400 hover:underline cursor-pointer"
              >
                Clear All
              </button>
            </div>

            {/* Categories */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-slate-800 dark:text-slate-200">
                Categories
              </h3>
              <div className="space-y-1 text-xs font-semibold">
                {dynamicCategories.map((cat) => (
                  <button
                    key={cat.id}
                    disabled={cat.count === 0 && cat.id !== 'all'}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`w-full flex items-center justify-between p-2 rounded-xl transition-colors cursor-pointer ${
                      selectedCategory === cat.id
                        ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 font-extrabold'
                        : cat.count === 0
                        ? 'text-slate-400 dark:text-slate-600 opacity-50 cursor-not-allowed'
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span className="text-[10px] text-slate-400 font-bold">{cat.count}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Health Benefit */}
            <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
              <h3 className="text-xs font-bold text-slate-800 dark:text-slate-200">
                Health Benefit
              </h3>
              <div className="space-y-2 text-xs font-medium">
                {dynamicBenefits.map((b) => (
                  <label
                    key={b.id}
                    className={`flex items-center justify-between cursor-pointer text-slate-700 dark:text-slate-300 ${
                      b.count === 0 ? 'opacity-40 cursor-not-allowed' : ''
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        disabled={b.count === 0}
                        checked={selectedBenefits.includes(b.id)}
                        onChange={() => toggleBenefitFilter(b.id)}
                        className="w-3.5 h-3.5 accent-emerald-600 rounded cursor-pointer disabled:cursor-not-allowed"
                      />
                      <span>{b.label}</span>
                    </div>
                    <span className="text-[10px] text-slate-400">{b.count}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Food Type */}
            <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
              <h3 className="text-xs font-bold text-slate-800 dark:text-slate-200">
                Food Type
              </h3>
              <div className="space-y-2 text-xs font-medium">
                {dynamicFoodTypes.map((ft) => (
                  <label
                    key={ft.id}
                    className={`flex items-center justify-between cursor-pointer text-slate-700 dark:text-slate-300 ${
                      ft.count === 0 ? 'opacity-40 cursor-not-allowed' : ''
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        disabled={ft.count === 0}
                        checked={selectedFoodTypes.includes(ft.id)}
                        onChange={() => toggleFoodTypeFilter(ft.id)}
                        className="w-3.5 h-3.5 accent-emerald-600 rounded cursor-pointer disabled:cursor-not-allowed"
                      />
                      <span>{ft.label}</span>
                    </div>
                    <span className="text-[10px] text-slate-400">{ft.count}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Diet Type */}
            <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
              <h3 className="text-xs font-bold text-slate-800 dark:text-slate-200">
                Diet Type
              </h3>
              <div className="space-y-2 text-xs font-medium">
                {dynamicDietTypes.map((dt) => (
                  <label
                    key={dt.id}
                    className={`flex items-center justify-between cursor-pointer text-slate-700 dark:text-slate-300 ${
                      dt.count === 0 ? 'opacity-40 cursor-not-allowed' : ''
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        disabled={dt.count === 0}
                        checked={selectedDietTypes.includes(dt.id)}
                        onChange={() => toggleDietTypeFilter(dt.id)}
                        className="w-3.5 h-3.5 accent-emerald-600 rounded cursor-pointer disabled:cursor-not-allowed"
                      />
                      <span>{dt.label}</span>
                    </div>
                    <span className="text-[10px] text-slate-400">{dt.count}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Apply Filters Button */}
            <div className="pt-2">
              <button
                onClick={() => {}}
                className="w-full py-2.5 rounded-xl border border-emerald-700 text-emerald-800 dark:text-emerald-300 font-extrabold text-xs hover:bg-emerald-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              >
                Apply Filters
              </button>
            </div>

            {/* Can't find what you're looking for? Request Food Card */}
            <div className="bg-[#f0f3eb] dark:bg-slate-800 p-4 rounded-2xl border border-emerald-100 dark:border-slate-700 space-y-2 text-center">
              <h4 className="text-xs font-black text-slate-900 dark:text-white">
                Can't find what you're looking for?
              </h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                Let us know and we'll add it!
              </p>
              <button
                onClick={() => setShowRequestModal(true)}
                className="w-full py-2 rounded-xl bg-[#1c6628] hover:bg-[#15501f] text-white font-extrabold text-xs shadow-2xs transition-colors cursor-pointer"
              >
                Request a Food
              </button>
            </div>
          </aside>

          {/* MIDDLE COLUMN: RESULTS CARDS (6 cols - 3 cols grid inside) */}
          <div className="lg:col-span-6 space-y-6">
            {filteredResults.length === 0 ? (
              <div className="bg-white dark:bg-slate-900 rounded-[28px] p-8 border border-slate-200/70 dark:border-slate-800 text-center space-y-3">
                <Search className="w-10 h-10 text-slate-400 mx-auto" />
                <h3 className="text-base font-black text-slate-900 dark:text-white">
                  No food results found
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  We couldn't find any foods matching your current filter criteria.
                </p>
                <button
                  onClick={handleClearAllFilters}
                  className="px-4 py-2 rounded-xl bg-emerald-100 text-emerald-800 text-xs font-bold"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div
                className={
                  viewMode === 'grid'
                    ? 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4'
                    : 'space-y-4'
                }
              >
                {filteredResults.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white dark:bg-slate-900 rounded-3xl p-3.5 border border-slate-200/80 dark:border-slate-800 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      {/* Image Box with Score Badge */}
                      <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800">
                        <img
                          src={item.image}
                          alt={item.name}
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&w=600&q=80';
                          }}
                          className="w-full h-full object-cover"
                        />
                        {/* Score Badge */}
                        <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-lg bg-emerald-700 text-white text-[11px] font-black shadow-xs">
                          {item.score}
                        </div>

                        {/* Category Badge */}
                        <div className="absolute bottom-2.5 left-2.5 px-2 py-0.5 rounded-md bg-white/90 dark:bg-slate-900/90 text-slate-800 dark:text-slate-200 text-[9px] font-black uppercase tracking-wider">
                          {item.category}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="space-y-1">
                        <h3 className="text-sm font-black text-slate-900 dark:text-white tracking-tight line-clamp-1">
                          {item.name}
                        </h3>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium line-clamp-1">
                          {item.subtitle}
                        </p>
                      </div>

                      {/* Benefit Icons Bar */}
                      <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 pt-1">
                        <Heart className="w-3.5 h-3.5" />
                        <Brain className="w-3.5 h-3.5" />
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <Users className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800 mt-3">
                      <button
                        onClick={() => router.push('/healthy-foods/apple')}
                        className="text-[11px] font-extrabold text-emerald-700 dark:text-emerald-400 hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <span>{item.actionText}</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Pagination Controls (Only show when results exist) */}
            {filteredResults.length > 0 && (
              <div className="flex items-center justify-center gap-1.5 pt-4">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  className="w-8 h-8 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center text-xs font-bold hover:bg-slate-50 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setCurrentPage(1)}
                  className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold cursor-pointer ${
                    currentPage === 1
                      ? 'bg-[#1c6628] text-white'
                      : 'bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 text-slate-600 dark:text-slate-300'
                  }`}
                >
                  1
                </button>
                <button
                  onClick={() => setCurrentPage(2)}
                  className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold cursor-pointer ${
                    currentPage === 2
                      ? 'bg-[#1c6628] text-white'
                      : 'bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 text-slate-600 dark:text-slate-300'
                  }`}
                >
                  2
                </button>
                <button
                  onClick={() => setCurrentPage(3)}
                  className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold cursor-pointer ${
                    currentPage === 3
                      ? 'bg-[#1c6628] text-white'
                      : 'bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 text-slate-600 dark:text-slate-300'
                  }`}
                >
                  3
                </button>
                <span className="text-slate-400 text-xs px-1">...</span>
                <button
                  onClick={() => setCurrentPage(6)}
                  className="w-8 h-8 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center text-xs font-bold cursor-pointer"
                >
                  6
                </button>
                <button
                  onClick={() => setCurrentPage((p) => Math.min(6, p + 1))}
                  className="w-8 h-8 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center text-xs font-bold hover:bg-slate-50 cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* RIGHT COLUMN: WIDGETS SIDEBAR (3 cols) */}
          <aside className="lg:col-span-3 space-y-6">
            {/* Widget 1: Did You Know? */}
            <div className="bg-[#f0f3eb] dark:bg-slate-900 rounded-[28px] p-5 border border-emerald-100/80 dark:border-slate-800 shadow-2xs space-y-3">
              <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400">
                <Lightbulb className="w-4 h-4" />
                <h3 className="text-xs font-black uppercase tracking-wider">
                  Did You Know?
                </h3>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                {searchData.didYouKnow.fact}
              </p>

              <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-xs border border-white dark:border-slate-800">
                <img
                  src={searchData.didYouKnow.image}
                  alt="Almond superfood trivia"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&w=400&q=80';
                  }}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex items-center justify-center gap-1.5 pt-1">
                <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700"></span>
              </div>
            </div>

            {/* Widget 2: Popular Searches */}
            <div className="bg-white dark:bg-slate-900 rounded-[28px] p-5 border border-slate-200/70 dark:border-slate-800 shadow-2xs space-y-3">
              <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400">
                <Flame className="w-4 h-4 fill-amber-500 text-amber-500" />
                <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white">
                  Popular Searches
                </h3>
              </div>

              <ul className="space-y-2 text-xs font-semibold">
                {searchData.popularSearches.map((ps, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => { setQuery(ps); router.push(`/search?q=${encodeURIComponent(ps)}`); }}
                      className="text-left text-slate-700 dark:text-slate-300 hover:text-emerald-700 transition-colors flex items-center gap-2 cursor-pointer w-full"
                    >
                      <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{ps}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Widget 3: Related Foods */}
            <div className="bg-white dark:bg-slate-900 rounded-[28px] p-5 border border-slate-200/70 dark:border-slate-800 shadow-2xs space-y-3">
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white">
                Related Foods
              </h3>

              <div className="space-y-2.5">
                {searchData.relatedFoods.map((rf) => (
                  <div key={rf.id} className="flex items-center justify-between p-2 rounded-2xl bg-slate-50/70 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700">
                    <div className="flex items-center gap-3">
                      <img
                        src={rf.image}
                        alt={rf.name}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&w=150&q=80';
                        }}
                        className="w-9 h-9 rounded-xl object-cover shrink-0"
                      />
                      <span className="text-xs font-extrabold text-slate-900 dark:text-white">
                        {rf.name}
                      </span>
                    </div>

                    <span className="px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-[10px] font-black">
                      {rf.score}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-1 text-center">
                <button
                  onClick={() => router.push('/healthy-foods')}
                  className="text-xs font-extrabold text-emerald-700 dark:text-emerald-400 hover:underline inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>View all</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Widget 4: Eat Healthy, Live Healthy! */}
            <div className="bg-[#f0f3eb] dark:bg-slate-900 rounded-[28px] p-5 border border-emerald-100/80 dark:border-slate-800 shadow-2xs space-y-3">
              <div className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400">
                <Heart className="w-4 h-4 fill-emerald-600 text-emerald-600" />
                <h3 className="text-xs font-black tracking-tight text-slate-900 dark:text-white">
                  Eat Healthy, Live Healthy!
                </h3>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                Explore more healthy foods and tips for a better life.
              </p>

              <button
                onClick={() => router.push('/healthy-foods')}
                className="w-full py-2.5 rounded-xl bg-[#1c6628] hover:bg-[#15501f] text-white font-extrabold text-xs shadow-2xs transition-colors cursor-pointer"
              >
                Explore Now
              </button>
            </div>
          </aside>
        </section>

        {/* REQUEST A FOOD MODAL */}
        {showRequestModal && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white dark:bg-slate-900 rounded-[28px] max-w-md w-full p-6 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                <h3 className="text-base font-black text-slate-900 dark:text-white">
                  Request a Food Item
                </h3>
                <button
                  onClick={() => setShowRequestModal(false)}
                  className="p-1 rounded-full text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {requestSuccess ? (
                <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                  <h4 className="text-sm font-bold text-emerald-900 dark:text-emerald-200">
                    Food Request Submitted!
                  </h4>
                  <p className="text-xs text-emerald-700 dark:text-emerald-300 font-medium">
                    Thank you! Our nutritionists will review and add this food item soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleRequestSubmit} className="space-y-4">
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                    Can't find a food item in our directory? Tell us the name and we'll add its nutrition profile!
                  </p>

                  <input
                    type="text"
                    required
                    placeholder="Enter food name (e.g. Dragonfruit, Chia Pudding)"
                    value={requestedFoodName}
                    onChange={(e) => setRequestedFoodName(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />

                  <div className="flex items-center justify-end gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setShowRequestModal(false)}
                      className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 text-xs font-bold cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-xl bg-[#1c6628] hover:bg-[#15501f] text-white font-extrabold text-xs shadow-2xs cursor-pointer"
                    >
                      Submit Request
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default function SearchResultsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#f8f9f6] flex items-center justify-center">Loading Search Results...</div>}>
      <SearchResultsContent />
    </Suspense>
  );
}
