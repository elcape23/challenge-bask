"use client";

import { useEffect, useRef, useState } from "react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { AccordionItem } from "@/components/ui/Accordion";
import Icon from "@/components/ui/Icon";
import Select from "@/components/ui/Select";
import RadioButton from "@/components/ui/RadioButton";
import Card from "@/components/ui/Card";
import Footer from "@/components/prototype/globals/Footer";
import InfoCardContent from "@/components/prototype/globals/InfoCardContent";
import Menu from "@/components/prototype/globals/Menu";
import TopBar from "@/components/prototype/globals/TopBar";

const PRODUCT_ASSETS = {
  packshot: "/images/prototype/minoxidil-5-transparent.webp",
  background: "/images/prototype/carousel-background.png",
  biotin: "/images/prototype/biotin-gummies.webp",
  shampoo: "/images/prototype/scalp-shampoo.webp",
  finasteride: "/images/prototype/finasteride-minoxidil.webp",
} as const;

const DOSAGE_OPTIONS = [
  { value: "one-month", label: "30 pills every month" },
  { value: "two-months", label: "60 pills every two months" },
  { value: "three-months", label: "90 pills every three months" },
] as const;

type RelatedProductCardProps = {
  heading: string;
  description: string;
  finalPrice: string;
  originalPrice?: string;
  imageSrc: string;
  imageAlt: string;
  badgeLabel?: string;
};

function ProductHero() {
  return (
    <>
      {/* Product image — full-width, square */}
      <div className="-mx-5 aspect-square overflow-hidden rounded-xl bg-background-surface-neutral-default">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={PRODUCT_ASSETS.packshot}
          alt="Minoxidil 5% Topical bottle"
          className="h-full w-full object-contain object-center"
        />
      </div>

      {/* Product info */}
      <div className="flex flex-col gap-4">
        <Badge
          type="neutral"
          size="sm"
          label="Bestseller"
          showIcon={false}
          className="self-start"
        />
        <div className="flex flex-col gap-1">
          <h1 className="text-heading-06 font-medium text-text-neutral-default">
            Minoxidil 5% Topical
          </h1>
          <p className="text-body-01 font-medium text-text-neutral-default">
            $14.99
          </p>
        </div>
        <p className="text-body-01 text-text-neutral-secondary">
          A stronger topical formula for patients seeking a more intensive
          regrowth plan. Built for daily scalp application, it fits naturally
          into a consistent treatment routine focused on long-term results.
        </p>
      </div>
    </>
  );
}

function ProductConfigurator() {
  const [strength, setStrength] = useState<"5" | "2">("5");

  return (
    <>
      {/* Strength */}
      <div className="flex flex-col gap-2">
        <h2 className="text-heading-06 font-medium text-text-neutral-default">
          Strength
        </h2>
        <div className="flex gap-2">
          <RadioButton
            name="strength"
            heading="Minoxidil 5% Topical"
            description="Higher-strength topical"
            checked={strength === "5"}
            onChange={() => setStrength("5")}
          />
          <RadioButton
            name="strength"
            heading="Minoxidil 2% Topical"
            description="Gentler starting strength"
            checked={strength === "2"}
            onChange={() => setStrength("2")}
          />
        </div>
      </div>

      {/* Dosage */}
      <div className="flex flex-col gap-2">
        <h2 className="text-heading-06 font-medium text-text-neutral-default">
          Dosage
        </h2>
        <Select
          size="sm"
          placeholder="30 pills every month"
          options={[...DOSAGE_OPTIONS]}
          defaultValue="one-month"
        />
      </div>

      {/* Buy Now + Guarantee */}
      <div className="flex flex-col gap-2">
        <Button
          size="lg"
          variant="primary"
          appearance="filled"
          className="w-full"
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

function AddOnCard() {
  return (
    <div className="flex gap-4 rounded-2xl bg-background-surface-neutral-default p-5">
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
          >
            Add
          </Button>
        </div>
      </div>
    </div>
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
        <AccordionItem heading="How does Minoxidil work?" size="sm" />
        <AccordionItem
          heading="How long does it take to see results?"
          size="sm"
        />
        <AccordionItem heading="How often should I use it?" size="sm" />
        <AccordionItem heading="Do I need to keep using it?" size="sm" />
        <AccordionItem heading="Are there any common side effects?" size="sm" />
      </div>
    </section>
  );
}

function RelatedProductCard({
  heading,
  description,
  finalPrice,
  originalPrice,
  imageSrc,
  imageAlt,
  badgeLabel,
}: RelatedProductCardProps) {
  return (
    <Card
      size="md"
      background="transparent"
      showHeading={false}
      className="w-[304px] shrink-0 !rounded-[20px] !gap-5"
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
              type="success"
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
            >
              Learn More
            </Button>
            <Button
              size="sm"
              variant="primary"
              appearance="filled"
              className="flex-1"
            >
              Add To Cart
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}

function MoreProductsSection() {
  return (
    <section className="flex flex-col gap-8 rounded-[32px] px-5 py-12">
      <h2 className="text-heading-06 font-medium text-text-neutral-default">
        More products for your hair
      </h2>
      <div className="-mx-5 flex gap-3 overflow-x-auto px-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <RelatedProductCard
          heading="Biotin Gummies"
          description="Daily nutritional support for hair wellness."
          finalPrice="13.99"
          originalPrice="19.99"
          imageSrc={PRODUCT_ASSETS.biotin}
          imageAlt="Biotin Gummies"
          badgeLabel="30% off"
        />
        <RelatedProductCard
          heading="Scalp Shampoo"
          description="Helps keep the scalp clean and comfortable as part of the routine."
          finalPrice="7.99"
          imageSrc={PRODUCT_ASSETS.shampoo}
          imageAlt="Scalp Shampoo"
        />
      </div>
    </section>
  );
}

export default function ProductDetailedMobilePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [topBarHidden, setTopBarHidden] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    let scrollEl: HTMLElement | Window = window;
    let parent = wrapper.parentElement;
    while (parent) {
      const overflow = window.getComputedStyle(parent).overflowY;
      if (overflow === "auto" || overflow === "scroll") {
        scrollEl = parent;
        break;
      }
      parent = parent.parentElement;
    }

    const getScrollY = () =>
      scrollEl === window
        ? window.scrollY
        : (scrollEl as HTMLElement).scrollTop;

    let lastScrollY = getScrollY();

    const handleScroll = () => {
      const currentScrollY = getScrollY();
      setTopBarHidden(currentScrollY > lastScrollY && currentScrollY > 0);
      lastScrollY = currentScrollY;
    };

    scrollEl.addEventListener("scroll", handleScroll, { passive: true });
    return () => scrollEl.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="relative flex min-h-full flex-col bg-background-default-default"
    >
      <div
        className={`sticky top-0 z-10 bg-background-default-default transition-transform duration-300 ${
          topBarHidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <TopBar
          color="primary"
          showIconButton
          iconButtonAriaLabel="Menu"
          onIconButtonClick={() => setIsMenuOpen(true)}
        />
      </div>

      {/* Section 0 — Product details */}
      <section className="flex flex-col gap-10 overflow-hidden rounded-[32px] bg-background-default-default px-5 pb-12">
        <ProductHero />
        <ProductConfigurator />
        <ProductInfoAccordions />
        <AddOnCard />
      </section>

      {/* Section 1 — Highlight / Benefits */}
      <HighlightSection />

      {/* Section 2 — FAQ */}
      <ProductFaq />

      {/* Section 3 — More Products */}
      <MoreProductsSection />

      {/* Section 4 — Footer */}
      <section className="bg-background-default-invert px-5 py-12">
        <Footer variant="section" />
      </section>

      {isMenuOpen && (
        <div className="absolute inset-0 z-20 flex items-start justify-center pb-5">
          <Menu className="max-w-none" onClose={() => setIsMenuOpen(false)} />
        </div>
      )}
    </div>
  );
}
