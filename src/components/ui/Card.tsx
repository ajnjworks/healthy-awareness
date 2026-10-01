import React from 'react';
import { clsx } from 'clsx';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  hoverable = false,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={clsx(
        'bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-2xl p-4 sm:p-5 shadow-xs transition-all duration-300',
        hoverable && 'hover:shadow-md hover:border-slate-200 dark:hover:border-slate-700 hover:-translate-y-0.5 cursor-pointer',
        className
      )}
    >
      {children}
    </div>
  );
};
