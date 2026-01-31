import { CONSULTATION_URL, PROFILE_IMAGE_PATH } from "@/lib/constants";
import Image from "next/image";

const primaryButtonClass =
  "inline-flex h-12 items-center justify-center gap-2 rounded-none border border-transparent bg-primary px-10 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

const steps = [
  {
    title: "1. Discovery Call (30 minutes)",
    body: "We learn about your idea, your goals, and your timeline. No technical talk—just a conversation about what you want to build.",
  },
  {
    title: "2. Proposal & Agreement (1 week)",
    body: "We send a clear proposal with timeline, deliverables, and price. No surprises. You review, ask questions, and we finalize.",
  },
  {
    title: "3. Build & Launch (3-4 weeks)",
    body: "We work in 2-week sprints. You see progress every week. We launch when you're ready, not when we decide.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="border-b border-border bg-muted/20 px-6 py-16 md:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-3xl font-bold text-foreground sm:text-4xl">
          How We Work Together
        </h2>
        <div className="mt-10 space-y-8">
          {steps.map((step, index) => (
            <div key={step.title} className="flex gap-4">
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/5 text-sm font-bold text-primary"
                aria-hidden
              >
                {index + 1}
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-muted-foreground">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <a
            href={CONSULTATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={primaryButtonClass}
          >
            <Image
              src={PROFILE_IMAGE_PATH}
              alt="Dammy Ola — the person behind this site"
              width={24}
              height={24}
              className="rounded-full object-cover"
            />
            Book a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
