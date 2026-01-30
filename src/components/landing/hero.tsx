import Link from "next/link";
import { CONSULTATION_URL } from "@/lib/constants";

const primaryButtonClass =
  "inline-flex h-9 items-center justify-center gap-1.5 rounded-none border border-transparent bg-primary px-6 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-muted/30 px-6 py-20 sm:py-28 md:px-8 lg:px-12">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="font-sans text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Build Your Product Without Learning to Code
        </h1>
        <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
          We build software and AI products for non-technical founders. No
          technical co-founder needed. No hiring a full team. Just you, your
          idea, and us.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={CONSULTATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={primaryButtonClass}
          >
            Book a Free Consultation
          </a>
          <Link
            href="#packages"
            className="text-sm font-medium text-primary underline-offset-4 hover:underline"
          >
            See our packages →
          </Link>
        </div>
      </div>
    </section>
  );
}
