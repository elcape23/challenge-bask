"use client";

import {
  forwardRef,
  useId,
  type InputHTMLAttributes,
  type ReactNode,
} from "react";

export type InputSize = "lg" | "md" | "sm";
export type InputState = "default" | "error" | "success";

export interface InputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "size"
> {
  /** Size variant */
  size?: InputSize;
  /** Validation state */
  state?: InputState;
  /** Label text displayed above the input */
  label?: string;
  /** Helper text displayed below the input */
  helperText?: string;
  /** Error message — replaces helper text when state is "error" */
  errorMessage?: string;
  /** Leading icon inside the input */
  leadingIcon?: ReactNode;
  /** Trailing icon inside the input */
  trailingIcon?: ReactNode;
}

/** Figma: md 48px (py-3+body01+py-3), sm 32px (py-2+body02+py-2) */
const SIZE_HEIGHT: Record<InputSize, string> = {
  lg: "h-12",
  md: "h-12",
  sm: "h-8",
};

/** Figma md: px-4 py-3 (16/12), sm: px-3 py-2 (12/8) */
const SIZE_PADDING: Record<InputSize, string> = {
  lg: "px-4 py-3",
  md: "px-4 py-3",
  sm: "px-3 py-2",
};

/** Figma md: Body/01 16px, sm: Body/02 13px */
const SIZE_TEXT: Record<InputSize, string> = {
  lg: "text-body-01",
  md: "text-body-01",
  sm: "text-body-02",
};

/** Figma: 20×20 icon for both sizes */
const SIZE_ICON: Record<InputSize, string> = {
  lg: "[&_svg]:size-5",
  md: "[&_svg]:size-5",
  sm: "[&_svg]:size-5",
};

/** Figma: space-3 (12px) for lg/md, space-2 (8px) for sm */
const SIZE_GAP: Record<InputSize, string> = {
  lg: "gap-3",
  md: "gap-3",
  sm: "gap-2",
};

const LABEL_TEXT: Record<InputSize, string> = {
  lg: "text-body-01 font-medium",
  md: "text-body-02 font-medium",
  sm: "text-body-02 font-medium",
};

/** Figma: Body/03 11px for feedback */
const HELPER_TEXT: Record<InputSize, string> = {
  lg: "text-body-03",
  md: "text-body-03",
  sm: "text-body-03",
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = "md",
      state = "default",
      label,
      helperText,
      errorMessage,
      leadingIcon,
      trailingIcon,
      disabled,
      className,
      id: externalId,
      ...props
    },
    ref,
  ) => {
    const autoId = useId();
    const inputId = externalId ?? autoId;
    const helperId = `${inputId}-helper`;
    const isError = state === "error";
    const isSuccess = state === "success";
    const bottomText = isError ? errorMessage : helperText;

    const borderColor = isError
      ? "border-border-danger-default focus-within:border-border-danger-default"
      : isSuccess
        ? "border-border-success-default focus-within:border-border-success-default"
        : "border-border-neutral-default focus-within:border-border-primary-default";

    const bgColor = isError
      ? "bg-background-surface-danger-default"
      : isSuccess
        ? "bg-background-surface-success-default"
        : "bg-[var(--color-background-default-default)]";

    return (
      <div className={`flex flex-col ${className ?? ""}`}>
        {label && (
          <label
            htmlFor={inputId}
            className={`${LABEL_TEXT[size]} mb-1 ${
              disabled
                ? "text-text-neutral-disabled"
                : "text-text-neutral-default"
            }`}
          >
            {label}
          </label>
        )}

        <div
          className={[
            "flex items-center justify-between rounded-md border transition-colors",
            SIZE_HEIGHT[size],
            SIZE_PADDING[size],
            SIZE_GAP[size],
            disabled
              ? "border-border-neutral-disabled bg-background-surface-neutral-default cursor-not-allowed"
              : bgColor + " " + borderColor,
            "focus-within:shadow-focus",
          ].join(" ")}
        >
          {leadingIcon && (
            <span
              className={`shrink-0 ${SIZE_ICON[size]} ${
                disabled
                  ? "text-icon-neutral-disabled"
                  : "text-icon-neutral-secondary"
              }`}
            >
              {leadingIcon}
            </span>
          )}

          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            aria-invalid={isError || undefined}
            aria-describedby={bottomText ? helperId : undefined}
          className={[
            "flex-1 min-w-0 bg-transparent outline-none",
            SIZE_TEXT[size],
            disabled
              ? "text-text-neutral-disabled cursor-not-allowed"
              : isError
                ? "text-text-danger-default"
                : isSuccess
                  ? "text-text-success-default"
                  : "text-text-neutral-default",
            "placeholder:text-text-neutral-placeholder",
          ].join(" ")}
            {...props}
          />

          {trailingIcon && (
            <span
              className={`shrink-0 ${SIZE_ICON[size]} ${
                disabled
                  ? "text-icon-neutral-disabled"
                  : isError
                    ? "text-icon-danger-default"
                    : isSuccess
                      ? "text-icon-success-default"
                      : "text-icon-neutral-secondary"
              }`}
            >
              {trailingIcon}
            </span>
          )}
        </div>

        {bottomText && (
          <p
            id={helperId}
            className={[
              "mt-1 px-3 py-1",
              HELPER_TEXT[size],
              disabled
                ? "text-text-neutral-disabled"
                : isError
                  ? "text-text-danger-default"
                  : isSuccess
                    ? "text-text-success-default"
                    : "text-text-neutral-secondary",
            ].join(" ")}
            role={isError ? "alert" : undefined}
          >
            {bottomText}
          </p>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";
export default Input;
