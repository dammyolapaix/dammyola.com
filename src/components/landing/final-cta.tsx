import Link from "next/link";
import { CONSULTATION_URL } from "@/lib/constants";

const ctaButtonClass =
  "inline-flex h-9 items-center justify-center gap-1.5 rounded-none border border-transparent bg-primary-foreground px-6 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring";

export function FinalCta() {
  return (
    <section className="bg-primary px-6 py-20 text-primary-foreground sm:py-28 md:px-8 lg:px-12">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-bold sm:text-3xl">
          Ready to Build Your Product?
        </h2>
        <p className="mt-6 text-primary-foreground/90">
          You don&apos;t need to learn to code. You don&apos;t need a technical
          co-founder. You just need someone who can turn your idea into reality.
        </p>
        <p className="mt-4 text-primary-foreground/90">
          Let&apos;s talk about what you want to build. No commitment. No
          technical jargon. Just a 30-minute conversation.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={CONSULTATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={ctaButtonClass}
          >
            Book a Free Consultation
          </a>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm">
          <Link
            href="#packages"
            className="underline-offset-4 hover:underline"
          >
            See Our Packages
          </Link>
          <span aria-hidden>|</span>
          <Link
            href="#case-studies"
            className="underline-offset-4 hover:underline"
          >
            Read Case Studies
          </Link>
          <span aria-hidden>|</span>
          <Link href="#download" className="underline-offset-4 hover:underline">
            Download Product Brief Template
          </Link>
        </div>
      </div>
    </section>
  );
}
