"use client";

import { forwardRef, type HTMLAttributes } from "react";
import Radio from "@/components/ui/Radio";

export type RadioGroupSize = "md" | "sm";
export type RadioGroupSide = "left" | "right";
export type RadioGroupState = "default" | "selected";

export interface RadioGroupProps extends HTMLAttributes<HTMLDivElement> {
  /** Label text */
  label?: string;
  /** Radio position */
  side?: RadioGroupSide;
  /** Label size */
  size?: RadioGroupSize;
  /** Whether the radio is selected */
  state?: RadioGroupState;
}

const LABEL_TEXT: Record<RadioGroupSize, string> = {
  md: "text-body-01 font-regular",
  sm: "text-body-02 font-regular",
};

const LABEL_PADDING_Y: Record<RadioGroupSize, string> = {
  md: "py-3",
  sm: "py-2",
};

const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  (
    {
      label = "Label",
      side = "left",
      size = "md",
      state = "default",
      className,
      ...props
    },
    ref
  ) => {
    const radioControl = (
      <Radio
        status={state === "selected" ? "selected" : "empty"}
        aria-hidden="true"
      />
    );

    const labelContent = (
      <div
        className={[
          "flex min-h-px min-w-px flex-col items-start border-b border-border-neutral-default",
          LABEL_PADDING_Y[size],
        ].join(" ")}
      >
        <p className={[LABEL_TEXT[size], "shrink-0 text-text-neutral-default"].join(" ")}>
          {label}
        </p>
      </div>
    );

    return (
      <div
        ref={ref}
        className={[
          "inline-flex items-center gap-2",
          className ?? "",
        ].join(" ")}
        {...props}
      >
        {side === "left" ? (
          <>
            {radioControl}
            {labelContent}
          </>
        ) : (
          <>
            {labelContent}
            {radioControl}
          </>
        )}
      </div>
    );
  }
);

RadioGroup.displayName = "RadioGroup";

export default RadioGroup;
