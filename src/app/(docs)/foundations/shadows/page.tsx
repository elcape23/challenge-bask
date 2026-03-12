import DocHeader from "@/components/docs/DocHeader";
import DocSection from "@/components/docs/DocSection";
import DocTable from "@/components/docs/DocTable";
import DoDontGrid from "@/components/docs/DoDontGrid";

const shadowTokens = [
  {
    token: "shadow-xs",
    variable: "--shadow-xs",
    value: "0 1px 2px 0 rgba(0,0,0,0.10)",
    usage: "Subtle lift for interactive elements on hover",
  },
  {
    token: "shadow-sm",
    variable: "--shadow-sm",
    value: "0 1px 3px 0 rgba(0,0,0,0.10), 0 1px 2px -1px rgba(0,0,0,0.10)",
    usage: "Cards, tiles, and contained surfaces",
  },
  {
    token: "shadow-md",
    variable: "--shadow-md",
    value: "0 4px 6px -1px rgba(0,0,0,0.10), 0 2px 4px -2px rgba(0,0,0,0.10)",
    usage: "Dropdowns, popovers, and floating menus",
  },
  {
    token: "shadow-focus",
    variable: "--shadow-focus",
    value: "0 0 0 3px rgba(0,0,0,0.20)",
    usage: "Focus ring for keyboard navigation and accessibility",
  },
];

const blurToken = {
  token: "blur-20",
  variable: "--blur-20",
  value: "blur(20px)",
  usage: "Frosted-glass backgrounds for overlays and modals",
};

export default function ShadowsPage() {
  return (
    <>
      <DocHeader
        title="Shadows"
        description="Shadows create depth and establish visual hierarchy between surface layers."
      />

      <DocSection title="Overview">
        <p className="mb-4">
          The shadow system defines a set of elevation levels that communicate
          depth and layering in the interface. Shadows help users understand
          which elements sit above or below others, making it easier to parse
          complex layouts.
        </p>
        <p>
          Each shadow token represents a distinct elevation level. Lower levels
          use subtle, tight shadows for elements like cards; higher levels use
          broader, more diffused shadows for overlays and modals.
        </p>
      </DocSection>

      <DocSection title="Shadow Tokens">
        <DocTable
          headers={["Token", "CSS Variable", "Value", "Use Case"]}
          rows={shadowTokens.map((s) => [
            s.token,
            s.variable,
            s.value,
            s.usage,
          ])}
        />
      </DocSection>

      <DocSection title="Shadow Preview">
        <div
          className="gap-8 py-6"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
          }}
        >
          {shadowTokens.map((s) => (
            <div
              key={s.token}
              className="gap-3"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                className="rounded-md bg-background-default-default border border-border-neutral-disabled"
                style={{
                  width: 120,
                  height: 120,
                  boxShadow: s.value,
                }}
              />
              <span className="text-text-neutral-secondary font-mono text-body-03">
                {s.token}
              </span>
            </div>
          ))}
        </div>
      </DocSection>

      <DocSection title="Blur Token">
        <DocTable
          headers={["Token", "CSS Variable", "Value", "Use Case"]}
          rows={[
            [
              blurToken.token,
              blurToken.variable,
              blurToken.value,
              blurToken.usage,
            ],
          ]}
        />
        <div
          className="gap-6 py-6"
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            className="rounded-md border border-border-neutral-disabled"
            style={{
              position: "relative",
              width: 180,
              height: 120,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(135deg, var(--color-primary-500, #6366f1) 0%, var(--color-primary-300, #a5b4fc) 100%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                backgroundColor: "rgba(255,255,255,0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span className="text-text-neutral-default font-mono text-body-03">
                blur-20
              </span>
            </div>
          </div>
          <span className="text-text-neutral-secondary text-body-02">
            Backdrop blur applied over a gradient to simulate a frosted-glass
            surface.
          </span>
        </div>
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
            Always use shadow tokens instead of custom box-shadow values. The
            scale is designed to produce consistent, natural-looking elevation.
          </li>
          <li>
            Do not apply shadows to elements that sit flat on the page (e.g.,
            inline text, dividers). Shadows indicate elevation.
          </li>
          <li>
            Higher-elevation elements should always appear above lower-elevation
            elements in z-index as well — shadow and z-index must agree.
          </li>
          <li>
            Use shadow-xs or shadow-sm for hover states on flat elements to
            communicate interactivity without overwhelming the layout.
          </li>
          <li>
            Reserve shadow-focus exclusively for focus indicators. Do not repurpose
            it for decorative or elevation effects.
          </li>
          <li>
            Use blur-20 only for overlay and modal backdrops where a frosted-glass
            effect is needed. Test across browsers for backdrop-filter support.
          </li>
        </ul>
      </DocSection>

      <DocSection title="Do / Don't">
        <DoDontGrid
          doItems={[
            {
              description:
                "Use shadow tokens for all elevation and depth effects.",
            },
            {
              description:
                "Apply shadow-focus as the focus ring for keyboard-accessible interactive elements.",
            },
            {
              description:
                "Pair blur-20 with a semi-transparent background for frosted-glass overlays.",
            },
          ]}
          dontItems={[
            {
              description:
                "Invent custom box-shadow values outside the token set.",
            },
            {
              description:
                "Stack multiple shadow tokens on the same element beyond what a single token provides.",
            },
            {
              description:
                "Use shadow-focus for decorative purposes — it is reserved for accessibility focus states.",
            },
          ]}
        />
      </DocSection>

      <DocSection title="Usage">
        <p className="mb-4">
          Apply shadow tokens through the box-shadow CSS property using custom
          properties. Choose the shadow level based on how far the element
          should appear above the page surface.
        </p>
        <p>
          For interactive elements that change elevation on hover or focus,
          transition between shadow levels using the motion duration tokens to
          create a smooth, intentional feel.
        </p>
      </DocSection>
    </>
  );
}
