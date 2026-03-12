interface DocSectionProps {
  title: string;
  children: React.ReactNode;
  id?: string;
}

export default function DocSection({ title, children, id }: DocSectionProps) {
  const sectionId = id ?? title.toLowerCase().replace(/\s+/g, "-");

  return (
    <section id={sectionId} className="mb-12">
      <h2 className="text-heading-06 font-medium text-text-neutral-default mb-4 pb-3 border-b border-border-neutral-disabled">
        {title}
      </h2>
      <div className="text-body-01 font-regular text-text-neutral-secondary">
        {children}
      </div>
    </section>
  );
}
