import { Badge } from '@/components/ui/badge'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { BlogType } from '@/types/blog'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Edit, Edit2, MoreHorizontal } from 'lucide-react'
import Link from 'next/link'

export default function Blogs({ blogs }: { blogs: BlogType[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Image</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {blogs.map(({ id, title, image, isPublished }) => (
          <TableRow key={id}>
            <TableCell className="font-medium">{title}</TableCell>
            <TableCell>
              {image ? (
                <Image
                  alt=""
                  src={image}
                  height={500}
                  width={500}
                  className="w-24 h-24"
                />
              ) : (
                ''
              )}
            </TableCell>
            <TableCell>
              {isPublished ? (
                <Badge>Published</Badge>
              ) : (
                <Badge variant="secondary">Draft</Badge>
              )}
            </TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="icon" variant="outline" className="h-8 w-8">
                    <MoreHorizontal className="h-3.5 w-3.5" />
                    <span className="sr-only">More</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild className="cursor-pointer">
                    <Link href={`/dashboard/blog/${id}/edit`} className="gap-2">
                      <Edit2 size={'15'} /> Edit
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
