import { defineCollection, z } from 'astro:content';

const workbenchCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    order: z.number(),
    repoUrl: z.string().url(),
    liveUrl: z.string().url().optional(),
    heroImage: z.string(),
    techStack: z.array(z.string()),
    theSpark: z.string(),
    keyInsights: z.array(z.string()),
  }),
});

export const collections = {
  'workbench': workbenchCollection,
};