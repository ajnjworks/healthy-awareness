export interface FoodCategory {
  id: string;
  name: string;
  iconName: string;
  color: string;
  bgColor: string;
  image: string;
}

export interface HealthBenefit {
  id: string;
  title: string;
  description: string;
  icon: string; // Icon identifier
  badgeColor: string;
  textColor: string;
  borderColor: string;
  bgColor: string;
}

export interface NutritionRing {
  label: string;
  amount: string;
  percentage: number;
  color: string;
}

export interface QuickNutrient {
  label: string;
  value: string;
}

export interface BestTimeInfo {
  morning: string;
  evening: string;
}

export interface HealthScoreBreakdown {
  heart: number;
  brain: number;
  energy: number;
  immunity: number;
  skin: number;
}

export interface FoodComparison {
  id: string;
  name: string;
  serving: string;
  image: string;
  calories: number;
  protein: string;
  fiber: string;
  omega3: string;
  bestFor: string;
}

export interface FoodItem {
  id: string;
  name: string;
  category: string;
  badge: string;
  badgeType: 'superfood' | 'protein' | 'energy' | 'immunity' | 'calcium';
  views: string;
  rating: number;
  reviewCount: number;
  image: string;
  description: string;
  type: string;
  origin: string;
  calories: string;
  bestFor: string;
  benefits: HealthBenefit[];
  nutritionRings: NutritionRing[];
  quickNutrients: QuickNutrient[];
  bestTime: BestTimeInfo;
  healthScore: {
    overall: number;
    ratingText: string;
    breakdown: HealthScoreBreakdown;
  };
  comparison: {
    target: FoodComparison;
    competitor: FoodComparison;
  };
  similarFoods: Array<{
    id: string;
    name: string;
    rating: number;
    image: string;
  }>;
}
