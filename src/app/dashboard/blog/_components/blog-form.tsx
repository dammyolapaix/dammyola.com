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
import { createBlogAction, updateBlogAction } from '@/action/blog'
import SubmitButton from '@/components/custom/submit-button'
import ErrorMessage from '@/components/custom/error-message'
import { Textarea } from '@/components/ui/textarea'
import CustomCldUploadWidget from '@/components/custom/cld-upload-widget'
import { useState } from 'react'
import { BlogType } from '@/types/blog'
import Editor from '@/components/custom/editor'

export default function BlogForm({ blog }: { blog?: BlogType }) {
  const [state, action] = useFormState(
    !blog ? createBlogAction : updateBlogAction.bind(null, blog.id),
    undefined
  )
  const [image, setImage] = useState(blog?.image || '')
  const [content, setContent] = useState(blog?.content || '')

  const handleUploadImage = (url?: string) => {
    if (url) setImage(url)
  }

  const handleContentChange = (richText: string) => {
    setContent(richText)

    console.log(richText)
  }

  return (
    <form action={action}>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>{!blog ? 'Create Blog' : 'Update Blog'}</CardTitle>
          <CardDescription>
            Add the information of your blog below
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4 mb-3">
            <Label htmlFor="title">Title</Label>
            <Input
              name="title"
              defaultValue={blog?.title || ''}
              id="title"
              placeholder="My new blog"
            />
            <ErrorMessage errors={state?.errors.title} />
          </div>
          <div className="grid w-full items-center gap-4 mb-3">
            <Label htmlFor="image">Image</Label>
            <Input
              name="image"
              value={image}
              id="image"
              placeholder="blog image"
              // disabled
            />
            <ErrorMessage errors={state?.errors.image} />
          </div>
          <div className="grid w-full items-center gap-4 mb-3">
            <CustomCldUploadWidget onUploadSuccess={handleUploadImage} />
          </div>
          <div className="grid w-full items-center gap-4">
            <Label htmlFor="content">Content</Label>
            <Textarea
              name="content"
              defaultValue={content}
              id="content"
              className="hidden"
            />
            <Editor content={content} onChange={handleContentChange} />
            <ErrorMessage errors={state?.errors.content} />
          </div>
        </CardContent>
        <CardFooter>
          <SubmitButton cta={!blog ? 'Create' : 'Update'} />
        </CardFooter>
      </Card>
    </form>
  )
}
