"use client";

import type { PrototypeCartItem } from "@/data/prototypeCart";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
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

type ShippingAddress = {
  firstName: string;
  lastName: string;
  address: string;
  apartment: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  phoneNumber: string;
};

function OrDivider() {
  return (
    <div className="flex items-center gap-1">
      <hr className="flex-1 border-border-neutral-default" />
      <span className="text-body-02 text-text-neutral-secondary">or</span>
      <hr className="flex-1 border-border-neutral-default" />
    </div>
  );
}

function CreateAccountContent({
  onContinueWithGoogle,
}: {
  onContinueWithGoogle: () => void;
}) {
  return (
    <div className="flex flex-col gap-5">
      <p className="text-body-01 text-text-neutral-default">
        Create Your Account
      </p>

      <Button
        size="lg"
        variant="neutral"
        appearance="outlined"
        className="w-full"
        onClick={onContinueWithGoogle}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/icons/google-md.svg"
          alt=""
          aria-hidden
          className="size-6 shrink-0"
        />
        Continue with Google
      </Button>

      <OrDivider />

      <Button
        size="lg"
        variant="primary"
        appearance="filled"
        className="w-full"
      >
        Sign Up with Email
      </Button>

      <div className="flex items-center gap-2">
        <p className="text-body-02 text-text-neutral-default">
          Have an account?
        </p>
        <Button size="sm" variant="neutral" appearance="link">
          Sign In
        </Button>
      </div>

      <p className="text-body-02 text-text-neutral-secondary">
        I understand that by creating an account, I agree to receive updates,
        Sena news, and member-only offers. I understand that I can unsuscribe
        from emails at any time.
      </p>
    </div>
  );
}

function AccountSummaryContent() {
  return (
    <p className="text-body-01 text-text-neutral-secondary">
      arqledesma91@gmail.com
    </p>
  );
}

function ShippingInformationContent({
  onComplete,
}: {
  onComplete: (address: ShippingAddress) => void;
}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [apartment, setApartment] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("us");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const zipHasError = zipCode.length > 0 && !/^\d{5}$/.test(zipCode);
  const isShippingFormComplete =
    firstName.trim().length > 0 &&
    lastName.trim().length > 0 &&
    address.trim().length > 0 &&
    city.trim().length > 0 &&
    country.trim().length > 0 &&
    state.trim().length > 0 &&
    /^\d{5}$/.test(zipCode) &&
    phoneNumber.trim().length > 0;

  const handleSave = () => {
    if (!isShippingFormComplete) return;
    onComplete({
      firstName,
      lastName,
      address,
      apartment,
      city,
      state,
      zipCode,
      country,
      phoneNumber,
    });
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-2 gap-3">
        <InputGroup
          size="md"
          placeholder="First Name*"
          showButton={false}
          required
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
        <InputGroup
          size="md"
          placeholder="Last Name*"
          showButton={false}
          required
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
      </div>

      <InputGroup
        size="md"
        placeholder="Address*"
        showButton={false}
        required
        value={address}
        onChange={(event) => setAddress(event.target.value)}
      />
      <InputGroup
        size="md"
        placeholder="Apr / Suite / Unit"
        showButton={false}
        value={apartment}
        onChange={(event) => setApartment(event.target.value)}
      />
      <InputGroup
        size="md"
        placeholder="City*"
        showButton={false}
        required
        value={city}
        onChange={(event) => setCity(event.target.value)}
      />

      <Select
        size="md"
        placeholder="United States of America"
        options={[...COUNTRY_OPTIONS]}
        value={country}
        onChange={setCountry}
      />

      <div className="grid grid-cols-2 gap-3">
        <Select
          size="md"
          placeholder="State"
          options={[...STATE_OPTIONS]}
          value={state}
          onChange={setState}
        />
        <InputGroup
          size="md"
          placeholder="ZIP code*"
          showButton={false}
          required
          value={zipCode}
          state={zipHasError ? "danger" : "default"}
          feedback={zipHasError ? "Invalid ZIP format" : " "}
          inputMode="numeric"
          maxLength={5}
          onChange={(event) => {
            const nextValue = event.target.value.replace(/\D/g, "").slice(0, 5);
            setZipCode(nextValue);
          }}
        />
      </div>

      <InputGroup
        size="md"
        placeholder="Phone number*"
        showButton={false}
        required
        value={phoneNumber}
        inputMode="tel"
        onChange={(event) => setPhoneNumber(event.target.value)}
      />

      <Checkbox
        size="sm"
        label="By signing up via text, you agree to receive recurring automated promotional and personalized marketing messages (e.g. cart reminders, order updates, exclusive health and science content, and member-only offers) from Sena at the cell number provided. Consent is not a condition of any purchase. Reply STOP to cancel. Email care@sena.com for help. Msg frequency varies. Msg and data rates may apply. See our Privacy Policy and Terms of Service."
        className="items-start h-auto"
      />

      <Button
        size="lg"
        variant="primary"
        appearance="filled"
        disabled={!isShippingFormComplete}
        className="mt-2 w-full"
        onClick={handleSave}
      >
        Save and Continue
      </Button>
    </div>
  );
}

function ShippingSummaryContent({ address }: { address: ShippingAddress }) {
  const countryLabel =
    COUNTRY_OPTIONS.find((o) => o.value === address.country)?.label ??
    address.country;
  const stateLabel =
    STATE_OPTIONS.find((o) => o.value === address.state)?.label ??
    address.state;

  return (
    <div className="flex flex-col gap-1 text-body-01 text-text-neutral-secondary">
      <p>
        {address.firstName} {address.lastName}
      </p>
      <p>{address.address}</p>
      {address.apartment ? <p>{address.apartment}</p> : null}
      <p>
        {address.city} {stateLabel} {address.zipCode}
      </p>
      <p>{countryLabel}</p>
    </div>
  );
}

const PAYMENT_METHODS = [
  { name: "Visa", src: "/images/prototype/visa.svg" },
  { name: "Mastercard", src: "/images/prototype/mastercard.svg" },
  { name: "Amex", src: "/images/prototype/amex.svg" },
  { name: "Diners Club", src: "/images/prototype/diners.svg" },
  { name: "Stripe", src: "/images/prototype/stripe.svg" },
  { name: "PayPal", src: "/images/prototype/paypal.svg" },
  { name: "Apple Pay", src: "/images/prototype/apple-pay.svg" },
  { name: "Google Pay", src: "/images/prototype/google-pay.svg" },
];

function PaymentContent({ onCompleteOrder }: { onCompleteOrder: () => void }) {
  const [billingIsSameAsShipping, setBillingIsSameAsShipping] = useState(true);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/\D/g, "").slice(0, 16);
    setCardNumber(digits.match(/.{1,4}/g)?.join(" ") ?? "");
  };

  const isExpiryInvalid = (() => {
    const digits = expiry.replace(/\D/g, "");
    if (digits.length < 4) return false;
    const mm = parseInt(digits.slice(0, 2), 10);
    const yy = parseInt(digits.slice(2, 4), 10);
    const year = 2000 + yy;
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth() + 1;
    if (mm < 1 || mm > 12) return true;
    if (year < currentYear) return true;
    if (year === currentYear && mm < currentMonth) return true;
    return false;
  })();

  const isPaymentFormComplete =
    cardNumber.replace(/\s/g, "").length === 16 &&
    expiry.replace(/\D/g, "").length === 4 &&
    !isExpiryInvalid &&
    cvv.length === 3 &&
    agreedToTerms;

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    const digits = raw.replace(/\D/g, "").slice(0, 4);
    let formatted: string;
    if (digits.length > 2) {
      formatted = digits.slice(0, 2) + "/" + digits.slice(2);
    } else if (digits.length === 2 && raw.length >= expiry.length) {
      formatted = digits + "/";
    } else {
      formatted = digits;
    }
    setExpiry(formatted);
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-3">
        <p className="text-body-01 font-medium text-text-neutral-default">
          Pay with credit or debit card
        </p>
        <div className="flex gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {PAYMENT_METHODS.map((method) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={method.name}
              src={method.src}
              alt={method.name}
              className="h-6 w-[35px] shrink-0 object-contain"
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2 pt-5">
        <div className="relative">
          <InputGroup
            size="md"
            placeholder="Card Number"
            showButton={false}
            value={cardNumber}
            inputMode="numeric"
            onChange={handleCardNumberChange}
          />
          {cardNumber.replace(/\s/g, "").length >= 4 && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src="/images/prototype/mastercard.svg"
              alt="Mastercard"
              className="pointer-events-none absolute right-4 top-5 h-6 w-[35px] -translate-y-1/2 object-contain"
            />
          )}
        </div>
        <div className="grid grid-cols-2 gap-3">
          <InputGroup
            size="md"
            placeholder="MM/YY"
            showButton={false}
            value={expiry}
            inputMode="numeric"
            state={isExpiryInvalid ? "danger" : "default"}
            feedback={isExpiryInvalid ? "Invalid date" : undefined}
            onChange={handleExpiryChange}
          />
          <InputGroup
            size="md"
            placeholder="CVV"
            showButton={false}
            type="password"
            inputMode="numeric"
            maxLength={3}
            value={cvv}
            onChange={(event) =>
              setCvv(event.target.value.replace(/\D/g, "").slice(0, 3))
            }
          />
        </div>
      </div>

      <div className="flex flex-col">
        <Checkbox
          size="sm"
          label="Billling same as shipping address"
          checked={billingIsSameAsShipping}
          onChange={(e) => setBillingIsSameAsShipping(e.target.checked)}
          className="h-auto items-start"
        />
        <Checkbox
          size="sm"
          label={`I understand that I'm agreeing to these Subscription Terms. The subscription will renew at the price and frequency listed until it ends or is canceled. By clicking "Complete Order" and submitting this order, I agree to Sena's Terms of Use and Privacy Policy.`}
          checked={agreedToTerms}
          onChange={(e) => setAgreedToTerms(e.target.checked)}
          className="h-auto items-start"
        />
      </div>

      <Button
        size="lg"
        variant="primary"
        appearance="filled"
        disabled={!isPaymentFormComplete}
        className="w-full"
        onClick={onCompleteOrder}
      >
        Complete Order
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

function Bone({ className }: { className?: string }) {
  return (
    <div
      className={`animate-pulse rounded-sm bg-background-surface-neutral-default ${className ?? ""}`}
    />
  );
}

function CheckoutSkeleton() {
  return (
    <div className="relative flex min-h-full flex-col bg-background-default-default">
      <div className="sticky top-0 z-10 bg-background-default-default">
        <TopBar color="primary" logoOnly />
      </div>

      <div className="flex flex-col px-5 pb-10">
        {/* Cart item */}
        <div className="flex gap-3 py-5 border-b border-border-neutral-default">
          <Bone className="size-[84px] shrink-0 rounded-sm" />
          <div className="flex flex-1 flex-col gap-2 py-1">
            <Bone className="h-4 w-3/4" />
            <Bone className="h-3 w-1/2" />
            <Bone className="h-8 w-24 rounded-max" />
          </div>
        </div>

        {/* Promo code */}
        <div className="py-5 border-b border-border-neutral-default">
          <Bone className="h-10 w-full rounded-md" />
        </div>

        {/* Order summary rows */}
        <div className="flex flex-col gap-3 py-5 border-b border-border-neutral-default">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex justify-between">
              <Bone className="h-4 w-28" />
              <Bone className="h-4 w-16" />
            </div>
          ))}
        </div>

        {/* Step list items */}
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex flex-col gap-1 py-5 border-b border-border-neutral-default">
            <Bone className="h-3 w-20" />
            <Bone className="h-5 w-40" />
          </div>
        ))}
      </div>

      {/* Bottom button */}
      <div className="sticky bottom-0 bg-background-default-default p-5">
        <Bone className="h-12 w-full rounded-max" />
      </div>
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
  const [isLoading, setIsLoading] = useState(true);
  const [cartItem, setCartItem] = useState(initialCartItem);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);
  const [promoCode, setPromoCode] = useState("");
  const [promoDiscountRate, setPromoDiscountRate] = useState(0);
  const [promoFeedback, setPromoFeedback] = useState("");
  const [promoState, setPromoState] = useState<"default" | "success">(
    "default",
  );
  const [checkoutStep, setCheckoutStep] = useState<1 | 2 | 3>(1);
  const [shippingAddress, setShippingAddress] =
    useState<ShippingAddress | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const router = useRouter();

  const handleCompleteOrder = () => {
    setIsProcessing(true);
    setTimeout(() => {
      router.push("/prototype/order-confirmation");
    }, 2500);
  };
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
    const nextCartItem = { ...cartItem, quantity: nextQuantity };
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

  const handleContinueWithGoogle = () => {
    setCheckoutStep(2);
  };

  useEffect(() => {
    if (isProcessing) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isProcessing]);

  const handleShippingComplete = (address: ShippingAddress) => {
    setShippingAddress(address);
    setCheckoutStep(3);
  };

  if (isLoading) return <CheckoutSkeleton />;

  return (
    <div className="relative flex min-h-full flex-col bg-background-default-default">
      <div className="sticky top-0 z-10 bg-background-default-default">
        <TopBar color="primary" logoOnly />
      </div>

      <div className="flex flex-col px-5 pb-10">
        {/* Cart Summary */}
        <div className="py-5">
          <AccordionItem
            heading={`Cart Summary (${cartItem?.quantity ?? 0})`}
            size="md"
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

        {/* Step 1 - Account */}
        <ListItem subheading="1 of 3" heading="Account" state="default">
          {checkoutStep === 1 ? (
            <CreateAccountContent
              onContinueWithGoogle={handleContinueWithGoogle}
            />
          ) : (
            <AccountSummaryContent />
          )}
        </ListItem>

        {/* Step 2 - Shipping Information */}
        <ListItem
          subheading="2 of 3"
          heading="Shipping Information"
          state={checkoutStep >= 2 ? "default" : "disabled"}
        >
          {checkoutStep === 2 ? (
            <ShippingInformationContent onComplete={handleShippingComplete} />
          ) : checkoutStep === 3 && shippingAddress ? (
            <ShippingSummaryContent address={shippingAddress} />
          ) : null}
        </ListItem>

        {/* Step 3 - Payment */}
        <ListItem
          subheading="3 of 3"
          heading="Payment"
          state={checkoutStep === 3 ? "default" : "disabled"}
        >
          {checkoutStep === 3 ? (
            <PaymentContent onCompleteOrder={handleCompleteOrder} />
          ) : null}
        </ListItem>
      </div>

      {isProcessing && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 bg-background-fill-neutral-muted">
          <div className="flex size-[88px] items-center justify-center rounded-xl ">
            <div className="relative size-12 animate-spin">
              <div className="absolute inset-0 rounded-full border-[3px] border-icon-primary-invert" />
              <div className="absolute left-0 top-0 size-4 -translate-x-1/2 translate-y-1/2 rounded-full bg-icon-primary-default" />
            </div>
          </div>
          <p className="text-body-01 font-medium text-text-primary-invert">
            Your transaction is processing...
          </p>
        </div>
      )}
    </div>
  );
}
