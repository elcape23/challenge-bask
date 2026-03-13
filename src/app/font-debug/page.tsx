import { Inter, Roboto, JetBrains_Mono } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ weight: ["400"], subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });

const SAMPLES = [
  "ABCDEFG",
  "1234567890",
  "Accordion 7575757",
  "00 11 22 33 44 55 66 77 88 99",
] as const;

type FontConfig = {
  name: string;
  fontFamily?: string;
  className?: string;
};

const FONTS: FontConfig[] = [
  {
    name: "Suisse Intl",
    fontFamily: "var(--font-suisse-intl), sans-serif",
  },
  {
    name: "Inter",
    className: inter.className,
  },
  {
    name: "Roboto",
    className: roboto.className,
  },
  {
    name: "Arial",
    fontFamily: "Arial, sans-serif",
  },
  {
    name: "JetBrains Mono",
    className: jetbrainsMono.className,
  },
];

function FontSample({
  font,
  useLiningNums,
}: {
  font: FontConfig;
  useLiningNums: boolean;
}) {
  return (
    <div
      className={font.className}
      style={{
        ...(font.fontFamily && { fontFamily: font.fontFamily }),
        fontVariantNumeric: useLiningNums ? "lining-nums" : undefined,
        fontSize: "20px",
        lineHeight: 1.5,
        padding: "16px",
        border: "1px solid var(--color-border-neutral-default)",
        borderRadius: "var(--radius-md)",
        backgroundColor: "var(--color-background-surface-neutral-default)",
      }}
    >
      <div
        style={{
          fontSize: "12px",
          color: "var(--color-text-neutral-placeholder)",
          marginBottom: "8px",
        }}
      >
        {font.name}
        {useLiningNums && " (lining-nums)"}
      </div>
      {SAMPLES.map((sample) => (
        <div key={sample}>{sample}</div>
      ))}
    </div>
  );
}

export default function FontDebugPage() {
  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "32px 24px",
      }}
    >
      <h1
        style={{
          fontSize: "var(--font-size-heading-03)",
          lineHeight: "var(--font-size-heading-03--line-height)",
          marginBottom: "8px",
        }}
      >
        Font debug
      </h1>
      <p
        style={{
          color: "var(--color-text-neutral-secondary)",
          marginBottom: "32px",
        }}
      >
        Compare browser rendering across fonts. Use DevTools to inspect computed
        font-family and verify which font is actually rendered.
      </p>

      <section style={{ marginBottom: "40px" }}>
        <h2
          style={{
            fontSize: "var(--font-size-heading-05)",
            lineHeight: "var(--font-size-heading-05--line-height)",
            marginBottom: "16px",
          }}
        >
          1. Default rendering
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "16px",
          }}
        >
          {FONTS.map((font) => (
            <FontSample key={font.name} font={font} useLiningNums={false} />
          ))}
        </div>
      </section>

      <section>
        <h2
          style={{
            fontSize: "var(--font-size-heading-05)",
            lineHeight: "var(--font-size-heading-05--line-height)",
            marginBottom: "16px",
          }}
        >
          2. font-variant-numeric: lining-nums
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "16px",
          }}
        >
          {FONTS.map((font) => (
            <FontSample key={font.name} font={font} useLiningNums={true} />
          ))}
        </div>
      </section>

      <section
        style={{
          marginTop: "40px",
          padding: "16px",
          backgroundColor: "var(--color-background-surface-information-default)",
          borderRadius: "var(--radius-md)",
        }}
      >
        <h3
          style={{
            fontSize: "var(--font-size-heading-06)",
            lineHeight: "var(--font-size-heading-06--line-height)",
            marginBottom: "8px",
          }}
        >
          How to inspect rendered fonts in DevTools
        </h3>
        <ol
          style={{
            margin: 0,
            paddingLeft: "20px",
            color: "var(--color-text-neutral-secondary)",
            lineHeight: 1.6,
          }}
        >
          <li>
            Right-click any sample text and choose <strong>Inspect</strong> (or
            press F12).
          </li>
          <li>
            In the <strong>Elements</strong> panel, select the text node or its
            parent.
          </li>
          <li>
            Open the <strong>Computed</strong> tab and search for{" "}
            <code>font-family</code> to see the resolved font stack.
          </li>
          <li>
            In <strong>Chrome</strong>: open the <strong>Styles</strong> panel,
            find <code>font-family</code>, and hover the font name to see a
            preview and confirm which font file is used.
          </li>
          <li>
            In <strong>Firefox</strong>: use the <strong>Fonts</strong> tab in
            the inspector to see which font is actually rendered.
          </li>
        </ol>
      </section>
    </div>
  );
}
