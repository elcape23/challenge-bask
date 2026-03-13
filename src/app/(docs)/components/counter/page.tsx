"use client";

import { useState, type ReactNode } from "react";
import DocHeader from "@/components/docs/DocHeader";
import DocSection from "@/components/docs/DocSection";
import DocTable from "@/components/docs/DocTable";
import DocCallout from "@/components/docs/DocCallout";
import DoDontGrid from "@/components/docs/DoDontGrid";
import DocPreview from "@/components/docs/DocPreview";
import DocAnatomy from "@/components/docs/DocAnatomy";
import Counter, { type CounterSize } from "@/components/ui/Counter";

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

/* ═══════════════════════════════════════════════════
   TAB CONTENT
   ═══════════════════════════════════════════════════ */

function OverviewTab() {
  return (
    <>
      <div className="col-start-1">
        <DocSection title="Overview">
        <p className="mb-4">
          The Counter component lets users adjust a numeric value incrementally,
          providing a controlled way to set quantities or amounts. It combines a
          decrement button, a value display, and an increment button in a
          compact, scannable layout.
        </p>
        <p>
          Use counters when the value has a known range and small increments
          make sense — quantity selectors, dosage amounts, or any numeric
          setting where stepping by 1 (or a fixed amount) is the primary
          interaction.
        </p>
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Anatomy">
        <DocAnatomy
          items={[
            {
              label: "Container",
              description:
                "A bordered flex row that groups the decrement button, value display, and increment button. Uses rounded corners for visual cohesion.",
            },
            {
              label: "Decrement button",
              description:
                "Minus (−) icon button that decreases the value by one step. Automatically disabled when the value reaches the minimum.",
            },
            {
              label: "Value display",
              description:
                "The current numeric value, centered between the two buttons. Has a minimum width to maintain stable alignment.",
            },
            {
              label: "Increment button",
              description:
                "Plus (+) icon button that increases the value by one step. Automatically disabled when the value reaches the maximum.",
            },
          ]}
        />
        <DocPreview rounded={false} border={false} verticalPaddingOnly aspectSquare>
          <div className="flex items-center gap-6">
            <Counter size="md" defaultValue={3} />
          </div>
        </DocPreview>
      </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Sizes" hideTitle>
        <DocTable
          variant="surface"
          headers={["Size", "Button", "Value min-width", "Value typography", "Button icon"]}
          rows={[
            ["Medium (md)", "40×40px", "48px", "Body/02/Medium — 13px/16px/500", "16×16px"],
            ["Small (sm)", "32×32px", "40px", "Body/03/Medium — 11px/12px/500", "16×16px"],
          ]}
        />
        <div className="grid grid-cols-2 gap-10 items-stretch">
        <DocPreview rounded={false} border={false} verticalPaddingOnly aspectSquare className="h-full min-h-0">
          <div className="flex items-center gap-6">
            <div className="flex flex-col items-start gap-1">
              <span className="text-body-03 text-text-neutral-placeholder">md</span>
              <Counter size="md" defaultValue={5} />
            </div>
            <div className="flex flex-col items-start gap-1">
              <span className="text-body-03 text-text-neutral-placeholder">sm</span>
              <Counter size="sm" defaultValue={5} />
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
          headers={["State", "Visual", "Description"]}
          rows={[
            ["Default", "All controls interactive", "Value is within the min/max range. Both buttons are enabled."],
            ["Hover", "Button background changes", "Buttons show a subtle background fill on hover."],
            ["Min reached", "Decrement disabled (50% opacity)", "Value equals minimum. Only increment is active."],
            ["Max reached", "Increment disabled (50% opacity)", "Value equals maximum. Only decrement is active."],
            ["Disabled", "Entire counter at 50% opacity", "Non-interactive. Value and buttons are all muted."],
          ]}
        />
        <div className="grid grid-cols-2 gap-10 items-stretch">
        <DocPreview rounded={false} border={false} verticalPaddingOnly aspectSquare className="h-full min-h-0">
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex flex-col items-start gap-1">
              <span className="text-body-03 text-text-neutral-placeholder">Default</span>
              <Counter defaultValue={3} min={0} max={10} />
            </div>
            <div className="flex flex-col items-start gap-1">
              <span className="text-body-03 text-text-neutral-placeholder">At min</span>
              <Counter defaultValue={0} min={0} max={10} />
            </div>
            <div className="flex flex-col items-start gap-1">
              <span className="text-body-03 text-text-neutral-placeholder">At max</span>
              <Counter defaultValue={10} min={0} max={10} />
            </div>
            <div className="flex flex-col items-start gap-1">
              <span className="text-body-03 text-text-neutral-placeholder">Disabled</span>
              <Counter defaultValue={3} disabled />
            </div>
          </div>
        </DocPreview>
        </div>
      </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Behavior">
        <p className="mb-4">
          Counters enforce min and max bounds. When the value reaches the
          minimum, the decrement button is disabled; when it reaches the
          maximum, the increment button is disabled. The step size (default 1)
          determines how much each click changes the value.
        </p>
        <DocCallout variant="info" title="Keyboard support">
          Buttons are focusable and support Enter/Space to activate. The value
          display uses <code>aria-live=&quot;polite&quot;</code> so screen readers
          announce changes.
        </DocCallout>
      </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Accessibility">
        <ul className="pl-5 mb-4">
          <li className="mb-2">
            The container uses <code>role=&quot;group&quot;</code> with an <code>aria-label</code> of &quot;Counter&quot;.
          </li>
          <li className="mb-2">
            Each button has an <code>aria-label</code> (&quot;Decrease&quot; / &quot;Increase&quot;).
          </li>
          <li className="mb-2">
            The value display carries <code>aria-valuenow</code>, <code>aria-valuemin</code>, and <code>aria-valuemax</code>.
          </li>
          <li className="mb-2">
            <code>aria-live=&quot;polite&quot;</code> on the value ensures screen readers announce updates.
          </li>
          <li>
            Disabled buttons use the native <code>disabled</code> attribute, not just visual styling.
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
            { description: "Disable the decrement button at min and increment at max." },
            { description: "Use clear minus (−) and plus (+) icons in the buttons." },
            { description: "Provide aria-labels and value attributes for screen readers." },
            { description: "Set a sensible default value within the allowed range." },
          ]}
          dontItems={[
            { description: "Don't allow values outside the min/max range." },
            { description: "Don't use a counter for large numeric ranges — use an input field." },
            { description: "Don't make the step size too large for fine control." },
            { description: "Don't hide the current value — it must always be visible." },
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
        <DocSection title="Color Tokens — Container">
        <TokenGroup title="Border & background">
          <ColorSwatch color="#B7BBAF" label="border / neutral / default" />
          <ColorSwatch color="transparent" label="background (transparent)" />
        </TokenGroup>
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Color Tokens — Buttons">
        <TokenGroup title="Icon color">
          <ColorSwatch color="#4E534D" label="icon / neutral / secondary" />
        </TokenGroup>
        <TokenGroup title="Hover / Active">
          <ColorSwatch color="#D3D6CC" label="bg / surface / neutral / hover" />
          <ColorSwatch color="#E4E6DE" label="bg / fill / neutral / default" />
        </TokenGroup>
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Color Tokens — Value">
        <TokenGroup title="Text">
          <ColorSwatch color="#1C1F1B" label="text / neutral / default" />
        </TokenGroup>
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Color Tokens — Disabled">
        <TokenGroup title="Whole component">
          <ColorSwatch color="rgba(0,0,0,0.5)" label="opacity-50 on container" />
        </TokenGroup>
        <TokenGroup title="Individual button disabled (at bounds)">
          <ColorSwatch color="rgba(0,0,0,0.5)" label="opacity-50 on button" />
        </TokenGroup>
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Typography Tokens" hideTitle>
        <DocTable
          variant="surface"
          headers={["Size", "Element", "Token", "Font Size", "Line Height", "Weight"]}
          rows={[
            ["md", "Value", "Body/02/Medium", "13px", "16px", "500 (medium)"],
            ["md", "Button icon", "Body/01/Medium", "16px", "24px", "500"],
            ["sm", "Value", "Body/03/Medium", "11px", "12px", "500 (medium)"],
            ["sm", "Button icon", "Body/02/Medium", "13px", "16px", "500"],
          ]}
        />
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Spacing Tokens" hideTitle>
        <DocTable
          variant="surface"
          headers={["Property", "Token (md)", "Value (md)", "Token (sm)", "Value (sm)"]}
          rows={[
            ["Button width × height", "—", "40×40px", "—", "32×32px"],
            ["Value horizontal padding", "spacing/space-3", "12px", "spacing/space-2", "8px"],
            ["Value vertical padding", "spacing/space-2", "8px", "spacing/space-1.5", "6px"],
            ["Value min-width", "—", "48px", "—", "40px"],
          ]}
        />
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Border & Radius Tokens" hideTitle>
        <DocTable
          variant="surface"
          headers={["Property", "Token", "Value"]}
          rows={[
            ["Container border", "border/neutral/default", "1px solid #B7BBAF"],
            ["Container radius", "border-radius/md", "12px"],
            ["Button separator", "border/neutral/default", "1px solid #B7BBAF"],
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
        <DocSection title="Medium (md) — All States">
        <div className="grid grid-cols-2 gap-10 items-stretch">
        <DocPreview rounded={false} border={false} verticalPaddingOnly aspectSquare className="h-full min-h-0">
          <div className="flex flex-wrap items-center gap-6">
            <Counter size="md" defaultValue={3} min={0} max={10} />
            <Counter size="md" defaultValue={0} min={0} max={10} />
            <Counter size="md" defaultValue={10} min={0} max={10} />
            <Counter size="md" defaultValue={5} disabled />
          </div>
        </DocPreview>
        </div>
      </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Small (sm) — All States">
        <div className="grid grid-cols-2 gap-10 items-stretch">
        <DocPreview rounded={false} border={false} verticalPaddingOnly aspectSquare className="h-full min-h-0">
          <div className="flex flex-wrap items-center gap-6">
            <Counter size="sm" defaultValue={3} min={0} max={10} />
            <Counter size="sm" defaultValue={0} min={0} max={10} />
            <Counter size="sm" defaultValue={10} min={0} max={10} />
            <Counter size="sm" defaultValue={5} disabled />
          </div>
        </DocPreview>
        </div>
      </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Size Comparison">
        <div className="grid grid-cols-2 gap-10 items-stretch">
        <DocPreview rounded={false} border={false} verticalPaddingOnly aspectSquare className="h-full min-h-0">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="text-body-03 text-text-neutral-placeholder w-8">md</span>
              <Counter size="md" defaultValue={7} />
            </div>
            <div className="flex items-center gap-3">
              <span className="text-body-03 text-text-neutral-placeholder w-8">sm</span>
              <Counter size="sm" defaultValue={7} />
            </div>
          </div>
        </DocPreview>
        </div>
      </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Custom Range">
        <div className="grid grid-cols-2 gap-10 items-stretch">
        <DocPreview rounded={false} border={false} verticalPaddingOnly aspectSquare className="h-full min-h-0">
          <Counter size="md" defaultValue={1} min={1} max={5} />
        </DocPreview>
        <DocPreview rounded={false} border={false} verticalPaddingOnly aspectSquare className="h-full min-h-0">
          <Counter size="md" defaultValue={10} min={0} max={50} step={5} />
        </DocPreview>
        </div>
      </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="In Context — Quantity Selector">
        <div className="grid grid-cols-2 gap-10 items-stretch">
        <DocPreview rounded={false} border={false} verticalPaddingOnly aspectSquare className="h-full min-h-0">
          <div className="flex items-center gap-4" style={{ maxWidth: 320 }}>
            <span className="text-body-01 font-medium text-text-neutral-default">Quantity</span>
            <Counter size="md" defaultValue={1} min={1} max={20} />
          </div>
        </DocPreview>
        </div>
      </DocSection>
      </div>
    </>
  );
}

function PropertiesTab() {
  const [size, setSize] = useState<CounterSize>("md");
  const [counterValue, setCounterValue] = useState(3);
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(10);
  const [stepVal, setStepVal] = useState(1);
  const [isDisabled, setIsDisabled] = useState(false);

  const codeSnippet = `<Counter
  size="${size}"
  value={${counterValue}}
  min={${minVal}}
  max={${maxVal}}
  step={${stepVal}}${isDisabled ? "\n  disabled" : ""}
  onChange={(v) => setValue(v)}
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
            <div className="flex items-center justify-center p-8 bg-white min-h-[160px]">
              <Counter
                size={size}
                value={counterValue}
                min={minVal}
                max={maxVal}
                step={stepVal}
                disabled={isDisabled}
                onChange={setCounterValue}
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

            <div className="mb-4">
              <p className="text-body-03 font-medium text-text-neutral-secondary mb-2">Min</p>
              <input
                type="number"
                value={minVal}
                onChange={(e) => setMinVal(Number(e.target.value))}
                className="w-full px-3 py-1.5 text-body-02 border border-border-neutral-default rounded-md bg-white focus:outline-none focus:shadow-focus"
              />
            </div>

            <div className="mb-4">
              <p className="text-body-03 font-medium text-text-neutral-secondary mb-2">Max</p>
              <input
                type="number"
                value={maxVal}
                onChange={(e) => setMaxVal(Number(e.target.value))}
                className="w-full px-3 py-1.5 text-body-02 border border-border-neutral-default rounded-md bg-white focus:outline-none focus:shadow-focus"
              />
            </div>

            <div className="mb-4">
              <p className="text-body-03 font-medium text-text-neutral-secondary mb-2">Step</p>
              <input
                type="number"
                value={stepVal}
                min={1}
                onChange={(e) => setStepVal(Number(e.target.value))}
                className="w-full px-3 py-1.5 text-body-02 border border-border-neutral-default rounded-md bg-white focus:outline-none focus:shadow-focus"
              />
            </div>

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
            ["size", '"md" | "sm"', '"md"', "Size variant — affects button dimensions and value typography."],
            ["value", "number", "undefined", "Controlled numeric value."],
            ["defaultValue", "number", "0", "Uncontrolled initial value."],
            ["min", "number", "0", "Minimum allowed value. Disables decrement when reached."],
            ["max", "number", "99", "Maximum allowed value. Disables increment when reached."],
            ["step", "number", "1", "Amount to increment/decrement per click."],
            ["disabled", "boolean", "false", "Disables the entire counter."],
            ["onChange", "(value: number) => void", "undefined", "Called when the value changes."],
            ["className", "string", "undefined", "Additional CSS classes on the container."],
          ]}
        />
      </DocSection>

      <DocSection title="Validation & Constraints" hideTitle>
        <DocTable
          variant="surface"
          headers={["Rule", "Details"]}
          rows={[
            ["Min ≤ Max", "Ensure min is always less than or equal to max. Invalid ranges produce undefined behavior."],
            ["Step > 0", "Step must be a positive number."],
            ["Value clamped", "Values are always clamped to the [min, max] range on each update."],
            ["Large ranges", "For ranges >20 steps, consider pairing the counter with a direct input field."],
          ]}
        />
      </DocSection>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════ */

export default function CounterPage() {
  const [activeTab, setActiveTab] = useState<TabName>("Overview");

  return (
    <div className="col-span-2 grid grid-cols-2 gap-x-10 gap-y-10">
      <div className="col-start-1 flex flex-col">
        <DocHeader
          title="Counter"
          description="Counter lets users adjust a numeric value incrementally with decrement and increment buttons, providing a controlled way to set quantities or amounts."
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
