interface DoDontItem {
  description: string;
}

interface DoDontGridProps {
  doItems: DoDontItem[];
  dontItems: DoDontItem[];
}

export default function DoDontGrid({ doItems, dontItems }: DoDontGridProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-6">
      <div className="rounded-sm border border-border-neutral-default overflow-hidden">
        <div className="px-4 py-2 bg-background-surface-success-default text-text-success-default border-b-2 border-b-border-success-default text-body-03 font-bold uppercase tracking-widest">
          Do
        </div>
        <ul className="list-none m-0 p-4">
          {doItems.map((item, i) => (
            <li
              key={i}
              className={`flex items-start gap-2 text-body-02 font-regular text-text-neutral-secondary ${
                i < doItems.length - 1 ? "mb-2" : ""
              }`}
            >
              <span className="text-text-success-default">✓</span>
              {item.description}
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-sm border border-border-neutral-default overflow-hidden">
        <div className="px-4 py-2 bg-background-surface-danger-default text-text-danger-default border-b-2 border-b-border-danger-default text-body-03 font-bold uppercase tracking-widest">
          Don&apos;t
        </div>
        <ul className="list-none m-0 p-4">
          {dontItems.map((item, i) => (
            <li
              key={i}
              className={`flex items-start gap-2 text-body-02 font-regular text-text-neutral-secondary ${
                i < dontItems.length - 1 ? "mb-2" : ""
              }`}
            >
              <span className="text-text-danger-default">✕</span>
              {item.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
