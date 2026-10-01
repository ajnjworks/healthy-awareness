import fishesRaw from './fishesData.json';
import fishesCatalogRaw from './fishesCatalog.json';
import { FruitCatalogRecord, FruitProduct, FruitSubCategory } from './fruitsData';

export const FISHES_CATALOG: FruitCatalogRecord[] = fishesCatalogRaw.records as unknown as FruitCatalogRecord[];
export const FISHES_DATASET_META = fishesCatalogRaw.dataset;

export const FISHES_SUB_CATEGORIES: FruitSubCategory[] = fishesRaw.subCategories as unknown as FruitSubCategory[];
export const FISHES_LIST: FruitProduct[] = fishesRaw.fishesList as unknown as FruitProduct[];
