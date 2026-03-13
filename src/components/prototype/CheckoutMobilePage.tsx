"use client";

import Button from "@/components/ui/Button";
import { AccordionItem } from "@/components/ui/Accordion";
import ListItem from "@/components/prototype/globals/ListItem";
import TopBar from "@/components/prototype/globals/TopBar";

function OrDivider() {
  return (
    <div className="flex items-center gap-1">
      <hr className="flex-1 border-border-neutral-default" />
      <span className="text-body-02 text-text-neutral-secondary">or</span>
      <hr className="flex-1 border-border-neutral-default" />
    </div>
  );
}

function CreateAccountContent() {
  return (
    <div className="flex flex-col gap-5">
      <p className="text-body-01 text-text-neutral-default">Create Your Account</p>

      {/* Continue with Google */}
      <Button size="lg" variant="neutral" appearance="outlined" className="w-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/google-md.svg" alt="" aria-hidden className="size-6 shrink-0" />
        Continue with Google
      </Button>

      <OrDivider />

      {/* Sign Up with Email */}
      <Button size="lg" variant="primary" appearance="filled" className="w-full">
        Sign Up with Email
      </Button>

      {/* Have an account? */}
      <div className="flex items-center gap-2">
        <p className="text-body-02 text-text-neutral-default">Have an account?</p>
        <Button size="sm" variant="neutral" appearance="link">
          Sign In
        </Button>
      </div>

      {/* Legal */}
      <p className="text-body-02 text-text-neutral-secondary">
        I understand that by creating an account, I agree to receive updates, Sena news,
        and member-only offers. I understand that I can unsuscribe from emails at any time.
      </p>
    </div>
  );
}

export default function CheckoutMobilePage() {
  return (
    <div className="relative flex min-h-full flex-col bg-background-default-default">
      <TopBar color="primary" logoOnly />

      <div className="flex flex-col px-5 pb-10">
        {/* Cart Summary */}
        <div className="py-5">
          <AccordionItem heading="Cart Summary (1)" size="md" />
        </div>

        {/* Step 1 — Account (active) */}
        <ListItem subheading="1 of 3" heading="Account" state="default">
          <CreateAccountContent />
        </ListItem>

        {/* Step 2 — Shipping Information (inactive) */}
        <ListItem subheading="2 of 3" heading="Shipping Information" state="disabled" />

        {/* Step 3 — Payment (inactive) */}
        <ListItem subheading="3 of 3" heading="Payment" state="disabled" />
      </div>
    </div>
  );
}
