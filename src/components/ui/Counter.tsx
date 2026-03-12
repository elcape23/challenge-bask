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

function MinusIcon({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M3 8H13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PlusIcon({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M8 3V13M3 8H13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

const SIZE_BUTTON: Record<CounterSize, string> = {
  md: "size-10",
  sm: "size-8",
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

const SIZE_BUTTON_TEXT: Record<CounterSize, string> = {
  md: "text-body-01 font-medium",
  sm: "text-body-02 font-medium",
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
      "cursor-pointer",
      "disabled:text-icon-neutral-disabled disabled:cursor-not-allowed",
    ].join(" ");

    return (
      <div
        ref={ref}
        role="group"
        aria-label="Counter"
        className={[
          "inline-flex items-center rounded-md overflow-hidden",
          disabled
            ? "border border-border-neutral-disabled cursor-not-allowed"
            : "border border-border-neutral-default",
          className ?? "",
        ].join(" ")}
        {...props}
      >
        <button
          type="button"
          aria-label="Decrease"
          disabled={disabled || atMin}
          onClick={decrement}
          className={[
            btnBase,
            SIZE_BUTTON[size],
            SIZE_BUTTON_TEXT[size],
            disabled
              ? "border-r border-border-neutral-disabled"
              : "border-r border-border-neutral-default hover:bg-background-surface-neutral-hover active:bg-background-fill-neutral-default",
            "text-icon-neutral-secondary",
          ].join(" ")}
        >
          <MinusIcon />
        </button>

        <span
          aria-live="polite"
          aria-valuenow={currentValue}
          aria-valuemin={min}
          aria-valuemax={max}
          className={[
            "text-center select-none",
            disabled ? "text-text-neutral-disabled" : "text-text-neutral-default",
            SIZE_VALUE_TEXT[size],
            SIZE_VALUE_MIN_W[size],
            SIZE_VALUE_PADDING[size],
          ].join(" ")}
        >
          {currentValue}
        </span>

        <button
          type="button"
          aria-label="Increase"
          disabled={disabled || atMax}
          onClick={increment}
          className={[
            btnBase,
            SIZE_BUTTON[size],
            SIZE_BUTTON_TEXT[size],
            disabled
              ? "border-l border-border-neutral-disabled"
              : "border-l border-border-neutral-default hover:bg-background-surface-neutral-hover active:bg-background-fill-neutral-default",
            "text-icon-neutral-secondary",
          ].join(" ")}
        >
          <PlusIcon />
        </button>
      </div>
    );
  }
);

Counter.displayName = "Counter";
export default Counter;
