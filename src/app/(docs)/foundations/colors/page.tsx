import DocHeader from "@/components/docs/DocHeader";
import DocSection from "@/components/docs/DocSection";
import DocTable from "@/components/docs/DocTable";
import DoDontGrid from "@/components/docs/DoDontGrid";

const colorScales = {
  neutral: {
    label: "Neutral (Light Gray)",
    steps: [
      { step: 50, hex: "#f7f7f3" },
      { step: 100, hex: "#f1f2ec" },
      { step: 200, hex: "#e4e6de" },
      { step: 300, hex: "#d3d6cc" },
      { step: 400, hex: "#b7bbaf" },
      { step: 500, hex: "#93988d" },
      { step: 600, hex: "#6e736a" },
      { step: 700, hex: "#4e534d" },
      { step: 800, hex: "#31352f" },
      { step: 900, hex: "#1c1f1b" },
    ],
  },
  primary: {
    label: "Primary (Emerald)",
    steps: [
      { step: 50, hex: "#f2f6f1" },
      { step: 100, hex: "#e4ece2" },
      { step: 200, hex: "#c9d7c6" },
      { step: 300, hex: "#a6bba0" },
      { step: 400, hex: "#7e9b76" },
      { step: 500, hex: "#5e7f55" },
      { step: 600, hex: "#46683e" },
      { step: 700, hex: "#33522d" },
      { step: 800, hex: "#223f1e" },
      { step: 900, hex: "#153014" },
    ],
  },
  secondary: {
    label: "Secondary (Sand)",
    steps: [
      { step: 50, hex: "#faf8f4" },
      { step: 100, hex: "#f3eee4" },
      { step: 200, hex: "#e5d9c4" },
      { step: 300, hex: "#d2bea0" },
      { step: 400, hex: "#b99e79" },
      { step: 500, hex: "#9b7f5b" },
      { step: 600, hex: "#7c664a" },
      { step: 700, hex: "#625039" },
      { step: 800, hex: "#4b3d2d" },
      { step: 900, hex: "#352a1f" },
    ],
  },
  success: {
    label: "Success (Green)",
    steps: [
      { step: 50, hex: "#f2faf5" },
      { step: 100, hex: "#e0f4e7" },
      { step: 200, hex: "#c1e8cf" },
      { step: 300, hex: "#94d7ad" },
      { step: 400, hex: "#60be81" },
      { step: 500, hex: "#369c5e" },
      { step: 600, hex: "#287d4a" },
    ],
  },
  info: {
    label: "Info (Blue)",
    steps: [
      { step: 50, hex: "#f3f7fb" },
      { step: 100, hex: "#e6eef7" },
      { step: 200, hex: "#cedceb" },
      { step: 300, hex: "#adc2dd" },
      { step: 400, hex: "#86a4ca" },
      { step: 500, hex: "#6488b4" },
      { step: 600, hex: "#4e6d92" },
    ],
  },
  warning: {
    label: "Warning (Yellow)",
    steps: [
      { step: 50, hex: "#fff8ee" },
      { step: 100, hex: "#fcefd9" },
      { step: 200, hex: "#f7deb0" },
      { step: 300, hex: "#eec67c" },
      { step: 400, hex: "#dda146" },
      { step: 500, hex: "#b97c20" },
      { step: 600, hex: "#925f18" },
    ],
  },
  danger: {
    label: "Danger (Red)",
    steps: [
      { step: 50, hex: "#fff4f3" },
      { step: 100, hex: "#fde5e2" },
      { step: 200, hex: "#f6c4bd" },
      { step: 300, hex: "#eb978c" },
      { step: 400, hex: "#d86759" },
      { step: 500, hex: "#b84335" },
      { step: 600, hex: "#903328" },
    ],
  },
};

const darkScales = {
  neutral: {
    label: "Neutral (Dark)",
    steps: [
      { step: 50, hex: "#1b1f1a" },
      { step: 100, hex: "#1c1f1b" },
      { step: 200, hex: "#31352f" },
      { step: 300, hex: "#4e534d" },
      { step: 400, hex: "#6e736a" },
      { step: 500, hex: "#93988d" },
      { step: 600, hex: "#b7bbaf" },
      { step: 700, hex: "#d3d6cc" },
      { step: 800, hex: "#e4e6de" },
      { step: 900, hex: "#f7f8f4" },
    ],
  },
  primary: {
    label: "Primary (Dark)",
    steps: [
      { step: 50, hex: "#16300f" },
      { step: 100, hex: "#153014" },
      { step: 200, hex: "#223f1e" },
      { step: 300, hex: "#33522d" },
      { step: 400, hex: "#46683e" },
      { step: 500, hex: "#5e7f55" },
      { step: 600, hex: "#7e9b76" },
      { step: 700, hex: "#a6bba0" },
      { step: 800, hex: "#c9d7c6" },
      { step: 900, hex: "#f3f7f1" },
    ],
  },
  secondary: {
    label: "Secondary (Dark)",
    steps: [
      { step: 50, hex: "#352a1f" },
      { step: 100, hex: "#4b3d2d" },
      { step: 200, hex: "#625039" },
      { step: 300, hex: "#7c664a" },
      { step: 400, hex: "#9b7f5b" },
      { step: 500, hex: "#b99e79" },
      { step: 600, hex: "#d2bea0" },
      { step: 700, hex: "#e5d9c4" },
      { step: 800, hex: "#f3eee4" },
      { step: 900, hex: "#faf8f4" },
    ],
  },
};

function contrastTextColor(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  const L = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return L > 0.45
    ? "var(--color-text-neutral-default)"
    : "var(--color-text-neutral-invert)";
}

function getLuminance(hex: string): number {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/**
 * Color swatch utility for Foundations/Colors docs only.
 * Not a design system component — matches Figma Utilities (node 4-153).
 */
function ColorCard({ name, hex }: { name: string; hex: string }) {
  const textColor = contrastTextColor(hex);
  const luminance = getLuminance(hex);
  const needsBorder = luminance > 0.9;

  return (
    <div
      className="flex flex-col items-start justify-end overflow-clip p-4 gap-2 aspect-square"
      style={{
        backgroundColor: hex,
        color: textColor,
        border: needsBorder ? "1px solid rgba(0,0,0,0.08)" : "none",
      }}
      title={`${name}\n#${hex.replace("#", "").toUpperCase()}`}
    >
      <p
        className="text-body-02 font-bold whitespace-nowrap"
        style={{ fontFamily: '"Suisse Intl Trial", sans-serif' }}
      >
        {name}
      </p>
      <p
        className="text-body-02 font-regular whitespace-nowrap"
        style={{ fontFamily: '"Suisse Intl Trial", sans-serif' }}
      >
        #{hex.replace("#", "").toUpperCase()}
      </p>
    </div>
  );
}

function ColorScaleRow({
  label,
  scaleKey,
  steps,
}: {
  label: string;
  scaleKey: string;
  steps: { step: number; hex: string }[];
}) {
  return (
    <div className="mb-10">
      <div className="mb-4">
        <span className="text-heading-04 text-text-neutral-default font-medium">
          {label}
        </span>
      </div>
      <div className="grid grid-cols-5">
        {steps.map(({ step, hex }) => (
          <ColorCard key={step} name={`${scaleKey}-${step}`} hex={hex} />
        ))}
      </div>
    </div>
  );
}

export default function ColorsPage() {
  return (
    <>
      {/* Row 1: Colors heading + subheading, left column only */}
      <div className="col-start-1 row-start-1">
        <DocHeader
          title="Colors"
          description="The color system defines visual identity and ensures consistency across every surface, text element, and interactive state in the interface."
          variant="foundations"
        />
      </div>

      {/* Core scales — Light mode */}
      <section className="col-span-2 mt-20 flex flex-col gap-20">
        <div className="grid grid-cols-2 gap-x-[40px]">
          <h2 className="text-heading-01 font-medium text-text-neutral-default leading-none self-start">
            Core scales <br className="hidden md:block" /> Light mode
          </h2>
          <p className="text-body-01 font-regular text-text-neutral-secondary max-w-md self-start">
            The three core scales form the foundation of every layout. Neutral
            handles surfaces and text, Primary drives actions and focus, and
            Secondary adds warmth to supporting elements.
          </p>
        </div>
        <ColorScaleRow
          label={colorScales.neutral.label}
          scaleKey="neutral"
          steps={colorScales.neutral.steps}
        />
        <ColorScaleRow
          label={colorScales.primary.label}
          scaleKey="primary"
          steps={colorScales.primary.steps}
        />
        <ColorScaleRow
          label={colorScales.secondary.label}
          scaleKey="secondary"
          steps={colorScales.secondary.steps}
        />
      </section>

      {/* Functional scales — Light mode */}
      <section className="col-span-2 mt-20 flex flex-col gap-20">
        <div className="grid grid-cols-2 gap-x-[40px]">
          <h2 className="text-heading-01 font-medium text-text-neutral-default leading-none self-start">
            Functional scales <br className="hidden md:block" /> Light mode
          </h2>
          <p className="text-body-01 font-regular text-text-neutral-secondary max-w-md self-start">
            Functional colors communicate status and feedback. Each scale
            provides a background tint (50), lighter shades for containers
            (100–200), and saturated values (500–600) for text and icons.
          </p>
        </div>
        <ColorScaleRow
          label={colorScales.success.label}
          scaleKey="success"
          steps={colorScales.success.steps}
        />
        <ColorScaleRow
          label={colorScales.info.label}
          scaleKey="info"
          steps={colorScales.info.steps}
        />
        <ColorScaleRow
          label={colorScales.warning.label}
          scaleKey="warning"
          steps={colorScales.warning.steps}
        />
        <ColorScaleRow
          label={colorScales.danger.label}
          scaleKey="danger"
          steps={colorScales.danger.steps}
        />
      </section>

      {/* Core scales — Dark mode */}
      <section className="col-span-2 mt-20 flex flex-col gap-20">
        <div className="grid grid-cols-2 gap-x-[40px]">
          <h2 className="text-heading-01 font-medium text-text-neutral-default leading-none self-start">
            Core scales <br className="hidden md:block" /> Dark mode
          </h2>
          <p className="text-body-01 font-regular text-text-neutral-secondary max-w-md self-start">
            Dark mode inverts the luminance direction of each scale. Step 50
            becomes the darkest surface and 900 becomes the lightest text value.
            The same token names resolve to different values based on the active
            theme.
          </p>
        </div>
        <div className="rounded-md p-6" style={{ backgroundColor: "#1b1f1a" }}>
          {Object.entries(darkScales).map(([key, scale]) => (
            <div key={key} className="mb-20 last:mb-0">
              <div className="mb-4">
                <span
                  className="text-heading-04 font-medium"
                  style={{ color: "#e4e6de" }}
                >
                  {scale.label}
                </span>
              </div>
              <div className="grid grid-cols-5">
                {scale.steps.map(({ step, hex }) => (
                  <ColorCard key={step} name={`${key}-${step}`} hex={hex} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Semantic tokens */}
      <section className="col-span-2 mt-20 flex flex-col gap-20">
        <div className="grid grid-cols-2 gap-x-[40px]">
          <h2 className="text-heading-01 font-medium text-text-neutral-default leading-none self-start">
            Semantic tokens
          </h2>
          <p className="text-body-01 font-regular text-text-neutral-secondary max-w-md self-start">
            Semantic tokens map scale values to specific UI roles. Components
            consume these tokens so that switching between light and dark mode —
            or applying a brand theme — requires zero component changes.
          </p>
        </div>
        <DocTable
          variant="surface"
          title="Text tokens"
          headers={["Token", "Light value", "Role"]}
          rows={[
            [
              "--color-text-neutral-default",
              "#1C1F1B (neutral-900)",
              "Primary body and heading text",
            ],
            [
              "--color-text-neutral-invert",
              "#F1F2EC (neutral-100)",
              "Text on dark/inverted backgrounds",
            ],
            [
              "--color-text-primary-default",
              "#153014 (primary-900)",
              "Primary-tinted text for emphasis",
            ],
            [
              "--color-text-primary-invert",
              "#E4ECE2 (primary-100)",
              "Text on primary-colored surfaces",
            ],
          ]}
        />

        <h3 className="text-body-02 text-text-neutral-default mb-3 mt-6 font-medium">
          Background tokens
        </h3>
        <DocTable
          headers={["Token", "Light value", "Role"]}
          rows={[
            [
              "--color-bg-default",
              "#f7f7f3 (neutral-50)",
              "Default page background",
            ],
            [
              "--color-bg-invert",
              "#1c1f1b (neutral-900)",
              "Inverted/dark surface background",
            ],
            [
              "--color-bg-fill-neutral-default",
              "#e4e6de (neutral-200)",
              "Subtle neutral fill for cards, wells",
            ],
          ]}
        />

        <h3 className="text-body-02 text-text-neutral-default mb-3 mt-6 font-medium">
          Semantic token preview
        </h3>
        <div
          className="gap-3 mb-6"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          }}
        >
          {[
            {
              label: "text/neutral/default",
              hex: "#1c1f1b",
              textColor: "#ffffff",
            },
            {
              label: "text/neutral/invert",
              hex: "#f1f2ec",
              textColor: "#1c1f1b",
            },
            {
              label: "text/primary/default",
              hex: "#153014",
              textColor: "#ffffff",
            },
            {
              label: "text/primary/invert",
              hex: "#e4ece2",
              textColor: "#153014",
            },
            {
              label: "bg/default",
              hex: "#f7f7f3",
              textColor: "#1c1f1b",
            },
            {
              label: "bg/invert",
              hex: "#1c1f1b",
              textColor: "#f1f2ec",
            },
            {
              label: "bg/fill/neutral",
              hex: "#e4e6de",
              textColor: "#1c1f1b",
            },
          ].map((token) => (
            <div
              key={token.label}
              className="rounded-md py-3 px-4 text-body-03 border border-border-neutral-default"
              style={{
                backgroundColor: token.hex,
                color: token.textColor,
                fontFamily: "monospace",
              }}
            >
              <div style={{ fontWeight: 600, marginBottom: 2 }}>
                {token.label}
              </div>
              <div style={{ opacity: 0.75 }}>{token.hex}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Rules */}
      <DocSection title="Rules">
        <ul
          className="list-disc pl-5 text-text-neutral-secondary gap-2"
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <li>
            Always reference semantic tokens or scale tokens (
            <code style={{ fontFamily: "monospace" }}>
              var(--color-primary-500)
            </code>
            ) — never hard-code hex values in component styles.
          </li>
          <li>
            Do not use color as the sole indicator of meaning. Pair it with text
            labels, icons, or patterns so color-blind users receive the same
            information.
          </li>
          <li>
            Reserve feedback palettes (success, warning, danger, info) for
            status communication only. Never repurpose them for decoration.
          </li>
          <li>
            Maintain a minimum 4.5:1 contrast ratio for body text and 3:1 for
            large text and non-text UI elements per WCAG 2.1 AA.
          </li>
          <li>
            When a new color need arises, extend the token system with a new
            semantic token rather than introducing a one-off value.
          </li>
          <li>
            Use the 50–200 range for backgrounds and subtle fills, 300–400 for
            borders and secondary elements, 500–600 for primary interactive
            elements, and 700–900 for text.
          </li>
        </ul>
      </DocSection>

      {/* ── Do / Don't ── */}
      <DocSection title="Do / Don't">
        <DoDontGrid
          doItems={[
            {
              description:
                "Use semantic tokens like var(--color-text-neutral-default) for text and var(--color-bg-default) for backgrounds.",
            },
            {
              description:
                "Pair color indicators with a text label or icon so meaning is never conveyed by color alone.",
            },
            {
              description:
                "Use success-500/600 for positive feedback, warning-500/600 for cautionary states, and danger-500/600 for errors.",
            },
            {
              description:
                "Test color pairings with a contrast checker before shipping — aim for 4.5:1 minimum.",
            },
          ]}
          dontItems={[
            {
              description:
                "Hard-code hex values like #5e7f55 directly in component styles — always use the token.",
            },
            {
              description:
                "Rely on color alone to communicate errors, required fields, or status changes.",
            },
            {
              description:
                "Use danger-500 for decorative elements or branding accents — it signals errors.",
            },
            {
              description:
                "Mix light-mode scale values into dark-mode overrides. Each mode has its own resolved scale.",
            },
          ]}
        />
      </DocSection>

      {/* ── Usage ── */}
      <DocSection title="Usage">
        <p className="mb-4">
          Colors are applied through CSS custom properties. Reference them in
          inline styles or CSS modules using the token name:
        </p>
        <div
          className="bg-background-surface-neutral-default rounded-md p-4 text-body-03 mb-4 border border-border-neutral-default"
          style={{
            fontFamily: "monospace",
            lineHeight: 1.7,
            overflowX: "auto",
          }}
        >
          <div className="text-text-neutral-placeholder">
            {`/* Scale token */`}
          </div>
          <div className="text-text-neutral-default">
            {`background-color: var(--color-primary-500);`}
          </div>
          <div className="text-text-neutral-placeholder mt-2">
            {`/* Semantic token */`}
          </div>
          <div className="text-text-neutral-default">
            {`color: var(--color-text-neutral-default);`}
          </div>
        </div>
        <p>
          For theming or dark mode, the token values are redefined at the root
          level. Components that use tokens automatically adapt without any code
          changes — the same{" "}
          <code style={{ fontFamily: "monospace" }}>
            var(--color-primary-500)
          </code>{" "}
          resolves to an emerald green in light mode and a brighter green in
          dark mode.
        </p>
      </DocSection>
    </>
  );
}
