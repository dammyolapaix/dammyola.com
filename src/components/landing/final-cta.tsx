import { CtaButton } from "./cta-button";

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
          <div className="flex flex-col items-center gap-2">
            <CtaButton variant="inverted">Book a Free Consultation</CtaButton>
            {/* <p className="text-sm text-primary-foreground/80">
              Join 20+ founders who&apos;ve launched with us · Free 30-min call
            </p> */}
            <p className="text-sm text-primary-foreground/80">
              Launched with us. Free 30-min call
            </p>
          </div>
        </div>
        {/* <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm">
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
        </div> */}
      </div>
    </section>
  );
}
