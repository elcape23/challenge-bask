type CalloutVariant = "info" | "warning" | "success" | "critical";

interface DocCalloutProps {
  variant?: CalloutVariant;
  title?: string;
  children: React.ReactNode;
}

const variantClasses: Record<
  CalloutVariant,
  { bg: string; border: string; titleColor: string; icon: string }
> = {
  info: {
    bg: "bg-background-surface-information-default",
    border: "border-l-border-information-default",
    titleColor: "text-text-information-default",
    icon: "ℹ",
  },
  warning: {
    bg: "bg-background-surface-warning-default",
    border: "border-l-border-warning-default",
    titleColor: "text-text-warning-default",
    icon: "⚠",
  },
  success: {
    bg: "bg-background-surface-success-default",
    border: "border-l-border-success-default",
    titleColor: "text-text-success-default",
    icon: "✓",
  },
  critical: {
    bg: "bg-background-surface-danger-default",
    border: "border-l-border-danger-default",
    titleColor: "text-text-danger-default",
    icon: "✕",
  },
};

export default function DocCallout({
  variant = "info",
  title,
  children,
}: DocCalloutProps) {
  const v = variantClasses[variant];

  return (
    <div
      className={`${v.bg} border-l-3 ${v.border} rounded-sm px-5 py-4 mb-6 text-body-02`}
    >
      {title && (
        <div className={`flex items-center gap-2 font-medium ${v.titleColor} mb-1`}>
          <span>{v.icon}</span>
          {title}
        </div>
      )}
      <div className="text-text-neutral-secondary">{children}</div>
    </div>
  );
}
