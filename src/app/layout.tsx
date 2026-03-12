import type { Metadata } from "next";
import localFont from "next/font/local";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const suisseIntl = localFont({
  src: [
    {
      path: "../../public/font/SuisseIntlTrial-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/font/SuisseIntlTrial-RegularIt.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/font/SuisseIntlTrial-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/font/SuisseIntlTrial-MediumIt.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/font/SuisseIntlTrial-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/font/SuisseIntlTrial-BoldIt.otf",
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
      <body className={`${suisseIntl.className} ${suisseIntl.variable} ${jetbrainsMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
