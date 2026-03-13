import Link from "next/link";

/**
 * Layout for the prototype page.
 * No docs sidebar — full-page prototype with optional back link.
 */
export default function PrototypeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      {/* Back to docs link — visible on both mobile and desktop */}
      <div className="fixed top-4 left-4 z-20 md:top-6 md:left-6">
        <Link
          href="/"
          className="text-body-02 font-medium text-text-primary-default hover:text-primary-700 underline underline-offset-2"
        >
          ← Back to docs
        </Link>
      </div>
      {children}
    </div>
  );
}
