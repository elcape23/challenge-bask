"use client";

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";

export type ButtonVariant = "neutral" | "primary" | "danger";
export type ButtonSize = "lg" | "sm" | "icon";
export type ButtonAppearance = "filled" | "outlined" | "link" | "ghost";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Color variant of the button */
  variant?: ButtonVariant;
  /** Size of the button */
  size?: ButtonSize;
  /** Visual style of the button */
  appearance?: ButtonAppearance;
  /** Icon placed before the label */
  leadingIcon?: ReactNode;
  /** Icon placed after the label */
  trailingIcon?: ReactNode;
}

const BASE =
  "inline-flex items-center justify-center font-medium transition-all duration-150 select-none focus-visible:outline-none cursor-pointer disabled:cursor-not-allowed";

const SHAPE = "rounded-full";

const SIZE_CLASSES: Record<Exclude<ButtonSize, "icon">, string> = {
  lg: "h-11 px-4 gap-2 text-body-01",
  sm: "h-9 px-4 gap-2 text-body-02",
};

const ICON_SIZE = "size-9";

const LINK_SIZE_CLASSES: Record<Exclude<ButtonSize, "icon">, string> = {
  lg: "text-body-01 gap-2",
  sm: "text-body-02 gap-1",
};

const VARIANT_STYLES: Record<string, string> = {
  "neutral-filled": [
    "bg-neutral-200 text-neutral-900",
    "hover:bg-neutral-300 hover:text-neutral-800",
    "focus-visible:shadow-focus",
    "active:bg-neutral-400 active:text-neutral-700",
    "disabled:bg-neutral-600 disabled:text-neutral-400 disabled:pointer-events-none",
  ].join(" "),

  "neutral-outlined": [
    "border border-neutral-400 bg-transparent text-neutral-900",
    "hover:bg-neutral-200 hover:text-neutral-800",
    "focus-visible:shadow-focus",
    "active:bg-neutral-300 active:text-neutral-700",
    "disabled:border-neutral-300 disabled:text-neutral-400 disabled:bg-transparent disabled:pointer-events-none",
  ].join(" "),

  "neutral-link": [
    "bg-transparent text-neutral-900 underline underline-offset-2",
    "hover:text-neutral-800",
    "active:text-neutral-700",
    "disabled:text-neutral-400 disabled:pointer-events-none",
  ].join(" "),

  "neutral-ghost": [
    "bg-transparent text-neutral-900",
    "hover:bg-neutral-200",
    "focus-visible:shadow-focus",
    "active:bg-neutral-300",
    "disabled:text-neutral-400 disabled:bg-transparent disabled:pointer-events-none",
  ].join(" "),

  "primary-filled": [
    "bg-primary-900 text-primary-100",
    "hover:bg-primary-800",
    "focus-visible:shadow-focus",
    "active:bg-primary-700",
    "disabled:bg-primary-200 disabled:pointer-events-none",
  ].join(" "),

  "primary-outlined": [
    "border border-primary-400 bg-transparent text-primary-900",
    "hover:bg-primary-100 hover:text-primary-800",
    "focus-visible:shadow-focus",
    "active:bg-primary-200 active:text-primary-700",
    "disabled:border-primary-200 disabled:text-primary-300 disabled:bg-transparent disabled:pointer-events-none",
  ].join(" "),

  "primary-link": [
    "bg-transparent text-primary-900 underline underline-offset-2",
    "hover:text-primary-800",
    "active:text-primary-700",
    "disabled:text-primary-300 disabled:pointer-events-none",
  ].join(" "),

  "primary-ghost": [
    "bg-transparent text-primary-900",
    "hover:bg-primary-100",
    "focus-visible:shadow-focus",
    "active:bg-primary-200",
    "disabled:text-primary-300 disabled:bg-transparent disabled:pointer-events-none",
  ].join(" "),

  "danger-filled": [
    "bg-danger-500 text-neutral-100",
    "hover:bg-danger-300",
    "focus-visible:shadow-focus",
    "active:bg-danger-400",
    "disabled:bg-danger-200 disabled:pointer-events-none",
  ].join(" "),

  "danger-outlined": [
    "border border-danger-400 bg-transparent text-danger-500",
    "hover:bg-danger-100 hover:text-danger-400",
    "focus-visible:shadow-focus",
    "active:bg-danger-200 active:text-danger-300",
    "disabled:border-danger-200 disabled:text-danger-200 disabled:bg-transparent disabled:pointer-events-none",
  ].join(" "),

  "danger-link": [
    "bg-transparent text-danger-500 underline underline-offset-2",
    "hover:text-danger-400",
    "active:text-danger-300",
    "disabled:text-danger-200 disabled:pointer-events-none",
  ].join(" "),

  "danger-ghost": [
    "bg-transparent text-danger-500",
    "hover:bg-danger-100",
    "focus-visible:shadow-focus",
    "active:bg-danger-200",
    "disabled:text-danger-200 disabled:bg-transparent disabled:pointer-events-none",
  ].join(" "),
};

const ICON_SIZE_CLASSES: Record<ButtonSize, string> = {
  lg: "[&_svg]:size-6",
  sm: "[&_svg]:size-5",
  icon: "[&_svg]:size-6",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "neutral",
      size = "lg",
      appearance = "filled",
      leadingIcon,
      trailingIcon,
      children,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const isLink = appearance === "link";
    const isIcon = size === "icon";

    const sizeClass = isLink
      ? LINK_SIZE_CLASSES[size === "icon" ? "lg" : size]
      : isIcon
        ? ICON_SIZE
        : SIZE_CLASSES[size];

    const shapeClass = isLink ? "" : SHAPE;

    const variantKey = `${variant}-${appearance}`;
    const colorClass =
      VARIANT_STYLES[variantKey] ?? VARIANT_STYLES["neutral-filled"];

    const iconClass = ICON_SIZE_CLASSES[size];

    const classes = [BASE, shapeClass, sizeClass, colorClass, iconClass, className]
      .filter(Boolean)
      .join(" ");

    return (
      <button
        ref={ref}
        className={classes}
        disabled={disabled}
        {...props}
      >
        {isIcon ? (
          leadingIcon ?? trailingIcon ?? children
        ) : (
          <>
            {leadingIcon}
            {children}
            {trailingIcon}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
