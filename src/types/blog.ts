import { blogs } from '@/db/schema'

export type BlogType = typeof blogs.$inferSelect
export type NewBlogType = typeof blogs.$inferInsert
