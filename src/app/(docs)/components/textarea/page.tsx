import DocHeader from "@/components/docs/DocHeader";
import DocSection from "@/components/docs/DocSection";
import DocTable from "@/components/docs/DocTable";
import DocCallout from "@/components/docs/DocCallout";
import DoDontGrid from "@/components/docs/DoDontGrid";
import DocPreview from "@/components/docs/DocPreview";
import DocAnatomy from "@/components/docs/DocAnatomy";

export default function TextareaPage() {
  return (
    <>
      <DocHeader
        title="Textarea"
        description="Textareas capture multi-line text input, ideal for comments, descriptions, and any freeform content that exceeds a single line."
      />

      <DocSection title="Overview">
        <p className="mb-4">
          Use a textarea when the expected input spans multiple lines — feedback
          forms, descriptions, notes, or message bodies. The textarea grows with
          content or can be manually resized by the user, depending on the
          configuration.
        </p>
        <p>
          For single-line text, always use an input instead. Textareas imply
          longer content, so their visual size should set appropriate
          expectations about the amount of text needed.
        </p>
      </DocSection>

      <DocSection title="Anatomy">
        <DocAnatomy
          items={[
            {
              label: "Label",
              description:
                "Describes the expected content. Positioned above the field, always visible.",
            },
            {
              label: "Textarea field",
              description:
                "The multi-line editable area. Supports vertical resizing by default.",
            },
            {
              label: "Helper text",
              description:
                "Optional guidance below the field. Use it for formatting tips or content expectations.",
            },
            {
              label: "Character count",
              description:
                "An optional counter shown when a maximum length applies. Updates in real time as the user types.",
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
              "Fixed-height textarea that the user can resize vertically",
              "Comments, descriptions, general freeform text.",
            ],
            [
              "Auto-growing",
              "Textarea that expands automatically as the user types",
              "Message composers, inline editing, or anywhere a fixed height feels restrictive.",
            ],
            [
              "With character count",
              "Includes a live character counter near the field",
              "Fields with a maximum length (bios, tweet-style inputs, metadata descriptions).",
            ],
          ]}
        />
      </DocSection>

      <DocSection title="Sizes">
        <DocTable
          headers={["Size", "Default rows", "Use case"]}
          rows={[
            ["Small", "2 rows", "Short notes, single-paragraph comments."],
            ["Medium", "4 rows", "Default for most textarea contexts."],
            ["Large", "8 rows", "Long-form content like articles, descriptions, or documentation."],
          ]}
        />
      </DocSection>

      <DocSection title="States">
        <DocTable
          headers={["State", "Description"]}
          rows={[
            ["Default", "The field is ready for input. Placeholder text may be displayed."],
            ["Focus", "Primary-color border and focus ring. The user is actively typing."],
            ["Error", "Critical-color border. An error message replaces helper text."],
            ["Disabled", "Muted background and reduced opacity. Content is readable but not editable."],
            ["Read-only", "Standard appearance but non-editable. Use when showing saved content."],
          ]}
        />
      </DocSection>

      <DocSection title="Behavior">
        <p className="mb-4">
          By default, the textarea allows vertical resizing. Set a minimum and
          maximum height to prevent the field from becoming too small or
          overwhelming the layout. In auto-grow mode, the field height adjusts
          with each line break.
        </p>
        <DocCallout variant="info" title="Character count">
          Display the character count when approaching the limit (e.g., show
          &quot;142 / 160&quot; once the user exceeds 80% of the maximum).
          Change the counter color to critical when the limit is reached.
        </DocCallout>
      </DocSection>

      <DocSection title="Accessibility">
        <ul className="pl-5 mb-4">
          <li className="mb-2">
            Associate labels with the textarea using <code>htmlFor</code> and matching <code>id</code>.
          </li>
          <li className="mb-2">
            Use <code>aria-describedby</code> to link helper text, error messages, and character count.
          </li>
          <li className="mb-2">
            Set <code>aria-invalid=&quot;true&quot;</code> when validation fails.
          </li>
          <li>
            Announce character limit warnings to screen readers using <code>aria-live=&quot;polite&quot;</code>.
          </li>
        </ul>
      </DocSection>

      <DocSection title="Usage guidelines">
        <p className="mb-4">
          Set the initial height to match the expected content length. A two-row
          textarea for a 500-word description feels cramped. Conversely, an
          eight-row textarea for a single sentence wastes space and confuses
          users about the expected input.
        </p>
        <p>
          When a maximum length is enforced, always show the character count so
          users can self-regulate. Truncating content silently leads to
          frustration and data loss.
        </p>
      </DocSection>

      <DocSection title="Do / Don't">
        <DoDontGrid
          doItems={[
            { description: "Set the initial height proportional to the expected content length." },
            { description: "Show a character count when a maximum length is enforced." },
            { description: "Use placeholder text to show an example, not as a replacement for the label." },
            { description: "Allow vertical resizing so users can expand the field as needed." },
          ]}
          dontItems={[
            { description: "Don't use a textarea for single-line input — use an input instead." },
            { description: "Don't silently truncate content that exceeds the character limit." },
            { description: "Don't disable resizing unless the layout strictly requires fixed dimensions." },
            { description: "Don't use a very tall textarea for short expected inputs." },
          ]}
        />
      </DocSection>

      <DocSection title="Specs">
        <DocTable
          headers={["Property", "Value"]}
          rows={[
            ["Border radius", "var(--radius-md)"],
            ["Border", "1px solid var(--color-border)"],
            ["Padding", "var(--spacing-3)"],
            ["Font size", "var(--font-size-body-02)"],
            ["Line height", "var(--font-size-body-01--line-height)"],
            ["Resize", "vertical (default)"],
            ["Focus ring", "2px offset, primary color"],
            ["Counter font size", "var(--font-size-body-03)"],
          ]}
        />
      </DocSection>

      <DocSection title="Examples">
        <DocPreview title="Default textarea">
          <div style={{ width: "320px" }}>
            <label
              className="text-body-02 text-text-neutral-default mb-1"
              style={{
                display: "block",
                fontWeight: 500,
              }}
            >
              Description
            </label>
            <textarea
              rows={4}
              placeholder="Describe the issue in detail…"
              className="p-3 border border-border-neutral-default rounded-md text-body-02"
              style={{
                width: "100%",
                lineHeight: "var(--font-size-body-01--line-height)",
                resize: "vertical",
                outline: "none",
              }}
            />
            <div
              className="mt-1"
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span className="text-body-03 text-text-neutral-placeholder">
                Be as specific as possible.
              </span>
              <span className="text-body-03 text-text-neutral-placeholder">
                0 / 500
              </span>
            </div>
          </div>
        </DocPreview>
      </DocSection>
    </>
  );
}
