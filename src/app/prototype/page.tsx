"use client";

import LayoutiPhone from "@/components/prototype/globals/LayoutiPhone";
import ProductsListMobilePage from "@/components/prototype/ProductsListMobilePage";

/**
 * Prototype page - mobile demo.
 */
export default function PrototypePage() {
  return (
    <div className="min-h-screen w-full bg-background-default-default">
      <div className="min-h-screen md:hidden">
        <ProductsListMobilePage />
      </div>

      <div className="hidden min-h-screen w-full items-start justify-center px-4 py-16 md:flex">
        <LayoutiPhone>
          <ProductsListMobilePage />
        </LayoutiPhone>
      </div>
    </div>
  );
}
