interface DocPreviewProps {
  title?: string;
  children: React.ReactNode;
  /** When false, removes corner radius */
  rounded?: boolean;
  /** When false, removes border */
  border?: boolean;
  /** When true, uses vertical padding only (py-8) instead of p-8 */
  verticalPaddingOnly?: boolean;
  /** When true, content area is square (aspect-ratio 1:1) */
  aspectSquare?: boolean;
  /** When "table", uses heading-04 style to match DocTable titles */
  titleVariant?: "default" | "table";
  className?: string;
}

export default function DocPreview({
  title,
  children,
  rounded = true,
  border = true,
  verticalPaddingOnly = false,
  aspectSquare = false,
  titleVariant = "default",
  className = "",
}: DocPreviewProps) {
  return (
    <div
      className={`mb-6 flex flex-col overflow-hidden ${border ? "border border-border-neutral-default" : ""} ${rounded ? "rounded-md" : ""} ${className}`}
    >
      {title && (
        <div
          className={`px-4 py-2 bg-background-surface-neutral-default border-b border-border-neutral-default ${
            titleVariant === "table" ? "text-heading-04 font-medium text-text-neutral-default" : "text-body-03 font-medium text-text-neutral-placeholder"
          }`}
        >
          {title}
        </div>
      )}
      <div
        className={`flex flex-1 items-center justify-center bg-white min-h-[120px] ${
          aspectSquare ? "aspect-square w-full" : ""
        } ${verticalPaddingOnly ? "py-8 px-0" : "p-8"}`}
      >
        {children}
      </div>
    </div>
  );
}
