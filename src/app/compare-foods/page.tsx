'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { HeroBanner } from '../../components/common/HeroBanner';
import {
  Scale as ScaleIcon,
  Heart,
  Brain,
  Sun,
  ShieldCheck,
  Sparkles,
  Flame,
  Dumbbell,
  Moon,
  ChevronDown,
  ChevronRight,
  Share2,
  Lightbulb,
  Info,
  CheckCircle2,
  Utensils,
  ArrowRight,
  Star
} from 'lucide-react';

import compareRaw from '../../data/compareData.json';

export default function CompareFoodsPage() {
  const router = useRouter();
  const [darkMode, setDarkMode] = useState(false);
  const [activeNav, setActiveNav] = useState('Compare');
  const [servingA, setServingA] = useState(compareRaw.foodA.selectedServing);
  const [servingB, setServingB] = useState(compareRaw.foodB.selectedServing);
  const [shared, setShared] = useState(false);

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
    } else if (navItem === 'Compare') {
      router.push('/compare-foods');
    } else {
      router.push('/');
    }
  };

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setShared(true);
      setTimeout(() => setShared(false), 2000);
    }
  };

  const foodA = compareRaw.foodA;
  const foodB = compareRaw.foodB;

  return (
    <div className="min-h-screen bg-slate-50/60 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-300">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Compare Foods: Almonds vs Walnuts',
            description: 'Side-by-side comparison of nutrition, health benefits, calories, and vitamins between almonds and walnuts.',
            url: 'https://healthylife.app/compare-foods',
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
        <Breadcrumb items={[{ label: 'Compare Foods' }]} />

        {/* 1. HERO HEADER SECTION */}
        <HeroBanner
          title="Compare Foods"
          subtitle={
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-xl flex items-center gap-1.5">
              <span>See side-by-side comparison of nutrition, benefits and more</span>
              <span className="text-emerald-600">🌿</span>
            </p>
          }
          extraContent={<div className="w-12 h-1 bg-emerald-600 rounded-full mt-1" />}
          rightContent={
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 flex items-center justify-center shrink-0">
              <img
                src="/images/hero-banner.png"
                alt="Food Comparison Scale"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80';
                }}
                className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          }
        />

        {/* 2. HEAD-TO-HEAD FOOD COMPARISON SELECTOR (Almonds VS Walnuts + Quick View Sidebar) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Head-to-Head Cards (8 Cols) */}
          <div className="lg:col-span-8 bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-100 dark:border-slate-800 shadow-xs relative">
            {/* Vertical divider line in desktop */}
            <div className="hidden sm:block absolute left-1/2 top-6 bottom-20 w-px bg-slate-100 dark:bg-slate-800 -translate-x-1/2" />

            {/* Top Grid: Almonds vs Walnuts Main Info */}
            <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-6 pb-6 border-b border-slate-100 dark:border-slate-800/80">
              {/* VS Badge Floating in Exact Center between Almonds and Walnuts */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md flex items-center justify-center text-xs sm:text-sm font-black text-slate-900 dark:text-white z-20 leading-none select-none text-center">
                <span className="leading-none text-center">VS</span>
              </div>

              {/* Food A Card (Almonds) */}
              <div className="space-y-4 flex flex-col items-center text-center p-4 rounded-2xl bg-slate-50/50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
                <div className="w-36 h-36 relative flex items-center justify-center">
                  <img
                    src={foodA.image}
                    alt={foodA.name}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/almonds-bowl.png';
                    }}
                    className="max-h-full max-w-full object-contain hover:scale-105 transition-transform"
                  />
                </div>

                <div className="space-y-1 w-full flex flex-col items-center text-center">
                  <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">
                    {foodA.name} <span className="text-xs font-medium text-slate-500">{foodA.localName}</span>
                  </h2>
                  <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-slate-600 dark:text-slate-300">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                    <span>{foodA.category}</span>
                  </div>

                  {/* Health Score Pill */}
                  <div className="pt-2 flex items-center justify-center gap-2">
                    <div className="px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-sm font-black flex items-center gap-1">
                      <Star className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                      <span>{foodA.score}</span>
                    </div>
                    <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                      Health Score <Info className="w-3.5 h-3.5 text-slate-400" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Food B Card (Walnuts) */}
              <div className="space-y-4 flex flex-col items-center text-center p-4 rounded-2xl bg-slate-50/50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
                <div className="w-36 h-36 relative flex items-center justify-center">
                  <img
                    src={foodB.image}
                    alt={foodB.name}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/walnuts-bowl.png';
                    }}
                    className="max-h-full max-w-full object-contain hover:scale-105 transition-transform"
                  />
                </div>

                <div className="space-y-1 w-full flex flex-col items-center text-center">
                  <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">
                    {foodB.name} <span className="text-xs font-medium text-slate-500">{foodB.localName}</span>
                  </h2>
                  <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-slate-600 dark:text-slate-300">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                    <span>{foodB.category}</span>
                  </div>

                  {/* Health Score Pill */}
                  <div className="pt-2 flex items-center justify-center gap-2">
                    <div className="px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-sm font-black flex items-center gap-1">
                      <Star className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                      <span>{foodB.score}</span>
                    </div>
                    <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                      Health Score <Info className="w-3.5 h-3.5 text-slate-400" />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Serving Size Selector Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex items-center gap-3">
                <label className="text-xs font-bold text-slate-500 whitespace-nowrap shrink-0">Serving Size</label>
                <div className="relative flex-1">
                  <select
                    value={servingA}
                    onChange={(e) => setServingA(e.target.value)}
                    className="w-full appearance-none bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs font-extrabold text-slate-800 dark:text-slate-200 py-2 pl-3 pr-8 rounded-xl shadow-xs focus:outline-none cursor-pointer"
                  >
                    {foodA.servingSizes.map((sz, i) => (
                      <option key={i} value={sz}>{sz}</option>
                    ))}
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <label className="text-xs font-bold text-slate-500 whitespace-nowrap shrink-0">Serving Size</label>
                <div className="relative flex-1">
                  <select
                    value={servingB}
                    onChange={(e) => setServingB(e.target.value)}
                    className="w-full appearance-none bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs font-extrabold text-slate-800 dark:text-slate-200 py-2 pl-3 pr-8 rounded-xl shadow-xs focus:outline-none cursor-pointer"
                  >
                    {foodB.servingSizes.map((sz, i) => (
                      <option key={i} value={sz}>{sz}</option>
                    ))}
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* Quick View Sidebar (4 Cols) */}
          <div className="lg:col-span-4 bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-100 dark:border-slate-800 shadow-xs space-y-4">
            <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">
              Quick View
            </h3>

            <div className="space-y-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
              <a href="#nutritional-comparison" className="flex items-center gap-2 hover:text-emerald-600 transition-colors py-1">
                <span>📈</span>
                <span>Nutritional Comparison</span>
              </a>
              <a href="#health-benefits" className="flex items-center gap-2 hover:text-emerald-600 transition-colors py-1">
                <span>🩺</span>
                <span>Health Benefits</span>
              </a>
              <a href="#nutritional-comparison" className="flex items-center gap-2 hover:text-emerald-600 transition-colors py-1">
                <span>💊</span>
                <span>Vitamins & Minerals</span>
              </a>
              <a href="#which-is-better" className="flex items-center gap-2 hover:text-emerald-600 transition-colors py-1">
                <span>🌟</span>
                <span>Good For</span>
              </a>
              <a href="#which-is-better" className="flex items-center gap-2 hover:text-emerald-600 transition-colors py-1">
                <span>⚠️</span>
                <span>Not Ideal For</span>
              </a>
              <a href="#recommendation" className="flex items-center gap-2 hover:text-emerald-600 transition-colors py-1">
                <span>⏰</span>
                <span>Best Time to Eat</span>
              </a>
              <a href="#similar-foods" className="flex items-center gap-2 hover:text-emerald-600 transition-colors py-1">
                <span>🏷️</span>
                <span>Price Comparison</span>
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={handleShare}
                className="w-full py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-xs font-extrabold flex items-center justify-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <Share2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>{shared ? 'Link Copied!' : 'Share Comparison'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* 3. NUTRITIONAL COMPARISON BAR CHART SECTION */}
        <div id="nutritional-comparison" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start scroll-mt-24">
          {/* Side-by-Side Bar Charts (8 Cols) */}
          <div className="lg:col-span-8 bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-100 dark:border-slate-800 shadow-xs space-y-4">
            <h2 className="text-lg font-extrabold text-slate-900 dark:text-white">
              Nutritional Comparison <span className="text-xs font-normal text-slate-500">(Per 30 g)</span>
            </h2>

            <div className="space-y-4 pt-2">
              {compareRaw.nutritionalComparison.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center justify-between text-xs font-extrabold">
                    <span className="text-slate-900 dark:text-white w-20 text-left">{item.valA}</span>
                    <span className="text-slate-500 dark:text-slate-400 font-semibold text-center flex-1">{item.name}</span>
                    <span className="text-slate-900 dark:text-white w-20 text-right">{item.valB}</span>
                  </div>

                  {/* Dual Horizontal Progress Bars */}
                  <div className="grid grid-cols-2 gap-2 items-center">
                    {/* Almonds Bar (Green growing right-to-left) */}
                    <div className="h-2.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden flex justify-end">
                      <div
                        className="h-full bg-emerald-600 rounded-full transition-all duration-700"
                        style={{ width: `${item.percentA}%` }}
                      />
                    </div>

                    {/* Walnuts Bar (Blue growing left-to-right) */}
                    <div className="h-2.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden flex justify-start">
                      <div
                        className="h-full bg-sky-600 rounded-full transition-all duration-700"
                        style={{ width: `${item.percentB}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Which is Better for? Sidebar (4 Cols) */}
          <div id="which-is-better" className="lg:col-span-4 bg-emerald-50/40 dark:bg-emerald-950/30 rounded-3xl p-5 border border-emerald-100 dark:border-emerald-900/60 shadow-xs space-y-4 scroll-mt-24">
            <h3 className="text-sm font-extrabold text-emerald-800 dark:text-emerald-300">
              Which is Better for?
            </h3>

            <div className="space-y-2.5">
              {compareRaw.whichIsBetter.map((item, idx) => {
                let IconComponent = Heart;
                let iconColor = "text-rose-500 fill-rose-500";
                if (item.icon === 'Brain') { IconComponent = Brain; iconColor = "text-sky-500"; }
                else if (item.icon === 'Scale') { IconComponent = ScaleIcon; iconColor = "text-emerald-500"; }
                else if (item.icon === 'Sun') { IconComponent = Sun; iconColor = "text-amber-500"; }
                else if (item.icon === 'Bone') { IconComponent = Sparkles; iconColor = "text-lime-600"; }
                else if (item.icon === 'Sparkles') { IconComponent = Sparkles; iconColor = "text-pink-500"; }
                else if (item.icon === 'ShieldCheck') { IconComponent = ShieldCheck; iconColor = "text-teal-500"; }
                else if (item.icon === 'Flame') { IconComponent = Flame; iconColor = "text-amber-600"; }

                return (
                  <div key={idx} className="flex items-center justify-between text-xs font-semibold py-1 border-b border-emerald-100/60 dark:border-emerald-900/40 last:border-b-0">
                    <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                      <IconComponent className={`w-3.5 h-3.5 ${iconColor}`} />
                      <span>{item.category}</span>
                    </div>
                    <span className="font-extrabold text-emerald-700 dark:text-emerald-400">{item.winner}</span>
                  </div>
                );
              })}
            </div>

            <div className="pt-1 text-center">
              <button className="text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:underline inline-flex items-center gap-1 cursor-pointer">
                <span>View Full Details</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* 4. TOP HEALTH BENEFITS SECTION */}
        <div id="health-benefits" className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch scroll-mt-24">
          {/* Almonds Benefits Box (Light Green) */}
          <div className="bg-emerald-50/60 dark:bg-emerald-950/40 rounded-3xl p-5 border border-emerald-100 dark:border-emerald-900/60 shadow-xs space-y-4">
            <h3 className="text-base font-extrabold text-emerald-800 dark:text-emerald-300">
              {foodA.name}
            </h3>

            <div className="space-y-3.5">
              {compareRaw.benefitsA.map((b, idx) => {
                let bgClass = "bg-rose-50 text-rose-500 dark:bg-rose-950/60";
                let IconComp = Heart;
                if (b.icon === 'Dumbbell') {
                  bgClass = "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60";
                  IconComp = Dumbbell;
                } else if (b.icon === 'Sun') {
                  bgClass = "bg-amber-50 text-amber-500 dark:bg-amber-950/60";
                  IconComp = Sun;
                } else if (b.icon === 'Bone') {
                  bgClass = "bg-lime-50 text-lime-600 dark:bg-lime-950/60";
                  IconComp = Sparkles;
                }

                return (
                  <div key={idx} className="flex items-start gap-3">
                    <div className={`p-2 rounded-xl shrink-0 mt-0.5 shadow-2xs ${bgClass}`}>
                      <IconComp className="w-4 h-4" />
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="text-xs font-extrabold text-slate-900 dark:text-white">{b.title}</h4>
                      <p className="text-[11px] text-slate-600 dark:text-slate-400 font-medium leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Walnuts Benefits Box (Light Blue) */}
          <div className="bg-sky-50/60 dark:bg-sky-950/40 rounded-3xl p-5 border border-sky-100 dark:border-sky-900/60 shadow-xs space-y-4">
            <h3 className="text-base font-extrabold text-sky-800 dark:text-sky-300">
              {foodB.name}
            </h3>

            <div className="space-y-3.5">
              {compareRaw.benefitsB.map((b, idx) => {
                let bgClass = "bg-sky-50 text-sky-500 dark:bg-sky-950/60";
                let IconComp = Brain;
                if (b.icon === 'Sun') {
                  bgClass = "bg-amber-50 text-amber-600 dark:bg-amber-950/60";
                  IconComp = Sun;
                } else if (b.icon === 'Moon') {
                  bgClass = "bg-purple-50 text-purple-600 dark:bg-purple-950/60";
                  IconComp = Moon;
                } else if (b.icon === 'Heart') {
                  bgClass = "bg-rose-50 text-rose-500 dark:bg-rose-950/60";
                  IconComp = Heart;
                }

                return (
                  <div key={idx} className="flex items-start gap-3">
                    <div className={`p-2 rounded-xl shrink-0 mt-0.5 shadow-2xs ${bgClass}`}>
                      <IconComp className="w-4 h-4" />
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="text-xs font-extrabold text-slate-900 dark:text-white">{b.title}</h4>
                      <p className="text-[11px] text-slate-600 dark:text-slate-400 font-medium leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Did You Know? Card (Light Warm Cream matching Design) */}
          <div className="bg-[#FFFDF5] dark:bg-amber-950/30 rounded-3xl p-5 border border-amber-100/80 dark:border-amber-900/40 shadow-xs flex flex-col justify-between space-y-4 relative overflow-hidden min-h-[300px]">
            <div className="space-y-3 z-10 relative max-w-[65%]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-amber-100/80 dark:bg-amber-900/60 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 shadow-2xs">
                  <Lightbulb className="w-4 h-4 fill-amber-400 text-amber-500" />
                </div>
                <h3 className="text-base font-extrabold text-slate-900 dark:text-white tracking-tight">Did You Know?</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                {compareRaw.didYouKnow.text}
              </p>
            </div>

            {/* Floating Walnut Image in Bottom Right Corner (No box background) */}
            <div className="absolute -right-2 -bottom-2 w-44 h-44 sm:w-48 sm:h-48 pointer-events-none z-0">
              <img
                src={compareRaw.didYouKnow.image}
                alt="Walnuts Did You Know"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/walnuts-bowl.png';
                }}
                className="w-full h-full object-contain drop-shadow-md"
              />
            </div>

            {/* Pagination Dots at Bottom Center */}
            <div className="flex justify-center items-center gap-1.5 pt-4 z-10 relative">
              {[0, 1, 2, 3, 4].map((dot) => (
                <span
                  key={dot}
                  className={`rounded-full transition-all ${
                    dot === 0 ? 'w-2 h-2 bg-emerald-600' : 'w-1.5 h-1.5 bg-slate-300 dark:bg-slate-700'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* 5. WHAT WE RECOMMEND BANNER */}
        <div id="recommendation" className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-100 dark:border-slate-800 shadow-xs grid grid-cols-1 md:grid-cols-12 gap-6 items-center scroll-mt-24">
          <div className="md:col-span-8 flex items-start gap-4 border-l-4 border-emerald-600 pl-4">
            <div className="p-2.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">What We Recommend</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                {compareRaw.recommendation.text}
              </p>
            </div>
          </div>

          <div className="md:col-span-4 bg-emerald-50/70 dark:bg-emerald-950/40 p-4 rounded-2xl border border-emerald-100 dark:border-emerald-900/60 flex items-center justify-between">
            <div>
              <span className="text-[11px] font-bold text-slate-500 block">Recommended Daily Intake (Combined)</span>
              <span className="text-base font-black text-emerald-800 dark:text-emerald-300">{compareRaw.recommendation.intake}</span>
              <span className="text-xs font-semibold text-slate-500 ml-1.5">{compareRaw.recommendation.note}</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center text-emerald-600 shadow-xs">
              <Utensils className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* 6. "YOU MAY ALSO LIKE" CAROUSEL / CARDS GRID */}
        <div id="similar-foods" className="space-y-4 scroll-mt-24">
          <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">
            You May Also Like
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {compareRaw.similarFoods.map((item, idx) => (
              <div
                key={idx}
                onClick={() => router.push('/healthy-foods')}
                className="group bg-white dark:bg-slate-900 rounded-3xl p-3.5 border border-slate-100 dark:border-slate-800 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center space-y-3 cursor-pointer relative"
              >
                {/* Score badge top-right */}
                <span className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-[10px] font-black border border-emerald-200 dark:border-emerald-800">
                  ⭐ {item.score}
                </span>

                <div className="w-20 h-20 relative flex items-center justify-center pt-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/almonds-bowl.png';
                    }}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
                  />
                </div>

                <h3 className="text-xs font-extrabold text-slate-900 dark:text-white group-hover:text-emerald-600 transition-colors">
                  {item.name}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* 7. BOTTOM FOOD RECOMMENDATION CTA BANNER */}
        <div className="bg-emerald-50/80 dark:bg-emerald-950/50 rounded-3xl p-6 border border-emerald-100 dark:border-emerald-900/60 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-white dark:bg-slate-800 text-emerald-600 shadow-xs">
              <Lightbulb className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">Can't decide what to eat?</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                Get personalized food suggestions based on your health goals.
              </p>
            </div>
          </div>

          <button
            onClick={() => router.push('/healthy-foods')}
            className="px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition-all shadow-xs inline-flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <span>Get Food Recommendations</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
