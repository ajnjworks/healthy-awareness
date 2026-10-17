import FoodsRedirectClient from './FoodsRedirectClient';
import productDetailsData from '../../../data/productDetailsData.json';

export function generateStaticParams() {
  return Object.keys(productDetailsData).map((id) => ({ id }));
}

export default function FoodDetailPage() {
  return <FoodsRedirectClient />;
}
