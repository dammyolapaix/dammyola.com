import blog from '@/feature/blog'
import { BlogFormState } from '@/types/blog'
import { redirect } from 'next/navigation'

export const createBlogAction = async (
  state: BlogFormState,
  formData: FormData
) => {
  // Validate form fields
  const validatedFields = blog.schema.create.safeParse(
    Object.fromEntries(formData.entries())
  )

  // If any form fields are invalid, return early
  if (!validatedFields.success)
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }

  // Create blog
  await blog.services.create(validatedFields.data)

  redirect('/dashboard')
}
