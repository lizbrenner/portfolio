import Image from "next/image";
import Link from "next/link";

type WorkItem =
  | {
      slug: string;
      title: string;
      context: string;
      description: string;
      image?: string;
      imageLight?: string;
      imageDark?: string;
      placeholder?: false;
    }
  | {
      slug: string;
      title: string;
      context: string;
      description: string;
      placeholder: true;
      image?: string;
    };

const work: WorkItem[] = [
  {
    slug: "aura",
    title: "Aura",
    context: "Cognite",
    description: "AI-native design system that cut time to market from 3+ months to 6 weeks",
    imageLight: "/images/aura-cover-light.png",
    imageDark: "/images/aura-cover-dark.png",
  },
  {
    slug: "agent-landing",
    title: "Agent chat & landing",
    context: "Cognite",
    description: "Unified AI-driven experience for industrial workflows",
    image: "/images/agent-landing.jpg",
  },
  {
    slug: "designer-drop",
    title: "Designer Drop",
    context: "Cognite",
    description: "Internal tool to connect design work across a global team and alleviate the pain point of siloed work.",
    placeholder: true,
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Single intro line — Alice Lee style */}
      <p className="font-display text-scale-4 md:text-scale-5 text-brand-fg max-w-measure leading-normal mt-space-4" style={{ fontSize: "32px" }}>
        Hello, I&apos;m Liz, a Principal Product Designer focused on AI native design systems based in Oslo, Norway. Currently at Cognite.
      </p>

      {/* Work list — two columns: each column has case studies stacked (image above text) */}
      <div
        className="mt-space-16 md:mt-space-20 grid grid-cols-1 md:grid-cols-2 gap-x-6 md:gap-x-8 lg:gap-x-10 gap-y-space-10 md:gap-y-space-12"
        aria-label="Work"
      >
        {[0, 1].map((colIndex) => {
          const columnItems = work.filter((_, index) => index % 2 === colIndex);
          return (
            <ul key={colIndex} className="space-y-space-10 md:space-y-space-12 flex flex-col">
              {columnItems.map((item) => {
                const hasThemeImages = !item.placeholder && "imageLight" in item && item.imageLight && item.imageDark;
                const hasSingleImage = !item.placeholder && "image" in item && item.image;
                const imageBlock =
                  hasThemeImages ? (
                    <div className="relative w-full aspect-[16/10] rounded overflow-hidden bg-brand-fg-muted/10 group-hover:opacity-95 transition-opacity">
                      <span className="theme-cover-light absolute inset-0 block">
                        <Image
                          src={item.imageLight!}
                          alt=""
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          unoptimized
                        />
                      </span>
                      <span className="theme-cover-dark absolute inset-0 block">
                        <Image
                          src={item.imageDark!}
                          alt=""
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          unoptimized
                        />
                      </span>
                    </div>
                  ) : hasSingleImage ? (
                    <div className="relative w-full aspect-[16/10] rounded overflow-hidden bg-brand-fg-muted/10 group-hover:opacity-95 transition-opacity">
                      <Image
                        src={item.image!}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  ) : (
                    <div className="relative w-full aspect-[16/10] rounded overflow-hidden bg-brand-fg-muted/10 flex items-center justify-center">
                      <span className="text-scale-3 text-brand-fg-muted">Coming soon</span>
                    </div>
                  );
                const textBlock = item.placeholder ? (
                  <>
                    <span className="font-display text-scale-4 md:text-scale-5 font-medium text-brand-fg">
                      {item.title}
                    </span>
                    <p className="mt-space-1 text-scale-3 text-brand-fg-muted">
                      {item.description}
                    </p>
                  </>
                ) : (
                  <>
                    <span className="font-display text-scale-4 md:text-scale-5 font-medium text-brand-fg group-hover:opacity-70 transition-opacity">
                      {item.title}
                    </span>
                    {item.context && (
                      <span className="font-display text-scale-4 md:text-scale-5 font-medium text-brand-fg opacity-70">
                        {" "}
                        · {item.context}
                      </span>
                    )}
                    <p className="mt-space-1 text-scale-3 text-brand-fg-muted group-hover:text-brand-fg transition-colors">
                      {item.description}
                    </p>
                  </>
                );

                return (
                  <li key={item.slug} className="space-y-space-6">
                    {item.placeholder ? (
                      <>
                        {imageBlock}
                        <div className="mt-space-6">{textBlock}</div>
                      </>
                    ) : (
                      <Link
                        href={`/work/${item.slug}`}
                        className="block group focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent focus-visible:outline-offset-2 rounded space-y-space-6"
                      >
                        {imageBlock}
                        <div className="mt-space-6">{textBlock}</div>
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          );
        })}
      </div>
    </div>
  );
}
