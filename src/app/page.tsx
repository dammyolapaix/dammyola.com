import {
  Hero,
  Problem,
  Solution,
  HowItWorks,
  Packages,
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
        text: "Our MVP Builder is $1,000 for the first 5 clients (then $3,500), and typically takes 3-4 weeks. Book a free consultation for a detailed proposal.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most projects take 3-4 weeks. We work in 2-week sprints so you see progress regularly.",
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
        {/* <SocialProof /> */}
        <Problem />
        <Solution />
        <HowItWorks />
        <Packages />
        {/* <CaseStudies /> */}
        <FAQ />
        <FinalCta />
        <span id="download" className="sr-only" aria-hidden />
      </main>
    </>
  );
}
