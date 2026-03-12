interface DocPreviewProps {
  title?: string;
  children: React.ReactNode;
}

export default function DocPreview({ title, children }: DocPreviewProps) {
  return (
    <div className="mb-6 rounded-md border border-border-neutral-default overflow-hidden">
      {title && (
        <div className="px-4 py-2 bg-background-surface-neutral-default border-b border-border-neutral-default text-body-03 font-medium text-text-neutral-placeholder">
          {title}
        </div>
      )}
      <div className="flex items-center justify-center p-8 bg-white min-h-[120px]">
        {children}
      </div>
    </div>
  );
}
