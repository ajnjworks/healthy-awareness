import ArticleDetailClient from './ArticleDetailClient';
import articlesRaw from '../../../data/articlesData.json';
import { GUIDE_ARTICLES } from '../../../data/articleGuidesData';

export function generateStaticParams() {
  const articleList = (articlesRaw.articleList || []) as Array<{ id?: string; slug?: string }>;
  const idsFromList = articleList
    .map((a) => a.slug || a.id)
    .filter(Boolean) as string[];

  const guideIds = Object.keys(GUIDE_ARTICLES);
  const allIds = Array.from(new Set(['superfoods-for-immune-system', 'how-to-eat-fruits', ...idsFromList, ...guideIds]));
  return allIds.map((id) => ({ id }));
}

export default function ArticleDetailPage() {
  return <ArticleDetailClient />;
}
