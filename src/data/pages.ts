export const pages = {
  about: {
    title: 'About me & team',
    eyebrow: 'PEOPLE BEHIND THE QUESTIONS',
    intro: 'Anurak Wongta, PhD, MT',
    description:
      'Assistant Professor · Research Institute for Health Sciences, Chiang Mai University, Thailand.',
    blocks: [],
  },
  community: {
    title: 'Community engagement',
    eyebrow: 'SCIENCE IN EVERYDAY SETTINGS',
    intro: 'Community perspectives make research questions more relevant.',
    description:
      'This area is intended to share community-based research, dialogue, and practical applications of environmental and occupational health research.',
    blocks: [
      [
        'Listening & shared questions',
        'A space for describing how community priorities inform research questions. Specific engagement activities will be documented only after verification.',
      ],
      [
        'From measurement to understanding',
        'A space for accessible research summaries and community-facing materials reviewed for accuracy, clarity, and appropriate use.',
      ],
      [
        'Activities & partnerships',
        'Placeholder: approved activity reports and partnership details will appear here. No completed activities or partnerships are claimed.',
      ],
    ],
  },
  contact: {
    title: 'Contact & collaboration',
    eyebrow: 'START A CONVERSATION',
    intro: 'Connect around a question that matters.',
    description:
      'Potential conversations include environmental and occupational health, community-based research, practical measurement, and laboratory method development.',
    blocks: [
      [
        'Research collaboration',
        'Introduce the research question, intended setting, and the expertise or contribution you are seeking.',
      ],
      [
        'Laboratory & field methods',
        'Describe the measurement challenge, practical constraints, and intended application. Please share only non-confidential information.',
      ],
      [
        'Community engagement',
        'Outline the community context and the questions or needs you would like to explore together.',
      ],
    ],
  },
};
export const listings = {
  research: {
    collection: 'projects',
    title: 'Research projects',
    eyebrow: 'QUESTIONS WITH PURPOSE',
    intro: 'Health, environment, and the places we share.',
    description:
      'Explore the intersection of environmental and occupational health, community-based research, and practical measurement.',
  },
  laboratory: {
    collection: 'innovation',
    title: 'Laboratory & Innovation',
    eyebrow: 'FROM METHODS TO APPLICATION',
    intro: 'Useful science starts with careful development.',
    description:
      'Low-cost health measurement, practical laboratory methods and assay development, portable health technologies, and laboratory-to-community applications.',
  },
  publications: {
    collection: 'publications',
    title: 'Publications',
    eyebrow: 'EVIDENCE & SCHOLARSHIP',
    intro: 'A record of research, carefully documented.',
    description:
      'Research publications spanning environmental and occupational health, respiratory health, and practical laboratory methods.',
  },
  news: {
    collection: 'news',
    title: 'News & activities',
    eyebrow: 'FROM THE RESEARCH NOTEBOOK',
    intro: 'Ideas, activities, and updates.',
    description:
      'A space for research updates, laboratory notes, and community activities. Sample entries are explicitly labeled until verified news is available.',
  },
} as const;
