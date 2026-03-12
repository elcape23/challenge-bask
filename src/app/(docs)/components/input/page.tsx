import DocHeader from "@/components/docs/DocHeader";
import DocSection from "@/components/docs/DocSection";
import DocTable from "@/components/docs/DocTable";
import DocCallout from "@/components/docs/DocCallout";
import DoDontGrid from "@/components/docs/DoDontGrid";
import DocPreview from "@/components/docs/DocPreview";
import DocAnatomy from "@/components/docs/DocAnatomy";

export default function InputPage() {
  return (
    <>
      <DocHeader
        title="Input"
        description="Inputs let users enter and edit short-form text. They are the most common form control and the foundation of data collection."
      />

      <DocSection title="Overview">
        <p className="mb-4">
          Text inputs are used wherever the interface needs to collect a short
          string of text — names, emails, search queries, or single-line
          answers. Every input should have a visible label and, when applicable,
          helper text that guides the user toward a valid response.
        </p>
        <p>
          Combine inputs with validation feedback to reduce errors before
          submission. Inputs support prefixes, suffixes, and icons to provide
          additional context without requiring extra labels.
        </p>
      </DocSection>

      <DocSection title="Anatomy">
        <DocAnatomy
          items={[
            {
              label: "Label",
              description:
                "A short, descriptive text above the field. Always visible — never rely on placeholder text as the only label.",
            },
            {
              label: "Input field",
              description:
                "The editable area where users type. It includes padding, a border, and a background that changes across states.",
            },
            {
              label: "Helper text",
              description:
                "Optional guidance below the field. Use it to clarify formatting requirements or provide examples.",
            },
            {
              label: "Error message",
              description:
                "Replaces helper text when validation fails. Clearly describes the problem and how to fix it.",
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
              "Standard text input with label and optional helper text",
              "Most form fields — name, email, address, etc.",
            ],
            [
              "With icon",
              "A leading icon inside the field to reinforce meaning",
              "Search fields, phone inputs, URL fields where a visual cue reduces ambiguity.",
            ],
            [
              "With suffix",
              "A trailing element such as a unit label or action button",
              "Currency inputs (USD), weight fields (kg), or inputs with a clear/reveal toggle.",
            ],
          ]}
        />
      </DocSection>

      <DocSection title="Sizes">
        <DocTable
          headers={["Size", "Height", "Use case"]}
          rows={[
            ["Small", "32px", "Compact forms, table editing, filters."],
            ["Medium", "40px", "Default for most form contexts."],
            ["Large", "48px", "Prominent inputs like search bars or onboarding forms."],
          ]}
        />
      </DocSection>

      <DocSection title="States">
        <p className="mb-4">
          Inputs transition between states based on user interaction and
          validation results.
        </p>
        <DocTable
          headers={["State", "Visual treatment", "Behavior"]}
          rows={[
            [
              "Default",
              "Subtle border, neutral background",
              "Ready for input. Placeholder text may be shown.",
            ],
            [
              "Focus",
              "Primary-color border, focus ring",
              "The field is active and receiving keystrokes.",
            ],
            [
              "Error",
              "Critical-color border, error icon",
              "Validation has failed. Error message replaces helper text.",
            ],
            [
              "Disabled",
              "Muted background, reduced opacity",
              "Non-interactive. The value is visible but cannot be changed.",
            ],
          ]}
        />
      </DocSection>

      <DocSection title="Behavior">
        <p className="mb-4">
          Validate inputs on blur by default — this avoids distracting the user
          mid-typing. For fields with strict formatting (e.g., credit card
          numbers), inline validation on each keystroke can help users correct
          errors early.
        </p>
        <DocCallout variant="warning" title="Avoid placeholder-only labels">
          Placeholder text disappears on focus, which means users lose context
          about what the field expects. Always pair placeholders with a
          persistent label.
        </DocCallout>
      </DocSection>

      <DocSection title="Accessibility">
        <ul className="pl-5 mb-4">
          <li className="mb-2">
            Associate labels with inputs using <code>htmlFor</code> and matching <code>id</code>.
          </li>
          <li className="mb-2">
            Use <code>aria-describedby</code> to link helper text and error
            messages to the input.
          </li>
          <li className="mb-2">
            Set <code>aria-invalid=&quot;true&quot;</code> when the field is in an
            error state.
          </li>
          <li className="mb-2">
            Ensure the focus ring meets a minimum 3:1 contrast ratio.
          </li>
          <li>
            Announce error messages to screen readers using <code>aria-live=&quot;polite&quot;</code>.
          </li>
        </ul>
      </DocSection>

      <DocSection title="Usage guidelines">
        <p className="mb-4">
          Match the input width to the expected length of the value. A zip code
          field should be noticeably narrower than a full-name field. This visual
          cue helps users predict the expected input at a glance.
        </p>
        <p>
          Group related inputs (first name / last name, city / state / zip)
          using fieldsets and consistent spacing to reduce cognitive load.
        </p>
      </DocSection>

      <DocSection title="Do / Don't">
        <DoDontGrid
          doItems={[
            { description: "Always show a visible label above or beside the input." },
            { description: "Size input widths proportionally to the expected content." },
            { description: "Provide specific error messages that tell users how to fix the issue." },
            { description: "Use helper text for formatting hints (e.g., \"MM/DD/YYYY\")." },
          ]}
          dontItems={[
            { description: "Don't rely on placeholder text as the only label." },
            { description: "Don't validate on every keystroke unless formatting guidance is necessary." },
            { description: "Don't use generic errors like \"Invalid input\" — be specific." },
            { description: "Don't remove the label when the field is focused." },
          ]}
        />
      </DocSection>

      <DocSection title="Specs">
        <DocTable
          headers={["Property", "Value"]}
          rows={[
            ["Border radius", "var(--radius-md)"],
            ["Border width", "1px"],
            ["Padding (medium)", "var(--spacing-2) var(--spacing-3)"],
            ["Font size", "var(--font-size-body-02)"],
            ["Label font size", "var(--font-size-body-02)"],
            ["Label margin bottom", "var(--spacing-1)"],
            ["Helper text font size", "var(--font-size-body-03)"],
            ["Focus ring", "2px offset, primary color"],
          ]}
        />
      </DocSection>

      <DocSection title="Examples">
        <DocPreview title="Default input">
          <div style={{ width: "280px" }}>
            <label
              className="text-body-02 text-text-neutral-default mb-1"
              style={{
                display: "block",
                fontWeight: 500,
              }}
            >
              Email address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="py-2 px-3 border border-border-neutral-default rounded-md text-body-02"
              style={{
                width: "100%",
                outline: "none",
              }}
            />
            <span
              className="mt-1 text-body-03 text-text-neutral-placeholder"
              style={{ display: "block" }}
            >
              We&apos;ll never share your email.
            </span>
          </div>
        </DocPreview>
        <DocPreview title="Error state">
          <div style={{ width: "280px" }}>
            <label
              className="text-body-02 text-text-neutral-default mb-1"
              style={{
                display: "block",
                fontWeight: 500,
              }}
            >
              Username
            </label>
            <input
              type="text"
              defaultValue="ab"
              className="py-2 px-3 border border-critical rounded-md text-body-02"
              style={{
                width: "100%",
                outline: "none",
              }}
            />
            <span
              className="mt-1 text-body-03 text-critical"
              style={{ display: "block" }}
            >
              Username must be at least 3 characters.
            </span>
          </div>
        </DocPreview>
      </DocSection>
    </>
  );
}
