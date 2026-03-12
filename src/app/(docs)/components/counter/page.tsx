import DocHeader from "@/components/docs/DocHeader";
import DocSection from "@/components/docs/DocSection";
import DocTable from "@/components/docs/DocTable";
import DocCallout from "@/components/docs/DocCallout";
import DoDontGrid from "@/components/docs/DoDontGrid";
import DocPreview from "@/components/docs/DocPreview";
import DocAnatomy from "@/components/docs/DocAnatomy";

export default function CounterPage() {
  return (
    <>
      <DocHeader
        title="Counter"
        description="Counters let users adjust a numeric value incrementally, providing a controlled way to set quantities or amounts."
      />

      <DocSection title="Overview">
        <p className="mb-4">
          Counters let users adjust a numeric value incrementally, providing a
          controlled way to set quantities or amounts. They combine a decrement
          button, a value display, and an increment button in a compact,
          scannable layout.
        </p>
        <p>
          Use counters when the value has a known range and small increments
          make sense — quantity selectors, age inputs, or any numeric setting
          where stepping by 1 (or a fixed amount) is the primary interaction.
        </p>
      </DocSection>

      <DocSection title="Anatomy">
        <DocAnatomy
          items={[
            {
              label: "Container",
              description:
                "A flex row that holds the decrement button, value display, and increment button. Uses border and rounded corners for visual grouping.",
            },
            {
              label: "Decrement button",
              description:
                "Minus (−) button that decreases the value. Disabled when at minimum.",
            },
            {
              label: "Value display",
              description:
                "The current numeric value, centered between the buttons. Has a minimum width for alignment.",
            },
            {
              label: "Increment button",
              description:
                "Plus (+) button that increases the value. Disabled when at maximum.",
            },
          ]}
        />
        <DocPreview title="Anatomy example">
          <div className="inline-flex items-center border border-border-neutral-default rounded-md overflow-hidden">
            <button
              type="button"
              className="size-10 flex items-center justify-center text-text-neutral-secondary hover:bg-neutral-200 border-r border-border-neutral-default text-body-01 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Decrease"
            >
              −
            </button>
            <span className="min-w-12 px-3 py-2 text-body-02 font-medium text-text-neutral-default text-center">
              3
            </span>
            <button
              type="button"
              className="size-10 flex items-center justify-center text-text-neutral-secondary hover:bg-neutral-200 border-l border-border-neutral-default text-body-01 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Increase"
            >
              +
            </button>
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="Variants">
        <DocTable
          headers={["Variant", "Description", "When to use"]}
          rows={[
            [
              "Default",
              "Standard layout with bordered container and square buttons",
              "Forms, product quantity selectors, settings panels.",
            ],
            [
              "Compact",
              "Smaller buttons and tighter spacing for dense layouts",
              "Table cells, inline filters, mobile views.",
            ],
          ]}
        />
      </DocSection>

      <DocSection title="States">
        <DocTable
          headers={["State", "Description"]}
          rows={[
            ["Default", "All controls are interactive. Value is within min/max range."],
            ["Hover", "Buttons show a subtle background change on hover."],
            ["Disabled", "The entire counter is non-interactive. Muted styling."],
            ["Min reached", "Decrement button is disabled. Increment remains active."],
            ["Max reached", "Increment button is disabled. Decrement remains active."],
          ]}
        />
      </DocSection>

      <DocSection title="Behavior">
        <p className="mb-4">
          Counters enforce min and max bounds. When the value reaches the
          minimum, the decrement button is disabled; when it reaches the
          maximum, the increment button is disabled. The step size (typically 1)
          determines how much each click changes the value.
        </p>
        <DocCallout variant="info" title="Keyboard support">
          Buttons should be focusable and support Enter/Space to activate. Consider allowing arrow keys on the value display for power users.
        </DocCallout>
      </DocSection>

      <DocSection title="Accessibility">
        <ul className="pl-5 mb-4">
          <li className="mb-2">
            Each button must have an <code>aria-label</code> (e.g., &quot;Decrease quantity&quot;, &quot;Increase quantity&quot;).
          </li>
          <li className="mb-2">
            Use <code>aria-valuemin</code>, <code>aria-valuemax</code>, and <code>aria-valuenow</code> on the value display or container for screen readers.
          </li>
          <li className="mb-2">
            Disabled buttons must use the <code>disabled</code> attribute, not just visual styling.
          </li>
          <li>
            Ensure touch targets meet the 44×44px minimum for mobile usability.
          </li>
        </ul>
      </DocSection>

      <DocSection title="Usage guidelines">
        <p className="mb-4">
          Set sensible defaults. If the counter represents quantity, start at 1
          (not 0) unless zero is a valid choice. Make min and max values
          discoverable — consider showing them in helper text for unfamiliar
          ranges.
        </p>
        <p>
          For large ranges (e.g., 1–1000), consider pairing the counter with a
          direct input so users can type a value instead of clicking many times.
        </p>
      </DocSection>

      <DocSection title="Do / Don't">
        <DoDontGrid
          doItems={[
            { description: "Disable the decrement button at min and increment at max." },
            { description: "Use clear minus (−) and plus (+) symbols in the buttons." },
            { description: "Provide aria-labels and value attributes for screen readers." },
            { description: "Set a sensible default value within the allowed range." },
          ]}
          dontItems={[
            { description: "Don't allow values outside the min/max range." },
            { description: "Don't use ambiguous icons — minus and plus are universally understood." },
            { description: "Don't make the step size too large for fine control." },
            { description: "Don't hide the current value — it must always be visible." },
          ]}
        />
      </DocSection>

      <DocSection title="Specs">
        <DocTable
          headers={["Property", "Value"]}
          rows={[
            ["Button size (default)", "40×40px"],
            ["Button size (compact)", "32×32px"],
            ["Gap between elements", "0 (buttons share border with value)"],
            ["Value min-width", "48px"],
            ["Font size (value)", "var(--font-size-body-02)"],
            ["Font weight (value)", "500 (medium)"],
            ["Border radius", "var(--radius-md)"],
            ["Border", "1px solid border-border-neutral-default"],
          ]}
        />
      </DocSection>

      <DocSection title="Examples">
        <DocPreview title="Default counter">
          <div className="inline-flex items-center border border-border-neutral-default rounded-md overflow-hidden">
            <button
              type="button"
              className="size-10 flex items-center justify-center text-text-neutral-secondary hover:bg-neutral-200 border-r border-border-neutral-default text-body-01 font-medium"
              aria-label="Decrease"
            >
              −
            </button>
            <span className="min-w-12 px-3 py-2 text-body-02 font-medium text-text-neutral-default text-center">
              1
            </span>
            <button
              type="button"
              className="size-10 flex items-center justify-center text-text-neutral-secondary hover:bg-neutral-200 border-l border-border-neutral-default text-body-01 font-medium"
              aria-label="Increase"
            >
              +
            </button>
          </div>
        </DocPreview>
        <DocPreview title="Compact counter">
          <div className="inline-flex items-center border border-border-neutral-default rounded-md overflow-hidden">
            <button
              type="button"
              className="size-8 flex items-center justify-center text-text-neutral-secondary hover:bg-neutral-200 border-r border-border-neutral-default text-body-02 font-medium"
              aria-label="Decrease"
            >
              −
            </button>
            <span className="min-w-10 px-2 py-1.5 text-body-03 font-medium text-text-neutral-default text-center">
              5
            </span>
            <button
              type="button"
              className="size-8 flex items-center justify-center text-text-neutral-secondary hover:bg-neutral-200 border-l border-border-neutral-default text-body-02 font-medium"
              aria-label="Increase"
            >
              +
            </button>
          </div>
        </DocPreview>
        <DocPreview title="Min reached (decrement disabled)">
          <div className="inline-flex items-center border border-border-neutral-default rounded-md overflow-hidden">
            <button
              type="button"
              disabled
              className="size-10 flex items-center justify-center text-text-neutral-placeholder bg-neutral-100 border-r border-border-neutral-default text-body-01 font-medium cursor-not-allowed opacity-50"
              aria-label="Decrease"
            >
              −
            </button>
            <span className="min-w-12 px-3 py-2 text-body-02 font-medium text-text-neutral-default text-center">
              0
            </span>
            <button
              type="button"
              className="size-10 flex items-center justify-center text-text-neutral-secondary hover:bg-neutral-200 border-l border-border-neutral-default text-body-01 font-medium"
              aria-label="Increase"
            >
              +
            </button>
          </div>
        </DocPreview>
        <DocPreview title="Rounded buttons variant">
          <div className="inline-flex items-center gap-2">
            <button
              type="button"
              className="size-10 rounded-full border border-border-neutral-default flex items-center justify-center text-text-neutral-secondary hover:bg-neutral-200 text-body-01 font-medium"
              aria-label="Decrease"
            >
              −
            </button>
            <span className="min-w-12 text-body-02 font-medium text-text-neutral-default text-center">
              2
            </span>
            <button
              type="button"
              className="size-10 rounded-full border border-border-neutral-default flex items-center justify-center text-text-neutral-secondary hover:bg-neutral-200 text-body-01 font-medium"
              aria-label="Increase"
            >
              +
            </button>
          </div>
        </DocPreview>
      </DocSection>
    </>
  );
}
