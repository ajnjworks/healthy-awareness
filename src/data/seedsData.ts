import rawData from './seedsData.json';
import rawCatalog from './seedsCatalog.json';
import { FruitCatalogRecord, FruitProduct, FruitSubCategory } from './fruitsData';

export const SEEDS_CATALOG: FruitCatalogRecord[] = rawCatalog.records as unknown as FruitCatalogRecord[];
export const SEEDS_DATASET_META = rawCatalog.dataset;

export const SEEDS_SUB_CATEGORIES: FruitSubCategory[] = rawData.subCategories as unknown as FruitSubCategory[];
export const SEEDS_LIST: FruitProduct[] = rawData.seedsList as unknown as FruitProduct[];
