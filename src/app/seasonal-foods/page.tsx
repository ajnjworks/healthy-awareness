'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { HeroBanner } from '../../components/common/HeroBanner';
import {
  Sun,
  CloudRain,
  Snowflake,
  Sprout,
  ShieldCheck,
  ShoppingBag,
  Globe,
  ChevronRight,
  CheckCircle2,
  Leaf,
  BarChart3,
  Store,
  HeartPulse,
  Lightbulb,
  Mail,
  ArrowRight,
  Send
} from 'lucide-react';

import seasonalRaw from '../../data/seasonalData.json';

export default function SeasonalFoodsDesignPage() {
  const router = useRouter();
  const [darkMode, setDarkMode] = useState(false);
  const [activeNav, setActiveNav] = useState('Seasonal Foods');
  const [activeTab, setActiveTab] = useState('summer');
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

  const activeSeason = seasonalRaw.seasons.find((s) => s.id === activeTab) || seasonalRaw.seasons[0];

  const getSeasonIcon = (iconName: string, className = 'w-4 h-4') => {
    switch (iconName) {
      case 'Sun': return <Sun className={className} />;
      case 'CloudRain': return <CloudRain className={className} />;
      case 'Snowflake': return <Snowflake className={className} />;
      default: return <Sun className={className} />;
    }
  };

  const getBadgeIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sprout': return <Sprout className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'ShoppingBag': return <ShoppingBag className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'Globe': return <Globe className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      default: return <Sprout className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
    }
  };

  const getWhyIcon = (iconName: string) => {
    switch (iconName) {
      case 'Leaf': return <Leaf className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'BarChart3': return <BarChart3 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'Store': return <Store className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'HeartPulse': return <HeartPulse className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      default: return <Leaf className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/60 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-300">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Seasonal Foods Guide',
            description: seasonalRaw.hero.description,
            url: 'https://healthylife.app/seasonal-foods',
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
        <Breadcrumb items={[{ label: 'Seasonal Foods' }]} />

        {/* 1. HERO HEADER SECTION */}
        <HeroBanner
          title="Seasonal Foods"
          subtitle={
            <div className="space-y-1">
              <p className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200">
                {seasonalRaw.hero.subtitle}
              </p>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed max-w-xl">
                {seasonalRaw.hero.description}
              </p>
            </div>
          }
          extraContent={
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {seasonalRaw.hero.badges.map((badge) => (
                <div
                  key={badge.id}
                  className="flex flex-col items-start p-3 rounded-2xl bg-slate-50/80 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60 space-y-1.5"
                >
                  <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/80">
                    {getBadgeIcon(badge.icon)}
                  </div>
                  <div>
                    <h4 className="text-xs font-extrabold text-slate-900 dark:text-white leading-snug">
                      {badge.label}
                    </h4>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium leading-tight">
                      {badge.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          }
          rightContent={
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center shrink-0">
              <img
                src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80"
                alt="Seasonal Basket"
                className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          }
        />

        {/* 2. SEASON TABS BAR (Summer, Monsoon, Winter) */}
        <div className="bg-white dark:bg-slate-900 p-2 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-xs grid grid-cols-3 gap-2">
          {seasonalRaw.seasons.map((season) => {
            const isSelected = activeTab === season.id;
            return (
              <button
                key={season.id}
                onClick={() => setActiveTab(season.id)}
                className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-emerald-50 text-emerald-700 border-2 border-emerald-500 dark:bg-emerald-950/80 dark:text-emerald-300 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                }`}
              >
                {getSeasonIcon(season.icon, `w-4 h-4 ${isSelected ? 'text-amber-500 fill-amber-500' : 'text-slate-400'}`)}
                <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-1 text-left sm:text-center">
                  <span>{season.name}</span>
                  <span className="text-[10px] sm:text-xs font-normal opacity-80">({season.months})</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* 3. MAIN CONTENT GRID WITH RIGHT SIDEBAR */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Area (Active Season Foods Grid + Why Eat Seasonal) */}
          <div className="lg:col-span-8 space-y-8">
            {/* Season Foods Header & Cards Grid */}
            <div className="space-y-4">
              <div className="space-y-1">
                <h2 className="text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                  {getSeasonIcon(activeSeason.icon, 'w-5 h-5 text-amber-500 fill-amber-500')}
                  <span>{activeSeason.title}</span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
                  {activeSeason.description}
                </p>
              </div>

              {/* 4x2 Foods Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
                {activeSeason.foods.map((food) => (
                  <div
                    key={food.id}
                    onClick={() => router.push(`/healthy-foods/${food.id}`)}
                    className="group bg-white dark:bg-slate-900 rounded-3xl p-3.5 border border-slate-100 dark:border-slate-800 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-3 cursor-pointer"
                  >
                    {/* Top Food Image Container */}
                    <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden bg-slate-50 dark:bg-slate-800 shrink-0">
                      <img
                        src={food.image}
                        alt={food.name}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=500&q=80';
                        }}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Content Info */}
                    <div className="space-y-1 flex-1 flex flex-col justify-start">
                      <h3 className="text-sm font-extrabold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {food.name}
                      </h3>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium leading-relaxed line-clamp-3">
                        {food.subtitle}
                      </p>
                    </div>

                    {/* Tag Pill */}
                    <div className="pt-1">
                      <span className="inline-block px-2.5 py-1 rounded-xl bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 text-[10px] font-bold border border-emerald-100 dark:border-emerald-900/60">
                        {food.tag}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* View All Season Foods Button */}
              <div className="flex justify-center pt-2">
                <button
                  onClick={() => router.push('/healthy-foods')}
                  className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full border border-emerald-500 text-emerald-700 dark:text-emerald-400 text-xs font-bold hover:bg-emerald-50 dark:hover:bg-emerald-950/60 transition-colors shadow-xs cursor-pointer"
                >
                  <span>View All {activeSeason.name} Foods</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Why Eat Seasonal? Section */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-100 dark:border-slate-800 shadow-xs space-y-6">
              <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">
                Why Eat Seasonal?
              </h2>

              {/* 4 Feature Points Horizontal Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {seasonalRaw.whyEatSeasonal.map((item) => (
                  <div key={item.id} className="space-y-2">
                    <div className="p-2.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 inline-block">
                      {getWhyIcon(item.icon)}
                    </div>
                    <h4 className="text-xs font-extrabold text-slate-900 dark:text-white">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Tip Banner Card */}
              <div className="bg-emerald-50/70 dark:bg-emerald-950/40 rounded-2xl p-4 sm:p-5 border border-emerald-100 dark:border-emerald-900/60 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-amber-100 dark:bg-amber-950/80 text-amber-600 shrink-0 mt-0.5">
                    <Lightbulb className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">Tip</h4>
                    <p className="text-xs text-slate-700 dark:text-slate-300 font-medium leading-relaxed max-w-lg">
                      Try to include a variety of seasonal fruits, vegetables, whole grains and herbs in your daily diet for maximum health benefits.
                    </p>
                  </div>
                </div>

                <img
                  src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=200&q=80"
                  alt="Seasonal Salad"
                  className="w-16 h-16 rounded-2xl object-cover shrink-0"
                />
              </div>
            </div>
          </div>

          {/* Right Sidebar Column (4 Cards) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Card 1: Seasonal Calendar */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-100 dark:border-slate-800 shadow-xs space-y-4">
              <div className="space-y-0.5">
                <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">
                  Seasonal Calendar
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  Know what's in season all year round.
                </p>
              </div>

              <div className="space-y-2">
                {seasonalRaw.seasons.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setActiveTab(s.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                      activeTab === s.id
                        ? 'bg-emerald-50 border-emerald-300 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 font-bold'
                        : 'bg-slate-50/60 dark:bg-slate-800/60 border-slate-100 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 hover:border-slate-200'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-white dark:bg-slate-800 shadow-xs">
                        {getSeasonIcon(s.icon, 'w-4 h-4 text-amber-500')}
                      </div>
                      <div>
                        <div className="text-xs font-bold">{s.name} <span className="text-[10px] font-normal text-slate-500">({s.months})</span></div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400">{s.tagline}</div>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </button>
                ))}
              </div>

              <div className="pt-1 text-center">
                <button
                  onClick={() => setActiveTab('summer')}
                  className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline inline-flex items-center gap-1"
                >
                  <span>View Full Calendar</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Card 2: Top Benefits */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-100 dark:border-slate-800 shadow-xs space-y-4">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">
                  Top Benefits
                </h3>
              </div>

              <ul className="space-y-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                {seasonalRaw.topBenefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 3: Popular Seasonal Foods */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-100 dark:border-slate-800 shadow-xs space-y-4">
              <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">
                Popular Seasonal Foods
              </h3>

              <div className="space-y-3">
                {seasonalRaw.popularFoods.map((pop, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={pop.image}
                        alt={pop.name}
                        className="w-10 h-10 rounded-xl object-cover"
                      />
                      <div>
                        <h4 className="text-xs font-bold text-slate-900 dark:text-white">{pop.name}</h4>
                        <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">{pop.season}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-1 text-center">
                <button
                  onClick={() => router.push('/healthy-foods')}
                  className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline inline-flex items-center gap-1"
                >
                  <span>View All Foods</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Card 4: Stay Updated! */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-100 dark:border-slate-800 shadow-xs space-y-3">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600">
                  <Mail className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-extrabold text-emerald-700 dark:text-emerald-400">
                  Stay Updated!
                </h3>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                Get seasonal food tips, recipes and health articles straight to your inbox.
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

        {/* 4. BOTTOM BANNER */}
        <div className="relative rounded-3xl bg-gradient-to-r from-emerald-50 to-green-100 dark:from-emerald-950/60 dark:to-green-950/40 p-6 sm:p-8 border border-emerald-100 dark:border-emerald-900/60 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 max-w-xl">
            <h3 className="text-lg sm:text-xl font-extrabold text-emerald-950 dark:text-emerald-200">
              Eat Seasonal. Eat Natural. Live Better.
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
              Choose seasonal foods and take a step towards a healthier you and a healthier planet.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=400&q=80"
            alt="Fresh Peppers & Produce"
            className="w-48 h-28 object-cover rounded-2xl shrink-0"
          />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
