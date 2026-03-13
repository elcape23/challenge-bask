import { notFound } from "next/navigation";
import LayoutiPhone from "@/components/prototype/globals/LayoutiPhone";
import ProductDetailedMobilePage from "@/components/prototype/ProductDetailedMobilePage";
import {
  getPrototypeProductBySlug,
  prototypeProducts,
} from "@/data/prototypeProducts";

type PrototypeProductDetailedSlugPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function PrototypeProductDetailedSlugPage({
  params,
}: PrototypeProductDetailedSlugPageProps) {
  const { slug } = await params;
  const product = getPrototypeProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = prototypeProducts.filter(
    (item) => item.slug !== product.slug,
  );

  return (
    <>
      <div className="min-h-screen bg-background-default-default md:hidden">
        <ProductDetailedMobilePage
          product={product}
          relatedProducts={relatedProducts}
        />
      </div>

      <div className="hidden min-h-screen w-full items-start justify-center px-4 py-16 md:flex">
        <LayoutiPhone>
          <ProductDetailedMobilePage
            product={product}
            relatedProducts={relatedProducts}
          />
        </LayoutiPhone>
      </div>
    </>
  );
}
