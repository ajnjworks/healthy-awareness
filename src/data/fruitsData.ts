import fruitsRaw from './fruitsData.json';
import fruitsCatalogRaw from './fruitsCatalog.json';

export interface NutritionInfo {
  basis: string;
  calories_kcal: number | null;
  carbohydrates_g: number | null;
  fiber_g: number | null;
  protein_g: number | null;
  fat_g: number | null;
  sugars_g: number | null;
  vitaminC_mg: number | null;
  potassium_mg: number | null;
}

export interface FruitCatalogRecord {
  id: string;
  name: string;
  slug: string;
  category: string;
  botanicalName?: string | null;
  originClimate?: string | null;
  description: string | null;
  nutrition: NutritionInfo;
  healthBenefits: string[] | null;
  cautions: string[] | null;
  servingSuggestions: string[] | null;
  selectionTips: string[] | null;
  storageTips: string[] | null;
  season: string[] | null;
  commonNames: string[] | null;
  images: {
    thumbnail: string;
    hero: string;
  };
  seo: {
    title: string | null;
    description: string | null;
    keywords: string[] | null;
  };
  sources: Array<{
    type?: string;
    organization?: string;
    database?: string;
    topic?: string;
    url?: string;
  }>;
  published: boolean;
}

export type FoodCatalogRecord = FruitCatalogRecord;

export interface FruitProduct {
  id: string;
  name: string;
  score: number;
  subtitle: string;
  category: string;
  botanicalName?: string;
  originClimate?: string;
  nutrients: Array<{ label: string; icon: string }>;
  image: string;
  benefits?: Array<{ id: string; name: string }>;
  nutritionDetails?: NutritionInfo;
}

export interface FruitSubCategory {
  id: string;
  name: string;
  image: string;
}

export const FRUITS_CATALOG: FruitCatalogRecord[] = fruitsCatalogRaw.records as FruitCatalogRecord[];
export const FRUITS_DATASET_META = fruitsCatalogRaw.dataset;

export const FRUIT_SUB_CATEGORIES: FruitSubCategory[] = fruitsRaw.subCategories as FruitSubCategory[];
export const FRUITS_LIST: FruitProduct[] = fruitsRaw.fruitsList as FruitProduct[];
