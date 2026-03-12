"use client";

import {
  forwardRef,
  useRef,
  useState,
  useEffect,
  useCallback,
  type ButtonHTMLAttributes,
  type ChangeEvent,
} from "react";

export type SwitchSize = "md" | "sm";
export type SwitchSide = "left" | "right";

export interface SwitchProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  /** Size variant */
  size?: SwitchSize;
  /** Label position relative to track */
  side?: SwitchSide;
  /** Label text */
  label?: string;
  /** Description text below the label */
  description?: string;
  /** Controlled checked state */
  checked?: boolean;
  /** Default checked state (uncontrolled) */
  defaultChecked?: boolean;
  /** Callback when checked state changes */
  onChange?: (checked: boolean) => void;
}

const SIZE_TRACK: Record<SwitchSize, string> = {
  md: "w-11 h-6",
  sm: "w-9 h-5",
};

const SIZE_THUMB: Record<SwitchSize, string> = {
  md: "size-5",
  sm: "size-4",
};

const SIZE_PADDING: Record<SwitchSize, string> = {
  md: "p-0.5",
  sm: "p-0.5",
};

const SIZE_GAP: Record<SwitchSize, string> = {
  md: "gap-3",
  sm: "gap-2",
};

const LABEL_TEXT: Record<SwitchSize, string> = {
  md: "text-body-01 font-regular",
  sm: "text-body-02 font-regular",
};

const DESC_TEXT: Record<SwitchSize, string> = {
  md: "text-body-02",
  sm: "text-body-03",
};

const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  (
    {
      size = "md",
      side = "left",
      label,
      description,
      checked,
      defaultChecked,
      onChange,
      disabled,
      className,
      onClick,
      onKeyDown,
      ...restProps
    },
    forwardedRef
  ) => {
    const innerRef = useRef<HTMLButtonElement>(null);
    const isControlled = checked !== undefined;
    const [internalChecked, setInternalChecked] = useState(
      defaultChecked ?? false
    );

    const resolvedChecked = isControlled ? checked : internalChecked;

    useEffect(() => {
      if (forwardedRef) {
        if (typeof forwardedRef === "function") {
          forwardedRef(innerRef.current);
        } else {
          (
            forwardedRef as React.MutableRefObject<HTMLButtonElement | null>
          ).current = innerRef.current;
        }
      }
    }, [forwardedRef]);

    const handleClick = useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        if (disabled) return;
        if (!isControlled) setInternalChecked((prev) => !prev);
        onChange?.(!resolvedChecked);
        onClick?.(e);
      },
      [disabled, isControlled, resolvedChecked, onChange, onClick]
    );

    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLButtonElement>) => {
        if (disabled) return;
        if (e.key === " ") {
          e.preventDefault();
          if (!isControlled) setInternalChecked((prev) => !prev);
          onChange?.(!resolvedChecked);
        }
        onKeyDown?.(e);
      },
      [disabled, isControlled, resolvedChecked, onChange, onKeyDown]
    );

    const trackClasses = [
      "shrink-0 inline-flex items-center rounded-max transition-colors duration-150 ease-out",
      SIZE_TRACK[size],
      SIZE_PADDING[size],
      resolvedChecked
        ? "bg-background-fill-primary-default hover:bg-background-fill-primary-hover"
        : "bg-neutral-300 hover:bg-neutral-400",
      disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
    ].join(" ");

    const thumbTranslate =
      size === "md"
        ? resolvedChecked
          ? "translate-x-5"
          : "translate-x-0"
        : resolvedChecked
          ? "translate-x-4"
          : "translate-x-0";

    const track = (
      <span className={trackClasses}>
        <span
          className={[
            "rounded-full bg-white shadow-sm transition-transform duration-150 ease-out",
            SIZE_THUMB[size],
            thumbTranslate,
          ].join(" ")}
        />
      </span>
    );

    const labelBlock = (label || description) && (
      <span className="flex flex-col min-w-0">
        {label && (
          <span
            className={`${LABEL_TEXT[size]} text-text-neutral-default ${
              disabled ? "opacity-50" : ""
            }`}
          >
            {label}
          </span>
        )}
        {description && (
          <span
            className={`${DESC_TEXT[size]} text-text-neutral-placeholder mt-0.5 ${
              disabled ? "opacity-50" : ""
            }`}
          >
            {description}
          </span>
        )}
      </span>
    );

    return (
      <label
        className={[
          "inline-flex items-center",
          disabled ? "cursor-not-allowed" : "cursor-pointer",
          className ?? "",
        ].join(" ")}
      >
        <button
          ref={innerRef}
          type="button"
          role="switch"
          aria-checked={resolvedChecked}
          aria-label={label ?? "Toggle"}
          disabled={disabled}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          className={`inline-flex items-center p-0 border-0 bg-transparent cursor-inherit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-500 disabled:cursor-not-allowed ${SIZE_GAP[size]}`}
          {...restProps}
        >
          {side === "left" ? (
            <>
              {track}
              {labelBlock}
            </>
          ) : (
            <>
              {labelBlock}
              {track}
            </>
          )}
        </button>
      </label>
    );
  }
);

Switch.displayName = "Switch";
export default Switch;
