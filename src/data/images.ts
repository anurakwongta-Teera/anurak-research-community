export type Photo = {
  src: string;
  alt: string;
  credit: string;
  provider: string;
  width: number;
  height: number;
  source: string;
  position: string;
  temporary: boolean;
};
export const photos: Record<string, Photo> = {
  fieldwork: {
    src: 'images/temporary/fieldwork.jpg',
    alt: 'Stock photograph of a scientist using a microscope at a table in a forest.',
    credit: 'Alesia Gritsuk',
    provider: 'Pexels',
    width: 1920,
    height: 2560,
    source:
      'https://www.pexels.com/photo/woman-making-laboratory-tests-in-forest-5595612/',
    position: '50% 55%',
    temporary: true,
  },
  laboratory: {
    src: 'images/temporary/laboratory.jpg',
    alt: 'Stock photograph of a gloved scientist operating a laboratory meter beside sample tubes.',
    credit: 'Polina Tankilevitch',
    provider: 'Pexels',
    width: 1200,
    height: 1800,
    source: 'https://www.pexels.com/photo/scientist-in-laboratory-3735707/',
    position: '50% 48%',
    temporary: true,
  },
  community: {
    src: 'images/temporary/community.jpg',
    alt: 'Stock photograph of volunteers planting a tree together outdoors.',
    credit: 'Anna Shvets',
    provider: 'Pexels',
    width: 1200,
    height: 1800,
    source:
      'https://www.pexels.com/photo/people-planting-plant-together-5029923/',
    position: '50% 65%',
    temporary: true,
  },
};
export const projectPhotos: Record<string, string> = {
  'environmental-health': 'fieldwork',
  'occupational-health': 'laboratory',
  'community-research': 'community',
};
export const newsPhotos: Record<string, string> = {
  'research-notes': 'fieldwork',
  'community-activities': 'community',
};
