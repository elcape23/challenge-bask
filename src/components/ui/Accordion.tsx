"use client";

import {
  forwardRef,
  useState,
  useRef,
  useEffect,
  useId,
  type HTMLAttributes,
  type ReactNode,
} from "react";

export type AccordionSize = "sm" | "md";

export interface AccordionItemProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  /** Heading text displayed in the trigger row */
  heading: string;
  /** Size variant — affects padding, typography, and icon size */
  size?: AccordionSize;
  /** Whether the item is disabled */
  disabled?: boolean;
  /** Controlled open state (omit for uncontrolled) */
  open?: boolean;
  /** Whether the item starts open in uncontrolled mode */
  defaultOpen?: boolean;
  /** Callback when open state changes */
  onOpenChange?: (open: boolean) => void;
  /** Content revealed when the accordion item is expanded */
  children?: ReactNode;
}

function ChevronIcon({
  size,
  open,
}: {
  size: AccordionSize;
  open: boolean;
}) {
  const px = size === "sm" ? 20 : 24;
  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

const CONTAINER_SIZE: Record<AccordionSize, string> = {
  sm: "px-2 py-3",
  md: "px-2 py-4",
};

const HEADER_GAP: Record<AccordionSize, string> = {
  sm: "gap-4",
  md: "gap-4",
};

const HEADING_TEXT: Record<AccordionSize, string> = {
  sm: "text-body-01 font-regular",
  md: "text-heading-06 font-regular",
};

const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  (
    {
      heading,
      size = "sm",
      disabled = false,
      open: controlledOpen,
      defaultOpen = false,
      onOpenChange,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const isControlled = controlledOpen !== undefined;
    const [internalOpen, setInternalOpen] = useState(defaultOpen);
    const isOpen = isControlled ? controlledOpen : internalOpen;

    const contentRef = useRef<HTMLDivElement>(null);
    const [contentHeight, setContentHeight] = useState<number>(0);

    const uid = useId();
    const triggerId = `accordion-trigger-${uid}`;
    const panelId = `accordion-panel-${uid}`;

    useEffect(() => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.scrollHeight);
      }
    }, [isOpen, children]);

    const toggle = () => {
      if (disabled) return;
      const next = !isOpen;
      if (!isControlled) setInternalOpen(next);
      onOpenChange?.(next);
    };

    const borderColor = disabled
      ? "border-border-neutral-disabled"
      : "border-border-neutral-default";

    const textColor = disabled
      ? "text-text-neutral-disabled"
      : "text-text-neutral-default";

    const iconColor = disabled
      ? "text-icon-neutral-disabled"
      : "text-icon-neutral-default";

    return (
      <div
        ref={ref}
        className={`border-b ${borderColor} ${className ?? ""}`}
        {...props}
      >
        <button
          id={triggerId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          disabled={disabled}
          onClick={toggle}
          className={`
            flex w-full items-center ${CONTAINER_SIZE[size]} ${HEADER_GAP[size]}
            cursor-pointer disabled:cursor-not-allowed
            focus-visible:outline-none focus-visible:shadow-focus
            transition-colors select-none
          `}
        >
          <span
            className={`flex-1 text-left ${HEADING_TEXT[size]} ${textColor}`}
          >
            {heading}
          </span>
          <span className={iconColor}>
            <ChevronIcon size={size} open={isOpen} />
          </span>
        </button>

        <div
          id={panelId}
          role="region"
          aria-labelledby={triggerId}
          className="overflow-hidden transition-[max-height] duration-200 ease-out"
          style={{ maxHeight: isOpen ? contentHeight : 0 }}
        >
          <div ref={contentRef} className={`px-2 ${size === "sm" ? "pb-3" : "pb-4"}`}>
            {children}
          </div>
        </div>
      </div>
    );
  }
);

AccordionItem.displayName = "AccordionItem";

export type AccordionType = "single" | "multiple";

export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  /** Whether only one or multiple items can be open simultaneously */
  type?: AccordionType;
  /** Size applied to all child AccordionItems */
  size?: AccordionSize;
  /** Whether all items are disabled */
  disabled?: boolean;
  children?: ReactNode;
}

const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  ({ type = "single", size = "sm", disabled = false, children, className, ...props }, ref) => {
    const [openIndex, setOpenIndex] = useState<Set<number>>(new Set());

    const handleToggle = (index: number, isOpen: boolean) => {
      setOpenIndex((prev) => {
        const next = new Set(prev);
        if (isOpen) {
          if (type === "single") {
            next.clear();
          }
          next.add(index);
        } else {
          next.delete(index);
        }
        return next;
      });
    };

    const items = Array.isArray(children) ? children : [children];

    return (
      <div ref={ref} className={className} {...props}>
        {items.map((child, i) => {
          if (!child || typeof child !== "object" || !("props" in child)) return child;
          return (
            <AccordionItem
              key={i}
              {...child.props}
              size={child.props.size ?? size}
              disabled={child.props.disabled ?? disabled}
              open={openIndex.has(i)}
              onOpenChange={(open) => handleToggle(i, open)}
            />
          );
        })}
      </div>
    );
  }
);

Accordion.displayName = "Accordion";

export { Accordion, AccordionItem };
export default AccordionItem;
