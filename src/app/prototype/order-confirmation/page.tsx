"use client";

import LayoutiPhone from "@/components/prototype/globals/LayoutiPhone";
import OrderConfirmationMobilePage from "@/components/prototype/OrderConfirmationMobilePage";

export default function PrototypeOrderConfirmationPage() {
  return (
    <>
      {/* Mobile: content renders directly, no phone frame */}
      <div className="md:hidden min-h-screen bg-background-default-default">
        <OrderConfirmationMobilePage />
      </div>

      {/* Desktop: content inside iPhone frame */}
      <div className="hidden md:flex h-screen w-full items-start justify-center px-4 py-16">
        <LayoutiPhone>
          <OrderConfirmationMobilePage />
        </LayoutiPhone>
      </div>
    </>
  );
}
