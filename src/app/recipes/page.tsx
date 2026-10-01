'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { HeroBanner } from '../../components/common/HeroBanner';
import {
  Search,
  Clock,
  Heart,
  ChevronDown,
  ArrowRight,
  Shield,
  Sparkles,
  Users,
  Sun,
  Salad,
  Moon,
  Cookie,
  Coffee,
  Cake,
  SlidersHorizontal,
  RotateCcw,
  Mail,
  CheckCircle2,
  Utensils,
  BarChart3
} from 'lucide-react';

import recipesRaw from '../../data/recipesData.json';

interface Recipe {
  id: string;
  title: string;
  category: string;
  prepTime: string;
  tag: string;
  description: string;
  image: string;
  badgeColor: string;
}

export default function RecipesPage() {
  const router = useRouter();
  const [darkMode, setDarkMode] = useState(false);
  const [activeNav, setActiveNav] = useState('Healthy Recipes');
  const [activeCategory, setActiveCategory] = useState('All Recipes');
  const [sortOrder, setSortOrder] = useState('Newest First');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [visibleCount, setVisibleCount] = useState(9);

  // Sidebar Filters State
  const [filterMeal, setFilterMeal] = useState('All');
  const [filterDiet, setFilterDiet] = useState('All');
  const [filterTime, setFilterTime] = useState('All');
  const [filterGoal, setFilterGoal] = useState('All');
  const [filterIngredient, setFilterIngredient] = useState('All');

  // Newsletter State
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleResetFilters = () => {
    setFilterMeal('All');
    setFilterDiet('All');
    setFilterTime('All');
    setFilterGoal('All');
    setFilterIngredient('All');
    setActiveCategory('All Recipes');
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSuccess(true);
      setTimeout(() => setNewsletterSuccess(false), 4000);
      setNewsletterEmail('');
    }
  };

  const categories = [
    { id: 'All Recipes', label: 'All Recipes', icon: <Utensils className="w-4 h-4" /> },
    { id: 'Breakfast', label: 'Breakfast', icon: <Sun className="w-4 h-4 text-amber-500" /> },
    { id: 'Lunch', label: 'Lunch', icon: <Salad className="w-4 h-4 text-emerald-500" /> },
    { id: 'Dinner', label: 'Dinner', icon: <Moon className="w-4 h-4 text-purple-500" /> },
    { id: 'Snacks', label: 'Snacks', icon: <Cookie className="w-4 h-4 text-amber-600" /> },
    { id: 'Drinks', label: 'Drinks', icon: <Coffee className="w-4 h-4 text-sky-500" /> },
    { id: 'Desserts', label: 'Desserts', icon: <Cake className="w-4 h-4 text-pink-500" /> },
  ];

  // Filter recipes based on category & sidebar filter
  let filteredRecipes = recipesRaw.filter((recipe) => {
    if (activeCategory !== 'All Recipes' && recipe.category !== activeCategory) {
      return false;
    }
    if (filterMeal !== 'All' && recipe.category.toLowerCase() !== filterMeal.toLowerCase()) {
      return false;
    }
    return true;
  });

  // Top 5 Popular List
  const popularTop5 = recipesRaw.slice(0, 5);

  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      <Navbar
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
        activeNav={activeNav}
        onNavClick={(item) => setActiveNav(item)}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Breadcrumb */}
        <Breadcrumb items={[{ label: 'Healthy Recipes' }]} />

        {/* 1. HERO BANNER HEADER */}
        <HeroBanner
          title="Healthy Recipes"
          subtitle="Delicious, easy-to-make and healthy recipes for a better you and your family."
          extraContent={
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-2 rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-900/60 text-xs font-extrabold text-emerald-800 dark:text-emerald-300">
                <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/80 text-emerald-600 flex items-center justify-center shrink-0">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="block font-black">Nutritious</span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 font-normal">Balanced & wholesome</span>
                </div>
              </div>

              <div className="flex items-center gap-2 px-3 py-2 rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-900/60 text-xs font-extrabold text-emerald-800 dark:text-emerald-300">
                <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/80 text-emerald-600 flex items-center justify-center shrink-0">
                  <Clock className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="block font-black">Easy to Make</span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 font-normal">Simple ingredients</span>
                </div>
              </div>

              <div className="flex items-center gap-2 px-3 py-2 rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-900/60 text-xs font-extrabold text-emerald-800 dark:text-emerald-300">
                <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/80 text-emerald-600 flex items-center justify-center shrink-0">
                  <Users className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="block font-black">Family Friendly</span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 font-normal">Loved by everyone</span>
                </div>
              </div>
            </div>
          }
          rightContent={
            <div className="relative w-full max-w-sm aspect-4/3 rounded-3xl overflow-hidden shadow-md border-4 border-white dark:border-slate-800">
              <img
                src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80"
                alt="Healthy Recipe Salad Bowl"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          }
        />

        {/* 2. CATEGORY FILTER CHIPS & SORT BAR */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* Filter Chips */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-extrabold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                      : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
                  }`}
                >
                  {cat.icon}
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Sort Dropdown */}
          <div className="relative shrink-0">
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="appearance-none bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-extrabold text-slate-800 dark:text-slate-200 py-2 pl-4 pr-9 rounded-full shadow-xs focus:outline-none cursor-pointer"
            >
              <option value="Newest First">Newest First</option>
              <option value="Fastest Prep">Fastest Prep</option>
              <option value="Popular">Most Popular</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* 3. MAIN DUAL-COLUMN GRID (Popular Recipes 8 Cols vs Sidebars 4 Cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT 8 COLS: Popular Recipes Grid */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Popular Recipes
              </h2>
              <button
                onClick={() => setActiveCategory('All Recipes')}
                className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>View All Recipes</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* 3x3 Recipe Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {filteredRecipes.slice(0, visibleCount).map((recipe) => {
                const isFav = favorites.includes(recipe.id);
                return (
                  <div
                    key={recipe.id}
                    className="group bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      {/* Image Thumbnail */}
                      <div className="relative h-44 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                        <img
                          src={recipe.image}
                          alt={recipe.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />

                        {/* Favorite Heart Button Top Right */}
                        <button
                          onClick={(e) => toggleFavorite(recipe.id, e)}
                          aria-label="Save Recipe"
                          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-xs border border-slate-200/60 dark:border-slate-700/60 flex items-center justify-center text-slate-400 hover:text-red-500 shadow-sm transition-colors cursor-pointer"
                        >
                          <Heart
                            className={`w-4 h-4 ${
                              isFav ? 'fill-red-500 text-red-500' : ''
                            }`}
                          />
                        </button>
                      </div>

                      {/* Content */}
                      <div className="p-4 pt-1 space-y-2">
                        {/* Category Tag Pill */}
                        <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-black tracking-wider uppercase border ${recipe.badgeColor}`}>
                          {recipe.category}
                        </span>

                        <h3 className="text-base font-extrabold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-1">
                          {recipe.title}
                        </h3>

                        <p className="text-xs text-slate-600 dark:text-slate-400 font-medium line-clamp-2 leading-relaxed">
                          {recipe.description}
                        </p>
                      </div>
                    </div>

                    {/* Meta Row: Prep Time & Tag */}
                    <div className="px-4 pb-4 pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-bold text-slate-500">
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>{recipe.prepTime}</span>
                      </span>

                      <span className="flex items-center gap-1.5">
                        <BarChart3 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                        <span>{recipe.tag}</span>
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Load More Button */}
            {visibleCount < filteredRecipes.length && (
              <div className="pt-4 text-center">
                <button
                  onClick={() => setVisibleCount((prev) => prev + 3)}
                  className="px-6 py-2.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 text-xs font-extrabold flex items-center justify-center gap-1.5 mx-auto hover:bg-slate-50 dark:hover:bg-slate-800 shadow-xs transition-colors cursor-pointer"
                >
                  <span>Load More Recipes</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* RIGHT 4 COLS: Sidebars */}
          <div className="lg:col-span-4 space-y-6">
            {/* Sidebar 1: Find Recipes (Filter Panel) */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-100 dark:border-slate-800 shadow-xs space-y-4">
              <h3 className="text-sm font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-emerald-600" />
                <span>Find Recipes</span>
              </h3>

              <div className="space-y-3">
                {/* Meal Type */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-400 block">Meal Type</label>
                  <div className="relative">
                    <select
                      value={filterMeal}
                      onChange={(e) => setFilterMeal(e.target.value)}
                      className="w-full appearance-none bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs font-extrabold text-slate-800 dark:text-slate-200 py-2.5 pl-3 pr-8 rounded-xl focus:outline-none cursor-pointer"
                    >
                      <option value="All">All Meal Types</option>
                      <option value="Breakfast">Breakfast</option>
                      <option value="Lunch">Lunch</option>
                      <option value="Dinner">Dinner</option>
                      <option value="Snacks">Snacks</option>
                      <option value="Drinks">Drinks</option>
                      <option value="Desserts">Desserts</option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Diet Preference */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-400 block">Diet Preference</label>
                  <div className="relative">
                    <select
                      value={filterDiet}
                      onChange={(e) => setFilterDiet(e.target.value)}
                      className="w-full appearance-none bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs font-extrabold text-slate-800 dark:text-slate-200 py-2.5 pl-3 pr-8 rounded-xl focus:outline-none cursor-pointer"
                    >
                      <option value="All">All Diets</option>
                      <option value="Vegetarian">Vegetarian</option>
                      <option value="Vegan">Vegan</option>
                      <option value="High-Protein">High-Protein</option>
                      <option value="Low-Carb">Low-Carb</option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Cooking Time */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-400 block">Cooking Time</label>
                  <div className="relative">
                    <select
                      value={filterTime}
                      onChange={(e) => setFilterTime(e.target.value)}
                      className="w-full appearance-none bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs font-extrabold text-slate-800 dark:text-slate-200 py-2.5 pl-3 pr-8 rounded-xl focus:outline-none cursor-pointer"
                    >
                      <option value="All">Any Cooking Time</option>
                      <option value="15">Under 15 Mins</option>
                      <option value="30">Under 30 Mins</option>
                      <option value="45">Under 45 Mins</option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Health Goal */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-400 block">Health Goal</label>
                  <div className="relative">
                    <select
                      value={filterGoal}
                      onChange={(e) => setFilterGoal(e.target.value)}
                      className="w-full appearance-none bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs font-extrabold text-slate-800 dark:text-slate-200 py-2.5 pl-3 pr-8 rounded-xl focus:outline-none cursor-pointer"
                    >
                      <option value="All">All Health Goals</option>
                      <option value="Weight Loss">Weight Loss</option>
                      <option value="Muscle Gain">Muscle Gain</option>
                      <option value="Energy Boost">Energy Boost</option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Ingredients */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-400 block">Ingredients</label>
                  <div className="relative">
                    <select
                      value={filterIngredient}
                      onChange={(e) => setFilterIngredient(e.target.value)}
                      className="w-full appearance-none bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs font-extrabold text-slate-800 dark:text-slate-200 py-2.5 pl-3 pr-8 rounded-xl focus:outline-none cursor-pointer"
                    >
                      <option value="All">All Ingredients</option>
                      <option value="Quinoa">Quinoa</option>
                      <option value="Oats">Oats</option>
                      <option value="Paneer">Paneer</option>
                      <option value="Chickpeas">Chickpeas</option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Filter Buttons */}
              <div className="space-y-2 pt-2">
                <button
                  onClick={() => {}}
                  className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-extrabold flex items-center justify-center gap-2 shadow-sm transition-colors cursor-pointer"
                >
                  <Search className="w-4 h-4" />
                  <span>Search Recipes</span>
                </button>
                <button
                  onClick={handleResetFilters}
                  className="w-full py-2 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Filters</span>
                </button>
              </div>
            </div>

            {/* Sidebar 2: Popular Recipes Top 5 List */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-100 dark:border-slate-800 shadow-xs space-y-4">
              <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">
                Popular Recipes
              </h3>

              <div className="space-y-3">
                {popularTop5.map((item, idx) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 p-1 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors cursor-pointer group"
                  >
                    {/* Green Circular Rank Number Badge */}
                    <div className="w-6 h-6 rounded-full bg-emerald-600 text-white text-xs font-black flex items-center justify-center shrink-0">
                      {idx + 1}
                    </div>

                    {/* Thumbnail */}
                    <div className="w-12 h-12 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>

                    {/* Title & Time */}
                    <div className="space-y-0.5 min-w-0">
                      <h4 className="text-xs font-extrabold text-slate-900 dark:text-white truncate group-hover:text-emerald-600 transition-colors">
                        {item.title}
                      </h4>
                      <span className="text-[11px] font-semibold text-slate-400 block">
                        {item.prepTime}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-center border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={() => setActiveCategory('All Recipes')}
                  className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400 hover:underline inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>View All Recipes</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Sidebar 3: Newsletter Box */}
            <div className="bg-emerald-50/50 dark:bg-emerald-950/30 rounded-3xl p-5 border border-emerald-100 dark:border-emerald-900/60 shadow-xs space-y-4">
              <div className="flex items-center gap-2.5 text-emerald-800 dark:text-emerald-300">
                <div className="w-9 h-9 rounded-full bg-emerald-100 dark:bg-emerald-900/80 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-extrabold leading-snug">
                  Get Healthy Recipes in Your Inbox!
                </h3>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                Subscribe to get the latest healthy recipes, tips and updates.
              </p>

              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-extrabold transition-colors shadow-xs cursor-pointer"
                >
                  {newsletterSuccess ? 'Subscribed! 🎉' : 'Subscribe Now'}
                </button>
              </form>

              <span className="text-[11px] font-semibold text-slate-400 block text-center">
                No spam. Unsubscribe anytime.
              </span>
            </div>
          </div>
        </div>

        {/* 4. BOTTOM FEATURE RIBBON (4 Full-width Columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pt-4 border-t border-slate-200/60 dark:border-slate-800/80">
          {/* Feature 1 */}
          <div className="flex items-start gap-3 p-2">
            <div className="p-2.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 shrink-0 border border-emerald-100 dark:border-emerald-900/60">
              <Shield className="w-5 h-5" />
            </div>
            <div className="space-y-0.5">
              <h4 className="text-xs font-extrabold text-slate-900 dark:text-white">Nutritious & Balanced</h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                Our recipes are designed by nutrition experts for your well-being.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start gap-3 p-2">
            <div className="p-2.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 shrink-0 border border-emerald-100 dark:border-emerald-900/60">
              <Clock className="w-5 h-5" />
            </div>
            <div className="space-y-0.5">
              <h4 className="text-xs font-extrabold text-slate-900 dark:text-white">Quick & Easy</h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                Simple ingredients and quick steps for busy lifestyles.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-start gap-3 p-2">
            <div className="p-2.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 shrink-0 border border-emerald-100 dark:border-emerald-900/60">
              <Heart className="w-5 h-5" />
            </div>
            <div className="space-y-0.5">
              <h4 className="text-xs font-extrabold text-slate-900 dark:text-white">Healthy Living</h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                Eat healthy, feel better and live a longer life.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex items-start gap-3 p-2">
            <div className="p-2.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 shrink-0 border border-emerald-100 dark:border-emerald-900/60">
              <Users className="w-5 h-5" />
            </div>
            <div className="space-y-0.5">
              <h4 className="text-xs font-extrabold text-slate-900 dark:text-white">Family Friendly</h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                Delicious recipes that your family will love.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
