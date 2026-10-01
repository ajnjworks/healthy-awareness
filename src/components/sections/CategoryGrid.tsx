import React from 'react';
import { CATEGORIES } from '../../data/foodsData';
import { CategoryCard } from './CategoryCard';

interface CategoryGridProps {
  selectedCategory: string;
  onSelectCategory: (id: string) => void;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <section className="py-1 sm:py-1.5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
          {CATEGORIES.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              isSelected={selectedCategory === category.id}
              onSelect={onSelectCategory}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
