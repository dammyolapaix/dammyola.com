import Image from "next/image";
import Link from "next/link";
import {
  CONSULTATION_URL,
  PROFILE_IMAGE_PATH,
  SITE_NAME,
} from "@/lib/constants";

export function StickyHeader() {
  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      role="banner"
    >
      <div className="px-6 md:px-8 lg:px-12">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold text-foreground hover:underline"
            aria-label={`${SITE_NAME} - Home`}
          >
            <Image
              src={PROFILE_IMAGE_PATH}
              alt="Dammy Ola — the person behind this site"
              width={36}
              height={36}
              className="rounded-full object-cover"
            />
            <span className="hidden sm:inline">{SITE_NAME}</span>
          </Link>
          <nav aria-label="Primary">
            <a
              href={CONSULTATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              <Image
                src={PROFILE_IMAGE_PATH}
                alt=""
                width={24}
                height={24}
                className="rounded-full object-cover"
              />
              Book a Call with Dammy
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
