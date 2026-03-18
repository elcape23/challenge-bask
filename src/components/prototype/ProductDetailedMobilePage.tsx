"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import { useRouter } from "next/navigation";
import { getPrototypeCartCount, setPrototypeCartItem } from "@/data/prototypeCart";
import type { PrototypeProduct } from "@/data/prototypeProducts";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { AccordionItem } from "@/components/ui/Accordion";
import Icon from "@/components/ui/Icon";
import Select from "@/components/ui/Select";
import RadioButton from "@/components/ui/RadioButton";
import Card from "@/components/ui/Card";
import CardContent from "@/components/prototype/globals/CardContent";
import Footer from "@/components/prototype/globals/Footer";
import InfoCardContent from "@/components/prototype/globals/InfoCardContent";
import Menu from "@/components/prototype/globals/Menu";
import TopBar from "@/components/prototype/globals/TopBar";

const PRODUCT_ASSETS = {
  background: "/images/prototype/carousel-background.png",
  finasteride: "/images/prototype/finasteride-minoxidil.webp",
} as const;

const DOSAGE_OPTIONS = [
  { value: "one-month", label: "30 pills every month" },
  { value: "two-months", label: "60 pills every two months" },
  {
    value: "three-months",
    label: "90 pills every three months",
    badgeLabel: "Save 17%",
    badgeType: "success",
  },
] as const;

const SHAMPOO_DOSAGE_OPTIONS = [
  { value: "one-month", label: "1 bottle every month" },
  { value: "two-months", label: "2 bottle every 2 month" },
  {
    value: "three-months",
    label: "3 bottle every 3 month",
    badgeLabel: "Save 17%",
    badgeType: "success",
  },
] as const;

const DOSAGE_MULTIPLIERS = {
  "one-month": 1,
  "two-months": 2,
  "three-months": 3,
} as const;

const DOSAGE_DISCOUNTS = {
  "one-month": 0,
  "two-months": 0,
  "three-months": 0.17,
} as const;


type ProductDetailedMobilePageProps = {
  product: PrototypeProduct;
  relatedProducts?: PrototypeProduct[];
};

type ProductConfiguratorProps = {
  selectedProductSlug: string;
  selectedDosage: keyof typeof DOSAGE_MULTIPLIERS;
  dosageOptions: readonly {
    value: string;
    label: string;
    description?: string;
    badgeLabel?: string;
    badgeType?: "success";
  }[];
  selectableProducts: PrototypeProduct[];
  showStrength: boolean;
  cartCount: number;
  onBuyNow: () => void;
  onAddToCart: () => void;
  onSelectProduct: (slug: string) => void;
  onSelectDosage: (dosage: keyof typeof DOSAGE_MULTIPLIERS) => void;
};

const MINOXIDIL_TWO_PERCENT_PRODUCT: PrototypeProduct = {
  slug: "minoxidil-2-topical",
  heading: "Minoxidil 2% Topical",
  shortDescription: "Gentler starting strength",
  detailDescription:
    "A gentler topical option for patients easing into a daily regrowth routine. Designed for consistent scalp application, it supports steady long-term care with a lighter-strength formula.",
  finalPrice: "12.99",
  imageSrc: "/images/prototype/minoxidil-2.webp",
  cardImageSrc: "/images/prototype/minoxidil-2-transparent.webp",
  imageAlt: "Minoxidil 2% Topical bottle",
  badgeLabel: "Gentle",
  badgeType: "neutral",
};

function formatPrice(
  price: string,
  multiplier: number,
  discountRate = 0,
) {
  const totalPrice = Number(price) * multiplier;
  const discountedPrice = totalPrice * (1 - discountRate);

  return discountedPrice.toFixed(2);
}

function calculateSubtotal(price: string, multiplier: number) {
  return (Number(price) * multiplier).toFixed(2);
}

function ProductHero({
  product,
  displayPrice,
}: {
  product: PrototypeProduct;
  displayPrice: string;
}) {
  return (
    <>
      {/* Product image — full-width, square */}
      <div className="aspect-square overflow-hidden rounded-xl bg-background-surface-neutral-default">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.imageSrc}
          alt={product.imageAlt}
          className="h-full w-full object-contain object-center"
        />
      </div>

      {/* Product info */}
      <div className="flex flex-col gap-4">
        {product.badgeLabel ? (
          <Badge
            type={product.badgeType ?? "neutral"}
            size="sm"
            label={product.badgeLabel}
            showIcon={false}
            className="self-start"
          />
        ) : null}
        <div className="flex flex-col gap-1">
          <h1 className="text-heading-06 font-medium text-text-neutral-default">
            {product.heading}
          </h1>
          <p className="text-body-01 font-medium text-text-neutral-default">
            ${displayPrice}
          </p>
        </div>
        <p className="text-body-01 text-text-neutral-secondary">
          {product.detailDescription}
        </p>
      </div>
    </>
  );
}

function ProductConfigurator({
  selectedProductSlug,
  selectedDosage,
  dosageOptions,
  selectableProducts,
  showStrength,
  cartCount,
  onBuyNow,
  onAddToCart,
  onSelectProduct,
  onSelectDosage,
}: ProductConfiguratorProps) {
  return (
    <>
      {showStrength ? (
        <div className="flex flex-col gap-2">
          <h2 className="text-heading-06 font-medium text-text-neutral-default">
            Strength
          </h2>
          <div className="flex gap-2">
            {selectableProducts.map((option) => (
              <RadioButton
                key={option.slug}
                name="strength"
                heading={option.heading}
                description={option.shortDescription}
                checked={selectedProductSlug === option.slug}
                onChange={() => onSelectProduct(option.slug)}
              />
            ))}
          </div>
        </div>
      ) : null}

      {/* Dosage */}
      <div className="flex flex-col gap-2">
        <h2 className="text-heading-06 font-medium text-text-neutral-default">
          Dosage
        </h2>
        <Select
          size="sm"
          placeholder={dosageOptions[0]?.label}
          options={[...dosageOptions]}
          value={selectedDosage}
          onChange={(value) =>
            onSelectDosage(value as keyof typeof DOSAGE_MULTIPLIERS)
          }
        />
      </div>

      {/* Buy Now + Guarantee */}
      <div className="flex flex-col gap-2">
        <Button
          size="lg"
          variant="neutral"
          appearance="outlined"
          className="w-full"
          onClick={onAddToCart}
        >
          {cartCount > 0 ? `Add to Cart (${cartCount})` : "Add to Cart"}
        </Button>
        <Button
          size="lg"
          variant="primary"
          appearance="filled"
          className="w-full"
          onClick={onBuyNow}
        >
          Buy Now
        </Button>
        <p className="text-center text-body-02 text-text-neutral-secondary">
          30-days risk-free guarantee. Free US shipping
        </p>
      </div>
    </>
  );
}

function ProductInfoAccordions() {
  return (
    <div className="flex flex-col gap-3">
      <AccordionItem heading="Benefits" size="sm" defaultOpen>
        <ul className="list-disc list-inside space-y-1 text-body-02 text-text-neutral-secondary">
          <li>Helps support hair regrowth</li>
          <li>May slow further hair loss</li>
          <li>Works best with consistent daily use</li>
          <li>Results usually visible after months</li>
        </ul>
      </AccordionItem>
      <AccordionItem heading="Ingredients" size="sm">
        <ul className="list-disc list-inside space-y-1 text-body-02 text-text-neutral-secondary">
          <li>Minoxidil 5% (active ingredient)</li>
          <li>Alcohol, propylene glycol</li>
          <li>Purified water</li>
        </ul>
      </AccordionItem>
      <AccordionItem heading="Shipping" size="sm">
        <p className="text-body-02 text-text-neutral-secondary">
          Standard delivery timing depends on your plan and shipping address.
        </p>
      </AccordionItem>
    </div>
  );
}

function AddOnCard({ onAdd }: { onAdd: () => void }) {
  return (
    <Card size="lg" showHeading={false} className="!border-0">
      <div className="flex gap-2 items-start">
        <div className="size-[116px] shrink-0 overflow-hidden rounded-xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={PRODUCT_ASSETS.finasteride}
            alt="Minoxidil + Finasteride combo"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-1">
          <p className="text-body-01 font-medium text-text-primary-default">
            Minoxidil + Finasteride
          </p>
          <p className="text-body-02 text-text-primary-default">
            A more complete treatment plan designed to support fuller, healthier
            hair
          </p>
          <div className="mt-auto flex items-center gap-2 pt-2">
            <div className="flex items-center gap-1 text-body-02">
              <span className="font-medium text-text-primary-default">
                $71.99
              </span>
              <span className="text-text-neutral-secondary line-through">
                $99.99
              </span>
            </div>
            <Button
              size="sm"
              variant="primary"
              appearance="filled"
              className="ml-auto shrink-0"
              onClick={onAdd}
            >
              Add
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}

function HighlightSection() {
  return (
    <section className="relative overflow-hidden rounded-[32px] bg-background-default-invert px-5 py-12">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={PRODUCT_ASSETS.background}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />

      <div className="relative flex flex-col gap-8">
        <h2 className="text-heading-04 font-medium text-text-neutral-invert">
          Feel the difference of a truly healthy gut.
        </h2>

        <div className="-mx-5 flex gap-3 overflow-x-auto px-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="w-[300px] shrink-0 rounded-[20px] bg-background-default-invert p-7">
            <InfoCardContent
              heading="Supports Hair Regrowth"
              description="Helps support thicker hair over time."
              icon={
                <Icon
                  type="square-arrow-up-right"
                  size="md"
                  className="text-icon-neutral-invert"
                />
              }
              className="w-full"
            />
          </div>
          <div className="w-[300px] shrink-0 rounded-[20px] bg-background-default-invert p-7">
            <InfoCardContent
              heading="Topical Daily Use"
              description="Applied directly to thinning areas as part of a daily routine."
              icon={
                <Icon
                  type="chart-column-increasing"
                  size="md"
                  className="text-icon-neutral-invert"
                />
              }
              className="w-full"
            />
          </div>
          <div className="w-[300px] shrink-0 rounded-[20px] bg-background-default-invert p-7">
            <InfoCardContent
              heading="Consistent Routine"
              description="Best results come with regular, continued use."
              icon={
                <Icon
                  type="calendar-sync"
                  size="md"
                  className="text-icon-neutral-invert"
                />
              }
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductFaq() {
  return (
    <section className="flex flex-col gap-3 rounded-[32px] px-5 py-12">
      <h2 className="text-heading-06 font-medium text-text-neutral-default">
        FAQ about the product
      </h2>
      <div className="flex flex-col gap-3">
        <AccordionItem heading="How does Minoxidil work?" size="sm">
          <p className="text-body-02 text-text-neutral-secondary">
            Minoxidil is a topical treatment used to help stimulate hair growth in people with hereditary hair loss. It may help regrow hair, slow further loss, or both.
          </p>
        </AccordionItem>
        <AccordionItem heading="How long does it take to see results?" size="sm">
          <p className="text-body-02 text-text-neutral-secondary">
            Results usually take time. Many people need several months of consistent use before noticing visible changes, and some sources note it can take about 6 to 12 months to fully judge results.
          </p>
        </AccordionItem>
        <AccordionItem heading="How often should I use it?" size="sm">
          <p className="text-body-02 text-text-neutral-secondary">
            For common topical solution directions, Minoxidil is typically applied directly to the scalp twice a day. Using more than directed does not make it work faster or better.
          </p>
        </AccordionItem>
        <AccordionItem heading="Do I need to keep using it?" size="sm">
          <p className="text-body-02 text-text-neutral-secondary">
            Yes. Continued use is usually needed to maintain results. If treatment is stopped, hair loss may begin again over time.
          </p>
        </AccordionItem>
        <AccordionItem heading="Are there any common side effects?" size="sm">
          <p className="text-body-02 text-text-neutral-secondary">
            Some people may experience scalp irritation, itching, or unwanted hair growth on nearby skin. If side effects feel significant or unusual, the next step should be to check with a healthcare provider.
          </p>
        </AccordionItem>
      </div>
    </section>
  );
}


type RelatedProductCardProps = {
  slug: PrototypeProduct["slug"];
  heading: PrototypeProduct["heading"];
  description: PrototypeProduct["shortDescription"];
  finalPrice: PrototypeProduct["finalPrice"];
  originalPrice?: PrototypeProduct["originalPrice"];
  imageSrc: PrototypeProduct["imageSrc"];
  imageAlt: PrototypeProduct["imageAlt"];
  badgeLabel?: PrototypeProduct["badgeLabel"];
  badgeType?: PrototypeProduct["badgeType"];
  onAddToCart?: () => void;
  onLearnMore?: (slug: string) => void;
};

function RelatedProductCard({
  slug,
  heading,
  description,
  finalPrice,
  originalPrice,
  imageSrc,
  imageAlt,
  badgeLabel,
  badgeType,
  onAddToCart,
  onLearnMore,
}: RelatedProductCardProps) {
  const handleLearnMoreClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    onLearnMore?.(slug);
  };

  const handleAddToCartClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    onAddToCart?.();
  };

  return (
    <Card
      size="md"
      background="transparent"
      showHeading={false}
      className="w-[304px] shrink-0 cursor-pointer !rounded-[20px] !gap-5"
      onClick={() => onLearnMore?.(slug)}
    >
      <div className="flex flex-col gap-5">
        <div className="relative aspect-[280/200] overflow-hidden rounded-lg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageSrc}
            alt={imageAlt}
            className="h-full w-full object-cover"
          />
          {badgeLabel ? (
            <Badge
              type={badgeType ?? "neutral"}
              size="md"
              label={badgeLabel}
              showIcon={false}
              className="absolute left-2 top-2"
            />
          ) : null}
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-0.5">
            <h3 className="text-heading-06 font-medium text-text-neutral-default">
              {heading}
            </h3>
            <div className="flex items-center gap-1 whitespace-nowrap text-body-02">
              <span className="font-medium text-text-neutral-default">
                ${finalPrice}
              </span>
              {originalPrice ? (
                <span className="text-text-neutral-secondary line-through">
                  ${originalPrice}
                </span>
              ) : null}
            </div>
          </div>

          <p className="h-8 text-body-02 text-text-neutral-secondary">
            {description}
          </p>

          <div className="flex gap-2">
            <Button
              size="sm"
              variant="neutral"
              appearance="outlined"
              className="flex-1"
              onClick={handleLearnMoreClick}
            >
              Learn More
            </Button>
            <Button
              size="sm"
              variant="primary"
              appearance="filled"
              className="flex-1"
              onClick={handleAddToCartClick}
            >
              Add To Cart
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}

function MoreProductsSection({
  relatedProducts,
  onAddToCart,
  onLearnMore,
}: {
  relatedProducts: PrototypeProduct[];
  onAddToCart: () => void;
  onLearnMore: (slug: string) => void;
}) {
  return (
    <section className="flex flex-col gap-8 rounded-[32px] px-5 py-12">
      <h2 className="text-heading-06 font-medium text-text-neutral-default">
        More products for your hair
      </h2>
      <div className="-mx-5 flex gap-3 overflow-x-auto px-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {relatedProducts.map((product) => (
          <RelatedProductCard
            key={product.slug}
            slug={product.slug}
            heading={product.heading}
            description={product.shortDescription}
            finalPrice={product.finalPrice}
            originalPrice={product.originalPrice}
            imageSrc={product.imageSrc}
            imageAlt={product.imageAlt}
            badgeLabel={product.badgeLabel}
            badgeType={product.badgeType}
            onAddToCart={onAddToCart}
            onLearnMore={onLearnMore}
          />
        ))}
      </div>
    </section>
  );
}

function Bone({ className }: { className?: string }) {
  return (
    <div
      className={`animate-pulse rounded-sm bg-background-surface-neutral-default ${className ?? ""}`}
    />
  );
}

function ProductDetailedSkeleton() {
  return (
    <div className="relative flex min-h-full flex-col bg-background-default-default">
      <TopBar state="loading" />

      <section className="flex flex-col gap-10 overflow-hidden rounded-[32px] bg-background-default-default px-5 pb-12">
        {/* Hero image */}
        <Bone className="mt-4 h-[260px] w-full rounded-xl" />

        {/* Title + price */}
        <div className="flex flex-col gap-3">
          <Bone className="h-7 w-3/4" />
          <Bone className="h-5 w-1/2" />
          <Bone className="h-8 w-1/3" />
        </div>

        {/* Strength selector */}
        <div className="flex gap-2">
          <Bone className="h-10 w-28 rounded-max" />
          <Bone className="h-10 w-28 rounded-max" />
        </div>

        {/* Dosage options */}
        <div className="flex flex-col gap-2">
          <Bone className="h-14 w-full rounded-md" />
          <Bone className="h-14 w-full rounded-md" />
          <Bone className="h-14 w-full rounded-md" />
        </div>

        {/* Buy button */}
        <Bone className="h-12 w-full rounded-max" />
      </section>
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

export default function ProductDetailedMobilePage({
  product,
  relatedProducts = [],
}: ProductDetailedMobilePageProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [cartCount, setCartCount] = useState(getPrototypeCartCount());
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuOffsetTop, setMenuOffsetTop] = useState(0);
  const [menuViewportHeight, setMenuViewportHeight] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);
  const [topBarHidden, setTopBarHidden] = useState(false);
  const [isBottomBarVisible, setIsBottomBarVisible] = useState(false);
  const [hasActivatedBottomBar, setHasActivatedBottomBar] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const lastScrollYRef = useRef(0);
  const bottomBarVisibleRef = useRef(false);
  const suppressScrollRef = useRef(false);
  const selectableProducts =
    product.slug === "minoxidil-5-topical"
      ? [product, MINOXIDIL_TWO_PERCENT_PRODUCT]
      : [product, ...relatedProducts].slice(0, 2);
  const [selectedProductSlug, setSelectedProductSlug] = useState(
    selectableProducts[0]?.slug ?? product.slug,
  );
  const [selectedDosage, setSelectedDosage] =
    useState<keyof typeof DOSAGE_MULTIPLIERS>("one-month");
  const selectedProduct =
    selectableProducts.find((item) => item.slug === selectedProductSlug) ??
    product;
  const displayPrice = formatPrice(
    selectedProduct.finalPrice,
    DOSAGE_MULTIPLIERS[selectedDosage],
    DOSAGE_DISCOUNTS[selectedDosage],
  );
  const subtotalPrice = calculateSubtotal(
    selectedProduct.finalPrice,
    DOSAGE_MULTIPLIERS[selectedDosage],
  );
  const discountAmount = (
    Number(subtotalPrice) - Number(displayPrice)
  ).toFixed(2);
  const showStrength = product.slug === "minoxidil-5-topical";
  const baseDosageOptions =
    product.slug === "scalp-shampoo" ? SHAMPOO_DOSAGE_OPTIONS : DOSAGE_OPTIONS;
  const dosageOptions = baseDosageOptions.map((option) => ({
    ...option,
    description: `$${formatPrice(
      selectedProduct.finalPrice,
      DOSAGE_MULTIPLIERS[option.value as keyof typeof DOSAGE_MULTIPLIERS],
      DOSAGE_DISCOUNTS[option.value as keyof typeof DOSAGE_DISCOUNTS],
    )}`,
  }));
  const selectedDosageLabel =
    dosageOptions.find((option) => option.value === selectedDosage)?.label ??
    dosageOptions[0]?.label ??
    selectedProduct.shortDescription;
  const cartSavingsText =
    selectedDosage !== "three-months"
      ? "Save 17% on 3 month delivery"
      : undefined;
  const syncCartWithSelection = () => {
    setPrototypeCartItem({
      productSlug: selectedProduct.slug,
      heading: selectedProduct.heading,
      description: selectedDosageLabel,
      dosageLabel: selectedDosageLabel,
      subtotalPrice,
      discountAmount,
      finalPrice: displayPrice,
      imageSrc: selectedProduct.imageSrc,
      imageAlt: selectedProduct.imageAlt,
      quantity: 1,
      savingsText: cartSavingsText,
    });
  };
  const handleOpenProduct = (slug: string) => {
    router.push(`/prototype/product-detailed/${slug}`);
  };
  const handleCheckout = () => {
    syncCartWithSelection();
    setCartCount(getPrototypeCartCount());
    router.push("/prototype/checkout");
  };
  const handleAddToCart = () => {
    syncCartWithSelection();
    setCartCount(getPrototypeCartCount());
    setTopBarHidden(false);
    setIsBottomBarVisible(true);
    setHasActivatedBottomBar(true);
    bottomBarVisibleRef.current = true;
  };
  const showBottomBar = () => {
    setHasActivatedBottomBar(true);
    setIsBottomBarVisible(true);
    bottomBarVisibleRef.current = true;
    suppressScrollRef.current = true;
    setTimeout(() => { suppressScrollRef.current = false; }, 400);
  };
  const handleSelectProduct = (slug: string) => {
    setSelectedProductSlug(slug);
    showBottomBar();
  };
  const handleSelectDosage = (dosage: keyof typeof DOSAGE_MULTIPLIERS) => {
    setSelectedDosage(dosage);
    showBottomBar();
  };
  const handleOpenMenu = () => {
    const scrollEl = getScrollableAncestor(wrapperRef.current);
    const { top, height } = getScrollMetrics(scrollEl);

    setMenuOffsetTop(top);
    setMenuViewportHeight(height);

    setIsMenuOpen(true);
  };

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const scrollEl = getScrollableAncestor(wrapper);
    const getScrollY = () => {
      if (scrollEl === window) {
        return window.scrollY;
      }

      const elementScrollTop = (scrollEl as HTMLElement).scrollTop;
      const wrapperOffset = Math.max(0, -wrapper.getBoundingClientRect().top);
      return Math.max(elementScrollTop, wrapperOffset);
    };

    const syncScrollState = () => {
      const currentScrollY = getScrollY();

      if (suppressScrollRef.current) {
        lastScrollYRef.current = currentScrollY;
        return;
      }

      if (!hasActivatedBottomBar) {
        lastScrollYRef.current = currentScrollY;
        return;
      }

      const delta = currentScrollY - lastScrollYRef.current;
      const scrollingDown = delta > 6;
      const scrollingUp = delta < -6;
      const nextVisible = scrollingDown ? false : scrollingUp || currentScrollY <= 4;

      if (scrollingDown) {
        setIsBottomBarVisible(false);
        bottomBarVisibleRef.current = false;
      } else if (nextVisible) {
        setIsBottomBarVisible(true);
        bottomBarVisibleRef.current = true;
      }

      if (cartCount > 0) {
        setTopBarHidden(false);
      } else {
        setTopBarHidden(scrollingDown);
      }

      lastScrollYRef.current = currentScrollY;
    };
    lastScrollYRef.current = getScrollY();

    let frameId = 0;
    const watchScroll = () => {
      syncScrollState();
      frameId = window.requestAnimationFrame(watchScroll);
    };

    frameId = window.requestAnimationFrame(watchScroll);

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [cartCount, hasActivatedBottomBar, isLoading]);

  if (isLoading) return <ProductDetailedSkeleton />;

  return (
    <div
      ref={wrapperRef}
      className="relative flex min-h-full flex-col bg-background-default-default pb-36"
    >
      <div
        className={`sticky top-0 z-10 bg-background-default-default transition-transform duration-300 ${
          topBarHidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <TopBar
          color="primary"
          showButton={cartCount > 0 && !isMenuOpen}
          buttonLabel={`Cart(${cartCount})`}
          onButtonClick={handleCheckout}
          showIconButton
          iconButtonAriaLabel="Menu"
          onIconButtonClick={handleOpenMenu}
        />
      </div>

      {/* Section 0 — Product details */}
      <section className="flex flex-col gap-10 overflow-hidden rounded-[32px] bg-background-default-default px-5 pb-12">
        <ProductHero product={selectedProduct} displayPrice={displayPrice} />
        <ProductConfigurator
          selectedProductSlug={selectedProduct.slug}
          selectedDosage={selectedDosage}
          dosageOptions={dosageOptions}
          selectableProducts={selectableProducts}
          showStrength={showStrength}
          cartCount={cartCount}
          onBuyNow={handleCheckout}
          onAddToCart={handleAddToCart}
          onSelectProduct={handleSelectProduct}
          onSelectDosage={handleSelectDosage}
        />
        <ProductInfoAccordions />
        <AddOnCard onAdd={handleAddToCart} />
      </section>

      {/* Section 1 — Highlight / Benefits */}
      <HighlightSection />

      {/* Section 2 — FAQ */}
      <ProductFaq />

      {/* Section 3 — More Products */}
      <MoreProductsSection
        relatedProducts={relatedProducts}
        onAddToCart={handleAddToCart}
        onLearnMore={handleOpenProduct}
      />


      {/* Section 4 — Footer */}
      <section className="bg-background-default-invert px-5 py-12">
        <Footer variant="section" />
      </section>

      {/* Sticky bottom bar */}
      <div
        className={`sticky bottom-0 z-10 mt-auto bg-background-default-default transition-transform duration-300 ${
          isBottomBarVisible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <CardContent
          type="product-detailed"
          heading={selectedProduct.heading}
          description={selectedDosageLabel}
          imageSrc={selectedProduct.cardImageSrc}
          imageAlt={selectedProduct.imageAlt}
          finalPrice={displayPrice}
          originalPrice={selectedDosage === "three-months" ? subtotalPrice : selectedProduct.originalPrice}
          quantity={cartCount}
          onPrimaryClick={handleAddToCart}
        />
      </div>

      {isMenuOpen && (
        <div
          className="absolute left-0 right-0 z-20 flex items-start justify-center overflow-y-auto pb-5"
          style={{ top: menuOffsetTop, height: menuViewportHeight }}
        >
          <Menu className="max-w-none" onClose={() => setIsMenuOpen(false)} />
        </div>
      )}
    </div>
  );
}
