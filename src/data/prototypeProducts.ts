import type { BadgeType } from "@/components/ui/Badge";

export type PrototypeProduct = {
  slug: string;
  heading: string;
  shortDescription: string;
  detailDescription: string;
  finalPrice: string;
  originalPrice?: string;
  imageSrc: string;
  cardImageSrc?: string;
  imageAlt: string;
  badgeLabel?: string;
  badgeType?: BadgeType;
};

export const prototypeProducts: PrototypeProduct[] = [
  {
    slug: "minoxidil-5-topical",
    heading: "Minoxidil 5% Topical",
    shortDescription: "Higher-strength topical",
    detailDescription:
      "A stronger topical formula for patients seeking a more intensive regrowth plan. Built for daily scalp application, it fits naturally into a consistent treatment routine focused on long-term results.",
    finalPrice: "14.99",
    imageSrc: "/images/prototype/minoxidil-5.webp",
    cardImageSrc: "/images/prototype/minoxidil-5-transparent.webp",
    imageAlt: "Minoxidil 5% Topical bottle",
    badgeLabel: "Bestseller",
    badgeType: "neutral",
  },
  {
    slug: "biotin-gummies",
    heading: "Biotin Gummies",
    shortDescription: "Daily nutritional support for hair wellness.",
    detailDescription:
      "A simple daily supplement designed to support hair wellness and fit easily into your routine.",
    finalPrice: "13.99",
    originalPrice: "19.99",
    imageSrc: "/images/prototype/biotin-gummies.webp",
    cardImageSrc: "/images/prototype/biotin-gummies-transparent.webp",
    imageAlt: "Biotin Gummies container",
    badgeLabel: "30% off",
    badgeType: "success",
  },
  {
    slug: "scalp-shampoo",
    heading: "Scalp Shampoo",
    shortDescription:
      "Helps keep the scalp clean and comfortable as part of the routine.",
    detailDescription:
      "A cleansing step that helps maintain scalp comfort, removes buildup, and supports a more consistent hair-care routine over time.",
    finalPrice: "7.99",
    imageSrc: "/images/prototype/scalp-shampoo.webp",
    cardImageSrc: "/images/prototype/scalp-shampoo-transparent.webp",
    imageAlt: "Scalp Shampoo bottle",
    badgeLabel: "New",
    badgeType: "neutral",
  },
];

export function getPrototypeProductBySlug(slug: string) {
  return prototypeProducts.find((product) => product.slug === slug);
}
