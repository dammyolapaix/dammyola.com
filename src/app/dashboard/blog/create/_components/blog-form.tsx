'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useFormState } from 'react-dom'
import { createBlogAction } from '@/action/blog'
import SubmitButton from '@/components/custom/submit-button'
import ErrorMessage from '@/components/custom/error-message'
import { Textarea } from '@/components/ui/textarea'

export default function BlogForm() {
  const [state, action] = useFormState(createBlogAction, undefined)

  return (
    <form action={action}>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Create Blog</CardTitle>
          <CardDescription>
            Add the information of your blog below
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4 mb-3">
            <Label htmlFor="title">Title</Label>
            <Input name="title" id="title" placeholder="Name of your project" />
            <ErrorMessage errors={state?.errors.title} />
          </div>
          <div className="grid w-full items-center gap-4">
            <Label htmlFor="content">Content</Label>
            <Textarea
              name="content"
              placeholder="Type your content here."
              id="content"
            />
            <ErrorMessage errors={state?.errors.content} />
          </div>
        </CardContent>
        <CardFooter>
          <SubmitButton cta="Create" />
        </CardFooter>
      </Card>
    </form>
  )
}
