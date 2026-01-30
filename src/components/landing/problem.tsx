export function Problem() {
  return (
    <section className="border-b border-border bg-muted/20 px-6 py-16 md:px-8 lg:px-12">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
          You Have the Idea. But You&apos;re Stuck.
        </h2>
        <p className="mt-6 text-muted-foreground">
          You know what you want to build. You&apos;ve validated the idea. You
          might even have your first customers waiting.
        </p>
        <p className="mt-4 text-muted-foreground">
          But you can&apos;t code. And you don&apos;t want to:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
          <li>Spend months learning to program</li>
          <li>Hire and manage a full development team</li>
          <li>Work with freelancers who disappear mid-project</li>
          <li>Pay agency prices for work you can&apos;t understand</li>
        </ul>
        <p className="mt-6 text-lg text-foreground">
          You need someone who gets it. Someone who speaks your language, not
          just code.
        </p>
      </div>
    </section>
  );
}
