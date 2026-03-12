"use client";

import {
  forwardRef,
  useRef,
  useEffect,
  type InputHTMLAttributes,
} from "react";

export type CheckboxSize = "md" | "sm";
export type CheckboxSide = "left" | "right";

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  /** Size variant */
  size?: CheckboxSize;
  /** Checkbox position relative to label */
  side?: CheckboxSide;
  /** Label text */
  label?: string;
  /** Indeterminate (mixed) state */
  indeterminate?: boolean;
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="11"
      viewBox="0 0 16 11"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M1 5.5L5.5 10L15 1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MinusIcon({ className }: { className?: string }) {
  return (
    <svg
      width="12"
      height="2"
      viewBox="0 0 12 2"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M1 1H11"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

const SIZE_BOX: Record<CheckboxSize, string> = {
  md: "size-6",
  sm: "size-5",
};

const SIZE_GAP: Record<CheckboxSize, string> = {
  md: "gap-3",
  sm: "gap-2",
};

const SIZE_HEIGHT: Record<CheckboxSize, string> = {
  md: "h-12",
  sm: "h-9",
};

const SIZE_PY: Record<CheckboxSize, string> = {
  md: "py-3",
  sm: "py-2",
};

const LABEL_STYLE: Record<CheckboxSize, string> = {
  md: "text-body-01 font-regular",
  sm: "text-body-02 font-regular",
};

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      size = "md",
      side = "left",
      label = "Label",
      indeterminate = false,
      checked,
      defaultChecked,
      disabled,
      className,
      ...props
    },
    forwardedRef
  ) => {
    const innerRef = useRef<HTMLInputElement>(null);

    const ref = (forwardedRef as React.RefObject<HTMLInputElement>) ?? innerRef;
    const inputRef = ref ?? innerRef;

    useEffect(() => {
      const el =
        (inputRef as React.RefObject<HTMLInputElement>)?.current ??
        innerRef.current;
      if (el) el.indeterminate = indeterminate;
    }, [indeterminate, inputRef]);

    const isChecked = checked ?? defaultChecked ?? false;
    const isActive = isChecked || indeterminate;

    const boxClasses = `
      shrink-0 flex items-center justify-center
      rounded-xs border p-0.5
      ${SIZE_BOX[size]}
      ${
        isActive
          ? "bg-background-fill-primary-default border-border-primary-default"
          : "bg-background-fill-neutral-default border-border-neutral-default"
      }
      ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
    `;

    const checkboxIndicator = (
      <div className={`shrink-0 flex items-start ${SIZE_PY[size]}`}>
        <div className={boxClasses}>
          {indeterminate ? (
            <MinusIcon className="text-icon-primary-invert" />
          ) : isChecked ? (
            <CheckIcon className="text-icon-primary-invert" />
          ) : null}
        </div>
      </div>
    );

    const labelElement = (
      <div className={`flex-1 min-w-0 flex items-center ${SIZE_PY[size]}`}>
        <span
          className={`${LABEL_STYLE[size]} text-text-neutral-default ${
            disabled ? "opacity-50" : ""
          }`}
        >
          {label}
        </span>
      </div>
    );

    return (
      <label
        className={`
          flex items-center ${SIZE_GAP[size]} ${SIZE_HEIGHT[size]}
          ${disabled ? "cursor-not-allowed" : "cursor-pointer"}
          ${className ?? ""}
        `}
      >
        <input
          ref={innerRef}
          type="checkbox"
          checked={checked}
          defaultChecked={defaultChecked}
          disabled={disabled}
          className="sr-only peer"
          aria-checked={indeterminate ? "mixed" : undefined}
          {...props}
        />

        {side === "left" ? (
          <>
            {checkboxIndicator}
            {labelElement}
          </>
        ) : (
          <>
            {labelElement}
            {checkboxIndicator}
          </>
        )}
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";
export default Checkbox;
