import DocHeader from "@/components/docs/DocHeader";
import DocSection from "@/components/docs/DocSection";
import DocTable from "@/components/docs/DocTable";
import DocCallout from "@/components/docs/DocCallout";
import DoDontGrid from "@/components/docs/DoDontGrid";
import DocAnatomy from "@/components/docs/DocAnatomy";

export default function TablePage() {
  return (
    <div className="col-span-2 grid grid-cols-2 gap-x-10 gap-y-10">
      <div className="col-start-1 flex flex-col">
        <DocHeader
          variant="foundations"
          title="Table"
          description="Tables display structured data in rows and columns, making it easy to scan, compare, and act on information."
        />
      </div>

      <div className="col-start-1">
        <DocSection title="Overview">
          <p className="mb-4">
            Tables are the primary pattern for displaying collections of
            structured data. They support features like sorting, row selection, and
            inline actions to help users find, compare, and manage records
            efficiently.
          </p>
          <p>
            Use tables when users need to examine multiple data points across
            items. For simpler lists or card-based layouts, consider alternative
            patterns that are more suited to mobile viewports.
          </p>
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Anatomy">
          <DocAnatomy
            items={[
              {
                label: "Header row",
                description:
                  "The top row containing column labels. Headers define the data type in each column and may include sort controls.",
              },
              {
                label: "Body rows",
                description:
                  "Individual rows of data. Each row represents a single record and contains cells aligned to the header columns.",
              },
              {
                label: "Cells",
                description:
                  "The individual data units within each row. Cells can contain text, badges, icons, links, or action buttons.",
              },
              {
                label: "Sort controls",
                description:
                  "Interactive indicators in the header that allow users to sort column data in ascending or descending order.",
              },
            ]}
          />
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Variants" hideTitle>
          <DocTable
            variant="surface"
            headers={["Variant", "Description", "Use when"]}
            rows={[
              [
                "Default",
                "Standard table with row dividers",
                "General data display with moderate density",
              ],
              [
                "Striped",
                "Alternating row backgrounds for readability",
                "Dense tables where visual row separation aids scanning",
              ],
              [
                "Bordered",
                "Visible borders around every cell",
                "Financial data or tables where precise cell alignment matters",
              ],
              [
                "Compact",
                "Reduced padding for higher data density",
                "Admin panels or dashboards with many rows",
              ],
            ]}
          />
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Features">
          <p className="mb-4">
            Tables support several interactive features that can be enabled
            independently based on the use case.
          </p>
          <DocTable
            variant="surface"
            headers={["Feature", "Description"]}
            rows={[
              [
                "Sorting",
                "Click a column header to sort by that column. Supports ascending, descending, and unsorted states.",
              ],
              [
                "Row selection",
                "Checkboxes in the first column allow single or multi-row selection for bulk actions.",
              ],
              [
                "Sticky header",
                "The header row remains visible when scrolling through long tables.",
              ],
              [
                "Horizontal scroll",
                "Tables wider than their container scroll horizontally with a visible scrollbar.",
              ],
              [
                "Row actions",
                "An actions column at the end with icon buttons or a menu for per-row operations.",
              ],
            ]}
          />
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Sizes" hideTitle>
          <DocTable
            variant="surface"
            headers={["Size", "Row height", "Cell padding", "Use case"]}
            rows={[
              ["Compact", "36px", "var(--spacing-2) var(--spacing-3)", "Dense data, admin views"],
              ["Default", "48px", "var(--spacing-3) var(--spacing-4)", "Standard data tables"],
              ["Relaxed", "56px", "var(--spacing-4) var(--spacing-5)", "Tables with rich cell content"],
            ]}
          />
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="States" hideTitle>
          <DocTable
            variant="surface"
            headers={["State", "Description"]}
            rows={[
              ["Default", "Normal row appearance with no interaction"],
              ["Hover", "Row background changes subtly on pointer hover"],
              ["Selected", "Row is highlighted with a selection background color"],
              ["Loading", "Skeleton placeholders replace cell content during data fetch"],
              ["Empty", "A centered message replaces the body when there are no rows"],
            ]}
          />
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Behavior">
          <ul
            className="list-disc pl-5 space-y-2 text-text-neutral-secondary"
          >
            <li>
              Clicking a sortable column header cycles through ascending,
              descending, and default order.
            </li>
            <li>
              Row selection checkboxes include a &quot;select all&quot; checkbox in the
              header that toggles all visible rows.
            </li>
            <li>
              Selected rows persist across sorting and pagination unless the user
              explicitly clears the selection.
            </li>
            <li>
              When a table is loading, display skeleton rows matching the expected
              data shape to prevent layout shift.
            </li>
            <li>
              Empty state should include a descriptive message and, when
              appropriate, a call-to-action to create the first record.
            </li>
          </ul>
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Accessibility">
          <DocCallout variant="info" title="Semantic markup">
            Always use native <code>&lt;table&gt;</code>,{" "}
            <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>,{" "}
            <code>&lt;th&gt;</code>, and <code>&lt;td&gt;</code> elements. Add{" "}
            <code>scope=&quot;col&quot;</code> to header cells and use{" "}
            <code>aria-sort</code> on sortable columns.
          </DocCallout>
          <ul
            className="list-disc pl-5 space-y-2 text-text-neutral-secondary"
          >
            <li>
              Sortable headers must be keyboard-activatable with Enter or Space
              and announce their sort direction via <code>aria-sort</code>.
            </li>
            <li>
              Row selection checkboxes must have accessible labels, such as
              &quot;Select row for [item name]&quot;.
            </li>
            <li>
              Provide a caption or <code>aria-label</code> that describes the
              table&apos;s purpose.
            </li>
            <li>
              Ensure focus management works correctly when rows are added,
              removed, or reordered.
            </li>
          </ul>
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Usage guidelines">
          <p className="mb-4">
            Use tables for data sets with three or more attributes per item. When
            items only have one or two data points, consider a simpler list
            pattern. On mobile, tables should either scroll horizontally or
            collapse into a card-based layout.
          </p>
          <p>
            Align text columns to the left and numeric columns to the right for
            easier scanning. Keep action columns at the far right so they
            don&apos;t interfere with data reading flow.
          </p>
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Do / Don't">
          <div style={{ backgroundColor: "#FFFFFF", padding: "200px" }} className="overflow-hidden flex flex-row gap-10 w-full items-start justify-between">
            <DoDontGrid
              doItems={[
                { description: "Use semantic table markup for proper accessibility support." },
                { description: "Right-align numeric data columns for easier comparison." },
                { description: "Provide an empty state message when the table has no data." },
                { description: "Use a sticky header for long scrollable tables." },
              ]}
              dontItems={[
                { description: "Don't use tables for layout purposes — only for tabular data." },
                { description: "Don't display more than 8–10 columns without horizontal scrolling." },
                { description: "Don't hide important columns on mobile without providing an alternative view." },
                { description: "Don't use tables for single-column lists where a simpler pattern works." },
              ]}
            />
          </div>
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Specs" hideTitle>
          <DocTable
            variant="surface"
            headers={["Property", "Value"]}
            rows={[
              ["Header background", "var(--color-subtle)"],
              ["Header font weight", "600 (semibold)"],
              ["Row border", "1px solid var(--color-border-subtle)"],
              ["Hover background", "var(--color-hover)"],
              ["Selected background", "var(--color-primary-light)"],
              ["Sort icon size", "16px"],
              ["Checkbox size", "18px"],
              ["Minimum column width", "80px"],
              ["Horizontal scroll indicator", "Fade gradient on edges"],
            ]}
          />
        </DocSection>
      </div>
    </div>
  );
}
