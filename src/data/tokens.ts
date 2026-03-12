/**
 * Design tokens extracted from Figma (file: rUTDysnWX8RyVFHLOk047C)
 * Source of truth: Figma → this file → CSS custom properties → UI
 */

export const fontFamily = {
  default: "'Suisse Intl', 'Suisse Intl Trial', system-ui, -apple-system, sans-serif",
};

export const typescale = {
  heading: {
    "01": { size: 48, lineHeight: 60, letterSpacing: 0 },
    "02": { size: 40, lineHeight: 48, letterSpacing: 0 },
    "03": { size: 33, lineHeight: 36, letterSpacing: 0 },
    "04": { size: 28, lineHeight: 32, letterSpacing: 0 },
    "05": { size: 23, lineHeight: 28, letterSpacing: 0 },
    "06": { size: 19, lineHeight: 24, letterSpacing: 0 },
  },
  body: {
    "01": { size: 16, lineHeight: 24, letterSpacing: 0 },
    "02": { size: 13, lineHeight: 16, letterSpacing: 0 },
    "03": { size: 11, lineHeight: 12, letterSpacing: 0 },
  },
} as const;

export const fontWeight = {
  regular: 400,
  medium: 500,
  bold: 700,
} as const;

export const colors = {
  light: {
    neutral: {
      50: "#f7f7f3",
      100: "#f1f2ec",
      200: "#e4e6de",
      300: "#d3d6cc",
      400: "#b7bbaf",
      500: "#93988d",
      600: "#6e736a",
      700: "#4e534d",
      800: "#31352f",
      900: "#1c1f1b",
    },
    primary: {
      50: "#f2f6f1",
      100: "#e4ece2",
      200: "#c9d7c6",
      300: "#a6bba0",
      400: "#7e9b76",
      500: "#5e7f55",
      600: "#46683e",
      700: "#33522d",
      800: "#223f1e",
      900: "#153014",
    },
    secondary: {
      50: "#faf8f4",
      100: "#f3eee4",
      200: "#e5d9c4",
      300: "#d2bea0",
      400: "#b99e79",
      500: "#9b7f5b",
      600: "#7c664a",
      700: "#625039",
      800: "#4b3d2d",
      900: "#352a1f",
    },
    success: {
      50: "#f2faf5",
      100: "#e0f4e7",
      200: "#c1e8cf",
      300: "#94d7ad",
      400: "#60be81",
      500: "#369c5e",
      600: "#287d4a",
    },
    info: {
      50: "#f3f7fb",
      100: "#e6eef7",
      200: "#cedceb",
      300: "#adc2dd",
      400: "#86a4ca",
      500: "#6488b4",
      600: "#4e6d92",
    },
    warning: {
      50: "#fff8ee",
      100: "#fcefd9",
      200: "#f7deb0",
      300: "#eec67c",
      400: "#dda146",
      500: "#b97c20",
      600: "#925f18",
    },
    danger: {
      50: "#fff4f3",
      100: "#fde5e2",
      200: "#f6c4bd",
      300: "#eb978c",
      400: "#d86759",
      500: "#b84335",
      600: "#903328",
    },
  },
  dark: {
    neutral: {
      50: "#1b1f1a",
      100: "#31362f",
      200: "#4d534b",
      300: "#6c7369",
      400: "#91988d",
      500: "#b4baae",
      600: "#d2d6c9",
      700: "#e4e6dd",
      800: "#f2f3ed",
      900: "#f7f8f4",
    },
    primary: {
      50: "#16300f",
      100: "#204217",
      200: "#2e5425",
      300: "#406736",
      400: "#587f4b",
      500: "#7ea271",
      600: "#a9c19f",
      700: "#cbdcc5",
      800: "#e5eee1",
      900: "#f3f7f1",
    },
    secondary: {
      50: "#352a1f",
      100: "#4b3d2d",
      200: "#625039",
      300: "#7c664a",
      400: "#9b7f5b",
      500: "#b99e79",
      600: "#d2bea0",
      700: "#e5d9c4",
      800: "#f3eee4",
      900: "#faf8f4",
    },
  },
  semantic: {
    light: {
      textNeutral: "#1c1f1b",
      textNeutralInvert: "#f1f2ec",
      textPrimary: "#153014",
      textPrimaryInvert: "#e4ece2",
      bgDefault: "#f7f7f3",
      bgInvert: "#1c1f1b",
      bgFillNeutral: "#e4e6de",
    },
    dark: {
      textNeutral: "#f7f8f4",
      textNeutralInvert: "#31362f",
      textPrimary: "#f3f7f1",
      textPrimaryInvert: "#16300f",
    },
  },
} as const;

export const spacing = {
  "space-0": 2,
  "space-1": 4,
  "space-2": 8,
  "space-3": 12,
  "space-4": 16,
  "space-5": 20,
  "space-6": 24,
  "space-7": 28,
  "space-8": 32,
  "space-9": 36,
  "space-10": 40,
  "space-11": 44,
  "space-12": 48,
  "space-14": 56,
  "space-16": 64,
  "space-20": 80,
  "space-24": 96,
  "space-28": 112,
} as const;

export const borderRadius = {
  md: 12,
} as const;

export const shadows = {
  xs: "0 1px 2px 0 rgba(0, 0, 0, 0.10)",
  sm: "0 1px 3px 0 rgba(0, 0, 0, 0.10), 0 1px 2px -1px rgba(0, 0, 0, 0.10)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.10), 0 2px 4px -2px rgba(0, 0, 0, 0.10)",
  focus: "0 0 0 3px rgba(0, 0, 0, 0.20)",
} as const;

export const blur = {
  20: "blur(20px)",
} as const;

export const grid = {
  mobile: {
    columns: 4,
    margin: 20,
    gutter: 12,
  },
} as const;

export const iconSizes = {
  sm: 20,
  md: 24,
  decorative: 40,
} as const;

export const iconTypes = [
  "house",
  "chevron-right",
  "chevron-left",
  "chevron-down",
  "chevron-up",
  "check",
  "minus",
  "shopping-cart",
  "user-round",
  "clipboard-plus",
  "message-circle-more",
  "menu",
  "plus",
  "x",
  "refresh-cw",
  "circle-x",
  "ban",
  "google",
  "moon",
  "sun-medium",
] as const;

export const decorativeIconTypes = [
  "square-arrow-up-right",
  "chart-column-increasing",
  "calendar-sync",
] as const;

export const logoSizes = {
  xs: { width: 90, height: 24 },
  sm: { width: 120, height: 32 },
  md: { width: 180, height: 48 },
  lg: { width: 270, height: 72 },
} as const;
