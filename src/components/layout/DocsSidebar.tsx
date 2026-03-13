"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation, type NavItem } from "@/data/navigation";

function NavSection({ items }: { items: NavItem[] }) {
  const pathname = usePathname();

  return (
    <ul className="space-y-0.5">
      {items.map((item) => {
        const isActive = pathname === item.href;
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`block rounded-sm px-3 py-1.5 text-body-01 transition-colors ${
                isActive
                  ? "text-text-primary-default bg-primary-100 font-medium"
                  : "text-text-neutral-secondary font-regular hover:bg-background-fill-neutral-default"
              }`}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default function DocsSidebar() {
  const pathname = usePathname();

  const isFoundations = pathname.startsWith("/foundations");
  const isComponents = pathname.startsWith("/components");

  if (!isFoundations && !isComponents) return null;

  const activeGroup = navigation.find(
    (g) => g.title === (isFoundations ? "Foundations" : "Components"),
  );

  if (!activeGroup) return null;

  return (
    <>
      <div className="w-sidebar shrink-0" aria-hidden />
      <aside className="fixed left-[120px] top-0 h-screen w-sidebar overflow-y-auto px-4 pt-10 pb-6 flex flex-col bg-background-default-default z-10">
      <Link href="/" className="h-10 flex items-center shrink-0 mb-20">
        <Image
          src="/logo.webp"
          alt="Sena Design System"
          width={120}
          height={40}
          className="h-10 w-auto object-contain"
          priority
        />
      </Link>
      <nav className="flex-1 min-h-0">
        <NavSection items={activeGroup.items} />
      </nav>
    </aside>
    </>
  );
}
