"use client";

import { logoSizes } from "@/data/tokens";

type SenaLogoProps = {
  variant?: "default" | "invert";
  size?: "sm" | "md";
  className?: string;
};

/**
 * Sena wordmark logo.
 */
export default function SenaLogo({
  variant = "default",
  size = "sm",
  className = "",
}: SenaLogoProps) {
  const logoColor =
    variant === "invert" ? "bg-text-neutral-invert" : "bg-text-primary-default";
  const dimensions = size === "sm" ? logoSizes.xs : logoSizes.md;

  return (
    <div className={`shrink-0 ${className}`} aria-label="Sena" role="img">
      <span
        className={`block shrink-0 ${logoColor}`}
        aria-hidden
        style={{
          width: `${dimensions.width}px`,
          height: `${dimensions.height}px`,
          WebkitMaskImage: "url('/logo.png')",
          maskImage: "url('/logo.png')",
          WebkitMaskPosition: "center",
          maskPosition: "center",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskSize: "contain",
          maskSize: "contain",
        }}
      />
    </div>
  );
}
