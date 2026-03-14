 "use client";

import { usePathname } from "next/navigation";
import DocsSidebar from "./DocsSidebar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isDocsMobilePage = pathname === "/docs-mobile";

  return (
    <div className="flex min-h-screen bg-background-default-default px-4 lg:px-[120px]">
      <DocsSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <main
          className={`grid flex-1 grid-cols-1 gap-x-10 gap-y-10 px-0 ${
            isDocsMobilePage ? "py-0" : "py-6 lg:py-10"
          } lg:grid-cols-2 lg:gap-y-20 lg:px-8`}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
