'use client';

import React, { useState } from 'react';
import { FoodSidebarNav } from './FoodSidebarNav';
import { FoodHeaderCard } from './FoodHeaderCard';
import { HealthBenefitsGrid } from './HealthBenefitsGrid';
import { NutritionDashboard } from './NutritionDashboard';
import { BestTimeSection } from './BestTimeSection';
import { HealthScoreCard } from './HealthScoreCard';
import { FoodComparisonCard } from './FoodComparisonCard';
import { RecipeSuggestionsSection } from './RecipeSuggestionsSection';
import { QuickFactsBanner } from './QuickFactsBanner';
import { ALMONDS_DATA } from '../../data/foodsData';

interface FoodDetailSectionProps {
  foodId: string;
  onSelectFood: (foodId: string) => void;
}

export const FoodDetailSection: React.FC<FoodDetailSectionProps> = ({
  foodId,
  onSelectFood,
}) => {
  const [activeSection, setActiveSection] = useState('overview');

  // Currently rendering Almonds data as prototype showcase
  const foodData = ALMONDS_DATA;

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-8 sm:py-12 border-t border-slate-200/60 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Sticky Sidebar Navigation */}
          <div className="lg:col-span-3 hidden lg:block">
            <FoodSidebarNav
              activeSection={activeSection}
              onSectionClick={handleSectionClick}
            />
          </div>

          {/* Right Main Content (9 cols) */}
          <div className="lg:col-span-9 space-y-8">
            {/* Header & Overview */}
            <div id="overview" className="scroll-mt-24">
              <FoodHeaderCard food={foodData} />
            </div>

            {/* Health Benefits Grid */}
            <div id="benefits" className="scroll-mt-24">
              <HealthBenefitsGrid benefits={foodData.benefits} />
            </div>
          </div>
        </div>

        {/* Full Width 12-Column Sections */}
        <div className="space-y-8 mt-8">
          {/* Nutrition (50%), Best Time (25%) & Health Score (25%) 12-Col Row */}
          <div id="nutrition" className="scroll-mt-24 grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
            <div className="lg:col-span-6 flex">
              <NutritionDashboard
                nutritionRings={foodData.nutritionRings}
                quickNutrients={foodData.quickNutrients}
              />
            </div>
            <div className="lg:col-span-3 flex">
              <BestTimeSection bestTime={foodData.bestTime} />
            </div>
            <div className="lg:col-span-3 flex">
              <HealthScoreCard score={foodData.healthScore} />
            </div>
          </div>

          {/* Compare Foods (50%) & Delicious Recipes (50%) Dual Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-6">
              <FoodComparisonCard
                target={foodData.comparison.target}
                competitor={foodData.comparison.competitor}
              />
            </div>
            <div className="lg:col-span-6 flex">
              <RecipeSuggestionsSection />
            </div>
          </div>

          {/* Quick Facts Banner */}
          <QuickFactsBanner />
        </div>
      </div>
    </section>
  );
};
