'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { HeroBanner } from '../../components/common/HeroBanner';
import {
  Leaf,
  ShieldCheck,
  Heart,
  Users,
  Apple,
  Target,
  Eye,
  Gem,
  CheckCircle2,
  BookOpen,
  Lightbulb,
  ClipboardList,
  Scale,
  Utensils,
  Activity,
  Smile,
  ArrowRight,
  FileText,
} from 'lucide-react';

import aboutData from '../../data/aboutUsData.json';

export default function AboutUsPage() {
  const router = useRouter();
  const [darkMode, setDarkMode] = useState(false);
  const [activeNav, setActiveNav] = useState('AboutUs');

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
    } else if (navItem === 'AboutUs') {
      router.push('/about-us');
    } else {
      router.push('/');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-300">
      {/* Schema.org JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            name: 'About Us - Healthy Awareness',
            url: 'https://healthylife.app/about-us',
            description: aboutData.hero.subtitle,
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
        <Breadcrumb items={[{ label: 'About Us' }]} />

        {/* 1. HERO SECTION (Split Screen Banner) */}
        <HeroBanner
          leftSpanCols="lg:col-span-6"
          rightSpanCols="lg:col-span-6"
          badge={
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800/80">
              {aboutData.hero.tag}
            </span>
          }
          title={
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              {aboutData.hero.title}{' '}
              <span className="text-emerald-600 dark:text-emerald-400">
                {aboutData.hero.titleHighlight}
              </span>
            </h1>
          }
          subtitle={aboutData.hero.subtitle}
          extraContent={
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="flex flex-col items-center text-center p-3 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/40 space-y-2">
                <div className="p-2.5 rounded-xl bg-emerald-100 dark:bg-emerald-900/60 text-emerald-600 dark:text-emerald-300">
                  <Leaf className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200 leading-tight">
                  Trusted Information
                </span>
              </div>

              <div className="flex flex-col items-center text-center p-3 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/40 space-y-2">
                <div className="p-2.5 rounded-xl bg-emerald-100 dark:bg-emerald-900/60 text-emerald-600 dark:text-emerald-300">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200 leading-tight">
                  Science Based
                </span>
              </div>

              <div className="flex flex-col items-center text-center p-3 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/40 space-y-2">
                <div className="p-2.5 rounded-xl bg-emerald-100 dark:bg-emerald-900/60 text-emerald-600 dark:text-emerald-300">
                  <Heart className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200 leading-tight">
                  Better Health Everyday
                </span>
              </div>

              <div className="flex flex-col items-center text-center p-3 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/40 space-y-2">
                <div className="p-2.5 rounded-xl bg-emerald-100 dark:bg-emerald-900/60 text-emerald-600 dark:text-emerald-300">
                  <Users className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200 leading-tight">
                  For You & Future Generations
                </span>
              </div>
            </div>
          }
          rightContent={
            <div className="w-full relative aspect-4/3 sm:aspect-16/10 rounded-3xl overflow-hidden shadow-md border border-slate-100 dark:border-slate-800">
              <img
                src={aboutData.hero.image}
                alt="Happy healthy family eating together"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&w=1200&q=80';
                }}
                className="w-full h-full object-cover"
              />
            </div>
          }
        />

        {/* 2. OUR PURPOSE SECTION */}
        <section className="bg-emerald-50/40 dark:bg-slate-900/90 rounded-3xl p-6 sm:p-8 lg:p-10 border border-emerald-100 dark:border-slate-800 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Circular Veggie Image (3 cols) */}
            <div className="lg:col-span-3 flex justify-center">
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden shadow-lg border-4 border-white dark:border-slate-800 shrink-0">
                <img
                  src={aboutData.purpose.graphic}
                  alt="Fresh vegetables bowl"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80';
                  }}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Middle Main Content (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-emerald-600 fill-emerald-600" />
                <span className="text-xs font-extrabold text-emerald-700 dark:text-emerald-400 uppercase tracking-widest">
                  {aboutData.purpose.tag}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-snug">
                {aboutData.purpose.title}
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                {aboutData.purpose.description1}
              </p>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                {aboutData.purpose.description2}
              </p>

              <div className="bg-emerald-100/70 dark:bg-emerald-950/60 p-3.5 rounded-2xl border border-emerald-200 dark:border-emerald-800/80">
                <p className="text-xs font-bold text-emerald-900 dark:text-emerald-200 leading-relaxed">
                  {aboutData.purpose.highlight}
                </p>
              </div>
            </div>

            {/* Right 3 Feature Cards (4 cols) */}
            <div className="lg:col-span-4 space-y-3">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-2xs">
                <div className="p-2 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-300 shrink-0">
                  <Apple className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">
                    Know Your Food
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    Discover the benefits, nutrition, risks and best ways to eat every food.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-2xs">
                <div className="p-2 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-300 shrink-0">
                  <Heart className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">
                    Protect Your Health
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    Good food choices today can help prevent many health problems tomorrow.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-2xs">
                <div className="p-2 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-300 shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">
                    Care for Future Generations
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    We create awareness so that our children and their future can live healthier and happier.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. CORE PILLARS (Our Mission, Our Vision, Our Values) */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Our Mission */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-100 dark:border-slate-800 shadow-xs space-y-4 flex flex-col">
            <div className="space-y-3">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-300 flex items-center justify-center shrink-0">
                  <Target className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-extrabold text-emerald-700 dark:text-emerald-400 uppercase tracking-widest block">
                    {aboutData.pillars.mission.tag}
                  </span>
                  <h3 className="text-sm sm:text-base font-black text-slate-900 dark:text-white tracking-tight leading-snug">
                    {aboutData.pillars.mission.title}
                  </h3>
                </div>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
              {aboutData.pillars.mission.description}
            </p>
          </div>

          {/* Card 2: Our Vision */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-100 dark:border-slate-800 shadow-xs space-y-4 flex flex-col">
            <div className="space-y-3">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-300 flex items-center justify-center shrink-0">
                  <Eye className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-extrabold text-emerald-700 dark:text-emerald-400 uppercase tracking-widest block">
                    {aboutData.pillars.vision.tag}
                  </span>
                  <h3 className="text-sm sm:text-base font-black text-slate-900 dark:text-white tracking-tight leading-snug">
                    {aboutData.pillars.vision.title}
                  </h3>
                </div>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
              {aboutData.pillars.vision.description}
            </p>
          </div>

          {/* Card 3: Our Values */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-100 dark:border-slate-800 shadow-xs space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-300 flex items-center justify-center shrink-0">
                <Gem className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-extrabold text-emerald-700 dark:text-emerald-400 uppercase tracking-widest">
                {aboutData.pillars.values.tag}
              </span>
            </div>

            <ul className="space-y-2.5 pt-1">
              {aboutData.pillars.values.items.map((val, idx) => (
                <li key={idx} className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">
                      {val.title}
                    </h4>
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 pl-6 font-medium">
                    {val.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 4. WHAT WE PROVIDE RIBBON BAR */}
        <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-100 dark:border-slate-800 shadow-xs space-y-5 text-center">
          <h3 className="text-sm font-extrabold text-emerald-700 dark:text-emerald-400 uppercase tracking-widest flex items-center justify-center gap-2">
            <span>🌿</span> WHAT WE PROVIDE <span>🌿</span>
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
            <div className="p-3.5 rounded-2xl bg-amber-50/60 dark:bg-slate-800 border border-amber-100 dark:border-slate-700 flex flex-col items-center text-center space-y-2">
              <div className="p-2.5 rounded-full bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-300">
                <BookOpen className="w-5 h-5" />
              </div>
              <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">
                Food Information
              </h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                Benefits, nutrition facts, pros & cons and daily intake guidance.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-amber-50/60 dark:bg-slate-800 border border-amber-100 dark:border-slate-700 flex flex-col items-center text-center space-y-2">
              <div className="p-2.5 rounded-full bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-300">
                <Lightbulb className="w-5 h-5" />
              </div>
              <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">
                Health Awareness
              </h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                Tips, guides and articles to help you and your family stay healthy.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-emerald-50/60 dark:bg-slate-800 border border-emerald-100 dark:border-slate-700 flex flex-col items-center text-center space-y-2">
              <div className="p-2.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300">
                <ClipboardList className="w-5 h-5" />
              </div>
              <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">
                Practical Guidance
              </h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                Easy ways to include healthy foods in your daily life.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-sky-50/60 dark:bg-slate-800 border border-sky-100 dark:border-slate-700 flex flex-col items-center text-center space-y-2">
              <div className="p-2.5 rounded-full bg-sky-100 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300">
                <Scale className="w-5 h-5" />
              </div>
              <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">
                Compare Foods
              </h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                Compare nutrition & benefits to choose what's best for you.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-emerald-50/60 dark:bg-slate-800 border border-emerald-100 dark:border-slate-700 flex flex-col items-center text-center space-y-2 col-span-2 sm:col-span-1">
              <div className="p-2.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300">
                <Utensils className="w-5 h-5" />
              </div>
              <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">
                Healthy Recipes
              </h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                Tasty and healthy recipes made with natural and nutritious ingredients.
              </p>
            </div>
          </div>
        </section>

        {/* 5. CALL TO ACTION BANNER */}
        <section className="bg-gradient-to-r from-emerald-50/80 via-slate-50 to-emerald-50/60 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900 rounded-3xl p-6 sm:p-10 border border-emerald-100 dark:border-slate-800 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Heart Fruit Graphic (3 cols) */}
            <div className="lg:col-span-3 flex justify-center">
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden shadow-lg border-4 border-white dark:border-slate-800 shrink-0">
                <img
                  src={aboutData.cta.graphic}
                  alt="Heart shaped fruit collection"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=600&q=80';
                  }}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Center Content & Button (5 cols) */}
            <div className="lg:col-span-5 space-y-4 text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                {aboutData.cta.title}{' '}
                <span className="text-emerald-600 dark:text-emerald-400">
                  {aboutData.cta.titleHighlight}
                </span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                {aboutData.cta.subtitle}
              </p>

              <div className="pt-2">
                <button
                  onClick={() => router.push('/healthy-foods')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
                >
                  <span>{aboutData.cta.buttonText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right 4 Lifestyle Badges (4 cols) */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-2xs">
                <div className="p-2 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-300">
                  <Apple className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                  Eat Healthy
                </span>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-2xs">
                <div className="p-2 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-300">
                  <Activity className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                  Stay Active
                </span>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-2xs">
                <div className="p-2 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-300">
                  <Smile className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                  Think Positive
                </span>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-2xs">
                <div className="p-2 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-300">
                  <Heart className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                  Live Longer
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 6. HEALTHY AWARENESS IN NUMBERS */}
        <section className="space-y-5 text-center">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight">
            Healthy Awareness in Numbers
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-white dark:bg-slate-900 p-5 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xs flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-300 shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div className="text-left space-y-0.5">
                <span className="block text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                  10K+
                </span>
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  Happy Visitors
                </span>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-5 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xs flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-300 shrink-0">
                <BookOpen className="w-6 h-6" />
              </div>
              <div className="text-left space-y-0.5">
                <span className="block text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                  1,000+
                </span>
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  Food Items Covered
                </span>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-5 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xs flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-300 shrink-0">
                <FileText className="w-6 h-6" />
              </div>
              <div className="text-left space-y-0.5">
                <span className="block text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                  500+
                </span>
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  Articles & Guides
                </span>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-5 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xs flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-300 shrink-0">
                <Heart className="w-6 h-6 fill-emerald-600 text-emerald-600" />
              </div>
              <div className="text-left space-y-0.5">
                <span className="block text-xs font-extrabold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                  Our Goal
                </span>
                <span className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">
                  Healthier Generations
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
