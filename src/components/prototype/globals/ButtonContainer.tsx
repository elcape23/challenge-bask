"use client";

import Button from "@/components/ui/Button";

export interface ButtonContainerProps {
  className?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  showSecondaryButton?: boolean;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

/**
 * Dual-button container — primary + optional secondary, side by side.
 */
export default function ButtonContainer({
  className,
  primaryLabel = "Button",
  secondaryLabel = "Button",
  showSecondaryButton = true,
  onPrimaryClick,
  onSecondaryClick,
}: ButtonContainerProps) {
  return (
    <div
      className={`flex gap-3 items-center p-5 w-full bg-background-default-default ${
        className ?? ""
      }`}
    >
      <div className="flex flex-1 gap-3 items-center">
        {showSecondaryButton && (
          <Button
            size="lg"
            variant="neutral"
            appearance="filled"
            onClick={onSecondaryClick}
            className="flex-1"
          >
            {secondaryLabel}
          </Button>
        )}
        <Button
          size="lg"
          variant="primary"
          appearance="filled"
          onClick={onPrimaryClick}
          className="flex-1"
        >
          {primaryLabel}
        </Button>
      </div>
    </div>
  );
}
