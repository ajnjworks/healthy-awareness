import rawData from './dairyData.json';
import rawCatalog from './dairyCatalog.json';
import { FruitCatalogRecord, FruitProduct, FruitSubCategory } from './fruitsData';

export const DAIRY_CATALOG: FruitCatalogRecord[] = rawCatalog.records as unknown as FruitCatalogRecord[];
export const DAIRY_DATASET_META = rawCatalog.dataset;

export const DAIRY_SUB_CATEGORIES: FruitSubCategory[] = rawData.subCategories as unknown as FruitSubCategory[];
export const DAIRY_LIST: FruitProduct[] = rawData.dairyList as unknown as FruitProduct[];
