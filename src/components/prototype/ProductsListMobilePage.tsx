import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { prototypeProducts } from "@/data/prototypeProducts";
import RelatedCardContent from "@/components/prototype/globals/RelatedCardContent";
import Footer from "@/components/prototype/globals/Footer";
import Menu from "@/components/prototype/globals/Menu";
import TopBar from "@/components/prototype/globals/TopBar";
import type { BadgeType } from "@/components/ui/Badge";

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
  heightClassName?: string;
  onClick?: () => void;
  onSecondaryClick?: () => void;
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
  heightClassName,
  onClick,
  onSecondaryClick,
}: ProductCardProps) {
  return (
    <div className="rounded-lg bg-background-surface-neutral-default p-3 cursor-pointer" onClick={onClick}>
      <RelatedCardContent
        className={heightClassName}
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
        onSecondaryClick={onSecondaryClick}
      />
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

export default function ProductsListMobilePage() {
  const router = useRouter();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuOffsetTop, setMenuOffsetTop] = useState(0);
  const [menuViewportHeight, setMenuViewportHeight] = useState(0);
  const handleOpenProduct = (slug: string) => {
    router.push(`/prototype/product-detailed/${slug}`);
  };
  const handleOpenMenu = () => {
    const scrollEl = getScrollableAncestor(wrapperRef.current);

    if (scrollEl === window) {
      setMenuOffsetTop(window.scrollY);
      setMenuViewportHeight(window.innerHeight);
    } else {
      setMenuOffsetTop(scrollEl.scrollTop);
      setMenuViewportHeight(scrollEl.clientHeight);
    }

    setIsMenuOpen(true);
  };

  return (
    <div
      ref={wrapperRef}
      className="relative flex min-h-full flex-col bg-background-default-default"
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
            iconType="plus"
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
            heightClassName={
              product.slug === "scalp-shampoo" ? "h-[184px]" : undefined
            }
            onClick={() => handleOpenProduct(product.slug)}
            onSecondaryClick={() => handleOpenProduct(product.slug)}
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
