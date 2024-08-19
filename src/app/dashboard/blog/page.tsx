import blog from '@/feature/blog'
import Blogs from './_components/blogs'

export default async function BlogPage() {
  const blogs = await blog.services.list()

  return <Blogs blogs={blogs} />
}
