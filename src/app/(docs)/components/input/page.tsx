"use client";

import { useState, type ReactNode } from "react";
import DocHeader from "@/components/docs/DocHeader";
import DocSection from "@/components/docs/DocSection";
import DocTable from "@/components/docs/DocTable";
import DocCallout from "@/components/docs/DocCallout";
import DoDontGrid from "@/components/docs/DoDontGrid";
import DocPreview from "@/components/docs/DocPreview";
import DocAnatomy from "@/components/docs/DocAnatomy";
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

/* ─── Inline SVG icons for demos ─── */
function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M11 11L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="1" y="3" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M1 5L8 9L15 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function AlertCircleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 5V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="8" cy="11" r="0.75" fill="currentColor" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M1 8C1 8 4 3 8 3C12 3 15 8 15 8C15 8 12 13 8 13C4 13 1 8 1 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
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
          The Input component lets users enter and edit short-form text. It is
          the most common form control and the foundation of data collection in
          the Telehealth app.
        </p>
        <p>
          Every input has a visible label, an editable field, and optional
          helper or error text. Inputs support leading and trailing icons to
          provide additional context without requiring extra labels.
        </p>
      </DocSection>

      <DocSection title="Anatomy">
        <DocAnatomy
          items={[
            {
              label: "Label",
              description:
                "A short, descriptive text above the field. Always visible — never rely on placeholder text as the only label.",
            },
            {
              label: "Input container",
              description:
                "The bordered box containing the text field, optional icons, and padding. Changes border color across states.",
            },
            {
              label: "Input text / placeholder",
              description:
                "The editable area where users type. Placeholder text provides a hint in the empty state.",
            },
            {
              label: "Leading icon (optional)",
              description:
                "An icon on the left side of the input to reinforce meaning — e.g., a search or mail icon.",
            },
            {
              label: "Trailing icon (optional)",
              description:
                "An icon on the right side — often used for actions (clear, reveal password) or status (error indicator).",
            },
            {
              label: "Helper / Error text",
              description:
                "Guidance below the field. Replaced by error text when validation fails.",
            },
          ]}
        />
        <DocPreview title="Anatomy example">
          <div className="w-72">
            <Input
              size="md"
              label="Email address"
              placeholder="you@example.com"
              helperText="We'll never share your email."
              leadingIcon={<MailIcon />}
            />
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="Sizes">
        <DocTable
          headers={["Size", "Height", "Input text", "Label text", "Helper text", "Use case"]}
          rows={[
            ["Large (lg)", "48px", "Body/01 — 16px", "Body/01/Medium", "Body/02", "Prominent inputs — search bars, onboarding."],
            ["Medium (md)", "40px", "Body/02 — 13px", "Body/02/Medium", "Body/03", "Default for most form contexts."],
            ["Small (sm)", "32px", "Body/02 — 13px", "Body/02/Medium", "Body/03", "Compact forms, table editing, filters."],
          ]}
        />
        <DocPreview title="Size comparison">
          <div className="flex flex-col gap-4 w-72">
            <Input size="lg" label="Large" placeholder="Large input" />
            <Input size="md" label="Medium" placeholder="Medium input" />
            <Input size="sm" label="Small" placeholder="Small input" />
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="States">
        <DocTable
          headers={["State", "Visual treatment", "Behavior"]}
          rows={[
            ["Default", "Neutral border (#b7bbaf), white background", "Ready for input. Placeholder text may be shown."],
            ["Focus", "Primary border (#a6bba0), focus ring (shadow-focus)", "The field is active and receiving keystrokes."],
            ["Error", "Danger border (#eb978c), error text replaces helper", "Validation has failed. Error message is shown below."],
            ["Disabled", "50% opacity, neutral surface background", "Non-interactive. The value is visible but cannot be changed."],
          ]}
        />
        <DocPreview title="All states">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl">
            <Input label="Default" placeholder="Enter text" />
            <Input label="With value" defaultValue="Hello world" />
            <Input label="Error" state="error" defaultValue="ab" errorMessage="Must be at least 3 characters." />
            <Input label="Disabled" defaultValue="Cannot edit" disabled />
          </div>
        </DocPreview>
        <DocCallout variant="info" title="Focus state">
          Click any input above to see the focus ring in action. The border
          transitions to the primary color and a 3px focus shadow appears.
        </DocCallout>
      </DocSection>

      <DocSection title="Variants">
        <DocTable
          headers={["Variant", "Description", "When to use"]}
          rows={[
            ["Plain", "Standard text input with label", "Most form fields — name, email, address."],
            ["With leading icon", "Icon on the left to reinforce meaning", "Search fields, email fields, phone inputs."],
            ["With trailing icon", "Icon on the right for actions or status", "Password reveal, clear button, error indicator."],
            ["With both icons", "Icons on both sides", "Search with clear button, validated fields."],
          ]}
        />
        <DocPreview title="Variant examples">
          <div className="flex flex-col gap-4 w-72">
            <Input label="Plain" placeholder="Enter text" />
            <Input label="With leading icon" placeholder="Search..." leadingIcon={<SearchIcon />} />
            <Input label="Password" placeholder="••••••••" type="password" trailingIcon={<EyeIcon />} />
            <Input
              label="Error with icon"
              state="error"
              defaultValue="invalid"
              errorMessage="Please enter a valid value."
              trailingIcon={<AlertCircleIcon />}
            />
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="Behavior">
        <p className="mb-4">
          Validate inputs on blur by default — this avoids distracting the user
          mid-typing. For fields with strict formatting (e.g., credit card
          numbers), inline validation on each keystroke can help users correct
          errors early.
        </p>
        <DocCallout variant="warning" title="Avoid placeholder-only labels">
          Placeholder text disappears on focus, which means users lose context
          about what the field expects. Always pair placeholders with a
          persistent label.
        </DocCallout>
      </DocSection>

      <DocSection title="Accessibility">
        <ul className="pl-5 mb-4">
          <li className="mb-2">
            Labels are linked to inputs via <code>htmlFor</code> / <code>id</code> (auto-generated if not provided).
          </li>
          <li className="mb-2">
            Helper/error text is linked via <code>aria-describedby</code>.
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

      <DocSection title="Usage guidelines">
        <DoDontGrid
          doItems={[
            { description: "Always show a visible label above the input." },
            { description: "Size input widths proportionally to the expected content." },
            { description: "Provide specific error messages that tell users how to fix the issue." },
            { description: 'Use helper text for formatting hints (e.g., "MM/DD/YYYY").' },
          ]}
          dontItems={[
            { description: "Don't rely on placeholder text as the only label." },
            { description: "Don't validate on every keystroke unless formatting guidance is necessary." },
            { description: 'Don\'t use generic errors like "Invalid input" — be specific.' },
            { description: "Don't remove the label when the field is focused." },
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
        <TokenGroup title="Input container">
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
          <ColorSwatch color="#4e534d" label="icon / neutral / secondary" />
        </TokenGroup>
      </DocSection>

      <DocSection title="Color Tokens — Focus State">
        <TokenGroup title="Border & shadow">
          <ColorSwatch color="#a6bba0" label="border / primary / default" />
          <ColorSwatch color="rgba(0,0,0,0.2)" label="shadow-focus (3px ring)" />
        </TokenGroup>
      </DocSection>

      <DocSection title="Color Tokens — Error State">
        <TokenGroup title="Border & text">
          <ColorSwatch color="#eb978c" label="border / danger / default" />
          <ColorSwatch color="#903328" label="text / danger / default" />
          <ColorSwatch color="#903328" label="icon / danger / default" />
        </TokenGroup>
      </DocSection>

      <DocSection title="Color Tokens — Disabled State">
        <TokenGroup title="Container">
          <ColorSwatch color="#f1f2ec" label="bg / surface / neutral / default" />
          <ColorSwatch color="rgba(0,0,0,0.5)" label="opacity-50 on container" />
        </TokenGroup>
      </DocSection>

      <DocSection title="Typography Tokens">
        <DocTable
          headers={["Element", "Size (lg)", "Size (md/sm)", "Weight"]}
          rows={[
            ["Label", "Body/01 — 16px/24px", "Body/02 — 13px/16px", "500 (medium)"],
            ["Input text", "Body/01 — 16px/24px", "Body/02 — 13px/16px", "400 (regular)"],
            ["Placeholder", "Body/01 — 16px/24px", "Body/02 — 13px/16px", "400 (regular)"],
            ["Helper/Error", "Body/02 — 13px/16px", "Body/03 — 11px/12px", "400 (regular)"],
          ]}
        />
      </DocSection>

      <DocSection title="Spacing Tokens">
        <DocTable
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

      <DocSection title="Border & Radius">
        <DocTable
          headers={["Property", "Token", "Value"]}
          rows={[
            ["Container radius", "border-radius/md", "12px"],
            ["Border width", "—", "1px"],
            ["Focus shadow", "shadow-focus", "0 0 0 3px rgba(0,0,0,0.2)"],
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
        <DocPreview title="lg / md / sm">
          <div className="flex flex-col gap-4 w-72">
            <Input size="lg" label="Large" placeholder="Large input" />
            <Input size="md" label="Medium" placeholder="Medium input" />
            <Input size="sm" label="Small" placeholder="Small input" />
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="States — Default">
        <DocPreview title="Empty / With value / With placeholder">
          <div className="flex flex-col gap-4 w-72">
            <Input label="Empty" placeholder="Type here..." />
            <Input label="With value" defaultValue="John Doe" />
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="States — Error">
        <DocPreview title="Error with message">
          <div className="flex flex-col gap-4 w-72">
            <Input
              label="Email"
              state="error"
              defaultValue="invalid-email"
              errorMessage="Please enter a valid email address."
              trailingIcon={<AlertCircleIcon />}
            />
            <Input
              label="Username"
              state="error"
              defaultValue="ab"
              errorMessage="Username must be at least 3 characters."
            />
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="States — Disabled">
        <DocPreview title="Disabled empty / Disabled with value">
          <div className="flex flex-col gap-4 w-72">
            <Input label="Disabled" placeholder="Cannot type" disabled />
            <Input label="Disabled with value" defaultValue="Read only" disabled />
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="With Icons">
        <DocPreview title="Leading / Trailing / Both">
          <div className="flex flex-col gap-4 w-72">
            <Input label="Search" placeholder="Search..." leadingIcon={<SearchIcon />} />
            <Input label="Password" placeholder="••••••••" type="password" trailingIcon={<EyeIcon />} />
            <Input label="Email" placeholder="you@example.com" leadingIcon={<MailIcon />} helperText="We'll never share your email." />
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="With Helper Text">
        <DocPreview title="Helper text examples">
          <div className="flex flex-col gap-4 w-72">
            <Input label="Date of birth" placeholder="MM/DD/YYYY" helperText="Format: month/day/year" />
            <Input label="Phone" placeholder="+1 (555) 000-0000" helperText="Include area code" leadingIcon={
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M14 11.5V13.5C14 14.05 13.55 14.5 13 14.5C7.2 14.5 1.5 8.8 1.5 3C1.5 2.45 1.95 2 2.5 2H4.5L6 6L4.5 7C5.4 8.9 7.1 10.6 9 11.5L10 10L14 11.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              </svg>
            } />
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="In Context — Form">
        <DocPreview title="Registration form">
          <div className="flex flex-col gap-4" style={{ maxWidth: 360 }}>
            <div className="grid grid-cols-2 gap-3">
              <Input label="First name" placeholder="Jane" />
              <Input label="Last name" placeholder="Doe" />
            </div>
            <Input label="Email" placeholder="jane@example.com" leadingIcon={<MailIcon />} />
            <Input label="Password" placeholder="••••••••" type="password" trailingIcon={<EyeIcon />} helperText="At least 8 characters." />
          </div>
        </DocPreview>
      </DocSection>
    </>
  );
}

function PropertiesTab() {
  const [size, setSize] = useState<InputSize>("md");
  const [inputState, setInputState] = useState<InputState>("default");
  const [showLabel, setShowLabel] = useState(true);
  const [showHelper, setShowHelper] = useState(false);
  const [showLeadingIcon, setShowLeadingIcon] = useState(false);
  const [showTrailingIcon, setShowTrailingIcon] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [labelText, setLabelText] = useState("Label");
  const [placeholderText, setPlaceholderText] = useState("Placeholder");

  const codeSnippet = `<Input
  size="${size}"${inputState !== "default" ? `\n  state="${inputState}"` : ""}${showLabel ? `\n  label="${labelText}"` : ""}
  placeholder="${placeholderText}"${showHelper && inputState === "error" ? '\n  errorMessage="Error message here."' : ""}${showHelper && inputState !== "error" ? '\n  helperText="Helper text here."' : ""}${showLeadingIcon ? "\n  leadingIcon={<SearchIcon />}" : ""}${showTrailingIcon ? "\n  trailingIcon={<EyeIcon />}" : ""}${isDisabled ? "\n  disabled" : ""}
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
            <div className="flex items-center justify-center p-8 bg-white min-h-[200px]">
              <div className="w-72">
                <Input
                  size={size}
                  state={inputState}
                  label={showLabel ? labelText : undefined}
                  placeholder={placeholderText}
                  helperText={!showHelper || inputState === "error" ? undefined : "Helper text here."}
                  errorMessage={inputState === "error" ? "Error message here." : undefined}
                  leadingIcon={showLeadingIcon ? <SearchIcon /> : undefined}
                  trailingIcon={showTrailingIcon ? <EyeIcon /> : undefined}
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
                { value: "lg", label: "Large" },
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
              value={inputState}
              onChange={setInputState}
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
            <Toggle label="Leading icon" checked={showLeadingIcon} onChange={setShowLeadingIcon} />
            <Toggle label="Trailing icon" checked={showTrailingIcon} onChange={setShowTrailingIcon} />
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

      <DocSection title="Code Examples">
        <DocPreview title="Basic form input">
          <div className="w-72">
            <Input label="Full name" placeholder="Jane Doe" />
          </div>
        </DocPreview>
        <pre className="mb-6 p-4 rounded-md bg-neutral-900 text-neutral-100 text-body-02 overflow-x-auto">
          <code>{`<Input label="Full name" placeholder="Jane Doe" />`}</code>
        </pre>

        <DocPreview title="With icon and helper text">
          <div className="w-72">
            <Input label="Email" placeholder="you@example.com" leadingIcon={<MailIcon />} helperText="We'll never share your email." />
          </div>
        </DocPreview>
        <pre className="mb-6 p-4 rounded-md bg-neutral-900 text-neutral-100 text-body-02 overflow-x-auto">
          <code>{`<Input
  label="Email"
  placeholder="you@example.com"
  leadingIcon={<MailIcon />}
  helperText="We'll never share your email."
/>`}</code>
        </pre>

        <DocPreview title="Error state">
          <div className="w-72">
            <Input label="Username" state="error" defaultValue="ab" errorMessage="Must be at least 3 characters." trailingIcon={<AlertCircleIcon />} />
          </div>
        </DocPreview>
        <pre className="mb-6 p-4 rounded-md bg-neutral-900 text-neutral-100 text-body-02 overflow-x-auto">
          <code>{`<Input
  label="Username"
  state="error"
  defaultValue="ab"
  errorMessage="Must be at least 3 characters."
  trailingIcon={<AlertCircleIcon />}
/>`}</code>
        </pre>
      </DocSection>

      <DocSection title="Validation & Constraints">
        <DocTable
          headers={["Rule", "Details"]}
          rows={[
            ["Label required", "Every input should have a label for accessibility. Unlabeled inputs should use aria-label."],
            ["Error replaces helper", 'When state="error", errorMessage is shown instead of helperText.'],
            ["Validate on blur", "Validate inputs when focus leaves the field, not on every keystroke."],
            ["Placeholder is not a label", "Always pair placeholder text with a visible label above the field."],
          ]}
        />
      </DocSection>
    </>
  );
}

/* ═══════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════ */

export default function InputPage() {
  const [activeTab, setActiveTab] = useState<TabName>("Overview");

  return (
    <div className="col-span-2 flex flex-col">
      <DocHeader
        title="Input"
        description="Input lets users enter and edit short-form text. It supports labels, helper text, error states, and leading/trailing icons across three sizes."
      />

      <TabBar active={activeTab} onChange={setActiveTab} />

      {activeTab === "Overview" && <OverviewTab />}
      {activeTab === "Design Tokens" && <DesignTokensTab />}
      {activeTab === "Styles" && <StylesTab />}
      {activeTab === "Properties" && <PropertiesTab />}
    </div>
  );
}
