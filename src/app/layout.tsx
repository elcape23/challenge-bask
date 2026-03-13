import type { Metadata } from "next";
import { suisseIntl, suisseMono } from "./fonts";
import "./globals.css";

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
    <html
      lang="en"
      className={`${suisseIntl.variable} ${suisseMono.variable}`}
    >
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
