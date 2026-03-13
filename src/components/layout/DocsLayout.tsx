import DocsSidebar from "./DocsSidebar";
import DocsTopbar from "./DocsTopbar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background-default-default px-[120px] flex">
      <DocsSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <DocsTopbar />
        <main className="flex-1 px-8 py-10 grid grid-cols-2 gap-x-10 gap-y-20">
          {children}
        </main>
      </div>
    </div>
  );
}
