interface DocTableProps {
  headers: string[];
  rows: string[][];
  variant?: "default" | "surface";
  title?: string;
  backgroundClass?: string;
}

export default function DocTable({
  headers,
  rows,
  variant = "default",
  title,
  backgroundClass,
}: DocTableProps) {
  const isSurface = variant === "surface";
  const surfaceBg = backgroundClass ?? "bg-background-surface-neutral-default";

  return (
    <div
      className={`overflow-x-auto mb-6 ${
        isSurface
          ? `${surfaceBg} p-10`
          : "rounded-md border border-border-neutral-default"
      }`}
    >
      {isSurface && title && (
        <h3 className="text-heading-04 font-medium text-text-neutral-default mb-6">
          {title}
        </h3>
      )}
      <table
        className="w-full table-fixed text-left text-body-01"
        style={{ fontFamily: '"Suisse Intl Trial Raw", sans-serif' }}
      >
        <colgroup>
          {headers.map((_, i) => (
            <col key={i} style={{ width: `${100 / headers.length}%` }} />
          ))}
        </colgroup>
        <thead>
          <tr
            className={
              isSurface
                ? "border-b border-border-neutral-default"
                : "bg-background-surface-neutral-default border-b border-border-neutral-default"
            }
          >
            {headers.map((header, j) => (
              <th
                key={header}
                className={`text-text-neutral-default ${
                  isSurface ? "py-10 font-medium" : "py-3 font-medium"
                } ${j === 0 && isSurface ? "pl-0 pr-4" : "px-4"}`}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={
                isSurface
                  ? i < rows.length - 1
                    ? "border-b border-border-neutral-default"
                    : ""
                  : i < rows.length - 1
                    ? "border-b border-border-neutral-disabled"
                    : ""
              }
            >
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`text-text-neutral-secondary font-regular ${
                    isSurface ? "py-10" : "py-3"
                  } ${j === 0 && isSurface ? "pl-0 pr-4" : "px-4"}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
