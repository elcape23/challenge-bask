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
  "ban",
  "google",
  "moon",
  "sun-medium",
];

const DECORATIVE_ICONS = [
  "square-arrow-up-right",
  "chart-column-increasing",
  "calendar-sync",
];

export default function IconographyPage() {
  return (
    <>
      <DocHeader
        title="Iconography"
        description="Icons support communication, navigation, and visual hierarchy across the interface."
        variant="foundations"
      />

      <DocSection title="Overview">
        <p className="mb-4">
          Icons are a core part of the interface language. They help users
          quickly identify actions, navigate between sections, and understand
          status at a glance. The icon system defines sizing, style rules, and
          usage principles to keep icons consistent and meaningful.
        </p>
        <p>
          The icon library is based on Lucide-style icons — an open-source icon
          set with consistent stroke widths, rounded joins, and a clean
          geometric style. All icons follow the same optical rules for a
          cohesive appearance.
        </p>
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
              should serve a functional role — indicating an action, status, or
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

      <DocSection title="Sizing">
        <p className="mb-4">
          Icons are available at three fixed sizes. Always use one of the
          defined sizes — never scale icons to arbitrary dimensions.
        </p>
        <DocTable
          headers={["Size", "Dimensions", "Usage"]}
          rows={[
            [
              "sm",
              "20 × 20px",
              "Inline UI icons inside compact components: buttons, inputs, navigation items",
            ],
            [
              "md",
              "24 × 24px",
              "Default size for standalone icons, action buttons, and section headers",
            ],
            [
              "decorative",
              "40 × 40px",
              "Feature icons, empty states, and illustrative contexts where icons are the primary visual",
            ],
          ]}
        />

        {/* Visual size comparison */}
        <div
          className="gap-6 p-5 mb-4 bg-background-surface-neutral-default rounded-md border border-border-neutral-default"
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
                className="bg-primary-100 border border-dashed border-primary-400 text-primary-600"
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
              <span className="text-text-neutral-secondary text-body-03 font-medium">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </DocSection>

      <DocSection title="Available icons">
        <p className="mb-4">
          The following icons are available in the design system. Each icon
          uses Figma-accurate padding for optical balance. Icons are shown in
          sm (20×20) and md (24×24 or 20×20 per icon) sizes.
        </p>

        <div className="mb-6">
          <h3 className="text-text-neutral-default mb-4 font-medium text-body-02">
            UI icons (sm / md)
          </h3>
          <div
            className="gap-0 border border-border-neutral-default rounded-md overflow-hidden bg-background-surface-neutral-default"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
              maxWidth: 360,
            }}
          >
            <div className="py-2 px-4 border-b border-r border-border-neutral-default bg-background-fill-neutral-default text-body-03 font-medium text-text-neutral-placeholder">
              md
            </div>
            <div className="py-2 px-4 border-b border-border-neutral-default bg-background-fill-neutral-default text-body-03 font-medium text-text-neutral-placeholder w-20 text-center">
              sm
            </div>
            {UI_ICONS.map((name) => (
              <div key={name} className="contents">
                <div className="flex items-center gap-3 py-3 px-4 border-b border-r border-border-neutral-default">
                  <Icon type={name} size="md" />
                  <span
                    className="text-body-03 text-text-neutral-secondary"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {name}
                  </span>
                </div>
                <div className="flex items-center justify-center py-3 px-4 border-b border-border-neutral-default">
                  <Icon type={name} size="sm" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-text-neutral-default mb-3 font-medium text-body-02">
            Decorative icons (40 × 40px)
          </h3>
          <div
            className="gap-2"
            style={{
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            {DECORATIVE_ICONS.map((name) => (
              <span
                key={name}
                className="py-1 px-3 bg-background-surface-neutral-default border border-border-neutral-default rounded-md text-body-02 text-text-neutral-secondary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  fontFamily: "var(--font-mono)",
                }}
              >
                {name}
              </span>
            ))}
          </div>
        </div>

        <DocCallout variant="info" title="Figma design (node 29-1135)">
          Icons use the exact SVG assets and padding from Figma. Each icon has
          a specific container size (24×24 or 20×20) and padding (e.g. chevrons
          px-9 py-6, compact icons p-2 to p-5). Do not override these values.
        </DocCallout>
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
            For icon-only actions (e.g., a close button), provide an{" "}
            <code>aria-label</code> that describes the action.
          </li>
          <li>
            Color icons using semantic color tokens and{" "}
            <code>currentColor</code>. Avoid hard-coded colors that break in
            dark mode or high-contrast settings.
          </li>
          <li>
            Do not use icons purely for decoration — every icon should have a
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
                "Scale icons to arbitrary sizes like 18px or 28px — always use a defined size step.",
            },
            {
              description:
                "Mix icons from different icon libraries in the same interface.",
            },
            {
              description:
                "Use decorative (40px) icons inline with body text — they are meant for feature-level display.",
            },
          ]}
        />
      </DocSection>

      <DocSection title="Usage">
        <p className="mb-4">
          Import the <code>Icon</code> component and use the <code>type</code> and{" "}
          <code>size</code> props. Padding is applied per Figma spec.
        </p>
        <div
          className="bg-background-surface-neutral-default rounded-md p-4 mb-4 text-body-02 text-text-neutral-secondary border border-border-neutral-default"
          style={{
            fontFamily: "var(--font-mono)",
            lineHeight: 1.6,
          }}
        >
          {`import Icon from "@/components/ui/Icon";`}
          <br />
          <br />
          {`// sm size (20×20)`}
          <br />
          {`<Icon type="house" size="sm" />`}
          <br />
          <br />
          {`// md size (24×24 or 20×20 per icon)`}
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
