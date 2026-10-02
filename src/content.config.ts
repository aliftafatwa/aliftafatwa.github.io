import { defineCollection, z } from 'astro:content';

const fatwaCollection = defineCollection({
  type: 'content',
  schema: z.object({
    idNumber: z.string(),
    title: z.string(),
    category: z.enum([
      'Aqeedah',
      'Taharah',
      'Salah',
      'Zakat',
      'Siyam',
      'Muamalat',
      'General'
    ]),
    scholar: z.string().default('Fatwa Committee'),
    date: z.date(),
    summary: z.string(),
    tags: z.array(z.string()).optional()
  }),
});

export const collections = {
  fatwa: fatwaCollection,
};