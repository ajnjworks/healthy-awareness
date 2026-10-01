import rawData from './pulsesData.json';
import rawCatalog from './pulsesCatalog.json';
import { FruitCatalogRecord, FruitProduct, FruitSubCategory } from './fruitsData';

export const PULSES_CATALOG: FruitCatalogRecord[] = rawCatalog.records as unknown as FruitCatalogRecord[];
export const PULSES_DATASET_META = rawCatalog.dataset;

export const PULSES_SUB_CATEGORIES: FruitSubCategory[] = rawData.subCategories as unknown as FruitSubCategory[];
export const PULSES_LIST: FruitProduct[] = rawData.pulsesList as unknown as FruitProduct[];
