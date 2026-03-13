"use client";

import SenaLogo from "./SenaLogo";

export interface FooterProps {
  className?: string;
  variant?: "card" | "section";
}

const LEGAL_LINKS = [
  "Terms & Conditions",
  "Privacy Policy",
  "Your privacy choices",
] as const;

/**
 * Global Footer — legal links, copyright, logo.
 * Dark theme (invert text).
 */
export default function Footer({
  className,
  variant = "card",
}: FooterProps) {
  const isCard = variant === "card";

  return (
    <footer
      className={`flex w-full flex-col items-start gap-10 text-text-neutral-invert ${
        isCard
          ? "h-[232px] max-w-[402px] rounded-xl bg-neutral-900 px-5 py-5"
          : "bg-transparent"
      } ${
        className ?? ""
      }`}
    >
      <div className="flex flex-col items-start gap-2">
        {LEGAL_LINKS.map((label) => (
          <button
            key={label}
            type="button"
            className="text-body-02 font-medium text-text-neutral-invert underline"
          >
            {label}
          </button>
        ))}
      </div>
      <p className="text-body-02 font-regular text-text-neutral-invert">
        2026 Sena Health Inc. All rights reserved.
      </p>
      <SenaLogo variant="invert" size="sm" className="shrink-0" />
    </footer>
  );
}
