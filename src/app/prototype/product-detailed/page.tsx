"use client";

import LayoutiPhone from "@/components/prototype/globals/LayoutiPhone";
import ProductDetailedMobilePage from "@/components/prototype/ProductDetailedMobilePage";

export default function PrototypeProductDetailedPage() {
  return (
    <>
      {/* Mobile: content renders directly, no phone frame */}
      <div className="md:hidden min-h-screen bg-background-default-default">
        <ProductDetailedMobilePage />
      </div>

      {/* Desktop: content inside iPhone frame */}
      <div className="hidden md:flex min-h-screen w-full items-start justify-center px-4 py-16">
        <LayoutiPhone>
          <ProductDetailedMobilePage />
        </LayoutiPhone>
      </div>
    </>
  );
}
