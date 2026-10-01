import React from 'react';
import { Heart, Brain, BicepsFlexed, Bone, Sparkles } from 'lucide-react';
import { HealthBenefit } from '../../types/food';

interface HealthBenefitsGridProps {
  benefits: HealthBenefit[];
}

export const HealthBenefitsGrid: React.FC<HealthBenefitsGridProps> = ({ benefits }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Heart':
        return <Heart className="w-6 h-6 sm:w-6.5 sm:h-6.5 fill-current" />;
      case 'Brain':
        return <Brain className="w-6 h-6 sm:w-6.5 sm:h-6.5 fill-current" />;
      case 'BicepsFlexed':
        return <BicepsFlexed className="w-6 h-6 sm:w-6.5 sm:h-6.5 stroke-[2.4]" />;
      case 'Bone':
        return <Bone className="w-6 h-6 sm:w-6.5 sm:h-6.5 stroke-[2.4]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 sm:w-6.5 sm:h-6.5 fill-current" />;
      default:
        return <Heart className="w-6 h-6 sm:w-6.5 sm:h-6.5 fill-current" />;
    }
  };

  return (
    <section id="benefits" className="space-y-4 pt-1">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4">
        {benefits.map((benefit) => (
          <div
            key={benefit.id}
            className={`p-3.5 sm:p-4 rounded-3xl border transition-all duration-300 ${benefit.bgColor} ${benefit.borderColor} space-y-3 flex flex-col`}
          >
            {/* Top Icon & Title Header (Fixed Height for 100% Y-Alignment) */}
            <div className="flex items-center gap-3 h-14 shrink-0">
              <div className={`w-12 h-12 sm:w-13 sm:h-13 rounded-full flex items-center justify-center shrink-0 shadow-xs ${benefit.badgeColor}`}>
                {getIcon(benefit.icon)}
              </div>
              <h3 className={`text-sm sm:text-base font-extrabold tracking-tight leading-tight ${benefit.textColor}`}>
                {benefit.title}
              </h3>
            </div>

            {/* Description Text Container (Fixed Height for 100% Baseline Alignment) */}
            <div className="flex-1 flex items-start pt-1 min-h-[76px]">
              <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
