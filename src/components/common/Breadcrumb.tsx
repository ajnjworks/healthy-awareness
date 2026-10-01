import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb navigation" className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400">
      <Link href="/" className="hover:text-emerald-600 transition-colors">
        Home
      </Link>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            <ChevronRight className="w-3.5 h-3.5 opacity-60 text-slate-400 shrink-0" />
            {isLast || !item.path ? (
              <span className="text-emerald-600 dark:text-emerald-400 font-bold truncate">
                {item.label}
              </span>
            ) : (
              <Link href={item.path} className="hover:text-emerald-600 transition-colors truncate">
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
