import DocHeader from "@/components/docs/DocHeader";
import DocSection from "@/components/docs/DocSection";
import DocTable from "@/components/docs/DocTable";
import DocCallout from "@/components/docs/DocCallout";
import DoDontGrid from "@/components/docs/DoDontGrid";
import DocPreview from "@/components/docs/DocPreview";
import DocAnatomy from "@/components/docs/DocAnatomy";

export default function LabelPage() {
  return (
    <>
      <DocHeader
        title="Label"
        description="Labels identify form controls and provide essential context, ensuring users understand what information is expected."
      />

      <DocSection title="Overview">
        <p className="mb-4">
          Labels identify form controls and provide essential context, ensuring
          users understand what information is expected. Every form field should
          have a visible label — never rely on placeholder text alone.
        </p>
        <p>
          Labels appear above or beside the input. They can include a required
          indicator (asterisk or text), helper text for guidance, and error text
          when validation fails. Consistent label styling helps users scan forms
          quickly.
        </p>
      </DocSection>

      <DocSection title="Anatomy">
        <DocAnatomy
          items={[
            {
              label: "Label text",
              description:
                "The primary text that identifies the form control. Short, descriptive, and always visible.",
            },
            {
              label: "Required indicator (optional)",
              description:
                "An asterisk or \"Required\" text when the field is mandatory. Uses danger color for visibility.",
            },
            {
              label: "Helper text (optional)",
              description:
                "Additional guidance below the label or input. Muted color, smaller font. Clarifies format or expectations.",
            },
            {
              label: "Error text (optional)",
              description:
                "Validation message when the field is invalid. Replaces helper text. Uses danger color.",
            },
          ]}
        />
        <DocPreview title="Anatomy example">
          <div className="w-full max-w-[280px]">
            <label
              className="text-body-02 font-medium text-text-neutral-default block mb-1"
              htmlFor="label-demo"
            >
              Email address
            </label>
            <input
              id="label-demo"
              type="email"
              placeholder="you@example.com"
              className="w-full py-2 px-3 border border-border-neutral-default rounded-md text-body-02 bg-white"
            />
            <span className="mt-1 block text-body-03 text-text-neutral-placeholder">
              We&apos;ll never share your email.
            </span>
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="Variants">
        <DocTable
          headers={["Variant", "Description", "When to use"]}
          rows={[
            [
              "Default",
              "Standard label above the input",
              "Most form fields — name, email, address, etc.",
            ],
            [
              "Required",
              "Label with asterisk or \"Required\" indicator",
              "Fields that must be completed before submission.",
            ],
            [
              "With helper text",
              "Label with descriptive text below the input",
              "When format hints, examples, or clarification are needed.",
            ],
            [
              "With error",
              "Label with validation message in danger color",
              "When the field fails validation. Error replaces helper text.",
            ],
          ]}
        />
        <DocPreview title="Default label">
          <div className="w-full max-w-[280px]">
            <label
              className="text-body-02 font-medium text-text-neutral-default block mb-1"
              htmlFor="label-default"
            >
              Full name
            </label>
            <input
              id="label-default"
              type="text"
              placeholder="Jane Doe"
              className="w-full py-2 px-3 border border-border-neutral-default rounded-md text-body-02 bg-white"
            />
          </div>
        </DocPreview>
        <DocPreview title="Required label">
          <div className="w-full max-w-[280px]">
            <label
              className="text-body-02 font-medium text-text-neutral-default block mb-1"
              htmlFor="label-required"
            >
              Email address{" "}
              <span className="text-danger-500" aria-hidden="true">
                *
              </span>
            </label>
            <input
              id="label-required"
              type="email"
              placeholder="you@example.com"
              required
              className="w-full py-2 px-3 border border-border-neutral-default rounded-md text-body-02 bg-white"
            />
          </div>
        </DocPreview>
        <DocPreview title="With helper text">
          <div className="w-full max-w-[280px]">
            <label
              className="text-body-02 font-medium text-text-neutral-default block mb-1"
              htmlFor="label-helper"
            >
              Date of birth
            </label>
            <input
              id="label-helper"
              type="text"
              placeholder="MM/DD/YYYY"
              className="w-full py-2 px-3 border border-border-neutral-default rounded-md text-body-02 bg-white"
            />
            <span className="mt-1 block text-body-03 text-text-neutral-placeholder">
              Enter in MM/DD/YYYY format.
            </span>
          </div>
        </DocPreview>
        <DocPreview title="With error">
          <div className="w-full max-w-[280px]">
            <label
              className="text-body-02 font-medium text-text-neutral-default block mb-1"
              htmlFor="label-error"
            >
              Username
            </label>
            <input
              id="label-error"
              type="text"
              defaultValue="ab"
              className="w-full py-2 px-3 border border-danger-400 rounded-md text-body-02 bg-white"
            />
            <span className="mt-1 block text-body-03 text-danger-500">
              Username must be at least 3 characters.
            </span>
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="States">
        <DocTable
          headers={["State", "Visual treatment", "Description"]}
          rows={[
            [
              "Default",
              "Standard font weight and foreground color",
              "The label is associated with an available input.",
            ],
            [
              "With focus",
              "Input receives focus; label styling unchanged",
              "The label remains visible. Never hide the label on focus.",
            ],
            [
              "With error",
              "Error text in danger color below the input",
              "Validation has failed. Error message replaces helper text.",
            ],
            [
              "Disabled",
              "Input is disabled; label may use muted color",
              "The field is non-interactive. Label remains for context.",
            ],
          ]}
        />
      </DocSection>

      <DocSection title="Behavior">
        <p className="mb-4">
          Labels are associated with form controls via <code>htmlFor</code> and
          matching <code>id</code>. Clicking the label focuses the input, which
          improves usability especially on touch devices.
        </p>
        <p>
          When validation fails, replace helper text with the error message.
          Never show both at once — the error takes precedence. Clear the error
          when the user corrects the input.
        </p>
      </DocSection>

      <DocSection title="Accessibility">
        <ul className="pl-5 mb-4">
          <li className="mb-2">
            Always associate labels with inputs using <code>htmlFor</code> and
            matching <code>id</code>.
          </li>
          <li className="mb-2">
            Use <code>aria-describedby</code> to link helper text and error
            messages to the input.
          </li>
          <li className="mb-2">
            Mark the required indicator with <code>aria-hidden=&quot;true&quot;</code>{" "}
            so screen readers don&apos;t announce it twice (they infer required
            from the <code>required</code> attribute).
          </li>
          <li className="mb-2">
            Set <code>aria-invalid=&quot;true&quot;</code> when the field is in
            an error state.
          </li>
          <li>
            Ensure error messages are announced via{" "}
            <code>aria-live=&quot;polite&quot;</code> or <code>aria-describedby</code>.
          </li>
        </ul>
      </DocSection>

      <DocSection title="Usage guidelines">
        <p className="mb-4">
          Keep label text short — one to four words. Use sentence case. Be
          specific: &quot;Email address&quot; not &quot;Email&quot;; &quot;Phone
          number&quot; not &quot;Phone&quot; when the format matters.
        </p>
        <p>
          Place the required indicator (asterisk) immediately after the label
          text. Use consistent placement across all forms. Consider adding a
          &quot;* Required&quot; note at the top of long forms.
        </p>
      </DocSection>

      <DocSection title="Do / Don't">
        <DoDontGrid
          doItems={[
            {
              description:
                "Always show a visible label for every form control.",
            },
            {
              description:
                "Use helper text for format hints (e.g., \"MM/DD/YYYY\").",
            },
            {
              description:
                "Replace helper text with specific error messages when validation fails.",
            },
            {
              description:
                "Associate labels with inputs using htmlFor and id.",
            },
          ]}
          dontItems={[
            {
              description:
                "Don't rely on placeholder text as the only label.",
            },
            {
              description:
                "Don't hide the label when the input is focused.",
            },
            {
              description:
                "Don't use generic errors like \"Invalid input\" — be specific.",
            },
            {
              description:
                "Don't use vague labels like \"Field 1\" or \"Input\".",
            },
          ]}
        />
      </DocSection>

      <DocSection title="Specs">
        <DocTable
          headers={["Property", "Value"]}
          rows={[
            ["Font size", "body-02 (13px)"],
            ["Font weight", "500 (medium)"],
            ["Margin bottom", "space-1 (4px)"],
            ["Required indicator color", "danger-500"],
            ["Helper text font size", "body-03 (11px)"],
            ["Helper text color", "text-text-neutral-placeholder"],
            ["Error text color", "text-danger-500"],
          ]}
        />
      </DocSection>

      <DocSection title="Examples">
        <DocPreview title="Complete label with all elements">
          <div className="w-full max-w-[280px]">
            <label
              className="text-body-02 font-medium text-text-neutral-default block mb-1"
              htmlFor="label-complete"
            >
              Password{" "}
              <span className="text-danger-500" aria-hidden="true">
                *
              </span>
            </label>
            <input
              id="label-complete"
              type="password"
              placeholder="Enter your password"
              required
              className="w-full py-2 px-3 border border-border-neutral-default rounded-md text-body-02 bg-white"
            />
            <span className="mt-1 block text-body-03 text-text-neutral-placeholder">
              Must be at least 8 characters with a number.
            </span>
          </div>
        </DocPreview>
        <DocPreview title="Error state">
          <div className="w-full max-w-[280px]">
            <label
              className="text-body-02 font-medium text-text-neutral-default block mb-1"
              htmlFor="label-example-error"
            >
              Confirm password
            </label>
            <input
              id="label-example-error"
              type="password"
              defaultValue="wrong"
              className="w-full py-2 px-3 border border-danger-400 rounded-md text-body-02 bg-white"
            />
            <span className="mt-1 block text-body-03 text-danger-500">
              Passwords do not match.
            </span>
          </div>
        </DocPreview>
      </DocSection>
    </>
  );
}
