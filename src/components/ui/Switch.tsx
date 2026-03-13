"use client";

import {
  forwardRef,
  useState,
  type ButtonHTMLAttributes,
  type MouseEvent,
} from "react";

export type SwitchMode = "light" | "dark";
export type SwitchBackground = "blur" | "solid";

export interface SwitchProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "onChange"> {
  /** Controlled mode variant */
  mode?: SwitchMode;
  /** Initial mode for uncontrolled usage */
  defaultMode?: SwitchMode;
  /** Background treatment from Figma */
  background?: SwitchBackground;
  /** Callback when mode changes */
  onChange?: (mode: SwitchMode) => void;
}

function SunIcon({
  color,
  background,
}: {
  color: string;
  background: SwitchBackground;
}) {
  if (background === "solid") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 19.5 19.5"
        className="size-5 shrink-0"
        fill="none"
      >
        <path
          d="M9.75 0.75V1.75M9.75 17.75V18.75M0.75 9.75H1.75M17.75 9.75H18.75M16.114 3.386L15.407 4.093M4.093 15.407L3.386 16.114M3.386 3.386L4.093 4.093M15.407 15.407L16.114 16.114M13.75 9.75C13.75 11.9591 11.9591 13.75 9.75 13.75C7.54086 13.75 5.75 11.9591 5.75 9.75C5.75 7.54086 7.54086 5.75 9.75 5.75C11.9591 5.75 13.75 7.54086 13.75 9.75Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="size-5 shrink-0"
      fill="none"
    >
      <path
        d="M10 3V3.77778M10 16.2222V17M3 10H3.77778M16.2222 10H17M14.9498 5.05022L14.3999 5.60011M5.60011 14.3999L5.05022 14.9498M5.05022 5.05022L5.60011 5.60011M14.3999 14.3999L14.9498 14.9498M13.1111 10C13.1111 11.7182 11.7182 13.1111 10 13.1111C8.28178 13.1111 6.88889 11.7182 6.88889 10C6.88889 8.28178 8.28178 6.88889 10 6.88889C11.7182 6.88889 13.1111 8.28178 13.1111 10Z"
        stroke={color}
        strokeWidth="1.33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MoonIcon({
  color,
  background,
}: {
  color: string;
  background: SwitchBackground;
}) {
  if (background === "solid") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 21.5001 21.5001"
        className="size-5 shrink-0"
        fill="none"
      >
        <path
          d="M20.7492 11.2826C20.645 13.213 19.9839 15.0718 18.8458 16.6345C17.7077 18.1972 16.1413 19.3967 14.336 20.0881C12.5306 20.7795 10.5637 20.9333 8.67289 20.5307C6.78209 20.128 5.04837 19.1864 3.68133 17.8195C2.31428 16.4526 1.37243 14.719 0.969633 12.8282C0.566832 10.9374 0.720326 8.97048 1.41156 7.16509C2.10279 5.3597 3.30217 3.79318 4.86472 2.65489C6.42726 1.5166 8.28606 0.855282 10.2164 0.750871C10.6667 0.72641 10.9025 1.26233 10.6634 1.64371C9.86385 2.92298 9.52148 4.43549 9.69218 5.93439C9.86288 7.43329 10.5366 8.83008 11.6033 9.89682C12.67 10.9636 14.0668 11.6372 15.5657 11.8079C17.0646 11.9786 18.5771 11.6363 19.8564 10.8367C20.2389 10.5977 20.7737 10.8323 20.7492 11.2826Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 17.3301 17.3301"
      className="size-5 shrink-0"
      fill="none"
    >
      <path
        d="M16.6644 9.09106C16.581 10.6354 16.0521 12.1225 15.1416 13.3726C14.2311 14.6227 12.978 15.5824 11.5338 16.1355C10.0895 16.6886 8.51596 16.8116 7.00332 16.4895C5.49067 16.1674 4.1037 15.4141 3.01006 14.3206C1.91643 13.2271 1.16295 11.8402 0.840706 10.3276C0.518466 8.81496 0.641261 7.24139 1.19425 5.79708C1.74724 4.35276 2.70674 3.09955 3.95677 2.18892C5.20681 1.27829 6.69385 0.749231 8.23815 0.665702C8.5984 0.646133 8.78697 1.07487 8.59573 1.37997C7.95608 2.40339 7.68218 3.6134 7.81874 4.81252C7.9553 6.01164 8.49426 7.12907 9.34764 7.98246C10.201 8.83585 11.3185 9.3748 12.5176 9.51136C13.7167 9.64792 14.9267 9.37402 15.9501 8.73437C16.2561 8.54313 16.684 8.73082 16.6644 9.09106Z"
        stroke={color}
        strokeWidth="1.33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  (
    {
      mode,
      defaultMode = "light",
      background = "blur",
      onChange,
      disabled = false,
      className,
      onClick,
      "aria-label": ariaLabel,
      ...restProps
    },
    ref
  ) => {
    const isControlled = mode !== undefined;
    const [internalMode, setInternalMode] = useState<SwitchMode>(defaultMode);
    const resolvedMode = isControlled ? mode : internalMode;
    const isDark = resolvedMode === "dark";

    const nextMode: SwitchMode = isDark ? "light" : "dark";

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
      if (!isControlled) {
        setInternalMode(nextMode);
      }

      onChange?.(nextMode);
      onClick?.(event);
    };

    const rootClasses = [
      "inline-flex h-9 w-[68px] shrink-0 items-center rounded-max p-1 transition-all duration-150 ease-out",
      "focus-visible:outline-none focus-visible:shadow-focus",
      isDark ? "justify-end" : "justify-start",
      background === "blur"
        ? "bg-background-fill-neutral-muted backdrop-blur-[20px]"
        : "bg-background-default-default [box-shadow:inset_0_0_0_1px_var(--color-border-neutral-default)]",
      disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",
      className ?? "",
    ]
      .filter(Boolean)
      .join(" ");

    const thumbClasses = [
      "flex size-7 items-center justify-center rounded-full p-1 transition-transform duration-150 ease-out",
      background === "blur"
        ? "bg-background-default-default"
        : "bg-neutral-800",
    ].join(" ");

    const iconColor =
      background === "blur"
        ? "var(--color-icon-neutral-default)"
        : "var(--color-icon-neutral-invert)";

    return (
      <button
        ref={ref}
        type="button"
        role="switch"
        aria-checked={isDark}
        aria-label={ariaLabel ?? "Toggle theme"}
        disabled={disabled}
        className={rootClasses}
        onClick={handleClick}
        {...restProps}
      >
        <span className={thumbClasses}>
          {isDark ? (
            <MoonIcon color={iconColor} background={background} />
          ) : (
            <SunIcon color={iconColor} background={background} />
          )}
        </span>
      </button>
    );
  }
);

Switch.displayName = "Switch";

export default Switch;
