import ProductDetailPage, { generateStaticParams as generateProductParams } from '../../[id]/page';

export function generateStaticParams() {
  return generateProductParams();
}

export default ProductDetailPage;
