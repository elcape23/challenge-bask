import DocHeader from "@/components/docs/DocHeader";
import DocSection from "@/components/docs/DocSection";
import DocTable from "@/components/docs/DocTable";
import DoDontGrid from "@/components/docs/DoDontGrid";

const radiusTokens = [
  { token: "radius-min", value: "2px", css: "--radius-min", usage: "Subtle rounding for small indicators and badges" },
  { token: "radius-xs", value: "4px", css: "--radius-xs", usage: "Checkboxes, small tags, compact elements" },
  { token: "radius-sm", value: "8px", css: "--radius-sm", usage: "Buttons, inputs, alerts, sidebar items" },
  { token: "radius-md", value: "12px", css: "--radius-md", usage: "Cards, modals, containers, dropdowns" },
  { token: "radius-lg", value: "16px", css: "--radius-lg", usage: "Large cards, panels, dialog boxes" },
  { token: "radius-xl", value: "20px", css: "--radius-xl", usage: "Hero sections, prominent containers" },
  { token: "radius-2xl", value: "24px", css: "--radius-2xl", usage: "Feature cards, onboarding panels" },
  { token: "radius-3xl", value: "28px", css: "--radius-3xl", usage: "Large promotional areas" },
  { token: "radius-4xl", value: "32px", css: "--radius-4xl", usage: "Full-width banners, sheet handles" },
  { token: "radius-max", value: "9999px", css: "--radius-max", usage: "Circular elements: avatars, pills, status dots" },
];

export default function RadiusPage() {
  return (
    <>
      <div className="col-span-2 w-full lg:col-span-1 lg:col-start-1">
        <DocHeader
          title="Radius"
          variant="foundations"
          description="Border radius values define the roundness of UI elements for a cohesive visual feel."
        />
      </div>

      <div className="col-span-2 w-full lg:col-span-1 lg:col-start-1">
        <DocSection title="Overview">
          <p className="mb-4">
            Border radius tokens control the roundness applied to corners of UI
            elements — from subtle rounding on input fields to fully circular
            avatars. A consistent radius scale keeps the interface feeling
            unified and intentional.
          </p>
          <p>
            The design system defines a full radius scale from <code>min</code>{" "}
            (2px) to <code>max</code> (9999px). Use the appropriate token based
            on the element size and visual hierarchy.
          </p>
        </DocSection>
      </div>

      <DocSection title="Scale" hideTitle>
        <DocTable
          variant="surface"
          title="Scale"
          headers={["Token", "Value", "CSS Variable", "Usage"]}
          rows={radiusTokens.map((t) => [t.token, t.value, t.css, t.usage])}
        />
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
            Always use a radius token instead of arbitrary values. Every
            rounded corner should reference a token from the scale.
          </li>
          <li>
            Apply the same radius to all elements of the same type — all cards,
            all buttons, and all inputs should share the same roundness.
          </li>
          <li>
            Nested elements should use a smaller radius than their parent to
            prevent inner rounding from clipping against the outer rounding.
          </li>
          <li>
            Use <code>radius-max</code> (9999px) only for intentionally
            circular elements like avatars and status indicators — this is a
            separate pattern from the rest of the scale.
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
                "Use the appropriate radius token for the element size — sm for buttons/inputs, md for cards, lg+ for large panels.",
            },
            {
              description:
                "Apply tokens via CSS variables so values update globally if the scale changes.",
            },
            {
              description:
                "Keep radius consistent across elements that appear at the same visual level.",
            },
          ]}
          dontItems={[
            {
              description:
                "Use arbitrary values like 6px, 10px, or 14px — always pick the closest token from the scale.",
            },
            {
              description:
                "Apply a large radius (lg+) to very small elements where it would distort the shape.",
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
          Apply radius tokens through the <code>border-radius</code> CSS
          property using custom properties. Choose the token that best matches
          the element type.
        </p>
        <div
          className="bg-background-surface-neutral-default rounded-md p-4 mb-4 text-body-02 text-text-neutral-secondary border border-border-neutral-default"
          style={{
            fontFamily: "var(--font-mono)",
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
          &nbsp;&nbsp;border-radius: var(--radius-sm);
          <br />
          &#125;
          <br />
          <br />
          .avatar &#123;
          <br />
          &nbsp;&nbsp;border-radius: var(--radius-max);
          <br />
          &#125;
        </div>
        <p>
          When creating new components, select the radius token that matches
          the component scale. Only use <code>radius-max</code> for circular
          elements (avatars, pills), and <code>radius-min</code> for subtle
          micro-rounding.
        </p>
      </DocSection>
    </>
  );
}
