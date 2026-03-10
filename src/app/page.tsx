import {
  HorizontalScrollCarousel,
  type HorizontalScrollCarouselItem,
} from "@/components/HorizontalScrollCarousel";

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
    image: "https://placehold.co/800x450/e5e5e5/5c5c5c?text=Agent+chat+%26+landing",
  },
  {
    slug: "designer-drop",
    title: "Designer Drop",
    context: "Cognite",
    description: "Internal tool to connect design work across a global team and alleviate the pain point of siloed work.",
    image: "https://placehold.co/800x450/e5e5e5/5c5c5c?text=Designer+Drop",
  },
];

function workToCarouselItems(items: WorkItem[]): HorizontalScrollCarouselItem[] {
  return items.map((item) => {
    const isPlaceholder = "placeholder" in item && item.placeholder === true;
    const withThemeImages = "imageLight" in item && "imageDark" in item;
    return {
      id: item.slug,
      title: item.title,
      description: item.description,
      href: isPlaceholder ? "#" : `/work/${item.slug}`,
      image: withThemeImages ? undefined : "image" in item ? item.image : undefined,
      imageLight: withThemeImages ? (item as { imageLight?: string }).imageLight : undefined,
      imageDark: withThemeImages ? (item as { imageDark?: string }).imageDark : undefined,
      placeholder: isPlaceholder,
    };
  });
}

export default function HomePage() {
  const caseStudies = workToCarouselItems(work);

  return (
    <div className="pt-[60px]">
      {/* Single intro line — Alice Lee style */}
      <p className="font-display text-scale-4 md:text-scale-5 font-medium text-brand-fg max-w-measure leading-normal mt-space-4 hero-blur-in" style={{ fontSize: "32px" }}>
        Hello, I&apos;m Liz, a Principal Product Designer focused on AI native design systems based in Oslo, Norway. Currently at Cognite.
      </p>

      {/* Full-viewport scroll-driven horizontal case study carousel */}
      <div className="w-screen relative left-1/2 -ml-[50vw] mt-space-16 md:mt-space-20">
        <HorizontalScrollCarousel items={caseStudies} cardWidthVw={68} />
      </div>
    </div>
  );
}
