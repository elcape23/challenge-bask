import DocHeader from "@/components/docs/DocHeader";
import DocSection from "@/components/docs/DocSection";
import DocTable from "@/components/docs/DocTable";
import DocCallout from "@/components/docs/DocCallout";
import DoDontGrid from "@/components/docs/DoDontGrid";
import DocPreview from "@/components/docs/DocPreview";
import DocAnatomy from "@/components/docs/DocAnatomy";

export default function DividerPage() {
  return (
    <>
      <DocHeader
        title="Divider"
        description="Dividers create visual separation between sections or items, helping organize content into scannable groups."
      />

      <DocSection title="Overview">
        <p className="mb-4">
          Dividers create visual separation between sections or items, helping
          organize content into scannable groups. A horizontal line between
          paragraphs, a vertical line between icons in a toolbar, or a labeled
          divider (e.g., &quot;Or continue with&quot;) all help users parse
          content more quickly.
        </p>
        <p>
          Use dividers sparingly — too many create visual noise. Prefer
          whitespace for subtle separation; reserve dividers for clear
          boundaries between distinct content blocks.
        </p>
      </DocSection>

      <DocSection title="Anatomy">
        <DocAnatomy
          items={[
            {
              label: "Line",
              description:
                "The separator itself — a 1px line using the border color token. Can be horizontal (full-width) or vertical (full-height).",
            },
            {
              label: "Label (optional)",
              description:
                "Centered text between two line segments. Used for &quot;or&quot; dividers in forms or section headers within lists.",
            },
          ]}
        />
        <DocPreview title="Anatomy example">
          <div className="flex flex-col gap-6 w-full max-w-sm">
            <div className="h-px w-full bg-border" />
            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-border" />
              <span className="text-body-03 text-text-neutral-placeholder">or</span>
              <div className="h-px flex-1 bg-border" />
            </div>
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="Variants">
        <DocTable
          headers={["Variant", "Description", "When to use"]}
          rows={[
            [
              "Horizontal",
              "Full-width line spanning the container",
              "Between paragraphs, list sections, or major content blocks.",
            ],
            [
              "Vertical",
              "Full-height line between inline elements",
              "Between icons in a toolbar, between buttons in a button group, or in a horizontal nav.",
            ],
            [
              "With label",
              "Line with centered text (e.g., &quot;or&quot;, &quot;Today&quot;)",
              "Form dividers between sign-in methods, date separators in timelines, or section headers in lists.",
            ],
          ]}
        />
        <DocPreview title="Horizontal divider">
          <div className="w-full max-w-sm space-y-4">
            <p className="text-body-02 text-text-neutral-secondary m-0">
              Content above the divider.
            </p>
            <hr className="border-0 h-px bg-border m-0" />
            <p className="text-body-02 text-text-neutral-secondary m-0">
              Content below the divider.
            </p>
          </div>
        </DocPreview>
        <DocPreview title="With label">
          <div className="w-full max-w-sm">
            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-border" />
              <span className="text-body-03 text-text-neutral-placeholder shrink-0">
                Or continue with
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>
          </div>
        </DocPreview>
        <DocPreview title="Vertical divider">
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="px-3 py-1.5 text-body-02 font-medium border border-border-neutral-default rounded-md bg-white text-text-neutral-default"
            >
              Edit
            </button>
            <div className="w-px h-8 bg-border" aria-hidden="true" />
            <button
              type="button"
              className="px-3 py-1.5 text-body-02 font-medium border border-border-neutral-default rounded-md bg-white text-text-neutral-default"
            >
              Delete
            </button>
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="Behavior">
        <p className="mb-4">
          Dividers are purely decorative — they do not respond to interaction.
          They inherit the width or height of their container. For vertical
          dividers, ensure the parent has a defined height (e.g., via flex
          alignment) so the line renders correctly.
        </p>
        <DocCallout variant="info" title="Semantic HTML">
          Use <code>&lt;hr&gt;</code> for horizontal dividers when they
          represent a thematic break. Use a <code>div</code> with{" "}
          <code>aria-hidden=&quot;true&quot;</code> for purely visual separators
          to avoid cluttering screen reader output.
        </DocCallout>
      </DocSection>

      <DocSection title="Accessibility">
        <ul className="pl-5 mb-4">
          <li className="mb-2">
            Use <code>aria-hidden=&quot;true&quot;</code> on decorative
            dividers so screen readers skip them.
          </li>
          <li className="mb-2">
            For labeled dividers, ensure the label text is readable by assistive
            technology — it is part of the content flow.
          </li>
          <li>
            Avoid using dividers as the only way to convey structure; pair with
            headings or semantic markup when possible.
          </li>
        </ul>
      </DocSection>

      <DocSection title="Usage guidelines">
        <p className="mb-4">
          Place dividers between logically distinct sections, not between every
          item. In a settings list, a divider before &quot;Danger zone&quot; is
          useful; a divider between each setting is excessive.
        </p>
        <p>
          For vertical dividers in button groups, ensure adequate spacing so
          the line is visible but not overwhelming. A 4–8px gap on each side is
          typical.
        </p>
      </DocSection>

      <DocSection title="Do / Don't">
        <DoDontGrid
          doItems={[
            {
              description:
                "Use dividers to separate major content blocks or sections.",
            },
            {
              description:
                "Use labeled dividers for form flows (e.g., \"Or sign in with email\").",
            },
            {
              description:
                "Use vertical dividers between related inline actions (e.g., Edit | Delete).",
            },
            {
              description:
                "Prefer whitespace when separation is subtle; reserve dividers for clear boundaries.",
            },
          ]}
          dontItems={[
            {
              description:
                "Don't add a divider between every list item — it creates visual noise.",
            },
            {
              description:
                "Don't use thick or highly colored dividers — keep them subtle.",
            },
            {
              description:
                "Don't rely on dividers alone to convey hierarchy; use headings when structure matters.",
            },
            {
              description:
                "Don't use dividers in place of proper spacing or grouping.",
            },
          ]}
        />
      </DocSection>

      <DocSection title="Specs">
        <DocTable
          headers={["Property", "Value"]}
          rows={[
            ["Thickness", "1px"],
            ["Color", "var(--color-border) / border-border-neutral-default"],
            ["Label font size", "body-03 (11px)"],
            ["Label color", "text-text-neutral-placeholder"],
          ]}
        />
      </DocSection>

      <DocSection title="Examples">
        <DocPreview title="Horizontal dividers">
          <div className="w-full max-w-sm space-y-4">
            <p className="text-body-02 text-text-neutral-default m-0">Section one</p>
            <hr className="border-0 h-px bg-border m-0" />
            <p className="text-body-02 text-text-neutral-default m-0">Section two</p>
            <hr className="border-0 h-px bg-border m-0" />
            <p className="text-body-02 text-text-neutral-default m-0">Section three</p>
          </div>
        </DocPreview>
        <DocPreview title="With label (sign-in divider)">
          <div className="w-full max-w-sm">
            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-border" />
              <span className="text-body-03 text-text-neutral-placeholder shrink-0">
                Or continue with
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>
          </div>
        </DocPreview>
        <DocPreview title="Vertical divider in button group">
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="px-3 py-1.5 text-body-02 font-medium border border-border-neutral-default rounded-md bg-white text-text-neutral-default"
            >
              Save
            </button>
            <div className="w-px h-8 bg-border" aria-hidden="true" />
            <button
              type="button"
              className="px-3 py-1.5 text-body-02 font-medium border border-border-neutral-default rounded-md bg-white text-text-neutral-default"
            >
              Cancel
            </button>
          </div>
        </DocPreview>
      </DocSection>
    </>
  );
}
