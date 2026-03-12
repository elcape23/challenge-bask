"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation, type NavGroup } from "@/data/navigation";

function NavGroupSection({ group }: { group: NavGroup }) {
  const pathname = usePathname();

  return (
    <div className="mb-6">
      <h3 className="px-3 mb-1 text-body-03 font-medium uppercase tracking-widest text-text-neutral-placeholder">
        {group.title}
      </h3>
      <ul className="space-y-0.5">
        {group.items.map((item) => {
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
    </div>
  );
}

export default function DocsSidebar() {
  return (
    <aside className="fixed top-0 left-0 h-screen overflow-y-auto w-sidebar border-r border-border-neutral-default bg-background-surface-neutral-default px-4 py-6">
      <div className="mb-8 px-3">
        <Link href="/" className="block">
          <span className="text-heading-06 font-bold tracking-tight text-text-primary-default">
            Sena
          </span>
          <span className="ml-1.5 text-body-03 font-medium text-text-neutral-placeholder">
            Design System
          </span>
        </Link>
      </div>

      <nav>
        {navigation.map((group) => (
          <NavGroupSection key={group.title} group={group} />
        ))}
      </nav>
    </aside>
  );
}
