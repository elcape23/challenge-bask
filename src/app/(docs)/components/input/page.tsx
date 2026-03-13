"use client";

import { useState, type ReactNode } from "react";
import DocHeader from "@/components/docs/DocHeader";
import DocSection from "@/components/docs/DocSection";
import DocTable from "@/components/docs/DocTable";
import DocCallout from "@/components/docs/DocCallout";
import DoDontGrid from "@/components/docs/DoDontGrid";
import DocPreview from "@/components/docs/DocPreview";
import DocAnatomy from "@/components/docs/DocAnatomy";
import Icon from "@/components/ui/Icon";
import Input, { type InputSize, type InputState } from "@/components/ui/Input";

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

/* ─── Figma Input: trailing check icon (20×20) ─── */
function CheckIcon() {
  return <Icon type="check" size="sm" className="text-current" />;
}

function AlertCircleIcon() {
  return <Icon type="ban" size="sm" className="text-current" />;
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
          The Input component lets users enter and edit short-form text.
        </p>
        <p>
          It consists of an input container with placeholder text, an optional
          trailing icon, and feedback text below.
        </p>
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Anatomy">
        <DocAnatomy
          items={[
            {
              label: "Input container",
              description:
                "The bordered box with placeholder text, optional trailing icon, and padding.",
            },
            {
              label: "Placeholder",
              description:
                "Hint text when the field is empty.",
            },
            {
              label: "Trailing icon (optional)",
              description:
                "Icon on the right — e.g. checkmark for valid state.",
            },
            {
              label: "Feedback",
              description:
                "Helper or error text below the field.",
            },
          ]}
        />
        <DocPreview rounded={false} border={false} verticalPaddingOnly aspectSquare>
          <div className="w-[200px]">
            <Input
              size="md"
              width={200}
              placeholder="Placeholder"
              helperText="Input feedback"
              trailingIcon={<CheckIcon />}
            />
          </div>
        </DocPreview>
      </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Sizes" hideTitle>
        <DocTable
          variant="surface"
          headers={["Size", "Height", "Input text", "Use case"]}
          rows={[
            ["Medium (md)", "48px", "Body/01 — 16px", "Default input."],
            ["Small (sm)", "32px", "Body/02 — 13px", "Compact forms."],
          ]}
        />
        <div className="grid grid-cols-2 gap-10 items-stretch">
        <DocPreview rounded={false} border={false} verticalPaddingOnly aspectSquare className="h-full min-h-0">
          <div className="flex flex-col gap-4 w-[200px]">
            <Input size="md" width={200} placeholder="Placeholder" helperText="Input feedback" trailingIcon={<CheckIcon />} />
            <Input size="sm" width={200} placeholder="Placeholder" helperText="Input feedback" trailingIcon={<CheckIcon />} />
          </div>
        </DocPreview>
        </div>
      </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="States" hideTitle>
        <DocTable
          variant="surface"
          headers={["State", "Visual treatment", "Behavior"]}
          rows={[
            ["Default", "Neutral border (#b7bbaf), background #f7f7f3", "Ready for input. Placeholder and feedback shown."],
            ["Hover", "Hover border (#93988d), stronger trailing icon color", "Indicates the field is being pointed to before activation."],
            ["Active", "Pressed border (#31352f), pressed icon/text color", "Shows an active selection state without error styling."],
            ["Focus", "Primary border (#a6bba0), focus ring (shadow-focus)", "The field is active and receiving keystrokes."],
            ["Error", "Danger border (#eb978c), error text replaces helper", "Validation has failed. Error message is shown below."],
            ["Disabled", "50% opacity, neutral surface background", "Non-interactive. The value is visible but cannot be changed."],
          ]}
        />
        <div className="grid grid-cols-2 gap-10 items-stretch">
        <DocPreview rounded={false} border={false} verticalPaddingOnly aspectSquare className="h-full min-h-0">
          <div className="grid grid-cols-1 gap-4">
            <Input width={200} placeholder="Placeholder" helperText="Input feedback" trailingIcon={<CheckIcon />} />
            <Input width={200} state="hover" placeholder="Placeholder" helperText="Input feedback" trailingIcon={<CheckIcon />} />
            <Input width={200} state="active" helperText="Input feedback" defaultValue="Hello world" trailingIcon={<CheckIcon />} />
            <Input width={200} placeholder="Placeholder" state="error" errorMessage="Input feedback" trailingIcon={<AlertCircleIcon />} />
            <Input width={200} placeholder="Placeholder" helperText="Input feedback" defaultValue="Cannot edit" disabled />
          </div>
        </DocPreview>
        </div>
        <DocCallout variant="info" title="Focus state">
          Click any input above to see the focus ring in action. The border
          transitions to the primary color and a 3px focus shadow appears.
        </DocCallout>
      </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Variants" hideTitle>
        <DocTable
          variant="surface"
          headers={["Element", "Description"]}
          rows={[
            ["Input container", "Placeholder text, optional trailing icon, feedback text below."],
          ]}
        />
        <div className="grid grid-cols-2 gap-10 items-stretch">
        <DocPreview rounded={false} border={false} verticalPaddingOnly aspectSquare className="h-full min-h-0">
          <div className="w-[200px]">
            <Input width={200} placeholder="Placeholder" helperText="Input feedback" trailingIcon={<CheckIcon />} />
          </div>
        </DocPreview>
        </div>
      </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Behavior">
        <p className="mb-4">
          Validate inputs on blur by default — this avoids distracting the user
          mid-typing. For fields with strict formatting (e.g., credit card
          numbers), inline validation on each keystroke can help users correct
          errors early.
        </p>
      </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Accessibility">
        <ul className="pl-5 mb-4">
          <li className="mb-2">
            Feedback text is linked via <code>aria-describedby</code>.
          </li>
          <li className="mb-2">
            Error state sets <code>aria-invalid=&quot;true&quot;</code> on the input.
          </li>
          <li className="mb-2">
            Error messages use <code>role=&quot;alert&quot;</code> for screen reader announcements.
          </li>
          <li>
            Focus ring meets minimum 3:1 contrast ratio.
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
            { description: "Size input widths proportionally to the expected content." },
            { description: "Provide specific feedback messages when validation fails." },
          ]}
          dontItems={[
            { description: "Don't add design elements not present in the Figma spec." },
            { description: 'Don\'t use generic feedback like "Invalid input" — be specific.' },
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
        <DocSection title="Color Tokens — Default State">
        <TokenGroup title="Input container">
          <ColorSwatch color="#F7F7F3" label="background (default)" />
          <ColorSwatch color="#B7BBAF" label="border / neutral / default" />
        </TokenGroup>
        <TokenGroup title="Text">
          <ColorSwatch color="#1C1F1B" label="text / neutral / default (value)" />
          <ColorSwatch color="#93988D" label="text / neutral / placeholder" />
          <ColorSwatch color="#1C1F1B" label="text / neutral / default (label)" />
          <ColorSwatch color="#93988D" label="text / neutral / placeholder (helper)" />
        </TokenGroup>
        <TokenGroup title="Icons">
          <ColorSwatch color="#4E534D" label="icon / neutral / secondary" />
        </TokenGroup>
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Color Tokens — Focus State">
        <TokenGroup title="Border & shadow">
          <ColorSwatch color="#A6BBA0" label="border / primary / default" />
          <ColorSwatch color="rgba(0,0,0,0.2)" label="shadow-focus (3px ring)" />
        </TokenGroup>
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Color Tokens — Error State">
        <TokenGroup title="Border & text">
          <ColorSwatch color="#EB978C" label="border / danger / default" />
          <ColorSwatch color="#903328" label="text / danger / default" />
          <ColorSwatch color="#903328" label="icon / danger / default" />
        </TokenGroup>
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Color Tokens — Disabled State">
        <TokenGroup title="Container">
          <ColorSwatch color="#F1F2EC" label="bg / surface / neutral / default" />
          <ColorSwatch color="rgba(0,0,0,0.5)" label="opacity-50 on container" />
        </TokenGroup>
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Typography Tokens" hideTitle>
        <DocTable
          variant="surface"
          headers={["Element", "Size (lg)", "Size (md/sm)", "Weight"]}
          rows={[
            ["Label", "Body/01 — 16px/24px", "Body/02 — 13px/16px", "500 (medium)"],
            ["Input text", "Body/01 — 16px/24px", "Body/02 — 13px/16px", "400 (regular)"],
            ["Placeholder", "Body/01 — 16px/24px", "Body/02 — 13px/16px", "400 (regular)"],
            ["Helper/Error", "Body/02 — 13px/16px", "Body/03 — 11px/12px", "400 (regular)"],
          ]}
        />
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Spacing Tokens" hideTitle>
        <DocTable
          variant="surface"
          headers={["Property", "Token (lg)", "Value (lg)", "Token (md/sm)", "Value (md/sm)"]}
          rows={[
            ["Container height", "—", "48px", "—", "40px / 32px"],
            ["Horizontal padding", "spacing/space-4", "16px", "spacing/space-3", "12px"],
            ["Icon gap", "spacing/space-3", "12px", "spacing/space-2", "8px"],
            ["Label margin-bottom", "spacing/space-1", "4px", "spacing/space-1", "4px"],
            ["Helper margin-top", "spacing/space-1", "4px", "spacing/space-1", "4px"],
          ]}
        />
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Border & Radius" hideTitle>
        <DocTable
          variant="surface"
          headers={["Property", "Token", "Value"]}
          rows={[
            ["Container radius", "border-radius/md", "12px"],
            ["Border width", "—", "1px"],
            ["Focus shadow", "shadow-focus", "0 0 0 3px rgba(0,0,0,0.2)"],
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
        <DocSection title="Sizes">
        <div className="grid grid-cols-2 gap-10 items-stretch">
        <DocPreview rounded={false} border={false} verticalPaddingOnly aspectSquare className="h-full min-h-0">
          <div className="flex flex-col gap-4 w-[200px]">
            <Input size="md" width={200} placeholder="Placeholder" helperText="Input feedback" trailingIcon={<CheckIcon />} />
            <Input size="sm" width={200} placeholder="Placeholder" helperText="Input feedback" trailingIcon={<CheckIcon />} />
          </div>
        </DocPreview>
        </div>
      </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="States">
        <div className="grid grid-cols-2 gap-10 items-stretch">
        <DocPreview rounded={false} border={false} verticalPaddingOnly aspectSquare className="h-full min-h-0">
          <div className="flex flex-col gap-4 w-[200px]">
            <Input width={200} placeholder="Placeholder" helperText="Input feedback" trailingIcon={<CheckIcon />} />
            <Input width={200} state="hover" placeholder="Placeholder" helperText="Input feedback" trailingIcon={<CheckIcon />} />
            <Input width={200} state="active" helperText="Input feedback" defaultValue="Hello world" trailingIcon={<CheckIcon />} />
            <Input width={200} placeholder="Placeholder" state="error" errorMessage="Input feedback" trailingIcon={<AlertCircleIcon />} />
            <Input width={200} placeholder="Cannot edit" helperText="Input feedback" disabled />
          </div>
        </DocPreview>
        </div>
      </DocSection>
      </div>
    </>
  );
}

function PropertiesTab() {
  const [size, setSize] = useState<InputSize>("md");
  const [inputState, setInputState] = useState<InputState>("default");
  const [isDisabled, setIsDisabled] = useState(false);
  const [placeholderText, setPlaceholderText] = useState("Placeholder");
  const [helperText, setHelperText] = useState("Input feedback");

  const codeSnippet = `<Input
  size="${size}"${inputState !== "default" ? `\n  state="${inputState}"` : ""}
  placeholder="${placeholderText}"
  helperText="${helperText}"${inputState === "error" ? `\n  errorMessage="${helperText}"` : ""}
  trailingIcon={<CheckIcon />}${isDisabled ? "\n  disabled" : ""}
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
              <div className="w-[200px]">
                <Input
                  width={200}
                  size={size}
                  state={inputState}
                  placeholder={placeholderText}
                  helperText={inputState === "error" ? undefined : helperText}
                  errorMessage={inputState === "error" ? helperText : undefined}
                  trailingIcon={inputState === "error" ? <AlertCircleIcon /> : <CheckIcon />}
                  disabled={isDisabled}
                />
              </div>
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
              label="State"
              options={[
                { value: "default", label: "Default" },
                { value: "hover", label: "Hover" },
                { value: "active", label: "Active" },
                { value: "error", label: "Error" },
              ]}
              value={inputState}
              onChange={setInputState}
            />

            <div className="mb-4">
              <p className="text-body-03 font-medium text-text-neutral-secondary mb-2">Placeholder</p>
              <input
                type="text"
                value={placeholderText}
                onChange={(e) => setPlaceholderText(e.target.value)}
                className="w-full px-3 py-1.5 text-body-02 border border-border-neutral-default rounded-md bg-white focus:outline-none focus:shadow-focus"
              />
            </div>

            <div className="mb-4">
              <p className="text-body-03 font-medium text-text-neutral-secondary mb-2">Feedback</p>
              <input
                type="text"
                value={helperText}
                onChange={(e) => setHelperText(e.target.value)}
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
            ["size", '"lg" | "md" | "sm"', '"md"', "Size variant — affects height, typography, and padding."],
            ["state", '"default" | "error"', '"default"', "Validation state — controls border color and shows error text."],
            ["label", "string", "undefined", "Label text displayed above the input."],
            ["helperText", "string", "undefined", "Helper text displayed below the input."],
            ["errorMessage", "string", "undefined", 'Error message — replaces helper when state="error".'],
            ["leadingIcon", "ReactNode", "undefined", "Icon displayed on the left inside the input."],
            ["trailingIcon", "ReactNode", "undefined", "Icon displayed on the right inside the input."],
            ["placeholder", "string", "undefined", "Placeholder text shown when input is empty."],
            ["disabled", "boolean", "false", "Disables the input and applies muted styling."],
            ["id", "string", "auto-generated", "HTML id — auto-generated if not provided. Used for label association."],
            ["className", "string", "undefined", "Additional CSS classes on the root wrapper div."],
          ]}
        />
      </DocSection>

      <DocSection title="Validation & Constraints" hideTitle>
        <DocTable
          variant="surface"
          headers={["Rule", "Details"]}
          rows={[
            ["Label required", "Every input should have a label for accessibility. Unlabeled inputs should use aria-label."],
            ["Error replaces helper", 'When state="error", errorMessage is shown instead of helperText.'],
            ["Validate on blur", "Validate inputs when focus leaves the field, not on every keystroke."],
            ["Placeholder is not a label", "Always pair placeholder text with a visible label above the field."],
          ]}
        />
      </DocSection>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════ */

export default function InputPage() {
  const [activeTab, setActiveTab] = useState<TabName>("Overview");

  return (
    <div className="col-span-2 grid grid-cols-2 gap-x-10 gap-y-10">
      <div className="col-start-1 flex flex-col">
        <DocHeader
          title="Input"
          description="Input lets users enter and edit short-form text. It supports labels, helper text, error states, and leading/trailing icons across three sizes."
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
