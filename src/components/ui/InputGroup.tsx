"use client";

import { forwardRef, useId, type InputHTMLAttributes } from "react";
import Input from "./Input";

export type InputGroupState =
  | "default"
  | "hover"
  | "pressed"
  | "focus"
  | "disabled"
  | "success"
  | "danger";

export interface InputGroupProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  /** Visual/interaction state for the group */
  state?: InputGroupState;
  /** Size variant */
  size?: "lg" | "md" | "sm";
  /** Placeholder text */
  placeholder?: string;
  /** Feedback text below (shown for success/danger) */
  feedback?: string;
  /** Label above the input */
  label?: string;
  /** Additional class for the root */
  className?: string;
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function BanIcon({ className }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m4.9 4.9 14.2 14.2" />
    </svg>
  );
}

const CONTAINER_BASE =
  "flex items-center rounded-md border w-full transition-colors";

const STATE_STYLES: Record<
  Exclude<InputGroupState, "default" | "focus">,
  { container: string; text: string }
> = {
  hover: {
    container:
      "bg-background-surface-neutral-hover border-border-neutral-hover",
    text: "text-text-neutral-hover",
  },
  pressed: {
    container:
      "bg-[var(--color-background-default-default)] border-[var(--color-neutral-800)]",
    text: "text-text-neutral-pressed",
  },
  disabled: {
    container:
      "border-border-neutral-disabled bg-background-surface-neutral-default cursor-not-allowed opacity-90",
    text: "text-text-neutral-disabled",
  },
  success: {
    container:
      "bg-background-surface-success-default border-border-success-default",
    text: "text-text-success-default",
  },
  danger: {
    container:
      "bg-background-surface-danger-default border-border-danger-default",
    text: "text-text-danger-default",
  },
};

const SIZE_HEIGHT = { lg: "h-12", md: "h-10", sm: "h-8" } as const;
const SIZE_PADDING = {
  lg: "px-4 py-3",
  md: "px-3 py-3",
  sm: "px-3 py-2",
} as const;
const SIZE_TEXT = {
  lg: "text-body-01",
  md: "text-body-02",
  sm: "text-body-02",
} as const;

const InputGroup = forwardRef<HTMLInputElement, InputGroupProps>(
  (
    {
      state = "default",
      size = "md",
      placeholder = "Placeholder",
      feedback = "Input feedback",
      label,
      disabled,
      className,
      id: externalId,
      ...inputProps
    },
    ref
  ) => {
    const autoId = useId();
    const inputId = externalId ?? autoId;
    const isDisabled = state === "disabled" || disabled;
    const isSuccess = state === "success";
    const isDanger = state === "danger";
    const showAttachedIcon = isSuccess || isDanger;

    if (state === "default" || state === "focus") {
      return (
        <Input
          ref={ref}
          id={inputId}
          size={size}
          label={label}
          placeholder={placeholder}
          disabled={disabled}
          className={className}
          autoFocus={state === "focus"}
          {...inputProps}
        />
      );
    }

    if (showAttachedIcon) {
      const s = size;
      const inputState = isSuccess ? "success" : "error";
      return (
        <div className={`flex flex-col ${className ?? ""}`}>
          {label && (
            <label
              htmlFor={inputId}
              className={`${
                s === "lg"
                  ? "text-body-01 font-medium"
                  : "text-body-02 font-medium"
              } mb-1 text-text-neutral-default`}
            >
              {label}
            </label>
          )}
          <div className="flex items-stretch">
            <div
              className={[
                "flex items-center flex-1 min-w-0 rounded-l-md rounded-r-none border border-r-0",
                SIZE_HEIGHT[s],
                SIZE_PADDING[s],
                isSuccess
                  ? "bg-background-surface-success-default border-border-success-default"
                  : "bg-background-surface-danger-default border-border-danger-default",
                "focus-within:shadow-focus",
              ].join(" ")}
            >
              <input
                ref={ref}
                id={inputId}
                disabled={disabled}
                aria-invalid={isDanger || undefined}
                aria-describedby={`${inputId}-feedback`}
                className={[
                  "flex-1 min-w-0 bg-transparent outline-none",
                  SIZE_TEXT[s],
                  isSuccess
                    ? "text-text-success-default placeholder:text-text-success-default/60"
                    : "text-text-danger-default placeholder:text-text-danger-default/60",
                ].join(" ")}
                placeholder={placeholder}
                {...inputProps}
              />
            </div>
            <div
              className={[
                "flex items-center justify-center shrink-0 w-12 rounded-r-md rounded-l-none border",
                SIZE_HEIGHT[s],
                isSuccess
                  ? "bg-background-surface-success-default border-border-success-default text-icon-success-default"
                  : "bg-background-surface-danger-default border-border-danger-default text-icon-danger-default",
              ].join(" ")}
              aria-hidden
            >
              {isSuccess ? (
                <CheckIcon className="size-5" />
              ) : (
                <BanIcon className="size-5" />
              )}
            </div>
          </div>
          <p
            id={`${inputId}-feedback`}
            className={[
              "mt-1 text-body-03",
              isSuccess
                ? "text-text-success-default"
                : "text-text-danger-default",
            ].join(" ")}
            role={isDanger ? "alert" : undefined}
          >
            {feedback}
          </p>
        </div>
      );
    }

    const styles = STATE_STYLES[state];
    const s = size;

    return (
      <div className={`flex flex-col ${className ?? ""}`}>
        {label && (
          <label
            htmlFor={inputId}
            className={`${
              s === "lg" ? "text-body-01 font-medium" : "text-body-02 font-medium"
            } mb-1 ${
              isDisabled
                ? "text-text-neutral-disabled"
                : "text-text-neutral-default"
            }`}
          >
            {label}
          </label>
        )}

        <div
          className={[
            CONTAINER_BASE,
            SIZE_HEIGHT[s],
            SIZE_PADDING[s],
            styles.container,
            "flex-1 min-w-0",
          ].join(" ")}
        >
          <span
            className={[
              "flex-1 min-w-0 truncate",
              SIZE_TEXT[s],
              styles.text,
            ].join(" ")}
          >
            {placeholder}
          </span>
        </div>
      </div>
    );
  }
);

InputGroup.displayName = "InputGroup";
export default InputGroup;
