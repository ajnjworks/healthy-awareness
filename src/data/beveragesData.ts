import rawData from './beveragesData.json';
import rawCatalog from './beveragesCatalog.json';
import { FruitCatalogRecord, FruitProduct, FruitSubCategory } from './fruitsData';

export const BEVERAGES_CATALOG: FruitCatalogRecord[] = rawCatalog.records as unknown as FruitCatalogRecord[];
export const BEVERAGES_DATASET_META = rawCatalog.dataset;

export const BEVERAGES_SUB_CATEGORIES: FruitSubCategory[] = rawData.subCategories as unknown as FruitSubCategory[];
export const BEVERAGES_LIST: FruitProduct[] = rawData.beveragesList as unknown as FruitProduct[];
