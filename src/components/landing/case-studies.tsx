import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const caseStudies = [
  {
    title: "From Idea to 100 Users in 8 Weeks",
    intro:
      "A Founder came to us with an idea for a SaaS product. No technical background. No co-founder. Just an idea and early customer interest.",
    built: [
      "Full-stack application with user authentication",
      "Payment integration (Stripe)",
      "Admin dashboard",
      "Email notifications",
    ],
    results: [
      "Launched in 8 weeks",
      "First 100 users in 2 months",
      "$5,000 MRR within 3 months",
    ],
  },
  {
    title: "Added AI Features in 3 Weeks",
    intro:
      "A Founder had an existing product but wanted to add AI capabilities. They didn't know if it was possible or how much it would cost.",
    built: [
      "AI-powered content generation",
      "Custom chatbot for customer support",
      "Integration with existing product",
    ],
    results: [
      "AI features live in 3 weeks",
      "40% reduction in support tickets",
      "Customers love the new features",
    ],
  },
];

export function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="border-b border-border bg-muted/20 px-6 py-16 md:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
          Real Products. Real Results.
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {caseStudies.map((study) => (
            <Card key={study.title} size="default">
              <CardHeader>
                <CardTitle className="text-base font-semibold">
                  {study.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground">{study.intro}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-xs font-medium text-foreground">
                    What we built:
                  </p>
                  <ul className="mt-1 list-disc space-y-1 pl-4 text-sm text-muted-foreground">
                    {study.built.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-medium text-foreground">Results:</p>
                  <ul className="mt-1 list-disc space-y-1 pl-4 text-sm text-muted-foreground">
                    {study.results.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Link
                  href="#case-studies"
                  className="text-sm font-medium text-primary underline-offset-4 hover:underline"
                >
                  Read Full Case Study →
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        <p className="mt-8 text-center">
          <Link
            href="#case-studies"
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            See All Case Studies →
          </Link>
        </p>
      </div>
    </section>
  );
}
