import DocsLayout from "@/components/layout/DocsLayout";

export default function DocsRouteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DocsLayout>{children}</DocsLayout>;
}
