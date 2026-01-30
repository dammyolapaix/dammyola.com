import Link from "next/link";
import { SITE_NAME, CONSULTATION_URL } from "@/lib/constants";

export function StickyHeader() {
  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      role="banner"
    >
      <div className="container flex h-14 items-center justify-between px-6 md:px-8 lg:px-12">
        <Link
          href="/"
          className="font-semibold text-foreground hover:underline"
        >
          {SITE_NAME}
        </Link>
        <nav aria-label="Primary">
          <a
            href={CONSULTATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Get Started
          </a>
        </nav>
      </div>
    </header>
  );
}
