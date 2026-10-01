'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { HeroBanner } from '../../components/common/HeroBanner';
import {
  Leaf,
  Activity,
  Droplets,
  Moon,
  Apple,
  Dumbbell,
  Brain,
  Scale,
  Shield,
  Utensils,
  Sun,
  Star,
  Share2,
  ChevronDown,
  ArrowRight,
  Mail,
  ClipboardList,
  Heart,
  Users,
  CheckCircle2
} from 'lucide-react';

import healthyTipsData from '../../data/healthyTipsData.json';

export default function HealthyTipsPage() {
  const router = useRouter();
  const [darkMode, setDarkMode] = useState(false);
  const [activeNav, setActiveNav] = useState('Healthy Tips');
  const [activeCategory, setActiveCategory] = useState('All Tips');
  const [savedTips, setSavedTips] = useState<string[]>([]);
  const [visibleCount, setVisibleCount] = useState(5);
  const [tipOfDayIndex, setTipOfDayIndex] = useState(0);

  // Newsletter State
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [copiedShareId, setCopiedShareId] = useState<string | null>(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleSaveTip = (id: string) => {
    setSavedTips((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleShareTip = (id: string) => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopiedShareId(id);
      setTimeout(() => setCopiedShareId(null), 2500);
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setNewsletterEmail('');
    }
  };

  // Helper for category icons
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Apple':
        return <Apple className="w-4 h-4 text-emerald-500" />;
      case 'Dumbbell':
        return <Dumbbell className="w-4 h-4 text-amber-500" />;
      case 'Brain':
        return <Brain className="w-4 h-4 text-purple-500" />;
      case 'Leaf':
        return <Leaf className="w-4 h-4 text-emerald-600" />;
      case 'Scale':
        return <Scale className="w-4 h-4 text-sky-500" />;
      case 'Shield':
        return <Shield className="w-4 h-4 text-rose-500" />;
      default:
        return <Utensils className="w-4 h-4" />;
    }
  };

  // Filter daily tips by activeCategory
  const filteredTips = healthyTipsData.dailyTips.filter((tip) => {
    if (activeCategory === 'All Tips') return true;
    return tip.category.toLowerCase() === activeCategory.toLowerCase();
  });

  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-300">
      <Navbar
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
        activeNav={activeNav}
        onNavClick={(item) => setActiveNav(item)}
      />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
        {/* 1. TOP BREADCRUMB */}
        <Breadcrumb items={[{ label: 'Healthy Tips' }]} />

        {/* 2. HERO HEADER BANNER */}
        <HeroBanner
          title={healthyTipsData.hero.title}
          subtitle={healthyTipsData.hero.subtitle}
          extraContent={
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/40">
                <div className="p-2 rounded-xl bg-emerald-100 dark:bg-emerald-900/80 text-emerald-600 shrink-0">
                  <Leaf className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-xs font-black text-slate-900 dark:text-white">Eat Smart</h4>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Choose whole foods.</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/40">
                <div className="p-2 rounded-xl bg-emerald-100 dark:bg-emerald-900/80 text-emerald-600 shrink-0">
                  <Activity className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-xs font-black text-slate-900 dark:text-white">Stay Active</h4>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Move your body.</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/40">
                <div className="p-2 rounded-xl bg-emerald-100 dark:bg-emerald-900/80 text-emerald-600 shrink-0">
                  <Droplets className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-xs font-black text-slate-900 dark:text-white">Stay Hydrated</h4>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Drink enough water.</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/40">
                <div className="p-2 rounded-xl bg-emerald-100 dark:bg-emerald-900/80 text-emerald-600 shrink-0">
                  <Moon className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-xs font-black text-slate-900 dark:text-white">Sleep Well</h4>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Good sleep refreshes.</p>
                </div>
              </div>
            </div>
          }
          rightContent={
            <div className="relative w-full max-w-sm aspect-4/3 rounded-3xl overflow-hidden shadow-md border-4 border-white dark:border-slate-800">
              <img
                src={healthyTipsData.hero.image}
                alt="Healthy salad bowl with chickpea and avocado"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          }
        />

        {/* 3. BROWSE TIPS BY CATEGORY */}
        <div className="space-y-3">
          <h2 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white tracking-tight">
            Browse Tips by Category
          </h2>

          <div className="flex flex-wrap items-center gap-2">
            {healthyTipsData.categories.map((cat) => {
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
                  {getCategoryIcon(cat.icon)}
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 4. MAIN DUAL-COLUMN LAYOUT (Left 8 Cols Daily Tips vs Right 4 Cols Sidebars) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT 8 COLS: Daily Healthy Tips */}
          <div className="lg:col-span-8 space-y-6">
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Daily Healthy Tips
            </h2>

            {/* Horizontal Tip Cards */}
            <div className="space-y-4">
              {filteredTips.slice(0, visibleCount).map((tip) => {
                const isSaved = savedTips.includes(tip.id);
                const isCopied = copiedShareId === tip.id;

                return (
                  <div
                    key={tip.id}
                    className="bg-white dark:bg-slate-900 rounded-3xl p-4 sm:p-5 border border-slate-100 dark:border-slate-800 shadow-xs hover:shadow-md transition-all flex flex-col sm:flex-row items-stretch sm:items-center gap-4 group"
                  >
                    {/* Left Thumbnail Image */}
                    <div className="relative h-40 sm:h-36 w-full sm:w-48 lg:w-52 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 shrink-0">
                      <img
                        src={tip.image}
                        alt={tip.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Right Content Column */}
                    <div className="flex-1 flex flex-col justify-between space-y-3">
                      <div className="space-y-2">
                        {/* Title Row with Green Rank Badge */}
                        <div className="flex items-start gap-2.5">
                          <span className="w-6 h-6 rounded-full bg-emerald-600 text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                            {tip.id}
                          </span>
                          <h3 className="text-base font-extrabold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-snug">
                            {tip.title}
                          </h3>
                        </div>

                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                          {tip.description}
                        </p>
                      </div>

                      {/* Footer Row: Tag & Action Buttons */}
                      <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800">
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 text-[10px] font-bold border border-emerald-200 dark:border-emerald-800/80">
                          {tip.category}
                        </span>

                        <div className="flex items-center gap-3 text-xs font-semibold text-slate-500">
                          <button
                            onClick={() => toggleSaveTip(tip.id)}
                            className={`flex items-center gap-1 hover:text-emerald-600 transition-colors cursor-pointer ${
                              isSaved ? 'text-amber-500 font-bold' : ''
                            }`}
                          >
                            <Star className={`w-3.5 h-3.5 ${isSaved ? 'fill-amber-500 text-amber-500' : ''}`} />
                            <span>{isSaved ? 'Saved' : 'Save'}</span>
                          </button>

                          <button
                            onClick={() => handleShareTip(tip.id)}
                            className="flex items-center gap-1 hover:text-emerald-600 transition-colors cursor-pointer"
                          >
                            <Share2 className="w-3.5 h-3.5" />
                            <span>{isCopied ? 'Copied!' : 'Share'}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Load More Button */}
            {visibleCount < filteredTips.length && (
              <div className="pt-2 text-center">
                <button
                  onClick={() => setVisibleCount((prev) => prev + 3)}
                  className="px-6 py-2.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 text-xs font-extrabold flex items-center justify-center gap-1.5 mx-auto hover:bg-slate-50 dark:hover:bg-slate-800 shadow-xs transition-colors cursor-pointer"
                >
                  <span>Load More Tips</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* RIGHT 4 COLS: Sidebars */}
          <div className="lg:col-span-4 space-y-6">
            {/* Sidebar 1: Popular Tips Top 5 */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-100 dark:border-slate-800 shadow-xs space-y-4">
              <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">
                Popular Tips
              </h3>

              <div className="space-y-3">
                {healthyTipsData.popularTips.map((pop, idx) => (
                  <div
                    key={pop.id}
                    className="flex items-center gap-3 p-1.5 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors cursor-pointer group"
                  >
                    {/* Rank Circle */}
                    <div className="w-6 h-6 rounded-full bg-emerald-600 text-white text-xs font-black flex items-center justify-center shrink-0">
                      {idx + 1}
                    </div>

                    {/* Thumbnail */}
                    <div className="w-12 h-12 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 shrink-0">
                      <img
                        src={pop.image}
                        alt={pop.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>

                    {/* Title & Time */}
                    <div className="space-y-0.5 min-w-0">
                      <h4 className="text-xs font-extrabold text-slate-900 dark:text-white truncate group-hover:text-emerald-600 transition-colors">
                        {pop.title}
                      </h4>
                      <span className="text-[11px] font-semibold text-slate-400 block">
                        {pop.readTime}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-center border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={() => setActiveCategory('All Tips')}
                  className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400 hover:underline inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>View All Popular Tips</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Sidebar 2: Tip of the Day */}
            <div className="bg-[#f7f9f2] dark:bg-slate-900 rounded-3xl p-5 border border-emerald-100/60 dark:border-slate-800 shadow-xs space-y-4 relative overflow-hidden">
              <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400">
                <Sun className="w-4 h-4" />
                <h3 className="text-xs font-extrabold uppercase tracking-wider">Tip of the Day</h3>
              </div>

              <div className="grid grid-cols-12 gap-3 items-center">
                <div className="col-span-7 space-y-1">
                  <p className="text-xs text-slate-700 dark:text-slate-300 font-bold leading-relaxed">
                    {healthyTipsData.tipsOfDay[tipOfDayIndex].quote}
                  </p>
                </div>
                <div className="col-span-5 flex justify-end">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden border border-emerald-100 dark:border-slate-800">
                    <img
                      src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=300&q=80"
                      alt="Walking in park"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Carousel Indicators */}
              <div className="flex items-center justify-center gap-1.5 pt-1">
                {healthyTipsData.tipsOfDay.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setTipOfDayIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                      tipOfDayIndex === idx ? 'bg-emerald-600 w-4' : 'bg-slate-300 dark:bg-slate-700'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Sidebar 3: Newsletter Box */}
            <div className="bg-emerald-50/50 dark:bg-emerald-950/30 rounded-3xl p-5 border border-emerald-100 dark:border-emerald-900/60 shadow-xs space-y-4">
              <div className="flex items-center gap-2.5 text-emerald-800 dark:text-emerald-300">
                <div className="w-9 h-9 rounded-full bg-emerald-100 dark:bg-emerald-900/80 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-extrabold leading-snug">
                  Stay Healthy, Stay Informed!
                </h3>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                Get the best health tips, articles and recipes straight to your inbox.
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
                  {subscribed ? 'Subscribed! 🎉' : 'Subscribe Now'}
                </button>
              </form>

              <span className="text-[11px] font-semibold text-slate-400 block text-center">
                No spam. Unsubscribe anytime.
              </span>
            </div>
          </div>
        </div>

        {/* 5. BOTTOM FEATURE GRID: More Ways to Live Healthy (5 Columns Across Full Width) */}
        <div className="space-y-4 pt-6 border-t border-slate-200/60 dark:border-slate-800/80">
          <h2 className="text-base font-extrabold text-slate-900 dark:text-white tracking-tight">
            More Ways to Live Healthy
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Box 1 */}
            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xs space-y-2">
              <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center">
                <Moon className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-extrabold text-slate-900 dark:text-white">Get Enough Sleep</h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                7–8 hours of quality sleep is essential for your body and mind.
              </p>
            </div>

            {/* Box 2 */}
            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xs space-y-2">
              <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center">
                <ClipboardList className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-extrabold text-slate-900 dark:text-white">Plan Your Meals</h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                Plan ahead, eat balanced meals, and avoid unhealthy choices.
              </p>
            </div>

            {/* Box 3 */}
            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xs space-y-2">
              <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center">
                <Leaf className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-extrabold text-slate-900 dark:text-white">Eat Whole Foods</h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                Choose whole, natural foods over processed and packaged foods.
              </p>
            </div>

            {/* Box 4 */}
            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xs space-y-2">
              <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center">
                <Heart className="w-4 h-4 text-rose-500" />
              </div>
              <h4 className="text-xs font-extrabold text-slate-900 dark:text-white">Manage Stress</h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                Take breaks, relax, and do things that make you happy.
              </p>
            </div>

            {/* Box 5 */}
            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xs space-y-2">
              <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center">
                <Users className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-extrabold text-slate-900 dark:text-white">Stay Consistent</h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                Consistency is the key to building long-term healthy habits.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
