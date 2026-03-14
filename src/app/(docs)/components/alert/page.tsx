"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import DocHeader from "@/components/docs/DocHeader";
import DocSection from "@/components/docs/DocSection";
import DocTable from "@/components/docs/DocTable";
import DoDontGrid from "@/components/docs/DoDontGrid";
import DocPreview from "@/components/docs/DocPreview";
import DocAnatomy from "@/components/docs/DocAnatomy";
import Alert, { type AlertType, type AlertSize } from "@/components/ui/Alert";

/* ─── Tabs ─── */
const TABS = ["Overview", "Design Tokens", "Styles", "Properties"] as const;
type TabName = (typeof TABS)[number];

function TabBar({
  active,
  onChange,
}: {
  active: TabName;
  onChange: (t: TabName) => void;
}) {
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
      <div
        className="size-12 rounded-sm border border-border-neutral-default shrink-0"
        style={{ backgroundColor: color }}
      />
      <div>
        <p className="text-body-02 font-medium">{label}</p>
        <p className="text-body-03 text-text-neutral-placeholder">{color}</p>
      </div>
    </div>
  );
}

function TokenGroup({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="mb-6">
      <h4 className="text-body-02 font-medium text-text-neutral-secondary mb-3">
        {title}
      </h4>
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
      <p className="text-body-03 font-medium text-text-neutral-secondary mb-2">
        {label}
      </p>
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
        className={`relative w-9 h-5 rounded-full transition-colors ${checked ? "bg-primary-900" : "bg-neutral-300"}`}
      >
        <div
          className={`absolute top-0.5 left-0.5 size-4 rounded-full bg-white transition-transform ${checked ? "translate-x-4" : ""}`}
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
      <div className="col-start-1">
        <DocSection title="Overview">
          <p className="mb-4">
            Alerts communicate status, feedback, or important information to
            users through contextual, color-coded banners.
          </p>
          <p>
            They appear inline within the page content and persist until the
            user acknowledges them. Use alerts for information that requires
            attention but does not block the user from continuing.
          </p>
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Anatomy">
          <div className="grid grid-cols-2 gap-x-10 mb-6">
            <div>
              <DocAnatomy
                items={[
                  {
                    label: "Container",
                    description:
                      "Rounded bordered surface with a type-specific background color. Houses all alert elements.",
                  },
                  {
                    label: "Icon",
                    description:
                      "A leading status icon that reinforces the alert type (neutral, success, info, warning, danger).",
                  },
                  {
                    label: "Heading",
                    description:
                      "Bold heading text that summarizes the alert. Can be hidden via showHeading prop.",
                  },
                  {
                    label: "Description",
                    description:
                      "Supporting text that provides additional context or instructions.",
                  },
                  {
                    label: "Action button",
                    description:
                      "An optional underlined link-style button for a follow-up action.",
                  },
                ]}
              />
            </div>
          </div>
          <div
            className="overflow-hidden flex w-full items-start justify-center"
            style={{ backgroundColor: "#FFFFFF", padding: "200px" }}
          >
            <Image
              src="/images/alert-anatomy.webp"
              alt="Alert anatomy showing container, icon, heading, description, and action button"
              width={610}
              height={200}
            />
          </div>
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Types" hideTitle>
          <DocTable
            variant="surface"
            headers={["Type", "Purpose", "When to use"]}
            rows={[
              [
                "Neutral",
                "General or low-priority information",
                "Tips, disclaimers, or non-urgent notices.",
              ],
              [
                "Success",
                "Confirmation of a completed action",
                "Form submitted, record saved, operation completed.",
              ],
              [
                "Info",
                "Neutral information or tips",
                "Feature announcements, helpful hints, general updates.",
              ],
              [
                "Warning",
                "Potential issue that doesn't block the user",
                "Deprecation notices, connection issues, upcoming changes.",
              ],
              [
                "Danger",
                "Error or critical issue requiring attention",
                "Validation errors, failed operations, security warnings.",
              ],
            ]}
          />
          <div className="grid grid-cols-2 gap-10 items-stretch mt-6">
            {(
              ["neutral", "success", "info", "warning", "danger"] as AlertType[]
            ).map((t) => (
              <DocPreview
                key={t}
                rounded={false}
                border={false}
                verticalPaddingOnly
                aspectSquare
                className="h-full min-h-0"
              >
                <div className="w-full max-w-md">
                  <Alert
                    type={t}
                    size="md"
                    heading={`${t.charAt(0).toUpperCase() + t.slice(1)} alert`}
                    description="Supporting description with more details."
                  />
                </div>
              </DocPreview>
            ))}
          </div>
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Default Icon Mapping">
          <DocTable
            variant="surface"
            headers={["Type", "Shared icon", "Notes"]}
            rows={[
              [
                "Neutral",
                '"circle-alert"',
                "Used for general notices and low-priority information.",
              ],
              [
                "Success",
                '"check"',
                "Used for confirmations and completed actions.",
              ],
              [
                "Info",
                '"circle-alert"',
                "Used for informational guidance and product updates.",
              ],
              [
                "Warning",
                '"triangle-alert"',
                "Used for caution states and non-blocking issues.",
              ],
              [
                "Danger",
                '"circle-x"',
                "Used for errors and critical states that need attention.",
              ],
            ]}
          />
          <p className="mt-4 mb-4">
            Alert now uses the shared <code>Icon</code> component for its
            default status icon, which keeps sizing and stroke behavior
            consistent with the rest of the system.
          </p>
          <div
            className="overflow-hidden flex w-full items-start justify-center"
            style={{ backgroundColor: "#FFFFFF", padding: "200px" }}
          >
            <Image
              src="/images/alert-spacing.webp"
              alt="Alert spacing diagram showing internal spacing and layout relationships"
              width={610}
              height={200}
            />
          </div>
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Sizes" hideTitle>
          <DocTable
            variant="surface"
            headers={[
              "Size",
              "Height",
              "Heading",
              "Description",
              "Icon",
              "Padding",
            ]}
            rows={[
              [
                "Medium (md)",
                "64px",
                "Body/01 Medium (16px / 24px / 500)",
                "Body/02 Regular (13px / 16px / 400)",
                "24×24px",
                "12px (space-3)",
              ],
              [
                "Small (sm)",
                "44px",
                "Body/02 Medium (13px / 16px / 500)",
                "Body/03 Regular (11px / 12px / 400)",
                "20×20px",
                "8px (space-2)",
              ],
            ]}
          />
          <div className="grid grid-cols-2 gap-10 items-stretch">
            <DocPreview
              rounded={false}
              border={false}
              verticalPaddingOnly
              aspectSquare
              className="h-full min-h-0"
            >
              <div className="w-full max-w-md">
                <Alert
                  type="info"
                  size="md"
                  heading="Medium alert"
                  description="Body/01 heading, Body/02 description, 24px icon."
                />
              </div>
            </DocPreview>
            <DocPreview
              rounded={false}
              border={false}
              verticalPaddingOnly
              aspectSquare
              className="h-full min-h-0"
            >
              <div className="w-full max-w-md">
                <Alert
                  type="info"
                  size="sm"
                  heading="Small alert"
                  description="Body/02 heading, Body/03 description, 20px icon."
                />
              </div>
            </DocPreview>
          </div>
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Optional elements">
          <p className="mb-4">
            Each sub-element can be toggled independently via boolean props:
            <code>showIcon</code>, <code>showHeading</code>,{" "}
            <code>showDescription</code>, <code>showButton</code>.
          </p>
          <div className="grid grid-cols-2 gap-10 items-stretch">
            <DocPreview
              rounded={false}
              border={false}
              verticalPaddingOnly
              aspectSquare
              className="h-full min-h-0"
            >
              <div className="w-full max-w-md">
                <Alert
                  type="warning"
                  heading="Session expiring soon"
                  showDescription={false}
                  showButton={false}
                />
              </div>
            </DocPreview>
            <DocPreview
              rounded={false}
              border={false}
              verticalPaddingOnly
              aspectSquare
              className="h-full min-h-0"
            >
              <div className="w-full max-w-md">
                <Alert
                  type="success"
                  showHeading={false}
                  description="Your changes have been saved successfully."
                  showButton={false}
                />
              </div>
            </DocPreview>
          </div>
        </DocSection>
      </div>

      <DocSection title="Behavior">
        <p className="mb-4">
          Alerts appear inline within the page content. They persist until the
          user acknowledges or the condition is resolved. Do not auto-dismiss
          alerts.
        </p>
        <p>
          When an alert includes an action button, limit to one primary action
          to avoid overwhelming the user.
        </p>
      </DocSection>

      <DocSection title="Accessibility">
        <ul className="pl-5 mb-4 text-body-01 font-regular text-text-neutral-secondary">
          <li className="mb-2">
            Uses <code>role=&quot;alert&quot;</code> for screen reader
            announcements.
          </li>
          <li className="mb-2">
            Icons use <code>aria-hidden=&quot;true&quot;</code> — meaning is
            conveyed by text, not color or icon alone.
          </li>
          <li className="mb-2">
            Don&apos;t rely on color alone to convey meaning. Pair color with
            icon and text.
          </li>
          <li>
            Ensure sufficient color contrast between text and background for
            each variant.
          </li>
        </ul>
      </DocSection>

      <div className="col-span-2">
        <DocSection title="Usage guidelines">
          <div
            className="overflow-hidden flex flex-row gap-10 w-full items-start justify-between"
            style={{ backgroundColor: "#FFFFFF", padding: "200px" }}
          >
            <DoDontGrid
              doItems={[
                {
                  description: "Use the correct type for the message severity.",
                },
                {
                  description:
                    "Include a clear, actionable heading and supporting description.",
                },
                {
                  description:
                    "Place alerts near the relevant content (e.g., above a form).",
                },
                {
                  description:
                    "Keep the heading short (one line) and the description concise.",
                },
              ]}
              dontItems={[
                {
                  description: "Don't use danger for non-critical information.",
                },
                {
                  description:
                    "Don't stack multiple alerts — consolidate related messages.",
                },
                {
                  description:
                    "Don't auto-dismiss alerts; that behavior is for toasts.",
                },
                {
                  description:
                    "Don't rely on color alone; use icon and text as well.",
                },
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
        <DocSection title="Color Tokens per Type">
          <TokenGroup title="Neutral">
            <ColorSwatch
              color="#F1F2EC"
              label="bg / surface / neutral / default"
            />
            <ColorSwatch color="#B7BBAF" label="border / neutral / default" />
            <ColorSwatch color="#1C1F1B" label="text / neutral / default" />
          </TokenGroup>
          <TokenGroup title="Success">
            <ColorSwatch
              color="#F2FAF5"
              label="bg / surface / success / default"
            />
            <ColorSwatch color="#94D7AD" label="border / success / default" />
            <ColorSwatch color="#287D4A" label="text / success / default" />
          </TokenGroup>
          <TokenGroup title="Info">
            <ColorSwatch
              color="#F3F7FB"
              label="bg / surface / information / default"
            />
            <ColorSwatch
              color="#ADC2DD"
              label="border / information / default"
            />
            <ColorSwatch color="#4E6D92" label="text / information / default" />
          </TokenGroup>
          <TokenGroup title="Warning">
            <ColorSwatch
              color="#FFF8EE"
              label="bg / surface / warning / default"
            />
            <ColorSwatch color="#EEC67C" label="border / warning / default" />
            <ColorSwatch color="#925F18" label="text / warning / default" />
          </TokenGroup>
          <TokenGroup title="Danger">
            <ColorSwatch
              color="#FFF4F3"
              label="bg / surface / danger / default"
            />
            <ColorSwatch color="#EB978C" label="border / danger / default" />
            <ColorSwatch color="#903328" label="text / danger / default" />
          </TokenGroup>
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Typography Tokens" hideTitle>
          <DocTable
            variant="surface"
            headers={["Element", "Token (md)", "Token (sm)", "Weight"]}
            rows={[
              [
                "Heading",
                "Body/01/Medium — 16px / 24px",
                "Body/02/Medium — 13px / 16px",
                "500 (medium)",
              ],
              [
                "Description",
                "Body/02/Regular — 13px / 16px",
                "Body/03/Regular — 11px / 12px",
                "400 (regular)",
              ],
              [
                "Button",
                "Body/02/Underlined — 13px / 16px",
                "Body/02/Underlined — 13px / 16px",
                "500 (medium, underline)",
              ],
            ]}
          />
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Spacing Tokens" hideTitle>
          <DocTable
            variant="surface"
            headers={[
              "Property",
              "Token (md)",
              "Value (md)",
              "Token (sm)",
              "Value (sm)",
            ]}
            rows={[
              [
                "Container padding",
                "spacing/space-3",
                "12px",
                "spacing/space-2",
                "8px",
              ],
              [
                "Inner gap",
                "spacing/space-3",
                "12px",
                "spacing/space-2",
                "8px",
              ],
            ]}
          />
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Border & Radius" hideTitle>
          <DocTable
            variant="surface"
            headers={["Property", "Value"]}
            rows={[
              ["Border width", "1px solid"],
              ["Border radius", "border-radius/sm → 8px"],
            ]}
          />
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Icon Sizes" hideTitle>
          <DocTable
            variant="surface"
            headers={["Size", "Icon dimensions"]}
            rows={[
              ["md", "24×24px"],
              ["sm", "20×20px"],
            ]}
          />
        </DocSection>
      </div>
    </>
  );
}

function StylesTab() {
  const types: AlertType[] = [
    "neutral",
    "success",
    "info",
    "warning",
    "danger",
  ];

  return (
    <>
      <div className="col-span-2">
        <DocSection title="All Types — Medium (md)">
          <div className="grid grid-cols-2 gap-10 items-stretch">
            {types.map((t) => (
              <DocPreview
                key={t}
                rounded={false}
                border={false}
                verticalPaddingOnly
                aspectSquare
                className="h-full min-h-0"
              >
                <div className="w-full max-w-md">
                  <Alert
                    type={t}
                    size="md"
                    heading={`${t.charAt(0).toUpperCase() + t.slice(1)} heading`}
                    description="Supporting description text."
                  />
                </div>
              </DocPreview>
            ))}
          </div>
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="All Types — Small (sm)">
          <div className="grid grid-cols-2 gap-10 items-stretch">
            {types.map((t) => (
              <DocPreview
                key={t}
                rounded={false}
                border={false}
                verticalPaddingOnly
                aspectSquare
                className="h-full min-h-0"
              >
                <div className="w-full max-w-md">
                  <Alert
                    type={t}
                    size="sm"
                    heading={`${t.charAt(0).toUpperCase() + t.slice(1)} heading`}
                    description="Compact description."
                  />
                </div>
              </DocPreview>
            ))}
          </div>
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Optional Element Combinations">
          <div className="grid grid-cols-2 gap-10 items-stretch">
            <DocPreview
              rounded={false}
              border={false}
              verticalPaddingOnly
              aspectSquare
              className="h-full min-h-0"
            >
              <div className="w-full max-w-md">
                <Alert
                  type="info"
                  heading="Full alert"
                  description="All elements visible."
                  buttonLabel="Action"
                />
              </div>
            </DocPreview>
            <DocPreview
              rounded={false}
              border={false}
              verticalPaddingOnly
              aspectSquare
              className="h-full min-h-0"
            >
              <div className="w-full max-w-md">
                <Alert
                  type="success"
                  heading="Changes saved"
                  showDescription={false}
                  showButton={false}
                />
              </div>
            </DocPreview>
            <DocPreview
              rounded={false}
              border={false}
              verticalPaddingOnly
              aspectSquare
              className="h-full min-h-0"
            >
              <div className="w-full max-w-md">
                <Alert
                  type="warning"
                  showHeading={false}
                  description="Your session will expire in 5 minutes."
                  showButton={false}
                />
              </div>
            </DocPreview>
            <DocPreview
              rounded={false}
              border={false}
              verticalPaddingOnly
              aspectSquare
              className="h-full min-h-0"
            >
              <div className="w-full max-w-md">
                <Alert
                  type="danger"
                  heading="Error"
                  description="Something went wrong."
                  showIcon={false}
                />
              </div>
            </DocPreview>
            <DocPreview
              rounded={false}
              border={false}
              verticalPaddingOnly
              aspectSquare
              className="h-full min-h-0"
            >
              <div className="w-full max-w-md">
                <Alert
                  type="neutral"
                  heading="Note"
                  description="This is informational."
                  showButton={false}
                />
              </div>
            </DocPreview>
          </div>
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Size Comparison">
          <div className="grid grid-cols-2 gap-10 items-stretch">
            <DocPreview
              rounded={false}
              border={false}
              verticalPaddingOnly
              aspectSquare
              className="h-full min-h-0"
            >
              <div className="w-full max-w-md">
                <Alert
                  type="info"
                  size="md"
                  heading="Medium alert"
                  description="Body/01 heading + Body/02 description."
                />
              </div>
            </DocPreview>
            <DocPreview
              rounded={false}
              border={false}
              verticalPaddingOnly
              aspectSquare
              className="h-full min-h-0"
            >
              <div className="w-full max-w-md">
                <Alert
                  type="info"
                  size="sm"
                  heading="Small alert"
                  description="Body/02 heading + Body/03 description."
                />
              </div>
            </DocPreview>
          </div>
        </DocSection>
      </div>
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
  const [description, setDescription] = useState(
    "Supporting description with details.",
  );

  const codeSnippet = `<Alert
  type="${type}"
  size="${size}"
  heading="${heading}"
  description="${description}"${!showIcon ? "\n  showIcon={false}" : ""}${!showHeading ? "\n  showHeading={false}" : ""}${!showDescription ? "\n  showDescription={false}" : ""}${!showButton ? "\n  showButton={false}" : ""}
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
              <p className="text-body-03 font-medium text-text-neutral-secondary mb-2">
                Heading
              </p>
              <input
                type="text"
                value={heading}
                onChange={(e) => setHeading(e.target.value)}
                className="w-full px-3 py-1.5 text-body-02 border border-border-neutral-default rounded-md bg-white focus:outline-none focus:shadow-focus"
              />
            </div>

            <div className="mb-4">
              <p className="text-body-03 font-medium text-text-neutral-secondary mb-2">
                Description
              </p>
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-3 py-1.5 text-body-02 border border-border-neutral-default rounded-md bg-white focus:outline-none focus:shadow-focus"
              />
            </div>

            <Toggle
              label="Show icon"
              checked={showIcon}
              onChange={setShowIcon}
            />
            <Toggle
              label="Show heading"
              checked={showHeading}
              onChange={setShowHeading}
            />
            <Toggle
              label="Show description"
              checked={showDescription}
              onChange={setShowDescription}
            />
            <Toggle
              label="Show button"
              checked={showButton}
              onChange={setShowButton}
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
            [
              "type",
              '"neutral" | "success" | "info" | "warning" | "danger"',
              '"neutral"',
              "Semantic color variant.",
            ],
            [
              "size",
              '"sm" | "md"',
              '"md"',
              "Size variant — affects padding, typography, and icon size.",
            ],
            ["heading", "string", '"Heading"', "Heading text."],
            ["description", "string", '"Description"', "Description text."],
            ["showIcon", "boolean", "true", "Toggle the leading icon."],
            ["showHeading", "boolean", "true", "Toggle the heading text."],
            [
              "showDescription",
              "boolean",
              "true",
              "Toggle the description text.",
            ],
            ["showButton", "boolean", "true", "Toggle the action button."],
            [
              "buttonLabel",
              "string",
              '"Button"',
              "Label for the action button.",
            ],
            [
              "onButtonClick",
              "() => void",
              "undefined",
              "Callback when action button is clicked.",
            ],
            ["icon", "ReactNode", "undefined", "Custom icon override."],
            ["className", "string", "undefined", "Additional CSS classes."],
          ]}
        />
      </DocSection>

      <DocSection title="Validation & Constraints" hideTitle>
        <DocTable
          variant="surface"
          headers={["Rule", "Details"]}
          rows={[
            [
              "At least one text element",
              "showHeading or showDescription should be true — an alert with no text is meaningless.",
            ],
            [
              'Use role="alert"',
              'The component uses role="alert" for assistive technology. Critical errors are announced immediately.',
            ],
            [
              "Match type to severity",
              "Don't use danger for informational messages.",
            ],
            [
              "One action per alert",
              "Limit to a single action button to maintain focus.",
            ],
            [
              "Don't auto-dismiss",
              "Alerts are persistent; use Toast for transient feedback.",
            ],
          ]}
        />
      </DocSection>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════ */

export default function AlertPage() {
  const [activeTab, setActiveTab] = useState<TabName>("Overview");

  return (
    <div className="col-span-2 grid grid-cols-2 gap-x-10 gap-y-10">
      <div className="col-start-1 flex flex-col">
        <DocHeader
          title="Alert"
          description="Alerts communicate status, feedback, or important information to users through contextual, color-coded banners."
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
