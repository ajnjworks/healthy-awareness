import React from 'react';
import { clsx } from 'clsx';
import { Flame, Zap, Shield, Heart, Sparkles, Award } from 'lucide-react';

interface BadgeProps {
  children?: React.ReactNode;
  variant?: 'superfood' | 'protein' | 'energy' | 'immunity' | 'calcium' | 'neutral' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'superfood',
  size = 'md',
  icon,
  className,
}) => {
  const baseClasses = 'inline-flex items-center font-medium rounded-full transition-colors';

  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs gap-1',
    md: 'px-2.5 py-1 text-xs gap-1.5',
    lg: 'px-3.5 py-1.5 text-sm gap-2',
  };

  const variantClasses = {
    superfood: 'bg-emerald-600 text-white shadow-xs',
    protein: 'bg-amber-500 text-white shadow-xs',
    energy: 'bg-orange-500 text-white shadow-xs',
    immunity: 'bg-emerald-700 text-white shadow-xs',
    calcium: 'bg-amber-600 text-white shadow-xs',
    neutral: 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700',
    outline: 'bg-transparent border border-emerald-600 text-emerald-600 dark:text-emerald-400 dark:border-emerald-500',
  };

  const defaultIcons = {
    superfood: <Award className="w-3 h-3" />,
    protein: <Flame className="w-3 h-3" />,
    energy: <Zap className="w-3 h-3" />,
    immunity: <Shield className="w-3 h-3" />,
    calcium: <Sparkles className="w-3 h-3" />,
    neutral: null,
    outline: null,
  };

  return (
    <span className={clsx(baseClasses, sizeClasses[size], variantClasses[variant], className)}>
      {icon !== undefined ? icon : defaultIcons[variant]}
      {children}
    </span>
  );
};
