import DocHeader from "@/components/docs/DocHeader";
import DocSection from "@/components/docs/DocSection";
import DocTable from "@/components/docs/DocTable";
import DoDontGrid from "@/components/docs/DoDontGrid";

const headingScale = [
  { token: "heading-01", size: "48px", lineHeight: "60px", letterSpacing: "0", cssSize: "--font-size-heading-01", cssLh: "--font-size-heading-01--line-height" },
  { token: "heading-02", size: "40px", lineHeight: "48px", letterSpacing: "0", cssSize: "--font-size-heading-02", cssLh: "--font-size-heading-02--line-height" },
  { token: "heading-03", size: "33px", lineHeight: "36px", letterSpacing: "0", cssSize: "--font-size-heading-03", cssLh: "--font-size-heading-03--line-height" },
  { token: "heading-04", size: "28px", lineHeight: "32px", letterSpacing: "0", cssSize: "--font-size-heading-04", cssLh: "--font-size-heading-04--line-height" },
  { token: "heading-05", size: "23px", lineHeight: "28px", letterSpacing: "0", cssSize: "--font-size-heading-05", cssLh: "--font-size-heading-05--line-height" },
  { token: "heading-06", size: "19px", lineHeight: "24px", letterSpacing: "0", cssSize: "--font-size-heading-06", cssLh: "--font-size-heading-06--line-height" },
];

const bodyScale = [
  { token: "body-01", size: "16px", lineHeight: "24px", letterSpacing: "0", cssSize: "--font-size-body-01", cssLh: "--font-size-body-01--line-height" },
  { token: "body-02", size: "13px", lineHeight: "16px", letterSpacing: "0", cssSize: "--font-size-body-02", cssLh: "--font-size-body-02--line-height" },
  { token: "body-03", size: "11px", lineHeight: "12px", letterSpacing: "0", cssSize: "--font-size-body-03", cssLh: "--font-size-body-03--line-height" },
];

const weights = [
  { token: "--font-weight-regular", value: "400", label: "Regular" },
  { token: "--font-weight-medium", value: "500", label: "Medium" },
  { token: "--font-weight-bold", value: "700", label: "Bold" },
];

export default function TypographyPage() {
  return (
    <>
      <DocHeader
        title="Typography"
        description="Typography establishes hierarchy, readability, and personality across the interface. The system is built on the Suisse Intl typeface and a purposeful scale that ensures consistency at every level."
        variant="foundations"
      />

      {/* ── Overview ── */}
      <DocSection title="Overview">
        <p className="mb-4">
          All interface text uses <strong>Suisse Intl</strong> (CSS variable{" "}
          <code
            className="text-body-02 rounded-md bg-background-surface-neutral-default"
            style={{ padding: "2px 6px" }}
          >
            --font-sans
          </code>
          ) as the sole typeface. A single family keeps the visual language
          unified while the scale and weight system provides all the variation
          needed to create clear hierarchy.
        </p>
        <p>
          Every text element in the interface maps to a defined step in the type
          scale. By constraining typography to fixed tokens, the system prevents
          arbitrary font sizes and ensures that text relationships remain
          predictable across pages and components.
        </p>
      </DocSection>

      {/* ── Font family ── */}
      <DocSection title="Font family">
        <DocTable
          headers={["Token", "Value", "Usage"]}
          rows={[
            [
              "--font-sans",
              "Suisse Intl, Suisse Intl Trial, sans-serif",
              "All UI text — headings, body copy, labels, and controls",
            ],
          ]}
        />
      </DocSection>

      {/* ── Heading scale ── */}
      <DocSection title="Heading scale">
        <p className="mb-4">
          Six heading levels cover the full range from display titles to inline
          section headings. Each level has Regular, Medium, and Bold weight
          variants.
        </p>
        <DocTable
          headers={["Token", "Size", "Line height", "Letter spacing", "CSS variable (size)", "CSS variable (lh)"]}
          rows={headingScale.map((h) => [
            h.token,
            h.size,
            h.lineHeight,
            h.letterSpacing,
            h.cssSize,
            h.cssLh,
          ])}
        />
      </DocSection>

      {/* ── Body scale ── */}
      <DocSection title="Body scale">
        <p className="mb-4">
          Three body levels handle all running text, from default paragraphs
          down to captions and fine print. Each level also supports Regular,
          Medium, and Bold weight variants.
        </p>
        <DocTable
          headers={["Token", "Size", "Line height", "Letter spacing", "CSS variable (size)", "CSS variable (lh)"]}
          rows={bodyScale.map((b) => [
            b.token,
            b.size,
            b.lineHeight,
            b.letterSpacing,
            b.cssSize,
            b.cssLh,
          ])}
        />
      </DocSection>

      {/* ── Weight scale ── */}
      <DocSection title="Weight scale">
        <p className="mb-4">
          Three weights provide enough variation to build hierarchy without
          visual noise. Every heading and body level can be set in any of these
          weights.
        </p>
        <DocTable
          headers={["Token", "Value", "Name", "Usage"]}
          rows={[
            ["--font-weight-regular", "400", "Regular", "Body text, descriptions, supporting content"],
            ["--font-weight-medium", "500", "Medium", "Labels, table headers, emphasized inline text"],
            ["--font-weight-bold", "700", "Bold", "Page titles, primary headings, strong emphasis"],
          ]}
        />
      </DocSection>

      {/* ── Visual preview ── */}
      <DocSection title="Visual preview">
        <p className="mb-6">
          Live rendering of each scale step using the actual CSS custom
          properties. Text is set in Suisse Intl at Regular weight.
        </p>

        <div
          className="gap-6 mb-6"
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {headingScale.map((h) => (
            <div
              key={h.token}
              className="gap-6 pb-4 border-b border-border-neutral-disabled"
              style={{
                display: "flex",
                alignItems: "baseline",
              }}
            >
              <span
                className="text-body-02 text-text-neutral-placeholder font-sans"
                style={{ minWidth: "100px", flexShrink: 0 }}
              >
                {h.token}
                <br />
                {h.size} / {h.lineHeight}
              </span>
              <span
                className="font-regular font-sans text-text-neutral-default"
                style={{
                  fontSize: `var(${h.cssSize})`,
                  lineHeight: `var(${h.cssLh})`,
                }}
              >
                The quick brown fox
              </span>
            </div>
          ))}

          {bodyScale.map((b) => (
            <div
              key={b.token}
              className="gap-6 pb-4 border-b border-border-neutral-disabled"
              style={{
                display: "flex",
                alignItems: "baseline",
              }}
            >
              <span
                className="text-body-02 text-text-neutral-placeholder font-sans"
                style={{ minWidth: "100px", flexShrink: 0 }}
              >
                {b.token}
                <br />
                {b.size} / {b.lineHeight}
              </span>
              <span
                className="font-regular font-sans text-text-neutral-default"
                style={{
                  fontSize: `var(${b.cssSize})`,
                  lineHeight: `var(${b.cssLh})`,
                }}
              >
                The quick brown fox jumps over the lazy dog
              </span>
            </div>
          ))}
        </div>

        {/* Weight variants preview */}
        <p className="mb-4">
          Weight variants demonstrated at the <strong>heading-04</strong> level
          (28 px / 32 px):
        </p>

        <div
          className="gap-4 mb-4"
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {weights.map((w) => (
            <div
              key={w.token}
              className="gap-6"
              style={{
                display: "flex",
                alignItems: "baseline",
              }}
            >
              <span
                className="text-body-02 text-text-neutral-placeholder"
                style={{ minWidth: "100px", flexShrink: 0 }}
              >
                {w.label} ({w.value})
              </span>
              <span
                className="text-heading-04 font-sans text-text-neutral-default"
                style={{
                  fontWeight: `var(${w.token})` as unknown as number,
                }}
              >
                The quick brown fox
              </span>
            </div>
          ))}
        </div>
      </DocSection>

      {/* ── Letter spacing ── */}
      <DocSection title="Letter spacing">
        <p>
          All heading and body tokens use a letter-spacing of{" "}
          <strong>0</strong>. Suisse Intl is optimised for screen use and does
          not require tracking adjustments at any size in the scale.
        </p>
      </DocSection>

      {/* ── Principles ── */}
      <DocSection title="Principles">
        <ul
          className="list-none p-0 m-0 gap-3"
          style={{ display: "flex", flexDirection: "column" }}
        >
          {[
            {
              label: "Hierarchy",
              text: "Use size and weight to establish a clear reading order. Every page should have one dominant heading with progressively smaller supporting text.",
            },
            {
              label: "Readability",
              text: "Optimise line height and measure for comfortable reading. Body text uses relaxed leading; shorter labels can use tighter spacing.",
            },
            {
              label: "Consistency",
              text: "Map every text element to a scale token. Avoid creating arbitrary sizes outside the defined Suisse Intl scale.",
            },
            {
              label: "Restraint",
              text: "Limit distinct sizes and weights on a single screen. Most pages need no more than three or four typographic levels.",
            },
          ].map((p) => (
            <li key={p.label} className="gap-3" style={{ display: "flex" }}>
              <span
                className="text-text-neutral-default font-medium"
                style={{ minWidth: "120px" }}
              >
                {p.label}
              </span>
              <span>{p.text}</span>
            </li>
          ))}
        </ul>
      </DocSection>

      {/* ── Rules ── */}
      <DocSection title="Rules">
        <ul
          className="list-disc pl-5 text-text-neutral-secondary gap-2"
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <li>Always use heading/body scale tokens rather than arbitrary pixel values.</li>
          <li>
            Do not skip more than one level in the heading scale between
            adjacent elements — this breaks visual continuity.
          </li>
          <li>
            Use Medium or Bold weight for headings. Reserve Regular for body
            content and descriptions.
          </li>
          <li>
            Keep line lengths between 50–75 characters for body text to maintain
            readability.
          </li>
          <li>
            Set font-family via <code>var(--font-sans)</code>; never
            hard-code &quot;Suisse Intl&quot; directly.
          </li>
          <li>
            Reference line-height tokens alongside size tokens — they are
            designed as matched pairs.
          </li>
        </ul>
      </DocSection>

      {/* ── Do / Don't ── */}
      <DocSection title="Do / Don't">
        <DoDontGrid
          doItems={[
            { description: "Use the heading and body scale tokens (e.g. --font-size-heading-03) to size text consistently." },
            { description: "Pair each size token with its matching line-height token (e.g. --font-size-heading-03--line-height)." },
            { description: "Limit each page to 3–4 typographic levels to maintain clear hierarchy." },
            { description: "Use var(--font-sans) for all UI text to stay on the Suisse Intl family." },
          ]}
          dontItems={[
            { description: "Hard-code pixel values for font size or line height — always use CSS variables." },
            { description: "Use Bold weight for large blocks of body text; reserve it for headings and emphasis." },
            { description: "Introduce additional typefaces outside the design system's Suisse Intl family." },
            { description: "Mix unrelated heading levels (e.g. heading-01 next to heading-06) without intermediate steps." },
          ]}
        />
      </DocSection>

      {/* ── Usage ── */}
      <DocSection title="Usage">
        <p className="mb-4">
          Reference typography tokens through CSS custom properties. Size,
          weight, and line height should always come from the scale — never use
          raw pixel values for text styling.
        </p>
        <div
          className="p-4 rounded-md bg-background-surface-neutral-default text-body-02 font-mono mb-4"
          style={{ overflowX: "auto" }}
        >
          <pre style={{ margin: 0 }}>
{`font-family: var(--font-sans);
font-size: var(--font-size-heading-04);
line-height: var(--font-size-heading-04--line-height);
font-weight: var(--font-weight-medium);`}
          </pre>
        </div>
        <p>
          When building new components, choose the appropriate scale step based
          on the element&apos;s role in the hierarchy. Headings use the upper
          end of the scale; supporting text uses the lower end.
        </p>
      </DocSection>
    </>
  );
}
