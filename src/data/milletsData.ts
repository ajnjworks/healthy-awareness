import rawData from './milletsData.json';
import rawCatalog from './milletsCatalog.json';
import { FruitCatalogRecord, FruitProduct, FruitSubCategory } from './fruitsData';

export const MILLETS_CATALOG: FruitCatalogRecord[] = rawCatalog.records as unknown as FruitCatalogRecord[];
export const MILLETS_DATASET_META = rawCatalog.dataset;

export const MILLETS_SUB_CATEGORIES: FruitSubCategory[] = rawData.subCategories as unknown as FruitSubCategory[];
export const MILLETS_LIST: FruitProduct[] = rawData.milletsList as unknown as FruitProduct[];
