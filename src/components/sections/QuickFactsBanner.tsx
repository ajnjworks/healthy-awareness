import React from 'react';
import { Lightbulb, Leaf, Sprout, Smile, Utensils } from 'lucide-react';

import quickFactsRaw from '../../data/quickFactsData.json';

export const QuickFactsBanner: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Leaf':
        return <Leaf className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'Sprout':
        return <Sprout className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'Smile':
        return <Smile className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'Utensils':
      default:
        return <Utensils className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
    }
  };

  const didYouKnow = quickFactsRaw.didYouKnow;
  const trustFeatures = quickFactsRaw.trustFeatures;

  return (
    <section className="pt-2">
      {/* Outer Single Combined Banner Container */}
      <div className="bg-emerald-50/80 dark:bg-emerald-950/40 rounded-3xl p-5 sm:p-6 border border-emerald-200/80 dark:border-emerald-800/60 shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left Column: Did You Know Callout */}
          <div className="lg:col-span-5 flex items-center gap-4 lg:border-r border-emerald-200/70 dark:border-emerald-800/60 lg:pr-6">
            <div className="p-2.5 rounded-2xl bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-300 shrink-0">
              <Lightbulb className="w-6 h-6 fill-amber-400" />
            </div>
            <div className="space-y-1 flex-1">
              <h4 className="text-sm font-extrabold text-slate-900 dark:text-white">{didYouKnow.title}</h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                {didYouKnow.fact}
              </p>
            </div>
            <div className="w-20 h-14 rounded-2xl overflow-hidden border-2 border-white dark:border-slate-800 shadow-xs shrink-0 hidden xl:block">
              <img
                src={didYouKnow.image}
                alt="Almonds photo"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=300&q=80';
                }}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column: 4 Trust Features Row */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4">
            {trustFeatures.map((feat, idx) => (
              <div key={idx} className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-white dark:bg-slate-900 shadow-xs shrink-0 border border-emerald-100 dark:border-slate-800">
                  {getIcon(feat.iconName)}
                </div>
                <div className="space-y-0.5 min-w-0">
                  <h5 className="text-xs font-bold text-slate-900 dark:text-white truncate">
                    {feat.title}
                  </h5>
                  <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400 truncate">
                    {feat.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
