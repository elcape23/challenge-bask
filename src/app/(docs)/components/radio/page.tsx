"use client";

import { useState, type ReactNode } from "react";
import DocHeader from "@/components/docs/DocHeader";
import DocSection from "@/components/docs/DocSection";
import DocTable from "@/components/docs/DocTable";
import DocCallout from "@/components/docs/DocCallout";
import DoDontGrid from "@/components/docs/DoDontGrid";
import DocPreview from "@/components/docs/DocPreview";
import DocAnatomy from "@/components/docs/DocAnatomy";
import RadioGroup, {
  type RadioGroupSize,
  type RadioGroupSide,
} from "@/components/ui/RadioGroup";
import RadioButton from "@/components/ui/RadioButton";

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
function ControlRadioGroup<T extends string>({
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


/* ─── Controlled Radio Group helper for demos ─── */
function DemoRadioGroup({
  options,
  size,
  side,
  defaultValue,
}: {
  options: string[];
  size?: RadioGroupSize;
  side?: RadioGroupSide;
  defaultValue?: string;
}) {
  const [selected, setSelected] = useState(defaultValue ?? "");

  return (
    <div className="flex flex-col">
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => setSelected(opt)}
          className="text-left"
        >
          <RadioGroup
            size={size}
            side={side}
            label={opt}
            state={selected === opt ? "selected" : "default"}
          />
        </button>
      ))}
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
          Radio buttons let users select exactly one option from a mutually
          exclusive set. They are best suited for short lists of 2–5 options
          where seeing every choice reduces decision-making effort.
        </p>
        <p>
          If the list is long or screen space is limited, consider a select
          dropdown instead. For binary on/off decisions, a switch is usually a
          better fit.
        </p>
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Anatomy">
        <DocAnatomy
          items={[
            {
              label: "Radio circle",
              description:
                "The circular indicator with a border. Shows a filled inner dot when selected. Only one radio in a group can be active at a time.",
            },
            {
              label: "Label",
              description:
                "Text next to the control that describes the option. Clicking the label selects the radio.",
            },
          ]}
        />
        <DocPreview rounded={false} border={false} verticalPaddingOnly aspectSquare>
          <div className="flex items-start gap-8">
            <div className="flex flex-col gap-1">
              <RadioGroup size="md" label="Label" state="selected" />
              <span className="text-body-03 text-text-neutral-placeholder">Radio group item</span>
            </div>
            <div className="flex flex-col gap-1">
              <RadioButton heading="Heading" description="Description" defaultChecked />
              <span className="text-body-03 text-text-neutral-placeholder">Radio button card</span>
            </div>
          </div>
        </DocPreview>
      </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Sizes" hideTitle>
        <DocTable
          variant="surface"
          headers={["Size", "Control size", "Row padding", "Label text", "Use case"]}
          rows={[
            ["md", "24×24px", "48px", "Body/01 — 16px", "Default for most form contexts."],
            ["sm", "20×20px", "36px", "Body/02 — 13px", "Compact forms, settings, dense tables."],
          ]}
        />
        <div className="grid grid-cols-2 gap-10 items-stretch">
        <DocPreview rounded={false} border={false} verticalPaddingOnly aspectSquare className="h-full min-h-0">
          <div className="flex gap-8">
            <div className="flex flex-col gap-1">
              <span className="text-body-03 text-text-neutral-placeholder mb-1">md</span>
              <RadioGroup size="md" label="Option A" state="selected" />
              <RadioGroup size="md" label="Option B" state="default" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-body-03 text-text-neutral-placeholder mb-1">sm</span>
              <RadioGroup size="sm" label="Option A" state="selected" />
              <RadioGroup size="sm" label="Option B" state="default" />
            </div>
          </div>
        </DocPreview>
        </div>
      </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Side" hideTitle>
        <DocTable
          variant="surface"
          headers={["Side", "Description"]}
          rows={[
            ["left", "Radio circle on the left, label on the right (default)."],
            ["right", "Label on the left, radio circle on the right."],
          ]}
        />
        <div className="grid grid-cols-2 gap-10 items-stretch">
        <DocPreview rounded={false} border={false} verticalPaddingOnly aspectSquare className="h-full min-h-0">
          <div className="flex gap-8">
            <div className="flex flex-col gap-1 w-48">
              <span className="text-body-03 text-text-neutral-placeholder mb-1">side=&quot;left&quot;</span>
              <RadioGroup size="md" side="left" label="Option A" state="selected" />
              <RadioGroup size="md" side="left" label="Option B" state="default" />
            </div>
            <div className="flex flex-col gap-1 w-48">
              <span className="text-body-03 text-text-neutral-placeholder mb-1">side=&quot;right&quot;</span>
              <RadioGroup size="md" side="right" label="Option A" state="selected" />
              <RadioGroup size="md" side="right" label="Option B" state="default" />
            </div>
          </div>
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
            ["Unselected", "Circle border, empty inside", "The option is available but not chosen."],
            ["Selected", "Circle border + filled inner dot (primary color)", "The option is chosen."],
            ["Disabled", "50% opacity, cursor not-allowed", "Non-interactive. Visible but cannot be changed."],
          ]}
        />
        <div className="grid grid-cols-2 gap-10 items-stretch">
        <DocPreview rounded={false} border={false} verticalPaddingOnly aspectSquare className="h-full min-h-0">
          <div className="flex items-start gap-8">
            <div className="flex flex-col gap-1">
              <RadioGroup label="Unselected" state="default" />
              <span className="text-body-03 text-text-neutral-placeholder">Group default</span>
            </div>
            <div className="flex flex-col gap-1">
              <RadioGroup label="Selected" state="selected" />
              <span className="text-body-03 text-text-neutral-placeholder">Group selected</span>
            </div>
            <div className="flex flex-col gap-1">
              <RadioButton heading="Heading" description="Description" />
              <span className="text-body-03 text-text-neutral-placeholder">Button default</span>
            </div>
            <div className="flex flex-col gap-1">
              <RadioButton heading="Selected card" description="Description" defaultChecked />
              <span className="text-body-03 text-text-neutral-placeholder">Button selected</span>
            </div>
          </div>
        </DocPreview>
        </div>
      </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Behavior">
        <p className="mb-4">
          Selecting a radio button immediately deselects the previously selected
          option in the same group. Arrow keys cycle through options within the
          group, while Tab moves focus to the next form control outside the group.
        </p>
        <DocCallout variant="info" title="Pre-selection">
          If a sensible default exists, pre-select it to reduce friction.
          If no default makes sense, leave all radios unselected and validate on
          submission.
        </DocCallout>
      </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Accessibility">
        <ul className="pl-5 mb-4">
          <li className="mb-2">
            Uses native <code>&lt;input type=&quot;radio&quot;&gt;</code> elements with matching <code>name</code> attributes.
          </li>
          <li className="mb-2">
            The hidden input is visually hidden via <code>sr-only</code> but remains in the accessibility tree.
          </li>
          <li className="mb-2">
            Arrow keys move focus between radios in the same group; Tab exits the group.
          </li>
          <li>
            Disabled state uses the native <code>disabled</code> attribute.
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
            { description: "Use radios when the user must pick exactly one option from a visible list." },
            { description: "Keep the list to 2–5 options for best usability." },
            { description: "Pre-select a recommended default when appropriate." },
            { description: "Use consistent size and side within the same radio group." },
          ]}
          dontItems={[
            { description: "Don't use a single radio button — use a checkbox or switch instead." },
            { description: "Don't use radios for multi-select — use checkboxes." },
            { description: "Don't place radio options horizontally unless there are only 2–3 short labels." },
            { description: "Don't change page content on radio selection without warning." },
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
        <DocSection title="Color Tokens — Unselected">
        <TokenGroup title="Circle">
          <ColorSwatch color="transparent" label="background (transparent)" />
          <ColorSwatch color="#B7BBAF" label="border / neutral / default" />
        </TokenGroup>
        <TokenGroup title="Text">
          <ColorSwatch color="#1C1F1B" label="text / neutral / default (label)" />
        </TokenGroup>
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Color Tokens — Selected">
        <TokenGroup title="Circle">
          <ColorSwatch color="#A6BBA0" label="border / primary / default" />
          <ColorSwatch color="#46683E" label="bg / fill / primary / default (dot)" />
        </TokenGroup>
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Color Tokens — Disabled">
        <TokenGroup title="Container">
          <ColorSwatch color="rgba(0,0,0,0.5)" label="opacity-50 on entire row" />
        </TokenGroup>
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Typography Tokens" hideTitle>
        <DocTable
          variant="surface"
          headers={["Size", "Label text style", "Font size", "Line height", "Weight"]}
          rows={[
            ["md", "Body/01/Regular", "16px", "24px", "400 (regular)"],
            ["sm", "Body/02/Regular", "13px", "16px", "400 (regular)"],
          ]}
        />
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Dimension Tokens" hideTitle>
        <DocTable
          variant="surface"
          headers={["Property", "md", "sm"]}
          rows={[
            ["Circle size", "24×24px (size-6)", "20×20px (size-5)"],
            ["Inner dot", "12×12px (size-3)", "10×10px (size-2.5)"],
            ["Border width", "2px", "2px"],
            ["Container height", "48px (h-12)", "36px (h-9)"],
            ["Vertical padding", "12px (py-3)", "8px (py-2)"],
            ["Gap (circle ↔ label)", "12px (gap-3)", "8px (gap-2)"],
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
        <DocPreview rounded={false} border={false} verticalPaddingOnly aspectSquare className="h-full min-h-0">
          <div className="flex gap-8">
            <div className="flex flex-col gap-1">
              <span className="text-body-03 text-text-neutral-placeholder mb-1">md</span>
              <DemoRadioGroup options={["Standard shipping", "Express shipping", "Overnight"]} size="md" defaultValue="Standard shipping" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-body-03 text-text-neutral-placeholder mb-1">sm</span>
              <DemoRadioGroup options={["Standard shipping", "Express shipping", "Overnight"]} size="sm" defaultValue="Standard shipping" />
            </div>
          </div>
        </DocPreview>
        </div>
      </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Side Variants">
        <div className="grid grid-cols-2 gap-10 items-stretch">
        <DocPreview rounded={false} border={false} verticalPaddingOnly aspectSquare className="h-full min-h-0">
          <div className="flex gap-8">
            <div className="flex flex-col gap-1 w-48">
              <span className="text-body-03 text-text-neutral-placeholder mb-1">side=&quot;left&quot;</span>
              <DemoRadioGroup options={["Option A", "Option B", "Option C"]} side="left" defaultValue="Option A" />
            </div>
            <div className="flex flex-col gap-1 w-48">
              <span className="text-body-03 text-text-neutral-placeholder mb-1">side=&quot;right&quot;</span>
              <DemoRadioGroup options={["Option A", "Option B", "Option C"]} side="right" defaultValue="Option A" />
            </div>
          </div>
        </DocPreview>
        </div>
      </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="States">
        <div className="grid grid-cols-2 gap-10 items-stretch">
        <DocPreview rounded={false} border={false} verticalPaddingOnly aspectSquare className="h-full min-h-0">
          <div className="flex items-start gap-8">
            <div className="flex flex-col gap-1">
              <span className="text-body-03 text-text-neutral-placeholder mb-1">Default</span>
              <DemoRadioGroup options={["Selected", "Unselected"]} defaultValue="Selected" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-body-03 text-text-neutral-placeholder mb-1">Disabled</span>
              <div className="flex flex-col">
                <RadioGroup label="Checked" state="selected" />
                <RadioGroup label="Unchecked" state="default" />
              </div>
            </div>
          </div>
        </DocPreview>
        </div>
      </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="In Context — Form">
        <div className="grid grid-cols-2 gap-10 items-stretch">
        <DocPreview rounded={false} border={false} verticalPaddingOnly aspectSquare className="h-full min-h-0">
          <div style={{ maxWidth: 320 }}>
            <fieldset className="border-none p-0 m-0">
              <legend className="text-body-02 font-medium text-text-neutral-default mb-2">
                Appointment type
              </legend>
              <DemoRadioGroup
                options={["In-person visit", "Video call", "Phone consultation"]}
                size="md"
                defaultValue="Video call"
              />
            </fieldset>
          </div>
        </DocPreview>
        <DocPreview rounded={false} border={false} verticalPaddingOnly aspectSquare className="h-full min-h-0">
          <div style={{ maxWidth: 320 }}>
            <fieldset className="border-none p-0 m-0">
              <legend className="text-body-02 font-medium text-text-neutral-default mb-2">
                Payment method
              </legend>
              <DemoRadioGroup
                options={["Credit card", "Insurance", "Pay at visit"]}
                size="sm"
                defaultValue="Insurance"
              />
            </fieldset>
          </div>
        </DocPreview>
        </div>
      </DocSection>
      </div>
    </>
  );
}

function PropertiesTab() {
  const [size, setSize] = useState<RadioGroupSize>("md");
  const [side, setSide] = useState<RadioGroupSide>("left");
  const [selected, setSelected] = useState("Option A");

const codeSnippet = `<RadioGroup
  size="${size}"
  side="${side}"
  label="Option A"
  state={selected === "Option A" ? "selected" : "default"}
/>`;

  return (
    <div className="col-span-2">
      <DocSection title="Interactive Playground">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
          {/* Preview */}
          <div className="rounded-md border border-border-neutral-default overflow-hidden">
            <div className="px-4 py-2 bg-background-surface-neutral-default border-b border-border-neutral-default text-body-03 font-medium text-text-neutral-placeholder">
              Preview
            </div>
            <div className="flex items-center justify-center p-8 bg-white min-h-[200px]">
              <div className="flex flex-col">
                {["Option A", "Option B", "Option C"].map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setSelected(opt)}
                    className="text-left"
                  >
                    <RadioGroup
                      size={size}
                      side={side}
                      label={opt}
                      state={selected === opt ? "selected" : "default"}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="p-4 rounded-md border border-border-neutral-default bg-background-surface-neutral-default">
            <h4 className="text-body-02 font-medium mb-4">Controls</h4>

            <ControlRadioGroup
              label="Size"
              options={[
                { value: "md", label: "Medium" },
                { value: "sm", label: "Small" },
              ]}
              value={size}
              onChange={setSize}
            />

            <ControlRadioGroup
              label="Side"
              options={[
                { value: "left", label: "Left" },
                { value: "right", label: "Right" },
              ]}
              value={side}
              onChange={setSide}
            />

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
            ["size", '"md" | "sm"', '"md"', "Size variant — controls circle size, height, typography, and gap."],
            ["side", '"left" | "right"', '"left"', "Position of the radio circle relative to the label."],
            ["label", "string", '"Label"', "Text label displayed next to the radio circle."],
            ["name", "string", "undefined", "Groups radios together — only one in a group can be selected."],
            ["checked", "boolean", "undefined", "Controlled checked state."],
            ["defaultChecked", "boolean", "undefined", "Uncontrolled initial state."],
            ["disabled", "boolean", "false", "Disables the radio and applies muted styling."],
            ["onChange", "(e) => void", "undefined", "Callback fired when the radio is selected."],
            ["className", "string", "undefined", "Additional CSS classes on the root label element."],
          ]}
        />
      </DocSection>

      <DocSection title="Controlled vs Uncontrolled" hideTitle>
        <DocTable
          variant="surface"
          headers={["Mode", "Props", "Behavior"]}
          rows={[
            ["Controlled", "checked + onChange", "Parent manages the selected state. Must update on every change."],
            ["Uncontrolled", "defaultChecked + name", "Browser manages selection via name grouping. Use ref to read value."],
          ]}
        />
      </DocSection>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════ */

export default function RadioPage() {
  const [activeTab, setActiveTab] = useState<TabName>("Overview");

  return (
    <div className="col-span-2 grid grid-cols-2 gap-x-10 gap-y-10">
      <div className="col-start-1 flex flex-col">
        <DocHeader
          title="Radio"
          description="Radio buttons let users select exactly one option from a mutually exclusive set. They support two sizes (md, sm) and left/right positioning."
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
