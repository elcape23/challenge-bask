"use client";

import { useState, type ReactNode } from "react";
import DocHeader from "@/components/docs/DocHeader";
import DocSection from "@/components/docs/DocSection";
import DocTable from "@/components/docs/DocTable";
import DocCallout from "@/components/docs/DocCallout";
import DoDontGrid from "@/components/docs/DoDontGrid";
import DocPreview from "@/components/docs/DocPreview";
import DocAnatomy from "@/components/docs/DocAnatomy";
import Label, { type LabelSize } from "@/components/ui/Label";

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
      <div className="size-12 rounded-sm border border-border-neutral-default shrink-0" style={{ backgroundColor: color }} />
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

function FigmaLabelStack() {
  return (
    <div className="flex h-[108px] w-[90px] flex-col items-start gap-2 p-5 bg-white">
      <Label size="md">Label</Label>
      <Label size="sm">Label</Label>
      <Label size="xs">Label</Label>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   TAB CONTENT
   ═══════════════════════════════════════════════════ */

function OverviewTab() {
  return (
    <>
      <div className="col-start-1">
        <DocSection title="Overview">
        <p className="mb-4">
          The Label component identifies form controls and provides essential
          context. It ensures users understand what information is expected
          from each field. Every form control should have a visible label.
        </p>
        <p>
          Labels appear above or beside the input and can include a required
          indicator (asterisk) when the field is mandatory. Consistent label
          styling helps users scan forms quickly.
        </p>
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Anatomy">
        <DocAnatomy
          items={[
            {
              label: "Label text",
              description:
                "The primary text that identifies the form control. Short, descriptive, and always visible.",
            },
            {
              label: "Required indicator (optional)",
              description:
                'An asterisk (*) appended when the field is mandatory. Uses danger color for visibility. Hidden from screen readers via aria-hidden.',
            },
          ]}
        />
        <DocPreview rounded={false} border={false} verticalPaddingOnly aspectSquare>
          <div className="flex items-center gap-6">
            <div className="flex flex-col gap-1">
              <Label size="md">Email address</Label>
              <span className="text-body-03 text-text-neutral-placeholder">Default label</span>
            </div>
            <div className="flex flex-col gap-1">
              <Label size="md" required>Email address</Label>
              <span className="text-body-03 text-text-neutral-placeholder">With required indicator</span>
            </div>
          </div>
        </DocPreview>
      </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Sizes" hideTitle>
        <DocTable
          variant="surface"
          headers={["Size", "Text style", "Font size / Line height", "Use case"]}
          rows={[
            ["md", "Body/01/Regular", "16px / 24px", "Default for most form labels and headings."],
            ["sm", "Body/02/Regular", "13px / 16px", "Compact forms, secondary labels, table headers."],
            ["xs", "Body/03/Regular", "11px / 12px", "Captions, footnotes, micro labels."],
          ]}
        />
        <div className="grid grid-cols-2 gap-10 items-stretch">
        <DocPreview rounded={false} border={false} verticalPaddingOnly className="h-full min-h-0">
          <FigmaLabelStack />
        </DocPreview>
        </div>
      </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="States" hideTitle>
        <DocTable
          variant="surface"
          headers={["State", "Visual treatment", "Description"]}
          rows={[
            ["Default", "Regular weight, neutral foreground", "The label is associated with an available input."],
            ["Required", "Asterisk in danger color appended", "Indicates a mandatory field. Asterisk is aria-hidden."],
            ["Disabled", "50% opacity, cursor not-allowed", "The associated field is non-interactive. Label remains for context."],
          ]}
        />
        <div className="grid grid-cols-2 gap-10 items-stretch">
        <DocPreview rounded={false} border={false} verticalPaddingOnly aspectSquare className="h-full min-h-0">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-6">
              <div className="flex flex-col gap-1">
                <Label size="md">Default</Label>
                <span className="text-body-03 text-text-neutral-placeholder">Default</span>
              </div>
              <div className="flex flex-col gap-1">
                <Label size="md" required>Required</Label>
                <span className="text-body-03 text-text-neutral-placeholder">Required</span>
              </div>
              <div className="flex flex-col gap-1">
                <Label size="md" disabled>Disabled</Label>
                <span className="text-body-03 text-text-neutral-placeholder">Disabled</span>
              </div>
            </div>
          </div>
        </DocPreview>
        </div>
      </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Behavior">
        <p className="mb-4">
          Labels are associated with form controls via <code>htmlFor</code> and
          matching <code>id</code>. Clicking the label focuses the associated
          input, which improves usability especially on touch devices.
        </p>
        <DocCallout variant="warning" title="Never hide the label">
          Placeholder text disappears on focus, so users lose context about
          what the field expects. Always pair placeholders with a persistent,
          visible label.
        </DocCallout>
      </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Accessibility">
        <ul className="pl-5 mb-4">
          <li className="mb-2">
            Always associate labels with inputs using <code>htmlFor</code> and matching <code>id</code>.
          </li>
          <li className="mb-2">
            The required indicator uses <code>aria-hidden=&quot;true&quot;</code> so screen readers don&apos;t announce
            it — they infer required from the <code>required</code> attribute on the input.
          </li>
          <li className="mb-2">
            Use <code>aria-describedby</code> to link helper/error text to the input.
          </li>
          <li>
            Ensure label text meets a minimum 4.5:1 contrast ratio.
          </li>
        </ul>
      </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Usage guidelines">
          <div
            className="overflow-hidden flex flex-row gap-10 w-full items-start justify-between"
            style={{ backgroundColor: "#FFFFFF", padding: "200px" }}
          >
        <DoDontGrid
          doItems={[
            { description: "Always show a visible label for every form control." },
            { description: "Keep label text short — one to four words." },
            { description: 'Use sentence case: "Email address" not "EMAIL ADDRESS".' },
            { description: "Place the required asterisk immediately after the label text." },
          ]}
          dontItems={[
            { description: "Don't rely on placeholder text as the only label." },
            { description: "Don't hide the label when the input is focused." },
            { description: 'Don\'t use vague labels like "Field 1" or "Input".' },
            { description: "Don't use different weights/sizes for labels in the same form." },
          ]}
        />
          </div>
        </DocSection>
      </div>
    </>
  );
}

function DesignTokensTab() {
  return (
    <>
      <div className="col-span-2">
        <DocSection title="Color Tokens">
        <TokenGroup title="Text">
          <ColorSwatch color="#1C1F1B" label="text / neutral / default" />
        </TokenGroup>
        <TokenGroup title="Required indicator">
          <ColorSwatch color="#903328" label="text / danger / default" />
        </TokenGroup>
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Typography Tokens" hideTitle>
        <DocTable
          variant="surface"
          headers={["Size", "Text style", "Font size", "Line height", "Weight"]}
          rows={[
            ["md", "Body/01/Regular", "16px", "24px", "400 (regular)"],
            ["sm", "Body/02/Regular", "13px", "16px", "400 (regular)"],
            ["xs", "Body/03/Regular", "11px", "12px", "400 (regular)"],
          ]}
        />
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Spacing Tokens" hideTitle>
        <DocTable
          variant="surface"
          headers={["Property", "Token", "Value"]}
          rows={[
            ["Gap (label ↔ asterisk)", "spacing/space-0.5", "2px"],
          ]}
        />
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Disabled State" hideTitle>
        <DocTable
          variant="surface"
          headers={["Property", "Value"]}
          rows={[
            ["Opacity", "50%"],
            ["Cursor", "not-allowed"],
          ]}
        />
        </DocSection>
      </div>
    </>
  );
}

function StylesTab() {
  return (
    <>
      <div className="col-span-2">
        <DocSection title="Sizes — Side by Side">
        <div className="grid grid-cols-2 gap-10 items-stretch">
        <DocPreview rounded={false} border={false} verticalPaddingOnly className="h-full min-h-0">
          <FigmaLabelStack />
        </DocPreview>
        </div>
      </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="With Required Indicator">
        <div className="grid grid-cols-2 gap-10 items-stretch">
        <DocPreview rounded={false} border={false} verticalPaddingOnly aspectSquare className="h-full min-h-0">
          <div className="flex flex-col gap-4">
            <div className="flex items-baseline gap-4">
              <span className="text-body-03 text-text-neutral-placeholder w-8">md</span>
              <Label size="md" required>Email address</Label>
            </div>
            <div className="flex items-baseline gap-4">
              <span className="text-body-03 text-text-neutral-placeholder w-8">sm</span>
              <Label size="sm" required>Email address</Label>
            </div>
            <div className="flex items-baseline gap-4">
              <span className="text-body-03 text-text-neutral-placeholder w-8">xs</span>
              <Label size="xs" required>Email address</Label>
            </div>
          </div>
        </DocPreview>
        </div>
      </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Disabled">
        <div className="grid grid-cols-2 gap-10 items-stretch">
        <DocPreview rounded={false} border={false} verticalPaddingOnly aspectSquare className="h-full min-h-0">
          <div className="flex flex-col gap-4">
            <Label size="md" disabled>Disabled label (md)</Label>
            <Label size="sm" disabled>Disabled label (sm)</Label>
            <Label size="xs" disabled>Disabled label (xs)</Label>
          </div>
        </DocPreview>
        </div>
      </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="In Context — Form">
        <div className="grid grid-cols-2 gap-10 items-stretch">
        <DocPreview rounded={false} border={false} verticalPaddingOnly aspectSquare className="h-full min-h-0">
          <div className="flex flex-col gap-4" style={{ maxWidth: 320 }}>
            <div>
              <Label size="sm" required htmlFor="ctx-name">Full name</Label>
              <input
                id="ctx-name"
                type="text"
                placeholder="Jane Doe"
                className="mt-1 w-full py-2 px-3 border border-border-neutral-default rounded-md text-body-02 bg-white focus:outline-none focus:shadow-focus focus:border-border-primary-default"
              />
            </div>
            <div>
              <Label size="sm" required htmlFor="ctx-email">Email address</Label>
              <input
                id="ctx-email"
                type="email"
                placeholder="you@example.com"
                className="mt-1 w-full py-2 px-3 border border-border-neutral-default rounded-md text-body-02 bg-white focus:outline-none focus:shadow-focus focus:border-border-primary-default"
              />
            </div>
            <div>
              <Label size="sm" htmlFor="ctx-phone">Phone (optional)</Label>
              <input
                id="ctx-phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
                className="mt-1 w-full py-2 px-3 border border-border-neutral-default rounded-md text-body-02 bg-white focus:outline-none focus:shadow-focus focus:border-border-primary-default"
              />
            </div>
          </div>
        </DocPreview>
        </div>
      </DocSection>
      </div>
    </>
  );
}

function PropertiesTab() {
  const [size, setSize] = useState<LabelSize>("md");
  const [isRequired, setIsRequired] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [labelText, setLabelText] = useState("Email address");

  const codeSnippet = `<Label
  size="${size}"${isRequired ? "\n  required" : ""}${isDisabled ? "\n  disabled" : ""}
  htmlFor="my-input"
>
  ${labelText}
</Label>`;

  return (
    <div className="col-span-2">
      <DocSection title="Interactive Playground">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
          {/* Preview */}
          <div className="rounded-md border border-border-neutral-default overflow-hidden">
            <div className="px-4 py-2 bg-background-surface-neutral-default border-b border-border-neutral-default text-body-03 font-medium text-text-neutral-placeholder">
              Preview
            </div>
            <div className="flex items-center justify-center p-8 bg-white min-h-[120px]">
              <Label size={size} required={isRequired} disabled={isDisabled}>
                {labelText}
              </Label>
            </div>
          </div>

          {/* Controls */}
          <div className="p-4 rounded-md border border-border-neutral-default bg-background-surface-neutral-default">
            <h4 className="text-body-02 font-medium mb-4">Controls</h4>

            <RadioGroup
              label="Size"
              options={[
                { value: "md", label: "md" },
                { value: "sm", label: "sm" },
                { value: "xs", label: "xs" },
              ]}
              value={size}
              onChange={setSize}
            />

            <div className="mb-4">
              <p className="text-body-03 font-medium text-text-neutral-secondary mb-2">Label text</p>
              <input
                type="text"
                value={labelText}
                onChange={(e) => setLabelText(e.target.value)}
                className="w-full px-3 py-1.5 text-body-02 border border-border-neutral-default rounded-md bg-white focus:outline-none focus:shadow-focus"
              />
            </div>

            <Toggle label="Required" checked={isRequired} onChange={setIsRequired} />
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

      <DocSection title="Props Reference" hideTitle>
        <DocTable
          variant="surface"
          headers={["Prop", "Type", "Default", "Description"]}
          rows={[
            ["size", '"md" | "sm" | "xs"', '"md"', "Size variant — controls typography (Body/01, 02, 03)."],
            ["children", "string", '"Label"', "The label text content."],
            ["required", "boolean", "false", "Shows a red asterisk (*) after the label text."],
            ["disabled", "boolean", "false", "Applies 50% opacity and not-allowed cursor."],
            ["htmlFor", "string", "undefined", "Associates the label with an input via matching id."],
            ["className", "string", "undefined", "Additional CSS classes on the root label element."],
          ]}
        />
      </DocSection>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════ */

export default function LabelPage() {
  const [activeTab, setActiveTab] = useState<TabName>("Overview");

  return (
    <div className="col-span-2 grid grid-cols-2 gap-x-10 gap-y-10">
      <div className="col-start-1 flex flex-col">
        <DocHeader
          title="Label"
          description="Labels identify form controls and provide essential context. They support three sizes (md, sm, xs) and an optional required indicator."
          variant="foundations"
        />

        <TabBar active={activeTab} onChange={setActiveTab} />
      </div>

      {activeTab === "Overview" && <OverviewTab />}
      {activeTab === "Design Tokens" && <DesignTokensTab />}
      {activeTab === "Styles" && <StylesTab />}
      {activeTab === "Properties" && <PropertiesTab />}
    </div>
  );
}
