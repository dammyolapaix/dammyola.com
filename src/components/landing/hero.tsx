import Image from "next/image";
import Link from "next/link";
import { CONSULTATION_URL, PROFILE_IMAGE_PATH } from "@/lib/constants";

const primaryButtonClass =
  "inline-flex h-9 items-center justify-center gap-1.5 rounded-none border border-transparent bg-primary px-6 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-muted/30 px-6 py-20 sm:py-28 md:px-8 lg:px-12">
      <div className="container mx-auto flex max-w-5xl flex-col items-center gap-12 md:flex-row md:gap-16 md:text-left">
        <div className="order-2 flex flex-1 flex-col md:order-1 md:max-w-xl">
          <h1 className="font-sans text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Build Your Product Without Learning to Code
          </h1>
          <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
            We build software and AI products for non-technical founders. No
            technical co-founder needed. No hiring a full team. Just you, your
            idea, and us.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row md:items-start">
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
        <div className="order-1 shrink-0 md:order-2">
          <Image
            src={PROFILE_IMAGE_PATH}
            alt="Dammy Ola — the person behind this site"
            width={320}
            height={320}
            className="rounded-full object-cover ring-2 ring-border"
            priority
          />
        </div>
      </div>
    </section>
  );
}
