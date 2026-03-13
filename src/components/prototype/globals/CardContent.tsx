"use client";

import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import CartCardContent from "@/components/prototype/globals/CartCardContent";

export interface CardContentProps {
  className?: string;
  heading?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  finalPrice?: string;
  originalPrice?: string;
  quantity?: number;
  savingsText?: string;
  onQuantityChange?: (value: number) => void;
  type?: "product-detailed" | "menu" | "order-confirmation" | "cart";
  variant?: "default" | "invert";
}

function ProductImage({
  imageSrc,
  imageAlt,
  className,
}: {
  imageSrc?: string;
  imageAlt: string;
  className?: string;
}) {
  return (
    <div
      className={`relative shrink-0 overflow-hidden bg-background-surface-neutral-default ${className ?? "size-[84px] rounded-sm"}`}
    >
      {imageSrc ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={imageSrc} alt={imageAlt} className="size-full object-cover" />
      ) : (
        <div
          aria-hidden="true"
          className="size-full bg-[linear-gradient(45deg,transparent_25%,rgba(183,187,175,0.28)_25%,rgba(183,187,175,0.28)_50%,transparent_50%,transparent_75%,rgba(183,187,175,0.28)_75%)] bg-[length:12px_12px]"
        />
      )}
    </div>
  );
}

function Price({
  finalPrice,
  originalPrice,
  finalClassName,
  originalClassName,
}: {
  finalPrice: string;
  originalPrice?: string;
  finalClassName: string;
  originalClassName: string;
}) {
  return (
    <div className="flex items-center gap-1 whitespace-nowrap">
      <span className={finalClassName}>${finalPrice}</span>
      {originalPrice ? (
        <span className={originalClassName}>${originalPrice}</span>
      ) : null}
    </div>
  );
}

/**
 * Compact card variants used across the global prototype audit.
 * Mirrors the Figma card system: product detailed, order confirmation, and menu row.
 */
export default function CardContent({
  className,
  heading = "Heading",
  description = "Description",
  imageSrc,
  imageAlt = "",
  finalPrice = "00.00",
  originalPrice = "00.00",
  quantity = 0,
  savingsText,
  onQuantityChange,
  type,
  variant = "default",
}: CardContentProps) {
  const resolvedType =
    type ?? (variant === "invert" ? "menu" : "product-detailed");

  if (resolvedType === "menu") {
    return (
      <div className={`flex w-full items-end gap-2 py-3 ${className ?? ""}`}>
        <ProductImage imageSrc={imageSrc} imageAlt={imageAlt} />
        <div className="flex min-w-0 flex-1 flex-col justify-center self-stretch py-2">
          <div className="flex flex-col gap-1">
            <p className="truncate text-body-01 font-medium text-text-primary-invert">
              {heading}
            </p>
            <p className="truncate text-body-02 text-text-primary-invert">
              {description}
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (resolvedType === "order-confirmation") {
    return (
      <div
        className={`flex w-full items-end gap-2 border-b border-border-neutral-default py-3 ${
          className ?? ""
        }`}
      >
        <ProductImage imageSrc={imageSrc} imageAlt={imageAlt} />
        <div className="flex min-w-0 flex-1 self-stretch">
          <div className="flex w-full items-start self-stretch gap-1 py-2">
            <div className="flex min-w-0 flex-1 flex-col gap-1">
              <p className="truncate whitespace-nowrap text-body-01 font-medium text-text-primary-default">
                {heading}
              </p>
              <p className="whitespace-nowrap text-body-01 text-text-primary-default">
                {quantity}x
              </p>
            </div>
            <div className="flex w-[47px] self-stretch flex-col items-end justify-start">
              <p className="whitespace-nowrap text-body-01 font-medium text-text-primary-default">
                ${finalPrice}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (resolvedType === "cart") {
    return (
      <CartCardContent
        className={className}
        heading={heading}
        description={description}
        imageSrc={imageSrc}
        imageAlt={imageAlt}
        finalPrice={finalPrice}
        quantity={quantity}
        savingsText={savingsText}
        onQuantityChange={onQuantityChange}
      />
    );
  }

  return (
    <div
      className={`flex h-[124px] w-full items-end gap-2 rounded-lg bg-background-surface-neutral-default p-5 ${
        className ?? ""
      }`}
    >
      <ProductImage
        imageSrc={imageSrc}
        imageAlt={imageAlt}
        className="size-[86px] rounded-lg"
      />
      <div className="flex min-w-0 flex-1 flex-col gap-1 self-stretch">
        <div className="flex w-full flex-col gap-1">
          <p className="truncate text-body-01 font-medium text-text-primary-default">
            {heading}
          </p>
          <p className="h-4 truncate text-body-02 text-text-primary-default">
            {description}
          </p>
        </div>
        <div className="flex items-end gap-1">
          <div className="min-w-0 flex-1">
            <Price
              finalPrice={finalPrice}
              originalPrice={originalPrice}
              finalClassName="text-body-02 font-medium text-text-primary-default"
              originalClassName="text-body-02 text-primary-700 line-through"
            />
          </div>
          <Button
            aria-label={`Add ${heading} to cart`}
            size="icon"
            variant="primary"
            appearance="filled"
            className="shrink-0 [&_svg]:size-5"
            leadingIcon={
              <Icon type="plus" size="sm" className="text-icon-primary-invert" />
            }
          />
        </div>
      </div>
    </div>
  );
}
