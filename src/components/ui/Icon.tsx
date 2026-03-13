"use client";

import type { LucideIcon } from "lucide-react";
import {
  Ban,
  CalendarSync,
  Check,
  ChartColumnIncreasing,
  Chrome,
  CircleAlert,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  CircleX,
  ClipboardPlus,
  House,
  Menu,
  MessageCircleMore,
  Minus,
  Moon,
  Plus,
  RefreshCw,
  ShoppingCart,
  SquareArrowOutUpRight,
  SunMedium,
  TriangleAlert,
  UserRound,
  X,
} from "lucide-react";

export type IconType =
  | "house"
  | "chevron-right"
  | "chevron-left"
  | "chevron-down"
  | "chevron-up"
  | "check"
  | "minus"
  | "shopping-cart"
  | "user-round"
  | "clipboard-plus"
  | "message-circle-more"
  | "menu"
  | "plus"
  | "x"
  | "refresh-cw"
  | "circle-x"
  | "circle-alert"
  | "triangle-alert"
  | "ban"
  | "google"
  | "moon"
  | "sun-medium"
  | "square-arrow-up-right"
  | "chart-column-increasing"
  | "calendar-sync";

export type IconSize = "sm" | "md";

/**
 * Figma node 29-1135: each icon has a specific container size and padding.
 * Lucide icons inherit currentColor and keep their original stroke width.
 */
type IconConfig = {
  container: string;
  layout?: string;
};

const CONFIG: Record<IconType, { sm: IconConfig; md: IconConfig }> = {
  house: {
    sm: { container: "size-[20px]", layout: "flex items-center justify-center" },
    md: { container: "size-[24px]", layout: "flex items-center justify-center" },
  },
  "chevron-right": {
    sm: { container: "size-[20px]", layout: "flex items-center justify-center" },
    md: { container: "size-[24px]", layout: "flex items-center justify-center" },
  },
  "chevron-left": {
    sm: { container: "size-[20px]", layout: "flex items-center justify-center" },
    md: { container: "size-[24px]", layout: "flex items-center justify-center" },
  },
  "chevron-down": {
    sm: { container: "size-[20px]", layout: "flex flex-col items-center justify-center" },
    md: { container: "size-[24px]", layout: "flex flex-col items-center justify-center" },
  },
  "chevron-up": {
    sm: { container: "size-[20px]", layout: "flex flex-col items-center justify-center" },
    md: { container: "size-[24px]", layout: "flex flex-col items-center justify-center" },
  },
  check: {
    sm: { container: "size-[20px]", layout: "flex flex-col items-start justify-center" },
    md: { container: "size-[24px]", layout: "flex flex-col items-start justify-center" },
  },
  minus: {
    sm: { container: "size-[20px]", layout: "flex items-center justify-center" },
    md: { container: "size-[24px]", layout: "flex items-center justify-center" },
  },
  "shopping-cart": {
    sm: { container: "size-[20px]", layout: "flex items-center justify-center" },
    md: { container: "size-[24px]", layout: "flex items-center justify-center" },
  },
  "user-round": {
    sm: { container: "size-[20px]", layout: "flex items-center justify-center" },
    md: { container: "size-[24px]", layout: "flex items-center justify-center" },
  },
  "clipboard-plus": {
    sm: { container: "size-[20px]", layout: "flex items-center justify-center" },
    md: { container: "size-[24px]", layout: "flex items-center justify-center" },
  },
  "message-circle-more": {
    sm: { container: "size-[20px]", layout: "flex items-center justify-center" },
    md: { container: "size-[24px]", layout: "flex items-center justify-center" },
  },
  menu: {
    sm: { container: "size-[20px]", layout: "flex flex-col items-center justify-center" },
    md: { container: "size-[24px]", layout: "flex flex-col items-center justify-center" },
  },
  plus: {
    sm: { container: "size-[20px]", layout: "flex items-center justify-center" },
    md: { container: "size-[24px]", layout: "flex items-center justify-center" },
  },
  x: {
    sm: { container: "size-[20px]", layout: "flex items-center justify-center" },
    md: { container: "size-[24px]", layout: "flex items-center justify-center" },
  },
  "refresh-cw": {
    sm: { container: "size-[20px]", layout: "flex items-center justify-center" },
    md: { container: "size-[24px]", layout: "flex items-center justify-center" },
  },
  "circle-x": {
    sm: { container: "size-[20px]", layout: "flex items-center justify-center" },
    md: { container: "size-[24px]", layout: "flex items-center justify-center" },
  },
  "circle-alert": {
    sm: { container: "size-[20px]", layout: "flex items-center justify-center" },
    md: { container: "size-[24px]", layout: "flex items-center justify-center" },
  },
  "triangle-alert": {
    sm: { container: "size-[20px]", layout: "flex items-center justify-center" },
    md: { container: "size-[24px]", layout: "flex items-center justify-center" },
  },
  ban: {
    sm: { container: "size-[20px]", layout: "flex items-center justify-center" },
    md: { container: "size-[24px]", layout: "flex items-center justify-center" },
  },
  google: {
    sm: { container: "size-[20px]", layout: "flex items-center justify-center" },
    md: { container: "size-[24px]", layout: "flex items-center justify-center" },
  },
  moon: {
    sm: { container: "size-[20px]", layout: "flex flex-col items-center justify-center" },
    md: { container: "size-[24px]", layout: "flex flex-col items-center justify-center" },
  },
  "sun-medium": {
    sm: { container: "size-[20px]", layout: "flex items-center justify-center" },
    md: { container: "size-[24px]", layout: "flex items-center justify-center" },
  },
  "square-arrow-up-right": {
    sm: { container: "size-[20px]", layout: "flex items-center justify-center" },
    md: { container: "size-[24px]", layout: "flex items-center justify-center" },
  },
  "chart-column-increasing": {
    sm: { container: "size-[20px]", layout: "flex items-center justify-center" },
    md: { container: "size-[24px]", layout: "flex items-center justify-center" },
  },
  "calendar-sync": {
    sm: { container: "size-[20px]", layout: "flex items-center justify-center" },
    md: { container: "size-[24px]", layout: "flex items-center justify-center" },
  },
};

export interface IconProps {
  type: IconType;
  size?: IconSize;
  className?: string;
  "aria-hidden"?: boolean;
}

const LUCIDE_ICONS: Record<IconType, LucideIcon> = {
  house: House,
  "chevron-right": ChevronRight,
  "chevron-left": ChevronLeft,
  "chevron-down": ChevronDown,
  "chevron-up": ChevronUp,
  check: Check,
  minus: Minus,
  "shopping-cart": ShoppingCart,
  "user-round": UserRound,
  "clipboard-plus": ClipboardPlus,
  "message-circle-more": MessageCircleMore,
  menu: Menu,
  plus: Plus,
  x: X,
  "refresh-cw": RefreshCw,
  "circle-x": CircleX,
  "circle-alert": CircleAlert,
  "triangle-alert": TriangleAlert,
  ban: Ban,
  google: Chrome,
  moon: Moon,
  "sun-medium": SunMedium,
  "square-arrow-up-right": SquareArrowOutUpRight,
  "chart-column-increasing": ChartColumnIncreasing,
  "calendar-sync": CalendarSync,
};

export default function Icon({
  type,
  size = "md",
  className = "",
  "aria-hidden": ariaHidden = true,
}: IconProps) {
  const cfg = CONFIG[type][size];
  const LucideComponent = LUCIDE_ICONS[type];

  return (
    <span
      className={`${cfg.container} ${cfg.layout ?? "flex items-center justify-center"} overflow-clip shrink-0 text-icon-neutral-default ${className}`.trim()}
      aria-hidden={ariaHidden}
    >
      <LucideComponent
        className="block size-full"
        size="100%"
      />
    </span>
  );
}
