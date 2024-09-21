'use client'

import { useEditor, EditorContent, ReactNodeViewRenderer } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import EditorMenubar from './editor-menubar'
// import CodeBlock from '@tiptap/extension-code-block'
// import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'

// import { all, createLowlight } from 'lowlight'
// import CodeBlockComponent from './CodeBlockComponent'

// create a lowlight instance
// const lowlight = createLowlight(all)

export default function Editor({
  content,
  onChange,
}: {
  content: string
  onChange: (richText: string) => void
}) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      // CodeBlockLowlight.extend({
      //   addNodeView() {
      //     return ReactNodeViewRenderer(CodeBlockComponent)
      //   },
      // }).configure({ lowlight }),
    ],
    content,
    editorProps: {
      attributes: {
        class:
          'flex min-h-[150px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      },
    },
    onUpdate({ editor }) {
      onChange(editor.getHTML())
    },
  })

  return (
    <>
      <EditorMenubar editor={editor} />
      <EditorContent editor={editor} />
    </>
  )
}

// flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50
