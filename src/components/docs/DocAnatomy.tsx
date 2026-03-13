interface AnatomyItem {
  label: string;
  description: string;
}

interface DocAnatomyProps {
  items: AnatomyItem[];
}

export default function DocAnatomy({ items }: DocAnatomyProps) {
  return (
    <div className="mb-6">
      <ol className="list-none p-0 m-0 space-y-0">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-start gap-3 py-3">
            <span className="shrink-0 flex items-center justify-center rounded-max w-6 h-6 text-body-02 font-medium bg-background-surface-neutral-default text-text-neutral-default">
              {i + 1}
            </span>
            <div>
              <span className="text-body-01 font-medium text-text-neutral-default">
                {item.label}
              </span>
              <p className="mt-0.5 text-body-01 font-regular text-text-neutral-placeholder">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
