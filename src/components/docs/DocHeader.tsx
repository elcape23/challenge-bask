interface DocHeaderProps {
  title: string;
  description?: string;
  /** Use Foundations page styling: 120px heading, heading-06 subheading */
  variant?: "default" | "foundations";
}

export default function DocHeader({ title, description, variant = "default" }: DocHeaderProps) {
  const isFoundations = variant === "foundations";
  return (
    <div className="mb-10">
      <h1
        className={`font-bold tracking-tight text-text-neutral-default ${
          description ? "mb-3" : ""
        } ${isFoundations ? "" : "text-heading-01"}`}
        style={isFoundations ? { fontSize: "120px", lineHeight: 1 } : undefined}
      >
        {title}
      </h1>
      {description && (
        <p className={isFoundations ? "text-heading-06 font-regular text-text-neutral-secondary" : "text-body-01 font-regular text-text-neutral-secondary"}>
          {description}
        </p>
      )}
    </div>
  );
}
