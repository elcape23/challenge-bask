"use client";

import {
  forwardRef,
  useId,
  type InputHTMLAttributes,
  type ReactNode,
} from "react";

export type InputSize = "md" | "sm";
export type InputState = "default" | "hover" | "active" | "error" | "success";

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
  /** Fixed width for Figma-accurate demo cases or constrained layouts */
  width?: number | string;
}

const SIZE_RADIUS: Record<InputSize, string> = {
  md: "rounded-md",
  sm: "rounded-sm",
};

const SIZE_PADDING: Record<InputSize, string> = {
  md: "px-4 py-3",
  sm: "px-3 py-2",
};

const SIZE_TEXT: Record<InputSize, string> = {
  md: "text-body-01",
  sm: "text-body-02",
};

const SIZE_GAP: Record<InputSize, string> = {
  md: "gap-[10px]",
  sm: "gap-[10px]",
};

const LABEL_TEXT: Record<InputSize, string> = {
  md: "text-body-02 font-medium",
  sm: "text-body-02 font-medium",
};

const HELPER_TEXT: Record<InputSize, string> = {
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
      width,
      disabled,
      className,
      id: externalId,
      ...props
    },
    ref
  ) => {
    const autoId = useId();
    const inputId = externalId ?? autoId;
    const helperId = `${inputId}-helper`;
    const isHover = state === "hover";
    const isActive = state === "active";
    const isError = state === "error";
    const isSuccess = state === "success";
    const bottomText = isError ? errorMessage : helperText;

    const borderColor = isError
      ? "border-border-danger-default focus-within:border-border-danger-default"
      : isHover
        ? "border-border-neutral-hover focus-within:border-border-primary-default"
      : isActive
        ? "border-[var(--color-neutral-800)] focus-within:border-[var(--color-neutral-800)]"
      : isSuccess
          ? "border-border-success-default focus-within:border-border-success-default"
          : "border-border-neutral-default focus-within:border-border-primary-default";

    const bgColor = isError
      ? "bg-background-surface-danger-default"
      : isSuccess
        ? "bg-background-surface-success-default"
        : isHover
          ? "bg-background-surface-neutral-hover"
          : "bg-[var(--color-background-default-default)]";

    return (
      <div
        className={`flex flex-col ${className ?? ""}`}
        style={width ? { width } : undefined}
      >
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
            "flex items-center border transition-colors",
            SIZE_RADIUS[size],
            SIZE_PADDING[size],
            SIZE_GAP[size],
            disabled
              ? "border-border-neutral-disabled cursor-not-allowed"
              : `${bgColor} ${borderColor}`,
            "focus-within:shadow-focus",
          ].join(" ")}
        >
          {leadingIcon && (
            <span
              className={`flex shrink-0 items-center justify-center ${
                disabled
                  ? "text-icon-neutral-disabled"
                  : isError
                    ? "text-icon-danger-default"
                    : isSuccess
                      ? "text-icon-success-default"
                      : isActive
                        ? "text-icon-neutral-pressed"
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
              "min-w-0 flex-1 bg-transparent outline-none",
              SIZE_TEXT[size],
              disabled
                ? "text-text-neutral-disabled cursor-not-allowed"
                : isError
                  ? "text-text-danger-default"
                : isSuccess
                  ? "text-text-success-default"
                  : isActive
                    ? "text-text-neutral-pressed"
                    : "text-text-neutral-default",
              "placeholder:text-text-neutral-placeholder",
            ].join(" ")}
            {...props}
          />

          {trailingIcon && (
            <span
              className={`flex shrink-0 items-center justify-center ${
                disabled
                  ? "text-icon-neutral-disabled"
                  : isError
                    ? "text-icon-danger-default"
                    : isSuccess
                      ? "text-icon-success-default"
                      : isActive
                        ? "text-icon-neutral-pressed"
                        : isHover
                          ? "text-icon-neutral-default"
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
              "px-3 py-1",
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
  }
);

Input.displayName = "Input";
export default Input;
