import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPost, getBlogPostMetadata, getAllBlogPosts } from "@/lib/blog-utils";
import { formatDate } from "@/lib/date-utils";
import { Badge } from "@/components/ui/badge";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export const dynamicParams = false;

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const metadata = await getBlogPostMetadata(slug);

  if (!metadata) {
    return {
      title: "Post Not Found",
    };
  }

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: metadata.title,
    description: metadata.description,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      type: "article",
      publishedTime: metadata.date,
      authors: metadata.author ? [metadata.author] : undefined,
      images: metadata.ogImage
        ? [metadata.ogImage, ...previousImages]
        : previousImages,
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const PostContent = post.content;

  return (
    <article className="container mx-auto px-4 py-8 max-w-4xl">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center gap-4 text-muted-foreground mb-4">
          {post.date && (
            <time dateTime={post.date}>
              {formatDate(post.date)}
            </time>
          )}
          {post.author && <span>• {post.author}</span>}
        </div>
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </header>
      <div className="prose prose-lg max-w-none">
        <PostContent />
      </div>
    </article>
  );
}
