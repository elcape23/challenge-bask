"use client";

import {
  forwardRef,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";

export type SelectSize = "md" | "sm";
export type SelectState = "default" | "error";

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
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
  /** Error message — replaces helper text when state is "error" */
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

const SIZE_HEIGHT: Record<SelectSize, string> = {
  md: "h-10",
  sm: "h-8",
};

const SIZE_PADDING: Record<SelectSize, string> = {
  md: "px-3",
  sm: "px-3",
};

const SIZE_TEXT: Record<SelectSize, string> = {
  md: "text-body-01",
  sm: "text-body-02",
};

const SIZE_RADIUS: Record<SelectSize, string> = {
  md: "rounded-md",
  sm: "rounded-sm",
};

const SIZE_ICON: Record<SelectSize, string> = {
  md: "size-5",
  sm: "size-4",
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

const OPTION_PADDING: Record<SelectSize, string> = {
  md: "px-3 py-2",
  sm: "px-3 py-1.5",
};

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 7.5L10 12.5L15 7.5" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      className="size-4 shrink-0"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 8.5L6.5 12L13 4" />
    </svg>
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
    const listboxId = `${triggerId}-listbox`;
    const helperId = `${triggerId}-helper`;

    const isControlled = value !== undefined;
    const [internalValue, setInternalValue] = useState(defaultValue ?? "");
    const resolvedValue = isControlled ? value : internalValue;

    const [isOpen, setIsOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(-1);

    const rootRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLButtonElement>(null);
    const listboxRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
      if (forwardedRef) {
        if (typeof forwardedRef === "function") {
          forwardedRef(triggerRef.current);
        } else {
          (forwardedRef as React.MutableRefObject<HTMLButtonElement | null>).current =
            triggerRef.current;
        }
      }
    }, [forwardedRef]);

    const selectedOption = options.find((o) => o.value === resolvedValue);
    const isError = state === "error";
    const bottomText = isError ? errorMessage : helperText;

    const enabledOptions = options.filter((o) => !o.disabled);

    const selectValue = useCallback(
      (val: string) => {
        if (!isControlled) setInternalValue(val);
        onChange?.(val);
        setIsOpen(false);
        triggerRef.current?.focus();
      },
      [isControlled, onChange]
    );

    const openDropdown = useCallback(() => {
      if (disabled) return;
      setIsOpen(true);
      const idx = enabledOptions.findIndex((o) => o.value === resolvedValue);
      setActiveIndex(idx >= 0 ? options.indexOf(enabledOptions[idx]) : 0);
    }, [disabled, enabledOptions, options, resolvedValue]);

    const closeDropdown = useCallback(() => {
      setIsOpen(false);
      setActiveIndex(-1);
    }, []);

    useEffect(() => {
      if (!isOpen) return;
      function handleOutsideClick(e: MouseEvent) {
        if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
          closeDropdown();
        }
      }
      document.addEventListener("mousedown", handleOutsideClick);
      return () => document.removeEventListener("mousedown", handleOutsideClick);
    }, [isOpen, closeDropdown]);

    useEffect(() => {
      if (!isOpen || activeIndex < 0 || !listboxRef.current) return;
      const activeEl = listboxRef.current.children[activeIndex] as HTMLElement | undefined;
      activeEl?.scrollIntoView({ block: "nearest" });
    }, [isOpen, activeIndex]);

    const handleTriggerKeyDown = useCallback(
      (e: KeyboardEvent<HTMLButtonElement>) => {
        if (disabled) return;

        switch (e.key) {
          case "ArrowDown":
          case "ArrowUp":
          case "Enter":
          case " ":
            e.preventDefault();
            if (!isOpen) {
              openDropdown();
            }
            break;
          case "Escape":
            if (isOpen) {
              e.preventDefault();
              closeDropdown();
            }
            break;
        }
      },
      [disabled, isOpen, openDropdown, closeDropdown]
    );

    const handleListKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLUListElement>) => {
        switch (e.key) {
          case "ArrowDown": {
            e.preventDefault();
            let next = activeIndex + 1;
            while (next < options.length && options[next].disabled) next++;
            if (next < options.length) setActiveIndex(next);
            break;
          }
          case "ArrowUp": {
            e.preventDefault();
            let prev = activeIndex - 1;
            while (prev >= 0 && options[prev].disabled) prev--;
            if (prev >= 0) setActiveIndex(prev);
            break;
          }
          case "Home":
            e.preventDefault();
            for (let i = 0; i < options.length; i++) {
              if (!options[i].disabled) {
                setActiveIndex(i);
                break;
              }
            }
            break;
          case "End":
            e.preventDefault();
            for (let i = options.length - 1; i >= 0; i--) {
              if (!options[i].disabled) {
                setActiveIndex(i);
                break;
              }
            }
            break;
          case "Enter":
          case " ":
            e.preventDefault();
            if (activeIndex >= 0 && !options[activeIndex].disabled) {
              selectValue(options[activeIndex].value);
            }
            break;
          case "Escape":
            e.preventDefault();
            closeDropdown();
            triggerRef.current?.focus();
            break;
          case "Tab":
            closeDropdown();
            break;
        }
      },
      [activeIndex, options, selectValue, closeDropdown]
    );

    useEffect(() => {
      if (isOpen && listboxRef.current) {
        listboxRef.current.focus();
      }
    }, [isOpen]);

    const borderColor = isError
      ? "border-border-danger-default"
      : isOpen
        ? "border-border-primary-default shadow-focus"
        : "border-border-neutral-default hover:border-border-neutral-hover";

    return (
      <div ref={rootRef} className={`relative flex flex-col ${className ?? ""}`}>
        {label && (
          <label
            htmlFor={triggerId}
            className={`${LABEL_TEXT[size]} text-text-neutral-default mb-1 ${
              disabled ? "opacity-50" : ""
            }`}
          >
            {label}
          </label>
        )}

        <button
          ref={triggerRef}
          id={triggerId}
          type="button"
          role="combobox"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-controls={isOpen ? listboxId : undefined}
          aria-invalid={isError || undefined}
          aria-describedby={bottomText ? helperId : undefined}
          aria-activedescendant={
            isOpen && activeIndex >= 0
              ? `${listboxId}-option-${activeIndex}`
              : undefined
          }
          disabled={disabled}
          onClick={() => (isOpen ? closeDropdown() : openDropdown())}
          onKeyDown={handleTriggerKeyDown}
          className={[
            "flex items-center justify-between border bg-white transition-colors cursor-pointer",
            SIZE_HEIGHT[size],
            SIZE_PADDING[size],
            SIZE_RADIUS[size],
            borderColor,
            "focus-visible:shadow-focus focus-visible:border-border-primary-default focus-visible:outline-none",
            disabled
              ? "opacity-50 !cursor-not-allowed bg-background-surface-neutral-default"
              : "",
          ].join(" ")}
        >
          <span
            className={[
              SIZE_TEXT[size],
              "truncate",
              selectedOption
                ? "text-text-neutral-default"
                : "text-text-neutral-placeholder",
            ].join(" ")}
          >
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <ChevronDownIcon
            className={[
              "shrink-0 text-icon-neutral-secondary transition-transform ml-2",
              SIZE_ICON[size],
              isOpen ? "rotate-180" : "",
            ].join(" ")}
          />
        </button>

        {isOpen && (
          <ul
            ref={listboxRef}
            id={listboxId}
            role="listbox"
            tabIndex={-1}
            aria-labelledby={triggerId}
            onKeyDown={handleListKeyDown}
            className={[
              "absolute z-50 left-0 right-0 mt-1 border border-border-neutral-default bg-white overflow-auto outline-none",
              SIZE_RADIUS[size],
              "shadow-md max-h-60",
              label ? "top-[calc(100%-4px)]" : "top-full",
            ].join(" ")}
            style={{ top: "100%" }}
          >
            {options.map((option, idx) => {
              const isSelected = option.value === resolvedValue;
              const isActive = idx === activeIndex;

              return (
                <li
                  key={option.value}
                  id={`${listboxId}-option-${idx}`}
                  role="option"
                  aria-selected={isSelected}
                  aria-disabled={option.disabled || undefined}
                  onMouseEnter={() => !option.disabled && setActiveIndex(idx)}
                  onClick={() => {
                    if (!option.disabled) selectValue(option.value);
                  }}
                  className={[
                    "flex items-center justify-between cursor-pointer transition-colors",
                    OPTION_PADDING[size],
                    OPTION_TEXT[size],
                    option.disabled
                      ? "text-text-neutral-disabled cursor-not-allowed"
                      : isActive
                        ? "bg-background-surface-neutral-default text-text-neutral-default"
                        : "text-text-neutral-default hover:bg-background-surface-neutral-default",
                  ].join(" ")}
                >
                  <span className="truncate">{option.label}</span>
                  {isSelected && (
                    <span className="text-icon-primary-default ml-2">
                      <CheckIcon />
                    </span>
                  )}
                </li>
              );
            })}
            {options.length === 0 && (
              <li className={`${OPTION_PADDING[size]} ${OPTION_TEXT[size]} text-text-neutral-placeholder`}>
                No options available
              </li>
            )}
          </ul>
        )}

        {bottomText && (
          <p
            id={helperId}
            className={[
              "mt-1",
              HELPER_TEXT[size],
              isError
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
