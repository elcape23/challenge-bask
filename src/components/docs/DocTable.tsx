interface DocTableProps {
  headers: string[];
  rows: string[][];
}

export default function DocTable({ headers, rows }: DocTableProps) {
  return (
    <div className="overflow-x-auto mb-6 rounded-md border border-border-neutral-default">
      <table className="w-full text-left text-body-02">
        <thead>
          <tr className="bg-background-surface-neutral-default">
            {headers.map((header) => (
              <th
                key={header}
                className="px-4 py-3 text-text-neutral-default font-medium border-b border-border-neutral-default"
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
                i < rows.length - 1 ? "border-b border-border-neutral-disabled" : ""
              }
            >
              {row.map((cell, j) => (
                <td
                  key={j}
                  className="px-4 py-3 text-text-neutral-secondary font-regular"
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
