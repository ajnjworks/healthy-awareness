import ArticleDetailClient from './ArticleDetailClient';
import articlesRaw from '../../../data/articlesData.json';

export function generateStaticParams() {
  // Generate a static page for each article in the article list
  const articleList = (articlesRaw.articleList || []) as Array<{ id?: string; slug?: string }>;
  const ids = articleList
    .map((a) => a.id || a.slug)
    .filter(Boolean) as string[];

  // Always include the default detail article id
  const allIds = Array.from(new Set(['superfoods-for-immune-system', ...ids]));
  return allIds.map((id) => ({ id }));
}

export default function ArticleDetailPage() {
  return <ArticleDetailClient />;
}
