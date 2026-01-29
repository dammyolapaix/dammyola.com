"use client";

import { useState, useRef, useEffect } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CodeBlockProps = {
  children: React.ReactNode;
  "data-language"?: string;
  "data-filename"?: string;
  className?: string;
};

export function CodeBlock({
  children,
  "data-language": language,
  "data-filename": filename,
  className,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const codeRef = useRef<HTMLPreElement>(null);
  const [codeText, setCodeText] = useState("");

  // Extract code text from the DOM after render
  useEffect(() => {
    if (codeRef.current) {
      // Get all text content from the pre element, excluding the structure
      const text = codeRef.current.innerText || codeRef.current.textContent || "";
      setCodeText(text);
    } else {
      // Fallback: try to extract from children
      const extractText = (node: any): string => {
        if (typeof node === "string") {
          return node;
        }
        if (Array.isArray(node)) {
          return node.map(extractText).join("");
        }
        if (node?.type === "text" || node?.value) {
          return String(node.value || node);
        }
        if (node?.props) {
          return extractText(node.props.children);
        }
        if (node?.children) {
          return extractText(node.children);
        }
        return "";
      };
      setCodeText(extractText(children));
    }
  }, [children]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  // Determine display text for header
  const displayText = filename || language || "code";
  const displayLanguage = language || "text";

  // Check if language is TypeScript
  const isTypeScript = language?.toLowerCase() === "typescript" || language?.toLowerCase() === "ts" || language?.toLowerCase() === "tsx";

  return (
    <div className="relative my-6 overflow-hidden rounded-lg border border-border/50 bg-[#1e1e1e] shadow-lg">
      {/* Header Bar */}
      <div className="flex items-center justify-between border-b border-border/30 bg-[#252526] px-4 py-2.5">
        <div className="flex items-center gap-2.5">
          {filename ? (
            <div className="flex items-center gap-2">
              {isTypeScript && (
                <div className="flex items-center justify-center w-5 h-5 rounded bg-[#3178c6]">
                  <span className="text-[10px] font-bold text-white leading-none">TS</span>
                </div>
              )}
              <span className="text-xs font-medium text-foreground/80">
                {filename}
              </span>
            </div>
          ) : (
            language && (
              <div className="flex items-center gap-2">
                {isTypeScript && (
                  <div className="flex items-center justify-center w-5 h-5 rounded bg-[#3178c6]">
                    <span className="text-[10px] font-bold text-white leading-none">TS</span>
                  </div>
                )}
                <span className="text-xs font-medium text-[#d4d4d4] uppercase tracking-wide">
                  {displayLanguage}
                </span>
              </div>
            )
          )}
        </div>
        <Button
          variant="ghost"
          size="icon-xs"
          onClick={handleCopy}
          className="h-7 w-7 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
          aria-label={copied ? "Copied!" : "Copy code"}
        >
          {copied ? (
            <Check className="h-3.5 w-3.5 text-green-500" />
          ) : (
            <Copy className="h-3.5 w-3.5" />
          )}
        </Button>
      </div>

      {/* Code Content */}
      <div className="overflow-x-auto bg-[#1e1e1e]">
        <pre
          ref={codeRef}
          className={cn(
            "m-0 p-4 text-sm leading-relaxed bg-[#1e1e1e] text-[#d4d4d4]",
            "[&_code]:block [&_code]:w-full [&_code]:font-mono [&_code]:bg-transparent! [&_code]:text-[#d4d4d4]",
            "[&_.line]:block [&_.line]:min-h-6",
            // Force dark theme colors
            "[&_span]:text-inherit",
            className
          )}
          style={{ backgroundColor: "#1e1e1e", color: "#d4d4d4" }}
        >
          {children}
        </pre>
      </div>
    </div>
  );
}
