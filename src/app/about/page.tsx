import Image from "next/image";

/** Timeline entries — edit month, year, and descriptions to match your story. */
const timeline: { month: string; year: string; description: string }[] = [
  {
    month: "May",
    year: "2011",
    description:
      "Graduated from the University of Mary Washington (Virginia) with a B.S. in Psychology. Spent time traveling across the U.S.",
  },
  {
    month: "June",
    year: "2012",
    description:
      "Began working as a technical manager at a civil engineering firm in the Outer Banks, North Carolina. Learned AutoCAD, took up surfing, and started refurbishing furniture on the side.",
  },
  {
    month: "January",
    year: "2014",
    description:
      "Moved back to Chicago and began working as an interior designer at a small firm. Realized design was my path and enrolled in Harrington College to pursue a Master of Arts in Design.",
  },
  {
    month: "July",
    year: "2014",
    description:
      "Joined a high-end residential design firm while attending graduate school at night.",
  },
  {
    month: "May",
    year: "2016",
    description:
      "Graduated from design school. Traveled to the Nordics to explore design further and began taking on small freelance projects in web and graphic design.",
  },
  {
    month: "April",
    year: "2018",
    description:
      "Earned NCIDQ (National Council for Interior Design Qualification) certification.",
  },
  {
    month: "December",
    year: "2019",
    description:
      "Moved from the U.S. to Germany and began freelancing in digital design, including work on an indie financial tracking app with a developer in Denmark.",
  },
  {
    month: "November",
    year: "2020",
    description:
      "Relocated to Norway and joined Aigonix, a tech start up, as the company's first product designer, where I discovered a passion for design systems.",
  },
  {
    month: "May",
    year: "2023",
    description:
      "Joined Cognite as a Design System Lead, focusing on scalable systems within the industrial data space.",
  },
  {
    month: "May",
    year: "2024",
    description:
      "Promoted to Principal Product Designer, continuing to drive adoption and education around the design system.",
  },
  {
    month: "September",
    year: "2025",
    description:
      "Began exploring how AI could address long-standing design system challenges.",
  },
  {
    month: "March",
    year: "2026",
    description:
      "Preparing to launch an AI-native design system and migrate existing applications while establishing governance and contribution frameworks.",
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-content pt-[60px] pb-20">
      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-x-space-6 md:gap-x-space-8 gap-y-space-10 items-start">
        <h1 className="font-display text-scale-4 md:text-scale-5 font-medium text-brand-fg md:row-start-1 md:col-start-1">
          About
        </h1>
        <div
          className="w-[280px] min-w-[280px] md:w-[420px] md:min-w-[420px] rounded-[16px] md:row-start-2 md:col-start-1 pt-[60px] md:pt-[60px]"
          aria-hidden
        >
          <Image
            src="/images/liz-brenner-headshot.jpg"
            alt=""
            width={420}
            height={420}
            className="w-full h-auto object-contain rounded-[16px]"
            priority
          />
        </div>

        <div className="min-w-0 max-w-[600px] flex flex-col md:justify-between md:h-[420px] md:row-start-2 md:col-start-2 pt-[60px] md:pt-[60px]">
          <section aria-labelledby="bio-heading">
            <h2
              id="bio-heading"
              className="font-display text-scale-4 font-medium text-brand-fg"
            >
              Hi, I&apos;m Liz!
            </h2>
            <div className="mt-space-3 space-y-space-4">
              <p className="text-scale-3 text-brand-fg leading-normal">
                I&apos;m a product designer with 12+ years of experience across
                interior and digital design, specializing in design systems.
                Recently, I&apos;ve focused on leveraging AI within systems to help
                teams move faster, experiment more freely, and maintain quality at
                scale.
              </p>
              <p className="text-scale-3 text-brand-fg leading-normal">
                Outside of product design, I still explore my first passion —
                interiors — along with bouldering, trying new restaurants, reading
                a good thriller, and spending time with our dog, Mango.
              </p>
            </div>
          </section>

          <section aria-labelledby="open-to-roles-heading" className="mt-space-10">
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

      {/* Timeline — dots/lines left (align with header), dates middle, text right */}
      <section
        className="mt-[104px] md:mt-[120px] max-w-[640px]"
        aria-labelledby="timeline-heading"
      >
        <h2
          id="timeline-heading"
          className="font-display text-scale-4 font-medium text-brand-fg"
        >
          Timeline
        </h2>
        <ol className="mt-space-6 flex flex-col">
          {timeline.map((entry, index) => (
            <li
              key={`${entry.month}-${entry.year}-${index}`}
              className="flex gap-space-4 md:gap-space-5 items-start"
            >
              <span className="relative flex shrink-0 flex-col items-center w-6 self-stretch">
                <span
                  className="w-2 h-2 rounded-full bg-brand-highlight shrink-0 mt-1.5 z-10"
                  aria-hidden
                />
                {index < timeline.length - 1 && (
                  <span
                    className="absolute top-[0.625rem] left-1/2 -translate-x-1/2 w-px h-[100%] bg-[var(--color-timeline-line)]"
                    aria-hidden
                  />
                )}
              </span>
              <span
                className="font-display text-scale-3 text-brand-fg-muted shrink-0 flex flex-col min-w-[4.5rem] md:min-w-[5.5rem] tabular-nums"
                aria-hidden
              >
                <span>{entry.month}</span>
                <span>{entry.year}</span>
              </span>
              <p className="text-scale-3 text-brand-fg leading-normal flex-1 min-w-0 -mt-space-1 max-w-[640px] pb-[40px]">
                {entry.description}
              </p>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
