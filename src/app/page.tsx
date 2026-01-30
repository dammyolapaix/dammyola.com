import {
  Hero,
  SocialProof,
  Problem,
  Solution,
  HowItWorks,
  Packages,
  CaseStudies,
  FAQ,
  FinalCta,
  StickyHeader,
  ExitIntentPopup,
} from "@/components/landing";
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does it cost to build an app?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on what you're building. Our packages start at $2,000 for audits and go up to $15,000 for full MVPs. Most founders spend $8,000-$12,000 for their first product. See our packages for detailed pricing.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most projects take 4-8 weeks. Simple features can be done in 2-3 weeks. Full MVPs typically take 6-8 weeks. We work in 2-week sprints so you see progress regularly.",
      },
    },
    {
      "@type": "Question",
      name: "What if I'm not technical? Will you understand what I need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We work exclusively with non-technical founders. We explain everything in plain English. You don't need to know how to code—you just need to know what you want to build.",
      },
    },
    {
      "@type": "Question",
      name: "Do I own the code?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You own everything we build. We'll give you access to the code, help you set up hosting, and show you how to maintain it (or we can maintain it for you).",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd),
        }}
      />
      <StickyHeader />
      <ExitIntentPopup />
      <main id="main-content" role="main">
        <Hero />
        <SocialProof />
        <Problem />
        <Solution />
        <HowItWorks />
        <Packages />
        <CaseStudies />
        <FAQ />
        <FinalCta />
        <span id="download" className="sr-only" aria-hidden />
      </main>
    </>
  );
}
