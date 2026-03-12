import type { Metadata } from "next";
import localFont from "next/font/local";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const suisseIntl = localFont({
  src: [
    {
      path: "../../public/font/WOFF2/SuisseIntlTrial-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/font/WOFF2/SuisseIntlTrial-RegularIt.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/font/WOFF2/SuisseIntlTrial-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/font/WOFF2/SuisseIntlTrial-MediumIt.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/font/WOFF2/SuisseIntlTrial-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/font/WOFF2/SuisseIntlTrial-BoldIt.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-suisse-intl",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sena Design System",
  description: "Documentation for the Sena design system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/font/WOFF2/SuisseIntlTrial-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${suisseIntl.className} ${suisseIntl.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
