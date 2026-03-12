import { forwardRef, type LabelHTMLAttributes } from "react";

export type LabelSize = "md" | "sm" | "xs";

export interface LabelProps
  extends Omit<LabelHTMLAttributes<HTMLLabelElement>, "children"> {
  /** Size variant */
  size?: LabelSize;
  /** Label text */
  children?: string;
  /** Show required indicator */
  required?: boolean;
  /** Disabled styling (reduced opacity) */
  disabled?: boolean;
}

const SIZE_TEXT: Record<LabelSize, string> = {
  md: "text-body-01 font-regular",
  sm: "text-body-02 font-regular",
  xs: "text-body-03 font-regular",
};

const Label = forwardRef<HTMLLabelElement, LabelProps>(
  (
    {
      size = "md",
      children = "Label",
      required = false,
      disabled = false,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <label
        ref={ref}
        className={[
          "inline-flex items-center gap-0.5",
          SIZE_TEXT[size],
          "text-text-neutral-default",
          disabled ? "opacity-50 cursor-not-allowed" : "",
          className ?? "",
        ].join(" ")}
        {...props}
      >
        {children}
        {required && (
          <span className="text-text-danger-default" aria-hidden="true">
            *
          </span>
        )}
      </label>
    );
  }
);

Label.displayName = "Label";
export default Label;
