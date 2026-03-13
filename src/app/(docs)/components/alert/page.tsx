"use client";

import { useState, type ReactNode } from "react";
import DocHeader from "@/components/docs/DocHeader";
import DocSection from "@/components/docs/DocSection";
import DocTable from "@/components/docs/DocTable";
import DocCallout from "@/components/docs/DocCallout";
import DoDontGrid from "@/components/docs/DoDontGrid";
import DocPreview from "@/components/docs/DocPreview";
import DocAnatomy from "@/components/docs/DocAnatomy";
import Alert, { type AlertType, type AlertSize } from "@/components/ui/Alert";

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

function OverviewTab() {
  return (
    <>
      <DocSection title="Overview">
        <p className="mb-4">
          Alerts communicate status, feedback, or important information to users
          through contextual, color-coded banners.
        </p>
        <p>
          They appear inline within the page content and persist until the user
          acknowledges them. Use alerts for information that requires attention
          but does not block the user from continuing.
        </p>
      </DocSection>

      <DocSection title="Anatomy">
        <DocAnatomy
          items={[
            {
              label: "Container",
              description: "Rounded bordered surface with a type-specific background color. Houses all alert elements.",
            },
            {
              label: "Icon",
              description: "A leading status icon that reinforces the alert type (neutral, success, info, warning, danger).",
            },
            {
              label: "Heading",
              description: "Bold heading text that summarizes the alert. Can be hidden via showHeading prop.",
            },
            {
              label: "Description",
              description: "Supporting text that provides additional context or instructions.",
            },
            {
              label: "Action button",
              description: "An optional underlined link-style button for a follow-up action.",
            },
          ]}
        />
        <DocPreview title="Anatomy example (md)">
          <div className="w-full max-w-md">
            <Alert type="neutral" size="md" heading="Heading" description="Description text providing extra context." buttonLabel="Button" />
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="Types">
        <DocTable
          headers={["Type", "Purpose", "When to use"]}
          rows={[
            ["Neutral", "General or low-priority information", "Tips, disclaimers, or non-urgent notices."],
            ["Success", "Confirmation of a completed action", "Form submitted, record saved, operation completed."],
            ["Info", "Neutral information or tips", "Feature announcements, helpful hints, general updates."],
            ["Warning", "Potential issue that doesn't block the user", "Deprecation notices, connection issues, upcoming changes."],
            ["Danger", "Error or critical issue requiring attention", "Validation errors, failed operations, security warnings."],
          ]}
        />
        {(["neutral", "success", "info", "warning", "danger"] as AlertType[]).map((t) => (
          <DocPreview key={t} title={t.charAt(0).toUpperCase() + t.slice(1)}>
            <div className="w-full max-w-md">
              <Alert type={t} size="md" heading={`${t.charAt(0).toUpperCase() + t.slice(1)} alert`} description="Supporting description with more details." />
            </div>
          </DocPreview>
        ))}
      </DocSection>

      <DocSection title="Sizes">
        <DocTable
          headers={["Size", "Height", "Heading", "Description", "Icon", "Padding"]}
          rows={[
            ["Medium (md)", "64px", "Body/01 Medium (16px / 24px / 500)", "Body/02 Regular (13px / 16px / 400)", "24×24px", "12px (space-3)"],
            ["Small (sm)", "44px", "Body/02 Medium (13px / 16px / 500)", "Body/03 Regular (11px / 12px / 400)", "20×20px", "8px (space-2)"],
          ]}
        />
        <DocPreview title="Medium (md)">
          <div className="w-full max-w-md">
            <Alert type="info" size="md" heading="Medium alert" description="Body/01 heading, Body/02 description, 24px icon." />
          </div>
        </DocPreview>
        <DocPreview title="Small (sm)">
          <div className="w-full max-w-md">
            <Alert type="info" size="sm" heading="Small alert" description="Body/02 heading, Body/03 description, 20px icon." />
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="Optional elements">
        <p className="mb-4">
          Each sub-element can be toggled independently via boolean props:
          <code>showIcon</code>, <code>showHeading</code>, <code>showDescription</code>, <code>showButton</code>.
        </p>
        <DocPreview title="Heading only (no description, no button)">
          <div className="w-full max-w-md">
            <Alert type="warning" heading="Session expiring soon" showDescription={false} showButton={false} />
          </div>
        </DocPreview>
        <DocPreview title="Description only (no heading)">
          <div className="w-full max-w-md">
            <Alert type="success" showHeading={false} description="Your changes have been saved successfully." showButton={false} />
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="Behavior">
        <DocCallout variant="info" title="Alerts vs Toasts">
          Alerts are persistent and inline — they remain until dismissed or resolved.
          Toasts are temporary and float above content. Use alerts when the message
          must persist; use toasts for transient feedback.
        </DocCallout>
        <p className="mb-4">
          Alerts appear inline within the page content. They persist until the user
          acknowledges or the condition is resolved. Do not auto-dismiss alerts.
        </p>
        <p>
          When an alert includes an action button, limit to one primary action to
          avoid overwhelming the user.
        </p>
      </DocSection>

      <DocSection title="Accessibility">
        <ul className="pl-5 mb-4">
          <li className="mb-2">
            Uses <code>role=&quot;alert&quot;</code> for screen reader announcements.
          </li>
          <li className="mb-2">
            Icons use <code>aria-hidden=&quot;true&quot;</code> — meaning is conveyed by text, not color or icon alone.
          </li>
          <li className="mb-2">
            Don&apos;t rely on color alone to convey meaning. Pair color with icon and text.
          </li>
          <li>
            Ensure sufficient color contrast between text and background for each variant.
          </li>
        </ul>
      </DocSection>

      <DocSection title="Usage guidelines">
        <DoDontGrid
          doItems={[
            { description: "Use the correct type for the message severity." },
            { description: "Include a clear, actionable heading and supporting description." },
            { description: "Place alerts near the relevant content (e.g., above a form)." },
            { description: "Keep the heading short (one line) and the description concise." },
          ]}
          dontItems={[
            { description: "Don't use danger for non-critical information." },
            { description: "Don't stack multiple alerts — consolidate related messages." },
            { description: "Don't auto-dismiss alerts; that behavior is for toasts." },
            { description: "Don't rely on color alone; use icon and text as well." },
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
          <ColorSwatch color="#f1f2ec" label="bg / surface / neutral / default" />
          <ColorSwatch color="#b7bbaf" label="border / neutral / default" />
          <ColorSwatch color="#1c1f1b" label="text / neutral / default" />
        </TokenGroup>
        <TokenGroup title="Success">
          <ColorSwatch color="#f2faf5" label="bg / surface / success / default" />
          <ColorSwatch color="#94d7ad" label="border / success / default" />
          <ColorSwatch color="#287d4a" label="text / success / default" />
        </TokenGroup>
        <TokenGroup title="Info">
          <ColorSwatch color="#f3f7fb" label="bg / surface / information / default" />
          <ColorSwatch color="#adc2dd" label="border / information / default" />
          <ColorSwatch color="#4e6d92" label="text / information / default" />
        </TokenGroup>
        <TokenGroup title="Warning">
          <ColorSwatch color="#fff8ee" label="bg / surface / warning / default" />
          <ColorSwatch color="#eec67c" label="border / warning / default" />
          <ColorSwatch color="#925f18" label="text / warning / default" />
        </TokenGroup>
        <TokenGroup title="Danger">
          <ColorSwatch color="#fff4f3" label="bg / surface / danger / default" />
          <ColorSwatch color="#eb978c" label="border / danger / default" />
          <ColorSwatch color="#903328" label="text / danger / default" />
        </TokenGroup>
      </DocSection>

      <DocSection title="Typography Tokens">
        <DocTable
          headers={["Element", "Token (md)", "Token (sm)", "Weight"]}
          rows={[
            ["Heading", "Body/01/Medium — 16px / 24px", "Body/02/Medium — 13px / 16px", "500 (medium)"],
            ["Description", "Body/02/Regular — 13px / 16px", "Body/03/Regular — 11px / 12px", "400 (regular)"],
            ["Button", "Body/02/Underlined — 13px / 16px", "Body/02/Underlined — 13px / 16px", "500 (medium, underline)"],
          ]}
        />
        <DocCallout variant="info" title="Font family">
          All alert text uses <code>Suisse Intl Trial</code> via the <code>font/family/default</code> token.
        </DocCallout>
      </DocSection>

      <DocSection title="Spacing Tokens">
        <DocTable
          headers={["Property", "Token (md)", "Value (md)", "Token (sm)", "Value (sm)"]}
          rows={[
            ["Container padding", "spacing/space-3", "12px", "spacing/space-2", "8px"],
            ["Inner gap", "spacing/space-3", "12px", "spacing/space-2", "8px"],
          ]}
        />
      </DocSection>

      <DocSection title="Border & Radius">
        <DocTable
          headers={["Property", "Value"]}
          rows={[
            ["Border width", "1px solid"],
            ["Border radius", "border-radius/sm → 8px"],
          ]}
        />
      </DocSection>

      <DocSection title="Icon Sizes">
        <DocTable
          headers={["Size", "Icon dimensions"]}
          rows={[
            ["md", "24×24px"],
            ["sm", "20×20px"],
          ]}
        />
      </DocSection>
    </>
  );
}

function StylesTab() {
  const types: AlertType[] = ["neutral", "success", "info", "warning", "danger"];

  return (
    <>
      <DocSection title="All Types — Medium (md)">
        {types.map((t) => (
          <DocPreview key={t} title={t.charAt(0).toUpperCase() + t.slice(1)}>
            <div className="w-full max-w-md">
              <Alert type={t} size="md" heading={`${t.charAt(0).toUpperCase() + t.slice(1)} heading`} description="Supporting description text." />
            </div>
          </DocPreview>
        ))}
      </DocSection>

      <DocSection title="All Types — Small (sm)">
        {types.map((t) => (
          <DocPreview key={t} title={`${t.charAt(0).toUpperCase() + t.slice(1)} (sm)`}>
            <div className="w-full max-w-md">
              <Alert type={t} size="sm" heading={`${t.charAt(0).toUpperCase() + t.slice(1)} heading`} description="Compact description." />
            </div>
          </DocPreview>
        ))}
      </DocSection>

      <DocSection title="Optional Element Combinations">
        <DocPreview title="Heading + Description + Button (full)">
          <div className="w-full max-w-md">
            <Alert type="info" heading="Full alert" description="All elements visible." buttonLabel="Action" />
          </div>
        </DocPreview>
        <DocPreview title="Heading only">
          <div className="w-full max-w-md">
            <Alert type="success" heading="Changes saved" showDescription={false} showButton={false} />
          </div>
        </DocPreview>
        <DocPreview title="Description only">
          <div className="w-full max-w-md">
            <Alert type="warning" showHeading={false} description="Your session will expire in 5 minutes." showButton={false} />
          </div>
        </DocPreview>
        <DocPreview title="No icon">
          <div className="w-full max-w-md">
            <Alert type="danger" heading="Error" description="Something went wrong." showIcon={false} />
          </div>
        </DocPreview>
        <DocPreview title="No button">
          <div className="w-full max-w-md">
            <Alert type="neutral" heading="Note" description="This is informational." showButton={false} />
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="Size Comparison">
        <DocPreview title="Medium vs Small side by side">
          <div className="w-full max-w-md space-y-3">
            <Alert type="info" size="md" heading="Medium alert" description="Body/01 heading + Body/02 description." />
            <Alert type="info" size="sm" heading="Small alert" description="Body/02 heading + Body/03 description." />
          </div>
        </DocPreview>
      </DocSection>
    </>
  );
}

function PropertiesTab() {
  const [type, setType] = useState<AlertType>("neutral");
  const [size, setSize] = useState<AlertSize>("md");
  const [showIcon, setShowIcon] = useState(true);
  const [showHeading, setShowHeading] = useState(true);
  const [showDescription, setShowDescription] = useState(true);
  const [showButton, setShowButton] = useState(true);
  const [heading, setHeading] = useState("Alert heading");
  const [description, setDescription] = useState("Supporting description with details.");

  const codeSnippet = `<Alert
  type="${type}"
  size="${size}"
  heading="${heading}"
  description="${description}"${!showIcon ? "\n  showIcon={false}" : ""}${!showHeading ? "\n  showHeading={false}" : ""}${!showDescription ? "\n  showDescription={false}" : ""}${!showButton ? "\n  showButton={false}" : ""}
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
              <div className="w-full max-w-md">
                <Alert
                  type={type}
                  size={size}
                  heading={heading}
                  description={description}
                  showIcon={showIcon}
                  showHeading={showHeading}
                  showDescription={showDescription}
                  showButton={showButton}
                />
              </div>
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
              <p className="text-body-03 font-medium text-text-neutral-secondary mb-2">Heading</p>
              <input
                type="text"
                value={heading}
                onChange={(e) => setHeading(e.target.value)}
                className="w-full px-3 py-1.5 text-body-02 border border-border-neutral-default rounded-md bg-white focus:outline-none focus:shadow-focus"
              />
            </div>

            <div className="mb-4">
              <p className="text-body-03 font-medium text-text-neutral-secondary mb-2">Description</p>
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-3 py-1.5 text-body-02 border border-border-neutral-default rounded-md bg-white focus:outline-none focus:shadow-focus"
              />
            </div>

            <Toggle label="Show icon" checked={showIcon} onChange={setShowIcon} />
            <Toggle label="Show heading" checked={showHeading} onChange={setShowHeading} />
            <Toggle label="Show description" checked={showDescription} onChange={setShowDescription} />
            <Toggle label="Show button" checked={showButton} onChange={setShowButton} />
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
            ["type", '"neutral" | "success" | "info" | "warning" | "danger"', '"neutral"', "Semantic color variant."],
            ["size", '"sm" | "md"', '"md"', "Size variant — affects padding, typography, and icon size."],
            ["heading", "string", '"Heading"', "Heading text."],
            ["description", "string", '"Description"', "Description text."],
            ["showIcon", "boolean", "true", "Toggle the leading icon."],
            ["showHeading", "boolean", "true", "Toggle the heading text."],
            ["showDescription", "boolean", "true", "Toggle the description text."],
            ["showButton", "boolean", "true", "Toggle the action button."],
            ["buttonLabel", "string", '"Button"', "Label for the action button."],
            ["onButtonClick", "() => void", "undefined", "Callback when action button is clicked."],
            ["icon", "ReactNode", "undefined", "Custom icon override."],
            ["className", "string", "undefined", "Additional CSS classes."],
          ]}
        />
      </DocSection>

      <DocSection title="Code Examples">
        <DocPreview title="Success confirmation">
          <div className="w-full max-w-md">
            <Alert type="success" heading="Payment received" description="A receipt was sent to your email." buttonLabel="View receipt" />
          </div>
        </DocPreview>
        <pre className="mb-6 p-4 rounded-md bg-neutral-900 text-neutral-100 text-body-02 overflow-x-auto">
          <code>{`<Alert
  type="success"
  heading="Payment received"
  description="A receipt was sent to your email."
  buttonLabel="View receipt"
/>`}</code>
        </pre>

        <DocPreview title="Danger error">
          <div className="w-full max-w-md">
            <Alert type="danger" heading="Unable to save" description="Check your connection and try again." showButton={false} />
          </div>
        </DocPreview>
        <pre className="mb-6 p-4 rounded-md bg-neutral-900 text-neutral-100 text-body-02 overflow-x-auto">
          <code>{`<Alert
  type="danger"
  heading="Unable to save"
  description="Check your connection and try again."
  showButton={false}
/>`}</code>
        </pre>

        <DocPreview title="Compact small warning">
          <div className="w-full max-w-md">
            <Alert type="warning" size="sm" heading="Session expiring" showDescription={false} showButton={false} />
          </div>
        </DocPreview>
        <pre className="mb-6 p-4 rounded-md bg-neutral-900 text-neutral-100 text-body-02 overflow-x-auto">
          <code>{`<Alert type="warning" size="sm" heading="Session expiring" showDescription={false} showButton={false} />`}</code>
        </pre>
      </DocSection>

      <DocSection title="Validation & Constraints">
        <DocTable
          headers={["Rule", "Details"]}
          rows={[
            ["At least one text element", "showHeading or showDescription should be true — an alert with no text is meaningless."],
            ["Use role=\"alert\"", "The component uses role=\"alert\" for assistive technology. Critical errors are announced immediately."],
            ["Match type to severity", "Don't use danger for informational messages."],
            ["One action per alert", "Limit to a single action button to maintain focus."],
            ["Don't auto-dismiss", "Alerts are persistent; use Toast for transient feedback."],
          ]}
        />
      </DocSection>
    </>
  );
}

/* ═══════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════ */

export default function AlertPage() {
  const [activeTab, setActiveTab] = useState<TabName>("Overview");

  return (
    <div className="col-span-2 flex flex-col">
      <DocHeader
        title="Alert"
        description="Alerts communicate status, feedback, or important information to users through contextual, color-coded banners."
      />

      <TabBar active={activeTab} onChange={setActiveTab} />

      {activeTab === "Overview" && <OverviewTab />}
      {activeTab === "Design Tokens" && <DesignTokensTab />}
      {activeTab === "Styles" && <StylesTab />}
      {activeTab === "Properties" && <PropertiesTab />}
    </div>
  );
}
