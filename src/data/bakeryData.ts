import rawData from './bakeryData.json';
import rawCatalog from './bakeryCatalog.json';
import { FruitCatalogRecord, FruitProduct, FruitSubCategory } from './fruitsData';

export const BAKERY_CATALOG: FruitCatalogRecord[] = rawCatalog.records as unknown as FruitCatalogRecord[];
export const BAKERY_DATASET_META = rawCatalog.dataset;

export const BAKERY_SUB_CATEGORIES: FruitSubCategory[] = rawData.subCategories as unknown as FruitSubCategory[];
export const BAKERY_LIST: FruitProduct[] = rawData.bakeryList as unknown as FruitProduct[];
