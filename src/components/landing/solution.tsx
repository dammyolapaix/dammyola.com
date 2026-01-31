export function Solution() {
  return (
    <section className="border-b border-border bg-background px-6 py-16 md:px-8 lg:px-12">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-3xl font-bold text-foreground sm:text-4xl">
          We Build Software for Founders Who Don&apos;t Speak Tech
        </h2>
        <p className="mt-6 text-muted-foreground">
          We&apos;re a development agency that works exclusively with
          non-technical founders. We don&apos;t just write code—we help you turn
          your idea into a real product.
        </p>
        <div className="mt-10 space-y-8">
          <div>
            <h3 className="font-semibold text-foreground">What we do:</h3>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Build full-stack applications from scratch</li>
              <li>Add AI features to existing products</li>
              <li>Migrate from no-code platforms when you hit limits</li>
              <li>Fix and optimize products that aren&apos;t working</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground">
              How we&apos;re different:
            </h3>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>We explain everything in plain English</li>
              <li>We work in sprints so you see progress every week</li>
              <li>
                We use modern tech (Next.js) so your product is fast and easy to
                update
              </li>
              <li>We care about your metrics, not just your code</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
