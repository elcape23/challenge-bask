"use client";

import Image from "next/image";
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
    <header className="sticky top-0 z-10 flex items-center justify-between p-6">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Sena Design System"
          width={120}
          height={40}
          priority
        />
      </Link>

      <nav className="flex items-center gap-6">
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
