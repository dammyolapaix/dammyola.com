import { CONSULTATION_URL } from "@/lib/constants";

const primaryButtonClass =
  "inline-flex h-9 items-center justify-center gap-1.5 rounded-none border border-transparent bg-primary px-6 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring";

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
    title: "3. Build & Launch (4-8 weeks)",
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
        <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
          How We Work Together
        </h2>
        <div className="mt-10 space-y-8">
          {steps.map((step) => (
            <div key={step.title}>
              <h3 className="font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-muted-foreground">{step.body}</p>
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
            Book a Free Consultation — See how we work
          </a>
        </div>
      </div>
    </section>
  );
}
