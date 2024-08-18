import db from '@/db'
import { blogs } from '@/db/schema'
import { BlogType, NewBlogType } from '@/types/blog'
import { and, desc, eq, ilike } from 'drizzle-orm'

export default class BlogService {
  /**
   * List blogs
   */
  list = async (query?: BlogType) =>
    await db.query.blogs.findMany({
      orderBy: query?.isPublished
        ? desc(blogs.publishedDate)
        : desc(blogs.createdAt),
      where: and(
        query?.isPublished
          ? eq(blogs.isPublished, query.isPublished)
          : undefined,
        query?.title ? ilike(blogs.title, `%${query.title}%`) : undefined
      ),
    })

  /**
   * Create a new blog
   */
  create = async (blogData: NewBlogType) => {
    const [blog] = await db.insert(blogs).values(blogData).returning()

    return blog
  }

  /**
   * Retrieve a single blog by id or slug
   */
  retrieve = async ({ id, slug }: Partial<Pick<BlogType, 'id' | 'slug'>>) =>
    await db.query.blogs.findFirst({
      where: slug ? eq(blogs.slug, slug) : eq(blogs.id, id!),
    })

  /**
   * Update a blog
   */
  update = async ({ blog, id }: { id: BlogType['id']; blog: NewBlogType }) => {
    const [updatedBlog] = await db
      .update(blogs)
      .set(blog)
      .where(eq(blogs.id, id))
      .returning()

    return updatedBlog
  }

  /**
   * Delete a blog
   */
  delete = async (id: BlogType['id']) => {
    const [blog] = await db.delete(blogs).where(eq(blogs.id, id)).returning()

    return blog
  }
}
