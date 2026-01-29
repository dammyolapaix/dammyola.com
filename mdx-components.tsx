import type { MDXComponents } from "mdx/types";
import Image, { type ImageProps } from "next/image";
import { CodeBlock } from "@/components/code-block";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

const components = {
  // Allows customizing built-in components, e.g. to add styling.
  h1: ({ children }: { children: React.ReactNode }) => (
    <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>
  ),
  h2: ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-3xl font-semibold mt-6 mb-3">{children}</h2>
  ),
  h3: ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-2xl font-semibold mt-4 mb-2">{children}</h3>
  ),
  h4: ({ children }: { children: React.ReactNode }) => (
    <h4 className="text-xl font-semibold mt-3 mb-2">{children}</h4>
  ),
  p: ({ children }: { children: React.ReactNode }) => (
    <p className="mb-4 leading-7">{children}</p>
  ),
  a: ({ href, children }: { href?: string; children: React.ReactNode }) => (
    <a
      href={href}
      className="text-primary underline underline-offset-4 hover:text-primary/80"
    >
      {children}
    </a>
  ),
  ul: ({ children }: { children: React.ReactNode }) => (
    <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>
  ),
  ol: ({ children }: { children: React.ReactNode }) => (
    <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>
  ),
  li: ({ children }: { children: React.ReactNode }) => (
    <li className="ml-4">{children}</li>
  ),
  blockquote: ({ children }: { children: React.ReactNode }) => (
    <blockquote className="border-l-4 border-primary pl-4 italic my-4">
      {children}
    </blockquote>
  ),
  code: ({ children, className }: { children: React.ReactNode; className?: string }) => {
    const isInline = !className;
    return isInline ? (
      <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    ) : (
      <code className={className}>{children}</code>
    );
  },
  pre: (props: React.ComponentProps<"pre"> & { "data-language"?: string; "data-filename"?: string }) => {
    // rehype-pretty-code adds data-language to the pre element
    const language = props["data-language"];
    const filename = props["data-filename"];

    // If it has data-language, it's a code block from rehype-pretty-code
    if (language) {
      return (
        <CodeBlock
          data-language={language}
          data-filename={filename}
          className={props.className}
        >
          {props.children}
        </CodeBlock>
      );
    }

    // Fallback for regular pre elements
    return (
      <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4">
        {props.children}
      </pre>
    );
  },
  img: (props: ImageProps) => (
    <Image
      sizes="100vw"
      style={{ width: "100%", height: "auto" }}
      {...props}
    />
  ),
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
