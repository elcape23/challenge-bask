"use client";

import { useMemo } from "react";
import { useRouter } from "next/navigation";
import { getPrototypeCartItem } from "@/data/prototypeCart";
import { getPrototypeProductBySlug } from "@/data/prototypeProducts";
import TopBar from "@/components/prototype/globals/TopBar";
import CardContent from "@/components/prototype/globals/CardContent";
import ButtonContainer from "@/components/prototype/globals/ButtonContainer";
import usePrototypePageReady from "@/components/prototype/usePrototypePageReady";

const ORDER_ID = "ORD-483921";

function SummaryRow({
  label,
  value,
  isTotal,
}: {
  label: string;
  value: string;
  isTotal?: boolean;
}) {
  return (
    <div className="flex items-center justify-between">
      <p
        className={
          isTotal
            ? "text-body-01 font-medium text-text-neutral-default"
            : "text-body-01 text-text-neutral-secondary"
        }
      >
        {label}
      </p>
      <p
        className={
          isTotal
            ? "text-body-01 font-medium text-text-neutral-default"
            : "text-body-01 text-text-neutral-secondary"
        }
      >
        {value}
      </p>
    </div>
  );
}

function Bone({ className }: { className?: string }) {
  return (
    <div
      className={`animate-pulse rounded-sm bg-background-surface-neutral-default ${className ?? ""}`}
    />
  );
}

function OrderConfirmationSkeleton() {
  return (
    <div className="flex flex-col min-h-full">
      <TopBar />

      <div className="flex flex-1 flex-col pb-5">
        {/* Hero image */}
        <div className="px-10 pt-5">
          <Bone className="w-full aspect-[3/2] rounded-[20px]" />
        </div>

        {/* Heading */}
        <div className="flex justify-center px-5 pt-5 pb-2">
          <Bone className="h-8 w-48" />
        </div>

        <div className="flex flex-col px-5">
          {/* Items section */}
          <div className="flex flex-col gap-3 pt-5">
            <Bone className="h-4 w-12" />
            <div className="flex gap-3">
              <Bone className="size-[84px] shrink-0 rounded-sm" />
              <div className="flex flex-1 flex-col gap-2 py-1">
                <Bone className="h-4 w-3/4" />
                <Bone className="h-3 w-1/3" />
              </div>
            </div>
          </div>

          {/* Summary rows */}
          <div className="flex flex-col gap-3 pt-5">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex justify-between">
                <Bone className="h-4 w-28" />
                <Bone className="h-4 w-16" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="sticky bottom-0 bg-background-default-default p-5">
        <Bone className="h-12 w-full rounded-max" />
      </div>
    </div>
  );
}

export default function OrderConfirmationMobilePage() {
  const router = useRouter();

  const cartItem =
    getPrototypeCartItem() ??
    (() => {
      const fallback = getPrototypeProductBySlug("minoxidil-5-topical");
      if (!fallback) return null;
      return {
        productSlug: fallback.slug,
        heading: fallback.heading,
        description: fallback.shortDescription,
        subtotalPrice: fallback.finalPrice,
        finalPrice: fallback.finalPrice,
        imageSrc: fallback.imageSrc,
        imageAlt: fallback.imageAlt,
        quantity: 1,
      };
    })();
  const loadingSources = useMemo(
    () => [
      "/images/prototype/order-placed.webp",
      cartItem?.imageSrc ?? "",
    ],
    [cartItem?.imageSrc],
  );
  const isReady = usePrototypePageReady(loadingSources);

  if (!isReady) return <OrderConfirmationSkeleton />;

  const quantity = cartItem?.quantity ?? 1;
  const unitPrice = Number(cartItem?.finalPrice ?? 0);
  const subtotal = unitPrice * quantity;
  const taxes = +(subtotal * 0.09).toFixed(2);
  const total = subtotal + taxes;

  return (
    <div className="prototype-dissolve-in flex min-h-full flex-col">
      <TopBar />

      <div className="flex flex-1 flex-col pb-5">
        {/* Hero image */}
        <div className="px-10 pt-5">
          <div className="w-full aspect-[3/2] overflow-hidden rounded-[20px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/prototype/order-placed.webp"
              alt="Order placed"
              className="size-full object-cover object-center"
            />
          </div>
        </div>

        {/* Heading */}
        <div className="flex flex-col gap-1 px-5 pt-5 pb-2">
          <h1 className="text-heading-04 font-medium text-text-neutral-default text-center">
            Your order was placed.
          </h1>
          <p className="text-center text-body-01 text-text-neutral-secondary">
            Estimated delivery: 28th - 30th May
          </p>
        </div>

        <div className="flex flex-col px-5">
          {/* Items section */}
          <div className="flex flex-col pt-5">
            <p className="text-body-01 font-medium text-text-neutral-default pb-1">
              Items
            </p>
            {cartItem && (
              <CardContent
                type="order-confirmation"
                heading={cartItem.heading}
                imageSrc={cartItem.imageSrc}
                imageAlt={cartItem.imageAlt}
                finalPrice={(unitPrice * quantity).toFixed(2)}
                quantity={quantity}
              />
            )}
          </div>

          {/* Order summary section */}
          <div className="  py-5 ">
            <div className="py-3 flex flex-col border-b border-border-neutral-default gap-1">
              <SummaryRow label="Order Confirmation" value={ORDER_ID} />
              <SummaryRow label="Subtotal" value={`$${subtotal.toFixed(2)}`} />
              <SummaryRow label="Shipping" value="Free" />
              <SummaryRow label="Taxes" value={`$${taxes.toFixed(2)}`} />
              <SummaryRow
                label="Total"
                value={`$${total.toFixed(2)}`}
                isTotal
              />
            </div>
          </div>
        </div>
      </div>

      <div className="sticky bottom-0">
        <ButtonContainer
          primaryLabel="Order History"
          secondaryLabel="Back Home"
          showSecondaryButton
          onPrimaryClick={() => router.push("/prototype")}
          onSecondaryClick={() => router.push("/prototype")}
        />
      </div>
    </div>
  );
}
