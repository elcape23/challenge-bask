"use client";

import LayoutiPhone from "@/components/prototype/globals/LayoutiPhone";
import ProductDetailedMobilePage from "@/components/prototype/ProductDetailedMobilePage";

export default function PrototypeProductDetailedPage() {
  return (
    <div className="flex min-h-screen w-full items-start justify-center px-4 py-16">
      <LayoutiPhone>
        <ProductDetailedMobilePage />
      </LayoutiPhone>
    </div>
  );
}
