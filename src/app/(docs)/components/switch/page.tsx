"use client";

import { useState, type ReactNode } from "react";
import DocHeader from "@/components/docs/DocHeader";
import DocSection from "@/components/docs/DocSection";
import DocTable from "@/components/docs/DocTable";
import DocCallout from "@/components/docs/DocCallout";
import DoDontGrid from "@/components/docs/DoDontGrid";
import DocPreview from "@/components/docs/DocPreview";
import DocAnatomy from "@/components/docs/DocAnatomy";
import Switch, { type SwitchSize, type SwitchSide } from "@/components/ui/Switch";

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

/* ═══════════════════════════════════════════════════
   TAB CONTENT
   ═══════════════════════════════════════════════════ */

function OverviewTab() {
  return (
    <>
      <DocSection title="Overview">
        <p className="mb-4">
          A switch is the digital equivalent of a physical toggle. It
          communicates and controls the state of a setting, feature, or
          preference in real time. Because the effect is immediate, switches
          should not be used in forms that require explicit submission.
        </p>
        <p>
          Use switches when the binary nature of the choice is clear and both
          states can be easily described. If the consequences of toggling are
          complex or irreversible, add a confirmation dialog.
        </p>
      </DocSection>

      <DocSection title="Anatomy">
        <DocAnatomy
          items={[
            {
              label: "Track",
              description:
                "The rounded, pill-shaped background that changes color between on and off states.",
            },
            {
              label: "Thumb",
              description:
                "The circular handle that slides between the left (off) and right (on) positions.",
            },
            {
              label: "Label",
              description:
                "Text next to the switch describing the setting. Clicking the label also toggles the switch.",
            },
            {
              label: "Description (optional)",
              description:
                "Secondary text below the label for additional context.",
            },
          ]}
        />
        <DocPreview title="Anatomy example">
          <div className="flex flex-col gap-4">
            <Switch size="md" label="Dark mode" />
            <Switch size="md" label="Notifications" description="Receive email and push notifications." defaultChecked />
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="Sizes">
        <DocTable
          headers={["Size", "Track dimensions", "Thumb size", "Use case"]}
          rows={[
            ["Small (sm)", "36×20px", "16px", "Table rows, compact settings."],
            ["Medium (md)", "44×24px", "20px", "Default for most settings pages."],
          ]}
        />
        <DocPreview title="Size comparison">
          <div className="flex flex-col gap-4">
            <Switch size="sm" label="Small switch" />
            <Switch size="md" label="Medium switch" />
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="States">
        <DocTable
          headers={["State", "Track appearance", "Behavior"]}
          rows={[
            ["Off", "Neutral/muted background (#d3d6cc)", "The feature or setting is inactive."],
            ["On", "Primary color background (#153014)", "The feature or setting is active."],
            ["Hover", "Slightly darker track", "Visual feedback indicating interactivity."],
            ["Focus", "Focus ring around the track", "Keyboard navigation indicator."],
            ["Disabled", "50% opacity on track and thumb", "The setting cannot be changed. Current state is preserved."],
          ]}
        />
        <DocPreview title="All states">
          <div className="flex flex-col gap-4">
            <Switch label="Off" />
            <Switch label="On" defaultChecked />
            <Switch label="Disabled off" disabled />
            <Switch label="Disabled on" defaultChecked disabled />
          </div>
        </DocPreview>
        <DocCallout variant="info" title="Focus state">
          Use Tab to focus a switch and Space to toggle. A focus ring appears
          around the track for keyboard users.
        </DocCallout>
      </DocSection>

      <DocSection title="Label position">
        <DocPreview title="Left / Right">
          <div className="flex flex-col gap-4">
            <Switch size="md" label="Label on left" side="left" />
            <Switch size="md" label="Label on right" side="right" />
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="Behavior">
        <p className="mb-4">
          Clicking or tapping the switch, or pressing Space while focused,
          toggles the state. The change takes effect immediately — there is no
          need to press a &quot;Save&quot; button. The thumb animates smoothly
          between positions to reinforce the state change.
        </p>
        <DocCallout variant="warning" title="Immediate effect">
          Because switches apply changes instantly, avoid using them in forms
          that require explicit submission. Use a checkbox instead when the
          change only applies after the user submits.
        </DocCallout>
      </DocSection>

      <DocSection title="Accessibility">
        <ul className="pl-5 mb-4">
          <li className="mb-2">
            Uses <code>role=&quot;switch&quot;</code> with <code>aria-checked</code> to communicate state.
          </li>
          <li className="mb-2">
            The label is associated via wrapping <code>&lt;label&gt;</code>.
          </li>
          <li className="mb-2">
            Space key toggles the switch; Enter does not submit a form.
          </li>
          <li className="mb-2">
            Thumb position provides a secondary cue — do not rely on color alone.
          </li>
          <li>
            Sufficient contrast between track and background in both states.
          </li>
        </ul>
      </DocSection>

      <DocSection title="Usage guidelines">
        <DoDontGrid
          doItems={[
            { description: "Use switches for settings that take effect immediately." },
            { description: "Write labels that describe the setting, not the action." },
            { description: "Place the label on the same side consistently across a group." },
            { description: "Add a confirmation step for high-impact or irreversible toggles." },
          ]}
          dontItems={[
            { description: "Don't use switches inside forms that require a submit button." },
            { description: "Don't use a switch when there are more than two states — use a select or radios." },
            { description: "Don't stack switches horizontally — use a vertical list." },
            { description: "Don't rely only on track color to communicate state." },
          ]}
        />
      </DocSection>
    </>
  );
}

function DesignTokensTab() {
  return (
    <>
      <DocSection title="Color Tokens — Off State">
        <TokenGroup title="Track">
          <ColorSwatch color="#d3d6cc" label="bg / neutral-300 (off track)" />
        </TokenGroup>
      </DocSection>

      <DocSection title="Color Tokens — On State">
        <TokenGroup title="Track">
          <ColorSwatch color="#153014" label="bg / fill / primary / default" />
        </TokenGroup>
      </DocSection>

      <DocSection title="Color Tokens — Thumb">
        <TokenGroup title="Thumb">
          <ColorSwatch color="#ffffff" label="white" />
          <ColorSwatch color="rgba(0,0,0,0.1)" label="shadow-sm" />
        </TokenGroup>
      </DocSection>

      <DocSection title="Color Tokens — Disabled State">
        <TokenGroup title="Container">
          <ColorSwatch color="rgba(0,0,0,0.5)" label="opacity-50 on track and thumb" />
        </TokenGroup>
      </DocSection>

      <DocSection title="Typography Tokens">
        <DocTable
          headers={["Element", "Size (md)", "Size (sm)", "Weight"]}
          rows={[
            ["Label", "Body/01 — 16px/24px", "Body/02 — 13px/16px", "400 (regular)"],
            ["Description", "Body/02 — 13px/16px", "Body/03 — 11px/12px", "400 (regular)"],
          ]}
        />
      </DocSection>

      <DocSection title="Spacing Tokens">
        <DocTable
          headers={["Property", "Token (md)", "Value (md)", "Token (sm)", "Value (sm)"]}
          rows={[
            ["Track width × height", "—", "44×24px", "—", "36×20px"],
            ["Track padding", "space-0.5", "2px", "space-0.5", "2px"],
            ["Gap (track to label)", "space-3", "12px", "space-2", "8px"],
          ]}
        />
      </DocSection>

      <DocSection title="Border & Radius">
        <DocTable
          headers={["Property", "Value"]}
          rows={[
            ["Track border radius", "9999px (pill / rounded-max)"],
            ["Thumb border radius", "9999px (circle)"],
            ["Transition", "transform 150ms ease, background 150ms ease"],
            ["Focus ring", "2px offset, primary color"],
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
          <div className="flex flex-col gap-4">
            <Switch size="sm" label="Small" />
            <Switch size="md" label="Medium" />
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="States — Off / On">
        <DocPreview title="Off and On">
          <div className="flex flex-col gap-4">
            <Switch label="Dark mode" />
            <Switch label="Notifications" defaultChecked />
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="States — Disabled">
        <DocPreview title="Disabled off / Disabled on">
          <div className="flex flex-col gap-4">
            <Switch label="Disabled" disabled />
            <Switch label="Disabled (on)" defaultChecked disabled />
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="With Description">
        <DocPreview title="Label + description">
          <div className="flex flex-col gap-4">
            <Switch
              size="md"
              label="Email notifications"
              description="Receive updates about your account."
              defaultChecked
            />
            <Switch
              size="md"
              label="Marketing emails"
              description="News, tips, and product updates."
            />
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="Label Position">
        <DocPreview title="Left / Right">
          <div className="flex flex-col gap-4">
            <Switch label="Label left" side="left" />
            <Switch label="Label right" side="right" />
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="In Context — Settings Panel">
        <DocPreview title="Notification settings">
          <div className="flex flex-col gap-4" style={{ maxWidth: 360 }}>
            <Switch label="Push notifications" defaultChecked />
            <Switch label="Email notifications" description="Receive updates via email." defaultChecked />
            <Switch label="SMS reminders" description="Text reminders for appointments." />
          </div>
        </DocPreview>
      </DocSection>
    </>
  );
}

function PropertiesTab() {
  const [size, setSize] = useState<SwitchSize>("md");
  const [side, setSide] = useState<SwitchSide>("left");
  const [showLabel, setShowLabel] = useState(true);
  const [showDescription, setShowDescription] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [labelText, setLabelText] = useState("Label");

  const codeSnippet = `<Switch
  size="${size}"
  side="${side}"${showLabel ? `\n  label="${labelText}"` : ""}${showDescription ? '\n  description="Optional description text."' : ""}${isChecked ? "\n  defaultChecked" : ""}${isDisabled ? "\n  disabled" : ""}
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
              <Switch
                size={size}
                side={side}
                label={showLabel ? labelText : undefined}
                description={showDescription ? "Optional description text." : undefined}
                checked={isChecked}
                onChange={setIsChecked}
                disabled={isDisabled}
              />
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
              label="Side"
              options={[
                { value: "left", label: "Left" },
                { value: "right", label: "Right" },
              ]}
              value={side}
              onChange={setSide}
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

            <Toggle label="Show label" checked={showLabel} onChange={setShowLabel} />
            <Toggle label="Description" checked={showDescription} onChange={setShowDescription} />
            <Toggle label="Checked" checked={isChecked} onChange={setIsChecked} />
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
            ["size", '"md" | "sm"', '"md"', "Size variant — affects track and thumb dimensions."],
            ["side", '"left" | "right"', '"left"', "Label position relative to the track."],
            ["label", "string", "undefined", "Label text displayed next to the switch."],
            ["description", "string", "undefined", "Optional description text below the label."],
            ["checked", "boolean", "undefined", "Controlled checked state."],
            ["defaultChecked", "boolean", "false", "Initial checked state for uncontrolled usage."],
            ["onChange", "(checked: boolean) => void", "undefined", "Callback fired when the switch is toggled."],
            ["disabled", "boolean", "false", "Disables the switch and prevents interaction."],
            ["className", "string", "undefined", "Additional CSS classes on the root label."],
          ]}
        />
      </DocSection>

      <DocSection title="Code Examples">
        <DocPreview title="Basic switch">
          <Switch label="Dark mode" />
        </DocPreview>
        <pre className="mb-6 p-4 rounded-md bg-neutral-900 text-neutral-100 text-body-02 overflow-x-auto">
          <code>{`<Switch label="Dark mode" />`}</code>
        </pre>

        <DocPreview title="Controlled switch">
          <Switch label="Notifications" checked={true} onChange={() => {}} />
        </DocPreview>
        <pre className="mb-6 p-4 rounded-md bg-neutral-900 text-neutral-100 text-body-02 overflow-x-auto">
          <code>{`const [enabled, setEnabled] = useState(false);

<Switch
  label="Notifications"
  checked={enabled}
  onChange={setEnabled}
/>`}</code>
        </pre>

        <DocPreview title="With description">
          <div>
            <Switch
              label="Email notifications"
              description="Receive updates about your account."
              defaultChecked
            />
          </div>
        </DocPreview>
        <pre className="mb-6 p-4 rounded-md bg-neutral-900 text-neutral-100 text-body-02 overflow-x-auto">
          <code>{`<Switch
  label="Email notifications"
  description="Receive updates about your account."
  defaultChecked
/>`}</code>
        </pre>
      </DocSection>
    </>
  );
}

/* ═══════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════ */

export default function SwitchPage() {
  const [activeTab, setActiveTab] = useState<TabName>("Overview");

  return (
    <div className="col-span-2 flex flex-col">
      <DocHeader
        title="Switch"
        description="Switches toggle a single setting between on and off, taking effect immediately without requiring a form submission."
      />

      <TabBar active={activeTab} onChange={setActiveTab} />

      {activeTab === "Overview" && <OverviewTab />}
      {activeTab === "Design Tokens" && <DesignTokensTab />}
      {activeTab === "Styles" && <StylesTab />}
      {activeTab === "Properties" && <PropertiesTab />}
    </div>
  );
}
