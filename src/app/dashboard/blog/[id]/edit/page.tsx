import blogInstance from '@/feature/blog'
import BlogForm from '../../_components/blog-form'

export default async function page({
  params: { id },
}: {
  params: { id: string }
}) {
  const blog = await blogInstance.services.retrieve({ id })

  return <BlogForm blog={blog} />
}
