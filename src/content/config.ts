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
    purpose: z.string(),
    keyOutcomes: z.array(z.string()),
  }),
});

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    tags: z.array(z.string()),
    readingTime: z.number(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  'workbench': workbenchCollection,
  'blog': blogCollection,
};