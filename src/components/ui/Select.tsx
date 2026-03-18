"use client";

import * as SelectPrimitive from "@radix-ui/react-select";
import {
  forwardRef,
  useId,
  useState,
} from "react";
import Badge, { type BadgeType } from "@/components/ui/Badge";
import Icon from "@/components/ui/Icon";

export type SelectSize = "md" | "sm";
export type SelectState = "default" | "error";

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
  description?: string;
  badgeLabel?: string;
  badgeType?: BadgeType;
}

export interface SelectProps {
  /** Size variant */
  size?: SelectSize;
  /** Validation state */
  state?: SelectState;
  /** Label text displayed above the trigger */
  label?: string;
  /** Placeholder shown when no value is selected */
  placeholder?: string;
  /** Helper text displayed below the trigger */
  helperText?: string;
  /** Error message replaces helper text when state is "error" */
  errorMessage?: string;
  /** List of options to display */
  options?: SelectOption[];
  /** Controlled value */
  value?: string;
  /** Default value for uncontrolled usage */
  defaultValue?: string;
  /** Callback fired when value changes */
  onChange?: (value: string) => void;
  /** Disabled state */
  disabled?: boolean;
  /** Additional CSS classes on the root wrapper */
  className?: string;
  /** HTML id for the trigger element */
  id?: string;
}

const SIZE_TRIGGER_HEIGHT: Record<SelectSize, string> = {
  md: "h-12",
  sm: "h-9",
};

const SIZE_TRIGGER_PADDING: Record<SelectSize, string> = {
  md: "px-4",
  sm: "px-4",
};

const SIZE_TRIGGER_TEXT: Record<SelectSize, string> = {
  md: "text-body-01",
  sm: "text-body-02",
};

const SIZE_RADIUS: Record<SelectSize, string> = {
  md: "rounded-md",
  sm: "rounded-sm",
};

const SIZE_ICON: Record<SelectSize, "md" | "sm"> = {
  md: "md",
  sm: "sm",
};

const LABEL_TEXT: Record<SelectSize, string> = {
  md: "text-body-02 font-medium",
  sm: "text-body-02 font-medium",
};

const HELPER_TEXT: Record<SelectSize, string> = {
  md: "text-body-03",
  sm: "text-body-03",
};

const OPTION_TEXT: Record<SelectSize, string> = {
  md: "text-body-01",
  sm: "text-body-02",
};

const OPTION_LABEL_ROW_HEIGHT: Record<SelectSize, string> = {
  md: "min-h-6",
  sm: "min-h-5",
};

const POSITION_PADDING: Record<SelectSize, string> = {
  md: "py-2",
  sm: "py-2",
};

const EMPTY_TEXT_PADDING: Record<SelectSize, string> = {
  md: "px-4 py-2",
  sm: "px-4 py-2",
};

function TriggerIcon({
  open,
  size,
  disabled,
}: {
  open: boolean;
  size: "md" | "sm";
  disabled?: boolean;
}) {
  return (
    <Icon
      type={open ? "chevron-up" : "chevron-down"}
      size={size}
      className={`ml-2 shrink-0 ${disabled ? "text-icon-neutral-disabled" : "text-icon-neutral-secondary"}`}
    />
  );
}

const Select = forwardRef<HTMLButtonElement, SelectProps>(
  (
    {
      size = "md",
      state = "default",
      label,
      placeholder = "Select an option",
      helperText,
      errorMessage,
      options = [],
      value,
      defaultValue,
      onChange,
      disabled,
      className,
      id: externalId,
    },
    forwardedRef
  ) => {
    const autoId = useId();
    const triggerId = externalId ?? autoId;
    const helperId = `${triggerId}-helper`;
    const [open, setOpen] = useState(false);
    const selectedOption = options.find((option) => option.value === value);

    const isError = state === "error";
    const bottomText = isError ? errorMessage : helperText;

    return (
      <div className={`relative flex w-full flex-col ${className ?? ""}`}>
        {label && (
          <label
            htmlFor={triggerId}
            className={`${LABEL_TEXT[size]} mb-1 ${
              disabled ? "text-text-neutral-disabled" : "text-text-neutral-default"
            }`}
          >
            {label}
          </label>
        )}

        <SelectPrimitive.Root
          value={value}
          defaultValue={defaultValue}
          onValueChange={onChange}
          open={open}
          onOpenChange={setOpen}
          disabled={disabled}
        >
          <SelectPrimitive.Trigger
            ref={forwardedRef}
            id={triggerId}
            aria-invalid={isError || undefined}
            aria-describedby={bottomText ? helperId : undefined}
            className={[
              "flex w-full items-center justify-between gap-3 border bg-background-default-default text-text-neutral-default transition-colors outline-none data-[placeholder]:text-text-neutral-placeholder",
              SIZE_TRIGGER_HEIGHT[size],
              SIZE_TRIGGER_PADDING[size],
              SIZE_TRIGGER_TEXT[size],
              SIZE_RADIUS[size],
              disabled
                ? "cursor-not-allowed border-border-neutral-disabled bg-background-surface-neutral-default opacity-50"
                : isError
                  ? "border-border-danger-default"
                  : "border-border-neutral-default hover:border-border-neutral-hover data-[state=open]:border-[var(--color-neutral-800)] focus-visible:border-[var(--color-neutral-800)]",
            ].join(" ")}
          >
            {selectedOption ? (
              <span className="flex min-w-0 flex-1 items-center justify-between gap-3">
                <span className={["flex min-w-0 flex-1 items-center gap-1 truncate text-left", SIZE_TRIGGER_TEXT[size]].join(" ")}>
                  <span className="truncate text-text-neutral-default">{selectedOption.label}</span>
                  {selectedOption.description && (
                    <span className="flex shrink-0 items-center gap-1 text-text-neutral-placeholder">
                      <span>•</span>
                      <span className="truncate">{selectedOption.description}</span>
                    </span>
                  )}
                </span>
                {selectedOption.badgeLabel ? (
                  <Badge
                    type={selectedOption.badgeType ?? "success"}
                    size="sm"
                    label={selectedOption.badgeLabel}
                    showIcon={false}
                  />
                ) : null}
              </span>
            ) : (
              <SelectPrimitive.Value
                placeholder={placeholder}
                className={[
                  "truncate text-left",
                  SIZE_TRIGGER_TEXT[size],
                ].join(" ")}
              />
            )}
            <SelectPrimitive.Icon asChild>
              <span>
                <TriggerIcon open={open} size={SIZE_ICON[size]} disabled={disabled} />
              </span>
            </SelectPrimitive.Icon>
          </SelectPrimitive.Trigger>

          <SelectPrimitive.Portal>
            <SelectPrimitive.Content
              position="popper"
              sideOffset={4}
              className={[
                "z-50 max-h-60 w-[var(--radix-select-trigger-width)] overflow-auto rounded-sm bg-background-default-default px-4 py-2 shadow-md outline-none",
                "data-[state=open]:animate-in data-[state=closed]:animate-out",
                "data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0",
                "data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95",
                "data-[side=bottom]:slide-in-from-top-1 data-[side=top]:slide-in-from-bottom-1",
              ].join(" ")}
            >
              <SelectPrimitive.Viewport>
                {options.length === 0 ? (
                  <div className={`${EMPTY_TEXT_PADDING[size]} ${OPTION_TEXT[size]} text-text-neutral-placeholder`}>
                    No options available
                  </div>
                ) : (
                  options.map((option) => (
                    <SelectPrimitive.Item
                      key={option.value}
                      value={option.value}
                      disabled={option.disabled}
                      className={[
                        "flex cursor-pointer flex-col justify-center gap-0 outline-none",
                        POSITION_PADDING[size],
                        OPTION_TEXT[size],
                        "text-text-neutral-default",
                        "data-[highlighted]:bg-background-surface-neutral-default data-[highlighted]:text-text-neutral-default",
                        "data-[state=checked]:bg-background-surface-neutral-default data-[state=checked]:text-text-neutral-default",
                        "data-[disabled]:cursor-not-allowed data-[disabled]:text-text-neutral-disabled",
                      ].join(" ")}
                    >
                      <span className={["flex items-center justify-between gap-3", OPTION_LABEL_ROW_HEIGHT[size]].join(" ")}>
                        <SelectPrimitive.ItemText>{option.label}</SelectPrimitive.ItemText>
                        {option.badgeLabel ? (
                          <Badge
                            type={option.badgeType ?? "success"}
                            size="sm"
                            label={option.badgeLabel}
                            showIcon={false}
                          />
                        ) : null}
                      </span>
                      {option.description && (
                        <span className="text-body-03 text-text-neutral-secondary">
                          {option.description}
                        </span>
                      )}
                    </SelectPrimitive.Item>
                  ))
                )}
              </SelectPrimitive.Viewport>
            </SelectPrimitive.Content>
          </SelectPrimitive.Portal>
        </SelectPrimitive.Root>

        {bottomText && (
          <p
            id={helperId}
            className={[
              "mt-1",
              HELPER_TEXT[size],
              disabled
                ? "text-text-neutral-disabled"
                : isError
                  ? "text-text-danger-default"
                  : "text-text-neutral-placeholder",
            ].join(" ")}
            role={isError ? "alert" : undefined}
          >
            {bottomText}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";

export default Select;
