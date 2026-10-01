'use client';

import React, { useState, useEffect } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { HeroSection } from '../components/sections/HeroSection';
import { CategoryGrid } from '../components/sections/CategoryGrid';
import { TrendingAndPickSection } from '../components/sections/TrendingAndPickSection';
import { FoodDetailSection } from '../components/sections/FoodDetailSection';
import { Footer } from '../components/layout/Footer';

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [darkMode, setDarkMode] = useState(false);
  const [activeNav, setActiveNav] = useState('Home');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('nuts-seeds');
  const [selectedFoodId, setSelectedFoodId] = useState('almonds');

  // Sync dark mode class on document element
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

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const handleSelectCategory = (categoryId: string) => {
    setSelectedCategory(categoryId);
    if (categoryId === 'fruits') {
      router.push('/healthy-foods/fruits');
    } else if (categoryId === 'vegetables') {
      router.push('/healthy-foods/vegetables');
    } else if (categoryId === 'grains-cereals' || categoryId === 'grains') {
      router.push('/healthy-foods/grains-cereals');
    } else if (categoryId === 'groceries') {
      router.push('/healthy-foods/groceries');
    } else if (categoryId === 'nuts-seeds') {
      router.push('/healthy-foods/nuts-seeds');
    } else if (categoryId === 'fishes' || categoryId === 'fish-seafood' || categoryId === 'meat-seafood') {
      router.push('/healthy-foods/fishes');
    } else if (categoryId === 'meats' || categoryId === 'meat-poultry') {
      router.push('/healthy-foods/meats');
    } else if (categoryId === 'eggs') {
      router.push('/healthy-foods/eggs');
    } else if (categoryId === 'cooking-oils' || categoryId === 'oils') {
      router.push('/healthy-foods/cooking-oils');
    } else if (categoryId === 'beverages' || categoryId === 'drinks') {
      router.push('/healthy-foods/beverages');
    } else if (categoryId === 'bakery' || categoryId === 'breads') {
      router.push('/healthy-foods/bakery');
    } else if (categoryId === 'sweeteners' || categoryId === 'sugars') {
      router.push('/healthy-foods/sweeteners');
    } else if (categoryId === 'millets') {
      router.push('/healthy-foods/millets');
    } else if (categoryId === 'pulses' || categoryId === 'dals' || categoryId === 'legumes') {
      router.push('/healthy-foods/pulses');
    } else if (categoryId === 'breakfast' || categoryId === 'breakfast-foods') {
      router.push('/healthy-foods/breakfast');
    } else if (categoryId === 'dairy' || categoryId === 'milk') {
      router.push('/healthy-foods/dairy');
    } else if (categoryId === 'seeds') {
      router.push('/healthy-foods/seeds');
    } else if (categoryId === 'spices' || categoryId === 'herbs') {
      router.push('/healthy-foods/spices');
    } else if (categoryId === 'snacks' || categoryId === 'packaged-foods') {
      router.push('/healthy-foods/snacks');
    }
  };

  const handleSelectFood = (foodId: string) => {
    setSelectedFoodId(foodId);
    const foodDetailEl = document.getElementById('food-details-section');
    if (foodDetailEl) {
      foodDetailEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (navItem: string) => {
    setActiveNav(navItem);
    if (navItem === 'Home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (navItem === 'Compare') {
      const compareEl = document.getElementById('compare');
      if (compareEl) compareEl.scrollIntoView({ behavior: 'smooth' });
    } else if (navItem === 'Foods') {
      router.push('/healthy-foods');
    } else if (navItem === 'AboutUs' || navItem === 'About Us') {
      router.push('/about-us');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-300">
      {/* SEO WebSite Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Healthy Awareness',
            url: 'https://healthylife.app',
            description: 'Discover research-backed nutritional facts, health scores, and dietary benefits of foods.',
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://healthylife.app/?q={search_term_string}',
              'query-input': 'required name=search_term_string',
            },
          }),
        }}
      />

      {/* Top Sticky Navigation */}
      <Navbar
        darkMode={darkMode}
        onToggleDarkMode={handleToggleDarkMode}
        activeNav={activeNav}
        onNavClick={handleNavClick}
      />

      {/* Main Content Area */}
      <main className="flex-1 space-y-4">
        {/* Hero Section with Search & Banner */}
        <HeroSection onSearch={handleSearch} activeQuery={searchQuery} />

        {/* Horizontal Category Cards */}
        <CategoryGrid
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
        />

        {/* Trending Today & Daily Pick Spotlight */}
        <TrendingAndPickSection onSelectFood={handleSelectFood} />

        {/* Detailed Food Exploration Module */}
        <div id="food-details-section" className="scroll-mt-24">
          <FoodDetailSection
            foodId={selectedFoodId}
            onSelectFood={handleSelectFood}
          />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
