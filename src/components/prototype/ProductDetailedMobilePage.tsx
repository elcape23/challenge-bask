"use client";

import { useState } from "react";
import Alert from "@/components/ui/Alert";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { AccordionItem } from "@/components/ui/Accordion";
import Icon from "@/components/ui/Icon";
import Select from "@/components/ui/Select";
import Footer from "@/components/prototype/globals/Footer";
import InfoCardContent from "@/components/prototype/globals/InfoCardContent";
import Menu from "@/components/prototype/globals/Menu";
import TopBar from "@/components/prototype/globals/TopBar";

const PRODUCT_ASSETS = {
  hero: "/images/prototype/minoxidil-5-image.webp",
  packshot: "/images/prototype/minoxidil-5-transparent.webp",
  background: "/images/prototype/hair-regrowth.webp",
  biotin: "/images/prototype/biotin-gummies.webp",
  shampoo: "/images/prototype/scalp-shampoo.webp",
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
    <section className="flex flex-col gap-3 px-5 pt-5">
      <div className="overflow-hidden rounded-xl bg-background-surface-neutral-default p-5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={PRODUCT_ASSETS.packshot}
          alt="Minoxidil 5% Topical bottle"
          className="mx-auto h-[219px] w-full max-w-[175px] object-contain object-center"
        />
      </div>

      <div className="flex flex-col gap-0.5">
        <Badge
          type="neutral"
          size="sm"
          label="Bestseller"
          showIcon={false}
          className="mb-2 self-start"
        />
        <h1 className="text-body-01 font-medium text-text-neutral-default">
          Minoxidil 5% Topical
        </h1>
        <p className="text-body-02 text-text-neutral-secondary">
          $14.99
        </p>
        <p className="pt-2 text-body-03 text-text-neutral-secondary">
          A stronger topical formula for patterns shedding a more intensive
          regrowth plan. Built for daily scalp application, it&apos;s formulated
          to help support treatment routine focused on long-term results.
        </p>
      </div>
    </section>
  );
}

function ProductConfigurator() {
  return (
    <section className="flex flex-col gap-5 px-5 pt-8">
      <div className="flex flex-col gap-3">
        <div className="flex items-center">
          <h2 className="flex-1 text-body-02 font-medium text-text-neutral-default">
            Strength
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            className="rounded-sm border border-border-neutral-default bg-background-surface-neutral-default px-3 py-2 text-left"
          >
            <span className="block text-body-03 font-medium text-text-neutral-default">
              Minoxidil 5% Topical
            </span>
            <span className="block text-body-03 text-text-neutral-secondary">
              Higher-strength topical
            </span>
          </button>
          <button
            type="button"
            className="rounded-sm border border-border-neutral-default bg-background-default-default px-3 py-2 text-left"
          >
            <span className="block text-body-03 font-medium text-text-neutral-default">
              Minoxidil 2% Topical
            </span>
            <span className="block text-body-03 text-text-neutral-secondary">
              Gentler starting strength
            </span>
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center">
          <h2 className="flex-1 text-body-02 font-medium text-text-neutral-default">
            Dosage
          </h2>
        </div>
        <Select
          size="sm"
          placeholder="30 pills every month"
          options={[...DOSAGE_OPTIONS]}
          defaultValue="one-month"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Button
          size="lg"
          variant="primary"
          appearance="filled"
          className="w-full"
        >
          Buy Now
        </Button>
        <Alert
          type="success"
          size="sm"
          showHeading={false}
          description="30% off on 6+ month purchase. Plus 10% Savings"
          showButton={false}
          icon={<Icon type="check" size="sm" className="text-icon-success-default" />}
          className="w-full"
        />
      </div>
    </section>
  );
}

function ProductInfoAccordions() {
  return (
    <section className="px-5 pt-8">
      <div className="flex flex-col">
        <AccordionItem heading="Benefits" size="sm" defaultOpen>
          <ul className="space-y-1 text-body-02 text-text-neutral-secondary">
            <li>Helps support hair regrowth</li>
            <li>May slow further hair loss</li>
            <li>Works best with consistent daily use</li>
            <li>Results usually visible after months</li>
          </ul>
        </AccordionItem>
        <AccordionItem heading="Ingredients" size="sm">
          <p className="text-body-02 text-text-neutral-secondary">
            Minoxidil 5% topical solution with supportive inactive ingredients.
          </p>
        </AccordionItem>
        <AccordionItem heading="Shipping" size="sm">
          <p className="text-body-02 text-text-neutral-secondary">
            Standard delivery timing depends on your plan and shipping address.
          </p>
        </AccordionItem>
      </div>
    </section>
  );
}

function HighlightSection() {
  return (
    <section className="relative mt-8 overflow-hidden px-5 py-12">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={PRODUCT_ASSETS.background}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-background-fill-neutral-muted" />

      <div className="relative flex flex-col gap-8">
        <div className="max-w-[220px]">
          <h2 className="text-heading-05 font-medium text-text-neutral-invert">
            Feel the difference of a truly healthy gut.
          </h2>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-1">
          <div className="w-[300px] shrink-0 rounded-xl bg-background-fill-neutral-muted p-7 backdrop-blur-[10px]">
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
            />
          </div>
          <div className="w-[300px] shrink-0 rounded-xl bg-background-fill-neutral-muted p-7 backdrop-blur-[10px]">
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
            />
          </div>
          <div className="w-[300px] shrink-0 rounded-xl bg-background-fill-neutral-muted p-7 backdrop-blur-[10px]">
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
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductFaq() {
  return (
    <section className="px-5 py-12">
      <div className="flex flex-col gap-3">
        <h2 className="text-heading-06 font-medium text-text-neutral-default">
          FAQ about the product
        </h2>
        <div className="flex flex-col">
          <AccordionItem heading="How does Minoxidil work?" size="sm" />
          <AccordionItem
            heading="How long does it take to see results?"
            size="sm"
          />
          <AccordionItem
            heading="How often should I use it?"
            size="sm"
          />
          <AccordionItem heading="Do I need to keep using it?" size="sm" />
          <AccordionItem
            heading="Are there any common side effects?"
            size="sm"
          />
        </div>
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
    <article className="w-[304px] shrink-0 rounded-xl bg-background-surface-neutral-default p-3">
      <div className="flex flex-col gap-5">
        <div className="relative aspect-[280/200] overflow-hidden rounded-sm bg-background-default-default p-2">
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
            <div className="flex items-center gap-1 text-body-02 whitespace-nowrap">
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

          <p className="text-body-02 text-text-neutral-secondary">
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
    </article>
  );
}

function MoreProductsSection() {
  return (
    <section className="px-5 py-12">
      <div className="flex flex-col gap-8">
        <h2 className="text-heading-06 font-medium text-text-neutral-default">
          More products for your hair
        </h2>
        <div className="flex gap-3 overflow-x-auto pb-1">
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
      </div>
    </section>
  );
}

export default function ProductDetailedMobilePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative flex min-h-full flex-col bg-background-default-default">
      <div className="sticky top-0 z-10 bg-background-default-default">
        <TopBar
          color="primary"
          showIconButton
          iconType="chevron-left"
          iconButtonAriaLabel="Back"
        />
      </div>

      <ProductHero />
      <ProductConfigurator />
      <ProductInfoAccordions />
      <HighlightSection />
      <ProductFaq />
      <MoreProductsSection />

      <section className="bg-background-default-invert px-5 py-12">
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
