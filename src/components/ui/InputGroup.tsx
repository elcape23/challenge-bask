"use client";

import { forwardRef, useId, useState, type InputHTMLAttributes } from "react";
import Button from "./Button";

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
  /** Right-side action label */
  buttonLabel?: string;
  /** Right-side action click */
  onButtonClick?: () => void;
  /** Whether to show the right-side action button */
  showButton?: boolean;
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

const SIZE_HEIGHT = { lg: "h-12", md: "h-10", sm: "h-8" } as const;
const SIZE_PADDING = {
  lg: "px-4 py-3",
  md: "px-4 py-3",
  sm: "px-3 py-2",
} as const;
const SIZE_TEXT = {
  lg: "text-body-01",
  md: "text-body-01",
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
      buttonLabel = "Apply",
      onButtonClick,
      showButton = true,
      id: externalId,
      ...inputProps
    },
    ref
  ) => {
    const autoId = useId();
    const inputId = externalId ?? autoId;
    const [isActive, setIsActive] = useState(false);
    const isDisabled = state === "disabled" || disabled;
    const isSuccess = state === "success";
    const isDanger = state === "danger";
    const showAttachedIcon = isSuccess || isDanger;
    const visualState =
      state === "default" && isActive ? "pressed" : state;

    if (
      visualState === "default" ||
      visualState === "focus" ||
      visualState === "hover" ||
      visualState === "pressed" ||
      visualState === "disabled"
    ) {
      const s = size;
      const isFocus = visualState === "focus";
      const containerClasses =
        visualState === "hover"
          ? "bg-background-surface-neutral-hover border-border-neutral-hover"
          : visualState === "pressed"
            ? "bg-background-default-default border-[var(--color-neutral-800)]"
            : visualState === "disabled"
              ? "border-border-neutral-disabled bg-background-surface-neutral-default cursor-not-allowed opacity-90"
              : "bg-background-default-default border-border-neutral-default";
      const textClasses =
        visualState === "hover"
          ? "text-text-neutral-hover placeholder:text-text-neutral-hover"
          : visualState === "pressed"
            ? "text-text-neutral-pressed placeholder:text-text-neutral-pressed"
            : visualState === "disabled"
              ? "text-text-neutral-disabled placeholder:text-text-neutral-disabled"
              : "text-text-neutral-default placeholder:text-text-neutral-placeholder";

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

          <div
            className={[
              CONTAINER_BASE,
              SIZE_HEIGHT[s],
              containerClasses,
              isFocus ? "shadow-focus border-border-primary-default" : "",
            ].join(" ")}
          >
            <div className={["flex min-w-0 flex-1 items-center", SIZE_PADDING[s]].join(" ")}>
              <input
                ref={ref}
                id={inputId}
                disabled={isDisabled}
                className={[
                  "flex-1 min-w-0 bg-transparent outline-none",
                  SIZE_TEXT[s],
                  textClasses,
                ].join(" ")}
                placeholder={placeholder}
                autoFocus={isFocus}
                {...inputProps}
                onFocus={(event) => {
                  setIsActive(true);
                  inputProps.onFocus?.(event);
                }}
                onBlur={(event) => {
                  setIsActive(false);
                  inputProps.onBlur?.(event);
                }}
              />
            </div>
            {showButton ? (
              <div className="shrink-0 px-4">
                <Button
                  size="sm"
                  variant="neutral"
                  appearance="link"
                  disabled={isDisabled}
                  onClick={onButtonClick}
                >
                  {buttonLabel}
                </Button>
              </div>
            ) : null}
          </div>
          <p
            id={`${inputId}-feedback`}
            className="mt-1 min-h-3 px-3 text-body-03 text-transparent"
            aria-hidden="true"
          >
            {" "}
          </p>
        </div>
      );
    }

    if (showAttachedIcon) {
      const s = size;
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
                "flex items-center justify-center shrink-0 w-12 rounded-r-md rounded-l-none border-y border-r border-l-0",
                SIZE_HEIGHT[s],
                isSuccess
                  ? "bg-background-surface-success-default border-border-success-default text-icon-success-default"
                  : "border bg-background-surface-danger-default border-border-danger-default text-icon-danger-default",
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
              "mt-1 min-h-3 px-3 text-body-03",
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

  }
);

InputGroup.displayName = "InputGroup";
export default InputGroup;
