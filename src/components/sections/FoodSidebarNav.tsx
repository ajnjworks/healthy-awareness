'use client';

import React from 'react';
import {
  Home,
  PieChart,
  Shield,
  Clock,
  Utensils,
  BookOpen,
  GitCompare,
  HelpCircle,
} from 'lucide-react';

interface FoodSidebarNavProps {
  activeSection: string;
  onSectionClick: (id: string) => void;
}

export const FoodSidebarNav: React.FC<FoodSidebarNavProps> = ({
  activeSection,
  onSectionClick,
}) => {
  const navItems = [
    { id: 'overview', label: 'Overview', icon: <Home className="w-4 h-4" /> },
    { id: 'nutrition', label: 'Nutrition', icon: <PieChart className="w-4 h-4" /> },
    { id: 'benefits', label: 'Benefits', icon: <Shield className="w-4 h-4" /> },
    { id: 'best-time', label: 'Best Time', icon: <Clock className="w-4 h-4" /> },
    { id: 'how-to-eat', label: 'How to Eat', icon: <Utensils className="w-4 h-4" /> },
    { id: 'recipes', label: 'Recipes', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'compare', label: 'Compare', icon: <GitCompare className="w-4 h-4" /> },
    { id: 'faqs', label: 'FAQs', icon: <HelpCircle className="w-4 h-4" /> },
  ];

  return (
    <div className="sticky top-24 space-y-6">
      {/* Navigation List Container */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-3 border border-slate-100 dark:border-slate-800 shadow-xs space-y-1">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSectionClick(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 shadow-xs font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/60'
              }`}
            >
              <span className={isActive ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400'}>
                {item.icon}
              </span>
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>

      {/* Promotional Sidebar Card Widget */}
      <div className="bg-gradient-to-br from-emerald-50 to-green-100 dark:from-emerald-950/40 dark:to-slate-900 rounded-3xl p-5 border border-emerald-200 dark:border-emerald-800/60 shadow-xs relative overflow-hidden space-y-3">
        <h4 className="text-sm sm:text-base font-extrabold text-emerald-950 dark:text-emerald-200 leading-tight">
          Eat healthy today for a better tomorrow
        </h4>
        <div className="relative w-full aspect-16/9 rounded-2xl overflow-hidden shadow-xs border border-emerald-200 dark:border-emerald-800">
          <img
            src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=400&q=80"
            alt="Healthy fresh veggies bowl"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
