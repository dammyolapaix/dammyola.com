'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Table from '@tiptap/extension-table'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'
import './tiptap-styles.css'

type Props = {
  content: string
  onChange: (richText: string) => void
}

const Tiptap = ({ content, onChange }: Props) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
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

  if (!editor) {
    return null
  }

  return (
    <>
      <div className="control-group">
        <div className="button-group">
          <button
            className="bg-blue-600 text-white"
            onClick={() =>
              editor
                .chain()
                .focus()
                .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
                .run()
            }
          >
            Insert table
          </button>
          <button
            onClick={() => editor.chain().focus().addColumnBefore().run()}
          >
            Add column before
          </button>
          <button onClick={() => editor.chain().focus().addColumnAfter().run()}>
            Add column after
          </button>
          <button onClick={() => editor.chain().focus().deleteColumn().run()}>
            Delete column
          </button>
          <button onClick={() => editor.chain().focus().addRowBefore().run()}>
            Add row before
          </button>
          <button onClick={() => editor.chain().focus().addRowAfter().run()}>
            Add row after
          </button>
          <button onClick={() => editor.chain().focus().deleteRow().run()}>
            Delete row
          </button>
          <button onClick={() => editor.chain().focus().deleteTable().run()}>
            Delete table
          </button>
          <button onClick={() => editor.chain().focus().mergeCells().run()}>
            Merge cells
          </button>
          <button onClick={() => editor.chain().focus().splitCell().run()}>
            Split cell
          </button>
          <button
            onClick={() => editor.chain().focus().toggleHeaderColumn().run()}
          >
            Toggle header column
          </button>
          <button
            onClick={() => editor.chain().focus().toggleHeaderRow().run()}
          >
            Toggle header row
          </button>
          <button
            onClick={() => editor.chain().focus().toggleHeaderCell().run()}
          >
            Toggle header cell
          </button>
          <button onClick={() => editor.chain().focus().mergeOrSplit().run()}>
            Merge or split
          </button>
          <button
            onClick={() =>
              editor.chain().focus().setCellAttribute('colspan', 2).run()
            }
          >
            Set cell attribute
          </button>
          <button onClick={() => editor.chain().focus().fixTables().run()}>
            Fix tables
          </button>
          <button onClick={() => editor.chain().focus().goToNextCell().run()}>
            Go to next cell
          </button>
          <button
            onClick={() => editor.chain().focus().goToPreviousCell().run()}
          >
            Go to previous cell
          </button>
        </div>
      </div>

      <EditorContent editor={editor} />
    </>
  )
}

export default Tiptap
