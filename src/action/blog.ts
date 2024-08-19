'use server'

import blog from '@/feature/blog'
import { removeFormDataEmptyString } from '@/lib/utils'
import { BlogFormState } from '@/types/blog'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export const createBlogAction = async (
  state: BlogFormState,
  formData: FormData
) => {
  // Validate form fields
  const validatedFields = blog.schema.create.safeParse(
    Object.fromEntries(removeFormDataEmptyString(formData).entries())
  )

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    console.log(validatedFields.error.flatten().fieldErrors)
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  // Create blog
  await blog.services.create(validatedFields.data)

  revalidatePath('/dashboard/blog')
  redirect('/dashboard/blog')
}
