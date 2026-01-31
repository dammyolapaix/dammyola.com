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
        <div className="mx-auto flex max-w-5xl items-center justify-between py-4">
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
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-primary px-6 py-2.5 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Image
                src={PROFILE_IMAGE_PATH}
                alt="Dammy Ola - the person behind this site"
                width={24}
                height={24}
                className="rounded-full object-cover"
              />
              Book a Free Consultation
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
