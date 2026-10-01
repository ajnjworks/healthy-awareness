import rawData from './grainsCerealsData.json';
import rawCatalog from './grainsCerealsCatalog.json';
import { FruitCatalogRecord, FruitProduct, FruitSubCategory } from './fruitsData';

export const GRAINSCEREALS_CATALOG: FruitCatalogRecord[] = rawCatalog.records as unknown as FruitCatalogRecord[];
export const GRAINSCEREALS_DATASET_META = rawCatalog.dataset;

export const GRAINSCEREALS_SUB_CATEGORIES: FruitSubCategory[] = rawData.subCategories as unknown as FruitSubCategory[];
export const GRAINSCEREALS_LIST: FruitProduct[] = rawData.grainsCerealsList as unknown as FruitProduct[];
