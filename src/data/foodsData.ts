import { FoodCategory, FoodItem } from '../types/food';
import foodsRaw from './foodsData.json';

export const CATEGORIES: FoodCategory[] = foodsRaw.categories as FoodCategory[];
export const POPULAR_TAGS: string[] = foodsRaw.popularTags;
export const TRENDING_FOODS = foodsRaw.trendingFoods;
export const ALMONDS_DATA: FoodItem = foodsRaw.almondsData as FoodItem;
