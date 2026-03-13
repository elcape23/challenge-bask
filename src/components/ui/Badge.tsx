import { forwardRef, type HTMLAttributes, type ReactNode } from "react";

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

/* ─── Icons per type (matches Alert / Figma) ─── */
function NeutralIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}

function SuccessIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function InfoIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}

function WarningIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  );
}

function DangerIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="m15 9-6 6" />
      <path d="m9 9 6 6" />
    </svg>
  );
}

const ICON_MAP: Record<BadgeType, React.FC<{ size: number }>> = {
  neutral: NeutralIcon,
  success: SuccessIcon,
  info: InfoIcon,
  information: InfoIcon,
  warning: WarningIcon,
  danger: DangerIcon,
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

const ICON_PX: Record<BadgeSize, number> = {
  md: 24,
  sm: 20,
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
    const IconComponent = ICON_MAP[type];
    const iconSize = ICON_PX[size];

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
            {icon ?? <IconComponent size={iconSize} />}
          </span>
        )}
        <span className={`${LABEL_STYLE[size]} ${styles.text}`}>{label}</span>
      </span>
    );
  }
);

Badge.displayName = "Badge";
export default Badge;
