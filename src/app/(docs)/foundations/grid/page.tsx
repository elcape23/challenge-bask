import DocHeader from "@/components/docs/DocHeader";
import DocSection from "@/components/docs/DocSection";
import DocTable from "@/components/docs/DocTable";
import DocCallout from "@/components/docs/DocCallout";
import DoDontGrid from "@/components/docs/DoDontGrid";

export default function GridPage() {
  return (
    <>
      <DocHeader
        title="Grid"
        description="The grid system provides structural consistency for layout and content alignment across screen sizes."
        variant="foundations"
      />

      <DocSection title="Overview">
        <p className="mb-4">
          The grid establishes a flexible column-based structure that adapts
          across screen sizes. It defines how content is organized horizontally,
          how columns relate to gutters, and how layouts respond to viewport
          changes.
        </p>
        <p>
          All page layouts and major content areas should align to the grid.
          Components placed within the grid inherit its rhythm, creating a sense
          of order even across varied content types.
        </p>
      </DocSection>

      <DocSection title="Mobile grid specification">
        <p className="mb-4">
          The mobile grid is the foundation of the layout system. All
          responsive layouts collapse down to this structure at the smallest
          breakpoint.
        </p>
        <DocTable
          headers={["Property", "Value", "CSS Variable"]}
          rows={[
            ["Columns", "4", "--ds-grid-columns: 4"],
            ["Margin", "20px", "--ds-grid-margin: 20px"],
            ["Gutter", "12px", "--ds-grid-gutter: 12px"],
          ]}
        />

        {/* Visual representation of the 4-column mobile grid */}
        <div
          className="mb-6 border border-border-neutral-default rounded-md"
          style={{ overflow: "hidden" }}
        >
          <div className="py-2 px-4 bg-background-surface-neutral-default text-text-neutral-secondary border-b border-border-neutral-default text-body-03 font-medium">
            Mobile grid — 4 columns, 20px margins, 12px gutters
          </div>
          <div
            className="py-4 bg-background-default-default"
            style={{ paddingLeft: "20px", paddingRight: "20px" }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "12px",
              }}
            >
              {[1, 2, 3, 4].map((col) => (
                <div
                  key={col}
                  className="bg-primary-100 border border-dashed border-primary-400 rounded-md text-body-02 text-primary-600"
                  style={{
                    height: "64px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 600,
                  }}
                >
                  Col {col}
                </div>
              ))}
            </div>
          </div>
          <div
            className="py-2 px-4 text-text-neutral-placeholder border-t border-border-neutral-disabled bg-background-surface-neutral-default text-body-03"
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>← 20px margin</span>
            <span>12px gutters between columns</span>
            <span>20px margin →</span>
          </div>
        </div>

        <DocCallout variant="info" title="CSS custom properties">
          Apply the grid using the provided CSS variables:
          <code
            className="mt-2 text-body-02"
            style={{
              display: "block",
              fontFamily: "monospace",
            }}
          >
            grid-template-columns: repeat(var(--ds-grid-columns), 1fr);
            <br />
            gap: var(--ds-grid-gutter);
            <br />
            padding-inline: var(--ds-grid-margin);
          </code>
        </DocCallout>
      </DocSection>

      <DocSection title="Principles">
        <ul
          className="list-none p-0 m-0 gap-3"
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <li className="gap-3" style={{ display: "flex" }}>
            <span
              className="text-text-neutral-default font-medium"
              style={{ minWidth: "120px" }}
            >
              Alignment
            </span>
            <span>
              Content edges should align to column boundaries. Consistent
              alignment creates a clean, structured appearance.
            </span>
          </li>
          <li className="gap-3" style={{ display: "flex" }}>
            <span
              className="text-text-neutral-default font-medium"
              style={{ minWidth: "120px" }}
            >
              Flexibility
            </span>
            <span>
              The grid adapts to different screen sizes by adjusting column
              count, gutter width, and margins. Layouts remain usable at every
              breakpoint.
            </span>
          </li>
          <li className="gap-3" style={{ display: "flex" }}>
            <span
              className="text-text-neutral-default font-medium"
              style={{ minWidth: "120px" }}
            >
              Simplicity
            </span>
            <span>
              Prefer simple column spans (full, half) over complex nesting.
              On mobile, most content should span the full 4 columns or
              half (2 columns) for side-by-side layouts.
            </span>
          </li>
        </ul>
      </DocSection>

      <DocSection title="Rules">
        <ul
          className="list-disc pl-5 text-text-neutral-secondary gap-2"
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <li>
            Align all major content blocks to the grid. Small inline elements
            (icons, badges) do not need to snap to columns.
          </li>
          <li>
            Use the gutter value from the grid tokens (12px on mobile) — do not
            create custom gutter widths.
          </li>
          <li>
            Outer margins must use the token value (20px on mobile). Do not
            hard-code a different margin.
          </li>
          <li>
            Content should span full or simple fractional column widths
            (full-width, 2-column, or 1-column spans).
          </li>
          <li>
            Avoid nesting grids more than one level deep. If the layout requires
            deep nesting, reconsider the content structure.
          </li>
        </ul>
      </DocSection>

      <DocSection title="Do / Don't">
        <DoDontGrid
          doItems={[
            {
              description:
                "Use the CSS grid variables (--ds-grid-columns, --ds-grid-margin, --ds-grid-gutter) for all layout grids.",
            },
            {
              description:
                "Let content span the full 4 columns on mobile for readability.",
            },
            {
              description:
                "Keep gutters and margins consistent — they define the visual breathing room.",
            },
          ]}
          dontItems={[
            {
              description:
                "Hard-code column counts or gutter values instead of using the CSS variables.",
            },
            {
              description:
                "Create layouts with 3 or 5 columns on mobile — the system uses 4 columns.",
            },
            {
              description:
                "Use margins smaller than 20px on mobile, as content will feel cramped against screen edges.",
            },
          ]}
        />
      </DocSection>

      <DocSection title="Usage">
        <p className="mb-4">
          Apply the grid using CSS Grid with the provided custom properties.
          The grid container should set the column template, gap, and inline
          padding using the token values.
        </p>
        <div
          className="bg-background-surface-neutral-default rounded-md p-4 mb-4 text-body-02 text-text-neutral-secondary border border-border-neutral-default"
          style={{
            fontFamily: "monospace",
            lineHeight: 1.6,
          }}
        >
          .layout-grid &#123;
          <br />
          &nbsp;&nbsp;display: grid;
          <br />
          &nbsp;&nbsp;grid-template-columns: repeat(var(--ds-grid-columns), 1fr);
          <br />
          &nbsp;&nbsp;gap: var(--ds-grid-gutter);
          <br />
          &nbsp;&nbsp;padding-inline: var(--ds-grid-margin);
          <br />
          &#125;
        </div>
        <p>
          For responsive layouts, override the grid variables at each breakpoint.
          Content should flow naturally from multi-column at wider sizes to the
          4-column mobile grid at narrow sizes.
        </p>
      </DocSection>
    </>
  );
}
