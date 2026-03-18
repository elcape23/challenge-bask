import { useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { prototypeProducts } from "@/data/prototypeProducts";
import RelatedCardContent from "@/components/prototype/globals/RelatedCardContent";
import Footer from "@/components/prototype/globals/Footer";
import Menu from "@/components/prototype/globals/Menu";
import TopBar from "@/components/prototype/globals/TopBar";
import Card from "@/components/ui/Card";
import type { BadgeType } from "@/components/ui/Badge";
import usePrototypePageReady from "@/components/prototype/usePrototypePageReady";

const HERO_IMAGE =
  "/images/prototype/category-top-background.webp";

type ProductCardProps = {
  heading: string;
  description: string;
  finalPrice: string;
  originalPrice?: string;
  imageSrc: string;
  imageAlt: string;
  badgeLabel: string;
  badgeType: BadgeType;
  onClick?: () => void;
  onPrimaryClick?: () => void;
};

function ProductCard({
  heading,
  description,
  finalPrice,
  originalPrice,
  imageSrc,
  imageAlt,
  badgeLabel,
  badgeType,
  onClick,
  onPrimaryClick,
}: ProductCardProps) {
  return (
    <Card size="md" showHeading={false} className="cursor-pointer" onClick={onClick}>
      <RelatedCardContent
        heading={heading}
        description={description}
        finalPrice={finalPrice}
        originalPrice={originalPrice}
        imageSrc={imageSrc}
        imageAlt={imageAlt}
        showBadge
        badgeLabel={badgeLabel}
        badgeType={badgeType}
        isOffer={Boolean(originalPrice)}
        onPrimaryClick={onPrimaryClick}
      />
    </Card>
  );
}

function Bone({ className }: { className?: string }) {
  return (
    <div
      className={`animate-pulse rounded-sm bg-background-surface-neutral-default ${className ?? ""}`}
    />
  );
}

function ProductsListSkeleton() {
  return (
    <div className="relative flex min-h-full flex-col bg-background-default-default">
      {/* Hero */}
      <section className="relative h-[200px] overflow-hidden rounded-b-xl">
        <Bone className="absolute inset-0 rounded-none" />
        <div className="relative flex h-full flex-col justify-between p-5 pt-0">
          <TopBar color="invert" showIconButton state="loading" />
          <Bone className="h-8 w-40" />
        </div>
      </section>

      {/* Product cards */}
      <div className="flex flex-col gap-4 px-5 pt-5 pb-12">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="rounded-lg bg-background-surface-neutral-default p-3"
          >
            <Bone className="h-[184px] w-full rounded-md" />
            <div className="flex flex-col gap-2 pt-3">
              <Bone className="h-4 w-3/4" />
              <Bone className="h-3 w-1/2" />
              <Bone className="h-8 w-24 rounded-max mt-1" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function getScrollableAncestor(element: HTMLDivElement | null): HTMLElement | Window {
  let parent = element?.parentElement;

  while (parent) {
    const overflow = window.getComputedStyle(parent).overflowY;
    if (overflow === "auto" || overflow === "scroll") {
      return parent;
    }
    parent = parent.parentElement;
  }

  return window;
}

function getScrollMetrics(scrollEl: HTMLElement | Window) {
  if (scrollEl instanceof HTMLElement) {
    return {
      top: scrollEl.scrollTop,
      height: scrollEl.clientHeight,
    };
  }

  return {
    top: window.scrollY,
    height: window.innerHeight,
  };
}

export default function ProductsListMobilePage() {
  const router = useRouter();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const loadingSources = useMemo(
    () => [HERO_IMAGE, ...prototypeProducts.map((product) => product.cardImageSrc ?? product.imageSrc)],
    [],
  );
  const isReady = usePrototypePageReady(loadingSources);

  const [menuOffsetTop, setMenuOffsetTop] = useState(0);
  const [menuViewportHeight, setMenuViewportHeight] = useState(0);

  if (!isReady) return <ProductsListSkeleton />;

  const handleOpenProduct = (slug: string) => {
    router.push(`/prototype/product-detailed/${slug}`);
  };
  const handleOpenMenu = () => {
    const scrollEl = getScrollableAncestor(wrapperRef.current);
    const { top, height } = getScrollMetrics(scrollEl);

    setMenuOffsetTop(top);
    setMenuViewportHeight(height);
    setIsMenuOpen(true);
  };

  return (
    <div
      ref={wrapperRef}
      className="prototype-dissolve-in relative flex min-h-full flex-col bg-background-default-default"
    >
      <section className="relative h-[200px] overflow-hidden rounded-b-xl pb-5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HERO_IMAGE}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-background-fill-neutral-muted" />

        <div className="relative flex h-full flex-col justify-between">
          <TopBar
            color="invert"
            showIconButton
            iconType="menu"
            iconButtonAriaLabel="Add product"
            onIconButtonClick={handleOpenMenu}
          />

          <h1 className="max-w-[200px] px-5 text-heading-04 font-medium text-text-primary-invert">
            Hair Regrowth Products
          </h1>
        </div>
      </section>

      <div className="flex flex-col gap-4 px-5 pt-5 pb-12">
        {prototypeProducts.map((product) => (
          <ProductCard
            key={product.slug}
            heading={product.heading}
            description={product.shortDescription}
            finalPrice={product.finalPrice}
            originalPrice={product.originalPrice}
            imageSrc={product.cardImageSrc ?? product.imageSrc}
            imageAlt={product.imageAlt}
            badgeLabel={product.badgeLabel ?? "New"}
            badgeType={product.badgeType ?? "neutral"}
            onClick={() => handleOpenProduct(product.slug)}
            onPrimaryClick={() => handleOpenProduct(product.slug)}
          />
        ))}
      </div>

      <section className="mt-auto bg-background-default-invert px-5 py-12">
        <Footer variant="section" />
      </section>

      {isMenuOpen && (
        <div
          className="absolute left-0 right-0 z-20 flex items-start justify-center overflow-y-auto pb-5"
          style={{ top: menuOffsetTop, height: menuViewportHeight }}
        >
          <Menu
            className="max-w-none"
            onClose={() => setIsMenuOpen(false)}
          />
        </div>
      )}
    </div>
  );
}
