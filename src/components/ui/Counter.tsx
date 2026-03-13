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
      <path d="M5 12h14" />
    </svg>
  );
}

function PlusIcon({ className }: { className?: string }) {
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
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

/** Figma: 36×36 icon buttons, gap 8px (space-2) */
const SIZE_BUTTON: Record<CounterSize, string> = {
  md: "size-9",
  sm: "size-8",
};

/** Figma: Body 01 Medium for number display */
const SIZE_VALUE: Record<CounterSize, string> = {
  md: "text-body-01 font-medium min-w-6",
  sm: "text-body-02 font-medium min-w-5",
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
      "flex items-center justify-center shrink-0 rounded-full transition-colors",
      "focus-visible:outline-none focus-visible:shadow-focus",
      "cursor-pointer border-0",
      "disabled:cursor-not-allowed",
    ].join(" ");

    const btnDisabled = disabled
      ? "text-text-neutral-disabled"
      : "text-icon-neutral-secondary hover:text-icon-neutral-hover active:text-icon-neutral-pressed";

    return (
      <div
        ref={ref}
        role="group"
        aria-label="Counter"
        className={[
          "inline-flex items-center gap-2 rounded-full overflow-hidden",
          disabled
            ? "border border-border-neutral-disabled cursor-not-allowed opacity-50"
            : "border border-border-neutral-default",
          className ?? "",
        ].join(" ")}
        {...props}
      >
        {/* Decrement — left */}
        <button
          type="button"
          aria-label="Decrease"
          disabled={disabled || atMin}
          onClick={decrement}
          className={[btnBase, SIZE_BUTTON[size], btnDisabled].join(" ")}
        >
          <MinusIcon />
        </button>

        {/* Value display — center */}
        <span
          aria-live="polite"
          aria-valuenow={currentValue}
          aria-valuemin={min}
          aria-valuemax={max}
          className={[
            "flex items-center justify-center select-none shrink-0",
            disabled ? "text-text-neutral-disabled" : "text-text-neutral-default",
            SIZE_VALUE[size],
          ].join(" ")}
        >
          {currentValue}
        </span>

        {/* Increment — right */}
        <button
          type="button"
          aria-label="Increase"
          disabled={disabled || atMax}
          onClick={increment}
          className={[btnBase, SIZE_BUTTON[size], btnDisabled].join(" ")}
        >
          <PlusIcon />
        </button>
      </div>
    );
  }
);

Counter.displayName = "Counter";
export default Counter;
