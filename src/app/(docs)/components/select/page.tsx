import DocHeader from "@/components/docs/DocHeader";
import DocSection from "@/components/docs/DocSection";
import DocTable from "@/components/docs/DocTable";
import DocCallout from "@/components/docs/DocCallout";
import DoDontGrid from "@/components/docs/DoDontGrid";
import DocPreview from "@/components/docs/DocPreview";
import DocAnatomy from "@/components/docs/DocAnatomy";

export default function SelectPage() {
  return (
    <>
      <DocHeader
        title="Select"
        description="Selects let users choose a single value from a predefined list of options, saving space compared to radio groups."
      />

      <DocSection title="Overview">
        <p className="mb-4">
          Use a select when you have more than five options and limited screen
          space. For shorter lists, consider a radio group instead — it makes all
          options visible at once and reduces the number of interactions.
        </p>
        <p>
          The select component is built on a custom dropdown to ensure visual
          consistency and accessibility across browsers. It supports search
          filtering, grouped options, and keyboard navigation.
        </p>
      </DocSection>

      <DocSection title="Anatomy">
        <DocAnatomy
          items={[
            {
              label: "Label",
              description:
                "Describes what the user is selecting. Placed above the trigger and always visible.",
            },
            {
              label: "Trigger",
              description:
                "The clickable surface that opens the dropdown. Displays the currently selected value or placeholder text.",
            },
            {
              label: "Dropdown",
              description:
                "The floating panel that contains the list of options. Positioned below or above the trigger depending on available space.",
            },
            {
              label: "Options",
              description:
                "Individual items in the list. Each option may include a label, description, and optional icon or avatar.",
            },
            {
              label: "Selected value",
              description:
                "The currently chosen option, displayed in the trigger once selected. A checkmark highlights it inside the dropdown.",
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
              "Standard single-select dropdown",
              "Country pickers, category filters, or any form field with a predefined list.",
            ],
            [
              "Searchable",
              "Includes a text filter at the top of the dropdown",
              "Long lists (10+ items) where users know what they're looking for.",
            ],
            [
              "Grouped",
              "Options organized under section headings",
              "Lists with natural categories, like time zones grouped by region.",
            ],
          ]}
        />
      </DocSection>

      <DocSection title="Sizes">
        <DocTable
          headers={["Size", "Height", "Use case"]}
          rows={[
            ["Small", "32px", "Dense layouts, filters, table controls."],
            ["Medium", "40px", "Standard form fields."],
            ["Large", "48px", "Prominent selections in onboarding or settings."],
          ]}
        />
      </DocSection>

      <DocSection title="States">
        <DocTable
          headers={["State", "Description"]}
          rows={[
            ["Default", "Trigger shows placeholder or selected value. Border is neutral."],
            ["Hover", "Trigger border subtly intensifies to signal interactivity."],
            ["Open", "Dropdown is visible. Trigger has an active/focus appearance."],
            ["Focus", "Visible focus ring on the trigger when navigated via keyboard."],
            ["Error", "Critical-color border. Error message shown below the trigger."],
            ["Disabled", "Muted appearance. The trigger is non-interactive."],
          ]}
        />
      </DocSection>

      <DocSection title="Behavior">
        <p className="mb-4">
          Clicking the trigger opens the dropdown below it. The dropdown closes
          when the user selects an option, clicks outside, or presses Escape.
          Arrow keys navigate options, Enter confirms a selection, and typing
          characters jumps to matching items.
        </p>
        <DocCallout variant="info" title="Dropdown positioning">
          When there is not enough space below the trigger, the dropdown
          automatically flips above it. The component uses a collision-aware
          positioning strategy to stay within the viewport.
        </DocCallout>
      </DocSection>

      <DocSection title="Accessibility">
        <ul className="pl-5 mb-4">
          <li className="mb-2">
            The trigger uses <code>role=&quot;combobox&quot;</code> with <code>aria-expanded</code> and <code>aria-haspopup=&quot;listbox&quot;</code>.
          </li>
          <li className="mb-2">
            Options use <code>role=&quot;option&quot;</code> with <code>aria-selected</code> to indicate the active choice.
          </li>
          <li className="mb-2">
            The label is associated with the trigger via <code>aria-labelledby</code>.
          </li>
          <li className="mb-2">
            Full keyboard navigation: Arrow keys, Enter, Escape, Home, End, and type-ahead.
          </li>
          <li>
            Error messages are linked to the trigger with <code>aria-describedby</code>.
          </li>
        </ul>
      </DocSection>

      <DocSection title="Usage guidelines">
        <p className="mb-4">
          Default to a meaningful placeholder such as &quot;Select a
          country&quot; rather than a blank trigger. If a sensible default exists
          (e.g., the user&apos;s detected country), pre-select it to reduce
          effort.
        </p>
        <p>
          For forms where the user must select a value, validate on blur and
          display an error message when no option has been chosen. Avoid using a
          disabled first option as a pseudo-placeholder.
        </p>
      </DocSection>

      <DocSection title="Do / Don't">
        <DoDontGrid
          doItems={[
            { description: "Use a select for lists with more than 5 options." },
            { description: "Provide a descriptive placeholder like \"Choose a category\"." },
            { description: "Enable search filtering for lists with 10+ items." },
            { description: "Pre-select a sensible default when one exists." },
          ]}
          dontItems={[
            { description: "Don't use a select for binary choices — use a switch or radio instead." },
            { description: "Don't nest selects inside other selects or dropdowns." },
            { description: "Don't truncate option labels — ensure the dropdown is wide enough." },
            { description: "Don't use a disabled option as a placeholder." },
          ]}
        />
      </DocSection>

      <DocSection title="Specs">
        <DocTable
          headers={["Property", "Value"]}
          rows={[
            ["Trigger border radius", "var(--radius-md)"],
            ["Dropdown border radius", "var(--radius-md)"],
            ["Dropdown shadow", "var(--shadow-lg)"],
            ["Option padding", "var(--spacing-2) var(--spacing-3)"],
            ["Option hover background", "var(--color-subtle)"],
            ["Max dropdown height", "240px"],
            ["Transition", "opacity 150ms ease, transform 150ms ease"],
          ]}
        />
      </DocSection>

      <DocSection title="Examples">
        <DocPreview title="Default select">
          <div style={{ width: "280px" }}>
            <label
              className="text-body-02 text-text-neutral-default mb-1"
              style={{
                display: "block",
                fontWeight: 500,
              }}
            >
              Country
            </label>
            <select
              className="py-2 px-3 border border-border-neutral-default rounded-md text-body-02 text-text-neutral-default bg-white"
              style={{ width: "100%" }}
              defaultValue=""
            >
              <option value="" disabled>
                Select a country
              </option>
              <option>United States</option>
              <option>United Kingdom</option>
              <option>Canada</option>
              <option>Australia</option>
            </select>
          </div>
        </DocPreview>
      </DocSection>
    </>
  );
}
