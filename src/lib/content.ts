import { getCollection, type CollectionKey } from 'astro:content';
export async function entries(name: CollectionKey) {
  return (
    await getCollection(
      name,
      ({ data }) =>
        data.locale === 'en' &&
        (data.reviewStatus === 'approved' ||
          (import.meta.env.CONTENT_PREVIEW === '1' && !data.placeholder)),
    )
  ).sort(
    (a, b) =>
      Number(('publicationYear' in b.data ? b.data.publicationYear : 0) ?? 0) -
        Number(
          ('publicationYear' in a.data ? a.data.publicationYear : 0) ?? 0,
        ) ||
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
