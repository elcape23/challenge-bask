import DocsSidebar from "./DocsSidebar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-background-default-default px-4 lg:px-[120px]">
      <DocsSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <main className="grid flex-1 grid-cols-1 gap-x-10 gap-y-10 px-0 py-6 lg:grid-cols-2 lg:gap-y-20 lg:px-8 lg:py-10">
          {children}
        </main>
      </div>
    </div>
  );
}
