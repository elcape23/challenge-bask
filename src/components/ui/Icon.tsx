"use client";

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
  | "ban"
  | "google"
  | "moon"
  | "sun-medium";

export type IconSize = "sm" | "md";

/**
 * Figma node 29-1135: Each icon has specific container size and padding.
 * Uses actual Figma-exported SVG assets from /icons/.
 */
type IconConfig = {
  container: string;
  padding: string;
  layout?: string;
};

const CONFIG: Record<IconType, { sm: IconConfig; md: IconConfig }> = {
  house: {
    sm: { container: "size-[20px]", padding: "p-[3px_2px]", layout: "flex items-center justify-center" },
    md: { container: "size-[24px]", padding: "p-[3px_2px]", layout: "flex items-center justify-center" },
  },
  "chevron-right": {
    sm: { container: "size-[20px]", padding: "px-[9px] py-[6px]", layout: "flex items-center justify-center" },
    md: { container: "size-[24px]", padding: "px-[9px] py-[6px]", layout: "flex items-center justify-center" },
  },
  "chevron-left": {
    sm: { container: "size-[20px]", padding: "px-[9px] py-[6px]", layout: "flex items-center justify-center" },
    md: { container: "size-[24px]", padding: "px-[9px] py-[6px]", layout: "flex items-center justify-center" },
  },
  "chevron-down": {
    sm: { container: "size-[20px]", padding: "px-[6px] py-[9px]", layout: "flex flex-col items-center justify-center" },
    md: { container: "size-[24px]", padding: "px-[6px] py-[9px]", layout: "flex flex-col items-center justify-center" },
  },
  "chevron-up": {
    sm: { container: "size-[20px]", padding: "px-[6px] py-[9px]", layout: "flex flex-col items-center justify-center" },
    md: { container: "size-[24px]", padding: "px-[6px] py-[9px]", layout: "flex flex-col items-center justify-center" },
  },
  check: {
    sm: { container: "size-[20px]", padding: "px-[4px] py-[6px]", layout: "flex flex-col items-start justify-center" },
    md: { container: "size-[24px]", padding: "px-[4px] py-[6px]", layout: "flex flex-col items-start justify-center" },
  },
  minus: {
    sm: { container: "size-[20px]", padding: "p-0", layout: "flex items-center justify-center" },
    md: { container: "size-[24px]", padding: "p-0", layout: "flex items-center justify-center" },
  },
  "shopping-cart": {
    sm: { container: "size-[20px]", padding: "p-[2px]", layout: "flex items-center justify-center" },
    md: { container: "size-[20px]", padding: "p-[2px]", layout: "flex items-center justify-center" },
  },
  "user-round": {
    sm: { container: "size-[20px]", padding: "px-[3px] py-[2px]", layout: "flex items-center justify-center" },
    md: { container: "size-[20px]", padding: "px-[3px] py-[2px]", layout: "flex items-center justify-center" },
  },
  "clipboard-plus": {
    sm: { container: "size-[20px]", padding: "px-[3px] py-[2px]", layout: "flex items-center justify-center" },
    md: { container: "size-[20px]", padding: "px-[3px] py-[2px]", layout: "flex items-center justify-center" },
  },
  "message-circle-more": {
    sm: { container: "size-[20px]", padding: "p-[2px]", layout: "flex items-center justify-center" },
    md: { container: "size-[20px]", padding: "p-[2px]", layout: "flex items-center justify-center" },
  },
  menu: {
    sm: { container: "size-[20px]", padding: "px-[3px] py-[4px]", layout: "flex flex-col items-center justify-center" },
    md: { container: "size-[20px]", padding: "px-[3px] py-[4px]", layout: "flex flex-col items-center justify-center" },
  },
  plus: {
    sm: { container: "size-[20px]", padding: "p-[4px]", layout: "flex items-center justify-center" },
    md: { container: "size-[20px]", padding: "p-[4px]", layout: "flex items-center justify-center" },
  },
  x: {
    sm: { container: "size-[20px]", padding: "p-[5px]", layout: "flex items-center justify-center" },
    md: { container: "size-[20px]", padding: "p-[5px]", layout: "flex items-center justify-center" },
  },
  "refresh-cw": {
    sm: { container: "size-[20px]", padding: "p-[2px]", layout: "flex items-center justify-center" },
    md: { container: "size-[20px]", padding: "p-[2px]", layout: "flex items-center justify-center" },
  },
  "circle-x": {
    sm: { container: "size-[20px]", padding: "p-[2px]", layout: "flex items-center justify-center" },
    md: { container: "size-[20px]", padding: "p-[2px]", layout: "flex items-center justify-center" },
  },
  ban: {
    sm: { container: "size-[20px]", padding: "p-[2px]", layout: "flex items-center justify-center" },
    md: { container: "size-[20px]", padding: "p-[2px]", layout: "flex items-center justify-center" },
  },
  google: {
    sm: { container: "size-[20px]", padding: "p-0", layout: "flex items-center justify-center" },
    md: { container: "size-[20px]", padding: "p-0", layout: "flex items-center justify-center" },
  },
  moon: {
    sm: { container: "size-[20px]", padding: "p-[2px]", layout: "flex flex-col items-center justify-center" },
    md: { container: "size-[20px]", padding: "p-[2px]", layout: "flex flex-col items-center justify-center" },
  },
  "sun-medium": {
    sm: { container: "size-[20px]", padding: "p-0", layout: "flex items-center justify-center" },
    md: { container: "size-[20px]", padding: "p-[3px]", layout: "flex items-center justify-center" },
  },
};

export interface IconProps {
  type: IconType;
  size?: IconSize;
  className?: string;
  "aria-hidden"?: boolean;
}

export default function Icon({
  type,
  size = "md",
  className = "",
  "aria-hidden": ariaHidden = true,
}: IconProps) {
  const cfg = CONFIG[type][size];
  const src = `/icons/${type}-${size}.svg`;

  return (
    <span
      className={`${cfg.container} ${cfg.padding} ${cfg.layout ?? "flex items-center justify-center"} overflow-clip shrink-0 text-icon-neutral-default ${className}`.trim()}
      aria-hidden={ariaHidden}
    >
      <img
        src={src}
        alt=""
        className="block size-full object-contain"
        width={size === "md" && ["chevron-right", "chevron-left", "chevron-down", "chevron-up", "check", "minus"].includes(type) ? 24 : 20}
        height={size === "md" && ["chevron-right", "chevron-left", "chevron-down", "chevron-up", "check", "minus"].includes(type) ? 24 : 20}
      />
    </span>
  );
}
