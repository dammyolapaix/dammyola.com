import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CONSULTATION_URL } from "@/lib/constants";

const packageList = [
  {
    name: "MVP Builder",
    price: "$8,000 - $15,000",
    timeline: "4-6 weeks",
    description:
      "Full-stack MVP with database, authentication, and 1-2 core features. Perfect if you have an idea and need to validate it quickly.",
  },
  {
    name: "AI Feature Add-On",
    price: "$3,000 - $8,000",
    timeline: "2-3 weeks",
    description:
      "Add AI capabilities to your existing product. Chatbots, content generation, or custom AI features. Perfect if you want to add AI without rebuilding everything.",
  },
  {
    name: "Product Audit + Fix",
    price: "$2,000 - $5,000",
    timeline: "1-2 weeks",
    description:
      "Review your existing product, fix critical issues, and optimize performance. Perfect if something isn't working and you need it fixed fast.",
  },
  {
    name: "Migration Service",
    price: "$5,000 - $12,000",
    timeline: "3-5 weeks",
    description:
      "Migrate from no-code platforms (Bubble, Webflow) to custom code. Perfect if you've hit the limits of no-code and need more control.",
  },
];

export function Packages() {
  return (
    <section
      id="packages"
      className="border-b border-border bg-background px-6 py-16 md:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
          Packages for Founders at Every Stage
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {packageList.map((pkg) => (
            <Card key={pkg.name} size="default">
              <CardHeader>
                <CardTitle className="text-base font-semibold">
                  {pkg.name}
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  {pkg.price} | {pkg.timeline}
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{pkg.description}</p>
              </CardContent>
              <CardFooter>
                <a
                  href={CONSULTATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-primary underline-offset-4 hover:underline"
                >
                  Get a Quote →
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
        <p className="mt-8 text-center text-muted-foreground">
          Not sure which package fits?{" "}
          <a
            href={CONSULTATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            Book a free consultation
          </a>{" "}
          and we&apos;ll help you choose.
        </p>
      </div>
    </section>
  );
}
