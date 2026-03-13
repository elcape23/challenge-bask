"use client";

import { forwardRef, useCallback, useId, useImperativeHandle, useRef, useState, type ChangeEvent, type InputHTMLAttributes } from "react";
import { RadioControl } from "@/components/ui/Radio";

export interface RadioButtonProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  /** Heading text */
  heading?: string;
  /** Supporting text */
  description?: string;
}

const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  (
    {
      heading = "Heading",
      description = "Description",
      checked,
      defaultChecked,
      disabled,
      onChange,
      className,
      id,
      ...props
    },
    forwardedRef
  ) => {
    const innerRef = useRef<HTMLInputElement>(null);
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const isControlled = checked !== undefined;
    const [internalChecked, setInternalChecked] = useState(
      defaultChecked ?? false
    );

    const resolvedChecked = isControlled ? checked : internalChecked;

    useImperativeHandle(forwardedRef, () => innerRef.current as HTMLInputElement, []);

    const handleChange = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        if (!isControlled) setInternalChecked(e.target.checked);
        onChange?.(e);
      },
      [isControlled, onChange]
    );

    return (
      <label
        htmlFor={inputId}
        className={[
          "flex w-[260px] cursor-pointer flex-col items-end gap-1 rounded-md border border-solid p-4",
          resolvedChecked
            ? "border-border-neutral-pressed"
            : "border-border-neutral-default",
          disabled ? "cursor-not-allowed opacity-50" : "",
          className ?? "",
        ].join(" ")}
      >
        <input
          ref={innerRef}
          id={inputId}
          type="radio"
          checked={isControlled ? checked : undefined}
          defaultChecked={isControlled ? undefined : defaultChecked}
          disabled={disabled}
          onChange={handleChange}
          className="sr-only peer"
          {...props}
        />

        <span className="rounded-full peer-focus-visible:shadow-focus">
          {resolvedChecked ? (
            <RadioControl type="check" status="selected" aria-hidden="true" />
          ) : (
            <span className="block size-6" aria-hidden="true" />
          )}
        </span>

        <span className="flex w-full flex-col items-start gap-1">
          <span className="flex w-full items-start">
            <span className="min-h-px min-w-px flex-1 text-body-02 font-medium text-text-neutral-default">
              {heading}
            </span>
          </span>
          <span className="flex w-full items-start pr-3">
            <span className="min-h-px min-w-px flex-1 text-body-03 font-regular text-text-neutral-secondary">
              {description}
            </span>
          </span>
        </span>
      </label>
    );
  }
);

RadioButton.displayName = "RadioButton";
export default RadioButton;
