import localFont from "next/font/local";

export const suisseIntl = localFont({
  src: [
    { path: "./fonts/SuisseIntlTrial-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/SuisseIntlTrial-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/SuisseIntlTrial-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-suisse-intl",
  display: "swap",
});

export const suisseMono = localFont({
  src: [
    { path: "./fonts/SuisseIntlMonoTrial-Regular.otf", weight: "400", style: "normal" },
    { path: "./fonts/SuisseIntlMonoTrial-Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-suisse-mono",
  display: "swap",
});
