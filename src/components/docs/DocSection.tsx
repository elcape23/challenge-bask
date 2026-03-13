interface DocSectionProps {
  title: string;
  children: React.ReactNode;
  id?: string;
  /** When true, hides the section heading (e.g. when table has its own title inside) */
  hideTitle?: boolean;
}

export default function DocSection({ title, children, id, hideTitle }: DocSectionProps) {
  const sectionId = id ?? title.toLowerCase().replace(/\s+/g, "-");

  return (
    <section id={sectionId} className="mb-12">
      {!hideTitle && (
        <h2 className="text-heading-04 font-medium text-text-neutral-default mb-4 pb-3">
          {title}
        </h2>
      )}
      <div className="text-body-01 font-regular text-text-neutral-secondary">
        {children}
      </div>
    </section>
  );
}
