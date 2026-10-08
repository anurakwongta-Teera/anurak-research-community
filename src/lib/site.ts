export const url = (path = '') =>
  `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
export const site = {
  name: 'Anurak Wongta',
  title: 'Anurak Wongta | Research & Community',
  tagline: 'Practical science. Real-world impact.',
  email: '',
};
export const nav = [
  ['', 'Home'],
  ['about/', 'About & team'],
  ['research/', 'Research'],
  ['laboratory/', 'Laboratory & Innovation'],
  ['community/', 'Community'],
  ['publications/', 'Publications'],
  ['news/', 'News'],
  ['contact/', 'Contact'],
];
