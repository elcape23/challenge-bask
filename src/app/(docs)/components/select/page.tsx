"use client";

import { useState, type ReactNode } from "react";
import DocHeader from "@/components/docs/DocHeader";
import DocSection from "@/components/docs/DocSection";
import DocTable from "@/components/docs/DocTable";
import DocCallout from "@/components/docs/DocCallout";
import DoDontGrid from "@/components/docs/DoDontGrid";
import DocPreview from "@/components/docs/DocPreview";
import DocAnatomy from "@/components/docs/DocAnatomy";
import Select, { type SelectSize, type SelectState } from "@/components/ui/Select";

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

const DEMO_COUNTRIES = [
  { value: "us", label: "United States" },
  { value: "uk", label: "United Kingdom" },
  { value: "ca", label: "Canada" },
  { value: "au", label: "Australia" },
  { value: "de", label: "Germany" },
  { value: "fr", label: "France" },
  { value: "jp", label: "Japan" },
  { value: "br", label: "Brazil" },
];

const DEMO_CATEGORIES = [
  { value: "general", label: "General consultation" },
  { value: "cardiology", label: "Cardiology" },
  { value: "dermatology", label: "Dermatology" },
  { value: "neurology", label: "Neurology" },
  { value: "pediatrics", label: "Pediatrics" },
];

const DEMO_SHORT = [
  { value: "am", label: "Morning" },
  { value: "pm", label: "Afternoon" },
  { value: "ev", label: "Evening" },
];

const DEMO_WITH_DISABLED = [
  { value: "a", label: "Option A" },
  { value: "b", label: "Option B (unavailable)", disabled: true },
  { value: "c", label: "Option C" },
  { value: "d", label: "Option D" },
];

/* ═══════════════════════════════════════════════════
   TAB CONTENT
   ═══════════════════════════════════════════════════ */

function OverviewTab() {
  return (
    <>
      <DocSection title="Overview">
        <p className="mb-4">
          Use a select when you have more than five options and limited screen
          space. For shorter lists, consider a radio group instead — it makes all
          options visible at once and reduces the number of interactions.
        </p>
        <p>
          The select component is built on a custom dropdown to ensure visual
          consistency and accessibility across browsers. It supports keyboard
          navigation and collision-aware positioning.
        </p>
      </DocSection>

      <DocSection title="Anatomy">
        <DocAnatomy
          items={[
            {
              label: "Label",
              description:
                "Describes what the user is selecting. Placed above the trigger and always visible.",
            },
            {
              label: "Trigger",
              description:
                "The clickable surface that opens the dropdown. Displays the currently selected value or placeholder text.",
            },
            {
              label: "Chevron icon",
              description:
                "A caret on the right side of the trigger. Rotates 180° when the dropdown is open.",
            },
            {
              label: "Dropdown",
              description:
                "The floating panel that contains the list of options. Positioned below the trigger.",
            },
            {
              label: "Option",
              description:
                "An individual item in the list. Highlights on hover/keyboard focus. Shows a checkmark when selected.",
            },
            {
              label: "Helper / Error text",
              description:
                "Optional guidance below the trigger. Replaced by error text when validation fails.",
            },
          ]}
        />
        <DocPreview title="Anatomy example">
          <div className="w-72">
            <Select
              size="md"
              label="Country"
              placeholder="Select a country"
              options={DEMO_COUNTRIES}
              helperText="Choose your country of residence."
            />
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="Sizes">
        <DocTable
          headers={["Size", "Height", "Border radius", "Trigger text", "Icon", "Use case"]}
          rows={[
            ["Small (sm)", "32px", "radius-sm (8px)", "Body/02 — 13px", "16px", "Dense layouts, filters, table controls."],
            ["Medium (md)", "40px", "radius-md (12px)", "Body/01 — 16px", "20px", "Standard form fields."],
          ]}
        />
        <DocPreview title="Size comparison">
          <div className="flex flex-col gap-4 w-72">
            <Select size="sm" label="Small" placeholder="Select an option" options={DEMO_SHORT} />
            <Select size="md" label="Medium" placeholder="Select an option" options={DEMO_SHORT} />
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="States">
        <DocTable
          headers={["State", "Visual treatment", "Behavior"]}
          rows={[
            ["Default", "Neutral border (#b7bbaf), white background", "Ready for interaction. Shows placeholder or selected value."],
            ["Hover", "Border subtly darkens (#93988d)", "Signals interactivity on pointer hover."],
            ["Open / Focus", "Primary border (#a6bba0), focus ring (shadow-focus)", "Dropdown is visible. Chevron rotates 180°."],
            ["Error", "Danger border (#eb978c), error text below trigger", "Validation has failed. Error message is shown."],
            ["Disabled", "50% opacity, neutral surface background", "Non-interactive. The trigger cannot be clicked."],
          ]}
        />
        <DocPreview title="All states">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl">
            <Select label="Default" placeholder="Choose..." options={DEMO_SHORT} />
            <Select label="With value" options={DEMO_SHORT} defaultValue="am" />
            <Select label="Error" state="error" options={DEMO_SHORT} errorMessage="Please select an option." />
            <Select label="Disabled" options={DEMO_SHORT} disabled placeholder="Cannot select" />
          </div>
        </DocPreview>
        <DocCallout variant="info" title="Focus state">
          Click any select above or use Tab to see the focus ring. The border
          transitions to the primary color and a 3px focus shadow appears.
        </DocCallout>
      </DocSection>

      <DocSection title="Behavior">
        <p className="mb-4">
          Clicking the trigger opens the dropdown below it. The dropdown closes
          when the user selects an option, clicks outside, or presses Escape.
          Arrow keys navigate options, Enter confirms a selection, and Home/End
          jump to the first/last option.
        </p>
        <DocCallout variant="info" title="Dropdown positioning">
          The dropdown opens directly below the trigger and scrolls when options
          exceed max height (240px). Ensure adequate vertical space around the
          component.
        </DocCallout>
      </DocSection>

      <DocSection title="Accessibility">
        <ul className="pl-5 mb-4">
          <li className="mb-2">
            The trigger uses <code>role=&quot;combobox&quot;</code> with <code>aria-expanded</code> and <code>aria-haspopup=&quot;listbox&quot;</code>.
          </li>
          <li className="mb-2">
            Options use <code>role=&quot;option&quot;</code> with <code>aria-selected</code> to indicate the active choice.
          </li>
          <li className="mb-2">
            The label is associated with the trigger via <code>htmlFor</code> / <code>id</code>.
          </li>
          <li className="mb-2">
            Full keyboard navigation: Arrow keys, Enter, Escape, Home, End.
          </li>
          <li>
            Error messages are linked to the trigger with <code>aria-describedby</code>.
          </li>
        </ul>
      </DocSection>

      <DocSection title="Usage guidelines">
        <DoDontGrid
          doItems={[
            { description: "Use a select for lists with more than 5 options." },
            { description: "Provide a descriptive placeholder like \"Choose a category\"." },
            { description: "Pre-select a sensible default when one exists." },
            { description: "Always pair with a visible label above the trigger." },
          ]}
          dontItems={[
            { description: "Don't use a select for binary choices — use a switch or radio instead." },
            { description: "Don't nest selects inside other selects or dropdowns." },
            { description: "Don't truncate option labels — ensure the dropdown is wide enough." },
            { description: "Don't use a disabled option as a placeholder." },
          ]}
        />
      </DocSection>
    </>
  );
}

function DesignTokensTab() {
  return (
    <>
      <DocSection title="Color Tokens — Default State">
        <TokenGroup title="Trigger container">
          <ColorSwatch color="#ffffff" label="background (white)" />
          <ColorSwatch color="#b7bbaf" label="border / neutral / default" />
        </TokenGroup>
        <TokenGroup title="Text">
          <ColorSwatch color="#1c1f1b" label="text / neutral / default (value)" />
          <ColorSwatch color="#93988d" label="text / neutral / placeholder" />
          <ColorSwatch color="#1c1f1b" label="text / neutral / default (label)" />
          <ColorSwatch color="#93988d" label="text / neutral / placeholder (helper)" />
        </TokenGroup>
        <TokenGroup title="Icons">
          <ColorSwatch color="#4e534d" label="icon / neutral / secondary (chevron)" />
        </TokenGroup>
      </DocSection>

      <DocSection title="Color Tokens — Hover State">
        <TokenGroup title="Border">
          <ColorSwatch color="#93988d" label="border / neutral / hover" />
        </TokenGroup>
      </DocSection>

      <DocSection title="Color Tokens — Open / Focus State">
        <TokenGroup title="Border & shadow">
          <ColorSwatch color="#a6bba0" label="border / primary / default" />
          <ColorSwatch color="rgba(0,0,0,0.2)" label="shadow-focus (3px ring)" />
        </TokenGroup>
      </DocSection>

      <DocSection title="Color Tokens — Error State">
        <TokenGroup title="Border & text">
          <ColorSwatch color="#eb978c" label="border / danger / default" />
          <ColorSwatch color="#903328" label="text / danger / default" />
        </TokenGroup>
      </DocSection>

      <DocSection title="Color Tokens — Disabled State">
        <TokenGroup title="Container">
          <ColorSwatch color="#f1f2ec" label="bg / surface / neutral / default" />
          <ColorSwatch color="rgba(0,0,0,0.5)" label="opacity-50 on container" />
        </TokenGroup>
      </DocSection>

      <DocSection title="Color Tokens — Dropdown">
        <TokenGroup title="Container">
          <ColorSwatch color="#ffffff" label="background (white)" />
          <ColorSwatch color="#b7bbaf" label="border / neutral / default" />
        </TokenGroup>
        <TokenGroup title="Option">
          <ColorSwatch color="#f1f2ec" label="bg / surface / neutral / default (hover)" />
          <ColorSwatch color="#1c1f1b" label="text / neutral / default (label)" />
          <ColorSwatch color="#153014" label="icon / primary / default (checkmark)" />
        </TokenGroup>
      </DocSection>

      <DocSection title="Typography Tokens">
        <DocTable
          headers={["Element", "Size (md)", "Size (sm)", "Weight"]}
          rows={[
            ["Label", "Body/02 — 13px/16px", "Body/02 — 13px/16px", "500 (medium)"],
            ["Trigger text", "Body/01 — 16px/24px", "Body/02 — 13px/16px", "400 (regular)"],
            ["Option text", "Body/01 — 16px/24px", "Body/02 — 13px/16px", "400 (regular)"],
            ["Helper/Error", "Body/03 — 11px/12px", "Body/03 — 11px/12px", "400 (regular)"],
          ]}
        />
      </DocSection>

      <DocSection title="Spacing Tokens">
        <DocTable
          headers={["Property", "Token (md)", "Value (md)", "Token (sm)", "Value (sm)"]}
          rows={[
            ["Trigger height", "—", "40px", "—", "32px"],
            ["Horizontal padding", "spacing/space-3", "12px", "spacing/space-3", "12px"],
            ["Option padding", "spacing/space-3 / space-2", "12px / 8px", "spacing/space-3 / space-1.5", "12px / 6px"],
            ["Label margin-bottom", "spacing/space-1", "4px", "spacing/space-1", "4px"],
            ["Helper margin-top", "spacing/space-1", "4px", "spacing/space-1", "4px"],
            ["Dropdown gap (from trigger)", "spacing/space-1", "4px", "spacing/space-1", "4px"],
          ]}
        />
      </DocSection>

      <DocSection title="Border & Radius">
        <DocTable
          headers={["Property", "Token (md)", "Value (md)", "Token (sm)", "Value (sm)"]}
          rows={[
            ["Trigger radius", "border-radius/md", "12px", "border-radius/sm", "8px"],
            ["Dropdown radius", "border-radius/md", "12px", "border-radius/sm", "8px"],
            ["Border width", "—", "1px", "—", "1px"],
            ["Dropdown shadow", "shadow-md", "0 4px 6px -1px rgba(0,0,0,0.1)", "shadow-md", "0 4px 6px -1px rgba(0,0,0,0.1)"],
            ["Focus shadow", "shadow-focus", "0 0 0 3px rgba(0,0,0,0.2)", "shadow-focus", "0 0 0 3px rgba(0,0,0,0.2)"],
          ]}
        />
      </DocSection>
    </>
  );
}

function StylesTab() {
  return (
    <>
      <DocSection title="Sizes — Side by Side">
        <DocPreview title="sm / md">
          <div className="flex flex-col gap-4 w-72">
            <Select size="sm" label="Small" placeholder="Select a time" options={DEMO_SHORT} />
            <Select size="md" label="Medium" placeholder="Select a time" options={DEMO_SHORT} />
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="States — Default">
        <DocPreview title="Empty / With value">
          <div className="flex flex-col gap-4 w-72">
            <Select label="Empty" placeholder="Choose a country..." options={DEMO_COUNTRIES} />
            <Select label="With value" options={DEMO_COUNTRIES} defaultValue="us" />
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="States — Error">
        <DocPreview title="Error with message">
          <div className="flex flex-col gap-4 w-72">
            <Select
              label="Specialty"
              state="error"
              options={DEMO_CATEGORIES}
              errorMessage="Please select a specialty."
            />
            <Select
              label="Country"
              state="error"
              options={DEMO_COUNTRIES}
              defaultValue="us"
              errorMessage="This region is not currently supported."
            />
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="States — Disabled">
        <DocPreview title="Disabled empty / Disabled with value">
          <div className="flex flex-col gap-4 w-72">
            <Select label="Disabled" placeholder="Cannot select" options={DEMO_SHORT} disabled />
            <Select label="Disabled with value" options={DEMO_SHORT} defaultValue="am" disabled />
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="With Helper Text">
        <DocPreview title="Helper text examples">
          <div className="flex flex-col gap-4 w-72">
            <Select
              label="Country"
              placeholder="Select a country"
              options={DEMO_COUNTRIES}
              helperText="Choose your country of residence."
            />
            <Select
              label="Specialty"
              placeholder="Choose a specialty"
              options={DEMO_CATEGORIES}
              helperText="You can change this later."
            />
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="With Disabled Options">
        <DocPreview title="Some options unavailable">
          <div className="w-72">
            <Select
              label="Choose an option"
              options={DEMO_WITH_DISABLED}
              placeholder="Select..."
            />
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="In Context — Form">
        <DocPreview title="Appointment scheduling form">
          <div className="flex flex-col gap-4" style={{ maxWidth: 360 }}>
            <Select
              label="Specialty"
              placeholder="Choose a specialty"
              options={DEMO_CATEGORIES}
            />
            <Select
              label="Preferred time"
              placeholder="Select a time slot"
              options={DEMO_SHORT}
            />
            <Select
              label="Country"
              placeholder="Select your country"
              options={DEMO_COUNTRIES}
              helperText="For timezone calculation."
            />
          </div>
        </DocPreview>
      </DocSection>
    </>
  );
}

function PropertiesTab() {
  const [size, setSize] = useState<SelectSize>("md");
  const [selectState, setSelectState] = useState<SelectState>("default");
  const [showLabel, setShowLabel] = useState(true);
  const [showHelper, setShowHelper] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [labelText, setLabelText] = useState("Label");
  const [placeholderText, setPlaceholderText] = useState("Select an option");

  const codeSnippet = `<Select
  size="${size}"${selectState !== "default" ? `\n  state="${selectState}"` : ""}${showLabel ? `\n  label="${labelText}"` : ""}
  placeholder="${placeholderText}"
  options={[
    { value: "a", label: "Option A" },
    { value: "b", label: "Option B" },
    { value: "c", label: "Option C" },
  ]}${showHelper && selectState === "error" ? '\n  errorMessage="Please select a valid option."' : ""}${showHelper && selectState !== "error" ? '\n  helperText="Choose one of the available options."' : ""}${isDisabled ? "\n  disabled" : ""}
/>`;

  return (
    <>
      <DocSection title="Interactive Playground">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
          <div className="rounded-md border border-border-neutral-default overflow-hidden">
            <div className="px-4 py-2 bg-background-surface-neutral-default border-b border-border-neutral-default text-body-03 font-medium text-text-neutral-placeholder">
              Preview
            </div>
            <div className="flex items-center justify-center p-8 bg-white min-h-[200px]">
              <div className="w-72">
                <Select
                  size={size}
                  state={selectState}
                  label={showLabel ? labelText : undefined}
                  placeholder={placeholderText}
                  options={[
                    { value: "a", label: "Option A" },
                    { value: "b", label: "Option B" },
                    { value: "c", label: "Option C" },
                  ]}
                  helperText={!showHelper || selectState === "error" ? undefined : "Choose one of the available options."}
                  errorMessage={selectState === "error" ? "Please select a valid option." : undefined}
                  disabled={isDisabled}
                />
              </div>
            </div>
          </div>

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
              label="State"
              options={[
                { value: "default", label: "Default" },
                { value: "error", label: "Error" },
              ]}
              value={selectState}
              onChange={setSelectState}
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

            <div className="mb-4">
              <p className="text-body-03 font-medium text-text-neutral-secondary mb-2">Placeholder</p>
              <input
                type="text"
                value={placeholderText}
                onChange={(e) => setPlaceholderText(e.target.value)}
                className="w-full px-3 py-1.5 text-body-02 border border-border-neutral-default rounded-md bg-white focus:outline-none focus:shadow-focus"
              />
            </div>

            <Toggle label="Show label" checked={showLabel} onChange={setShowLabel} />
            <Toggle label="Helper text" checked={showHelper} onChange={setShowHelper} />
            <Toggle label="Disabled" checked={isDisabled} onChange={setIsDisabled} />
          </div>
        </div>

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
            ["size", '"md" | "sm"', '"md"', "Size variant — affects height, border radius, and typography."],
            ["state", '"default" | "error"', '"default"', "Validation state — controls border color and shows error text."],
            ["label", "string", "undefined", "Label text displayed above the trigger."],
            ["placeholder", "string", '"Select an option"', "Placeholder text when no value is selected."],
            ["helperText", "string", "undefined", "Helper text displayed below the trigger."],
            ["errorMessage", "string", "undefined", 'Error message — replaces helper when state="error".'],
            ["options", "SelectOption[]", "[]", "Array of { value, label, disabled? } objects."],
            ["value", "string", "undefined", "Controlled value — makes the component controlled."],
            ["defaultValue", "string", "undefined", "Initial value for uncontrolled usage."],
            ["onChange", "(value: string) => void", "undefined", "Callback fired when the selected value changes."],
            ["disabled", "boolean", "false", "Disables the trigger and prevents interaction."],
            ["id", "string", "auto-generated", "HTML id for the trigger. Auto-generated if not provided."],
            ["className", "string", "undefined", "Additional CSS classes on the root wrapper div."],
          ]}
        />
      </DocSection>

      <DocSection title="SelectOption Interface">
        <DocTable
          headers={["Property", "Type", "Required", "Description"]}
          rows={[
            ["value", "string", "Yes", "Unique value identifier for the option."],
            ["label", "string", "Yes", "Display text shown in the dropdown and trigger."],
            ["disabled", "boolean", "No", "When true, the option cannot be selected."],
          ]}
        />
      </DocSection>

      <DocSection title="Code Examples">
        <DocPreview title="Basic select">
          <div className="w-72">
            <Select label="Country" placeholder="Select a country" options={DEMO_COUNTRIES} />
          </div>
        </DocPreview>
        <pre className="mb-6 p-4 rounded-md bg-neutral-900 text-neutral-100 text-body-02 overflow-x-auto">
          <code>{`<Select
  label="Country"
  placeholder="Select a country"
  options={[
    { value: "us", label: "United States" },
    { value: "uk", label: "United Kingdom" },
    { value: "ca", label: "Canada" },
  ]}
/>`}</code>
        </pre>

        <DocPreview title="Controlled select">
          <div className="w-72">
            <Select label="Time slot" options={DEMO_SHORT} value="am" onChange={() => {}} />
          </div>
        </DocPreview>
        <pre className="mb-6 p-4 rounded-md bg-neutral-900 text-neutral-100 text-body-02 overflow-x-auto">
          <code>{`const [value, setValue] = useState("am");

<Select
  label="Time slot"
  options={timeSlots}
  value={value}
  onChange={setValue}
/>`}</code>
        </pre>

        <DocPreview title="Error state">
          <div className="w-72">
            <Select
              label="Specialty"
              state="error"
              options={DEMO_CATEGORIES}
              errorMessage="Please select a specialty."
            />
          </div>
        </DocPreview>
        <pre className="mb-6 p-4 rounded-md bg-neutral-900 text-neutral-100 text-body-02 overflow-x-auto">
          <code>{`<Select
  label="Specialty"
  state="error"
  options={categories}
  errorMessage="Please select a specialty."
/>`}</code>
        </pre>
      </DocSection>

      <DocSection title="Keyboard Navigation">
        <DocTable
          headers={["Key", "Action"]}
          rows={[
            ["Enter / Space", "Open dropdown (when trigger focused), select option (when dropdown open)."],
            ["ArrowDown", "Open dropdown or move focus to next option."],
            ["ArrowUp", "Move focus to previous option."],
            ["Home", "Move focus to first enabled option."],
            ["End", "Move focus to last enabled option."],
            ["Escape", "Close the dropdown without selecting."],
            ["Tab", "Close dropdown and move focus to next element."],
          ]}
        />
      </DocSection>
    </>
  );
}

/* ═══════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════ */

export default function SelectPage() {
  const [activeTab, setActiveTab] = useState<TabName>("Overview");

  return (
    <div className="col-span-2 flex flex-col">
      <DocHeader
        title="Select"
        description="Selects let users choose a single value from a predefined list of options, saving space compared to radio groups."
      />

      <TabBar active={activeTab} onChange={setActiveTab} />

      {activeTab === "Overview" && <OverviewTab />}
      {activeTab === "Design Tokens" && <DesignTokensTab />}
      {activeTab === "Styles" && <StylesTab />}
      {activeTab === "Properties" && <PropertiesTab />}
    </div>
  );
}
