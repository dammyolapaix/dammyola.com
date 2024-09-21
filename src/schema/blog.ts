import { blogs } from '@/db/schema'
import { createInsertSchema } from 'drizzle-zod'
import { z } from 'zod'

export default class BlogSchema {
  create = createInsertSchema(blogs, {
    title: z
      .string({ required_error: 'Title is required' })
      .min(3, 'Title must be at least 3 characters')
      .trim(),
    slug: z.string().optional(),
    content: z
      .string()
      .min(3, 'Content must be at least 3 characters')
      .optional(),
    image: z
      .string()
      .trim()
      .toLowerCase()
      .url('Please provide a valid url')
      .regex(/^https/, 'Url must start with an "https"')
      .optional(),
    description: z
      .string()
      .min(3, 'Description must be at least 3 characters')
      .optional(),
    publishedDate: z.string().date('Published date must be a valid date'),
    isPublished: z.coerce
      .string()
      .transform((val) => val === 'true')
      .default('false'),
  })
}
