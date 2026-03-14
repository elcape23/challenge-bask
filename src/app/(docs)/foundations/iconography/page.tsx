import DocHeader from "@/components/docs/DocHeader";
import DocSection from "@/components/docs/DocSection";
import DocTable from "@/components/docs/DocTable";
import DocCallout from "@/components/docs/DocCallout";
import DoDontGrid from "@/components/docs/DoDontGrid";
import Icon, { type IconType } from "@/components/ui/Icon";

const UI_ICONS: IconType[] = [
  "house",
  "chevron-right",
  "chevron-left",
  "chevron-down",
  "chevron-up",
  "check",
  "minus",
  "shopping-cart",
  "user-round",
  "clipboard-plus",
  "message-circle-more",
  "menu",
  "plus",
  "x",
  "refresh-cw",
  "circle-x",
  "circle-alert",
  "triangle-alert",
  "ban",
  "google",
  "moon",
  "sun-medium",
];

const DECORATIVE_ICONS: IconType[] = [
  "square-arrow-up-right",
  "chart-column-increasing",
  "calendar-sync",
];

function IconTable({
  title,
  headers,
  rows,
}: {
  title: string;
  headers: string[];
  rows: { icon: IconType; values: string[] }[];
}) {
  return (
    <div className="bg-background-surface-neutral-default p-10 mb-6 overflow-x-auto">
      <h3 className="text-heading-04 font-medium text-text-neutral-default mb-6">
        {title}
      </h3>
      <table
        className="w-full table-fixed text-left text-body-01"
        style={{ fontFamily: "var(--font-sans)" }}
      >
        <colgroup>
          <col style={{ width: "96px" }} />
          {headers.map((_, i) => (
            <col
              key={i}
              style={{ width: `${(100 - 96 / 10) / headers.length}%` }}
            />
          ))}
        </colgroup>
        <thead>
          <tr className="border-b border-border-neutral-default">
            <th className="py-10 pl-0 pr-4 font-medium text-text-neutral-default">
              Preview
            </th>
            {headers.map((header, index) => (
              <th
                key={header}
                className={`py-10 font-medium text-text-neutral-default ${
                  index === 0 ? "pl-0 pr-4" : "px-4"
                }`}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={row.icon}
              className={
                rowIndex < rows.length - 1
                  ? "border-b border-border-neutral-default"
                  : ""
              }
            >
              <td className="py-10 pl-0 pr-4 text-text-neutral-secondary">
                <div className="flex items-center">
                  <Icon type={row.icon} size="md" />
                </div>
              </td>
              {row.values.map((value, valueIndex) => (
                <td
                  key={`${row.icon}-${valueIndex}`}
                  className={`py-10 font-regular text-text-neutral-secondary ${
                    valueIndex === 0 ? "pl-0 pr-4" : "px-4"
                  }`}
                >
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function IconographyPage() {
  return (
    <>
      <div className="col-span-2 w-full lg:col-span-1 lg:col-start-1">
        <DocHeader
          title="Iconography"
          description="Icons support communication, navigation, and visual hierarchy across the interface."
          variant="foundations"
        />
      </div>

      <div className="col-span-2 w-full lg:col-span-1 lg:col-start-1">
        <DocSection title="Overview">
          <p className="mb-4">
            Icons are a core part of the interface language. They help users
            quickly identify actions, navigate between sections, and understand
            status at a glance. The icon system defines sizing, style rules, and
            usage principles to keep icons consistent and meaningful.
          </p>
          <p>
            The icon library uses Lucide icons directly. Lucide is an
            open-source icon set with consistent stroke widths, rounded joins,
            and a clean geometric style. The implementation keeps the original
            Lucide stroke widths while preserving the system sizing and spacing
            rules.
          </p>
        </DocSection>
      </div>

      <DocSection title="Principles">
        <ul
          className="list-none m-0 gap-3 p-0"
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
              Clarity
            </span>
            <span>
              Every icon should be immediately recognizable. If the meaning is
              ambiguous, pair the icon with a text label.
            </span>
          </li>
          <li className="gap-3" style={{ display: "flex" }}>
            <span
              className="text-text-neutral-default font-medium"
              style={{ minWidth: "120px" }}
            >
              Consistency
            </span>
            <span>
              All icons share the same stroke width, corner style, and optical
              weight. Mixing styles from different sets breaks visual cohesion.
            </span>
          </li>
          <li className="gap-3" style={{ display: "flex" }}>
            <span
              className="text-text-neutral-default font-medium"
              style={{ minWidth: "120px" }}
            >
              Purposeful
            </span>
            <span>
              Use icons to support understanding, not for decoration. Every icon
              should serve a functional role, indicating an action, status, or
              category.
            </span>
          </li>
          <li className="gap-3" style={{ display: "flex" }}>
            <span
              className="text-text-neutral-default font-medium"
              style={{ minWidth: "120px" }}
            >
              Accessibility
            </span>
            <span>
              Decorative icons should be hidden from assistive technology.
              Functional icons require accessible labels that describe their
              purpose.
            </span>
          </li>
        </ul>
      </DocSection>

      <DocSection title="Sizing" hideTitle>
        <DocTable
          variant="surface"
          title="Sizing"
          headers={["Size", "Dimensions", "Usage"]}
          rows={[
            [
              "sm",
              "20 x 20px",
              "Inline UI icons inside compact components: buttons, inputs, navigation items",
            ],
            [
              "md",
              "24 x 24px",
              "Default size for standalone icons, action buttons, and section headers",
            ],
            [
              "decorative",
              "40 x 40px",
              "Feature icons, empty states, and illustrative contexts where icons are the primary visual",
            ],
          ]}
        />

        <div
          className="mb-4 gap-6 rounded-md border border-border-neutral-default bg-background-surface-neutral-default p-5"
          style={{
            display: "flex",
            alignItems: "end",
          }}
        >
          {[
            { label: "sm", size: 20 },
            { label: "md", size: 24 },
            { label: "decorative", size: 40 },
          ].map((item) => (
            <div
              key={item.label}
              className="gap-2"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                className="border border-dashed border-primary-400 bg-primary-100 text-primary-600"
                style={{
                  width: `${item.size}px`,
                  height: `${item.size}px`,
                  borderRadius: "4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "10px",
                }}
              >
                {item.size}
              </div>
              <span className="text-body-03 font-medium text-text-neutral-secondary">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </DocSection>

      <DocSection title="Available icons" hideTitle>
        <IconTable
          title="UI icons"
          headers={["Icon", "Sizes"]}
          rows={UI_ICONS.map((name) => ({
            icon: name,
            values: [name, "md, sm"],
          }))}
        />

        <IconTable
          title="Decorative icons"
          headers={["Icon", "Size"]}
          rows={DECORATIVE_ICONS.map((name) => ({
            icon: name,
            values: [name, "40 x 40px"],
          }))}
        />
      </DocSection>

      <DocSection title="Rules">
        <ul
          className="list-disc gap-2 pl-5 text-text-neutral-secondary"
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <li>
            Always use icons from the approved set listed above. Do not
            introduce icons from other libraries without review.
          </li>
          <li>
            Use the correct size for context: sm (20px) for inline UI, md (24px)
            for standalone actions, decorative (40px) for illustrative use.
          </li>
          <li>
            Pair functional icons with a visible text label whenever space
            permits.
          </li>
          <li>
            For icon-only actions (for example, a close button), provide an{" "}
            <code>aria-label</code> that describes the action.
          </li>
          <li>
            Color icons using semantic color tokens and{" "}
            <code>currentColor</code>. Avoid hard-coded colors that break in
            dark mode or high-contrast settings.
          </li>
          <li>
            Do not use icons purely for decoration, every icon should have a
            clear communicative role.
          </li>
        </ul>
      </DocSection>

      <DocSection title="Do / Don't">
        <DoDontGrid
          doItems={[
            {
              description:
                "Use icons at their defined sizes (20px, 24px, or 40px).",
            },
            {
              description:
                "Add aria-label to icon-only buttons for screen reader users.",
            },
            {
              description:
                "Use currentColor so icons inherit the text color of their context.",
            },
          ]}
          dontItems={[
            {
              description:
                "Scale icons to arbitrary sizes like 18px or 28px, always use a defined size step.",
            },
            {
              description:
                "Mix icons from different icon libraries in the same interface.",
            },
            {
              description:
                "Use decorative (40px) icons inline with body text, they are meant for feature-level display.",
            },
          ]}
        />
      </DocSection>

      <DocSection title="Usage">
        <p className="mb-4">
          Import the <code>Icon</code> component and use the <code>type</code>{" "}
          and <code>size</code> props. Padding is applied per Figma spec.
        </p>
        <div
          className="mb-4 rounded-md border border-border-neutral-default bg-background-surface-neutral-default p-4 text-body-02 text-text-neutral-secondary"
          style={{
            fontFamily: "var(--font-mono)",
            lineHeight: 1.6,
          }}
        >
          {`import Icon from "@/components/ui/Icon";`}
          <br />
          <br />
          {`// sm size (20 x 20)`}
          <br />
          {`<Icon type="house" size="sm" />`}
          <br />
          <br />
          {`// md size (24 x 24)`}
          <br />
          {`<Icon type="chevron-right" size="md" />`}
        </div>
        <p>
          When placing icons next to text, vertically center them and use a
          consistent gap (typically <code>gap-2</code> / 8px for inline pairs).
          Icons inside buttons should use the sm (20px) size by default.
        </p>
      </DocSection>
    </>
  );
}
