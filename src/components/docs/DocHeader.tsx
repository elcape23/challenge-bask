interface DocHeaderProps {
  title: string;
  description?: string;
}

export default function DocHeader({ title, description }: DocHeaderProps) {
  return (
    <div className="mb-10">
      <h1
        className={`text-heading-01 font-bold tracking-tight text-text-neutral-default ${
          description ? "mb-3" : ""
        }`}
      >
        {title}
      </h1>
      {description && (
        <p className="text-body-01 font-regular text-text-neutral-secondary">
          {description}
        </p>
      )}
    </div>
  );
}
