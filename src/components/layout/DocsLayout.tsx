import DocsSidebar from "./DocsSidebar";
import DocsTopbar from "./DocsTopbar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background-default-default px-[120px]">
      <DocsTopbar />
      <div className="flex">
        <DocsSidebar />
        <main className="flex-1 min-w-0 px-8 py-10">
          {children}
        </main>
      </div>
    </div>
  );
}
