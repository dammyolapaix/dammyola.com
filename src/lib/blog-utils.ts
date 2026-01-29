import { cache } from "react";
import { readdir } from "fs/promises";
import { join } from "path";
import type { BlogPost, BlogPostMetadata } from "@/types/blog-types";

const contentDirectory = join(process.cwd(), "src/content/blog");

// Memoize blog post fetching to avoid duplicate requests
const getBlogPostModule = cache(async (slug: string, extension: string) => {
  return await import(`@/content/blog/${slug}${extension}`);
});

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    const files = await readdir(contentDirectory);
    const mdxFiles = files.filter((file) => file.endsWith(".mdx") || file.endsWith(".md"));

    const posts = await Promise.all(
      mdxFiles.map(async (file) => {
        const slug = file.replace(/\.(mdx|md)$/, "");
        try {
          const module = await import(`@/content/blog/${file}`);
          // Support both 'metadata' (from .mdx exports) and 'frontmatter' (from YAML)
          const metadata = (module.metadata || module.frontmatter) as BlogPostMetadata | undefined;
          if (!metadata) {
            console.error(`No metadata found in ${file}. Available exports:`, Object.keys(module));
            return null;
          }
          const post = {
            slug,
            ...metadata,
            content: module.default,
          } as BlogPost;
          if (!post.date) {
            console.warn(`Post ${slug} is missing a date field`);
          }
          return post;
        } catch (error) {
          console.error(`Error loading blog post ${file}:`, error);
          return null;
        }
      })
    );

    // Filter out any null results and sort by date (newest first)
    const validPosts = posts.filter(
      (post): post is BlogPost => post !== null && post.date !== undefined
    );
    return validPosts.sort((a, b) => {
      const dateA = a.date ? new Date(a.date).getTime() : 0;
      const dateB = b.date ? new Date(b.date).getTime() : 0;
      return dateB - dateA;
    });
  } catch (error) {
    console.error("Error reading blog posts:", error);
    return [];
  }
}

export const getBlogPost = cache(async (slug: string): Promise<BlogPost | null> => {
  try {
    const module = await getBlogPostModule(slug, ".mdx");
    const metadata = (module.metadata || module.frontmatter) as BlogPostMetadata | undefined;
    if (!metadata) return null;
    return {
      slug,
      ...metadata,
      content: module.default,
    } as BlogPost;
  } catch (error) {
    // Try .md extension
    try {
      const module = await getBlogPostModule(slug, ".md");
      const metadata = (module.metadata || module.frontmatter) as BlogPostMetadata | undefined;
      if (!metadata) return null;
      return {
        slug,
        ...metadata,
        content: module.default,
      } as BlogPost;
    } catch {
      return null;
    }
  }
});

export const getBlogPostMetadata = cache(
  async (slug: string): Promise<BlogPostMetadata | null> => {
    try {
      const module = await getBlogPostModule(slug, ".mdx");
      return (module.metadata || module.frontmatter) as BlogPostMetadata | null;
    } catch (error) {
      // Try .md extension
      try {
        const module = await getBlogPostModule(slug, ".md");
        return (module.metadata || module.frontmatter) as BlogPostMetadata | null;
      } catch {
        return null;
      }
    }
  }
);
