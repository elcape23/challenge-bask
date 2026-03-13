"use client";

import LayoutiPhone from "@/components/prototype/globals/LayoutiPhone";
import CheckoutMobilePage from "@/components/prototype/CheckoutMobilePage";

export default function PrototypeCheckoutPage() {
  return (
    <>
      {/* Mobile: content renders directly, no phone frame */}
      <div className="md:hidden min-h-screen bg-background-default-default">
        <CheckoutMobilePage />
      </div>

      {/* Desktop: content inside iPhone frame */}
      <div className="hidden md:flex min-h-screen w-full items-start justify-center px-4 py-16">
        <LayoutiPhone>
          <CheckoutMobilePage />
        </LayoutiPhone>
      </div>
    </>
  );
}
