"use client";

import Alert from "@/components/ui/Alert";
import Counter from "@/components/ui/Counter";
import Icon from "@/components/ui/Icon";

export interface CartCardContentProps {
  className?: string;
  heading?: string;
  description?: string;
  finalPrice?: string;
  imageSrc?: string;
  imageAlt?: string;
  quantity?: number;
  savingsText?: string;
}

function CartImage({
  imageSrc,
  imageAlt,
}: {
  imageSrc?: string;
  imageAlt: string;
}) {
  return (
    <div className="relative size-[84px] shrink-0 overflow-hidden rounded-sm bg-background-surface-neutral-default">
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

export default function CartCardContent({
  className,
  heading = "Heading",
  description = "Description",
  finalPrice = "14.99",
  imageSrc,
  imageAlt = "",
  quantity = 1,
  savingsText = "Save 17% on 3 month delivery",
}: CartCardContentProps) {
  return (
    <div
      className={`flex w-full flex-col gap-5 border-b border-border-neutral-default py-5 ${
        className ?? ""
      }`}
    >
      <div className="flex w-full items-center gap-3">
        <CartImage imageSrc={imageSrc} imageAlt={imageAlt} />
        <div className="flex min-w-0 flex-1 flex-col gap-3 py-1">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <p className="min-w-0 flex-1 truncate text-body-01 font-medium text-text-primary-default">
                {heading}
              </p>
              <p className="whitespace-nowrap text-body-02 text-text-primary-default">
                ${finalPrice}
              </p>
            </div>
            <p className="h-4 truncate text-body-02 text-text-primary-default">
              {description}
            </p>
          </div>
          <Counter size="md" defaultValue={quantity} className="self-start" />
        </div>
      </div>

      <Alert
        type="success"
        size="sm"
        showHeading={false}
        description={savingsText}
        buttonLabel="Upgrade"
        icon={<Icon type="refresh-cw" size="sm" className="text-icon-success-default" />}
        className="w-full [&_button]:w-[43px] [&_button]:[text-decoration-skip-ink:none] [&_button]:text-left"
      />
    </div>
  );
}
