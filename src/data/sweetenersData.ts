import rawData from './sweetenersData.json';
import rawCatalog from './sweetenersCatalog.json';
import { FruitCatalogRecord, FruitProduct, FruitSubCategory } from './fruitsData';

export const SWEETENERS_CATALOG: FruitCatalogRecord[] = rawCatalog.records as unknown as FruitCatalogRecord[];
export const SWEETENERS_DATASET_META = rawCatalog.dataset;

export const SWEETENERS_SUB_CATEGORIES: FruitSubCategory[] = rawData.subCategories as unknown as FruitSubCategory[];
export const SWEETENERS_LIST: FruitProduct[] = rawData.sweetenersList as unknown as FruitProduct[];
