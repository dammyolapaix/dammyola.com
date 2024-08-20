'use client'

import { type Editor } from '@tiptap/react'
import { Toggle } from '../ui/toggle'
import {
  Bold,
  Code2,
  Heading,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Italic,
  MoreHorizontal,
} from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '../ui/button'

export default function EditorMenubar({ editor }: { editor: Editor | null }) {
  if (!editor) return null

  return (
    <div className="flex gap-3 items-center">
      {/* Headings */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="icon" variant="outline" className="h-8 w-8">
            <Heading className="h-4 w-4" />
            <span className="sr-only">More</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="min-w-10">
          <DropdownMenuItem asChild className="cursor-pointer">
            <Toggle
              aria-label="Toggle heading 1"
              pressed={editor.isActive('heading', { level: 1 })}
              onPressedChange={() =>
                editor.chain().focus().toggleHeading({ level: 1 }).run()
              }
            >
              <Heading1 className="h-4 w-4" />
            </Toggle>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className="cursor-pointer">
            <Toggle
              aria-label="Toggle heading 2"
              pressed={editor.isActive('heading', { level: 2 })}
              onPressedChange={() =>
                editor.chain().focus().toggleHeading({ level: 2 }).run()
              }
            >
              <Heading2 className="h-4 w-4" />
            </Toggle>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className="cursor-pointer">
            <Toggle
              aria-label="Toggle heading 3"
              pressed={editor.isActive('heading', { level: 3 })}
              onPressedChange={() =>
                editor.chain().focus().toggleHeading({ level: 3 }).run()
              }
            >
              <Heading3 className="h-4 w-4" />
            </Toggle>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className="cursor-pointer">
            <Toggle
              aria-label="Toggle heading 3"
              pressed={editor.isActive('heading', { level: 3 })}
              onPressedChange={() =>
                editor.chain().focus().toggleHeading({ level: 3 }).run()
              }
            >
              <Heading3 className="h-4 w-4" />
            </Toggle>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className="cursor-pointer">
            <Toggle
              aria-label="Toggle heading 4"
              pressed={editor.isActive('heading', { level: 4 })}
              onPressedChange={() =>
                editor.chain().focus().toggleHeading({ level: 4 }).run()
              }
            >
              <Heading4 className="h-4 w-4" />
            </Toggle>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className="cursor-pointer">
            <Toggle
              aria-label="Toggle heading 5"
              pressed={editor.isActive('heading', { level: 5 })}
              onPressedChange={() =>
                editor.chain().focus().toggleHeading({ level: 5 }).run()
              }
            >
              <Heading5 className="h-4 w-4" />
            </Toggle>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className="cursor-pointer">
            <Toggle
              aria-label="Toggle heading 6"
              pressed={editor.isActive('heading', { level: 6 })}
              onPressedChange={() =>
                editor.chain().focus().toggleHeading({ level: 6 }).run()
              }
            >
              <Heading6 className="h-4 w-4" />
            </Toggle>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Bold */}
      <Toggle
        aria-label="Toggle bold"
        pressed={editor.isActive('bold')}
        onPressedChange={() => editor.chain().focus().toggleBold().run()}
      >
        <Bold className="h-4 w-4" />
      </Toggle>

      {/* Italic */}
      <Toggle
        aria-label="Toggle italic"
        pressed={editor.isActive('italic')}
        onPressedChange={() => editor.chain().focus().toggleCodeBlock().run()}
      >
        <Code2 className="h-4 w-4" />
      </Toggle>
    </div>
  )
}
