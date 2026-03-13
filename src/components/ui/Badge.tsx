import { forwardRef, type HTMLAttributes, type ReactNode } from "react";

import Icon, { type IconSize, type IconType } from "@/components/ui/Icon";

export type BadgeType =
  | "neutral"
  | "success"
  | "info"
  | "information"
  | "warning"
  | "danger";
export type BadgeSize = "sm" | "md";

export interface BadgeProps extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  /** Semantic color type */
  type?: BadgeType;
  /** Size variant */
  size?: BadgeSize;
  /** Text label */
  label?: string;
  /** Whether to show the leading icon */
  showIcon?: boolean;
  /** Custom leading icon (optional) */
  icon?: ReactNode;
}

const ICON_MAP: Record<BadgeType, IconType> = {
  neutral: "circle-alert",
  success: "check",
  info: "circle-alert",
  information: "circle-alert",
  warning: "triangle-alert",
  danger: "circle-x",
};

const TYPE_STYLES: Record<
  BadgeType,
  { bg: string; text: string; icon: string }
> = {
  neutral: {
    bg: "bg-background-fill-neutral-default",
    text: "text-text-neutral-secondary",
    icon: "text-icon-neutral-secondary",
  },
  success: {
    bg: "bg-background-fill-success-default",
    text: "text-text-success-invert",
    icon: "text-icon-success-invert",
  },
  info: {
    bg: "bg-background-fill-information-default",
    text: "text-text-information-invert",
    icon: "text-icon-information-invert",
  },
  information: {
    bg: "bg-background-fill-information-default",
    text: "text-text-information-invert",
    icon: "text-icon-information-invert",
  },
  warning: {
    bg: "bg-background-fill-warning-default",
    text: "text-text-warning-invert",
    icon: "text-icon-warning-invert",
  },
  danger: {
    bg: "bg-background-fill-danger-default",
    text: "text-text-neutral-invert",
    icon: "text-icon-neutral-invert",
  },
};

const SIZE_CONTAINER: Record<BadgeSize, string> = {
  md: "h-6 px-3",
  sm: "h-5 px-2",
};

const ICON_SIZE_MAP: Record<BadgeSize, IconSize> = {
  md: "md",
  sm: "sm",
};

const LABEL_STYLE: Record<BadgeSize, string> = {
  md: "text-body-02 font-medium",
  sm: "text-body-03 font-medium",
};

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      type = "neutral",
      size = "md",
      label = "Text",
      showIcon = true,
      icon,
      className,
      ...props
    },
    ref
  ) => {
    const styles = TYPE_STYLES[type];
    const iconType = ICON_MAP[type];
    const iconSize = ICON_SIZE_MAP[size];

    return (
      <span
        ref={ref}
        className={`
          inline-flex items-center gap-1 rounded-max whitespace-nowrap
          ${styles.bg} ${SIZE_CONTAINER[size]}
          ${className ?? ""}
        `}
        {...props}
      >
        {showIcon && (
          <span
            className={`shrink-0 flex items-center justify-center overflow-hidden ${styles.icon}`}
            aria-hidden="true"
          >
            {icon ?? <Icon type={iconType} size={iconSize} className={styles.icon} />}
          </span>
        )}
        <span className={`${LABEL_STYLE[size]} ${styles.text}`}>{label}</span>
      </span>
    );
  }
);

Badge.displayName = "Badge";
export default Badge;
