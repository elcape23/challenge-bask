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
    "bg-background-fill-neutral-default text-text-neutral-default",
    "hover:bg-background-fill-neutral-hover hover:text-text-neutral-hover",
    "focus-visible:shadow-focus",
    "active:bg-background-fill-neutral-pressed active:text-text-neutral-pressed",
    "disabled:bg-background-fill-neutral-disabled disabled:text-text-neutral-disabled disabled:pointer-events-none",
  ].join(" "),

  "neutral-outlined": [
    "border border-border-neutral-default bg-transparent text-text-neutral-default",
    "hover:bg-background-fill-neutral-default hover:text-text-neutral-hover",
    "focus-visible:shadow-focus",
    "active:bg-background-fill-neutral-hover active:text-text-neutral-pressed",
    "disabled:border-border-neutral-disabled disabled:text-text-neutral-disabled disabled:bg-transparent disabled:pointer-events-none",
  ].join(" "),

  "neutral-link": [
    "bg-transparent text-text-neutral-default underline underline-offset-2",
    "hover:text-text-neutral-hover",
    "active:text-text-neutral-pressed",
    "disabled:text-text-neutral-disabled disabled:pointer-events-none",
  ].join(" "),

  "neutral-ghost": [
    "bg-transparent text-text-neutral-default",
    "hover:bg-background-fill-neutral-default",
    "focus-visible:shadow-focus",
    "active:bg-background-fill-neutral-hover",
    "disabled:text-text-neutral-disabled disabled:bg-transparent disabled:pointer-events-none",
  ].join(" "),

  "primary-filled": [
    "bg-background-fill-primary-default text-text-primary-invert",
    "hover:bg-background-fill-primary-hover",
    "focus-visible:shadow-focus",
    "active:bg-background-fill-primary-pressed",
    "disabled:bg-background-fill-primary-disabled disabled:pointer-events-none",
  ].join(" "),

  "primary-outlined": [
    "border border-border-primary-default bg-transparent text-text-primary-default",
    "hover:bg-primary-100 hover:text-text-primary-default",
    "focus-visible:shadow-focus",
    "active:bg-primary-200 active:text-text-primary-default",
    "disabled:border-border-primary-disabled disabled:text-text-primary-disabled disabled:bg-transparent disabled:pointer-events-none",
  ].join(" "),

  "primary-link": [
    "bg-transparent text-text-primary-default underline underline-offset-2",
    "hover:text-primary-800",
    "active:text-primary-700",
    "disabled:text-text-primary-disabled disabled:pointer-events-none",
  ].join(" "),

  "primary-ghost": [
    "bg-transparent text-text-primary-default",
    "hover:bg-primary-100",
    "focus-visible:shadow-focus",
    "active:bg-primary-200",
    "disabled:text-text-primary-disabled disabled:bg-transparent disabled:pointer-events-none",
  ].join(" "),

  "danger-filled": [
    "bg-background-fill-danger-default text-text-neutral-invert",
    "hover:bg-background-fill-danger-hover",
    "focus-visible:shadow-focus",
    "active:bg-background-fill-danger-pressed",
    "disabled:bg-background-fill-danger-disabled disabled:pointer-events-none",
  ].join(" "),

  "danger-outlined": [
    "border border-border-danger-default bg-transparent text-text-danger-default",
    "hover:bg-danger-100 hover:text-danger-400",
    "focus-visible:shadow-focus",
    "active:bg-danger-200 active:text-danger-300",
    "disabled:border-danger-200 disabled:text-text-danger-disabled disabled:bg-transparent disabled:pointer-events-none",
  ].join(" "),

  "danger-link": [
    "bg-transparent text-text-danger-default underline underline-offset-2",
    "hover:text-danger-400",
    "active:text-danger-300",
    "disabled:text-text-danger-disabled disabled:pointer-events-none",
  ].join(" "),

  "danger-ghost": [
    "bg-transparent text-text-danger-default",
    "hover:bg-danger-100",
    "focus-visible:shadow-focus",
    "active:bg-danger-200",
    "disabled:text-text-danger-disabled disabled:bg-transparent disabled:pointer-events-none",
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
