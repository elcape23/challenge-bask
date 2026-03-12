import DocHeader from "@/components/docs/DocHeader";
import DocSection from "@/components/docs/DocSection";
import DocTable from "@/components/docs/DocTable";
import DocCallout from "@/components/docs/DocCallout";
import DoDontGrid from "@/components/docs/DoDontGrid";
import DocPreview from "@/components/docs/DocPreview";
import DocAnatomy from "@/components/docs/DocAnatomy";

export default function TabsPage() {
  return (
    <>
      <DocHeader
        title="Tabs"
        description="Tabs organize content into separate views where only one view is visible at a time, allowing users to switch between related sections without navigating away."
      />

      <DocSection title="Overview">
        <p className="mb-4">
          Tabs help reduce cognitive load by dividing content into logical
          groups. Each tab represents a distinct category or view, and switching
          between tabs should feel instant — the content is shown or hidden, not
          loaded from a new page.
        </p>
        <p>
          Tabs are most effective when the sections are parallel in nature and
          roughly equal in importance. Avoid using tabs when the user needs to
          compare content across sections simultaneously.
        </p>
      </DocSection>

      <DocSection title="Anatomy">
        <DocAnatomy
          items={[
            {
              label: "Tab list",
              description:
                "The horizontal container that holds all tab items. Acts as the navigation bar for the tabbed content.",
            },
            {
              label: "Tab item",
              description:
                "An individual tab trigger. Displays a label and indicates the selected state. May include an optional icon or badge.",
            },
            {
              label: "Tab panel",
              description:
                "The content area associated with the active tab. Only one panel is visible at a time.",
            },
          ]}
        />
      </DocSection>

      <DocSection title="Variants">
        <DocTable
          headers={["Variant", "Appearance", "Use when"]}
          rows={[
            [
              "Default",
              "Text labels with a bottom border on the active tab",
              "Standard content switching in page layouts",
            ],
            [
              "Underlined",
              "Minimal style with an animated underline indicator",
              "Clean layouts where tabs sit within content areas",
            ],
            [
              "Contained",
              "Tabs sit inside a pill-shaped container with filled active state",
              "Settings panels, toolbars, or segmented controls",
            ],
          ]}
        />
      </DocSection>

      <DocSection title="Sizes">
        <DocTable
          headers={["Size", "Height", "Font size", "Use case"]}
          rows={[
            ["Small", "32px", "var(--font-size-body-02)", "Compact areas, secondary navigation"],
            ["Medium", "40px", "var(--font-size-body-02)", "Standard tab groups (default)"],
            ["Large", "48px", "var(--font-size-body-01)", "Primary page-level navigation tabs"],
          ]}
        />
      </DocSection>

      <DocSection title="States">
        <DocTable
          headers={["State", "Description"]}
          rows={[
            ["Default", "Inactive tab with no interaction"],
            ["Hover", "Subtle background change to indicate interactivity"],
            ["Active / Selected", "Visually distinct style indicating the current view"],
            ["Focused", "Keyboard focus ring around the tab item"],
            ["Disabled", "Tab is non-interactive with reduced opacity"],
          ]}
        />
      </DocSection>

      <DocSection title="Behavior">
        <ul
          className="list-disc pl-5 space-y-2 text-text-neutral-secondary"
        >
          <li>
            Clicking a tab immediately displays the corresponding panel and
            updates the active indicator.
          </li>
          <li>
            Arrow keys move focus between tab items. Left/Right for horizontal
            tabs, Up/Down for vertical orientation.
          </li>
          <li>
            Tab panels should not be lazy-loaded by default to avoid layout
            shifts, but lazy loading can be opted into for performance.
          </li>
          <li>
            When tabs overflow the container width, they scroll horizontally
            with optional navigation arrows.
          </li>
          <li>
            The first tab is selected by default unless a specific tab is
            specified via controlled state or URL parameter.
          </li>
        </ul>
      </DocSection>

      <DocSection title="Accessibility">
        <DocCallout variant="info" title="ARIA pattern">
          Implement the{" "}
          <strong>WAI-ARIA Tabs pattern</strong>: the tab list uses{" "}
          <code>role=&quot;tablist&quot;</code>, each tab uses{" "}
          <code>role=&quot;tab&quot;</code> with{" "}
          <code>aria-selected</code>, and each panel uses{" "}
          <code>role=&quot;tabpanel&quot;</code> with{" "}
          <code>aria-labelledby</code>.
        </DocCallout>
        <ul
          className="list-disc pl-5 space-y-2 text-text-neutral-secondary"
        >
          <li>
            Arrow keys navigate between tabs. Enter or Space activates the
            focused tab.
          </li>
          <li>
            Home and End keys move focus to the first and last tab respectively.
          </li>
          <li>
            Disabled tabs are focusable but not activatable, so screen reader
            users know they exist.
          </li>
          <li>
            Each tab panel must be labeled by its corresponding tab via{" "}
            <code>aria-labelledby</code>.
          </li>
        </ul>
      </DocSection>

      <DocSection title="Usage guidelines">
        <p className="mb-4">
          Use tabs when content can be logically divided into 2–6 parallel
          sections. Each section should make sense independently and have a
          concise label (1–2 words).
        </p>
        <p>
          If there are only two options, consider a segmented control or toggle
          instead. If there are more than six sections, consider a different
          navigation pattern such as a sidebar or dropdown.
        </p>
      </DocSection>

      <DocSection title="Do / Don't">
        <DoDontGrid
          doItems={[
            { description: "Use short, descriptive labels for each tab (1–2 words)." },
            { description: "Keep the number of tabs between 2 and 6 for usability." },
            { description: "Maintain consistent content structure across tab panels." },
            { description: "Preserve user-entered data when switching between tabs." },
          ]}
          dontItems={[
            { description: "Don't use tabs for sequential steps — use a stepper component instead." },
            { description: "Don't nest tab groups inside other tab groups." },
            { description: "Don't mix tabs with drastically different content types or importance levels." },
            { description: "Don't truncate tab labels — shorten the text or use fewer tabs." },
          ]}
        />
      </DocSection>

      <DocSection title="Specs">
        <DocTable
          headers={["Property", "Value"]}
          rows={[
            ["Tab list gap", "var(--spacing-1)"],
            ["Active indicator height", "2px"],
            ["Active indicator color", "var(--color-primary)"],
            ["Tab padding (horizontal)", "var(--spacing-4)"],
            ["Tab border radius (contained)", "9999px"],
            ["Hover background", "var(--color-hover)"],
            ["Disabled opacity", "0.5"],
            ["Transition duration", "150ms ease"],
            ["Overflow scroll", "Horizontal with fade edges"],
          ]}
        />
      </DocSection>
    </>
  );
}
