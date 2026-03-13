"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const topNavLinks = [
  { label: "Foundations", href: "/foundations" },
  { label: "Components", href: "/components" },
  { label: "Prototype", href: "/specs" },
];

export default function DocsTopbar() {
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-end pt-10 px-20 pb-10">
      <nav className="flex items-center gap-14 h-10">
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
