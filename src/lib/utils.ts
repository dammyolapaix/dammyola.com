import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import slugify from 'slugify'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function removeFormDataEmptyString(formData: FormData) {
  const filteredFormData = new FormData()

  // Convert the FormData entries to an array for compatibility
  const entries = Array.from(formData.entries())

  for (const [key, value] of entries) {
    // Include NextJs Form action payload
    if (key.includes('$ACTION')) filteredFormData.append(key, value)

    // Check if the value is a non-empty string
    if (
      !key.includes('$ACTION') &&
      typeof value === 'string' &&
      value.trim() !== ''
    )
      filteredFormData.append(key, value)
  }
  return filteredFormData
}

export function slugifyString(value: string) {
  return slugify(value, { lower: true, trim: true })
}
