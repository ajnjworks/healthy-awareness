'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { HeroBanner } from '../../components/common/HeroBanner';
import {
  Clock,
  Calendar,
  ChevronRight,
  Shield,
  Activity,
  Scale,
  Heart,
  Droplet,
  ShieldCheck,
  Sparkles,
  Leaf,
  Mail,
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  BookOpen,
  Smile,
  FileCheck
} from 'lucide-react';

import articlesRaw from '../../data/articlesData.json';

export default function ArticleListPage() {
  const router = useRouter();
  const [darkMode, setDarkMode] = useState(false);
  const [activeNav, setActiveNav] = useState('Articles');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [currentPage, setCurrentPage] = useState(1);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

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
    } else if (navItem === 'Articles') {
      router.push('/articles');
    } else if (navItem === 'Seasonal Foods') {
      router.push('/seasonal-foods');
    } else {
      router.push('/');
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 4000);
  };

  const getCategoryIcon = (iconName?: string) => {
    switch (iconName) {
      case 'Shield': return <Shield className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
      case 'Activity': return <Activity className="w-4 h-4 text-sky-600 dark:text-sky-400" />;
      case 'Scale': return <Scale className="w-4 h-4 text-amber-600 dark:text-amber-400" />;
      case 'Heart': return <Heart className="w-4 h-4 text-rose-600 dark:text-rose-400" />;
      case 'Droplet': return <Droplet className="w-4 h-4 text-purple-600 dark:text-purple-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-4 h-4 text-teal-600 dark:text-teal-400" />;
      case 'Sparkles': return <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />;
      case 'Leaf': return <Leaf className="w-4 h-4 text-green-600 dark:text-green-400" />;
      default: return <Shield className="w-4 h-4 text-emerald-600" />;
    }
  };

  // Filter & Sort Logic
  const filteredArticles = articlesRaw.articleList.filter((art) => {
    if (selectedCategory === 'all') return true;
    return art.categorySlug === selectedCategory;
  });

  return (
    <div className="min-h-screen bg-slate-50/60 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-300">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Health Articles',
            description: 'Expert-backed articles to help you make better food and lifestyle choices.',
            url: 'https://healthylife.app/articles',
          }),
        }}
      />

      {/* Top Navbar */}
      <Navbar
        darkMode={darkMode}
        onToggleDarkMode={handleToggleDarkMode}
        activeNav={activeNav}
        onNavClick={handleNavClick}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
        {/* Breadcrumb */}
        <Breadcrumb items={[{ label: 'Health Articles' }]} />

        {/* 1. HERO HEADER SECTION */}
        <HeroBanner
          title="Health Articles"
          subtitle="Expert-backed articles to help you make better food and lifestyle choices."
          extraContent={<div className="w-12 h-1 bg-emerald-600 rounded-full mt-1" />}
          rightContent={
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 flex items-center justify-center shrink-0">
              <img
                src="/images/hero-banner.png"
                alt="Health Articles Banner"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80';
                }}
                className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          }
        />

        {/* 2. CATEGORY FILTERS & SORT CONTROLS BAR */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Category Filter Pills (Horizontal Scroll) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar max-w-full">
            {articlesRaw.articleCategories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setCurrentPage(1);
                  }}
                  className={`px-4 py-2 rounded-full text-xs font-extrabold whitespace-nowrap transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-emerald-700 text-white shadow-xs'
                      : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center justify-end shrink-0">
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 text-xs font-extrabold py-2 pl-3.5 pr-8 rounded-xl shadow-xs focus:outline-none cursor-pointer"
              >
                <option value="newest">Newest First</option>
                <option value="popular">Most Popular</option>
                <option value="oldest">Oldest First</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* 3. MAIN CONTENT GRID (Left 3x3 Articles Grid + Right Sidebar) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Articles Grid Column (8 Cols) */}
          <div className="lg:col-span-8 space-y-8">
            {/* 3-Column Articles Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
              {filteredArticles.map((art) => (
                <div
                  key={art.id}
                  onClick={() => router.push(`/articles/${art.id}`)}
                  className="group bg-white dark:bg-slate-900 rounded-3xl p-4 border border-slate-100 dark:border-slate-800 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-3 cursor-pointer"
                >
                  {/* Top Image Container with Optional Featured Badge */}
                  <div className="relative aspect-16/10 w-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 shrink-0">
                    {art.featured && (
                      <span className="absolute top-2 left-2 z-10 px-2.5 py-1 rounded-full bg-emerald-800 text-white text-[10px] font-black uppercase tracking-wider shadow-sm">
                        FEATURED
                      </span>
                    )}
                    <img
                      src={art.image}
                      alt={art.title}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=500&q=80';
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-2xl"
                    />
                  </div>

                  {/* Content Info */}
                  <div className="space-y-1.5 flex-1 flex flex-col justify-start">
                    <span className={`text-[11px] font-extrabold uppercase tracking-wider ${art.categoryColor}`}>
                      {art.category}
                    </span>
                    <h3 className="text-sm font-extrabold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-snug">
                      {art.title}
                    </h3>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium leading-relaxed line-clamp-2">
                      {art.description}
                    </p>
                  </div>

                  {/* Footer Meta */}
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[10px] font-semibold text-slate-400">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      <span>{art.readTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-slate-400" />
                      <span>{art.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center justify-center gap-1.5 pt-4">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                className="w-8 h-8 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center text-xs font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 cursor-pointer"
              >
                &lt;
              </button>

              {[1, 2, 3, 4].map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-8 h-8 rounded-full text-xs font-extrabold transition-all cursor-pointer ${
                    currentPage === page
                      ? 'bg-emerald-700 text-white shadow-xs'
                      : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100'
                  }`}
                >
                  {page}
                </button>
              ))}

              <span className="text-xs text-slate-400 font-bold px-1">...</span>

              <button
                onClick={() => setCurrentPage(10)}
                className={`w-8 h-8 rounded-full text-xs font-extrabold transition-all cursor-pointer ${
                  currentPage === 10
                    ? 'bg-emerald-700 text-white shadow-xs'
                    : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100'
                }`}
              >
                10
              </button>

              <button
                onClick={() => setCurrentPage((prev) => prev + 1)}
                className="w-8 h-8 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center text-xs font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              >
                &gt;
              </button>
            </div>
          </div>

          {/* Right Sidebar Column (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Card 1: Browse by Category */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-100 dark:border-slate-800 shadow-xs space-y-4">
              <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">
                Browse by Category
              </h3>

              <div className="space-y-1">
                {articlesRaw.articleCategories.slice(1).map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      setCurrentPage(1);
                    }}
                    className={`w-full flex items-center justify-between p-2.5 rounded-2xl text-xs font-bold transition-all text-left cursor-pointer ${
                      selectedCategory === cat.id
                        ? 'bg-emerald-50 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      {getCategoryIcon(cat.icon)}
                      <span>{cat.name}</span>
                    </div>
                    <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500">
                      {cat.count}
                    </span>
                  </button>
                ))}
              </div>

              <div className="pt-1 text-center border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline inline-flex items-center gap-1"
                >
                  <span>View All Categories</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Card 2: Popular Articles */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-100 dark:border-slate-800 shadow-xs space-y-4">
              <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">
                Popular Articles
              </h3>

              <div className="space-y-3">
                {articlesRaw.popularSidebar.map((pop) => (
                  <div
                    key={pop.number}
                    onClick={() => router.push(`/articles/${pop.id}`)}
                    className="flex items-center gap-3 group cursor-pointer"
                  >
                    <div className="w-5 h-5 rounded-full bg-emerald-700 text-white text-[11px] font-extrabold flex items-center justify-center shrink-0">
                      {pop.number}
                    </div>
                    <img
                      src={pop.image}
                      alt={pop.title}
                      className="w-12 h-12 rounded-xl object-cover shrink-0"
                    />
                    <div className="space-y-0.5 min-w-0">
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 transition-colors line-clamp-2 leading-snug">
                        {pop.title}
                      </h4>
                      <span className="text-[10px] text-slate-400 font-semibold">{pop.readTime}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-1 text-center border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline inline-flex items-center gap-1"
                >
                  <span>View All Popular Articles</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Card 3: Stay Healthy, Stay Informed! */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-100 dark:border-slate-800 shadow-xs space-y-3">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600">
                  <Mail className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-extrabold text-emerald-700 dark:text-emerald-400">
                  Stay Healthy, Stay Informed!
                </h3>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                Get the latest health articles, tips and recipes straight to your inbox.
              </p>

              {subscribed ? (
                <div className="p-3 rounded-xl bg-emerald-50 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 text-xs font-bold text-center">
                  Thank you for subscribing!
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
                  >
                    Subscribe Now
                  </button>
                </form>
              )}
              <p className="text-[11px] text-slate-400 text-center font-medium">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>

        {/* 4. BOTTOM FEATURE HIGHLIGHTS RIBBON (4 Pillars) */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-100 dark:border-slate-800 shadow-xs grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div className="space-y-0.5">
              <h4 className="text-xs font-extrabold text-slate-900 dark:text-white">Expert Backed</h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                All articles are written and reviewed by health experts.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 shrink-0">
              <FileCheck className="w-5 h-5" />
            </div>
            <div className="space-y-0.5">
              <h4 className="text-xs font-extrabold text-slate-900 dark:text-white">Research Based</h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                Our content is based on the latest scientific research.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 shrink-0">
              <Leaf className="w-5 h-5" />
            </div>
            <div className="space-y-0.5">
              <h4 className="text-xs font-extrabold text-slate-900 dark:text-white">Easy to Understand</h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                We make health information simple and practical.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 shrink-0">
              <Smile className="w-5 h-5" />
            </div>
            <div className="space-y-0.5">
              <h4 className="text-xs font-extrabold text-slate-900 dark:text-white">Your Health Matters</h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                Helping you live a longer, healthier and happier life.
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
