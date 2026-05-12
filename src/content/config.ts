import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    order: z.number(),
    materials: z.string(),
    homepage: z.boolean().default(true),
    // Media: one of image, images (carousel), or video (YouTube embed URL)
    image: z.string().optional(),
    images: z.array(z.string()).optional(),
    video: z.string().optional(),
  }),
});

export const collections = { projects };
