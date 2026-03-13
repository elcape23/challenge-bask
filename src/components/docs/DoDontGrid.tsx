import Icon from "@/components/ui/Icon";

interface DoDontItem {
  description: string;
}

interface DoDontGridProps {
  doItems: DoDontItem[];
  dontItems: DoDontItem[];
}

export default function DoDontGrid({ doItems, dontItems }: DoDontGridProps) {
  return (
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 mb-6">
      <div className="overflow-hidden">
        <div className="px-4 py-2 text-text-success-default border-b-2 border-b-border-success-default text-body-03 font-bold uppercase tracking-widest">
          Do
        </div>
        <ul className="list-none m-0 p-4">
          {doItems.map((item, i) => (
            <li
              key={i}
              className={`flex items-start gap-2 text-body-01 font-regular text-text-neutral-secondary ${
                i < doItems.length - 1 ? "mb-2" : ""
              }`}
            >
              <Icon
                type="check"
                size="sm"
                className="text-icon-success-default shrink-0 mt-0.5"
              />
              {item.description}
            </li>
          ))}
        </ul>
      </div>

      <div className="overflow-hidden">
        <div className="px-4 py-2 text-text-danger-default border-b-2 border-b-border-danger-default text-body-03 font-bold uppercase tracking-widest">
          Don&apos;t
        </div>
        <ul className="list-none m-0 p-4">
          {dontItems.map((item, i) => (
            <li
              key={i}
              className={`flex items-start gap-2 text-body-01 font-regular text-text-neutral-secondary ${
                i < dontItems.length - 1 ? "mb-2" : ""
              }`}
            >
              <Icon
                type="x"
                size="sm"
                className="text-icon-danger-default shrink-0 mt-0.5"
              />
              {item.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
