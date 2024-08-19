import {
  boolean,
  date,
  pgTable,
  text,
  timestamp,
  uuid,
  varchar,
} from 'drizzle-orm/pg-core'

const blogs = pgTable('blogs', {
  id: uuid('id').primaryKey().defaultRandom().notNull(),
  title: varchar('title', { length: 256 }).unique().notNull(),
  slug: varchar('slug', { length: 256 }).unique().notNull(),
  description: varchar('description', { length: 256 }),
  image: varchar('image'),
  content: text('content'),
  isPublished: boolean('is_published').default(false).notNull(),
  publishedDate: date('published_date', { mode: 'string' }),
  createdAt: timestamp('created_at', { mode: 'string' }).defaultNow(),
  updatedAt: timestamp('updated_at', { mode: 'string' }).defaultNow(),
})

export default blogs
