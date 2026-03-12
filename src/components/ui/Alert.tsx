"use client";

import { forwardRef, type HTMLAttributes, type ReactNode } from "react";

export type AlertType = "neutral" | "success" | "info" | "warning" | "danger";
export type AlertSize = "sm" | "md";

export interface AlertProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  /** Color type / semantic variant */
  type?: AlertType;
  /** Size variant — md (default) or sm (compact) */
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

/* ─── Icons per type ─── */
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

const ICON_MAP: Record<AlertType, React.FC<{ size: number }>> = {
  neutral: NeutralIcon,
  success: SuccessIcon,
  info: InfoIcon,
  warning: WarningIcon,
  danger: DangerIcon,
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

const ICON_PX: Record<AlertSize, number> = {
  md: 24,
  sm: 20,
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
    const IconComponent = ICON_MAP[type];
    const iconSize = ICON_PX[size];

    return (
      <div
        ref={ref}
        role="alert"
        className={`
          flex items-center border rounded-sm
          ${styles.bg} ${styles.border}
          ${SIZE_CONTAINER[size]}
          ${className ?? ""}
        `}
        {...props}
      >
        {/* Left: icon + text */}
        <div className={`flex flex-1 items-center min-w-0 ${SIZE_INNER_GAP[size]}`}>
          {showIcon && (
            <span className={`shrink-0 flex items-center ${styles.icon}`}>
              {icon ?? <IconComponent size={iconSize} />}
            </span>
          )}

          <div className="flex flex-col flex-1 min-w-0">
            {showHeading && (
              <p className={`${HEADING_STYLE[size]} ${styles.text} m-0`}>
                {heading}
              </p>
            )}
            {showDescription && (
              <p className={`${DESCRIPTION_STYLE[size]} ${styles.text} m-0`}>
                {description}
              </p>
            )}
          </div>
        </div>

        {/* Right: action button */}
        {showButton && (
          <button
            type="button"
            onClick={onButtonClick}
            className={`
              shrink-0 text-body-02 font-medium underline
              bg-transparent border-0 p-0 cursor-pointer
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
