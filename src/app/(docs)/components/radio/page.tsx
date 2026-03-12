import DocHeader from "@/components/docs/DocHeader";
import DocSection from "@/components/docs/DocSection";
import DocTable from "@/components/docs/DocTable";
import DocCallout from "@/components/docs/DocCallout";
import DoDontGrid from "@/components/docs/DoDontGrid";
import DocPreview from "@/components/docs/DocPreview";
import DocAnatomy from "@/components/docs/DocAnatomy";

export default function RadioPage() {
  return (
    <>
      <DocHeader
        title="Radio"
        description="Radio buttons let users select exactly one option from a mutually exclusive set."
      />

      <DocSection title="Overview">
        <p className="mb-4">
          Radio buttons are used when the user must choose a single option and
          all alternatives need to be visible. They are best suited for short
          lists of 2–5 options where seeing every choice reduces decision-making
          effort.
        </p>
        <p>
          If the list is long or screen space is limited, consider a select
          dropdown instead. For binary on/off decisions, a switch is usually a
          better fit.
        </p>
      </DocSection>

      <DocSection title="Anatomy">
        <DocAnatomy
          items={[
            {
              label: "Radio control",
              description:
                "The circular indicator that fills when selected. Only one radio in a group can be active at a time.",
            },
            {
              label: "Label",
              description:
                "Text next to the control that describes the option. Clicking the label selects the radio.",
            },
            {
              label: "Radio group",
              description:
                "The container that wraps related radio buttons and enforces mutual exclusivity. Uses a fieldset with a descriptive legend.",
            },
          ]}
        />
      </DocSection>

      <DocSection title="Variants">
        <DocTable
          headers={["Variant", "Description", "When to use"]}
          rows={[
            [
              "Default",
              "Vertical stack of radio buttons with labels",
              "Standard forms where options are short text labels.",
            ],
            [
              "With description",
              "Each option includes a secondary description line",
              "Plans, tiers, or options that need extra context to differentiate.",
            ],
            [
              "Card radio",
              "Each option is presented as a selectable card",
              "Visual selections like plan tiers, delivery methods, or layout options.",
            ],
          ]}
        />
      </DocSection>

      <DocSection title="Sizes">
        <DocTable
          headers={["Size", "Control dimension", "Use case"]}
          rows={[
            ["Small", "16×16px", "Compact settings, dense tables."],
            ["Medium", "20×20px", "Default for most form contexts."],
          ]}
        />
      </DocSection>

      <DocSection title="States">
        <DocTable
          headers={["State", "Description"]}
          rows={[
            ["Unselected", "The option is available but not chosen. Circle border is visible."],
            ["Selected", "The option is chosen. A filled dot appears inside the circle."],
            ["Hover", "Subtle highlight on the control and label area."],
            ["Focus", "A visible focus ring on the control, triggered by keyboard navigation."],
            ["Disabled", "Reduced opacity. The option is visible but non-interactive."],
          ]}
        />
      </DocSection>

      <DocSection title="Behavior">
        <p className="mb-4">
          Selecting a radio button immediately deselects the previously selected
          option in the same group. Arrow keys cycle through options within the
          group, while Tab moves focus to the next form control outside the
          group.
        </p>
        <DocCallout variant="info" title="Pre-selection">
          If a sensible default exists, pre-select it to reduce friction.
          If no default makes sense, leave all radios unselected and validate on
          submission.
        </DocCallout>
      </DocSection>

      <DocSection title="Accessibility">
        <ul className="pl-5 mb-4">
          <li className="mb-2">
            Use native <code>&lt;input type=&quot;radio&quot;&gt;</code> elements with matching <code>name</code> attributes.
          </li>
          <li className="mb-2">
            Wrap the group in a <code>&lt;fieldset&gt;</code> with a <code>&lt;legend&gt;</code> that describes the question.
          </li>
          <li className="mb-2">
            Arrow keys should move focus between radios; Tab should exit the group.
          </li>
          <li>
            Ensure focus indicators meet minimum 3:1 contrast ratio.
          </li>
        </ul>
      </DocSection>

      <DocSection title="Usage guidelines">
        <p className="mb-4">
          Present options in a logical order — by recommendation, frequency of
          use, or alphabetically. The recommended or most common option can be
          pre-selected to speed up decision-making.
        </p>
        <p>
          Always use radio buttons in a group of at least two. A single radio
          button has no clear behavior and confuses users. If only one toggle
          is needed, use a checkbox or switch.
        </p>
      </DocSection>

      <DocSection title="Do / Don't">
        <DoDontGrid
          doItems={[
            { description: "Use radios when the user must pick exactly one option from a visible list." },
            { description: "Wrap radio groups in a fieldset with a legend." },
            { description: "Pre-select a recommended default when appropriate." },
            { description: "Keep the list to 2–5 options for best usability." },
          ]}
          dontItems={[
            { description: "Don't use a single radio button — use a checkbox or switch instead." },
            { description: "Don't use radios for multi-select — use checkboxes." },
            { description: "Don't place radio options in a horizontal row unless there are only 2–3 short labels." },
            { description: "Don't change page content on radio selection without warning the user." },
          ]}
        />
      </DocSection>

      <DocSection title="Specs">
        <DocTable
          headers={["Property", "Value"]}
          rows={[
            ["Control border radius", "50% (circle)"],
            ["Control border", "2px solid var(--color-border)"],
            ["Selected fill", "var(--color-primary)"],
            ["Inner dot size", "8px (medium)"],
            ["Label gap", "var(--spacing-2)"],
            ["Group spacing", "var(--spacing-3) between items"],
            ["Focus ring", "2px offset, primary color"],
          ]}
        />
      </DocSection>

      <DocSection title="Examples">
        <DocPreview title="Radio group">
          <fieldset style={{ border: "none", padding: 0, margin: 0 }}>
            <legend
              className="text-body-02 text-text-neutral-default mb-3"
              style={{ fontWeight: 500 }}
            >
              Shipping method
            </legend>
            {["Standard (5–7 days)", "Express (2–3 days)", "Overnight"].map(
              (label, i) => (
                <label
                  key={label}
                  className="gap-2 mb-2 text-body-02 text-text-neutral-secondary"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="radio"
                    name="shipping"
                    defaultChecked={i === 0}
                  />
                  {label}
                </label>
              )
            )}
          </fieldset>
        </DocPreview>
      </DocSection>
    </>
  );
}
