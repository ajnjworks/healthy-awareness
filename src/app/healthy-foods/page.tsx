'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { HeroBanner } from '../../components/common/HeroBanner';
import { FRUITS_LIST } from '../../data/fruitsData';
import { VEGETABLES_LIST } from '../../data/vegetablesData';
import { GROCERIES_LIST } from '../../data/groceriesData';
import { NUTS_SEEDS_LIST } from '../../data/nutsSeedsData';
import { FISHES_LIST } from '../../data/fishesData';
import { MEATS_LIST } from '../../data/meatsData';
import { EGGS_LIST } from '../../data/eggsData';
import { SWEETENERS_LIST } from '../../data/sweetenersData';
import { BAKERY_LIST } from '../../data/bakeryData';
import { BEVERAGES_LIST } from '../../data/beveragesData';
import { COOKINGOILS_LIST } from '../../data/cookingOilsData';
import { GRAINSCEREALS_LIST } from '../../data/grainsCerealsData';
import { BREAKFAST_LIST } from '../../data/breakfastData';
import { DAIRY_LIST } from '../../data/dairyData';
import { SEEDS_LIST } from '../../data/seedsData';
import { PULSES_LIST } from '../../data/pulsesData';
import { MILLETS_LIST } from '../../data/milletsData';
import { SNACKS_LIST } from '../../data/snacksData';
import { SPICES_LIST } from '../../data/spicesData';
import {
  Apple,
  Salad,
  Wheat,
  Fish,
  Milk,
  Nut,
  Sparkles,
  Flame,
  CupSoda,
  Layers,
  MoreHorizontal,
  Search,
  ChevronDown,
  ArrowRight,
  ChevronRight,
  Home,
  Bookmark,
  Leaf,
  Heart,
  ShieldCheck,
  Smile,
  ShoppingBag,
  Egg,
  Utensils,
  Cookie,
  Coffee,
  Sprout
} from 'lucide-react';

interface CategoryItem {
  id: string;
  name: string;
  count: number;
  description: string;
  image: string;
  link: string;
  icon: React.ReactNode;
}

export default function CategoryDesignPage() {
  const router = useRouter();
  const [darkMode, setDarkMode] = useState(false);
  const [activeNav, setActiveNav] = useState('Foods');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategoryId, setSelectedCategoryId] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

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

  const totalFoodsCount =
    FRUITS_LIST.length +
    VEGETABLES_LIST.length +
    GROCERIES_LIST.length +
    NUTS_SEEDS_LIST.length +
    FISHES_LIST.length +
    MEATS_LIST.length +
    EGGS_LIST.length +
    SWEETENERS_LIST.length +
    BAKERY_LIST.length +
    BEVERAGES_LIST.length +
    COOKINGOILS_LIST.length +
    GRAINSCEREALS_LIST.length +
    BREAKFAST_LIST.length +
    DAIRY_LIST.length +
    SEEDS_LIST.length +
    PULSES_LIST.length +
    MILLETS_LIST.length +
    SNACKS_LIST.length +
    SPICES_LIST.length;

  const sidebarCategories = [
    { id: 'all', name: 'All Categories', count: totalFoodsCount, icon: <Layers className="w-4 h-4 text-emerald-600" /> },
    { id: 'fruits', name: 'Fruits', count: FRUITS_LIST.length, icon: <Apple className="w-4 h-4 text-amber-500" /> },
    { id: 'vegetables', name: 'Vegetables', count: VEGETABLES_LIST.length, icon: <Salad className="w-4 h-4 text-emerald-500" /> },
    { id: 'spices', name: 'Spices & Herbs', count: SPICES_LIST.length, icon: <Sparkles className="w-4 h-4 text-purple-500" /> },
    { id: 'millets', name: 'Ancient Millets', count: MILLETS_LIST.length, icon: <Wheat className="w-4 h-4 text-amber-600" /> },
    { id: 'pulses', name: 'Pulses, Dals & Legumes', count: PULSES_LIST.length, icon: <Sprout className="w-4 h-4 text-emerald-600" /> },
    { id: 'grains-cereals', name: 'Grains & Cereals', count: GRAINSCEREALS_LIST.length, icon: <Wheat className="w-4 h-4 text-yellow-600" /> },
    { id: 'breakfast', name: 'Breakfast Foods', count: BREAKFAST_LIST.length, icon: <Coffee className="w-4 h-4 text-orange-500" /> },
    { id: 'dairy', name: 'Milk & Dairy', count: DAIRY_LIST.length, icon: <Milk className="w-4 h-4 text-sky-500" /> },
    { id: 'seeds', name: 'Nutrient Seeds', count: SEEDS_LIST.length, icon: <Sprout className="w-4 h-4 text-teal-600" /> },
    { id: 'snacks', name: 'Snacks & Packaged Foods', count: SNACKS_LIST.length, icon: <Cookie className="w-4 h-4 text-amber-500" /> },
    { id: 'groceries', name: 'Groceries & Pantry', count: GROCERIES_LIST.length, icon: <ShoppingBag className="w-4 h-4 text-orange-600" /> },
    { id: 'nuts-seeds', name: 'Nuts & Seeds', count: NUTS_SEEDS_LIST.length, icon: <Nut className="w-4 h-4 text-amber-700" /> },
    { id: 'fishes', name: 'Fishes & Seafood', count: FISHES_LIST.length, icon: <Fish className="w-4 h-4 text-sky-500" /> },
    { id: 'meats', name: 'Meats & Poultry', count: MEATS_LIST.length, icon: <Utensils className="w-4 h-4 text-rose-500" /> },
    { id: 'eggs', name: 'Eggs', count: EGGS_LIST.length, icon: <Egg className="w-4 h-4 text-yellow-500" /> },
    { id: 'cooking-oils', name: 'Cooking Oils & Fats', count: COOKINGOILS_LIST.length, icon: <Flame className="w-4 h-4 text-amber-500" /> },
    { id: 'beverages', name: 'Beverages & Drinks', count: BEVERAGES_LIST.length, icon: <CupSoda className="w-4 h-4 text-cyan-500" /> },
    { id: 'bakery', name: 'Bakery & Breads', count: BAKERY_LIST.length, icon: <Cookie className="w-4 h-4 text-amber-600" /> },
    { id: 'sweeteners', name: 'Sweeteners & Sugars', count: SWEETENERS_LIST.length, icon: <Sparkles className="w-4 h-4 text-purple-500" /> },
  ];

  const mainCategories: CategoryItem[] = [
    {
      id: 'fruits',
      name: 'Fruits',
      count: FRUITS_LIST.length,
      description: 'Natural sweetness packed with vitamins, minerals and antioxidants.',
      image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=400&q=80',
      link: '/healthy-foods/fruits',
      icon: <Apple className="w-4 h-4 text-amber-500" />,
    },
    {
      id: 'vegetables',
      name: 'Vegetables & Greens',
      count: VEGETABLES_LIST.length,
      description: 'Nutrient-rich leafy greens, cruciferous, root veggies and gourds for vibrant health.',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=400&q=80',
      link: '/healthy-foods/vegetables',
      icon: <Salad className="w-4 h-4 text-emerald-500" />,
    },
    {
      id: 'millets',
      name: 'Ancient Millets',
      count: MILLETS_LIST.length,
      description: 'Calcium-rich ragi, iron-loaded bajra, gluten-free jowar, barnyard, foxtail and kodo millets.',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=400&q=80',
      link: '/healthy-foods/millets',
      icon: <Wheat className="w-4 h-4 text-amber-600" />,
    },
    {
      id: 'pulses',
      name: 'Pulses, Dals & Legumes',
      count: PULSES_LIST.length,
      description: 'High-protein toor, moong, masoor, chana dal, rajma kidney beans, chickpeas and whole soybeans.',
      image: 'https://images.unsplash.com/photo-1585994192701-f1a505c817ea?auto=format&fit=crop&w=400&q=80',
      link: '/healthy-foods/pulses',
      icon: <Sprout className="w-4 h-4 text-emerald-600" />,
    },
    {
      id: 'breakfast',
      name: 'Breakfast Foods',
      count: BREAKFAST_LIST.length,
      description: 'Steamed fermented idlis, golden dosas, vegetable poha, savoury upma and ven pongal.',
      image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=400&q=80',
      link: '/healthy-foods/breakfast',
      icon: <Coffee className="w-4 h-4 text-orange-500" />,
    },
    {
      id: 'dairy',
      name: 'Milk & Dairy',
      count: DAIRY_LIST.length,
      description: 'Fresh paneer, probiotic dahi curd, light buttermilk, whole milk, Greek yogurt and cheeses.',
      image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=400&q=80',
      link: '/healthy-foods/dairy',
      icon: <Milk className="w-4 h-4 text-sky-500" />,
    },
    {
      id: 'seeds',
      name: 'Nutrient-Dense Seeds',
      count: SEEDS_LIST.length,
      description: 'Raw chia, flax, pumpkin, sesame and sunflower seeds loaded with omega-3s, zinc and fiber.',
      image: 'https://images.unsplash.com/photo-1514733670139-4d87a1941d55?auto=format&fit=crop&w=400&q=80',
      link: '/healthy-foods/seeds',
      icon: <Sprout className="w-4 h-4 text-teal-600" />,
    },
    {
      id: 'grains-cereals',
      name: 'Grains & Cereals',
      count: GRAINSCEREALS_LIST.length,
      description: 'Wholesome staple rices, whole wheat atta, oats, dalia, barley and traditional flattened rice.',
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=400&q=80',
      link: '/healthy-foods/grains-cereals',
      icon: <Wheat className="w-4 h-4 text-yellow-600" />,
    },
    {
      id: 'groceries',
      name: 'Groceries & Pantry',
      count: GROCERIES_LIST.length,
      description: 'Ancient grains, millets, protein pulses, pure flours, cold-pressed oils and healing spices.',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=400&q=80',
      link: '/healthy-foods/groceries',
      icon: <ShoppingBag className="w-4 h-4 text-orange-600" />,
    },
    {
      id: 'nuts-seeds',
      name: 'Dry Fruits, Nuts & Seeds',
      count: NUTS_SEEDS_LIST.length,
      description: 'Powerhouses of heart-healthy omega fats, plant protein, fiber and neuro-protective minerals.',
      image: 'https://images.unsplash.com/photo-1543208541-0961a29a8c3d?auto=format&fit=crop&w=400&q=80',
      link: '/healthy-foods/nuts-seeds',
      icon: <Nut className="w-4 h-4 text-amber-700" />,
    },
    {
      id: 'fishes',
      name: 'Fishes & Seafood',
      count: FISHES_LIST.length,
      description: 'Cold-water fatty fish, coastal varieties, crustaceans, mollusks and omega-3 rich roe.',
      image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=400&q=80',
      link: '/healthy-foods/fishes',
      icon: <Fish className="w-4 h-4 text-sky-500" />,
    },
    {
      id: 'meats',
      name: 'Meats & Poultry',
      count: MEATS_LIST.length,
      description: 'Lean poultry, pasture-raised meats, prime steak cuts and bioavailable organ meats.',
      image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=400&q=80',
      link: '/healthy-foods/meats',
      icon: <Utensils className="w-4 h-4 text-rose-500" />,
    },
    {
      id: 'eggs',
      name: 'Eggs & Specialty Varieties',
      count: EGGS_LIST.length,
      description: 'The gold standard of protein! Whole poultry eggs, egg whites, golden yolks and heritage eggs.',
      image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=400&q=80',
      link: '/healthy-foods/eggs',
      icon: <Egg className="w-4 h-4 text-yellow-500" />,
    },
    {
      id: 'cooking-oils',
      name: 'Cooking Oils & Healthy Fats',
      count: COOKINGOILS_LIST.length,
      description: 'Extra virgin olive oil, cold-pressed groundnut, mustard, sesame and coconut oils.',
      image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=400&q=80',
      link: '/healthy-foods/cooking-oils',
      icon: <Flame className="w-4 h-4 text-amber-500" />,
    },
    {
      id: 'beverages',
      name: 'Beverages & Hydration',
      count: BEVERAGES_LIST.length,
      description: 'Fresh coconut water, antioxidant brewed teas, black coffee and 100% natural juices.',
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=400&q=80',
      link: '/healthy-foods/beverages',
      icon: <CupSoda className="w-4 h-4 text-cyan-500" />,
    },
    {
      id: 'bakery',
      name: 'Bakery & Whole Grain Breads',
      count: BAKERY_LIST.length,
      description: 'Whole wheat bread, stone-ground chapatis, multigrain loaves, artisan dinner pav and rolls.',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80',
      link: '/healthy-foods/bakery',
      icon: <Cookie className="w-4 h-4 text-amber-600" />,
    },
    {
      id: 'sweeteners',
      name: 'Sweeteners & Traditional Sugars',
      count: SWEETENERS_LIST.length,
      description: 'Raw honey, traditional mineral-rich jaggery, coconut blossom sugar and table sucrose.',
      image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=400&q=80',
      link: '/healthy-foods/sweeteners',
      icon: <Sparkles className="w-4 h-4 text-purple-500" />,
    },
    {
      id: 'spices',
      name: 'Spices & Herbs',
      count: SPICES_LIST.length,
      description: 'Curcumin-rich turmeric, cumin, black pepper, cinnamon, ginger and therapeutic garlic.',
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=400&q=80',
      link: '/healthy-foods/spices',
      icon: <Sparkles className="w-4 h-4 text-purple-500" />,
    },
    {
      id: 'snacks',
      name: 'Snacks & Packaged Foods',
      count: SNACKS_LIST.length,
      description: 'Crunchy roasted makhana, roasted chana, air-popped popcorn, potato crisps and tea biscuits.',
      image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=400&q=80',
      link: '/healthy-foods/snacks',
      icon: <Cookie className="w-4 h-4 text-amber-500" />,
    },
  ];

  // Filter main categories by search query and sidebar category selection
  const filteredCategories = mainCategories.filter((cat) => {
    if (selectedCategoryId !== 'all' && cat.id !== selectedCategoryId) {
      return false;
    }
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      return cat.name.toLowerCase().includes(q) || cat.description.toLowerCase().includes(q);
    }
    return true;
  });

  // Sort categories dynamically
  const sortedCategories = [...filteredCategories].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    }
    if (sortBy === 'articles') {
      return b.count - a.count;
    }
    return 0; // 'popular' maintains default order
  });

  return (
    <div className="min-h-screen bg-slate-50/60 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-300">
      {/* Top Navbar */}
      <Navbar
        darkMode={darkMode}
        onToggleDarkMode={handleToggleDarkMode}
        activeNav={activeNav}
        onNavClick={handleNavClick}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Breadcrumb Navigation */}
        <Breadcrumb items={[{ label: 'Healthy Foods' }]} />

        {/* Header Hero Section (Compact Banner) */}
        <HeroBanner
          title="Healthy Foods"
          subtitle="Explore a wide range of healthy food categories. Choose a category to discover benefits, nutrition facts, meal ideas, tips and much more."
          extraContent={<div className="w-12 h-1 bg-emerald-600 rounded-full mt-1" />}
          rightContent={
            <div className="relative w-52 h-52 sm:w-60 sm:h-60 lg:w-64 lg:h-64 flex items-center justify-center shrink-0">
              <img
                src="/images/hero-banner.png"
                alt="Healthy Food Bowl"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80';
                }}
                className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          }
        />

        {/* Search & Sort Controls Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm font-medium text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-xs"
            />
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center justify-end gap-2 text-xs font-semibold text-slate-600 dark:text-slate-300">
            <span>Sort by:</span>
            <div className="relative inline-block">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white dark:bg-slate-900 pl-3 pr-8 py-2 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-900 dark:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-xs"
              >
                <option value="popular">Popular</option>
                <option value="articles">Most Articles</option>
                <option value="name">Name A-Z</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Main Content Grid with Left Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Sidebar (Browse Categories) */}
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-100 dark:border-slate-800 shadow-xs space-y-4">
              <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">
                Browse Categories
              </h3>

              <div className="space-y-1">
                {sidebarCategories.map((item) => {
                  const isSelected = selectedCategoryId === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setSelectedCategoryId(item.id);
                        setSearchQuery('');
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/70 dark:text-emerald-300 font-extrabold'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        {item.icon}
                        <span className="truncate">{item.name}</span>
                      </div>
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          isSelected
                            ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/90 dark:text-emerald-200'
                            : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                        }`}
                      >
                        {item.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Eat Healthy Live Better Promo Box */}
            <div className="relative rounded-3xl bg-gradient-to-br from-emerald-50 to-green-100 dark:from-emerald-950/60 dark:to-green-950/40 p-5 border border-emerald-200/60 dark:border-emerald-800/60 space-y-4 overflow-hidden">
              <div className="space-y-1 relative z-10 max-w-[70%]">
                <h4 className="text-sm font-extrabold text-emerald-950 dark:text-emerald-200 leading-snug">
                  Eat Healthy, Live Better
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                  Small food choices today lead to a healthier tomorrow.
                </p>
              </div>

              <button
                onClick={() => router.push('/')}
                className="relative z-10 inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
              >
                <span>Explore Tips</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              {/* Fresh Greens Decorative Corner Image */}
              <img
                src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=400&q=80"
                alt="Fresh Greens"
                className="absolute -bottom-4 -right-4 w-32 h-32 object-cover rounded-full pointer-events-none opacity-90 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right Main Grid Area (All Categories) */}
          <div className="lg:col-span-9 space-y-5">
            <div className="flex items-center justify-between">
              <h2 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
                All Categories
              </h2>
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                Showing 1-{sortedCategories.length} of 24 categories
              </span>
            </div>

            {/* 4-Column Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {sortedCategories.map((cat) => (
                <div
                  key={cat.id}
                  onClick={() => router.push(cat.link)}
                  className="group bg-white dark:bg-slate-900 rounded-3xl p-4 border border-slate-100 dark:border-slate-800 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-3 cursor-pointer"
                >
                  {/* Food Image (Wide horizontal layout matching design) */}
                  <div className="w-full aspect-16/10 bg-white dark:bg-slate-900 rounded-2xl flex items-center justify-center overflow-hidden shrink-0">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=600&q=80';
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-2xl"
                    />
                  </div>

                  {/* Content Info */}
                  <div className="space-y-1 flex-1 flex flex-col justify-start">
                    <h3 className="text-base font-extrabold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed line-clamp-3">
                      {cat.description}
                    </p>
                  </div>

                  {/* Link Footer */}
                  <div className="pt-2">
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 group-hover:underline">
                      <span>{cat.count} articles</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              ))}

              {/* 12th Callout Card: Can't find what you're looking for? */}
              <div className="bg-emerald-50/70 dark:bg-emerald-950/40 rounded-3xl p-5 border border-emerald-100 dark:border-emerald-900/60 shadow-xs flex flex-col justify-between space-y-4 text-center items-center">
                <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/80 text-emerald-600 dark:text-emerald-300 flex items-center justify-center">
                  <Bookmark className="w-5 h-5" />
                </div>

                <div className="space-y-1">
                  <h4 className="text-sm font-extrabold text-slate-900 dark:text-white leading-tight">
                    Can't find what you're looking for?
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                    Let us know! We're always adding new categories.
                  </p>
                </div>

                <button
                  onClick={() => router.push('/contact-us')}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Feature Highlights Ribbon above footer */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-100 dark:border-slate-800 shadow-xs grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-start gap-3">
            <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 shrink-0">
              <Leaf className="w-5 h-5" />
            </div>
            <div className="space-y-0.5">
              <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">Better Choices</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                Find the right foods for your body and health goals.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 shrink-0">
              <Heart className="w-5 h-5" />
            </div>
            <div className="space-y-0.5">
              <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">Balanced Nutrition</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                Eat a variety of foods and get all essential nutrients.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="space-y-0.5">
              <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">Stronger Immunity</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                Natural foods help boost your immunity and energy.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 shrink-0">
              <Smile className="w-5 h-5" />
            </div>
            <div className="space-y-0.5">
              <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">Healthy Lifestyle</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                Good food choices lead to a happy and healthy life.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
