"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const topNavLinks = [
  { label: "Foundations", href: "/foundations" },
  { label: "Components", href: "/components" },
];

export default function DocsTopbar() {
  const pathname = usePathname();

  return (
    <header className="hidden items-center justify-start pt-6 pb-6 lg:flex lg:justify-end lg:px-20 lg:pt-10 lg:pb-10">
      <nav className="flex h-10 items-center gap-6 overflow-x-auto whitespace-nowrap lg:gap-14">
        {topNavLinks.map(({ label, href }) => {
          const isActive = pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={[
                "inline-flex items-center text-body-01 font-medium underline underline-offset-2 transition-colors",
                isActive
                  ? "text-text-primary-default"
                  : "text-text-neutral-secondary hover:text-text-neutral-default",
              ].join(" ")}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
