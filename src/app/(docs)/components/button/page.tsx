"use client";

import { useState, type ReactNode } from "react";
import DocHeader from "@/components/docs/DocHeader";
import DocSection from "@/components/docs/DocSection";
import DocTable from "@/components/docs/DocTable";
import DocCallout from "@/components/docs/DocCallout";
import DoDontGrid from "@/components/docs/DoDontGrid";
import DocPreview from "@/components/docs/DocPreview";
import DocAnatomy from "@/components/docs/DocAnatomy";
import Button, {
  type ButtonVariant,
  type ButtonSize,
  type ButtonAppearance,
} from "@/components/ui/Button";

/* ─── Inline SVG icons ─── */
function ChevronLeft() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}
function ChevronRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}
function PlusIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );
}
function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

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
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
        {children}
      </div>
    </div>
  );
}

/* ─── Selector for playground ─── */
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

function Toggle({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <label className="flex items-center gap-2 cursor-pointer mb-2">
      <div
        onClick={() => onChange(!checked)}
        className={`relative w-9 h-5 rounded-full transition-colors ${
          checked ? "bg-primary-900" : "bg-neutral-300"
        }`}
      >
        <div
          className={`absolute top-0.5 left-0.5 size-4 rounded-full bg-white transition-transform ${
            checked ? "translate-x-4" : ""
          }`}
        />
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
          Buttons are the primary way users take action in an interface. A
          well-designed button clearly communicates what will happen when it is
          pressed and stands out from surrounding content in proportion to its
          importance.
        </p>
        <p>
          Use button variants to establish a visual hierarchy — a single primary
          action supported by secondary and ghost alternatives. Limit the number
          of primary buttons per view to maintain a clear focus.
        </p>
      </DocSection>

      <DocSection title="Anatomy">
        <DocAnatomy
          items={[
            {
              label: "Leading icon (optional)",
              description: "A supporting icon placed before the label to reinforce meaning.",
            },
            {
              label: "Label",
              description: "The text that describes the action. Keep it short — ideally two words or fewer — and start with a verb.",
            },
            {
              label: "Trailing icon (optional)",
              description: "A supporting icon placed after the label, often a directional cue.",
            },
            {
              label: "Container",
              description: "Pill-shaped interactive surface. Background, border, and padding change based on variant and state.",
            },
          ]}
        />
        <DocPreview title="Anatomy example">
          <div className="flex gap-4 items-center">
            <Button variant="neutral" leadingIcon={<ChevronLeft />} trailingIcon={<ChevronRight />}>
              Button
            </Button>
            <Button variant="primary" leadingIcon={<ChevronLeft />} trailingIcon={<ChevronRight />}>
              Button
            </Button>
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="Variants">
        <p className="mb-4">Choose the variant that matches the importance and context of the action.</p>
        <DocTable
          headers={["Variant", "Purpose", "When to use"]}
          rows={[
            ["Neutral", "Default/secondary actions", "Cancel, go back, or perform non-critical tasks that still need visual presence."],
            ["Primary", "The main call-to-action on the page", "Submit a form, confirm a dialog, or start a critical flow. Limit to one per view."],
            ["Danger", "Irreversible or high-risk actions", "Delete, remove, or revoke. Always pair with a confirmation step."],
          ]}
        />
        <DocPreview title="Variant comparison">
          <div className="flex flex-wrap gap-3 items-center">
            <Button variant="neutral">Neutral</Button>
            <Button variant="primary">Primary</Button>
            <Button variant="danger">Danger</Button>
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="Appearances">
        <DocTable
          headers={["Appearance", "Description"]}
          rows={[
            ["Filled", "Solid background. Strongest visual emphasis."],
            ["Outlined", "Transparent background with border. Medium emphasis."],
            ["Link", "Underlined text only. Minimal emphasis, blends with content."],
            ["Ghost", "No background or border. Used for icon-only buttons in toolbars."],
          ]}
        />
        <DocPreview title="Appearance comparison (Neutral)">
          <div className="flex flex-wrap gap-3 items-center">
            <Button variant="neutral" appearance="filled">Filled</Button>
            <Button variant="neutral" appearance="outlined">Outlined</Button>
            <Button variant="neutral" appearance="link">Link</Button>
            <Button variant="neutral" size="icon" appearance="ghost" aria-label="Menu">
              <MenuIcon />
            </Button>
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="Sizes">
        <DocTable
          headers={["Size", "Height", "Use case"]}
          rows={[
            ["Large (lg)", "44px", "Default size for most contexts. Hero sections, forms, prominent CTAs."],
            ["Small (sm)", "36px", "Dense layouts, tables, inline actions."],
            ["Icon", "36×36px", "Icon-only buttons for toolbars or compact UI."],
          ]}
        />
        <DocPreview title="Size comparison">
          <div className="flex flex-wrap gap-3 items-end">
            <Button variant="primary" size="lg">Large</Button>
            <Button variant="primary" size="sm">Small</Button>
            <Button variant="primary" size="icon" aria-label="Add">
              <PlusIcon />
            </Button>
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="States">
        <DocTable
          headers={["State", "Description"]}
          rows={[
            ["Default", "The resting state when the button is available for interaction."],
            ["Hover", "Visual feedback when the cursor moves over the button."],
            ["Focus", "A visible ring (box-shadow) appears when navigated to via keyboard."],
            ["Pressed", "A pressed appearance on mouse-down or touch."],
            ["Disabled", "Non-interactive. Muted colors and pointer-events: none."],
          ]}
        />
      </DocSection>

      <DocSection title="Accessibility">
        <ul className="pl-5 mb-4">
          <li className="mb-2">
            Uses a native <code>&lt;button&gt;</code> element with <code>forwardRef</code>.
          </li>
          <li className="mb-2">
            Icon-only buttons must include <code>aria-label</code> for screen readers.
          </li>
          <li className="mb-2">
            Focus ring uses <code>focus-visible</code> to avoid showing on click.
          </li>
          <li className="mb-2">
            Disabled buttons use <code>disabled</code> attribute and <code>pointer-events: none</code>.
          </li>
          <li>
            Touch targets meet the 44×44px minimum (lg size) or 36×36px (sm/icon).
          </li>
        </ul>
      </DocSection>

      <DocSection title="Usage guidelines">
        <DoDontGrid
          doItems={[
            { description: "Use a single primary button per view to focus user attention." },
            { description: "Start button labels with a strong verb: Save, Create, Delete." },
            { description: "Use leading/trailing icons to reinforce directional meaning." },
            { description: "Pair destructive buttons with a confirmation dialog." },
          ]}
          dontItems={[
            { description: "Don't use multiple primary buttons in the same section." },
            { description: "Don't use vague labels like \"Click here\" or \"Submit\"." },
            { description: "Don't disable buttons without explaining why." },
            { description: "Don't mix appearances in the same button group." },
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
        <TokenGroup title="Neutral Filled">
          <ColorSwatch color="#e4e6de" label="bg / default (neutral-200)" />
          <ColorSwatch color="#d3d6cc" label="bg / hover (neutral-300)" />
          <ColorSwatch color="#b7bbaf" label="bg / pressed (neutral-400)" />
          <ColorSwatch color="#6e736a" label="bg / disabled (neutral-600)" />
          <ColorSwatch color="#1c1f1b" label="text / default (neutral-900)" />
          <ColorSwatch color="#31352f" label="text / hover (neutral-800)" />
          <ColorSwatch color="#4e534d" label="text / pressed (neutral-700)" />
          <ColorSwatch color="#b7bbaf" label="text / disabled (neutral-400)" />
        </TokenGroup>

        <TokenGroup title="Primary Filled">
          <ColorSwatch color="#153014" label="bg / default (primary-900)" />
          <ColorSwatch color="#223f1e" label="bg / hover (primary-800)" />
          <ColorSwatch color="#33522d" label="bg / pressed (primary-700)" />
          <ColorSwatch color="#c9d7c6" label="bg / disabled (primary-200)" />
          <ColorSwatch color="#e4ece2" label="text / invert (primary-100)" />
        </TokenGroup>

        <TokenGroup title="Danger Filled">
          <ColorSwatch color="#b84335" label="bg / default (danger-500)" />
          <ColorSwatch color="#eb978c" label="bg / hover (danger-300)" />
          <ColorSwatch color="#d86759" label="bg / pressed (danger-400)" />
          <ColorSwatch color="#f6c4bd" label="bg / disabled (danger-200)" />
          <ColorSwatch color="#f1f2ec" label="text / invert (neutral-100)" />
        </TokenGroup>

        <TokenGroup title="Outlined Border">
          <ColorSwatch color="#b7bbaf" label="border / neutral (neutral-400)" />
          <ColorSwatch color="#7e9b76" label="border / primary (primary-400)" />
          <ColorSwatch color="#d86759" label="border / danger (danger-400)" />
        </TokenGroup>
      </DocSection>

      <DocSection title="Typography Tokens">
        <DocTable
          headers={["Token", "Size", "Line Height", "Weight"]}
          rows={[
            ["Body/01/Medium (lg)", "16px", "24px", "500 (medium)"],
            ["Body/02/Medium (sm)", "13px", "16px", "500 (medium)"],
          ]}
        />
        <DocCallout variant="info" title="Font family">
          All buttons use <code>Suisse Intl Trial</code> (Medium weight) as the default font family.
        </DocCallout>
      </DocSection>

      <DocSection title="Spacing Tokens">
        <DocTable
          headers={["Property", "Token", "Value"]}
          rows={[
            ["Horizontal padding", "space-4", "16px"],
            ["Vertical padding", "space-2", "8px"],
            ["Icon gap", "space-2", "8px"],
          ]}
        />
      </DocSection>

      <DocSection title="Border Radius">
        <DocTable
          headers={["Property", "Token", "Value"]}
          rows={[
            ["Container", "border-radius/max", "9999px (pill)"],
          ]}
        />
      </DocSection>

      <DocSection title="Shadow & Elevation Tokens">
        <DocTable
          headers={["Token", "Value", "Usage"]}
          rows={[
            ["shadow-focus", "0 0 0 3px rgba(0, 0, 0, 0.20)", "Focus ring for keyboard navigation"],
          ]}
        />
      </DocSection>

      <DocSection title="Animation / Transition Tokens">
        <DocTable
          headers={["Property", "Duration", "Easing"]}
          rows={[
            ["background-color, color, border-color, box-shadow", "150ms", "ease (default Tailwind)"],
          ]}
        />
      </DocSection>
    </>
  );
}

function StylesTab() {
  const variants: ButtonVariant[] = ["neutral", "primary", "danger"];
  const appearances: ButtonAppearance[] = ["filled", "outlined", "link", "ghost"];
  const sizes: ButtonSize[] = ["lg", "sm", "icon"];

  return (
    <>
      <DocSection title="All Variants × Appearances">
        {variants.map((variant) => (
          <div key={variant} className="mb-8">
            <h4 className="text-body-01 font-medium capitalize mb-4">{variant}</h4>
            <div className="grid gap-4">
              {appearances.map((appearance) => (
                <DocPreview key={appearance} title={`${variant} / ${appearance}`}>
                  <div className="flex flex-wrap gap-3 items-center">
                    <Button variant={variant} appearance={appearance}>
                      Default
                    </Button>
                    <Button variant={variant} appearance={appearance} disabled>
                      Disabled
                    </Button>
                    {appearance !== "link" && (
                      <Button variant={variant} appearance={appearance} size="icon" aria-label="Add">
                        <PlusIcon />
                      </Button>
                    )}
                  </div>
                </DocPreview>
              ))}
            </div>
          </div>
        ))}
      </DocSection>

      <DocSection title="Size Variations">
        <DocPreview title="Large (44px)">
          <div className="flex flex-wrap gap-3 items-center">
            <Button variant="neutral" size="lg">Neutral</Button>
            <Button variant="primary" size="lg">Primary</Button>
            <Button variant="danger" size="lg">Danger</Button>
          </div>
        </DocPreview>
        <DocPreview title="Small (36px)">
          <div className="flex flex-wrap gap-3 items-center">
            <Button variant="neutral" size="sm">Neutral</Button>
            <Button variant="primary" size="sm">Primary</Button>
            <Button variant="danger" size="sm">Danger</Button>
          </div>
        </DocPreview>
        <DocPreview title="Icon (36×36px)">
          <div className="flex flex-wrap gap-3 items-center">
            <Button variant="neutral" size="icon" aria-label="Add"><PlusIcon /></Button>
            <Button variant="primary" size="icon" aria-label="Add"><PlusIcon /></Button>
            <Button variant="neutral" size="icon" appearance="outlined" aria-label="Close"><XIcon /></Button>
            <Button variant="neutral" size="icon" appearance="ghost" aria-label="Menu"><MenuIcon /></Button>
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="With Icons">
        <DocPreview title="Leading icon">
          <div className="flex flex-wrap gap-3 items-center">
            <Button variant="neutral" leadingIcon={<ChevronLeft />}>Back</Button>
            <Button variant="primary" leadingIcon={<PlusIcon />}>Create</Button>
            <Button variant="danger" leadingIcon={<XIcon />}>Delete</Button>
          </div>
        </DocPreview>
        <DocPreview title="Trailing icon">
          <div className="flex flex-wrap gap-3 items-center">
            <Button variant="neutral" trailingIcon={<ChevronRight />}>Next</Button>
            <Button variant="primary" trailingIcon={<ChevronRight />}>Continue</Button>
          </div>
        </DocPreview>
        <DocPreview title="Both icons">
          <div className="flex flex-wrap gap-3 items-center">
            <Button variant="neutral" leadingIcon={<ChevronLeft />} trailingIcon={<ChevronRight />}>Navigate</Button>
            <Button variant="primary" leadingIcon={<ChevronLeft />} trailingIcon={<ChevronRight />}>Navigate</Button>
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="State Demonstrations">
        <p className="mb-4 text-body-02 text-text-neutral-secondary">
          Hover, focus, and active states are interactive — try hovering and clicking the buttons above, or use Tab to focus.
        </p>
        <DocPreview title="Disabled states">
          <div className="flex flex-wrap gap-3 items-center">
            <Button variant="neutral" disabled>Neutral</Button>
            <Button variant="primary" disabled>Primary</Button>
            <Button variant="danger" disabled>Danger</Button>
            <Button variant="neutral" appearance="outlined" disabled>Outlined</Button>
            <Button variant="neutral" appearance="link" disabled>Link</Button>
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="Dark Background Preview">
        <div className="mb-6 rounded-md border border-border-neutral-default overflow-hidden">
          <div className="px-4 py-2 bg-background-surface-neutral-default border-b border-border-neutral-default text-body-03 font-medium text-text-neutral-placeholder">
            Buttons on dark surface
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 p-8 bg-neutral-900 min-h-[120px]">
            <Button variant="neutral">Neutral</Button>
            <Button variant="primary">Primary</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="neutral" appearance="outlined">Outlined</Button>
          </div>
        </div>
      </DocSection>
    </>
  );
}

function PropertiesTab() {
  const [variant, setVariant] = useState<ButtonVariant>("neutral");
  const [size, setSize] = useState<ButtonSize>("lg");
  const [appearance, setAppearance] = useState<ButtonAppearance>("filled");
  const [label, setLabel] = useState("Button");
  const [showLeading, setShowLeading] = useState(false);
  const [showTrailing, setShowTrailing] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const isIcon = size === "icon";

  const codeSnippet = isIcon
    ? `<Button
  variant="${variant}"
  size="icon"
  appearance="${appearance}"${isDisabled ? "\n  disabled" : ""}
  aria-label="Action"
>
  <PlusIcon />
</Button>`
    : `<Button
  variant="${variant}"
  size="${size}"
  appearance="${appearance}"${showLeading ? '\n  leadingIcon={<ChevronLeft />}' : ""}${showTrailing ? '\n  trailingIcon={<ChevronRight />}' : ""}${isDisabled ? "\n  disabled" : ""}
>
  ${label}
</Button>`;

  return (
    <>
      <DocSection title="Interactive Playground">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
          {/* Preview */}
          <div className="rounded-md border border-border-neutral-default overflow-hidden">
            <div className="px-4 py-2 bg-background-surface-neutral-default border-b border-border-neutral-default text-body-03 font-medium text-text-neutral-placeholder">
              Preview
            </div>
            <div className="flex items-center justify-center p-12 bg-white min-h-[200px]">
              {isIcon ? (
                <Button
                  variant={variant}
                  size="icon"
                  appearance={appearance}
                  disabled={isDisabled}
                  aria-label="Action"
                >
                  <PlusIcon />
                </Button>
              ) : (
                <Button
                  variant={variant}
                  size={size}
                  appearance={appearance}
                  leadingIcon={showLeading ? <ChevronLeft /> : undefined}
                  trailingIcon={showTrailing ? <ChevronRight /> : undefined}
                  disabled={isDisabled}
                >
                  {label}
                </Button>
              )}
            </div>
          </div>

          {/* Controls */}
          <div className="p-4 rounded-md border border-border-neutral-default bg-background-surface-neutral-default">
            <h4 className="text-body-02 font-medium mb-4">Controls</h4>

            <RadioGroup
              label="Variant"
              options={[
                { value: "neutral", label: "Neutral" },
                { value: "primary", label: "Primary" },
                { value: "danger", label: "Danger" },
              ]}
              value={variant}
              onChange={setVariant}
            />

            <RadioGroup
              label="Size"
              options={[
                { value: "lg", label: "Large" },
                { value: "sm", label: "Small" },
                { value: "icon", label: "Icon" },
              ]}
              value={size}
              onChange={setSize}
            />

            <RadioGroup
              label="Appearance"
              options={[
                { value: "filled", label: "Filled" },
                { value: "outlined", label: "Outlined" },
                { value: "link", label: "Link" },
                { value: "ghost", label: "Ghost" },
              ]}
              value={appearance}
              onChange={setAppearance}
            />

            {!isIcon && (
              <div className="mb-4">
                <p className="text-body-03 font-medium text-text-neutral-secondary mb-2">Label</p>
                <input
                  type="text"
                  value={label}
                  onChange={(e) => setLabel(e.target.value)}
                  className="w-full px-3 py-1.5 text-body-02 border border-border-neutral-default rounded-md bg-white focus:outline-none focus:shadow-focus"
                />
              </div>
            )}

            {!isIcon && (
              <>
                <Toggle label="Leading icon" checked={showLeading} onChange={setShowLeading} />
                <Toggle label="Trailing icon" checked={showTrailing} onChange={setShowTrailing} />
              </>
            )}

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
            ["variant", '"neutral" | "primary" | "danger"', '"neutral"', "Color variant determining the button's visual theme."],
            ["size", '"lg" | "sm" | "icon"', '"lg"', "Controls height and typography scale."],
            ["appearance", '"filled" | "outlined" | "link" | "ghost"', '"filled"', "Visual style — solid, bordered, text-only, or transparent."],
            ["leadingIcon", "ReactNode", "undefined", "Icon rendered before the label."],
            ["trailingIcon", "ReactNode", "undefined", "Icon rendered after the label."],
            ["disabled", "boolean", "false", "Disables the button and applies muted styling."],
            ["className", "string", "undefined", "Additional CSS classes appended to the root element."],
            ["children", "ReactNode", "—", "Button label text, or icon content for size=\"icon\"."],
          ]}
        />
      </DocSection>

      <DocSection title="Code Examples">
        <DocPreview title="Primary CTA">
          <Button variant="primary" size="lg">
            Save changes
          </Button>
        </DocPreview>
        <pre className="mb-6 p-4 rounded-md bg-neutral-900 text-neutral-100 text-body-02 overflow-x-auto">
          <code>{`<Button variant="primary" size="lg">Save changes</Button>`}</code>
        </pre>

        <DocPreview title="Cancel / secondary action">
          <Button variant="neutral" appearance="outlined">
            Cancel
          </Button>
        </DocPreview>
        <pre className="mb-6 p-4 rounded-md bg-neutral-900 text-neutral-100 text-body-02 overflow-x-auto">
          <code>{`<Button variant="neutral" appearance="outlined">Cancel</Button>`}</code>
        </pre>

        <DocPreview title="Destructive with confirmation icon">
          <Button variant="danger" leadingIcon={<XIcon />}>
            Delete account
          </Button>
        </DocPreview>
        <pre className="mb-6 p-4 rounded-md bg-neutral-900 text-neutral-100 text-body-02 overflow-x-auto">
          <code>{`<Button variant="danger" leadingIcon={<XIcon />}>Delete account</Button>`}</code>
        </pre>

        <DocPreview title="Icon-only toolbar button">
          <div className="flex gap-2">
            <Button variant="neutral" size="icon" appearance="ghost" aria-label="Menu">
              <MenuIcon />
            </Button>
            <Button variant="neutral" size="icon" appearance="outlined" aria-label="Add">
              <PlusIcon />
            </Button>
          </div>
        </DocPreview>
        <pre className="mb-6 p-4 rounded-md bg-neutral-900 text-neutral-100 text-body-02 overflow-x-auto">
          <code>{`<Button variant="neutral" size="icon" appearance="ghost" aria-label="Menu">
  <MenuIcon />
</Button>`}</code>
        </pre>

        <DocPreview title="Small inline actions">
          <div className="flex gap-2">
            <Button variant="primary" size="sm">Approve</Button>
            <Button variant="neutral" size="sm" appearance="outlined">Reject</Button>
          </div>
        </DocPreview>
        <pre className="mb-6 p-4 rounded-md bg-neutral-900 text-neutral-100 text-body-02 overflow-x-auto">
          <code>{`<Button variant="primary" size="sm">Approve</Button>
<Button variant="neutral" size="sm" appearance="outlined">Reject</Button>`}</code>
        </pre>
      </DocSection>

      <DocSection title="Validation & Constraints">
        <DocTable
          headers={["Rule", "Details"]}
          rows={[
            ["Icon-only requires aria-label", 'When size="icon", always provide aria-label for accessibility.'],
            ["One primary per view", "Avoid multiple primary buttons in the same section."],
            ["Danger needs confirmation", "Pair danger buttons with a confirmation dialog."],
            ["Link appearance has no container", "Link buttons have no height/padding — they flow inline with text."],
            ["Ghost is best for icon-only", "Ghost appearance is designed primarily for icon-only toolbar buttons."],
          ]}
        />
      </DocSection>
    </>
  );
}

/* ═══════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════ */

export default function ButtonPage() {
  const [activeTab, setActiveTab] = useState<TabName>("Overview");

  return (
    <div className="col-span-2 flex flex-col">
      <DocHeader
        title="Button"
        description="Buttons trigger actions and events. Use them to let users submit forms, confirm decisions, or navigate to new tasks."
      />

      <TabBar active={activeTab} onChange={setActiveTab} />

      {activeTab === "Overview" && <OverviewTab />}
      {activeTab === "Design Tokens" && <DesignTokensTab />}
      {activeTab === "Styles" && <StylesTab />}
      {activeTab === "Properties" && <PropertiesTab />}
    </div>
  );
}
