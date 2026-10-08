import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';
const common = z.object({
  title: z.string(),
  summary: z.string(),
  locale: z.enum(['en', 'th']).default('en'),
  reviewStatus: z.enum(['draft', 'approved']).default('draft'),
  placeholder: z.boolean().default(false),
  featured: z.boolean().default(false),
  category: z.string(),
  date: z.coerce.date().optional(),
});
const collection = (name: string, schema = common) =>
  defineCollection({
    loader: glob({ pattern: '**/*.md', base: `./src/content/${name}` }),
    schema,
  });
export const collections = {
  projects: collection('projects'),
  news: collection('news'),
  publications: collection('publications'),
  innovation: defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/innovation' }),
    schema: common
      .extend({
        stage: z.enum(['Concept', 'Work in progress', 'Validated outcome']),
        evidence: z.string().optional(),
      })
      .superRefine((data, ctx) => {
        if (data.stage === 'Validated outcome' && !data.evidence)
          ctx.addIssue({
            code: 'custom',
            message: 'Validated outcomes require an evidence reference.',
          });
      }),
  }),
};
