import { forwardRef, type HTMLAttributes, type ReactNode } from "react";

export type BadgeType =
  | "neutral"
  | "success"
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
  /** Custom icon to override the default dot */
  icon?: ReactNode;
}

function DotIcon({ className }: { className?: string }) {
  return (
    <svg
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <circle cx="4" cy="4" r="4" />
    </svg>
  );
}

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

const SIZE_ICON: Record<BadgeSize, string> = {
  md: "size-6",
  sm: "size-5",
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
            className={`shrink-0 flex items-center justify-center overflow-hidden ${styles.icon} ${SIZE_ICON[size]}`}
          >
            {icon ?? <DotIcon />}
          </span>
        )}
        <span className={`${LABEL_STYLE[size]} ${styles.text}`}>{label}</span>
      </span>
    );
  }
);

Badge.displayName = "Badge";
export default Badge;
