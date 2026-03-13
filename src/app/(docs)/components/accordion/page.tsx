"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import DocHeader from "@/components/docs/DocHeader";
import DocSection from "@/components/docs/DocSection";
import DocTable from "@/components/docs/DocTable";
import DoDontGrid from "@/components/docs/DoDontGrid";
import DocPreview from "@/components/docs/DocPreview";
import DocAnatomy from "@/components/docs/DocAnatomy";
import {
  AccordionItem,
  Accordion,
  type AccordionSize,
  type AccordionType,
} from "@/components/ui/Accordion";

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
      <div className="col-start-1">
        <DocSection title="Overview">
          <p className="mb-4">
            Accordions organize content into collapsible sections, letting users
            reveal information progressively without leaving the page.
          </p>
          <p>
            They are ideal for FAQ sections, settings panels, and any content
            that benefits from progressive disclosure — reducing visual clutter
            while keeping related information grouped and accessible.
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
                  "The outer wrapper with a bottom border divider. Houses the trigger and content panel.",
              },
              {
                label: "Heading",
                description:
                  "The text label displayed in the trigger row that describes the section content.",
              },
              {
                label: "Chevron icon",
                description:
                  "A directional indicator that points down when collapsed and rotates 180° (up) when expanded.",
              },
              {
                label: "Slot (content panel)",
                description:
                  "The expandable body area revealed below the header row when the accordion is opened.",
              },
            ]}
              />
            </div>
          </div>
          <div
            className="overflow-hidden flex flex-row gap-10 w-full items-start justify-between"
            style={{ backgroundColor: "#FFFFFF", padding: "200px" }}
          >
            <Image
              src="/images/accordion-anatomy-collapsed.webp"
              alt="Accordion header anatomy when collapsed: heading (1), separator line (2), chevron-down icon (3)"
              width={640}
              height={122}
            />
            <Image
              src="/images/accordion-anatomy-expanded.webp"
              alt="Accordion header anatomy when expanded: heading, chevron-up icon (4), bottom separator"
              width={640}
              height={122}
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
              "Height (closed)",
              "Typography",
              "Icon",
              "Padding",
            ]}
            rows={[
              [
                "Small (sm)",
                "48px",
                "Body/01 Regular (16px / 24px)",
                "20×20px",
                "px: 8px, py: 12px",
              ],
              [
                "Medium (md)",
                "56px",
                "Heading/06 Regular (19px / 24px)",
                "24×24px",
                "px: 8px, py: 16px",
              ],
            ]}
          />
          <div className="grid grid-cols-2 gap-10 items-stretch">
            <DocPreview rounded={false} border={false} verticalPaddingOnly aspectSquare className="h-full min-h-0">
              <div className="w-full max-w-sm h-[150px]">
                <AccordionItem heading="Small accordion" size="sm" defaultOpen>
                  <ul className="list-disc pl-5 m-0 text-body-02 text-text-neutral-secondary space-y-1">
                    <li>First item</li>
                    <li>Second item</li>
                    <li>Third item</li>
                  </ul>
                </AccordionItem>
                <AccordionItem heading="Another item" size="sm" />
              </div>
            </DocPreview>
            <DocPreview rounded={false} border={false} verticalPaddingOnly aspectSquare className="h-full min-h-0">
              <div className="w-full max-w-sm h-[150px]">
                <AccordionItem heading="Medium accordion" size="md" defaultOpen>
                  <ul className="list-disc pl-5 m-0 text-body-01 text-text-neutral-secondary space-y-1">
                    <li>First item</li>
                    <li>Second item</li>
                    <li>Third item</li>
                  </ul>
                </AccordionItem>
                <AccordionItem heading="Another item" size="md" />
              </div>
            </DocPreview>
          </div>
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="States" hideTitle>
          <DocTable
            variant="surface"
            headers={["State", "Description"]}
            rows={[
              [
                "Default",
                "The resting state — border, text, and icon use neutral default tokens.",
              ],
              [
                "Disabled",
                "Non-interactive. Text, icon, and border switch to their disabled tokens. Cursor shows not-allowed.",
              ],
              ["Collapsed", "Content panel is hidden. Chevron points down."],
              [
                "Expanded",
                "Content panel is visible. Chevron rotates 180° (points up).",
              ],
              [
                "Focus",
                "A visible ring appears around the trigger when navigated via keyboard.",
              ],
            ]}
          />
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Behavior">
          <div className="grid grid-cols-2 gap-x-10 mb-6">
            <div>
            <p className="mb-4">
              Clicking the header toggles the content panel. In{" "}
              <strong>single</strong> mode, opening one panel automatically
              collapses the previously open panel. In <strong>multiple</strong>{" "}
              mode, each panel operates independently.
            </p>
            <p className="mb-4">
              The chevron icon rotates 180° when transitioning between collapsed
              and expanded states. Content panels animate with a smooth
              max-height transition (200ms ease-out).
            </p>
            <p>
              Accordion headers are keyboard accessible — users can Tab to focus
              and Enter or Space to toggle.
            </p>
            </div>
          </div>
          <div
            className="overflow-hidden flex flex-row gap-10 w-full items-start justify-between"
            style={{ backgroundColor: "#FFFFFF", padding: "200px" }}
          >
            <Image
              src="/images/accordion-behavior-collapsed.webp"
              alt="Accordion header collapsed: heading, separator line, chevron-down icon"
              width={640}
              height={122}
            />
            <Image
              src="/images/accordion-behavior-expanded.webp"
              alt="Accordion header expanded: heading, chevron-up icon, separator line below"
              width={640}
              height={122}
            />
          </div>
        </DocSection>
      </div>

      <DocSection title="Accessibility">
        <ul className="pl-5 mb-4 text-body-01 font-regular text-text-neutral-secondary">
          <li className="mb-2">
            The trigger uses a native <code>&lt;button&gt;</code> element with{" "}
            <code>aria-expanded</code> and <code>aria-controls</code>.
          </li>
          <li className="mb-2">
            The content panel has <code>role=&quot;region&quot;</code> and{" "}
            <code>aria-labelledby</code> referencing the trigger.
          </li>
          <li className="mb-2">
            Disabled items use the native <code>disabled</code> attribute on the
            button.
          </li>
          <li className="mb-2">
            Focus ring uses <code>focus-visible</code> to avoid showing on
            click.
          </li>
          <li>
            Screen readers announce the expanded/collapsed state when the header
            is focused.
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
                description:
                  "Use for FAQs, settings, and progressive disclosure of content.",
              },
              { description: "Keep labels short and descriptive." },
              {
                description:
                  "Choose single or multiple mode based on content relationships.",
              },
              {
                description:
                  "Provide clear visual feedback for expanded/collapsed state.",
              },
            ]}
            dontItems={[
              {
                description:
                  "Don't use for critical information that must always be visible.",
              },
              { description: "Don't nest accordions inside accordions." },
              {
                description:
                  "Don't use vague labels like 'Section 1' or 'More info'.",
              },
              {
                description: "Don't mix sizes within the same accordion group.",
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
        <DocSection title="Color Tokens">
          <TokenGroup title="Default State">
<ColorSwatch color="#1C1F1B" label="text / neutral / default" />
          <ColorSwatch color="#1C1F1B" label="icon / neutral / default" />
          <ColorSwatch color="#B7BBAF" label="border / neutral / default" />
          </TokenGroup>

          <TokenGroup title="Disabled State">
<ColorSwatch color="#B7BBAF" label="text / neutral / disabled" />
          <ColorSwatch color="#B7BBAF" label="icon / neutral / disabled" />
          <ColorSwatch color="#E4E6DE" label="border / neutral / disabled" />
          </TokenGroup>
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Typography Tokens" hideTitle>
        <DocTable
          variant="surface"
          headers={["Token", "Size", "Size (px)", "Line Height", "Weight"]}
          rows={[
            [
              "Body/01/Regular (sm)",
              "text-body-01",
              "16px",
              "24px",
              "400 (regular)",
            ],
            [
              "Heading/06/Regular (md)",
              "text-heading-06",
              "19px",
              "24px",
              "400 (regular)",
            ],
          ]}
        />
      </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Spacing Tokens" hideTitle>
        <DocTable
          variant="surface"
          headers={["Property", "Token", "Value", "Size"]}
          rows={[
            ["Horizontal padding", "spacing/space-2", "8px", "Both"],
            ["Vertical padding (sm)", "spacing/space-3", "12px", "sm"],
            ["Vertical padding (md)", "spacing/space-4", "16px", "md"],
            ["Header gap (sm closed)", "spacing/space-3", "12px", "sm"],
            [
              "Header gap (md / opened)",
              "spacing/space-4",
              "16px",
              "md / opened",
            ],
            ["Content padding bottom (sm)", "spacing/space-3", "12px", "sm"],
            ["Content padding bottom (md)", "spacing/space-4", "16px", "md"],
        ]}
        />
      </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Icon Sizes" hideTitle>
        <DocTable
          variant="surface"
          headers={["Size", "Icon dimensions", "Chevron"]}
          rows={[
            ["sm", "20×20px", "chevron-down / chevron-up"],
            ["md", "24×24px", "chevron-down / chevron-up"],
          ]}
        />
      </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Border" hideTitle>
        <DocTable
          variant="surface"
          headers={["Property", "Value", "Token"]}
          rows={[
            ["Border position", "Bottom only", "—"],
            ["Border width", "1px", "—"],
            ["Border style", "Solid", "—"],
            [
              "Border color (default)",
              "#B7BBAF",
              "color/border/neutral/default",
            ],
            [
              "Border color (disabled)",
              "#E4E6DE",
              "color/border/neutral/disabled",
            ],
          ]}
        />
      </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Animation / Transition Tokens" hideTitle>
        <DocTable
          variant="surface"
          headers={["Property", "Duration", "Easing"]}
          rows={[
            ["Chevron rotation", "200ms", "ease (CSS default)"],
            ["Content max-height", "200ms", "ease-out"],
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
        <DocSection title="Size Variations" hideTitle>
        <DocTable
          variant="surface"
          headers={[
            "Size",
            "Height (closed)",
            "Typography",
            "Icon",
            "Padding",
          ]}
          rows={[
            [
              "Small (sm)",
              "48px",
              "Body/01 Regular (16px / 24px)",
              "20×20px",
              "px: 8px, py: 12px",
            ],
            [
              "Medium (md)",
              "56px",
              "Heading/06 Regular (19px / 24px)",
              "24×24px",
              "px: 8px, py: 16px",
            ],
          ]}
        />
        <div className="grid grid-cols-2 gap-10 items-stretch">
          <DocPreview rounded={false} border={false} verticalPaddingOnly aspectSquare className="h-full min-h-0">
            <div className="w-full max-w-sm h-[150px]">
              <AccordionItem heading="Small accordion" size="sm" defaultOpen>
                <ul className="list-disc pl-5 m-0 text-body-02 text-text-neutral-secondary space-y-1">
                  <li>First item</li>
                  <li>Second item</li>
                  <li>Third item</li>
                </ul>
              </AccordionItem>
              <AccordionItem heading="Another item" size="sm" />
            </div>
          </DocPreview>
          <DocPreview rounded={false} border={false} verticalPaddingOnly aspectSquare className="h-full min-h-0">
            <div className="w-full max-w-sm h-[150px]">
              <AccordionItem heading="Medium accordion" size="md" defaultOpen>
                <ul className="list-disc pl-5 m-0 text-body-01 text-text-neutral-secondary space-y-1">
                  <li>First item</li>
                  <li>Second item</li>
                  <li>Third item</li>
                </ul>
              </AccordionItem>
              <AccordionItem heading="Another item" size="md" />
            </div>
          </DocPreview>
        </div>
      </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="State Demonstrations">
        <div className="grid grid-cols-2 gap-10 items-stretch">
          <DocPreview rounded={false} border={false} verticalPaddingOnly aspectSquare className="h-full min-h-0">
            <div className="w-full max-w-sm">
              <AccordionItem heading="Default accordion" size="sm" />
            </div>
          </DocPreview>
          <DocPreview rounded={false} border={false} verticalPaddingOnly aspectSquare className="h-full min-h-0">
            <div className="w-full max-w-sm">
              <AccordionItem heading="Disabled accordion" size="sm" disabled />
              <AccordionItem heading="Disabled medium" size="md" disabled />
            </div>
          </DocPreview>
        </div>
        <p className="mb-4 text-body-02 text-text-neutral-secondary mt-4">
          Focus states are interactive — use Tab to focus the trigger and
          observe the focus ring.
        </p>
      </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Single Mode & Multiple Mode">
        <div className="grid grid-cols-2 gap-10 items-stretch">
          <DocPreview rounded={false} border={false} verticalPaddingOnly aspectSquare className="h-full min-h-0">
            <div className="w-full max-w-sm">
              <Accordion type="single" size="sm">
                <AccordionItem heading="What is your return policy?">
                  <p className="text-body-02 text-text-neutral-secondary">
                    You can return items within 30 days of purchase with a valid
                    receipt.
                  </p>
                </AccordionItem>
                <AccordionItem heading="How do I track my order?">
                  <p className="text-body-02 text-text-neutral-secondary">
                    Go to Account → Orders and click the tracking number.
                  </p>
                </AccordionItem>
                <AccordionItem heading="Do you ship internationally?">
                  <p className="text-body-02 text-text-neutral-secondary">
                    Yes, we ship to over 50 countries worldwide.
                  </p>
                </AccordionItem>
              </Accordion>
            </div>
          </DocPreview>
          <DocPreview rounded={false} border={false} verticalPaddingOnly aspectSquare className="h-full min-h-0">
            <div className="w-full max-w-sm">
              <Accordion type="multiple" size="md">
                <AccordionItem heading="Account settings">
                  <p className="text-body-01 text-text-neutral-secondary">
                    Email, password, and profile preferences.
                  </p>
                </AccordionItem>
                <AccordionItem heading="Notifications">
                  <p className="text-body-01 text-text-neutral-secondary">
                    Configure how and when you receive alerts.
                  </p>
                </AccordionItem>
                <AccordionItem heading="Privacy">
                  <p className="text-body-01 text-text-neutral-secondary">
                    Data sharing, cookies, and visibility settings.
                  </p>
                </AccordionItem>
              </Accordion>
            </div>
          </DocPreview>
        </div>
      </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Mixed Default & Disabled">
        <div className="grid grid-cols-2 gap-10 items-stretch">
          <DocPreview rounded={false} border={false} verticalPaddingOnly aspectSquare className="h-full min-h-0">
            <div className="w-full max-w-sm">
              <AccordionItem heading="Active section" size="sm" defaultOpen>
                <p className="text-body-02 text-text-neutral-secondary">
                  This section is interactive and open by default.
                </p>
              </AccordionItem>
              <AccordionItem heading="Coming soon" size="sm" disabled />
              <AccordionItem heading="Another active" size="sm" />
            </div>
          </DocPreview>
          <div aria-hidden />
        </div>
        </DocSection>
      </div>
    </>
  );
}

function PropertiesTab() {
  const [size, setSize] = useState<AccordionSize>("sm");
  const [type, setType] = useState<AccordionType>("single");
  const [isDisabled, setIsDisabled] = useState(false);
  const [heading, setHeading] = useState("Accordion heading");

  const codeSnippet =
    type === "single" || type === "multiple"
      ? `<Accordion type="${type}" size="${size}"${isDisabled ? " disabled" : ""}>
  <AccordionItem heading="${heading}">
    <p>Content goes here.</p>
  </AccordionItem>
  <AccordionItem heading="Second item">
    <p>More content.</p>
  </AccordionItem>
</Accordion>`
      : `<AccordionItem
  heading="${heading}"
  size="${size}"${isDisabled ? "\n  disabled" : ""}
>
  <p>Content goes here.</p>
</AccordionItem>`;

  return (
    <div className="col-span-2">
      <DocSection title="Interactive Playground">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
          {/* Preview */}
          <div className="rounded-md border border-border-neutral-default overflow-hidden">
            <div className="px-4 py-2 bg-background-surface-neutral-default border-b border-border-neutral-default text-body-03 font-medium text-text-neutral-placeholder">
              Preview
            </div>
            <div className="flex items-start justify-center p-8 bg-white min-h-[260px]">
              <div className="w-full max-w-sm">
                <Accordion type={type} size={size} disabled={isDisabled}>
                  <AccordionItem heading={heading}>
                    <p className="text-body-02 text-text-neutral-secondary">
                      This is the content of the first accordion item.
                    </p>
                  </AccordionItem>
                  <AccordionItem heading="Second item">
                    <p className="text-body-02 text-text-neutral-secondary">
                      Second panel content goes here.
                    </p>
                  </AccordionItem>
                  <AccordionItem heading="Third item">
                    <p className="text-body-02 text-text-neutral-secondary">
                      Third panel content goes here.
                    </p>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="p-4 rounded-md border border-border-neutral-default bg-background-surface-neutral-default">
            <h4 className="text-body-02 font-medium mb-4">Controls</h4>

            <RadioGroup
              label="Size"
              options={[
                { value: "sm", label: "Small" },
                { value: "md", label: "Medium" },
              ]}
              value={size}
              onChange={setSize}
            />

            <RadioGroup
              label="Type"
              options={[
                { value: "single", label: "Single" },
                { value: "multiple", label: "Multiple" },
              ]}
              value={type}
              onChange={setType}
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

            <Toggle
              label="Disabled"
              checked={isDisabled}
              onChange={setIsDisabled}
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

      <DocSection title="Props Reference — AccordionItem" hideTitle>
        <DocTable
          variant="surface"
          headers={["Prop", "Type", "Default", "Description"]}
          rows={[
            [
              "heading",
              "string",
              "—",
              "Required. The heading text displayed in the trigger row.",
            ],
            [
              "size",
              '"sm" | "md"',
              '"sm"',
              "Size variant — affects padding, typography, and icon size.",
            ],
            [
              "disabled",
              "boolean",
              "false",
              "Disables the item. Muted styling, cursor not-allowed.",
            ],
            [
              "open",
              "boolean",
              "undefined",
              "Controlled open state. Omit for uncontrolled behavior.",
            ],
            [
              "defaultOpen",
              "boolean",
              "false",
              "Whether the item starts open in uncontrolled mode.",
            ],
            [
              "onOpenChange",
              "(open: boolean) => void",
              "undefined",
              "Callback fired when the open state changes.",
            ],
            [
              "children",
              "ReactNode",
              "—",
              "Content rendered inside the expandable panel (slot).",
            ],
            [
              "className",
              "string",
              "undefined",
              "Additional CSS classes for the container.",
            ],
          ]}
        />
      </DocSection>

      <DocSection title="Props Reference — Accordion (group)" hideTitle>
        <DocTable
          variant="surface"
          headers={["Prop", "Type", "Default", "Description"]}
          rows={[
            [
              "type",
              '"single" | "multiple"',
              '"single"',
              "Whether one or many items can be open simultaneously.",
            ],
            [
              "size",
              '"sm" | "md"',
              '"sm"',
              "Default size applied to all child AccordionItems.",
            ],
            ["disabled", "boolean", "false", "Disables all child items."],
            ["children", "ReactNode", "—", "AccordionItem elements."],
            [
              "className",
              "string",
              "undefined",
              "Additional CSS classes for the wrapper.",
            ],
          ]}
        />
      </DocSection>

      <DocSection title="Validation & Constraints" hideTitle>
        <DocTable
          variant="surface"
          headers={["Rule", "Details"]}
          rows={[
            [
              "heading is required",
              "Every AccordionItem must have a heading prop.",
            ],
            [
              "Don't nest accordions",
              "Accordion items should not contain other accordions.",
            ],
            [
              "Single mode collapses others",
              'When type="single", opening one item closes the rest.',
            ],
            [
              "Disabled prevents interaction",
              "Disabled items cannot be toggled by click or keyboard.",
            ],
            [
              "Content is optional",
              "AccordionItem can be used without children (header-only display).",
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

export default function AccordionPage() {
  const [activeTab, setActiveTab] = useState<TabName>("Overview");

  return (
    <div className="col-span-2 grid grid-cols-2 gap-x-10 gap-y-10">
      <div className="col-start-1 flex flex-col">
        <DocHeader
          title="Accordion"
          description="Accordions organize content into collapsible sections, letting users reveal information progressively without leaving the page."
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
