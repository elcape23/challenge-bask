import { forwardRef, type HTMLAttributes, type ReactNode } from "react";

export type CardSize = "lg" | "md" | "sm";
export type CardBackground = "solid" | "blur" | "transparent";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Size variant */
  size?: CardSize;
  /** Background treatment */
  background?: CardBackground;
  /** Whether to show the heading sub-component */
  showHeading?: boolean;
  /** Heading text */
  heading?: string;
  /** Slot content */
  children?: ReactNode;
}

/* ─── Size-specific tokens ─── */

const SIZE_PADDING: Record<CardSize, string> = {
  lg: "p-5",
  md: "p-3",
  sm: "p-2",
};

const SIZE_GAP: Record<CardSize, string> = {
  lg: "gap-3",
  md: "gap-2",
  sm: "gap-1",
};

const SIZE_RADIUS: Record<CardSize, string> = {
  lg: "rounded-xl",
  md: "rounded-lg",
  sm: "rounded-lg",
};

const SIZE_BORDER: Record<CardSize, boolean> = {
  lg: true,
  md: false,
  sm: true,
};

const HEADING_TYPOGRAPHY: Record<CardSize, string> = {
  lg: "text-heading-06 font-medium",
  md: "text-body-01 font-medium",
  sm: "text-body-02 font-medium",
};

const HEADING_PADDING: Record<CardSize, string> = {
  lg: "p-2",
  md: "p-1",
  sm: "p-0.5",
};

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      size = "lg",
      background = "solid",
      showHeading = true,
      heading = "Heading",
      children,
      className,
      ...props
    },
    ref
  ) => {
    const isSolid = background === "solid";
    const isBlur = background === "blur";
    const isTransparent = background === "transparent";

    const bgClass = isSolid
      ? "bg-background-surface-neutral-default"
      : isBlur
        ? "bg-background-fill-neutral-muted backdrop-blur-20"
        : "";

    const borderClass =
      isSolid && SIZE_BORDER[size]
        ? "border border-border-neutral-default"
        : "";

    const paddingClass = isTransparent ? "p-3" : SIZE_PADDING[size];

    const headingTextColor = isBlur
      ? "text-text-neutral-invert"
      : "text-text-neutral-default";

    return (
      <div
        ref={ref}
        className={`
          flex flex-col items-start overflow-clip
          ${bgClass}
          ${borderClass}
          ${paddingClass}
          ${SIZE_GAP[size]}
          ${SIZE_RADIUS[size]}
          ${className ?? ""}
        `}
        {...props}
      >
        {showHeading && (
          <div className={`flex items-center w-full shrink-0 ${HEADING_PADDING[size]}`}>
            <p className={`${HEADING_TYPOGRAPHY[size]} ${headingTextColor} m-0 whitespace-nowrap`}>
              {heading}
            </p>
          </div>
        )}

        <div className="flex-1 min-h-0 min-w-0 w-full">
          {children}
        </div>
      </div>
    );
  }
);

Card.displayName = "Card";
export default Card;
