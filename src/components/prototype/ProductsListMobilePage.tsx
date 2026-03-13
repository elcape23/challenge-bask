import { useState } from "react";
import { useRouter } from "next/navigation";
import RelatedCardContent from "@/components/prototype/globals/RelatedCardContent";
import Footer from "@/components/prototype/globals/Footer";
import Menu from "@/components/prototype/globals/Menu";
import TopBar from "@/components/prototype/globals/TopBar";
import type { BadgeType } from "@/components/ui/Badge";

const HERO_IMAGE =
  "/images/prototype/category-top-background.webp";

const PRODUCT_IMAGES = {
  minoxidil: "/images/prototype/minoxidil-5-transparent.webp",
  biotin: "/images/prototype/biotin-gummies-transparent.webp",
  shampoo: "/images/prototype/scalp-shampoo-transparent.webp",
} as const;

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
  onSecondaryClick,
}: ProductCardProps) {
  return (
    <div className="rounded-lg bg-background-surface-neutral-default p-3">
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

export default function ProductsListMobilePage() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative flex min-h-full flex-col bg-background-default-default">
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
            onIconButtonClick={() => setIsMenuOpen(true)}
          />

          <h1 className="max-w-[200px] px-5 text-heading-04 font-medium text-text-primary-invert">
            Hair Regrowth Products
          </h1>
        </div>
      </section>

      <div className="flex flex-col gap-4 px-5 pt-5 pb-12">
        <ProductCard
          heading="Minoxidil 5% Topical"
          description="Higher-strength topical"
          finalPrice="19.99"
          imageSrc={PRODUCT_IMAGES.minoxidil}
          imageAlt="Minoxidil 5% Topical bottle"
          badgeLabel="Bestseller"
          badgeType="neutral"
          onSecondaryClick={() => router.push("/prototype/product-detailed")}
        />

        <ProductCard
          heading="Biotin Gummies"
          description="Daily nutritional for hair wellness"
          finalPrice="13.99"
          originalPrice="19.99"
          imageSrc={PRODUCT_IMAGES.biotin}
          imageAlt="Biotin Gummies container"
          badgeLabel="30% off"
          badgeType="success"
        />

        <ProductCard
          heading="Scalp Shampoo"
          description="Helps keep the scalp clean and comfortable"
          finalPrice="7.99"
          imageSrc={PRODUCT_IMAGES.shampoo}
          imageAlt="Scalp Shampoo bottle"
          badgeLabel="New"
          badgeType="neutral"
          heightClassName="h-[184px]"
        />
      </div>

      <section className="mt-auto bg-background-default-invert px-5 py-12">
        <Footer variant="section" />
      </section>

      {isMenuOpen && (
        <div className="absolute inset-0 z-20 flex items-start justify-center pb-5">
          <Menu
            className="max-w-none"
            onClose={() => setIsMenuOpen(false)}
          />
        </div>
      )}
    </div>
  );
}
