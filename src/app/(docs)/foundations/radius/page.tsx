import DocHeader from "@/components/docs/DocHeader";
import DocSection from "@/components/docs/DocSection";
import DocTable from "@/components/docs/DocTable";
import DocCallout from "@/components/docs/DocCallout";
import DoDontGrid from "@/components/docs/DoDontGrid";

export default function RadiusPage() {
  return (
    <>
      <DocHeader
        title="Radius"
        description="Border radius values define the roundness of UI elements for a cohesive visual feel."
      />

      <DocSection title="Overview">
        <p className="mb-4">
          Border radius tokens control the roundness applied to corners of UI
          elements — from subtle rounding on input fields to fully circular
          avatars. A consistent radius scale keeps the interface feeling unified
          and intentional.
        </p>
        <p>
          The design system currently defines one core radius token. As the
          system grows, additional values may be introduced for specific use
          cases.
        </p>
      </DocSection>

      <DocSection title="Scale">
        <DocTable
          headers={["Token", "Value", "CSS Variable", "Usage"]}
          rows={[
            [
              "radius-md",
              "12px",
              "--radius-md",
              "Default radius for cards, inputs, buttons, containers, and modals",
            ],
          ]}
        />

        {/* Visual examples: with and without radius */}
        <div
          className="gap-4 mb-6"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
          }}
        >
          <div
            className="border border-border-neutral-default rounded-md"
            style={{ overflow: "hidden" }}
          >
            <div className="py-2 px-3 bg-background-surface-neutral-default text-text-neutral-secondary border-b border-border-neutral-default text-body-03 font-medium">
              With radius-md (12px)
            </div>
            <div
              className="p-5 gap-3"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                className="bg-primary-100 border border-primary-300 text-body-02 text-primary-600"
                style={{
                  width: "100%",
                  height: "48px",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Button
              </div>
              <div
                className="bg-background-surface-neutral-default border border-border-neutral-default text-body-02 text-text-neutral-secondary"
                style={{
                  width: "100%",
                  height: "80px",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Card
              </div>
              <div
                className="bg-background-default-default border border-border-neutral-default text-body-02 text-text-neutral-placeholder pl-3"
                style={{
                  width: "100%",
                  height: "40px",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Input field
              </div>
            </div>
          </div>

          <div
            className="border border-border-neutral-default rounded-md"
            style={{ overflow: "hidden" }}
          >
            <div className="py-2 px-3 bg-background-surface-neutral-default text-text-neutral-secondary border-b border-border-neutral-default text-body-03 font-medium">
              Without radius (0px)
            </div>
            <div
              className="p-5 gap-3"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                className="bg-primary-100 border border-primary-300 text-body-02 text-primary-600"
                style={{
                  width: "100%",
                  height: "48px",
                  borderRadius: "0px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Button
              </div>
              <div
                className="bg-background-surface-neutral-default border border-border-neutral-default text-body-02 text-text-neutral-secondary"
                style={{
                  width: "100%",
                  height: "80px",
                  borderRadius: "0px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Card
              </div>
              <div
                className="bg-background-default-default border border-border-neutral-default text-body-02 text-text-neutral-placeholder pl-3"
                style={{
                  width: "100%",
                  height: "40px",
                  borderRadius: "0px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Input field
              </div>
            </div>
          </div>
        </div>

        <DocCallout variant="info" title="Single token approach">
          The design system uses a single radius value (12px) applied
          consistently across all rounded elements. This simplifies decisions
          and keeps the interface visually cohesive.
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
            Always use the <code>--radius-md</code> token instead of
            arbitrary values. Every rounded corner should reference this token.
          </li>
          <li>
            Apply the same radius to all elements of the same type — all cards,
            all buttons, and all inputs should share the same roundness.
          </li>
          <li>
            Nested elements may use a slightly smaller radius to prevent inner
            rounding from clipping against the outer rounding.
          </li>
          <li>
            Use <code>border-radius: 9999px</code> only for intentionally
            circular elements like avatars and status indicators — this is a
            separate pattern from the radius scale.
          </li>
          <li>
            Do not mix sharp corners and rounded corners on elements at the
            same hierarchy level.
          </li>
        </ul>
      </DocSection>

      <DocSection title="Do / Don't">
        <DoDontGrid
          doItems={[
            {
              description:
                "Use --radius-md (12px) for all standard rounded elements: cards, buttons, inputs, modals.",
            },
            {
              description:
                "Apply the token via the CSS variable so the value updates globally if it changes.",
            },
            {
              description:
                "Keep radius consistent across elements that appear at the same visual level.",
            },
          ]}
          dontItems={[
            {
              description:
                "Use arbitrary values like 4px, 8px, or 16px — the system has one defined radius.",
            },
            {
              description:
                "Apply the 12px radius to very small elements (under 24px) where it would distort the shape.",
            },
            {
              description:
                "Mix rounded and sharp-cornered elements side by side at the same hierarchy.",
            },
          ]}
        />
      </DocSection>

      <DocSection title="Usage">
        <p className="mb-4">
          Apply the radius token through the <code>border-radius</code> CSS
          property using the custom property. Every component with rounded
          corners should reference the token.
        </p>
        <div
          className="bg-background-surface-neutral-default rounded-md p-4 mb-4 text-body-02 text-text-neutral-secondary border border-border-neutral-default"
          style={{
            fontFamily: "monospace",
            lineHeight: 1.6,
          }}
        >
          .card &#123;
          <br />
          &nbsp;&nbsp;border-radius: var(--radius-md);
          <br />
          &#125;
          <br />
          <br />
          .button &#123;
          <br />
          &nbsp;&nbsp;border-radius: var(--radius-md);
          <br />
          &#125;
        </div>
        <p>
          When creating new components, apply <code>--radius-md</code> by
          default. Only deviate for intentionally circular elements (avatars,
          pills) which use <code>9999px</code>, or for elements that must have
          sharp corners for functional reasons.
        </p>
      </DocSection>
    </>
  );
}
