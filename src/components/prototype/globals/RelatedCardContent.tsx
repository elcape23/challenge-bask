"use client";

import Badge from "@/components/ui/Badge";
import type { BadgeType } from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export interface RelatedCardContentProps {
  className?: string;
  heading?: string;
  description?: string;
  finalPrice?: string;
  originalPrice?: string;
  imageSrc?: string;
  imageAlt?: string;
  showBadge?: boolean;
  badgeLabel?: string;
  badgeType?: BadgeType;
  isOffer?: boolean;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

function CategoryImage({
  imageSrc,
  imageAlt,
  showBadge,
  badgeLabel,
  badgeType,
}: Pick<
  RelatedCardContentProps,
  "imageSrc" | "imageAlt" | "showBadge" | "badgeLabel" | "badgeType"
>) {
  return (
    <div className="flex h-full aspect-[120/172] shrink-0 items-start overflow-hidden">
      <div className="relative size-full overflow-hidden">
        {imageSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imageSrc}
            alt={imageAlt ?? ""}
            className="absolute left-1/2 top-1/2 h-full w-auto max-w-none -translate-x-1/2 -translate-y-1/2 object-contain"
          />
        ) : (
          <div
            aria-hidden="true"
            className="size-full bg-[linear-gradient(45deg,transparent_25%,rgba(183,187,175,0.22)_25%,rgba(183,187,175,0.22)_50%,transparent_50%,transparent_75%,rgba(183,187,175,0.22)_75%)] bg-[length:12px_12px]"
          />
        )}
        {showBadge ? (
          <div className="absolute left-1 top-1">
            <Badge
              type={badgeType ?? "neutral"}
              size="sm"
              label={badgeLabel ?? "New"}
              showIcon={false}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}

/**
 * Card container variant from the Figma global card set.
 */
export default function RelatedCardContent({
  className,
  heading = "Heading",
  description = "Description",
  finalPrice = "00.00",
  originalPrice = "00.00",
  imageSrc,
  imageAlt = "",
  showBadge = true,
  badgeLabel = "New",
  badgeType = "neutral",
  isOffer = true,
  onPrimaryClick,
  onSecondaryClick,
}: RelatedCardContentProps) {
  return (
    <div className={`flex h-[168px] w-full items-end gap-4 ${className ?? ""}`}>
      <CategoryImage
        imageSrc={imageSrc}
        imageAlt={imageAlt}
        showBadge={showBadge}
        badgeLabel={badgeLabel}
        badgeType={badgeType}
      />
      <div className="flex h-full min-w-0 flex-1 flex-col items-start gap-6 py-4">
        <div className="flex w-full flex-col gap-3">
          <div className="flex w-full flex-col">
            <div className="flex w-full items-center">
              <p className="min-w-0 flex-1 text-body-01 font-medium text-text-primary-default">
                {heading}
              </p>
            </div>
            <div className="flex h-4 w-full items-center">
              <p className="min-w-0 flex-1 truncate text-body-02 font-regular text-text-primary-default">
                {description}
              </p>
            </div>
          </div>
          <div className="flex h-6 w-full items-center gap-1 whitespace-nowrap text-body-02 font-regular">
            <span className="text-text-primary-default">
              ${finalPrice}
            </span>
            {isOffer ? (
              <span className="text-primary-700 line-through">
                ${originalPrice}
              </span>
            ) : null}
          </div>
        </div>
        <div className="flex w-full items-center gap-2">
          <Button
            size="sm"
            variant="primary"
            appearance="filled"
            className="flex-1"
            onClick={onPrimaryClick}
          >
            Add To Cart
          </Button>
          <Button
            size="sm"
            variant="neutral"
            appearance="link"
            className="shrink-0"
            onClick={onSecondaryClick}
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}
