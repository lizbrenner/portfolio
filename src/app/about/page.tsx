export default function AboutPage() {
  return (
    <div className="max-w-content grid grid-cols-1 md:grid-cols-[auto_1fr] gap-x-space-6 md:gap-x-space-8 gap-y-space-10 items-start">
      <h1 className="font-display text-scale-4 md:text-scale-5 font-medium text-brand-fg md:row-start-1 md:col-start-1">
        About
      </h1>
      <div
        className="aspect-square w-[280px] min-w-[280px] md:w-[420px] md:min-w-[420px] rounded-lg overflow-hidden bg-brand-bg border border-brand-border flex items-center justify-center text-scale-2 text-brand-fg-muted md:row-start-2 md:col-start-1"
        aria-hidden
      >
        {/* Placeholder: add public/images/headshot.jpg and use next/image for your header image */}
        <span className="sr-only">Header image placeholder</span>
      </div>

      <div className="min-w-0 max-w-[600px] flex flex-col gap-space-8 md:row-start-2 md:col-start-2">
        <section aria-labelledby="bio-heading">
          <h2
            id="bio-heading"
            className="font-display text-scale-4 font-medium text-brand-fg"
          >
            Hi, I&apos;m Liz!
          </h2>
          <div className="mt-space-3 space-y-space-4">
            <p className="text-scale-3 text-brand-fg leading-normal">
              I bring over 12 years of experience across interior and digital
              product design, with a focus on design systems. Most recently, my
              work has centered on leveraging AI within systems to challenge
              traditional product development, helping teams move faster,
              experiment more freely, and iterate confidently while maintaining
              quality and consistency.
            </p>
            <p className="text-scale-3 text-brand-fg leading-normal">
              No matter how deep I go into digital product, I always return to my
              first passion: interior design. In my spare time, I write about
              interiors, dabble in space planning drawings, and enjoy exploring
              new tools shaping the industry. Outside of design, you&apos;ll find
              me bouldering, trying new restaurants, reading a great thriller, or
              spending time with our dog, Mango.
            </p>
          </div>
        </section>

        <section aria-labelledby="open-to-roles-heading">
          <h2
            id="open-to-roles-heading"
            className="font-display text-scale-4 font-medium text-brand-fg"
          >
            Open to roles
          </h2>
          <p className="mt-space-3 text-scale-3 text-brand-fg leading-normal">
            I&apos;m open to roles where I can continue contributing hands-on,
            both within and beyond design systems. I&apos;m especially drawn to
            product design opportunities within the interiors, finance, and
            sports industries.
          </p>
          <p className="mt-space-3 text-scale-3 text-brand-fg leading-normal">
            If we sound like a great fit, please{" "}
            <a
              href="mailto:liz.m.brenner@gmail.com"
              className="text-brand-accent hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent focus-visible:outline-offset-2 rounded"
            >
              reach out
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
