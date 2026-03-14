"use client";

import { useRouter } from "next/navigation";
import { getPrototypeCartItem } from "@/data/prototypeCart";
import { getPrototypeProductBySlug } from "@/data/prototypeProducts";
import TopBar from "@/components/prototype/globals/TopBar";
import CardContent from "@/components/prototype/globals/CardContent";
import ButtonContainer from "@/components/prototype/globals/ButtonContainer";

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

  const quantity = cartItem?.quantity ?? 1;
  const unitPrice = Number(cartItem?.finalPrice ?? 0);
  const subtotal = unitPrice * quantity;
  const taxes = +(subtotal * 0.09).toFixed(2);
  const total = subtotal + taxes;

  return (
    <div className="flex flex-col min-h-full">
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
        <div className="px-5 pt-5 pb-2">
          <h1 className="text-heading-04 font-medium text-text-neutral-default text-center">
            Your order was placed.
          </h1>
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
