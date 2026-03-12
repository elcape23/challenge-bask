import DocHeader from "@/components/docs/DocHeader";
import DocSection from "@/components/docs/DocSection";
import DocTable from "@/components/docs/DocTable";
import DoDontGrid from "@/components/docs/DoDontGrid";

const spacingScale = [
  { token: "0.5", tailwind: "p-0.5, m-0.5, gap-0.5", px: 2 },
  { token: "1", tailwind: "p-1, m-1, gap-1", px: 4 },
  { token: "2", tailwind: "p-2, m-2, gap-2", px: 8 },
  { token: "3", tailwind: "p-3, m-3, gap-3", px: 12 },
  { token: "4", tailwind: "p-4, m-4, gap-4", px: 16 },
  { token: "5", tailwind: "p-5, m-5, gap-5", px: 20 },
  { token: "6", tailwind: "p-6, m-6, gap-6", px: 24 },
  { token: "7", tailwind: "p-7, m-7, gap-7", px: 28 },
  { token: "8", tailwind: "p-8, m-8, gap-8", px: 32 },
  { token: "9", tailwind: "p-9, m-9, gap-9", px: 36 },
  { token: "10", tailwind: "p-10, m-10, gap-10", px: 40 },
  { token: "11", tailwind: "p-11, m-11, gap-11", px: 44 },
  { token: "12", tailwind: "p-12, m-12, gap-12", px: 48 },
  { token: "14", tailwind: "p-14, m-14, gap-14", px: 56 },
  { token: "16", tailwind: "p-16, m-16, gap-16", px: 64 },
  { token: "20", tailwind: "p-20, m-20, gap-20", px: 80 },
  { token: "24", tailwind: "p-24, m-24, gap-24", px: 96 },
  { token: "28", tailwind: "p-28, m-28, gap-28", px: 112 },
];

export default function SpacingPage() {
  return (
    <>
      <DocHeader
        title="Spacing"
        description="A consistent spacing scale creates visual rhythm and structural clarity."
        variant="foundations"
      />

      <DocSection title="Overview">
        <p className="mb-4">
          The spacing system uses a fixed scale of values to control margin,
          padding, and gap across all components and layouts. Every spatial
          decision — from the padding inside a button to the gap between page
          sections — maps to a token in this scale.
        </p>
        <p>
          Using a shared scale prevents arbitrary spacing values, makes layouts
          easier to maintain, and creates a consistent vertical and horizontal
          rhythm throughout the interface.
        </p>
      </DocSection>

      <DocSection title="Scale">
        <DocTable
          headers={["Scale", "Tailwind Utilities", "Value"]}
          rows={spacingScale.map((s) => [s.token, s.tailwind, `${s.px}px`])}
        />
      </DocSection>

      <DocSection title="Visual Scale">
        <div
          className="gap-2"
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {spacingScale.map((s) => (
            <div
              key={s.token}
              className="gap-4"
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <span
                className="text-text-neutral-secondary font-mono text-body-03"
                style={{
                  minWidth: 90,
                  textAlign: "right",
                }}
              >
                {s.token}
              </span>
              <div
                className="rounded-md bg-primary-500"
                style={{
                  width: s.px,
                  height: 16,
                  transition: "width 0.2s ease",
                  flexShrink: 0,
                }}
              />
              <span className="text-text-neutral-secondary text-body-03">
                {s.px}px
              </span>
            </div>
          ))}
        </div>
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
              Consistency
            </span>
            <span>
              Always use scale tokens instead of arbitrary values. If the scale
              does not include the value you need, reconsider the design before
              adding a new token.
            </span>
          </li>
          <li className="gap-3" style={{ display: "flex" }}>
            <span
              className="text-text-neutral-default font-medium"
              style={{ minWidth: "120px" }}
            >
              Relationship
            </span>
            <span>
              Related elements should be closer together; unrelated elements
              should be farther apart. Spacing communicates grouping.
            </span>
          </li>
          <li className="gap-3" style={{ display: "flex" }}>
            <span
              className="text-text-neutral-default font-medium"
              style={{ minWidth: "120px" }}
            >
              Density
            </span>
            <span>
              Use tighter spacing (space-0 through space-3) for compact
              components and wider spacing (space-8 through space-28) for page
              sections and layout gaps.
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
          <li>Use spacing tokens for all margin, padding, and gap values.</li>
          <li>
            Do not combine multiple tokens arithmetically (e.g., space-4 +
            space-2). Choose the nearest single token instead.
          </li>
          <li>
            Use smaller tokens (space-0 to space-3) inside compact components
            like buttons, badges, and inputs.
          </li>
          <li>
            Use larger tokens (space-10 to space-28) for section-level and
            page-level vertical rhythm.
          </li>
          <li>
            Keep spacing symmetrical within a component unless the design
            explicitly calls for asymmetry.
          </li>
        </ul>
      </DocSection>

      <DocSection title="Do / Don't">
        <DoDontGrid
          doItems={[
            {
              description:
                "Use spacing tokens from the scale for all layout and component spacing.",
            },
            {
              description:
                "Group related items with tighter spacing and separate sections with larger gaps.",
            },
            {
              description:
                "Keep internal padding consistent within a component.",
            },
          ]}
          dontItems={[
            {
              description:
                "Use arbitrary pixel values like 7px, 13px, or 22px.",
            },
            {
              description:
                "Add spacing that doesn't correspond to any token in the scale.",
            },
            {
              description:
                "Mix unrelated spacing values within the same component.",
            },
          ]}
        />
      </DocSection>

      <DocSection title="Usage">
        <p className="mb-4">
          Spacing tokens are applied through CSS custom properties on margin,
          padding, and gap. Reference them in inline styles or CSS modules to
          ensure every spatial decision flows through the design system.
        </p>
        <p>
          When building new components, start by choosing internal padding from
          the lower end of the scale (space-2 to space-5) and external margins
          from the higher end (space-8 to space-16) based on the component's
          context in the layout.
        </p>
      </DocSection>
    </>
  );
}
