"use client";

import {
  forwardRef,
  useState,
  useCallback,
  type HTMLAttributes,
} from "react";

export type CounterSize = "md" | "sm";

export interface CounterProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  /** Size variant */
  size?: CounterSize;
  /** Controlled value */
  value?: number;
  /** Uncontrolled initial value */
  defaultValue?: number;
  /** Minimum allowed value */
  min?: number;
  /** Maximum allowed value */
  max?: number;
  /** Step increment */
  step?: number;
  /** Disables the entire counter */
  disabled?: boolean;
  /** Called when the value changes */
  onChange?: (value: number) => void;
}

function ChevronUpIcon({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="m18 15-6-6-6 6" />
    </svg>
  );
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

const SIZE_BUTTON: Record<CounterSize, string> = {
  md: "h-5 w-10",
  sm: "h-4 w-8",
};

const SIZE_VALUE_TEXT: Record<CounterSize, string> = {
  md: "text-body-02 font-medium",
  sm: "text-body-03 font-medium",
};

const SIZE_VALUE_MIN_W: Record<CounterSize, string> = {
  md: "min-w-12",
  sm: "min-w-10",
};

const SIZE_VALUE_PADDING: Record<CounterSize, string> = {
  md: "px-3 py-2",
  sm: "px-2 py-2",
};

const Counter = forwardRef<HTMLDivElement, CounterProps>(
  (
    {
      size = "md",
      value: controlledValue,
      defaultValue = 0,
      min = 0,
      max = 99,
      step = 1,
      disabled = false,
      onChange,
      className,
      ...props
    },
    ref
  ) => {
    const isControlled = controlledValue !== undefined;
    const [internalValue, setInternalValue] = useState(defaultValue);
    const currentValue = isControlled ? controlledValue : internalValue;

    const clamp = useCallback(
      (v: number) => Math.min(max, Math.max(min, v)),
      [min, max]
    );

    const updateValue = useCallback(
      (next: number) => {
        const clamped = clamp(next);
        if (clamped === currentValue) return;
        if (!isControlled) setInternalValue(clamped);
        onChange?.(clamped);
      },
      [clamp, currentValue, isControlled, onChange]
    );

    const decrement = useCallback(
      () => updateValue(currentValue - step),
      [currentValue, step, updateValue]
    );

    const increment = useCallback(
      () => updateValue(currentValue + step),
      [currentValue, step, updateValue]
    );

    const atMin = currentValue <= min;
    const atMax = currentValue >= max;

    const btnBase = [
      "flex items-center justify-center shrink-0 transition-colors",
      "focus-visible:outline-none focus-visible:shadow-focus",
      "cursor-pointer border-0",
      "disabled:cursor-not-allowed",
    ].join(" ");

    const btnDisabled =
      disabled
        ? "text-icon-neutral-disabled border-border-neutral-disabled"
        : "text-icon-neutral-secondary border-border-neutral-default hover:bg-background-surface-neutral-hover active:bg-background-fill-neutral-default";

    return (
      <div
        ref={ref}
        role="group"
        aria-label="Counter"
        className={[
          "inline-flex items-stretch rounded-md overflow-hidden",
          disabled
            ? "border border-border-neutral-disabled cursor-not-allowed opacity-50"
            : "border border-border-neutral-default",
          className ?? "",
        ].join(" ")}
        {...props}
      >
        {/* Value display — left side */}
        <span
          aria-live="polite"
          aria-valuenow={currentValue}
          aria-valuemin={min}
          aria-valuemax={max}
          className={[
            "flex items-center justify-center select-none",
            disabled ? "text-text-neutral-disabled" : "text-text-neutral-default",
            SIZE_VALUE_TEXT[size],
            SIZE_VALUE_MIN_W[size],
            SIZE_VALUE_PADDING[size],
          ].join(" ")}
        >
          {currentValue}
        </span>

        {/* Buttons — right side, stacked vertically: + on top, − on bottom */}
        <div className="flex flex-col border-l border-inherit">
          <button
            type="button"
            aria-label="Increase"
            disabled={disabled || atMax}
            onClick={increment}
            className={[
              btnBase,
              SIZE_BUTTON[size],
              "border-b border-inherit",
              btnDisabled,
            ].join(" ")}
          >
            <ChevronUpIcon />
          </button>
          <button
            type="button"
            aria-label="Decrease"
            disabled={disabled || atMin}
            onClick={decrement}
            className={[btnBase, SIZE_BUTTON[size], btnDisabled].join(" ")}
          >
            <ChevronDownIcon />
          </button>
        </div>
      </div>
    );
  }
);

Counter.displayName = "Counter";
export default Counter;
