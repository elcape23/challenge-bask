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
  size?: "md" | "sm";
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

const SIZE_RADIUS = { md: "rounded-md", sm: "rounded-sm" } as const;
const SIZE_PADDING = { md: "px-4 py-3", sm: "px-3 py-2" } as const;
const SIZE_TEXT = { md: "text-body-01", sm: "text-body-02" } as const;

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
    const visualState = state === "default" && isActive ? "pressed" : state;
    const isFocus = visualState === "focus";

    const containerClasses =
      isDisabled
        ? "border-border-neutral-disabled cursor-not-allowed"
        : isSuccess
          ? "bg-background-surface-success-default border-border-success-default"
          : isDanger
            ? "bg-background-surface-danger-default border-border-danger-default"
            : visualState === "hover"
              ? "bg-background-surface-neutral-hover border-border-neutral-hover"
              : visualState === "pressed"
                ? "bg-background-default-default border-[var(--color-neutral-800)]"
                : isFocus
                  ? "bg-background-default-default border-border-neutral-default shadow-focus"
                  : "bg-background-default-default border-border-neutral-default";

    const textClasses =
      isDisabled
        ? "text-text-neutral-disabled placeholder:text-text-neutral-disabled"
        : isSuccess
          ? "text-text-success-default placeholder:text-text-success-default/60"
          : isDanger
            ? "text-text-danger-default placeholder:text-text-danger-default/60"
            : visualState === "hover"
              ? "text-text-neutral-hover placeholder:text-text-neutral-hover"
              : visualState === "pressed"
                ? "text-text-neutral-pressed placeholder:text-text-neutral-pressed"
                : "text-text-neutral-default placeholder:text-text-neutral-placeholder";

    const showFeedback = isSuccess || isDanger;
    const feedbackClasses = isSuccess
      ? "text-text-success-default"
      : "text-text-danger-default";

    return (
      <div className={`flex flex-col ${className ?? ""}`}>
        {label && (
          <label
            htmlFor={inputId}
            className="text-body-02 font-medium mb-1 text-text-neutral-default"
          >
            {label}
          </label>
        )}

        <div
          className={[
            "flex w-full items-center justify-between border transition-colors gap-[10px]",
            SIZE_RADIUS[size],
            containerClasses,
          ].join(" ")}
        >
          <div className={["flex min-w-0 flex-1 items-center", SIZE_PADDING[size]].join(" ")}>
            <input
              ref={ref}
              id={inputId}
              disabled={isDisabled}
              aria-invalid={isDanger || undefined}
              aria-describedby={showFeedback ? `${inputId}-feedback` : undefined}
              className={[
                "flex-1 min-w-0 bg-transparent outline-none",
                SIZE_TEXT[size],
                textClasses,
              ].join(" ")}
              placeholder={placeholder}
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

          {isSuccess && (
            <span className="shrink-0 pr-4 text-icon-success-default" aria-hidden>
              <CheckIcon className="size-5" />
            </span>
          )}

          {showButton && !isSuccess && !isDanger && (
            <div className="shrink-0 pr-4">
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
          )}
        </div>

        <p
          id={`${inputId}-feedback`}
          className={[
            "px-3 py-1 text-body-03",
            showFeedback ? feedbackClasses : "text-transparent select-none",
          ].join(" ")}
          role={isDanger ? "alert" : undefined}
          aria-hidden={!showFeedback}
        >
          {showFeedback ? feedback : "\u00A0"}
        </p>
      </div>
    );
  }
);

InputGroup.displayName = "InputGroup";
export default InputGroup;
