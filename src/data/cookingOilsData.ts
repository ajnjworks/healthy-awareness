import rawData from './cookingOilsData.json';
import rawCatalog from './cookingOilsCatalog.json';
import { FruitCatalogRecord, FruitProduct, FruitSubCategory } from './fruitsData';

export const COOKINGOILS_CATALOG: FruitCatalogRecord[] = rawCatalog.records as unknown as FruitCatalogRecord[];
export const COOKINGOILS_DATASET_META = rawCatalog.dataset;

export const COOKINGOILS_SUB_CATEGORIES: FruitSubCategory[] = rawData.subCategories as unknown as FruitSubCategory[];
export const COOKINGOILS_LIST: FruitProduct[] = rawData.cookingOilsList as unknown as FruitProduct[];
