import Image from "next/image";
import { PROFILE_IMAGE_PATH } from "@/lib/constants";
import { CtaButton } from "./cta-button";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden px-6 py-24 sm:py-32 md:px-8 lg:px-12"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 0%, oklch(0.488 0.243 264.376 / 0.08), transparent 70%), var(--muted)",
      }}
    >
      <div className="container mx-auto flex max-w-5xl flex-col items-center gap-12 md:flex-row md:gap-16 md:text-left">
        <div className="order-2 flex flex-1 flex-col md:order-1 md:max-w-xl">
          <h1
            className="font-sans text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both"
            style={{ animationDelay: "0ms" }}
          >
            Build Your Product Without Learning to Code
          </h1>
          <p
            className="mt-6 text-lg text-muted-foreground sm:text-xl animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both"
            style={{ animationDelay: "80ms" }}
          >
            We build software and AI products for non-technical founders. No
            technical co-founder needed. No hiring a full team. Just you, your
            idea, and us.
          </p>
          <div
            className="mt-10 flex flex-col items-start animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both"
            style={{ animationDelay: "160ms" }}
          >
            <div className="flex flex-col items-center gap-1.5">
              <CtaButton variant="default">Book a Free Consultation</CtaButton>
              <span className="text-xs text-muted-foreground">
                30 min, free, no pitch
              </span>
            </div>
          </div>
        </div>
        <div
          className="order-1 shrink-0 md:order-2 animate-in fade-in duration-500 fill-mode-both"
          style={{ animationDelay: "120ms" }}
        >
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
