"use client";

import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import Icon, { type IconType } from "@/components/ui/Icon";

export type AlertType = "neutral" | "success" | "info" | "warning" | "danger";
export type AlertSize = "sm" | "md";

export interface AlertProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  /** Color type / semantic variant */
  type?: AlertType;
  /** Size variant - md (default) or sm (compact) */
  size?: AlertSize;
  /** Heading text */
  heading?: string;
  /** Description text */
  description?: string;
  /** Whether to show the leading icon */
  showIcon?: boolean;
  /** Whether to show the heading */
  showHeading?: boolean;
  /** Whether to show the description */
  showDescription?: boolean;
  /** Whether to show the action button */
  showButton?: boolean;
  /** Label for the action button */
  buttonLabel?: string;
  /** Callback when the action button is clicked */
  onButtonClick?: () => void;
  /** Custom icon to override the default per-type icon */
  icon?: ReactNode;
}

const ICON_MAP: Record<AlertType, IconType> = {
  neutral: "circle-alert",
  success: "check",
  info: "circle-alert",
  warning: "triangle-alert",
  danger: "circle-x",
};

const TYPE_STYLES: Record<AlertType, { bg: string; border: string; text: string; icon: string }> = {
  neutral: {
    bg: "bg-background-surface-neutral-default",
    border: "border-border-neutral-default",
    text: "text-text-neutral-default",
    icon: "text-icon-neutral-default",
  },
  success: {
    bg: "bg-background-surface-success-default",
    border: "border-border-success-default",
    text: "text-text-success-default",
    icon: "text-icon-success-default",
  },
  info: {
    bg: "bg-background-surface-information-default",
    border: "border-border-information-default",
    text: "text-text-information-default",
    icon: "text-icon-information-default",
  },
  warning: {
    bg: "bg-background-surface-warning-default",
    border: "border-border-warning-default",
    text: "text-text-warning-default",
    icon: "text-icon-warning-default",
  },
  danger: {
    bg: "bg-background-surface-danger-default",
    border: "border-border-danger-default",
    text: "text-text-danger-default",
    icon: "text-icon-danger-default",
  },
};

const SIZE_CONTAINER: Record<AlertSize, string> = {
  md: "p-3 gap-3",
  sm: "p-2 gap-2",
};

const SIZE_INNER_GAP: Record<AlertSize, string> = {
  md: "gap-3",
  sm: "gap-2",
};

const HEADING_STYLE: Record<AlertSize, string> = {
  md: "text-body-01 font-medium",
  sm: "text-body-02 font-medium",
};

const DESCRIPTION_STYLE: Record<AlertSize, string> = {
  md: "text-body-02 font-regular",
  sm: "text-body-03 font-regular",
};

const ICON_SIZE: Record<AlertSize, "md" | "sm"> = {
  md: "md",
  sm: "sm",
};

const Alert = forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      type = "neutral",
      size = "md",
      heading = "Heading",
      description = "Description",
      showIcon = true,
      showHeading = true,
      showDescription = true,
      showButton = true,
      buttonLabel = "Button",
      onButtonClick,
      icon,
      className,
      ...props
    },
    ref
  ) => {
    const styles = TYPE_STYLES[type];
    const iconType = ICON_MAP[type];
    const iconSize = ICON_SIZE[size];

    return (
      <div
        ref={ref}
        role="alert"
        className={`
          flex min-w-0 items-center rounded-sm border
          ${styles.bg} ${styles.border}
          ${SIZE_CONTAINER[size]}
          ${className ?? ""}
        `}
        {...props}
      >
        <div className={`flex min-w-0 basis-0 flex-1 items-center ${SIZE_INNER_GAP[size]}`}>
          {showIcon && (
            <span className="flex shrink-0 items-center">
              {icon ?? <Icon type={iconType} size={iconSize} className={styles.icon} />}
            </span>
          )}

          <div className="flex min-w-0 flex-1 flex-col">
            {showHeading && (
              <p className={`${HEADING_STYLE[size]} ${styles.text} m-0 min-w-0 break-words`}>
                {heading}
              </p>
            )}
            {showDescription && (
              <p className={`${DESCRIPTION_STYLE[size]} ${styles.text} m-0 min-w-0 break-words`}>
                {description}
              </p>
            )}
          </div>
        </div>

        {showButton && (
          <button
            type="button"
            onClick={onButtonClick}
            className={`
              shrink-0 bg-transparent p-0 text-body-02 font-medium underline
              cursor-pointer border-0
              ${styles.text}
            `}
          >
            {buttonLabel}
          </button>
        )}
      </div>
    );
  }
);

Alert.displayName = "Alert";
export default Alert;
