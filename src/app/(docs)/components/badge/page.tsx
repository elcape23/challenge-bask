"use client";

import { useState, type ReactNode } from "react";
import DocHeader from "@/components/docs/DocHeader";
import DocSection from "@/components/docs/DocSection";
import DocTable from "@/components/docs/DocTable";
import DocCallout from "@/components/docs/DocCallout";
import DoDontGrid from "@/components/docs/DoDontGrid";
import DocPreview from "@/components/docs/DocPreview";
import DocAnatomy from "@/components/docs/DocAnatomy";
import Badge, { type BadgeType, type BadgeSize } from "@/components/ui/Badge";

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

const ALL_TYPES: BadgeType[] = ["neutral", "success", "info", "warning", "danger"];

function OverviewTab() {
  return (
    <>
      <DocSection title="Overview">
        <p className="mb-4">
          Badges are compact, non-interactive indicators that surface metadata at
          a glance — status, category, or semantic classification. They attach to
          other elements like list items, cards, or table rows.
        </p>
        <p>
          Keep badge labels short (one or two words). If more context is needed,
          pair the badge with a tooltip or a supporting description.
        </p>
      </DocSection>

      <DocSection title="Anatomy">
        <DocAnatomy
          items={[
            {
              label: "Container",
              description: "A pill-shaped element (border-radius: max/9999px) with a type-specific fill color.",
            },
            {
              label: "Icon (optional)",
              description: "A leading icon slot (24px md / 20px sm). Shown by default, toggled via showIcon.",
            },
            {
              label: "Label",
              description: "Short text that conveys the badge meaning. Uses medium-weight typography.",
            },
          ]}
        />
        <DocPreview title="Anatomy example">
          <div className="flex items-center gap-4">
            <Badge type="neutral" size="md" label="Badge" />
            <Badge type="success" size="md" label="Active" />
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="Types">
        <DocTable
          headers={["Type", "Background", "Text", "When to use"]}
          rows={[
            ["Neutral", "Muted neutral fill", "Secondary text (dark)", "General-purpose labels, categories, default state."],
            ["Success", "Green fill (#60be81)", "Invert text (light)", "Positive states — active, completed, approved."],
            ["Information", "Blue fill (#86a4ca)", "Invert text (light)", "Informational labels — new, beta, in progress."],
            ["Warning", "Amber fill (#dda146)", "Invert text (light)", "Caution — pending, expiring, approaching limits."],
            ["Danger", "Red fill (#b84335)", "Invert text (light)", "Negative — failed, error, overdue, blocked."],
          ]}
        />
        <DocPreview title="All types (md)">
          <div className="flex flex-wrap items-center gap-3">
            {ALL_TYPES.map((t) => (
              <Badge key={t} type={t} size="md" label={t.charAt(0).toUpperCase() + t.slice(1)} />
            ))}
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="Sizes">
        <DocTable
          headers={["Size", "Height", "Label", "Icon", "Padding"]}
          rows={[
            ["Medium (md)", "24px", "Body/02 Medium (13px / 16px / 500)", "24×24px", "px: 12px (space-3)"],
            ["Small (sm)", "20px", "Body/03 Medium (11px / 12px / 500)", "20×20px", "px: 8px (space-2)"],
          ]}
        />
        <DocPreview title="Medium (md)">
          <div className="flex flex-wrap items-center gap-3">
            {ALL_TYPES.map((t) => (
              <Badge key={t} type={t} size="md" label={t.charAt(0).toUpperCase() + t.slice(1)} />
            ))}
          </div>
        </DocPreview>
        <DocPreview title="Small (sm)">
          <div className="flex flex-wrap items-center gap-3">
            {ALL_TYPES.map((t) => (
              <Badge key={t} type={t} size="sm" label={t.charAt(0).toUpperCase() + t.slice(1)} />
            ))}
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="Show Icon">
        <p className="mb-4">
          The <code>showIcon</code> prop toggles the leading icon slot. When hidden, the badge
          displays only the label text.
        </p>
        <DocPreview title="With icon vs Without icon">
          <div className="flex flex-wrap items-center gap-3">
            <Badge type="success" label="With icon" showIcon />
            <Badge type="success" label="No icon" showIcon={false} />
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="Behavior">
        <DocCallout variant="info" title="Non-interactive">
          Badges are static indicators. They do not receive focus, hover states,
          or click handlers. If you need interactivity, use a chip or tag component.
        </DocCallout>
        <p>
          Badges follow the content they annotate. They use <code>inline-flex</code>{" "}
          so they flow naturally within text or alongside other inline elements.
        </p>
      </DocSection>

      <DocSection title="Accessibility">
        <ul className="pl-5 mb-4">
          <li className="mb-2">
            Do not rely on color alone to convey meaning — the label text must be descriptive.
          </li>
          <li className="mb-2">
            Icons use <code>aria-hidden=&quot;true&quot;</code> — decorative only.
          </li>
          <li className="mb-2">
            Maintain sufficient contrast between label and background for each type.
          </li>
          <li>
            For critical status info, ensure screen readers announce it via <code>aria-label</code>.
          </li>
        </ul>
      </DocSection>

      <DocSection title="Usage guidelines">
        <DoDontGrid
          doItems={[
            { description: "Use badges for short, glanceable status indicators." },
            { description: "Be consistent with type-to-meaning mapping." },
            { description: "Keep labels to one or two words." },
            { description: "Use the neutral type for non-semantic labels." },
          ]}
          dontItems={[
            { description: "Don't use badges for long text or sentences." },
            { description: "Don't badge every item in a list — it defeats the purpose." },
            { description: "Don't use decorative badges that convey no information." },
            { description: "Don't mix semantic colors inconsistently." },
          ]}
        />
      </DocSection>
    </>
  );
}

function DesignTokensTab() {
  return (
    <>
      <DocSection title="Color Tokens per Type">
        <TokenGroup title="Neutral">
          <ColorSwatch color="#e4e6de" label="bg / fill / neutral / default" />
          <ColorSwatch color="#4e534d" label="text / neutral / secondary" />
          <ColorSwatch color="#4e534d" label="icon / neutral / secondary" />
        </TokenGroup>
        <TokenGroup title="Success">
          <ColorSwatch color="#60be81" label="bg / fill / success / default" />
          <ColorSwatch color="#e0f4e7" label="text / success / invert" />
          <ColorSwatch color="#e0f4e7" label="icon / success / invert" />
        </TokenGroup>
        <TokenGroup title="Information">
          <ColorSwatch color="#86a4ca" label="bg / fill / information / default" />
          <ColorSwatch color="#e6eef7" label="text / information / invert" />
          <ColorSwatch color="#e6eef7" label="icon / information / invert" />
        </TokenGroup>
        <TokenGroup title="Warning">
          <ColorSwatch color="#dda146" label="bg / fill / warning / default" />
          <ColorSwatch color="#fcefd9" label="text / warning / invert" />
          <ColorSwatch color="#fcefd9" label="icon / warning / invert" />
        </TokenGroup>
        <TokenGroup title="Danger">
          <ColorSwatch color="#b84335" label="bg / fill / danger / default" />
          <ColorSwatch color="#f1f2ec" label="text / neutral / invert" />
          <ColorSwatch color="#f1f2ec" label="icon / neutral / invert" />
        </TokenGroup>
      </DocSection>

      <DocSection title="Typography Tokens">
        <DocTable
          headers={["Size", "Token", "Font Size", "Line Height", "Weight"]}
          rows={[
            ["md", "Body/02/Medium", "13px", "16px", "500 (medium)"],
            ["sm", "Body/03/Medium", "11px", "12px", "500 (medium)"],
          ]}
        />
        <DocCallout variant="info" title="Font family">
          All badge text uses <code>Suisse Intl Trial</code> (Medium weight) via the <code>font/family/default</code> token.
        </DocCallout>
      </DocSection>

      <DocSection title="Spacing Tokens">
        <DocTable
          headers={["Property", "Token (md)", "Value (md)", "Token (sm)", "Value (sm)"]}
          rows={[
            ["Horizontal padding", "spacing/space-3", "12px", "spacing/space-2", "8px"],
            ["Icon-to-label gap", "spacing/space-1", "4px", "spacing/space-1", "4px"],
          ]}
        />
      </DocSection>

      <DocSection title="Dimensions">
        <DocTable
          headers={["Property", "md", "sm"]}
          rows={[
            ["Container height", "24px", "20px"],
            ["Icon slot", "24×24px", "20×20px"],
            ["Border radius", "9999px (max)", "9999px (max)"],
          ]}
        />
      </DocSection>
    </>
  );
}

function StylesTab() {
  return (
    <>
      <DocSection title="All Types — Medium (md)">
        <DocPreview title="Medium badges">
          <div className="flex flex-wrap items-center gap-3">
            {ALL_TYPES.map((t) => (
              <Badge key={t} type={t} size="md" label={t.charAt(0).toUpperCase() + t.slice(1)} />
            ))}
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="All Types — Small (sm)">
        <DocPreview title="Small badges">
          <div className="flex flex-wrap items-center gap-3">
            {ALL_TYPES.map((t) => (
              <Badge key={t} type={t} size="sm" label={t.charAt(0).toUpperCase() + t.slice(1)} />
            ))}
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="With & Without Icon">
        <DocPreview title="Icon visible (default)">
          <div className="flex flex-wrap items-center gap-3">
            {ALL_TYPES.map((t) => (
              <Badge key={t} type={t} size="md" label={t.charAt(0).toUpperCase() + t.slice(1)} showIcon />
            ))}
          </div>
        </DocPreview>
        <DocPreview title="Icon hidden">
          <div className="flex flex-wrap items-center gap-3">
            {ALL_TYPES.map((t) => (
              <Badge key={t} type={t} size="md" label={t.charAt(0).toUpperCase() + t.slice(1)} showIcon={false} />
            ))}
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="Size Comparison">
        <DocPreview title="md vs sm side by side">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-body-03 text-text-neutral-placeholder w-8">md</span>
              {ALL_TYPES.map((t) => (
                <Badge key={t} type={t} size="md" label={t.charAt(0).toUpperCase() + t.slice(1)} />
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-body-03 text-text-neutral-placeholder w-8">sm</span>
              {ALL_TYPES.map((t) => (
                <Badge key={t} type={t} size="sm" label={t.charAt(0).toUpperCase() + t.slice(1)} />
              ))}
            </div>
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="In Context">
        <DocPreview title="Badges alongside text">
          <div className="space-y-2">
            <p className="text-body-01 text-text-neutral-default flex items-center gap-2">
              Appointment scheduled <Badge type="success" size="sm" label="Confirmed" />
            </p>
            <p className="text-body-01 text-text-neutral-default flex items-center gap-2">
              Lab results <Badge type="info" size="sm" label="New" />
            </p>
            <p className="text-body-01 text-text-neutral-default flex items-center gap-2">
              Prescription <Badge type="warning" size="sm" label="Expiring" />
            </p>
            <p className="text-body-01 text-text-neutral-default flex items-center gap-2">
              Insurance claim <Badge type="danger" size="sm" label="Denied" />
            </p>
          </div>
        </DocPreview>
      </DocSection>
    </>
  );
}

function PropertiesTab() {
  const [type, setType] = useState<BadgeType>("neutral");
  const [size, setSize] = useState<BadgeSize>("md");
  const [showIcon, setShowIcon] = useState(true);
  const [label, setLabel] = useState("Badge");

  const codeSnippet = `<Badge
  type="${type}"
  size="${size}"
  label="${label}"${!showIcon ? "\n  showIcon={false}" : ""}
/>`;

  return (
    <>
      <DocSection title="Interactive Playground">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
          {/* Preview */}
          <div className="rounded-md border border-border-neutral-default overflow-hidden">
            <div className="px-4 py-2 bg-background-surface-neutral-default border-b border-border-neutral-default text-body-03 font-medium text-text-neutral-placeholder">
              Preview
            </div>
            <div className="flex items-center justify-center p-8 bg-white min-h-[160px]">
              <Badge type={type} size={size} label={label} showIcon={showIcon} />
            </div>
          </div>

          {/* Controls */}
          <div className="p-4 rounded-md border border-border-neutral-default bg-background-surface-neutral-default">
            <h4 className="text-body-02 font-medium mb-4">Controls</h4>

            <RadioGroup
              label="Type"
              options={[
                { value: "neutral", label: "Neutral" },
                { value: "success", label: "Success" },
                { value: "info", label: "Info" },
                { value: "warning", label: "Warning" },
                { value: "danger", label: "Danger" },
              ]}
              value={type}
              onChange={setType}
            />

            <RadioGroup
              label="Size"
              options={[
                { value: "md", label: "Medium" },
                { value: "sm", label: "Small" },
              ]}
              value={size}
              onChange={setSize}
            />

            <div className="mb-4">
              <p className="text-body-03 font-medium text-text-neutral-secondary mb-2">Label</p>
              <input
                type="text"
                value={label}
                onChange={(e) => setLabel(e.target.value)}
                className="w-full px-3 py-1.5 text-body-02 border border-border-neutral-default rounded-md bg-white focus:outline-none focus:shadow-focus"
              />
            </div>

            <Toggle label="Show icon" checked={showIcon} onChange={setShowIcon} />
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
            ["type", '"neutral" | "success" | "info" | "warning" | "danger"', '"neutral"', "Semantic color type. Uses information tokens for info."],
            ["size", '"sm" | "md"', '"md"', "Size variant — affects height, padding, typography, and icon size."],
            ["label", "string", '"Text"', "Text label displayed inside the badge."],
            ["showIcon", "boolean", "true", "Toggle the leading icon."],
            ["icon", "ReactNode", "undefined", "Custom icon to override the default dot indicator."],
            ["className", "string", "undefined", "Additional CSS classes."],
          ]}
        />
      </DocSection>

      <DocSection title="Code Examples">
        <DocPreview title="Status badges">
          <div className="flex flex-wrap items-center gap-3">
            <Badge type="success" label="Active" />
            <Badge type="warning" label="Pending" />
            <Badge type="danger" label="Expired" />
          </div>
        </DocPreview>
        <pre className="mb-6 p-4 rounded-md bg-neutral-900 text-neutral-100 text-body-02 overflow-x-auto">
          <code>{`<Badge type="success" label="Active" />
<Badge type="warning" label="Pending" />
<Badge type="danger" label="Expired" />`}</code>
        </pre>

        <DocPreview title="Small badges without icon">
          <div className="flex flex-wrap items-center gap-3">
            <Badge type="info" size="sm" label="New" showIcon={false} />
            <Badge type="neutral" size="sm" label="Draft" showIcon={false} />
          </div>
        </DocPreview>
        <pre className="mb-6 p-4 rounded-md bg-neutral-900 text-neutral-100 text-body-02 overflow-x-auto">
          <code>{`<Badge type="info" size="sm" label="New" showIcon={false} />
<Badge type="neutral" size="sm" label="Draft" showIcon={false} />`}</code>
        </pre>
      </DocSection>

      <DocSection title="Validation & Constraints">
        <DocTable
          headers={["Rule", "Details"]}
          rows={[
            ["Label required", "Every badge must have a label — a blank badge is meaningless."],
            ["Short labels only", "Keep to one or two words. Badges are not sentences."],
            ["Non-interactive", "Badges do not receive focus or click handlers. Use chips for interactive tags."],
            ["Consistent type mapping", "Map types to meaning consistently — don't use success for different concepts in different views."],
          ]}
        />
      </DocSection>
    </>
  );
}

/* ═══════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════ */

export default function BadgePage() {
  const [activeTab, setActiveTab] = useState<TabName>("Overview");

  return (
    <div className="col-span-2 flex flex-col">
      <DocHeader
        title="Badge"
        description="Badges are compact, non-interactive indicators that surface metadata at a glance — status, category, or semantic classification."
      />

      <TabBar active={activeTab} onChange={setActiveTab} />

      {activeTab === "Overview" && <OverviewTab />}
      {activeTab === "Design Tokens" && <DesignTokensTab />}
      {activeTab === "Styles" && <StylesTab />}
      {activeTab === "Properties" && <PropertiesTab />}
    </div>
  );
}
