"use client";

import type { PrototypeCartItem } from "@/data/prototypeCart";
import { useState } from "react";
import {
  getPrototypeCartItem,
  setPrototypeCartItem,
} from "@/data/prototypeCart";
import { getPrototypeProductBySlug } from "@/data/prototypeProducts";
import Button from "@/components/ui/Button";
import { AccordionItem } from "@/components/ui/Accordion";
import CardContent from "@/components/prototype/globals/CardContent";
import ListItem from "@/components/prototype/globals/ListItem";
import TopBar from "@/components/prototype/globals/TopBar";
import InputGroup from "@/components/ui/InputGroup";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Checkbox from "@/components/ui/Checkbox";

const COUNTRY_OPTIONS = [
  { value: "us", label: "United States of America" },
  { value: "ca", label: "Canada" },
] as const;

const STATE_OPTIONS = [
  { value: "ca", label: "California" },
  { value: "ny", label: "New York" },
  { value: "tx", label: "Texas" },
] as const;

function AccountSummaryContent() {
  return (
    <p className="text-body-01 text-text-neutral-default">
      arqcledesma91@gmail.com
    </p>
  );
}

function ShippingInformationContent() {
  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-2 gap-3">
        <Input size="md" placeholder="First Name*" />
        <Input size="md" placeholder="Last Name*" />
      </div>

      <Input size="md" placeholder="Address*" />
      <Input size="md" placeholder="Apr / Suite / Unit" />
      <Input size="md" placeholder="City*" />

      <Select
        size="md"
        placeholder="United States of America"
        options={[...COUNTRY_OPTIONS]}
        defaultValue="us"
      />

      <div className="grid grid-cols-2 gap-3">
        <Select size="md" placeholder="State" options={[...STATE_OPTIONS]} />
        <Input size="md" placeholder="Zip code*" />
      </div>

      <Input size="md" placeholder="Phone number*" />

      <Checkbox
        size="sm"
        label="By signing up via text, you agree to receive recurring automated promotional and personalized marketing messages (e.g. cart reminders, order updates, exclusive health and science content, and member-only offers) from Sena at the cell number provided. Consent is not a condition of any purchase. Reply STOP to cancel. Email care@senacom for help. Msg frequency varies. Msg and data rates may apply. See our Privacy Policy and Terms of Service."
        className="items-start h-auto"
      />

      <Button
        size="lg"
        variant="primary"
        appearance="filled"
        disabled
        className="mt-2 w-full"
      >
        Save and Continue
      </Button>
    </div>
  );
}

function formatCurrency(value: number) {
  return value.toFixed(2);
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between text-body-02 text-text-neutral-default">
      <p>{label}</p>
      <p>{value}</p>
    </div>
  );
}

export default function CheckoutMobilePage() {
  const initialCartItem: PrototypeCartItem | null =
    getPrototypeCartItem() ??
    (() => {
      const fallbackProduct = getPrototypeProductBySlug("minoxidil-5-topical");
      if (!fallbackProduct) return null;

      return {
        productSlug: fallbackProduct.slug,
        heading: fallbackProduct.heading,
        description: fallbackProduct.shortDescription,
        dosageLabel: "30 pills every month",
        subtotalPrice: fallbackProduct.finalPrice,
        discountAmount: "0.00",
        finalPrice: fallbackProduct.finalPrice,
        imageSrc: fallbackProduct.imageSrc,
        imageAlt: fallbackProduct.imageAlt,
        quantity: 1,
        savingsText: undefined,
      };
    })();
  const [cartItem, setCartItem] = useState(initialCartItem);
  const [promoCode, setPromoCode] = useState("");
  const [promoDiscountRate, setPromoDiscountRate] = useState(0);
  const [promoFeedback, setPromoFeedback] = useState("");
  const [promoState, setPromoState] = useState<"default" | "success">(
    "default",
  );
  const quantity = cartItem?.quantity ?? 1;
  const subtotal = Number(cartItem?.subtotalPrice ?? 0) * quantity;
  const discount = Number(cartItem?.discountAmount ?? 0) * quantity;
  const promoDiscount = subtotal * promoDiscountRate;
  const shipping = 0;
  const taxes = 0;
  const total = subtotal - discount - promoDiscount + shipping + taxes;
  const lineItemTotal = Number(cartItem?.finalPrice ?? 0) * quantity;
  const handleQuantityChange = (nextQuantity: number) => {
    if (!cartItem) return;

    const nextCartItem = {
      ...cartItem,
      quantity: nextQuantity,
    };

    setCartItem(nextCartItem);
    setPrototypeCartItem(nextCartItem);
  };
  const handleApplyPromoCode = () => {
    if (promoCode.trim().toUpperCase() === "25OFF") {
      setPromoDiscountRate(0.25);
      setPromoState("success");
      setPromoFeedback("Code applied successfully");
      return;
    }

    setPromoDiscountRate(0);
    setPromoState("default");
    setPromoFeedback("");
  };

  return (
    <div className="relative flex min-h-full flex-col bg-background-default-default">
      <TopBar color="primary" logoOnly />

      <div className="flex flex-col px-5 pb-10">
        {/* Cart Summary */}
        <div className="py-5">
          <AccordionItem
            heading={`Cart Summary (${cartItem?.quantity ?? 0})`}
            size="md"
            defaultOpen
          >
            {cartItem ? (
              <div className="flex flex-col">
                <CardContent
                  type="cart"
                  heading={cartItem.heading}
                  description={cartItem.dosageLabel ?? cartItem.description}
                  finalPrice={formatCurrency(lineItemTotal)}
                  imageSrc={cartItem.imageSrc}
                  imageAlt={cartItem.imageAlt}
                  quantity={quantity}
                  savingsText={cartItem.savingsText}
                  onQuantityChange={handleQuantityChange}
                />

                <div className="flex flex-col gap-2 border-b border-border-neutral-default py-3">
                  <p className="text-body-01 font-medium text-text-neutral-default">
                    Promo Code
                  </p>
                  <InputGroup
                    size="md"
                    state={promoState}
                    placeholder="Enter Promo Code"
                    feedback={promoFeedback}
                    value={promoCode}
                    onChange={(event) => setPromoCode(event.target.value)}
                    onButtonClick={handleApplyPromoCode}
                    className="w-full"
                  />
                </div>

                <div className="flex flex-col gap-3 border-b border-border-neutral-default py-3">
                  <SummaryRow
                    label="Subtotal"
                    value={`$${formatCurrency(subtotal)}`}
                  />
                  <SummaryRow label="Shipping" value="Free" />
                  {discount > 0 ? (
                    <SummaryRow
                      label="Discount"
                      value={`-$${formatCurrency(discount)}`}
                    />
                  ) : null}
                  {promoDiscount > 0 ? (
                    <SummaryRow
                      label="Promo Code"
                      value={`-$${formatCurrency(promoDiscount)}`}
                    />
                  ) : null}
                  <SummaryRow
                    label="Taxes"
                    value={`$${formatCurrency(taxes)}`}
                  />
                </div>

                <div className="flex flex-col gap-4 py-3">
                  <div className="flex items-center justify-between text-body-01 font-medium text-text-neutral-default">
                    <p>Total</p>
                    <p>${formatCurrency(total)}</p>
                  </div>
                  <p className="text-body-02 text-text-neutral-secondary">
                    Final tax and shipping is calculated after shipping step is
                    complete. Recurring subtotal is $00.00 per month
                  </p>
                </div>
              </div>
            ) : null}
          </AccordionItem>
        </div>

        {/* Step 1 - Account (completed) */}
        <ListItem subheading="1 of 3" heading="Account" state="default">
          <AccountSummaryContent />
        </ListItem>

        {/* Step 2 - Shipping Information (active) */}
        <ListItem subheading="2 of 3" heading="Shipping Information" state="default">
          <ShippingInformationContent />
        </ListItem>

        {/* Step 3 - Payment (inactive) */}
        <ListItem subheading="3 of 3" heading="Payment" state="disabled" />
      </div>
    </div>
  );
}
