import rawData from './snacksData.json';
import rawCatalog from './snacksCatalog.json';
import { FruitCatalogRecord, FruitProduct, FruitSubCategory } from './fruitsData';

export const SNACKS_CATALOG: FruitCatalogRecord[] = rawCatalog.records as unknown as FruitCatalogRecord[];
export const SNACKS_DATASET_META = rawCatalog.dataset;

export const SNACKS_SUB_CATEGORIES: FruitSubCategory[] = rawData.subCategories as unknown as FruitSubCategory[];
export const SNACKS_LIST: FruitProduct[] = rawData.snacksList as unknown as FruitProduct[];
