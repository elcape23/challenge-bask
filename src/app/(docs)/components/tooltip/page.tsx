import DocHeader from "@/components/docs/DocHeader";
import DocSection from "@/components/docs/DocSection";
import DocTable from "@/components/docs/DocTable";
import DocCallout from "@/components/docs/DocCallout";
import DoDontGrid from "@/components/docs/DoDontGrid";
import DocAnatomy from "@/components/docs/DocAnatomy";

export default function TooltipPage() {
  return (
    <div className="col-span-2 grid grid-cols-2 gap-x-10 gap-y-10">
      <div className="col-start-1 flex flex-col">
        <DocHeader
          variant="foundations"
          title="Tooltip"
          description="Tooltips display brief, informative text when users hover over or focus on an element. They clarify the purpose of controls that lack visible labels."
        />
      </div>

      <div className="col-start-1">
        <DocSection title="Overview">
          <p className="mb-4">
            Tooltips provide supplementary context about an interface element
            without cluttering the layout. They appear on hover or focus and
            disappear when the user moves away. Tooltips should contain short,
            non-essential text — never interactive content.
          </p>
          <p>
            Use tooltips to describe icon-only buttons, abbreviations, or
            truncated text. If the information is critical to completing a task,
            make it visible without requiring a hover interaction.
          </p>
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Anatomy">
          <DocAnatomy
            items={[
              {
                label: "Trigger",
                description:
                  "The element that activates the tooltip on hover or focus. This is typically a button, icon, or any interactive element.",
              },
              {
                label: "Content",
                description:
                  "A short text label displayed inside the tooltip container. Should be a single line or two at most.",
              },
              {
                label: "Arrow",
                description:
                  "A small triangular indicator connecting the tooltip to its trigger element, reinforcing the relationship between the two.",
              },
            ]}
          />
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Placement variants">
          <p className="mb-4">
            Tooltips can be positioned relative to their trigger. The system
            automatically flips placement when there is not enough viewport space.
          </p>
          <DocTable
            variant="surface"
            headers={["Placement", "Description", "Default"]}
            rows={[
              ["Top", "Appears above the trigger, arrow pointing down", "Yes"],
              ["Bottom", "Appears below the trigger, arrow pointing up", "No"],
              ["Left", "Appears to the left, arrow pointing right", "No"],
              ["Right", "Appears to the right, arrow pointing left", "No"],
            ]}
          />
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Variants" hideTitle>
          <DocTable
            variant="surface"
            headers={["Variant", "Background", "Use when"]}
            rows={[
              [
                "Dark (default)",
                "Dark surface with light text",
                "Standard informational tooltips on light backgrounds",
              ],
              [
                "Light",
                "Light surface with dark text",
                "Tooltips rendered on dark surfaces or high-contrast areas",
              ],
            ]}
          />
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Sizes" hideTitle>
          <DocTable
            variant="surface"
            headers={["Size", "Max width", "Font size"]}
            rows={[
              ["Small", "200px", "var(--font-size-body-03)"],
              ["Medium", "280px", "var(--font-size-body-02)"],
            ]}
          />
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="States" hideTitle>
          <DocTable
            variant="surface"
            headers={["State", "Description"]}
            rows={[
              ["Hidden", "Tooltip is not rendered in the DOM"],
              [
                "Entering",
                "Tooltip fades in after the configured delay",
              ],
              ["Visible", "Tooltip is fully opaque and positioned"],
              ["Exiting", "Tooltip fades out on pointer leave or blur"],
            ]}
          />
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Behavior">
          <ul
            className="list-disc pl-5 space-y-2 text-text-neutral-secondary"
          >
            <li>
              Tooltips appear after a short delay (default 300ms) to prevent
              accidental activation during quick mouse movement.
            </li>
            <li>
              Tooltips dismiss immediately on pointer leave, scroll, or when the
              trigger loses focus.
            </li>
            <li>
              Pressing <strong>Escape</strong> dismisses the tooltip without
              affecting other elements.
            </li>
            <li>
              Placement automatically flips when the tooltip would overflow the
              viewport boundary.
            </li>
            <li>
              Only one tooltip is visible at a time — opening a new one dismisses
              the previous.
            </li>
          </ul>
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Accessibility">
          <DocCallout variant="info" title="ARIA pattern">
            Use <code>aria-describedby</code> on the trigger element pointing to
            the tooltip&apos;s <code>id</code>. The tooltip itself should have{" "}
            <code>role=&quot;tooltip&quot;</code>.
          </DocCallout>
          <ul
            className="list-disc pl-5 space-y-2 text-text-neutral-secondary"
          >
            <li>
              Tooltips must be accessible via keyboard focus, not only mouse
              hover.
            </li>
            <li>
              Tooltip content must not contain interactive elements (links,
              buttons). Use a popover instead.
            </li>
            <li>
              The delay should be long enough to prevent accidental triggers but
              short enough to feel responsive.
            </li>
            <li>
              Ensure sufficient color contrast between tooltip text and
              background.
            </li>
          </ul>
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Usage guidelines">
          <p className="mb-4">
            Tooltips work best as supplementary labels for elements whose purpose
            is not immediately obvious, such as icon-only buttons in a toolbar.
            Keep content concise — ideally under 80 characters.
          </p>
          <p>
            Do not rely on tooltips to convey information that is necessary for
            task completion. Touch devices do not support hover, so essential
            context should always be visible.
          </p>
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Do / Don't">
          <div style={{ backgroundColor: "#FFFFFF", padding: "200px" }} className="overflow-hidden flex flex-row gap-10 w-full items-start justify-between">
            <DoDontGrid
              doItems={[
                { description: "Use tooltips for short, supplementary descriptions of UI controls." },
                { description: "Support both hover and keyboard focus to trigger tooltips." },
                { description: "Keep content to a single phrase or short sentence." },
                { description: "Use the arrow indicator to visually connect tooltip to trigger." },
              ]}
              dontItems={[
                { description: "Don't put interactive content like links or buttons inside tooltips." },
                { description: "Don't use tooltips to display essential information required for a task." },
                { description: "Don't show tooltips on elements that already have visible labels." },
                { description: "Don't use long paragraphs or rich formatting inside tooltips." },
              ]}
            />
          </div>
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Specs" hideTitle>
          <DocTable
            variant="surface"
            headers={["Property", "Value"]}
            rows={[
              ["Background (dark)", "var(--color-invert)"],
              ["Text color (dark)", "var(--color-foreground-invert)"],
              ["Border radius", "var(--radius-md)"],
              ["Padding", "var(--spacing-2) var(--spacing-3)"],
              ["Arrow size", "6px"],
              ["Offset from trigger", "var(--spacing-2)"],
              ["Appear delay", "300ms"],
              ["Animation duration", "150ms ease-out"],
              ["Z-index", "var(--z-tooltip)"],
            ]}
          />
        </DocSection>
      </div>
    </div>
  );
}
