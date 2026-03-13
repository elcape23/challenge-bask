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
          The icon library is based on Lucide-style icons, an open-source icon
          set with consistent stroke widths, rounded joins, and a clean
          geometric style. The implementation uses Lucide directly and keeps
          the original icon stroke widths while preserving the system sizing
          and spacing rules.
        </p>
      </DocSection>

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

      <DocSection title="Sizing">
        <p className="mb-4">
          Icons are available at three fixed sizes. Always use one of the
          defined sizes, never scale icons to arbitrary dimensions.
        </p>
        <DocTable
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

      <DocSection title="Available icons">
        <p className="mb-4">
          The following icons are available in the design system. Each icon
          uses Figma-accurate padding for optical balance. Icons are shown in
          sm (20 x 20) and md (24 x 24) sizes.
        </p>

        <div className="mb-6">
          <h3 className="mb-4 text-body-02 font-medium text-text-neutral-default">
            UI icons (sm / md)
          </h3>
          <div
            className="overflow-hidden rounded-md border border-border-neutral-default bg-background-surface-neutral-default"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
              maxWidth: 360,
            }}
          >
            <div className="border-b border-r border-border-neutral-default bg-background-fill-neutral-default px-4 py-2 text-body-03 font-medium text-text-neutral-placeholder">
              md
            </div>
            <div className="w-20 border-b border-border-neutral-default bg-background-fill-neutral-default px-4 py-2 text-center text-body-03 font-medium text-text-neutral-placeholder">
              sm
            </div>
            {UI_ICONS.map((name) => (
              <div key={name} className="contents">
                <div className="flex items-center gap-3 border-b border-r border-border-neutral-default px-4 py-3">
                  <Icon type={name} size="md" />
                  <span
                    className="text-body-03 text-text-neutral-secondary"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {name}
                  </span>
                </div>
                <div className="flex items-center justify-center border-b border-border-neutral-default px-4 py-3">
                  <Icon type={name} size="sm" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h3 className="mb-3 text-body-02 font-medium text-text-neutral-default">
            Decorative icons (40 x 40px)
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
                className="inline-flex items-center rounded-md border border-border-neutral-default bg-background-surface-neutral-default px-3 py-1 text-body-02 text-text-neutral-secondary"
                style={{
                  fontFamily: "var(--font-mono)",
                }}
              >
                {name}
              </span>
            ))}
          </div>
        </div>

        <DocCallout variant="info" title="Figma design (node 29-1135)">
          Icons use Lucide components directly across the full set. Each icon
          keeps the Figma container size and padding rules while using the
          original Lucide stroke width.
        </DocCallout>
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
            Color icons using semantic color tokens and <code>currentColor</code>
            . Avoid hard-coded colors that break in dark mode or high-contrast
            settings.
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
