import Link from "next/link";
import { CONSULTATION_URL } from "@/lib/constants";

const faqItems = [
  {
    question: "How much does it cost to build an app?",
    answer: (
      <>
        It depends on what you&apos;re building. Our packages start at $2,000
        for audits and go up to $15,000 for full MVPs. Most founders spend
        $8,000-$12,000 for their first product.{" "}
        <Link href="#packages" className="font-medium text-primary hover:underline">
          See our packages
        </Link>{" "}
        for detailed pricing.
      </>
    ),
  },
  {
    question: "How long does it take?",
    answer:
      "Most projects take 4-8 weeks. Simple features can be done in 2-3 weeks. Full MVPs typically take 6-8 weeks. We work in 2-week sprints so you see progress regularly.",
  },
  {
    question: "What if I'm not technical? Will you understand what I need?",
    answer:
      "Yes. We work exclusively with non-technical founders. We explain everything in plain English. You don't need to know how to code—you just need to know what you want to build.",
  },
  {
    question: "Do I own the code?",
    answer:
      "Yes. You own everything we build. We'll give you access to the code, help you set up hosting, and show you how to maintain it (or we can maintain it for you).",
  },
];

export function FAQ() {
  return (
    <section
      id="faq"
      className="border-b border-border bg-background px-6 py-16 md:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
          Common Questions
        </h2>
        <dl className="mt-10 space-y-8">
          {faqItems.map((item) => (
            <div key={item.question}>
              <dt className="font-semibold text-foreground">{item.question}</dt>
              <dd className="mt-2 text-muted-foreground">{item.answer}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-10 text-muted-foreground">
          <Link href="#faq" className="font-medium text-primary hover:underline">
            See All FAQs
          </Link>
          {" → "}
          Still have questions?{" "}
          <a
            href={CONSULTATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary hover:underline"
          >
            Book a free consultation
          </a>
        </p>
      </div>
    </section>
  );
}
