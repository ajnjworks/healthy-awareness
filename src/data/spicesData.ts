import rawData from './spicesData.json';
import rawCatalog from './spicesCatalog.json';
import { FruitCatalogRecord, FruitProduct, FruitSubCategory } from './fruitsData';

export const SPICES_CATALOG: FruitCatalogRecord[] = rawCatalog.records as unknown as FruitCatalogRecord[];
export const SPICES_DATASET_META = rawCatalog.dataset;

export const SPICES_SUB_CATEGORIES: FruitSubCategory[] = rawData.subCategories as unknown as FruitSubCategory[];
export const SPICES_LIST: FruitProduct[] = rawData.spicesList as unknown as FruitProduct[];
