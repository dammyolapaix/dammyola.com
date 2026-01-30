export function SocialProof() {
  return (
    <section className="border-b border-border bg-background px-6 py-16 md:px-8 lg:px-12">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-xl font-semibold text-foreground sm:text-2xl">
          Trusted by founders who launched their products
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-3 sm:gap-6">
          <div className="text-center">
            <p className="text-2xl font-bold text-primary sm:text-3xl">
              20+
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              founders launched with us
            </p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-primary sm:text-3xl">
              6–8 weeks
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              average launch time
            </p>
          </div>
          <div className="sm:col-span-3">
            <blockquote className="rounded-lg border border-border bg-card p-6 text-center">
              <p className="text-muted-foreground">
                &ldquo;We went from idea to live product in 6 weeks. They
                understood what we needed without us having to explain every
                technical detail.&rdquo;
              </p>
              <cite className="mt-3 block text-sm font-medium not-italic text-foreground">
                — A Founder
              </cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
