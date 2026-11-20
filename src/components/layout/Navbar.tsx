'use client';

import React, { useState, useRef } from 'react';
import {
  Heart,
  Moon,
  Sun,
  ChevronDown,
  Menu,
  X,
  Leaf,
  Apple,
  Salad,
  Nut,
  Fish,
  Utensils,
  Egg,
  Search,
  Bell,
  User as UserIcon,
  BookOpen,
  ArrowLeftRight,
  Calendar,
  ArrowRight,
  ShoppingBag,
  Wheat,
  Flame,
  CupSoda,
  Cookie,
  Sparkles,
  Coffee,
  Milk,
  Sprout
} from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

import i18n from '../../data/i18n/en.json';

interface NavbarProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
  activeNav: string;
  onNavClick: (navItem: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  onToggleDarkMode,
  activeNav,
  onNavClick,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoriesDropdownOpen, setCategoriesDropdownOpen] = useState(false);
  const [exploreDropdownOpen, setExploreDropdownOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [unreadNotifications, setUnreadNotifications] = useState(3);
  const [mobileExploreOpen, setMobileExploreOpen] = useState(false);
  const [mobileFoodsOpen, setMobileFoodsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('EN');

  const foodsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const exploreTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (type: 'foods' | 'explore') => {
    if (type === 'foods') {
      if (foodsTimeoutRef.current) clearTimeout(foodsTimeoutRef.current);
      setCategoriesDropdownOpen(true);
    } else {
      if (exploreTimeoutRef.current) clearTimeout(exploreTimeoutRef.current);
      setExploreDropdownOpen(true);
    }
  };

  const handleMouseLeave = (type: 'foods' | 'explore') => {
    if (type === 'foods') {
      foodsTimeoutRef.current = setTimeout(() => {
        setCategoriesDropdownOpen(false);
      }, 150);
    } else {
      exploreTimeoutRef.current = setTimeout(() => {
        setExploreDropdownOpen(false);
      }, 150);
    }
  };

  const navLinks = [
    { id: 'Home', label: i18n.nav.home, path: '/' },
    { id: 'Foods', label: i18n.nav.foods, path: '/healthy-foods', hasSubmenu: true, submenuType: 'foods' },
    { id: 'Explore', label: 'Explore', path: '/seasonal-foods', hasSubmenu: true, submenuType: 'explore' },
    { id: 'Healthy Tips', label: i18n.nav.healthyTips, path: '/healthy-tips' },
    { id: 'Healthy Recipes', label: i18n.nav.recipes, path: '/recipes' },
    { id: 'Contact Us', label: i18n.nav.contactUs, path: '/contact-us' },
  ];

  const categorySubmenu = [
    {
      id: 'fruits',
      label: 'Fruits',
      subtitle: 'Sweet, juicy & antioxidant rich fruits',
      icon: <Apple className="w-4 h-4 text-amber-500" />,
      path: '/healthy-foods/fruits',
    },
    {
      id: 'vegetables',
      label: 'Vegetables & Greens',
      subtitle: 'Greens, roots & fiber packed veggies',
      icon: <Salad className="w-4 h-4 text-emerald-500" />,
      path: '/healthy-foods/vegetables',
    },
    {
      id: 'groceries',
      label: 'Groceries & Pantry',
      subtitle: 'Wholesome grains, millets, pulses & oils',
      icon: <ShoppingBag className="w-4 h-4 text-orange-500" />,
      path: '/healthy-foods/groceries',
    },
    {
      id: 'nuts-seeds',
      label: 'Dry Fruits, Nuts & Seeds',
      subtitle: 'Healthy omega fats & plant protein',
      icon: <Nut className="w-4 h-4 text-yellow-600" />,
      path: '/healthy-foods/nuts-seeds',
    },
    {
      id: 'fishes',
      label: 'Fishes & Seafood',
      subtitle: 'Marine Omega-3 EPA/DHA, fish & roe',
      icon: <Fish className="w-4 h-4 text-sky-500" />,
      path: '/healthy-foods/fishes',
    },
    {
      id: 'meats',
      label: 'Meats & Poultry',
      subtitle: 'Lean poultry, steak cuts & organ meats',
      icon: <Utensils className="w-4 h-4 text-rose-500" />,
      path: '/healthy-foods/meats',
    },
    {
      id: 'eggs',
      label: 'Eggs',
      subtitle: 'Gold standard protein, choline & lutein',
      icon: <Egg className="w-4 h-4 text-yellow-500" />,
      path: '/healthy-foods/eggs',
    },
    {
      id: 'grains-cereals',
      label: 'Grains & Cereals',
      subtitle: 'Staple rice, whole wheat, oats & dalia',
      icon: <Wheat className="w-4 h-4 text-yellow-600" />,
      path: '/healthy-foods/grains-cereals',
    },
    {
      id: 'cooking-oils',
      label: 'Cooking Oils & Fats',
      subtitle: 'Cold-pressed virgin oils & olive oil',
      icon: <Flame className="w-4 h-4 text-amber-500" />,
      path: '/healthy-foods/cooking-oils',
    },
    {
      id: 'beverages',
      label: 'Beverages & Hydration',
      subtitle: 'Coconut water, brewed teas & coffee',
      icon: <CupSoda className="w-4 h-4 text-cyan-500" />,
      path: '/healthy-foods/beverages',
    },
    {
      id: 'bakery',
      label: 'Bakery & Breads',
      subtitle: 'Whole wheat bread, chapatis & pav',
      icon: <Cookie className="w-4 h-4 text-amber-600" />,
      path: '/healthy-foods/bakery',
    },
    {
      id: 'sweeteners',
      label: 'Sweeteners & Sugars',
      subtitle: 'Raw honey, organic jaggery & sugars',
      icon: <Sparkles className="w-4 h-4 text-purple-500" />,
      path: '/healthy-foods/sweeteners',
    },
    {
      id: 'millets',
      label: 'Ancient Millets',
      subtitle: 'Ragi, bajra, jowar & heritage millets',
      icon: <Wheat className="w-4 h-4 text-amber-600" />,
      path: '/healthy-foods/millets',
    },
    {
      id: 'pulses',
      label: 'Pulses, Dals & Legumes',
      subtitle: 'Toor, moong, rajma, chana & soybeans',
      icon: <Sprout className="w-4 h-4 text-emerald-600" />,
      path: '/healthy-foods/pulses',
    },
    {
      id: 'breakfast',
      label: 'Breakfast Foods',
      subtitle: 'Steamed idli, dosa, upma, poha & pongal',
      icon: <Coffee className="w-4 h-4 text-orange-500" />,
      path: '/healthy-foods/breakfast',
    },
    {
      id: 'dairy',
      label: 'Milk & Dairy',
      subtitle: 'Paneer, curd, buttermilk & cheeses',
      icon: <Milk className="w-4 h-4 text-sky-500" />,
      path: '/healthy-foods/dairy',
    },
    {
      id: 'seeds',
      label: 'Nutrient-Dense Seeds',
      subtitle: 'Chia, flax, pumpkin & sesame seeds',
      icon: <Sprout className="w-4 h-4 text-teal-600" />,
      path: '/healthy-foods/seeds',
    },
    {
      id: 'spices',
      label: 'Spices & Herbs',
      subtitle: 'Turmeric, pepper, cumin, ginger & garlic',
      icon: <Sparkles className="w-4 h-4 text-purple-500" />,
      path: '/healthy-foods/spices',
    },
    {
      id: 'snacks',
      label: 'Snacks & Packaged Foods',
      subtitle: 'Roasted makhana, chana, popcorn & crisps',
      icon: <Cookie className="w-4 h-4 text-amber-500" />,
      path: '/healthy-foods/snacks',
    },
  ];

  const exploreSubmenu = [
    {
      id: 'seasonal-foods',
      label: 'Seasonal Foods',
      subtitle: 'Discover fresh & in-season produce',
      icon: <Calendar className="w-4 h-4 text-emerald-500" />,
      path: '/seasonal-foods',
    },
    {
      id: 'compare-foods',
      label: 'Compare Foods',
      subtitle: 'Side-by-side nutritional comparison',
      icon: <ArrowLeftRight className="w-4 h-4 text-amber-500" />,
      path: '/compare-foods',
    },
    {
      id: 'articles',
      label: 'Health Articles',
      subtitle: 'Science-backed nutrition guides & tips',
      icon: <BookOpen className="w-4 h-4 text-sky-500" />,
      path: '/articles',
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div
            onClick={() => {
              router.push('/');
              onNavClick('Home');
            }}
            className="flex items-center gap-2.5 cursor-pointer group select-none shrink-0"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center text-white shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              <Leaf className="w-5 h-5 absolute -top-1 -right-1 text-amber-300 fill-amber-300" />
              <Heart className="w-5 h-5 fill-white text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-white leading-none">
                Healthy
              </span>
              <span className="text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400 tracking-wider">
                Awareness
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links (Visible on Large screens >= 1024px) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive =
                activeNav === link.id ||
                (link.path === '/' && pathname === '/') ||
                (link.submenuType === 'foods' && (pathname?.startsWith('/healthy-foods') || activeNav === 'Foods')) ||
                (link.submenuType === 'explore' &&
                  (['/seasonal-foods', '/compare-foods', '/articles'].some((p) => pathname?.startsWith(p)) ||
                    ['Compare', 'Articles', 'Seasonal Foods'].includes(activeNav))) ||
                (Boolean(link.path) && link.path !== '/' && Boolean(pathname?.startsWith(link.path!)));

              if (link.hasSubmenu) {
                const isFoods = link.submenuType === 'foods';
                const isOpen = isFoods ? categoriesDropdownOpen : exploreDropdownOpen;
                const setIsOpen = isFoods ? setCategoriesDropdownOpen : setExploreDropdownOpen;
                const items = isFoods ? categorySubmenu : exploreSubmenu;
                const submenuType = isFoods ? 'foods' : 'explore';

                return (
                  <div
                    key={link.id}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(submenuType)}
                    onMouseLeave={() => handleMouseLeave(submenuType)}
                  >
                    <Link
                      href={link.path || (isFoods ? '/healthy-foods' : '/seasonal-foods')}
                      onClick={() => {
                        onNavClick(link.id);
                        setIsOpen(false);
                      }}
                      className={`relative flex items-center gap-1 px-3.5 py-2 text-sm font-semibold transition-colors rounded-lg cursor-pointer ${isActive
                        ? 'text-emerald-600 dark:text-emerald-400'
                        : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/60'
                        }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className={`w-3.5 h-3.5 opacity-70 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                      {isActive && (
                        <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-emerald-600 dark:bg-emerald-400 rounded-full" />
                      )}
                    </Link>

                    {/* Submenu Dropdown Box with top-full pt-1.5 hover bridge */}
                    {isOpen && (
                      <div className="absolute left-0 top-full pt-1.5 w-72 max-h-[75vh] overflow-y-auto z-50 animate-in fade-in slide-in-from-top-2 duration-200 custom-scrollbar">
                        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 p-2">
                          {items.map((sub) => (
                            <Link
                              key={sub.id}
                              href={sub.path}
                              onClick={() => {
                                setIsOpen(false);
                              }}
                              className="w-full flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors text-left group cursor-pointer"
                            >
                              <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 group-hover:bg-emerald-50 dark:group-hover:bg-emerald-950/60 shrink-0">
                                {sub.icon}
                              </div>
                              <div className="space-y-0.5">
                                <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                                  {sub.label}
                                </div>
                                <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                                  {sub.subtitle}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={link.id}
                  onClick={() => {
                    if (link.path) {
                      router.push(link.path);
                    } else {
                      onNavClick(link.id);
                    }
                  }}
                  className={`relative px-3.5 py-2 text-sm font-semibold transition-colors rounded-lg cursor-pointer ${isActive
                    ? 'text-emerald-600 dark:text-emerald-400'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/60'
                    }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-emerald-600 dark:bg-emerald-400 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Utilities (Search Input + Notifications + Theme & Lang) */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
            {/* Top Search Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const target = e.currentTarget.elements.namedItem('navSearch') as HTMLInputElement;
                if (target && target.value.trim()) {
                  window.location.href = `/search?q=${encodeURIComponent(target.value.trim())}`;
                }
              }}
              className="relative flex items-center shrink-0"
            >
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 pointer-events-none" />
              <input
                name="navSearch"
                type="text"
                placeholder="Search any food..."
                className="pl-8 pr-8 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 w-32 xl:w-44 transition-all font-medium"
              />
              <button
                type="submit"
                aria-label="Search"
                className="absolute right-2.5 p-1 text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer"
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>

            {/* Notification Bell Badge with Popover */}
            <div className="relative">
              <button
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                aria-label="Notifications"
                aria-expanded={notificationsOpen}
                className="relative p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer shrink-0"
              >
                <Bell className="w-4 h-4" />
                {unreadNotifications > 0 && (
                  <span className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-emerald-600 text-white text-[9px] font-black flex items-center justify-center">
                    {unreadNotifications}
                  </span>
                )}
              </button>

              {notificationsOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setNotificationsOpen(false)}
                  />
                  <div className="absolute right-0 mt-2 w-80 sm:w-88 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 py-3 z-50 animate-scale-in">
                    <div className="px-4 pb-2 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-bold text-slate-900 dark:text-white">Health Alerts</span>
                        {unreadNotifications > 0 && (
                          <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                            {unreadNotifications} new
                          </span>
                        )}
                      </div>
                      {unreadNotifications > 0 && (
                        <button
                          onClick={() => setUnreadNotifications(0)}
                          className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 hover:underline cursor-pointer"
                        >
                          Mark all as read
                        </button>
                      )}
                    </div>

                    <div className="divide-y divide-slate-100 dark:divide-slate-800 text-xs">
                      <div className="p-3 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors">
                        <div className="flex items-start gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                          <div className="space-y-0.5">
                            <p className="font-bold text-slate-900 dark:text-white">New Seasonal Foods Added</p>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400">Discover fresh fall persimmons, pomegranate, and seasonal root crops.</p>
                          </div>
                        </div>
                      </div>

                      <div className="p-3 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors">
                        <div className="flex items-start gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                          <div className="space-y-0.5">
                            <p className="font-bold text-slate-900 dark:text-white">Nutrient Pairing Tip</p>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400">Pair vitamin C rich fruits with leafy greens to triple non-heme iron absorption.</p>
                          </div>
                        </div>
                      </div>

                      <div className="p-3 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors">
                        <div className="flex items-start gap-2">
                          <span className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600 mt-1.5 shrink-0" />
                          <div className="space-y-0.5">
                            <p className="font-bold text-slate-900 dark:text-white">Cardiovascular Wellness</p>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400">Ancient millets catalog updated with heart-healthy glycemic scores.</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="px-4 pt-2 border-t border-slate-100 dark:border-slate-800 text-center">
                      <Link
                        href="/healthy-tips"
                        onClick={() => setNotificationsOpen(false)}
                        className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
                      >
                        Explore All Health Tips & Updates →
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* User Profile Button */}
            <Link
              href="/login"
              aria-label="User Profile"
              className="p-1.5 rounded-full border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer flex items-center justify-center shrink-0"
            >
              <UserIcon className="w-4 h-4" />
            </Link>

            {/* Dark/Light mode toggle */}
            <button
              onClick={onToggleDarkMode}
              aria-label="Toggle theme"
              className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer shrink-0"
            >
              {darkMode ? (
                <Sun className="w-4 h-4 text-amber-400 fill-amber-400/20" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700 dark:text-slate-300" />
              )}
            </button>
          </div>

          {/* Mobile & Tablet menu (hamburger + dark mode button - always visible on < 1024px including landscape phones) */}
          <div className="flex lg:hidden items-center gap-2 shrink-0">
            <button
              onClick={onToggleDarkMode}
              aria-label="Toggle theme"
              className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer shrink-0"
            >
              {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-700 dark:text-slate-300" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer shrink-0"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => {
            if (link.hasSubmenu) {
              const isFoods = link.submenuType === 'foods';
              const isOpen = isFoods ? mobileFoodsOpen : mobileExploreOpen;
              const setIsOpen = isFoods ? setMobileFoodsOpen : setMobileExploreOpen;
              const items = isFoods ? categorySubmenu : exploreSubmenu;
              const linkTarget = link.path || (isFoods ? '/healthy-foods' : '/seasonal-foods');

              return (
                <div key={link.id} className="space-y-1">
                  <div className="flex items-center justify-between w-full px-4 py-1.5 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/60">
                    <Link
                      href={linkTarget}
                      onClick={() => {
                        onNavClick(link.id);
                        setMobileMenuOpen(false);
                      }}
                      className="flex-1 font-semibold text-sm text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 py-1"
                    >
                      {link.label}
                    </Link>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsOpen(!isOpen);
                      }}
                      aria-label={`Toggle ${link.label} subcategories`}
                      className="p-1.5 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white rounded-md cursor-pointer"
                    >
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                  </div>

                  {isOpen && (
                    <div className="pl-4 space-y-1 border-l-2 border-emerald-100 dark:border-slate-800 ml-4 py-1">
                      {items.map((sub) => (
                        <Link
                          key={sub.id}
                          href={sub.path}
                          onClick={() => {
                            onNavClick(sub.label);
                            setMobileMenuOpen(false);
                          }}
                          className="flex items-center gap-2.5 w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50/50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer"
                        >
                          {sub.icon}
                          <span>{sub.label}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <button
                key={link.id}
                onClick={() => {
                  if (link.path) {
                    router.push(link.path);
                  } else {
                    onNavClick(link.id);
                  }
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-2.5 rounded-lg font-semibold text-sm cursor-pointer ${activeNav === link.id
                  ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400'
                  : 'text-slate-700 dark:text-slate-300'
                  }`}
              >
                {link.label}
              </button>
            );
          })}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <span className="text-sm font-semibold text-slate-500">Language</span>
            <div className="flex gap-1">
              {['EN', 'ES', 'FR'].map((lang) => (
                <button
                  key={lang}
                  onClick={() => setSelectedLang(lang)}
                  className={`px-2.5 py-1 text-xs rounded-md font-semibold cursor-pointer ${selectedLang === lang
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                    }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
          <Link
            href="/login"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-3 block w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-center text-sm transition-colors shadow-xs"
          >
            Login / Sign Up
          </Link>
        </div>
      )}
    </header>
  );
};
