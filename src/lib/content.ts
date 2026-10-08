import { getCollection, type CollectionKey } from 'astro:content';
export async function entries(name: CollectionKey) {
  return (
    await getCollection(
      name,
      ({ data }) => data.reviewStatus === 'approved' && data.locale === 'en',
    )
  ).sort(
    (a, b) =>
      (b.data.date?.getTime() ?? 0) - (a.data.date?.getTime() ?? 0) ||
      a.data.title.localeCompare(b.data.title),
  );
}
export const sectionPaths = {
  projects: 'research',
  innovation: 'laboratory',
  publications: 'publications',
  news: 'news',
};
