import type { ComponentType } from "react";

export type BlogPostMetadata = {
  title: string;
  date: string;
  description: string;
  tags?: string[];
  author?: string;
  ogImage?: string;
  ogImageAlt?: string;
};

export type BlogPost = BlogPostMetadata & {
  slug: string;
  content: ComponentType;
};
