"use client";

import { logoSizes } from "@/data/tokens";

type SenaLogoProps = {
  variant?: "default" | "invert";
  size?: keyof typeof logoSizes;
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
    variant === "invert" ? "bg-icon-primary-invert" : "bg-icon-primary-default";
  const dimensions = logoSizes[size];

  return (
    <div className={`shrink-0 ${className}`} aria-label="Sena" role="img">
      <span
        className={`block shrink-0 ${logoColor}`}
        aria-hidden
        style={{
          width: `${dimensions.width}px`,
          height: `${dimensions.height}px`,
          WebkitMaskImage: "url('/logo.svg')",
          maskImage: "url('/logo.svg')",
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
