import type { Metadata } from "next";
import Link from "next/link";
import { getAllBlogPosts } from "@/lib/blog-utils";
import { formatDate } from "@/lib/date-utils";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Blog | Dammy Ola",
  description:
    "Software engineering blog sharing experiences, insights, and technical knowledge.",
  openGraph: {
    title: "Blog | Dammy Ola",
    description:
      "Software engineering blog sharing experiences, insights, and technical knowledge.",
    type: "website",
  },
};

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      {posts.length === 0 ? (
        <p className="text-muted-foreground">
          No blog posts yet. Check back soon!
        </p>
      ) : (
        <div className="space-y-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="hover:ring-2 hover:ring-primary transition-all cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-2xl mb-2">{post.title}</CardTitle>
                  <CardDescription>
                    {formatDate(post.date)}
                    {post.author && ` • ${post.author}`}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {post.description}
                  </p>
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
