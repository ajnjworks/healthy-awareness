import React from 'react';
import {
  Heart,
  Brain,
  BicepsFlexed,
  Bone,
  Sparkles,
  ShieldCheck,
  Shield,
  Activity,
  Zap,
  Leaf,
  Apple,
  Scale,
  Sun,
  Flame,
  Droplets,
} from 'lucide-react';
import { HealthBenefit } from '../../types/food';

interface HealthBenefitsGridProps {
  benefits?: HealthBenefit[];
}

export const HealthBenefitsGrid: React.FC<HealthBenefitsGridProps> = ({ benefits = [] }) => {
  if (!benefits || benefits.length === 0) return null;

  const getIcon = (iconName?: string) => {
    switch (iconName) {
      case 'Heart':
        return <Heart className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />;
      case 'Brain':
        return <Brain className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />;
      case 'BicepsFlexed':
      case 'Muscle':
        return <BicepsFlexed className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.4]" />;
      case 'Bone':
        return <Bone className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.4]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />;
      case 'ShieldCheck':
      case 'Shield':
        return <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.4]" />;
      case 'Activity':
      case 'Pulse':
        return <Activity className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.4]" />;
      case 'Zap':
      case 'Energy':
        return <Zap className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />;
      case 'Leaf':
        return <Leaf className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />;
      case 'Apple':
        return <Apple className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.4]" />;
      case 'Scale':
        return <Scale className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.4]" />;
      case 'Sun':
        return <Sun className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.4]" />;
      case 'Flame':
        return <Flame className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />;
      case 'Droplets':
        return <Droplets className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />;
      default:
        return <Heart className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />;
    }
  };

  const count = benefits.length;
  const gridColsClass =
    count === 1
      ? 'grid-cols-1 max-w-md'
      : count === 2
      ? 'grid-cols-1 sm:grid-cols-2'
      : count === 3
      ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
      : count === 4
      ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
      : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5';

  return (
    <section id="benefits" className="space-y-4 pt-1 w-full min-w-0">
      <div className={`grid ${gridColsClass} gap-3.5 sm:gap-4 w-full min-w-0`}>
        {benefits.map((benefit) => (
          <div
            key={benefit.id}
            className={`p-4 sm:p-5 rounded-3xl border transition-all duration-300 ${benefit.bgColor} ${benefit.borderColor} space-y-3 flex flex-col w-full min-w-0`}
          >
            {/* Top Icon & Title Header (Flexible and never overlaps) */}
            <div className="flex items-center gap-3 min-h-[52px] w-full min-w-0">
              <div
                className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-xs ${benefit.badgeColor}`}
              >
                {getIcon(benefit.icon)}
              </div>
              <div className="flex-1 min-w-0">
                <h3
                  className={`text-sm sm:text-base font-extrabold tracking-tight leading-snug break-words ${benefit.textColor}`}
                >
                  {benefit.title}
                </h3>
              </div>
            </div>

            {/* Description Text Container */}
            <div className="flex-1 flex items-start pt-1 min-h-[64px]">
              <p className="text-xs sm:text-[13px] text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
