import ProductDetailClient from './ProductDetailClient';
import productDetailsData from '../../../data/productDetailsData.json';

export function generateStaticParams() {
  return Object.keys(productDetailsData).map((id) => ({ id }));
}

export default function HealthyFoodDetailPage() {
  return <ProductDetailClient />;
}
