"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// --- Item type: cover image(s), title, description, link ---
export interface HorizontalScrollCarouselItem {
  id: string;
  title: string;
  description: string;
  href: string;
  /** Single image URL (used when no theme variants) */
  image?: string;
  /** Light theme cover (optional) */
  imageLight?: string;
  /** Dark theme cover (optional); use with imageLight */
  imageDark?: string;
  /** Placeholder card (no image, no link) */
  placeholder?: boolean;
}

interface HorizontalScrollCarouselProps {
  items: HorizontalScrollCarouselItem[];
  /** Card width as viewport width (default 80 = 80vw, 70–90 recommended) */
  cardWidthVw?: number;
  /** Gap between cards (Tailwind class or CSS value) */
  gap?: string;
}

const CARD_WIDTH_VW = 80;
const GAP_PX = 24;
const MOBILE_BREAKPOINT = 640;

/**
 * Scroll-driven horizontal carousel: vertical scroll input drives horizontal
 * translation. Uses a virtual scroll area whose height = (trackWidth - viewportWidth)
 * so scroll progress maps 1:1 to horizontal movement.
 *
 * Scroll math:
 *   sectionTop = offset of the carousel section from document top
 *   scrollDriveHeight = trackWidth - viewportWidth  (how far we allow "virtual" scroll)
 *   localScroll = scrollY - sectionTop  (scroll within this section)
 *   progress = clamp(localScroll / scrollDriveHeight, 0, 1)
 *   translateX = -progress * scrollDriveHeight = -localScroll (clamped)
 */
export function HorizontalScrollCarousel({
  items,
  cardWidthVw = CARD_WIDTH_VW,
  gap = "24px",
}: HorizontalScrollCarouselProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = useState(0);
  const [sectionHeight, setSectionHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const rafId = useRef<number | null>(null);
  const trackWidthRef = useRef(0);
  const viewportWidthRef = useRef(0);
  const sectionTopRef = useRef(0);

  const updateTransform = useCallback(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const scrollY = window.scrollY;
    const sectionTop = sectionTopRef.current;
    const trackWidth = trackWidthRef.current;
    const viewportWidth = viewportWidthRef.current;
    const scrollDriveHeight = Math.max(0, trackWidth - viewportWidth);

    // Local scroll within this section (0 when we're above section, then 0..scrollDriveHeight)
    const localScroll = Math.max(0, Math.min(scrollY - sectionTop, scrollDriveHeight));
    const tx = -localScroll;
    setTranslateX(tx);
  }, []);

  const onScrollOrResize = useCallback(() => {
    if (rafId.current != null) return;
    rafId.current = requestAnimationFrame(() => {
      rafId.current = null;
      const section = sectionRef.current;
      const track = trackRef.current;
      if (!section || !track) return;

      const rect = section.getBoundingClientRect();
      sectionTopRef.current = rect.top + window.scrollY;
      viewportWidthRef.current = window.innerWidth;
      trackWidthRef.current = track.scrollWidth;

      const scrollDriveHeight = Math.max(0, trackWidthRef.current - viewportWidthRef.current);
      const carouselViewportHeight = window.innerHeight * 0.8;
      // Section height = carousel viewport (80vh) + scroll distance that drives horizontal motion
      setSectionHeight(carouselViewportHeight + scrollDriveHeight);

      updateTransform();
    });
  }, [updateTransform]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const runMeasure = () => {
      requestAnimationFrame(() => onScrollOrResize());
    };
    runMeasure();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    // When track gets its width (after layout), re-measure so section height includes scrollDriveHeight
    const track = trackRef.current;
    const ro = track
      ? new ResizeObserver(() => {
          runMeasure();
        })
      : null;
    if (track) ro?.observe(track);
    const t1 = setTimeout(runMeasure, 150);
    const t2 = setTimeout(runMeasure, 500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      ro?.disconnect();
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      if (rafId.current != null) cancelAnimationFrame(rafId.current);
    };
  }, [isMobile, onScrollOrResize]);

  // Mobile: vertical stack, no scroll-driven behavior
  if (isMobile) {
    return (
      <section
        ref={sectionRef}
        className="min-h-screen overflow-hidden md:overflow-visible"
        aria-label="Case studies"
      >
        <div className="flex flex-col gap-6 px-space-4 md:px-space-8">
          {items.map((item) => (
            <CaseStudyCard key={item.id} item={item} variant="stacked" />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      style={{ height: sectionHeight || "80vh", minHeight: "80vh" }}
      className="relative w-full"
      aria-label="Case studies"
    >
      {/* Sticky viewport: 80vh gives cards room; top offset clears browser chrome; padding prevents clipping */}
      <div
        className="sticky left-0 w-full h-[80vh] overflow-hidden flex flex-col justify-center box-border"
        style={{
          top: "max(env(safe-area-inset-top, 0px), 80px)",
          paddingTop: "max(env(safe-area-inset-top, 0px) + 24px, 72px)",
          paddingBottom: "max(env(safe-area-inset-bottom, 0px) + 24px, 72px)",
        }}
      >
        <div
          ref={trackRef}
          className="flex flex-row items-start will-change-transform py-6 pl-[calc(max(0px,(100vw-80rem)/2)+var(--space-4))] md:pl-[calc(max(0px,(100vw-80rem)/2)+var(--space-8))] pr-[5vw]"
          style={{
            gap,
            transform: `translate3d(${translateX}px, 0, 0)`,
            width: "max-content",
            minWidth: "100%",
          }}
        >
          {items.map((item) => (
            <CaseStudyCard
              key={item.id}
              item={item}
              variant="carousel"
              cardWidthVw={cardWidthVw}
              translateX={translateX}
              viewportWidthRef={viewportWidthRef}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Card sub-component: supports carousel (with optional scale/opacity) and stacked layout ---
interface CaseStudyCardProps {
  item: HorizontalScrollCarouselItem;
  variant: "carousel" | "stacked";
  cardWidthVw?: number;
  translateX?: number;
  viewportWidthRef?: React.RefObject<number>;
}

function CaseStudyCard({
  item,
  variant,
  cardWidthVw = CARD_WIDTH_VW,
  translateX = 0,
  viewportWidthRef,
}: CaseStudyCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Optional: subtle scale/opacity when card is near center (carousel only)
  const [style, setStyle] = useState<React.CSSProperties>({});
  useEffect(() => {
    if (variant !== "carousel" || !viewportWidthRef?.current) return;
    const update = () => {
      const card = cardRef.current;
      const vw = viewportWidthRef.current;
      if (!card || !vw) return;
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.left + rect.width / 2;
      const viewportCenter = vw / 2;
      const distance = Math.abs(cardCenter - viewportCenter);
      const threshold = vw * 0.5;
      const t = Math.max(0, 1 - distance / threshold);
      const scale = 0.96 + 0.04 * t;
      const opacity = 0.85 + 0.15 * t;
      setStyle({ transform: `scale(${scale})`, opacity });
    };
    update();
    // Re-run after paint when translateX changes (card position updated)
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(update);
    });
    const ro = cardRef.current ? new ResizeObserver(update) : null;
    if (cardRef.current) ro?.observe(cardRef.current);
    return () => {
      cancelAnimationFrame(id);
      ro?.disconnect();
    };
  }, [variant, translateX]);

  const hasThemeImages = !item.placeholder && item.imageLight && item.imageDark;
  const hasSingleImage = !item.placeholder && item.image;
  const imageEl =
    hasThemeImages ? (
      <>
        <span className="theme-cover-light absolute inset-0 block">
          <Image
            src={item.imageLight!}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 80vw"
            unoptimized
          />
        </span>
        <span className="theme-cover-dark absolute inset-0 block">
          <Image
            src={item.imageDark!}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 80vw"
            unoptimized
          />
        </span>
      </>
    ) : hasSingleImage ? (
      <Image
        src={item.image!}
        alt=""
        fill
        className="object-cover"
        sizes="(max-width: 640px) 100vw, 80vw"
      />
    ) : item.placeholder ? (
      <div className="absolute inset-0 flex items-center justify-center bg-brand-fg-muted/10">
        <span className="text-scale-3 text-brand-fg-muted">Coming soon</span>
      </div>
    ) : null;

  const imageContainerClass =
    variant === "carousel"
      ? "absolute inset-0 overflow-hidden rounded-lg bg-brand-fg-muted/10"
      : "absolute inset-0 overflow-hidden rounded-lg bg-brand-fg-muted/10";

  const contentWrapperClass =
    variant === "carousel"
      ? "relative h-full w-full"
      : "relative w-full aspect-video";

  const cardContent = (
    <div className={contentWrapperClass}>
      <div className={imageContainerClass}>
        <div className="case-study-card-image-inner absolute inset-0">
          {imageEl}
        </div>
      </div>
      {/* Title: right of card, middle-aligned, overlapping; "see project" swoops in on hover */}
      <div className="case-study-card-text-wrap absolute right-0 top-1/2 flex w-[55%] max-w-[420px] -translate-y-1/2 flex-col items-end justify-center pr-space-2 text-right">
        <h3 className="case-study-card-title font-display text-[48px] font-bold leading-tight text-brand-fg drop-shadow-md">
          {item.title}
        </h3>
        {!item.placeholder && (
          <span className="case-study-card-see-project mt-space-4 block font-display text-[32px] font-bold uppercase leading-tight text-brand-fg drop-shadow-md">
            see project implement this exactly
          </span>
        )}
      </div>
    </div>
  );

  const cardClass =
    variant === "carousel"
      ? "flex flex-col rounded-lg overflow-hidden bg-brand-bg-elevated border-2 border-brand-border transition-all case-study-card-glow case-study-card-carousel flex-shrink-0"
      : "flex flex-col rounded-lg overflow-hidden bg-brand-bg-elevated border-2 border-brand-border transition-all case-study-card-glow flex-shrink-0";

  if (variant === "stacked") {
    return (
      <article className={cardClass + " w-full"}>
        {item.placeholder ? (
          <div className="block h-full w-full">{cardContent}</div>
        ) : (
          <Link
            href={item.href}
            className="block h-full w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent focus-visible:outline-offset-2 rounded-lg"
          >
            {cardContent}
          </Link>
        )}
      </article>
    );
  }

  const carouselCardSize =
    variant === "carousel"
      ? {
          width: `min(${cardWidthVw}vw, 900px)`,
          height: "560px",
          minHeight: "560px",
        }
      : undefined;

  return (
    <article
      ref={cardRef}
      className={cardClass}
      style={{ ...carouselCardSize, ...style }}
    >
      {item.placeholder ? (
        <div className="block h-full w-full">{cardContent}</div>
      ) : (
        <Link
          href={item.href}
          className="block h-full w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent focus-visible:outline-offset-2 rounded-lg"
        >
          {cardContent}
        </Link>
      )}
    </article>
  );
}
