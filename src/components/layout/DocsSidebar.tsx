"use client";

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
              className={`block rounded-sm px-3 py-1.5 text-body-02 transition-colors ${
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
    <aside className="sticky top-[var(--height-topbar)] h-[calc(100vh-var(--height-topbar))] shrink-0 overflow-y-auto w-sidebar px-4 pt-14 pb-6">
      <nav>
        <NavSection items={activeGroup.items} />
      </nav>
    </aside>
  );
}
