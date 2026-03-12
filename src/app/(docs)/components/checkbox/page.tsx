"use client";

import { useState, type ReactNode } from "react";
import DocHeader from "@/components/docs/DocHeader";
import DocSection from "@/components/docs/DocSection";
import DocTable from "@/components/docs/DocTable";
import DocCallout from "@/components/docs/DocCallout";
import DoDontGrid from "@/components/docs/DoDontGrid";
import DocPreview from "@/components/docs/DocPreview";
import DocAnatomy from "@/components/docs/DocAnatomy";
import Checkbox, { type CheckboxSize, type CheckboxSide } from "@/components/ui/Checkbox";

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
          className={`px-4 py-2 text-body-02 font-medium transition-colors cursor-pointer -mb-px ${
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
          The Checkbox Group component pairs a square checkbox indicator with a
          text label. It supports checked, unchecked, and indeterminate states,
          two sizes (md, sm), and two label positions (left, right).
        </p>
        <p>
          Use checkboxes when users need to make independent selections from a set
          of options, or to toggle a single binary choice. Unlike radio buttons,
          any number of checkboxes in a group can be checked simultaneously.
        </p>
      </DocSection>

      <DocSection title="Anatomy">
        <DocAnatomy
          items={[
            {
              label: "Checkbox Group",
              description:
                "The root container — a horizontal flex row that holds the checkbox indicator and label, with size-specific gap and height.",
            },
            {
              label: ".checkbox",
              description:
                "The square indicator sub-component. Transitions between empty (unchecked), checked (checkmark icon), and indeterminate (minus icon).",
            },
            {
              label: "Label",
              description:
                "Descriptive text next to the indicator. Clicking the label also toggles the checkbox. Typography scales with size.",
            },
          ]}
        />
        <DocPreview title="Anatomy example">
          <div className="flex items-center gap-6">
            <Checkbox size="md" label="Unchecked" />
            <Checkbox size="md" label="Checked" defaultChecked />
            <Checkbox size="md" label="Indeterminate" indeterminate />
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="Sizes">
        <DocTable
          headers={["Size", "Height", "Checkbox", "Gap", "Vertical Padding", "Label Typography"]}
          rows={[
            ["Medium (md)", "48px", "24×24px", "12px (space-3)", "12px (space-3)", "Body/01/Regular — 16px/24px/400"],
            ["Small (sm)", "36px", "20×20px", "8px (space-2)", "8px (space-2)", "Body/02/Regular — 13px/16px/400"],
          ]}
        />
        <DocPreview title="Size comparison">
          <div className="space-y-2">
            <div className="flex items-center gap-6">
              <Checkbox size="md" label="Medium unchecked" />
              <Checkbox size="md" label="Medium checked" defaultChecked />
            </div>
            <div className="flex items-center gap-6">
              <Checkbox size="sm" label="Small unchecked" />
              <Checkbox size="sm" label="Small checked" defaultChecked />
            </div>
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="Side (Label Position)">
        <DocTable
          headers={["Side", "Layout", "When to use"]}
          rows={[
            ["Left (default)", "Checkbox on the left, label on the right", "Standard forms and settings panels."],
            ["Right", "Label on the left, checkbox on the right", "List items, settings rows where the action is on the trailing edge."],
          ]}
        />
        <DocPreview title="Side comparison">
          <div className="space-y-2" style={{ maxWidth: 240 }}>
            <Checkbox size="md" side="left" label="Left side" defaultChecked />
            <Checkbox size="md" side="right" label="Right side" defaultChecked />
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="States">
        <DocTable
          headers={["State", "Visual", "Description"]}
          rows={[
            ["Unchecked (empty)", "Neutral fill + neutral border", "The option is not selected."],
            ["Checked", "Primary fill + primary border + check icon", "The option is selected."],
            ["Indeterminate", "Primary fill + primary border + minus icon", 'Used in "select all" patterns when only some children are checked.'],
            ["Disabled", "Reduced opacity (50%)", "Non-interactive. State is preserved but cannot be changed."],
          ]}
        />
        <DocPreview title="All states">
          <div className="space-y-2">
            <Checkbox size="md" label="Unchecked" />
            <Checkbox size="md" label="Checked" defaultChecked />
            <Checkbox size="md" label="Indeterminate" indeterminate />
            <Checkbox size="md" label="Disabled unchecked" disabled />
            <Checkbox size="md" label="Disabled checked" defaultChecked disabled />
          </div>
        </DocPreview>
        <DocCallout variant="info" title="Indeterminate state">
          The indeterminate state cannot be set via HTML alone — it must be
          applied programmatically via the <code>indeterminate</code> prop, which sets the DOM property.
        </DocCallout>
      </DocSection>

      <DocSection title="Behavior">
        <p className="mb-4">
          Clicking the checkbox or its label toggles between checked and unchecked.
          In a group with a parent &quot;select all&quot; checkbox, toggling the parent
          checks or unchecks all children. When some (but not all) children are
          checked, the parent shows the indeterminate state.
        </p>
        <p>
          Checkboxes do not take effect until the form is submitted. If you need
          an immediate effect, use a switch instead.
        </p>
      </DocSection>

      <DocSection title="Accessibility">
        <ul className="pl-5 mb-4">
          <li className="mb-2">
            Uses a native <code>&lt;input type=&quot;checkbox&quot;&gt;</code> wrapped with a <code>&lt;label&gt;</code> for click-anywhere behavior.
          </li>
          <li className="mb-2">
            The native input is visually hidden (<code>sr-only</code>) but remains accessible to screen readers.
          </li>
          <li className="mb-2">
            Sets <code>aria-checked=&quot;mixed&quot;</code> for the indeterminate state.
          </li>
          <li className="mb-2">
            Groups should be wrapped in a <code>&lt;fieldset&gt;</code> with a <code>&lt;legend&gt;</code>.
          </li>
          <li>
            Keyboard: Space toggles the checkbox. Tab moves focus between checkboxes.
          </li>
        </ul>
      </DocSection>

      <DocSection title="Usage guidelines">
        <DoDontGrid
          doItems={[
            { description: "Use checkboxes when users can select multiple options from a list." },
            { description: "Pair each checkbox with a clear, concise label." },
            { description: 'Use a "select all" parent when the list has many items.' },
            { description: 'Use positive phrasing: "Show notifications" not "Don\'t hide notifications".' },
          ]}
          dontItems={[
            { description: "Don't use a checkbox for mutually exclusive choices — use radios." },
            { description: "Don't use a checkbox for instant-effect toggles — use a switch." },
            { description: 'Don\'t start labels with negation ("Don\'t send emails").' },
            { description: "Don't place checkboxes in a horizontal row when you have more than 3 options." },
          ]}
        />
      </DocSection>
    </>
  );
}

function DesignTokensTab() {
  return (
    <>
      <DocSection title="Color Tokens — Unchecked">
        <TokenGroup title="Checkbox indicator (empty)">
          <ColorSwatch color="#e4e6de" label="bg / fill / neutral / default" />
          <ColorSwatch color="#b7bbaf" label="border / neutral / default" />
        </TokenGroup>
        <TokenGroup title="Label text">
          <ColorSwatch color="#1c1f1b" label="text / neutral / default" />
        </TokenGroup>
      </DocSection>

      <DocSection title="Color Tokens — Checked / Indeterminate">
        <TokenGroup title="Checkbox indicator (active)">
          <ColorSwatch color="#153014" label="bg / fill / primary / default" />
          <ColorSwatch color="#a6bba0" label="border / primary / default" />
          <ColorSwatch color="#e4ece2" label="icon / primary / invert" />
        </TokenGroup>
      </DocSection>

      <DocSection title="Typography Tokens">
        <DocTable
          headers={["Size", "Token", "Font Size", "Line Height", "Weight"]}
          rows={[
            ["md", "Body/01/Regular", "16px", "24px", "400 (regular)"],
            ["sm", "Body/02/Regular", "13px", "16px", "400 (regular)"],
          ]}
        />
        <DocCallout variant="info" title="Font family">
          All label text uses <code>Suisse Intl Trial</code> (Regular weight) via the <code>font/family/default</code> token.
        </DocCallout>
      </DocSection>

      <DocSection title="Spacing Tokens">
        <DocTable
          headers={["Property", "Token (md)", "Value (md)", "Token (sm)", "Value (sm)"]}
          rows={[
            ["Gap (checkbox ↔ label)", "spacing/space-3", "12px", "spacing/space-2", "8px"],
            ["Vertical padding", "spacing/space-3", "12px", "spacing/space-2", "8px"],
            ["Checkbox inner padding", "spacing/space-0", "2px", "spacing/space-0", "2px"],
          ]}
        />
      </DocSection>

      <DocSection title="Dimensions">
        <DocTable
          headers={["Property", "md", "sm"]}
          rows={[
            ["Container height", "48px", "36px"],
            ["Checkbox indicator", "24×24px", "20×20px"],
            ["Border radius", "4px (xs)", "4px (xs)"],
            ["Border width", "1px", "1px"],
          ]}
        />
      </DocSection>
    </>
  );
}

function StylesTab() {
  return (
    <>
      <DocSection title="Side: Left — All States (md)">
        <DocPreview title="Left side, unchecked / checked / indeterminate / disabled">
          <div className="space-y-2" style={{ maxWidth: 280 }}>
            <Checkbox size="md" side="left" label="Unchecked" />
            <Checkbox size="md" side="left" label="Checked" defaultChecked />
            <Checkbox size="md" side="left" label="Indeterminate" indeterminate />
            <Checkbox size="md" side="left" label="Disabled" disabled />
            <Checkbox size="md" side="left" label="Disabled checked" defaultChecked disabled />
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="Side: Right — All States (md)">
        <DocPreview title="Right side, unchecked / checked / indeterminate / disabled">
          <div className="space-y-2" style={{ maxWidth: 280 }}>
            <Checkbox size="md" side="right" label="Unchecked" />
            <Checkbox size="md" side="right" label="Checked" defaultChecked />
            <Checkbox size="md" side="right" label="Indeterminate" indeterminate />
            <Checkbox size="md" side="right" label="Disabled" disabled />
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="Size: Small (sm)">
        <DocPreview title="Small checkboxes — left side">
          <div className="space-y-1" style={{ maxWidth: 280 }}>
            <Checkbox size="sm" side="left" label="Small unchecked" />
            <Checkbox size="sm" side="left" label="Small checked" defaultChecked />
            <Checkbox size="sm" side="left" label="Small indeterminate" indeterminate />
          </div>
        </DocPreview>
        <DocPreview title="Small checkboxes — right side">
          <div className="space-y-1" style={{ maxWidth: 280 }}>
            <Checkbox size="sm" side="right" label="Small unchecked" />
            <Checkbox size="sm" side="right" label="Small checked" defaultChecked />
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="Size Comparison">
        <DocPreview title="md vs sm side by side">
          <div className="space-y-2" style={{ maxWidth: 280 }}>
            <div className="flex items-center gap-2">
              <span className="text-body-03 text-text-neutral-placeholder w-8">md</span>
              <Checkbox size="md" label="Option A" defaultChecked />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-body-03 text-text-neutral-placeholder w-8">sm</span>
              <Checkbox size="sm" label="Option A" defaultChecked />
            </div>
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="In Context — Checkbox Group">
        <DocPreview title="Notification preferences">
          <fieldset style={{ border: "none", padding: 0, margin: 0, maxWidth: 320 }}>
            <legend className="text-body-01 font-medium text-text-neutral-default mb-2">
              Notification channels
            </legend>
            <div className="space-y-0">
              <Checkbox size="md" label="Email" defaultChecked />
              <Checkbox size="md" label="SMS" />
              <Checkbox size="md" label="Push notifications" defaultChecked />
              <Checkbox size="md" label="In-app messages" />
            </div>
          </fieldset>
        </DocPreview>
      </DocSection>
    </>
  );
}

function PropertiesTab() {
  const [size, setSize] = useState<CheckboxSize>("md");
  const [side, setSide] = useState<CheckboxSide>("left");
  const [isChecked, setIsChecked] = useState(false);
  const [isIndeterminate, setIsIndeterminate] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [label, setLabel] = useState("Label");

  const codeSnippet = `<Checkbox
  size="${size}"
  side="${side}"
  label="${label}"${isChecked ? "\n  checked" : ""}${isIndeterminate ? "\n  indeterminate" : ""}${isDisabled ? "\n  disabled" : ""}
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
              <Checkbox
                size={size}
                side={side}
                label={label}
                checked={isChecked}
                indeterminate={isIndeterminate}
                disabled={isDisabled}
                onChange={(e) => {
                  setIsChecked(e.target.checked);
                  if (isIndeterminate) setIsIndeterminate(false);
                }}
              />
            </div>
          </div>

          {/* Controls */}
          <div className="p-4 rounded-md border border-border-neutral-default bg-background-surface-neutral-default">
            <h4 className="text-body-02 font-medium mb-4">Controls</h4>

            <RadioGroup
              label="Size"
              options={[
                { value: "md", label: "Medium" },
                { value: "sm", label: "Small" },
              ]}
              value={size}
              onChange={setSize}
            />

            <RadioGroup
              label="Side"
              options={[
                { value: "left", label: "Left" },
                { value: "right", label: "Right" },
              ]}
              value={side}
              onChange={setSide}
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

            <Toggle label="Checked" checked={isChecked} onChange={(v) => { setIsChecked(v); if (v) setIsIndeterminate(false); }} />
            <Toggle label="Indeterminate" checked={isIndeterminate} onChange={(v) => { setIsIndeterminate(v); if (v) setIsChecked(false); }} />
            <Toggle label="Disabled" checked={isDisabled} onChange={setIsDisabled} />
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
            ["size", '"md" | "sm"', '"md"', "Size variant — affects checkbox dimensions, gap, height, and label typography."],
            ["side", '"left" | "right"', '"left"', "Position of the checkbox indicator relative to the label."],
            ["label", "string", '"Label"', "Descriptive text next to the checkbox."],
            ["checked", "boolean", "undefined", "Controlled checked state."],
            ["defaultChecked", "boolean", "undefined", "Uncontrolled initial checked state."],
            ["indeterminate", "boolean", "false", "Indeterminate (mixed) state — overrides checked visually."],
            ["disabled", "boolean", "false", "Disables interaction and reduces opacity."],
            ["onChange", "(e: ChangeEvent) => void", "undefined", "Called when the checkbox value changes."],
            ["className", "string", "undefined", "Additional CSS classes on the root label."],
          ]}
        />
      </DocSection>

      <DocSection title="Code Examples">
        <DocPreview title="Basic checkbox group">
          <div className="space-y-0" style={{ maxWidth: 280 }}>
            <Checkbox label="Option A" defaultChecked />
            <Checkbox label="Option B" />
            <Checkbox label="Option C" defaultChecked />
          </div>
        </DocPreview>
        <pre className="mb-6 p-4 rounded-md bg-neutral-900 text-neutral-100 text-body-02 overflow-x-auto">
          <code>{`<Checkbox label="Option A" defaultChecked />
<Checkbox label="Option B" />
<Checkbox label="Option C" defaultChecked />`}</code>
        </pre>

        <DocPreview title="Small right-sided checkboxes">
          <div className="space-y-0" style={{ maxWidth: 240 }}>
            <Checkbox size="sm" side="right" label="Compact A" defaultChecked />
            <Checkbox size="sm" side="right" label="Compact B" />
          </div>
        </DocPreview>
        <pre className="mb-6 p-4 rounded-md bg-neutral-900 text-neutral-100 text-body-02 overflow-x-auto">
          <code>{`<Checkbox size="sm" side="right" label="Compact A" defaultChecked />
<Checkbox size="sm" side="right" label="Compact B" />`}</code>
        </pre>
      </DocSection>

      <DocSection title="Validation & Constraints">
        <DocTable
          headers={["Rule", "Details"]}
          rows={[
            ["Label required", "Every checkbox must have a label. Unlabeled checkboxes are inaccessible."],
            ["Use switch for instant effects", "Checkboxes are for deferred (form submit) actions. Use a switch for immediate toggles."],
            ["Indeterminate is visual only", "The indeterminate prop controls visual display. The underlying checked state is still true/false."],
            ["Group with fieldset", "Wrap related checkboxes in a <fieldset> with a <legend> for accessibility."],
          ]}
        />
      </DocSection>
    </>
  );
}

/* ═══════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════ */

export default function CheckboxPage() {
  const [activeTab, setActiveTab] = useState<TabName>("Overview");

  return (
    <>
      <DocHeader
        title="Checkbox"
        description="Checkbox Group pairs a square indicator with a text label, supporting checked, unchecked, and indeterminate states with two sizes and two label positions."
      />

      <TabBar active={activeTab} onChange={setActiveTab} />

      {activeTab === "Overview" && <OverviewTab />}
      {activeTab === "Design Tokens" && <DesignTokensTab />}
      {activeTab === "Styles" && <StylesTab />}
      {activeTab === "Properties" && <PropertiesTab />}
    </>
  );
}
