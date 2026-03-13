"use client";

import Link from "next/link";
import SenaLogo from "./SenaLogo";

export interface FooterProps {
  className?: string;
  variant?: "card" | "section";
}

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
        <Link
          href="#"
          className="text-body-02 font-medium text-text-neutral-invert underline"
        >
          Terms &amp; Conditions
        </Link>
        <Link
          href="#"
          className="text-body-02 font-medium text-text-neutral-invert underline"
        >
          Privacy Policy
        </Link>
        <Link
          href="#"
          className="text-body-02 font-medium text-text-neutral-invert underline"
        >
          Your privacy choices
        </Link>
      </div>
      <p className="text-body-02 font-regular text-text-neutral-invert">
        2026 Sena Health Inc. All rights reserved.
      </p>
      <SenaLogo variant="invert" size="sm" className="shrink-0" />
    </footer>
  );
}
