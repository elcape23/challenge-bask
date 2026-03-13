"use client";

import { forwardRef, type HTMLAttributes } from "react";
import Icon from "@/components/ui/Icon";

export type RadioSize = "md" | "sm";
export type RadioSide = "left" | "right";
export type RadioState = "default" | "disabled" | "danger";
export type RadioStatus = "empty" | "selected";
export type RadioType = "default" | "check";

export interface RadioProps extends HTMLAttributes<HTMLDivElement> {
  /** Kept for compatibility with the previous wrapper API */
  size?: RadioSize;
  /** Kept for compatibility with the previous wrapper API */
  side?: RadioSide;
  /** Kept for compatibility with the previous wrapper API */
  label?: string;
  /** Kept for compatibility with the previous wrapper API */
  name?: string;
  /** Kept for compatibility with the previous wrapper API */
  checked?: boolean;
  /** Kept for compatibility with the previous wrapper API */
  defaultChecked?: boolean;
  /** Visual disabled state */
  disabled?: boolean;
  /** Visual state from the Figma primitive */
  state?: RadioState;
  /** Whether the radio is empty or selected */
  status?: RadioStatus;
  /** Standard radio or filled check badge */
  type?: RadioType;
}

export const RadioControl = forwardRef<HTMLDivElement, RadioProps>(
  (
    {
      checked,
      defaultChecked,
      disabled = false,
      state = "default",
      status,
      type = "default",
      className,
      ...props
    },
    ref
  ) => {
    const resolvedState =
      disabled && state === "default" ? "disabled" : state;
    const resolvedStatus =
      status ?? (checked || defaultChecked ? "selected" : "empty");
    const isSelected = resolvedStatus === "selected";
    const isDanger = resolvedState === "danger";
    const isDisabled = resolvedState === "disabled";
    const isCheck = type === "check";

    const rootClasses = isCheck
      ? [
          "flex size-6 items-center justify-center rounded-full bg-background-default-invert p-1 text-icon-primary-invert",
          className ?? "",
        ].join(" ")
      : [
          "relative box-border size-4 rounded-full border border-solid",
          isSelected ? "flex items-center justify-center" : "",
          isDanger
            ? isSelected
              ? "bg-background-fill-neutral-default border-border-danger-default"
              : "border-border-danger-default bg-transparent"
            : isDisabled
              ? isSelected
                ? "border-border-primary-disabled bg-transparent"
                : "border-border-neutral-disabled bg-transparent"
              : isSelected
                ? "bg-background-fill-neutral-default border-border-primary-default"
                : "bg-background-fill-neutral-default border-border-neutral-default",
          className ?? "",
        ].join(" ");

    const dotClasses = [
      "absolute left-1/2 top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full",
      isDanger
        ? "bg-background-fill-danger-default"
        : isDisabled
          ? "bg-background-fill-primary-disabled"
          : "bg-background-fill-primary-default",
    ].join(" ");

    return (
      <div ref={ref} className={rootClasses} {...props}>
        {isCheck ? (
          <Icon
            type="check"
            size="sm"
            className="text-icon-primary-invert"
            aria-hidden={true}
          />
        ) : isSelected ? (
          <div className={dotClasses} />
        ) : null}
      </div>
    );
  }
);

RadioControl.displayName = "Radio";

export default RadioControl;
