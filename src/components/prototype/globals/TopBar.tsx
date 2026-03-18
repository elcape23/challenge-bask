"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Icon, { type IconType } from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import SenaLogo from "./SenaLogo";

export type TopBarColor = "primary" | "invert";
export type TopBarState = "default" | "background" | "loading";

export interface TopBarProps {
  className?: string;
  paddingClassName?: string;
  color?: TopBarColor;
  state?: TopBarState;
  /** Show only the logo — hides all right-side elements */
  logoOnly?: boolean;
  showButton?: boolean;
  buttonLabel?: string;
  onButtonClick?: () => void;
  showIconButton?: boolean;
  showSwitch?: boolean;
  iconType?: IconType;
  iconButtonAriaLabel?: string;
  onIconButtonClick?: () => void;
  onBack?: () => void;
  onClose?: () => void;
}

function ThemeToggle({ muted = false }: { muted?: boolean }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const handleToggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
  };

  const trackClasses = muted
    ? "bg-background-fill-neutral-muted"
    : "border border-border-neutral-default bg-background-default-default";

  const thumbClasses = muted
    ? "bg-background-default-default text-icon-neutral-default"
    : "bg-neutral-800 text-icon-neutral-invert";

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      aria-pressed={isDark}
      onClick={handleToggle}
      className={`inline-flex w-[68px] rounded-max p-1 ${trackClasses}`}
    >
      <span
        className={`flex rounded-max p-1 transition-transform duration-150 ${thumbClasses} ${
          isDark ? "translate-x-8" : "translate-x-0"
        }`}
      >
        <Icon
          type={isDark ? "moon" : "sun-medium"}
          size="sm"
          className="text-inherit"
        />
      </span>
    </button>
  );
}

/**
 * Global Top Bar.
 */
export default function TopBar({
  className,
  paddingClassName,
  color = "primary",
  state = "default",
  logoOnly = false,
  showButton = false,
  buttonLabel = "Button",
  onButtonClick,
  showIconButton = true,
  showSwitch = false,
  iconType,
  iconButtonAriaLabel,
  onIconButtonClick,
  onBack,
  onClose,
}: TopBarProps) {
  const router = useRouter();
  const isBackground = state === "background";
  const isInvert = color === "invert";
  const isLoading = state === "loading";
  const showsRightElements = !logoOnly && (showSwitch || showIconButton);

  const logoVariant = isInvert ? "invert" : "default";
  const resolvedPaddingClassName =
    paddingClassName ??
    (logoOnly ? "h-[68px] px-5" : isInvert ? "h-[68px] p-5" : "px-5");
  const barClasses = [
    "flex w-full items-center justify-between py-4",
    resolvedPaddingClassName,
    !isInvert ? "bg-background-default-default" : "",
  ].join(" ");

  const logoWrapperClasses =
    isBackground && isInvert
      ? "inline-flex w-fit shrink-0 rounded-max bg-background-fill-neutral-muted p-2 backdrop-blur-[10px]"
      : "";

  const iconButtonVariant = "neutral";
  const iconButtonAppearance = "outlined";
  const iconButtonClasses = isBackground
    ? "!border-0 !bg-background-fill-neutral-muted hover:!bg-background-fill-neutral-muted active:!bg-background-fill-neutral-muted backdrop-blur-[10px]"
    : "";

  const iconClassName = isInvert ? "!text-icon-neutral-invert" : "text-inherit";
  const resolvedIconType = onBack ? "chevron-left" : onClose ? "x" : iconType ?? "menu";
  const resolvedAriaLabel = onBack
    ? "Back"
    : onClose
      ? "Close"
      : iconButtonAriaLabel ?? "Icon button";
  const iconButtonOnClick = onBack ?? onClose ?? onIconButtonClick;

  if (isLoading) {
    return (
      <header className={`${barClasses} ${className ?? ""}`}>
        <div className="h-6 w-[90px] shrink-0 rounded-max bg-background-surface-neutral-default" />
        <div className="size-9 shrink-0 rounded-max bg-background-surface-neutral-default" />
      </header>
    );
  }

  return (
    <header className={`${barClasses} ${className ?? ""}`}>
      <div className="flex min-w-0 flex-1 items-end">
        <button
          type="button"
          aria-label="Go to products"
          className={logoWrapperClasses}
          onClick={() => router.push("/prototype")}
        >
          <SenaLogo variant={logoVariant} size="sm" />
        </button>
      </div>

      <div
        className={`flex shrink-0 items-center ${showsRightElements ? "gap-3" : ""}`}
      >
        {!logoOnly && showSwitch && (
          <ThemeToggle muted={isBackground && isInvert} />
        )}
        {!logoOnly && showIconButton && (
          <div className="flex items-center gap-2">
            {showButton && (
              <Button
                size="sm"
                variant="primary"
                appearance="filled"
                onClick={onButtonClick}
              >
                {buttonLabel}
              </Button>
            )}
            {showIconButton ? (
              <Button
                size="icon"
                variant={iconButtonVariant}
                appearance={iconButtonAppearance}
                onClick={iconButtonOnClick}
                aria-label={resolvedAriaLabel}
                className={iconButtonClasses}
              >
                <Icon type={resolvedIconType} size="sm" className={iconClassName} />
              </Button>
            ) : null}
          </div>
        )}
      </div>
    </header>
  );
}
