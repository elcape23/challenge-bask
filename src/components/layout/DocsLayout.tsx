 "use client";

import { usePathname } from "next/navigation";
import DocsSidebar from "./DocsSidebar";
import DocsTopbar from "./DocsTopbar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isDocsMobilePage = pathname === "/docs-mobile";
  const isFoundationDetailPage =
    pathname.startsWith("/foundations/") && pathname !== "/foundations";
  const showDesktopTopbar =
    pathname.startsWith("/foundations") || pathname.startsWith("/components");

  return (
    <div className="flex min-h-screen bg-background-default-default px-4 lg:px-[120px]">
      <DocsSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        {showDesktopTopbar && <DocsTopbar />}
        <main
          className={`grid flex-1 grid-cols-1 gap-x-10 gap-y-10 px-0 ${
            isDocsMobilePage ? "py-0" : "py-6 lg:py-10"
          } ${
            isFoundationDetailPage
              ? "lg:[&>*:first-child]:col-start-1 lg:[&>*:nth-child(2)]:col-start-1 lg:[&>*:nth-child(3)]:col-start-1 lg:[&>*:nth-child(n+4)]:col-span-2"
              : ""
          } lg:grid-cols-2 lg:gap-y-20 lg:px-8`}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
