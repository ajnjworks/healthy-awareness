'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Navbar } from '../../../components/layout/Navbar';
import { Footer } from '../../../components/layout/Footer';
import { Breadcrumb } from '../../../components/common/Breadcrumb';
import { FoodSidebarNav } from '../../../components/sections/FoodSidebarNav';
import { FoodHeaderCard } from '../../../components/sections/FoodHeaderCard';
import { HealthBenefitsGrid } from '../../../components/sections/HealthBenefitsGrid';
import { NutritionDashboard } from '../../../components/sections/NutritionDashboard';
import { BestTimeSection } from '../../../components/sections/BestTimeSection';
import { HealthScoreCard } from '../../../components/sections/HealthScoreCard';
import { TopHealthBenefitsRibbon } from '../../../components/sections/TopHealthBenefitsRibbon';
import { HowToEatSection } from '../../../components/sections/HowToEatSection';
import { FoodComparisonCard } from '../../../components/sections/FoodComparisonCard';
import { RecipeSuggestionsSection } from '../../../components/sections/RecipeSuggestionsSection';
import { SimilarFoodsCarousel } from '../../../components/sections/SimilarFoodsCarousel';
import { FaqAccordionSection } from '../../../components/sections/FaqAccordionSection';

import productDetailsRaw from '../../../data/productDetailsData.json';
import { ALMONDS_DATA } from '../../../data/foodsData';
import { FoodItem } from '../../../types/food';

export default function ProductDetailClient() {
  const params = useParams();
  const router = useRouter();
  const [darkMode, setDarkMode] = useState(false);
  const [activeNav, setActiveNav] = useState('Foods');
  const [activeSidebarSection, setActiveSidebarSection] = useState('overview');

  const rawId = (params?.id as string) || 'apple';
  const foodKey = decodeURIComponent(rawId).toLowerCase().trim();

  // Load food data record dynamically from JSON dataset
  const currentDetailRecord =
    (productDetailsRaw as Record<string, any>)[foodKey] ||
    Object.values(productDetailsRaw as Record<string, any>).find(
      (item: any) =>
        item.id === foodKey ||
        item.name.toLowerCase() === foodKey ||
        item.id.replace(/-/g, '') === foodKey.replace(/-/g, '')
    ) ||
    (productDetailsRaw as Record<string, any>)['apple'];

  const foodData: FoodItem = {
    ...ALMONDS_DATA,
    ...currentDetailRecord,
  };

  // Defensive guards: data entries vary in completeness. Ensure every prop that a child
  // component calls .map() or accesses a nested property on is a valid value.
  const safeBenefits = Array.isArray(foodData.benefits) ? foodData.benefits : (Array.isArray(ALMONDS_DATA.benefits) ? ALMONDS_DATA.benefits : []);
  const safeNutritionRings = Array.isArray(foodData.nutritionRings) ? foodData.nutritionRings : (Array.isArray(ALMONDS_DATA.nutritionRings) ? ALMONDS_DATA.nutritionRings : []);
  const safeQuickNutrients = Array.isArray(foodData.quickNutrients) ? foodData.quickNutrients : (Array.isArray(ALMONDS_DATA.quickNutrients) ? ALMONDS_DATA.quickNutrients : []);
  const safeFaqs = Array.isArray(currentDetailRecord?.faqs) ? currentDetailRecord.faqs : [];
  const safeRecipes = Array.isArray(currentDetailRecord?.recipes) ? currentDetailRecord.recipes : [];
  const safeSimilarFoods = Array.isArray(currentDetailRecord?.similarFoods) ? currentDetailRecord.similarFoods : [];

  // Pass undefined so the component's own default parameter kicks in when data is missing/invalid
  const safeHowToEat =
    currentDetailRecord?.howToEat &&
    typeof currentDetailRecord.howToEat === 'object' &&
    Array.isArray(currentDetailRecord.howToEat.bullets)
      ? currentDetailRecord.howToEat
      : undefined;

  const safeDidYouKnow =
    currentDetailRecord?.didYouKnow &&
    typeof currentDetailRecord.didYouKnow === 'object' &&
    typeof currentDetailRecord.didYouKnow.fact === 'string'
      ? currentDetailRecord.didYouKnow
      : undefined;

  // BestTimeSection accesses bestTime.morning / bestTime.evening without optional chaining
  const rawBestTime = (foodData as any).bestTime;
  const safeBestTime =
    rawBestTime && typeof rawBestTime === 'object'
      ? rawBestTime
      : {
          morning: 'Best consumed in the morning for optimal nutrition absorption.',
          evening: 'Can also be enjoyed as an evening snack in moderation.',
        };

  // HealthScoreCard accesses score.breakdown.heart etc. without optional chaining
  const rawHealthScore = (foodData as any).healthScore;
  const safeHealthScore =
    rawHealthScore &&
    typeof rawHealthScore === 'object' &&
    rawHealthScore.breakdown
      ? rawHealthScore
      : {
          overall: 7.5,
          ratingText: 'Good',
          breakdown: { heart: 75, brain: 70, energy: 80, immunity: 75, skin: 70 },
        };

  const safeComparison = (foodData as any).comparison ?? {
    target: { name: '', nutrients: [] },
    competitor: { name: '', nutrients: [] },
  };

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

  const handleSectionScroll = (sectionId: string) => {
    setActiveSidebarSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getCategoryInfo = (cat: string) => {
    const c = (cat || '').toLowerCase();
    if (c.includes('snack') || c.includes('package')) return { label: 'Snacks & Packaged Foods', path: '/healthy-foods/snacks' };
    if (c.includes('spice') || c.includes('herb')) return { label: 'Spices & Herbs', path: '/healthy-foods/spices' };
    if (c.includes('breakfast')) return { label: 'Breakfast Foods', path: '/healthy-foods/breakfast' };
    if (c.includes('dairy') || c.includes('milk')) return { label: 'Milk & Dairy', path: '/healthy-foods/dairy' };
    if (c.includes('millet')) return { label: 'Millets', path: '/healthy-foods/millets' };
    if (c.includes('pulse') || c.includes('dal') || c.includes('legume')) return { label: 'Pulses, Dals & Legumes', path: '/healthy-foods/pulses' };
    if (c === 'seeds' || c.includes('seed')) return { label: 'Seeds', path: '/healthy-foods/seeds' };
    if (c.includes('sweetener') || c.includes('sugar')) return { label: 'Sweeteners & Sugars', path: '/healthy-foods/sweeteners' };
    if (c.includes('bake') || c.includes('bread') || c.includes('bakery')) return { label: 'Bakery & Breads', path: '/healthy-foods/bakery' };
    if (c.includes('beverage') || c.includes('drink')) return { label: 'Beverages', path: '/healthy-foods/beverages' };
    if (c.includes('oil') || c.includes('fat')) return { label: 'Cooking Oils & Fats', path: '/healthy-foods/cooking-oils' };
    if (c.includes('grain') || c.includes('cereal') || c.includes('flour') || c.includes('rice')) return { label: 'Grains & Cereals', path: '/healthy-foods/grains-cereals' };
    if (c.includes('fish') || c.includes('seafood')) return { label: 'Fish & Seafood', path: '/healthy-foods/fishes' };
    if (c.includes('meat') || c.includes('poultry')) return { label: 'Meat & Poultry', path: '/healthy-foods/meats' };
    if (c.includes('egg')) return { label: 'Eggs', path: '/healthy-foods/eggs' };
    if (c.includes('veg')) return { label: 'Vegetables', path: '/healthy-foods/vegetables' };
    if (c.includes('groc')) return { label: 'Groceries', path: '/healthy-foods/groceries' };
    if (c.includes('nut')) return { label: 'Nuts & Seeds', path: '/healthy-foods/nuts-seeds' };
    return { label: 'Fruits', path: '/healthy-foods/fruits' };
  };

  const categoryInfo = getCategoryInfo(foodData.category);

  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-300">
      {/* SEO JSON-LD Structured Data for Product Detail Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: foodData.name,
            image: foodData.image,
            description: foodData.description,
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: foodData.rating,
              reviewCount: foodData.reviewCount,
            },
          }),
        }}
      />

      {/* Sticky Header Navbar */}
      <Navbar
        darkMode={darkMode}
        onToggleDarkMode={handleToggleDarkMode}
        activeNav={activeNav}
        onNavClick={handleNavClick}
      />

      {/* Main Content Layout Container */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: 'Healthy Foods', path: '/healthy-foods' },
            { label: categoryInfo.label, path: categoryInfo.path },
            { label: foodData.name },
          ]}
        />

        {/* Top Section: 3-Column Sidebar + 9-Column Header & Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Index Menu Sidebar (3 columns on desktop) */}
          <div className="hidden lg:block lg:col-span-3">
            <FoodSidebarNav
              activeSection={activeSidebarSection}
              onSectionClick={handleSectionScroll}
            />
          </div>

          {/* Right Top Content Area (9 columns on desktop) */}
          <div className="lg:col-span-9 space-y-6">
            {/* 1. Header Overview Card */}
            <div id="overview" className="scroll-mt-24">
              <FoodHeaderCard food={foodData} />
            </div>

            {/* 2. 5 Color Health Benefits Grid */}
            <div id="benefits" className="scroll-mt-24">
              <HealthBenefitsGrid benefits={safeBenefits} />
            </div>
          </div>
        </div>

        {/* Full 12-Column Width Sections starting from Nutrition Dashboard */}
        <div className="space-y-6 pt-2">
          {/* 3. 50% / 25% / 25% Nutrition, Best Time & Health Score Row (12 Columns) */}
          <div id="nutrition" className="scroll-mt-24 grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
            <div className="lg:col-span-6">
              <NutritionDashboard
                nutritionRings={safeNutritionRings}
                quickNutrients={safeQuickNutrients}
              />
            </div>
            <div className="lg:col-span-3">
              <BestTimeSection bestTime={safeBestTime} />
            </div>
            <div className="lg:col-span-3">
              <HealthScoreCard score={safeHealthScore} />
            </div>
          </div>

          {/* 4. Top Health Benefits Ribbon (12 Columns) */}
          <TopHealthBenefitsRibbon />

          {/* 5. How to Eat & Did You Know Section (12 Columns) */}
          <HowToEatSection
            howToEat={safeHowToEat}
            didYouKnow={safeDidYouKnow}
          />

          {/* 6. Compare With & Popular Recipes Dual Grid (12 Columns: 50% / 50%) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            <FoodComparisonCard
              target={safeComparison.target}
              competitor={safeComparison.competitor}
            />
            <RecipeSuggestionsSection
              foodName={foodData.name}
              recipes={safeRecipes}
            />
          </div>

          {/* 7. Similar Foods You May Like Carousel (12 Columns) */}
          <SimilarFoodsCarousel similarFoods={safeSimilarFoods} />

          {/* 8. Frequently Asked Questions Accordions (12 Columns) */}
          <FaqAccordionSection faqs={safeFaqs} />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
