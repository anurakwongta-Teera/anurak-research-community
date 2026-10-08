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
    src: 'images/temporary/mountain-fieldwork.jpg',
    alt: 'Temporary stock photograph of a backpacker viewed from behind overlooking green mountain valleys; not Anurak Wongta or a verified research activity.',
    credit: 'Xuân Thống Trần',
    provider: 'Pexels',
    width: 1920,
    height: 1282,
    source: 'https://www.pexels.com/photo/man-carrying-a-backpack-13660339/',
    position: '50% 32%',
    temporary: true,
  },
  laboratory: {
    src: 'images/temporary/laboratory.jpg',
    alt: 'Temporary stock photograph of a gloved hand using a laboratory meter beside sample tubes.',
    credit: 'Polina Tankilevitch',
    provider: 'Pexels',
    width: 1200,
    height: 1800,
    source: 'https://www.pexels.com/photo/scientist-in-laboratory-3735707/',
    position: '50% 48%',
    temporary: true,
  },
  community: {
    src: 'images/temporary/village-community.jpg',
    alt: 'Temporary stock photograph of residents gathering on a village street in Indonesia; not a research team activity.',
    credit: 'Dio Alif Utomo',
    provider: 'Pexels',
    width: 1200,
    height: 800,
    source:
      'https://www.pexels.com/photo/community-gathering-in-a-rural-village-street-36596582/',
    position: '50% 62%',
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
  'laboratory-notes': 'laboratory',
};
