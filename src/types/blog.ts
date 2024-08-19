import { blogs } from '@/db/schema'
import { FormState } from '.'

export type BlogType = typeof blogs.$inferSelect
export type NewBlogType = typeof blogs.$inferInsert

export type BlogFormState = FormState<{
  [K in keyof NewBlogType]?: string[]
}>
