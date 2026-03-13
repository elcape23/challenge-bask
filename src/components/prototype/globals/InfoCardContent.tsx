"use client";

import { type ReactNode } from "react";

export interface InfoCardContentProps {
  className?: string;
  heading?: string;
  description?: string;
  icon?: ReactNode;
}

/**
 * Info card content — decorative icon, heading, description.
 * Used on dark backgrounds (text in invert/light color).
 */
export default function InfoCardContent({
  className,
  heading = "Heading",
  description = "Description",
  icon,
}: InfoCardContentProps) {
  return (
    <div
      className={`flex flex-col gap-3 items-start w-[200px] ${className ?? ""}`}
    >
      <div className="flex items-center justify-center p-[5px] size-10 shrink-0 text-icon-neutral-invert">
        {icon ?? (
          <svg
            width={30}
            height={30}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        )}
      </div>
      <div className="flex w-full flex-col gap-2 items-start">
        <p className="w-full text-heading-06 font-medium text-text-neutral-invert">
          {heading}
        </p>
        <p className="w-full text-body-01 text-text-neutral-invert">
          {description}
        </p>
      </div>
    </div>
  );
}
