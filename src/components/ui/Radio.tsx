"use client";

import {
  forwardRef,
  useRef,
  useState,
  useEffect,
  useCallback,
  type InputHTMLAttributes,
  type ChangeEvent,
} from "react";

export type RadioSize = "md" | "sm";
export type RadioSide = "left" | "right";

export interface RadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  /** Size variant */
  size?: RadioSize;
  /** Radio position relative to label */
  side?: RadioSide;
  /** Label text */
  label?: string;
}

const SIZE_BOX: Record<RadioSize, string> = {
  md: "size-6",
  sm: "size-5",
};

const SIZE_DOT: Record<RadioSize, string> = {
  md: "size-3",
  sm: "size-2.5",
};

const SIZE_GAP: Record<RadioSize, string> = {
  md: "gap-3",
  sm: "gap-2",
};

const SIZE_HEIGHT: Record<RadioSize, string> = {
  md: "h-12",
  sm: "h-9",
};

const SIZE_PY: Record<RadioSize, string> = {
  md: "py-3",
  sm: "py-2",
};

const LABEL_STYLE: Record<RadioSize, string> = {
  md: "text-body-01 font-regular",
  sm: "text-body-02 font-regular",
};

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      size = "md",
      side = "left",
      label = "Label",
      checked,
      defaultChecked,
      disabled,
      onChange,
      className,
      ...props
    },
    forwardedRef
  ) => {
    const innerRef = useRef<HTMLInputElement>(null);
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
            forwardedRef as React.MutableRefObject<HTMLInputElement | null>
          ).current = innerRef.current;
        }
      }
    }, [forwardedRef]);

    const handleChange = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        if (!isControlled) setInternalChecked(e.target.checked);
        onChange?.(e);
      },
      [isControlled, onChange]
    );

    const circleClasses = [
      "shrink-0 flex items-center justify-center rounded-full border-2",
      SIZE_BOX[size],
      disabled
        ? "border-border-neutral-disabled"
        : resolvedChecked
          ? "border-border-primary-default"
          : "border-border-neutral-default",
    ].join(" ");

    const dotClasses = [
      "rounded-full",
      SIZE_DOT[size],
      disabled ? "bg-background-fill-primary-disabled" : "bg-background-fill-primary-default",
    ].join(" ");

    const radioIndicator = (
      <div className={`shrink-0 flex items-start rounded-full peer-focus-visible:shadow-focus ${SIZE_PY[size]}`}>
        <div className={circleClasses}>
          {resolvedChecked && (
            <div className={dotClasses} />
          )}
        </div>
      </div>
    );

    const labelElement = (
      <div className={`flex-1 min-w-0 flex items-center ${SIZE_PY[size]}`}>
        <span className={`${LABEL_STYLE[size]} ${disabled ? "text-text-neutral-disabled" : "text-text-neutral-default"}`}>
          {label}
        </span>
      </div>
    );

    return (
      <label
        className={[
          "flex items-center",
          SIZE_GAP[size],
          SIZE_HEIGHT[size],
          disabled ? "cursor-not-allowed" : "cursor-pointer",
          className ?? "",
        ].join(" ")}
      >
        <input
          ref={innerRef}
          type="radio"
          checked={isControlled ? checked : undefined}
          defaultChecked={isControlled ? undefined : defaultChecked}
          disabled={disabled}
          onChange={handleChange}
          className="sr-only peer"
          {...props}
        />

        {side === "left" ? (
          <>
            {radioIndicator}
            {labelElement}
          </>
        ) : (
          <>
            {labelElement}
            {radioIndicator}
          </>
        )}
      </label>
    );
  }
);

Radio.displayName = "Radio";
export default Radio;
