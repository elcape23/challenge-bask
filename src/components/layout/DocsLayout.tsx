import DocsSidebar from "./DocsSidebar";
import DocsTopbar from "./DocsTopbar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background-default-default">
      <DocsSidebar />
      <div className="ml-[var(--width-sidebar)]">
        <DocsTopbar />
        <main className="mx-auto max-w-content px-8 py-10">
          {children}
        </main>
      </div>
    </div>
  );
}
