import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CONSULTATION_URL, PROFILE_IMAGE_PATH } from "@/lib/constants";
import { Check } from "lucide-react";
import Image from "next/image";

const primaryButtonClass =
  "inline-flex h-12 items-center justify-center gap-2 rounded-none border border-transparent bg-primary px-10 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

const mvpPackage = {
  name: "MVP Builder",
  priceOriginal: "$3,500",
  pricePromo: "$1,000",
  pricePromoLabel: "First 5 clients",
  timeline: "3–4 weeks",
  tagline:
    "Perfect if you have an idea and need to validate it quickly.",
  features: [
    "Full-stack application (front-end + back-end)",
    "Database setup",
    "User authentication",
    "1–2 core features tailored to your idea",
    "Launch-ready in 3–4 weeks",
  ],
};

export function Packages() {
  return (
    <section
      id="packages"
      className="border-b border-border bg-background px-6 py-16 md:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Built to Launch: The MVP Builder
          </h2>
          <p className="mt-3 text-muted-foreground sm:text-lg">
            Choose the package that fits your stage and get started today.
          </p>
        </div>
        <div className="mt-10">
          <Card size="default" className="rounded-lg overflow-hidden">
            <CardHeader className="space-y-4">
              <CardTitle className="text-xl font-semibold sm:text-2xl">
                {mvpPackage.name}
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                {mvpPackage.timeline}
              </p>
              <div className="space-y-1">
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {mvpPackage.pricePromoLabel}
                </p>
                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="text-lg text-muted-foreground line-through">
                    {mvpPackage.priceOriginal}
                  </span>
                  <span className="text-4xl font-bold text-foreground sm:text-5xl">
                    {mvpPackage.pricePromo}
                  </span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3 text-sm text-muted-foreground">
                {mvpPackage.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className="h-4 w-4 shrink-0 text-primary mt-0.5"
                      aria-hidden
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground pt-1">
                {mvpPackage.tagline}
              </p>
            </CardContent>
            <CardFooter>
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
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
