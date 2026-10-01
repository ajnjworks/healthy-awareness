'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { HeroBanner } from '../../components/common/HeroBanner';
import {
  ChevronRight,
  Search,
  ChevronDown,
  ChevronUp,
  Star,
  Headphones,
  Mail,
  ArrowRight,
  Sprout,
  Apple,
  Heart,
  Utensils,
  Leaf,
  Calendar,
  ArrowLeftRight,
  User,
  Lock,
  HelpCircle,
  Grid,
} from 'lucide-react';

import faqsData from '../../data/faqsData.json';

export default function FaqsPage() {
  const router = useRouter();
  const [darkMode, setDarkMode] = useState(false);
  const [activeNav, setActiveNav] = useState('FAQs');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('all');
  const [expandedFaqId, setExpandedFaqId] = useState<string | null>('faq-1');
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
    } else if (navItem === 'FAQs') {
      router.push('/faqs');
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

  const toggleFaq = (id: string) => {
    setExpandedFaqId(expandedFaqId === id ? null : id);
  };

  const getTopicIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sprout': return <Sprout className="w-4.5 h-4.5" />;
      case 'Apple': return <Apple className="w-4.5 h-4.5" />;
      case 'Heart': return <Heart className="w-4.5 h-4.5" />;
      case 'Utensils': return <Utensils className="w-4.5 h-4.5" />;
      case 'Leaf': return <Leaf className="w-4.5 h-4.5" />;
      case 'Calendar': return <Calendar className="w-4.5 h-4.5" />;
      case 'ArrowLeftRight': return <ArrowLeftRight className="w-4.5 h-4.5" />;
      case 'User': return <User className="w-4.5 h-4.5" />;
      case 'Lock': return <Lock className="w-4.5 h-4.5" />;
      case 'HelpCircle': return <HelpCircle className="w-4.5 h-4.5" />;
      default: return <Grid className="w-4.5 h-4.5" />;
    }
  };

  // Filter FAQs based on Search Query and Topic Filter
  const filteredFaqs = faqsData.items.filter((item) => {
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTopic = selectedTopic === 'all' || item.topicId === selectedTopic;
    return matchesSearch && matchesTopic;
  });

  return (
    <div className="min-h-screen bg-[#f8f9f6] dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-300">
      {/* Schema.org JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            name: 'Frequently Asked Questions - Healthy Awareness',
            url: 'https://healthylife.app/faqs',
            mainEntity: faqsData.items.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
              },
            })),
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
        <Breadcrumb items={[{ label: 'FAQs' }]} />

        {/* 1. HERO HEADER BANNER (Pixel Perfect Match with Mockup) */}
        <HeroBanner
          title={faqsData.hero.title}
          subtitle={faqsData.hero.subtitle}
          extraContent={
            <div className="pt-2">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex items-center gap-2 bg-white dark:bg-slate-800 p-2 pl-4 rounded-2xl border border-slate-200/80 dark:border-slate-700 shadow-2xs max-w-lg"
              >
                <Search className="w-5 h-5 text-slate-400 shrink-0" />
                <input
                  type="text"
                  placeholder={faqsData.hero.searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 font-medium focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-[#1c6628] hover:bg-[#15501f] text-white font-extrabold text-xs shadow-xs transition-colors shrink-0 cursor-pointer"
                >
                  Search
                </button>
              </form>
            </div>
          }
          rightContent={
            <div className="w-full max-w-[360px] aspect-4/3 rounded-[24px] overflow-hidden shadow-md border-2 border-white dark:border-slate-800 bg-white dark:bg-slate-800">
              <img
                src={faqsData.hero.graphic}
                alt="Fresh healthy salad bowl with avocado"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80';
                }}
                className="w-full h-full object-cover"
              />
            </div>
          }
        />

        {/* 2. MAIN LAYOUT GRID (Left 8 Cols Accordions | Right 4 Cols Sticky Sidebar) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Categorized FAQ Accordions (8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            {filteredFaqs.length === 0 ? (
              <div className="bg-white dark:bg-slate-900 rounded-[28px] p-8 border border-slate-200/70 dark:border-slate-800 text-center space-y-3">
                <HelpCircle className="w-10 h-10 text-slate-400 mx-auto" />
                <h3 className="text-base font-black text-slate-900 dark:text-white">
                  No questions found
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  Try searching with different keywords or selecting "All Topics".
                </p>
                <button
                  onClick={() => { setSearchQuery(''); setSelectedTopic('all'); }}
                  className="px-4 py-2 rounded-xl bg-emerald-100 text-emerald-800 text-xs font-bold"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              filteredFaqs.map((faq) => {
                const isExpanded = expandedFaqId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="bg-white dark:bg-slate-900 rounded-[24px] p-4 sm:p-5 border border-slate-200/70 dark:border-slate-800 shadow-2xs transition-all"
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full flex items-start justify-between gap-4 text-left cursor-pointer select-none"
                    >
                      <div className="flex items-center gap-3.5">
                        {/* Circular Category Badge */}
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 border ${faq.badgeColor}`}>
                          {getTopicIcon(faq.icon)}
                        </div>

                        <div className="space-y-0.5">
                          <span className="text-[11px] font-extrabold text-emerald-700 dark:text-emerald-400 uppercase tracking-widest block">
                            {faq.category}
                          </span>
                          <h3 className="text-sm sm:text-base font-black text-slate-900 dark:text-white tracking-tight leading-snug">
                            {faq.question}
                          </h3>
                        </div>
                      </div>

                      <div className="p-1 rounded-full text-slate-400 shrink-0 mt-2">
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5 text-emerald-700" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-slate-400" />
                        )}
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="pt-3 pl-13 pr-4 border-t border-slate-100 dark:border-slate-800/80 mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>

          {/* Right Column: Sticky Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
            {/* Card 1: Popular Questions */}
            <div className="bg-white dark:bg-slate-900 rounded-[28px] p-6 border border-slate-200/70 dark:border-slate-800 shadow-xs space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-amber-100 dark:bg-amber-950/80 text-amber-600 dark:text-amber-400">
                  <Star className="w-4 h-4 fill-amber-500" />
                </div>
                <h3 className="text-sm font-black text-slate-900 dark:text-white tracking-tight">
                  Popular Questions
                </h3>
              </div>

              <ul className="space-y-2.5 text-xs font-semibold">
                {faqsData.popularQuestions.map((q, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => setSearchQuery(q)}
                      className="text-left text-slate-700 dark:text-slate-300 hover:text-emerald-700 transition-colors flex items-start gap-2 cursor-pointer w-full"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-snug">{q}</span>
                    </button>
                  </li>
                ))}
              </ul>

              <div className="pt-2 text-center border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={() => { setSearchQuery(''); setSelectedTopic('all'); }}
                  className="text-xs font-extrabold text-emerald-700 dark:text-emerald-400 hover:underline inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>View all FAQs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Card 2: Still have questions? */}
            <div className="bg-[#f0f3eb] dark:bg-slate-900 rounded-[28px] p-6 border border-emerald-100/80 dark:border-slate-800 shadow-2xs space-y-3.5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#d1fae5] dark:bg-emerald-950/80 text-[#059669] dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <Headphones className="w-5 h-5 stroke-[2]" />
                </div>
                <h3 className="text-sm font-black text-slate-900 dark:text-white tracking-tight">
                  Still have questions?
                </h3>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                We're here to help! Reach out to our support team.
              </p>

              <div className="pt-1">
                <button
                  onClick={() => router.push('/contact-us')}
                  className="w-full py-2.5 px-4 rounded-xl border border-emerald-700 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 bg-white dark:bg-slate-800 font-extrabold text-xs shadow-2xs transition-colors cursor-pointer text-center"
                >
                  Contact Us
                </button>
              </div>
            </div>

            {/* Card 3: Browse by Topic */}
            <div className="bg-white dark:bg-slate-900 rounded-[28px] p-6 border border-slate-200/70 dark:border-slate-800 shadow-xs space-y-3">
              <h3 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider">
                Browse by Topic
              </h3>

              <ul className="space-y-1.5 text-xs font-semibold">
                {faqsData.topics.map((t) => (
                  <li key={t.id}>
                    <button
                      onClick={() => setSelectedTopic(t.id)}
                      className={`w-full flex items-center justify-between p-2 rounded-xl transition-colors cursor-pointer ${
                        selectedTopic === t.id
                          ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 font-bold'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-emerald-600">{getTopicIcon(t.icon)}</span>
                        <span>{t.label}</span>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 4: Stay Informed */}
            <div className="bg-[#f0f3eb] dark:bg-slate-900 rounded-[28px] p-6 border border-emerald-100/80 dark:border-slate-800 shadow-xs space-y-3">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                <h3 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider">
                  Stay Informed
                </h3>
              </div>

              <p className="text-[11px] text-slate-600 dark:text-slate-400 font-medium">
                Subscribe to get the latest health articles, tips, and updates.
              </p>

              {subscribed ? (
                <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-800 text-xs font-bold text-center">
                  Subscribed successfully!
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                  />
                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-xl bg-[#1c6628] hover:bg-[#15501f] text-white font-extrabold text-xs shadow-xs transition-colors cursor-pointer"
                  >
                    Subscribe Now
                  </button>
                </form>
              )}

              <p className="text-[10px] text-slate-400 text-center font-medium">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </section>

        {/* 3. BOTTOM BANNER: Can't find what you're looking for? */}
        <section className="bg-[#f0f3eb] dark:bg-slate-900 rounded-[28px] p-6 sm:p-8 border border-emerald-100/80 dark:border-slate-800 shadow-2xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left Body Column (7 cols) */}
            <div className="lg:col-span-7 space-y-3">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                Can't find what you're looking for?
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                Browse our help center or contact our support team.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => alert('Opening Help Center')}
                  className="px-5 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white font-extrabold text-xs shadow-2xs hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  Visit Help Center
                </button>

                <button
                  onClick={() => router.push('/contact-us')}
                  className="text-xs font-extrabold text-emerald-700 dark:text-emerald-400 hover:underline flex items-center gap-1.5 cursor-pointer px-2 py-1"
                >
                  <span>Contact Support</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Vector Illustration Column (5 cols) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-[260px] aspect-16/10 flex items-center justify-center p-2">
                {/* SVG Vector Person Thinking with Big Question Mark */}
                <svg viewBox="0 0 200 120" className="w-full h-full max-h-28">
                  {/* Left Thought Bubble */}
                  <rect x="15" y="45" width="40" height="24" rx="8" fill="#d1fae5" opacity="0.8" />
                  <circle cx="28" cy="57" r="2" fill="#059669" />
                  <circle cx="35" cy="57" r="2" fill="#059669" />
                  <circle cx="42" cy="57" r="2" fill="#059669" />

                  {/* Right Thought Bubble */}
                  <rect x="145" y="45" width="40" height="24" rx="8" fill="#d1fae5" opacity="0.8" />
                  <line x1="155" y1="53" x2="175" y2="53" stroke="#059669" strokeWidth="2" strokeLinecap="round" />
                  <line x1="155" y1="61" x2="170" y2="61" stroke="#059669" strokeWidth="2" strokeLinecap="round" />

                  {/* Big Green Question Mark ? */}
                  <text x="100" y="85" textAnchor="middle" fill="#059669" fontSize="72" fontWeight="900" fontFamily="sans-serif">?</text>

                  {/* Person Vector Figure */}
                  <circle cx="125" cy="40" r="10" fill="#334155" />
                  <path d="M125 52 C115 52, 110 65, 110 95 L140 95 C140 65, 135 52, 125 52 Z" fill="#1e293b" />
                  {/* Green Shirt accent */}
                  <path d="M120 52 L130 52 L127 75 L123 75 Z" fill="#10b981" />
                </svg>
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
