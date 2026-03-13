"use client";

import { type ReactNode } from "react";

export type ListItemState = "loading" | "default" | "disabled";

export interface ListItemProps {
  className?: string;
  heading?: string;
  subheading?: string;
  children?: ReactNode;
  state?: ListItemState;
}

/**
 * List item for checkout sections — subheading, heading, and slot for form content.
 */
export default function ListItem({
  className,
  heading = "Heading",
  subheading = "Subheading",
  children,
  state = "default",
}: ListItemProps) {
  const isDefault = state === "default";
  const isDisabled = state === "disabled";
  const isDefaultOrDisabled = isDefault || isDisabled;

  const containerClasses = [
    "flex flex-col items-start py-5 w-full",
    isDefaultOrDisabled ? "border-b border-border-neutral-default" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const innerGap = isDisabled ? "gap-0 pb-3" : "gap-5";

  const subheadingColor = isDisabled
    ? "text-text-neutral-disabled"
    : "text-text-neutral-secondary";

  const headingColor = isDisabled
    ? "text-text-neutral-disabled"
    : "text-text-neutral-default";

  return (
    <div className={`${containerClasses} ${className ?? ""}`}>
      <div className={`flex flex-col items-start w-full ${innerGap}`}>
        <div className="flex flex-col gap-1">
          <p className={`text-body-02 ${subheadingColor}`}>{subheading}</p>
          <p className={`text-heading-06 font-medium ${headingColor}`}>
            {heading}
          </p>
        </div>
        {children && <div className="w-full">{children}</div>}
      </div>
    </div>
  );
}
