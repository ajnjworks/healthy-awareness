import rawData from './breakfastData.json';
import rawCatalog from './breakfastCatalog.json';
import { FruitCatalogRecord, FruitProduct, FruitSubCategory } from './fruitsData';

export const BREAKFAST_CATALOG: FruitCatalogRecord[] = rawCatalog.records as unknown as FruitCatalogRecord[];
export const BREAKFAST_DATASET_META = rawCatalog.dataset;

export const BREAKFAST_SUB_CATEGORIES: FruitSubCategory[] = rawData.subCategories as unknown as FruitSubCategory[];
export const BREAKFAST_LIST: FruitProduct[] = rawData.breakfastList as unknown as FruitProduct[];
