"use client";

import { useState, type ReactNode } from "react";
import DocHeader from "@/components/docs/DocHeader";
import DocSection from "@/components/docs/DocSection";
import DocTable from "@/components/docs/DocTable";
import DocCallout from "@/components/docs/DocCallout";
import DoDontGrid from "@/components/docs/DoDontGrid";
import DocPreview from "@/components/docs/DocPreview";
import DocAnatomy from "@/components/docs/DocAnatomy";
import Card, { type CardSize, type CardBackground } from "@/components/ui/Card";

/* ─── Tabs ─── */
const TABS = ["Overview", "Design Tokens", "Styles", "Properties"] as const;
type TabName = (typeof TABS)[number];

function TabBar({ active, onChange }: { active: TabName; onChange: (t: TabName) => void }) {
  return (
    <div className="flex gap-1 border-b border-border-neutral-default mb-8">
      {TABS.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`px-4 py-2 text-body-01 font-medium transition-colors cursor-pointer -mb-px ${
            active === tab
              ? "border-b-2 border-primary-900 text-text-neutral-default"
              : "text-text-neutral-placeholder hover:text-text-neutral-secondary"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

/* ─── Token Swatch ─── */
function ColorSwatch({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="size-8 rounded-md border border-border-neutral-default shrink-0" style={{ backgroundColor: color }} />
      <div>
        <p className="text-body-02 font-medium">{label}</p>
        <p className="text-body-03 text-text-neutral-placeholder">{color}</p>
      </div>
    </div>
  );
}

function TokenGroup({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="mb-6">
      <h4 className="text-body-02 font-medium text-text-neutral-secondary mb-3">{title}</h4>
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">{children}</div>
    </div>
  );
}

/* ─── Selector helpers ─── */
function RadioGroup<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { value: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <div className="mb-4">
      <p className="text-body-03 font-medium text-text-neutral-secondary mb-2">{label}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => (
          <button
            key={o.value}
            onClick={() => onChange(o.value)}
            className={`px-3 py-1 text-body-03 rounded-full border transition-colors cursor-pointer ${
              value === o.value
                ? "bg-primary-900 text-primary-100 border-primary-900"
                : "border-border-neutral-default text-text-neutral-secondary hover:border-border-neutral-hover"
            }`}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function Toggle({ label, checked, onChange }: { label: string; checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <label className="flex items-center gap-2 cursor-pointer mb-2">
      <div
        onClick={() => onChange(!checked)}
        className={`relative w-9 h-5 rounded-full transition-colors ${checked ? "bg-primary-900" : "bg-neutral-300"}`}
      >
        <div className={`absolute top-0.5 left-0.5 size-4 rounded-full bg-white transition-transform ${checked ? "translate-x-4" : ""}`} />
      </div>
      <span className="text-body-03 text-text-neutral-secondary">{label}</span>
    </label>
  );
}

/* ═══════════════════════════════════════════════════
   TAB CONTENT
   ═══════════════════════════════════════════════════ */

function OverviewTab() {
  return (
    <>
      <DocSection title="Overview">
        <p className="mb-4">
          Cards are flexible container components that group related content — a heading and
          an open slot — into a single, visually distinct surface. They work in grid, list,
          and dashboard layouts where users need to scan and compare items.
        </p>
        <p>
          The Card component supports three sizes (lg, md, sm), three background treatments
          (solid, blur, transparent), and an optional heading. The slot accepts any child
          content, making the Card highly composable.
        </p>
      </DocSection>

      <DocSection title="Anatomy">
        <DocAnatomy
          items={[
            {
              label: ".heading",
              description:
                "An optional sub-component displaying a text heading. Typography scales with the card size. Toggled via showHeading.",
            },
            {
              label: "Slot",
              description:
                "The main content area. Fills remaining vertical space (flex: 1). Accepts any React children.",
            },
          ]}
        />
        <DocPreview title="Anatomy example">
          <div className="flex items-end gap-6">
            <Card size="lg" heading="Heading" style={{ width: 200, height: 240 }}>
              <div className="w-full h-full rounded-sm bg-neutral-200 flex items-center justify-center text-body-03 text-text-neutral-placeholder">
                Slot
              </div>
            </Card>
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="Sizes">
        <DocTable
          headers={["Size", "Padding", "Gap", "Radius", "Border", "Heading Typography"]}
          rows={[
            ["Large (lg)", "20px (space-5)", "12px (space-3)", "20px (xl)", "1px solid", "Heading/06/Medium — 19px/24px/500"],
            ["Medium (md)", "12px (space-3)", "8px (space-2)", "16px (lg)", "None", "Body/01/Medium — 16px/24px/500"],
            ["Small (sm)", "8px (space-2)", "4px (space-1)", "16px (lg)", "1px solid", "Body/02/Medium — 13px/16px/500"],
          ]}
        />
        <DocPreview title="Size comparison">
          <div className="flex items-end gap-6">
            <div className="text-center">
              <Card size="lg" heading="Heading" style={{ width: 200, height: 240 }}>
                <div className="w-full h-full rounded-sm bg-neutral-200" />
              </Card>
              <p className="mt-2 text-body-03 text-text-neutral-placeholder">lg</p>
            </div>
            <div className="text-center">
              <Card size="md" heading="Heading" style={{ width: 172, height: 206 }}>
                <div className="w-full h-full rounded-sm bg-neutral-200" />
              </Card>
              <p className="mt-2 text-body-03 text-text-neutral-placeholder">md</p>
            </div>
            <div className="text-center">
              <Card size="sm" heading="Heading" style={{ width: 100, height: 120 }}>
                <div className="w-full h-full rounded-sm bg-neutral-200" />
              </Card>
              <p className="mt-2 text-body-03 text-text-neutral-placeholder">sm</p>
            </div>
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="Backgrounds">
        <DocTable
          headers={["Background", "Treatment", "When to use"]}
          rows={[
            ["Solid", "Surface neutral fill (#f1f2ec) with optional border", "Default — standard cards on page backgrounds."],
            ["Blur", "Muted fill (rgba(28,31,27,0.4)) + 20px backdrop blur", "Overlay-style cards on images or rich backgrounds."],
            ["Transparent", "No fill, no border, reduced padding", "Lightweight grouping where visual weight should be minimal."],
          ]}
        />
        <DocPreview title="Background variants (lg)">
          <div className="flex items-end gap-6">
            <div className="text-center">
              <Card size="lg" background="solid" heading="Solid" style={{ width: 200, height: 240 }}>
                <div className="w-full h-full rounded-sm bg-neutral-200" />
              </Card>
              <p className="mt-2 text-body-03 text-text-neutral-placeholder">solid</p>
            </div>
            <div className="text-center relative">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary-400 to-primary-800" style={{ width: 200, height: 240 }} />
              <Card size="lg" background="blur" heading="Blur" style={{ width: 200, height: 240, position: "relative" }}>
                <div className="w-full h-full rounded-sm bg-white/10" />
              </Card>
              <p className="mt-2 text-body-03 text-text-neutral-placeholder">blur</p>
            </div>
            <div className="text-center">
              <Card size="lg" background="transparent" heading="Transparent" style={{ width: 200, height: 240 }}>
                <div className="w-full h-full rounded-sm bg-neutral-200" />
              </Card>
              <p className="mt-2 text-body-03 text-text-neutral-placeholder">transparent</p>
            </div>
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="Show Heading">
        <p className="mb-4">
          The <code>showHeading</code> prop toggles the heading sub-component. When hidden,
          the slot fills the entire card.
        </p>
        <DocPreview title="With heading vs Without heading">
          <div className="flex items-end gap-6">
            <Card size="lg" showHeading heading="Heading" style={{ width: 200, height: 240 }}>
              <div className="w-full h-full rounded-sm bg-neutral-200 flex items-center justify-center text-body-03 text-text-neutral-placeholder">
                Slot
              </div>
            </Card>
            <Card size="lg" showHeading={false} style={{ width: 200, height: 240 }}>
              <div className="w-full h-full rounded-sm bg-neutral-200 flex items-center justify-center text-body-03 text-text-neutral-placeholder">
                Full slot
              </div>
            </Card>
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="Accessibility">
        <ul className="pl-5 mb-4">
          <li className="mb-2">
            Cards are non-interactive containers by default — they don&apos;t receive focus.
          </li>
          <li className="mb-2">
            Use semantic elements inside the slot: headings, paragraphs, lists.
          </li>
          <li className="mb-2">
            If the card becomes clickable, wrap it with a link or button and provide an accessible name.
          </li>
          <li>
            Ensure interactive elements inside the card are reachable via keyboard in a logical tab order.
          </li>
        </ul>
      </DocSection>

      <DocSection title="Usage guidelines">
        <DoDontGrid
          doItems={[
            { description: "Use cards to group a heading and related slot content." },
            { description: "Choose the size that matches your layout density." },
            { description: "Use the blur background only on rich visual surfaces." },
            { description: "Keep card content scannable and focused." },
          ]}
          dontItems={[
            { description: "Don't nest cards inside other cards." },
            { description: "Don't mix card sizes within the same row or grid." },
            { description: "Don't use blur on plain white backgrounds — it has no visual effect." },
            { description: "Don't remove the heading if the slot content lacks context." },
          ]}
        />
      </DocSection>
    </>
  );
}

function DesignTokensTab() {
  return (
    <>
      <DocSection title="Color Tokens">
        <TokenGroup title="Solid background">
          <ColorSwatch color="#f1f2ec" label="bg / surface / neutral / default" />
          <ColorSwatch color="#b7bbaf" label="border / neutral / default" />
          <ColorSwatch color="#1c1f1b" label="text / neutral / default" />
        </TokenGroup>
        <TokenGroup title="Blur background">
          <ColorSwatch color="rgba(28,31,27,0.4)" label="bg / fill / neutral / muted" />
          <ColorSwatch color="#f1f2ec" label="text / neutral / invert" />
        </TokenGroup>
        <TokenGroup title="Transparent background">
          <ColorSwatch color="transparent" label="No fill" />
          <ColorSwatch color="#1c1f1b" label="text / neutral / default" />
        </TokenGroup>
      </DocSection>

      <DocSection title="Typography Tokens">
        <DocTable
          headers={["Size", "Token", "Font Size", "Line Height", "Weight"]}
          rows={[
            ["lg", "Heading/06/Medium", "19px", "24px", "500 (medium)"],
            ["md", "Body/01/Medium", "16px", "24px", "500 (medium)"],
            ["sm", "Body/02/Medium", "13px", "16px", "500 (medium)"],
          ]}
        />
        <DocCallout variant="info" title="Font family">
          All heading text uses <code>Suisse Intl Trial</code> (Medium weight) via the <code>font/family/default</code> token.
        </DocCallout>
      </DocSection>

      <DocSection title="Spacing Tokens">
        <DocTable
          headers={["Property", "Token (lg)", "Value (lg)", "Token (md)", "Value (md)", "Token (sm)", "Value (sm)"]}
          rows={[
            ["Padding", "spacing/space-5", "20px", "spacing/space-3", "12px", "spacing/space-2", "8px"],
            ["Gap", "spacing/space-3", "12px", "spacing/space-2", "8px", "spacing/space-1", "4px"],
            ["Heading padding", "spacing/space-2", "8px", "spacing/space-1", "4px", "spacing/space-0", "2px"],
          ]}
        />
      </DocSection>

      <DocSection title="Border & Radius Tokens">
        <DocTable
          headers={["Property", "Token (lg)", "Value (lg)", "Token (md/sm)", "Value (md/sm)"]}
          rows={[
            ["Border radius", "border-radius/xl", "20px", "border-radius/lg", "16px"],
            ["Border (solid lg)", "border/neutral/default", "1px solid #b7bbaf", "—", "none (md), 1px solid (sm)"],
          ]}
        />
      </DocSection>

      <DocSection title="Blur Token">
        <DocTable
          headers={["Property", "Token", "Value"]}
          rows={[
            ["Backdrop blur", "Blur/blur-20", "20px"],
          ]}
        />
      </DocSection>
    </>
  );
}

function StylesTab() {
  return (
    <>
      <DocSection title="All Sizes — Solid">
        <DocPreview title="lg / md / sm (solid background)">
          <div className="flex items-end gap-6">
            <Card size="lg" background="solid" heading="Large" style={{ width: 200, height: 240 }}>
              <div className="w-full h-full rounded-sm bg-neutral-200" />
            </Card>
            <Card size="md" background="solid" heading="Medium" style={{ width: 172, height: 206 }}>
              <div className="w-full h-full rounded-sm bg-neutral-200" />
            </Card>
            <Card size="sm" background="solid" heading="Small" style={{ width: 100, height: 120 }}>
              <div className="w-full h-full rounded-sm bg-neutral-200" />
            </Card>
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="Background Variants (lg)">
        <DocPreview title="Solid">
          <Card size="lg" background="solid" heading="Solid Card" style={{ width: 200, height: 240 }}>
            <div className="w-full h-full rounded-sm bg-neutral-200" />
          </Card>
        </DocPreview>
        <DocPreview title="Blur (on gradient)">
          <div className="relative" style={{ width: 200, height: 240 }}>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary-400 to-primary-800" />
            <Card size="lg" background="blur" heading="Blur Card" style={{ width: 200, height: 240, position: "relative" }}>
              <div className="w-full h-full rounded-sm bg-white/10" />
            </Card>
          </div>
        </DocPreview>
        <DocPreview title="Transparent">
          <Card size="lg" background="transparent" heading="Transparent Card" style={{ width: 200, height: 240 }}>
            <div className="w-full h-full rounded-sm bg-neutral-200" />
          </Card>
        </DocPreview>
      </DocSection>

      <DocSection title="With & Without Heading">
        <DocPreview title="Heading visible (default)">
          <div className="flex items-end gap-6">
            <Card size="lg" showHeading heading="Heading" style={{ width: 200, height: 240 }}>
              <div className="w-full h-full rounded-sm bg-neutral-200" />
            </Card>
            <Card size="md" showHeading heading="Heading" style={{ width: 172, height: 206 }}>
              <div className="w-full h-full rounded-sm bg-neutral-200" />
            </Card>
            <Card size="sm" showHeading heading="Heading" style={{ width: 100, height: 120 }}>
              <div className="w-full h-full rounded-sm bg-neutral-200" />
            </Card>
          </div>
        </DocPreview>
        <DocPreview title="Heading hidden">
          <div className="flex items-end gap-6">
            <Card size="lg" showHeading={false} style={{ width: 200, height: 240 }}>
              <div className="w-full h-full rounded-sm bg-neutral-200" />
            </Card>
            <Card size="md" showHeading={false} style={{ width: 172, height: 206 }}>
              <div className="w-full h-full rounded-sm bg-neutral-200" />
            </Card>
            <Card size="sm" showHeading={false} style={{ width: 100, height: 120 }}>
              <div className="w-full h-full rounded-sm bg-neutral-200" />
            </Card>
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="In Context">
        <DocPreview title="Dashboard cards grid">
          <div className="grid grid-cols-3 gap-4" style={{ maxWidth: 640 }}>
            <Card size="md" heading="Revenue" style={{ height: 160 }}>
              <p className="text-heading-05 font-bold text-text-neutral-default">$24.5k</p>
            </Card>
            <Card size="md" heading="Patients" style={{ height: 160 }}>
              <p className="text-heading-05 font-bold text-text-neutral-default">1,243</p>
            </Card>
            <Card size="md" heading="Appointments" style={{ height: 160 }}>
              <p className="text-heading-05 font-bold text-text-neutral-default">87</p>
            </Card>
          </div>
        </DocPreview>
      </DocSection>
    </>
  );
}

function PropertiesTab() {
  const [size, setSize] = useState<CardSize>("lg");
  const [background, setBackground] = useState<CardBackground>("solid");
  const [showHeading, setShowHeading] = useState(true);
  const [heading, setHeading] = useState("Heading");

  const sizeStyles: Record<CardSize, { width: number; height: number }> = {
    lg: { width: 200, height: 240 },
    md: { width: 172, height: 206 },
    sm: { width: 100, height: 120 },
  };

  const dims = sizeStyles[size];

  const codeSnippet = `<Card
  size="${size}"
  background="${background}"${showHeading ? `\n  heading="${heading}"` : "\n  showHeading={false}"}
>
  {children}
</Card>`;

  return (
    <>
      <DocSection title="Interactive Playground">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
          {/* Preview */}
          <div className="rounded-md border border-border-neutral-default overflow-hidden">
            <div className="px-4 py-2 bg-background-surface-neutral-default border-b border-border-neutral-default text-body-03 font-medium text-text-neutral-placeholder">
              Preview
            </div>
            <div className="flex items-center justify-center p-8 min-h-[320px]" style={background === "blur" ? { background: "linear-gradient(135deg, var(--color-primary-400), var(--color-primary-800))" } : { background: "white" }}>
              <Card
                size={size}
                background={background}
                showHeading={showHeading}
                heading={heading}
                style={{ width: dims.width, height: dims.height }}
              >
                <div className={`w-full h-full rounded-sm flex items-center justify-center text-body-03 ${background === "blur" ? "bg-white/10 text-text-neutral-invert" : "bg-neutral-200 text-text-neutral-placeholder"}`}>
                  Slot
                </div>
              </Card>
            </div>
          </div>

          {/* Controls */}
          <div className="p-4 rounded-md border border-border-neutral-default bg-background-surface-neutral-default">
            <h4 className="text-body-02 font-medium mb-4">Controls</h4>

            <RadioGroup
              label="Size"
              options={[
                { value: "lg", label: "Large" },
                { value: "md", label: "Medium" },
                { value: "sm", label: "Small" },
              ]}
              value={size}
              onChange={setSize}
            />

            <RadioGroup
              label="Background"
              options={[
                { value: "solid", label: "Solid" },
                { value: "blur", label: "Blur" },
                { value: "transparent", label: "Transparent" },
              ]}
              value={background}
              onChange={setBackground}
            />

            <div className="mb-4">
              <p className="text-body-03 font-medium text-text-neutral-secondary mb-2">Heading</p>
              <input
                type="text"
                value={heading}
                onChange={(e) => setHeading(e.target.value)}
                className="w-full px-3 py-1.5 text-body-02 border border-border-neutral-default rounded-md bg-white focus:outline-none focus:shadow-focus"
              />
            </div>

            <Toggle label="Show heading" checked={showHeading} onChange={setShowHeading} />
          </div>
        </div>

        {/* Code output */}
        <div className="mt-4 rounded-md border border-border-neutral-default overflow-hidden">
          <div className="px-4 py-2 bg-background-surface-neutral-default border-b border-border-neutral-default text-body-03 font-medium text-text-neutral-placeholder">
            Code
          </div>
          <pre className="p-4 bg-neutral-900 text-neutral-100 text-body-02 overflow-x-auto">
            <code>{codeSnippet}</code>
          </pre>
        </div>
      </DocSection>

      <DocSection title="Props Reference">
        <DocTable
          headers={["Prop", "Type", "Default", "Description"]}
          rows={[
            ["size", '"lg" | "md" | "sm"', '"lg"', "Size variant — affects padding, gap, radius, border, and heading typography."],
            ["background", '"solid" | "blur" | "transparent"', '"solid"', "Background treatment — solid fill, frosted blur, or transparent."],
            ["showHeading", "boolean", "true", "Toggle the heading sub-component."],
            ["heading", "string", '"Heading"', "Text displayed in the heading sub-component."],
            ["children", "ReactNode", "undefined", "Slot content rendered below the heading."],
            ["className", "string", "undefined", "Additional CSS classes on the root container."],
          ]}
        />
      </DocSection>

      <DocSection title="Code Examples">
        <DocPreview title="Basic card">
          <Card size="lg" heading="Patient Overview" style={{ width: 280 }}>
            <div className="space-y-1">
              <p className="text-body-02 text-text-neutral-default">Dr. Jane Smith</p>
              <p className="text-body-03 text-text-neutral-placeholder">Cardiologist · Room 204</p>
            </div>
          </Card>
        </DocPreview>
        <pre className="mb-6 p-4 rounded-md bg-neutral-900 text-neutral-100 text-body-02 overflow-x-auto">
          <code>{`<Card size="lg" heading="Patient Overview">
  <div className="space-y-1">
    <p>Dr. Jane Smith</p>
    <p>Cardiologist · Room 204</p>
  </div>
</Card>`}</code>
        </pre>

        <DocPreview title="Small card without heading">
          <Card size="sm" showHeading={false} style={{ width: 100, height: 100 }}>
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-heading-06 font-bold text-text-neutral-default">42</span>
            </div>
          </Card>
        </DocPreview>
        <pre className="mb-6 p-4 rounded-md bg-neutral-900 text-neutral-100 text-body-02 overflow-x-auto">
          <code>{`<Card size="sm" showHeading={false}>
  <span className="text-heading-06 font-bold">42</span>
</Card>`}</code>
        </pre>
      </DocSection>

      <DocSection title="Validation & Constraints">
        <DocTable
          headers={["Rule", "Details"]}
          rows={[
            ["Slot required", "Cards should contain meaningful children — an empty card has no purpose."],
            ["Background context", "Use blur only on rich surfaces (images, gradients). On plain backgrounds it is invisible."],
            ["Size consistency", "Within a row or grid, use the same size for all cards."],
            ["Heading purpose", "If showHeading is false, ensure the slot content provides its own context."],
          ]}
        />
      </DocSection>
    </>
  );
}

/* ═══════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════ */

export default function CardPage() {
  const [activeTab, setActiveTab] = useState<TabName>("Overview");

  return (
    <div className="col-span-2 flex flex-col">
      <DocHeader
        title="Card"
        description="Cards are flexible container components that group a heading and slot content into a visually distinct surface with size, background, and heading controls."
      />

      <TabBar active={activeTab} onChange={setActiveTab} />

      {activeTab === "Overview" && <OverviewTab />}
      {activeTab === "Design Tokens" && <DesignTokensTab />}
      {activeTab === "Styles" && <StylesTab />}
      {activeTab === "Properties" && <PropertiesTab />}
    </div>
  );
}
