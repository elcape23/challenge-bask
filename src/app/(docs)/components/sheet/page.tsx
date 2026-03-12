import DocHeader from "@/components/docs/DocHeader";
import DocSection from "@/components/docs/DocSection";
import DocTable from "@/components/docs/DocTable";
import DocCallout from "@/components/docs/DocCallout";
import DoDontGrid from "@/components/docs/DoDontGrid";
import DocPreview from "@/components/docs/DocPreview";
import DocAnatomy from "@/components/docs/DocAnatomy";

function XIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-5"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

export default function SheetPage() {
  return (
    <>
      <DocHeader
        title="Sheet"
        description="Sheets are sliding panels that present secondary content, forms, or detail views alongside the main page without full navigation."
      />

      <DocSection title="Overview">
        <p className="mb-4">
          Sheets are sliding panels that present secondary content, forms, or
          detail views alongside the main page without full navigation. They
          slide in from the right, left, or bottom and overlay the main content
          with a dimmed backdrop.
        </p>
        <p>
          Use sheets for filters, settings, detail views, or forms that don&apos;t
          warrant a full page. They keep users in context while providing
          focused space for the secondary task. Close via the overlay click,
          close button, or Escape key.
        </p>
      </DocSection>

      <DocSection title="Anatomy">
        <DocAnatomy
          items={[
            {
              label: "Overlay",
              description:
                "Dimmed background that covers the main content. Clicking it closes the sheet. Uses semi-transparent black.",
            },
            {
              label: "Container",
              description:
                "The sliding panel itself. Has a shadow, background, and rounded corners on the inner edge(s).",
            },
            {
              label: "Header",
              description:
                "Title and close button. Fixed at the top. Provides context and a clear way to dismiss.",
            },
            {
              label: "Body",
              description:
                "Scrollable content area. Holds the main content — form fields, filters, or detail text.",
            },
            {
              label: "Footer (optional)",
              description:
                "Action buttons (e.g., Save, Cancel). Fixed at the bottom. Use when the sheet contains a form or requires explicit actions.",
            },
          ]}
        />
        <DocPreview title="Anatomy example">
          <div className="relative w-full max-w-md h-[320px] rounded-md border border-border-neutral-default overflow-hidden">
            {/* Overlay mock */}
            <div className="absolute inset-0 bg-neutral-900/40" />
            {/* Sheet container mock - right side */}
            <div className="absolute top-0 right-0 h-full w-[320px] bg-white shadow-md rounded-l-md flex flex-col">
              <div className="flex items-center justify-between px-4 py-3 border-b border-border-neutral-default shrink-0">
                <h3 className="text-body-02 font-medium text-text-neutral-default m-0">
                  Filter options
                </h3>
                <button
                  type="button"
                  className="p-1 rounded-md text-text-neutral-placeholder hover:text-text-neutral-default hover:bg-neutral-200"
                  aria-label="Close"
                >
                  <XIcon />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-4">
                <p className="text-body-02 text-text-neutral-secondary m-0">
                  Body content goes here. Forms, filters, or detail views.
                </p>
              </div>
              <div className="flex gap-2 justify-end px-4 py-3 border-t border-border-neutral-default shrink-0">
                <button
                  type="button"
                  className="px-3 py-1.5 text-body-02 font-medium border border-border-neutral-default rounded-md bg-white text-text-neutral-default"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="px-3 py-1.5 text-body-02 font-medium rounded-md bg-primary-900 text-primary-100"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="Variants">
        <DocTable
          headers={["Variant", "Description", "When to use"]}
          rows={[
            [
              "Right",
              "Panel slides in from the right edge",
              "Default for filters, settings, and detail views. Most common variant.",
            ],
            [
              "Left",
              "Panel slides in from the left edge",
              "When the sheet relates to navigation or when right is already occupied.",
            ],
            [
              "Bottom",
              "Panel slides up from the bottom",
              "Mobile-first patterns, action sheets, or short forms. Often full-width on mobile.",
            ],
          ]}
        />
        <DocPreview title="Right sheet (static mock)">
          <div className="relative w-full max-w-sm h-[200px] rounded-md border border-border-neutral-default overflow-hidden">
            <div className="absolute inset-0 bg-neutral-900/40" />
            <div className="absolute top-0 right-0 h-full w-64 bg-white shadow-md rounded-l-md p-4">
              <p className="text-body-02 text-text-neutral-default m-0">
                Right-aligned sheet content.
              </p>
            </div>
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="Sizes">
        <DocTable
          headers={["Size", "Width (horizontal) / Height (bottom)", "Use case"]}
          rows={[
            ["Default", "400px", "Filters, settings, short forms."],
            ["Wide", "560px", "Detail views with more content, complex forms."],
            ["Full", "100% on mobile", "Mobile-first; full-width panel on small screens."],
          ]}
        />
      </DocSection>

      <DocSection title="States">
        <DocTable
          headers={["State", "Description"]}
          rows={[
            [
              "Closed",
              "Sheet is not visible. Main content is fully accessible.",
            ],
            [
              "Open",
              "Sheet is visible and overlays the main content. Overlay is dimmed.",
            ],
            [
              "Closing",
              "Animation plays as the sheet slides out. Overlay fades. Typically 300ms ease.",
            ],
          ]}
        />
      </DocSection>

      <DocSection title="Behavior">
        <p className="mb-4">
          Opening a sheet typically triggers a slide-in animation (e.g., 300ms
          ease). The overlay fades in simultaneously. Focus moves to the sheet
          (usually the close button or first focusable element) and is trapped
          within it until the sheet is closed.
        </p>
        <p>
          Closing is triggered by: clicking the overlay, clicking the close
          button, pressing Escape, or completing a primary action (e.g., Save).
          On close, focus returns to the trigger element. The body scroll
          position resets when the sheet is closed.
        </p>
      </DocSection>

      <DocSection title="Accessibility">
        <ul className="pl-5 mb-4">
          <li className="mb-2">
            Use <code>role=&quot;dialog&quot;</code> and{" "}
            <code>aria-modal=&quot;true&quot;</code> on the sheet container.
          </li>
          <li className="mb-2">
            Provide an <code>aria-labelledby</code> pointing to the header title.
          </li>
          <li className="mb-2">
            Trap focus inside the sheet when open. Return focus to the trigger
            when closed.
          </li>
          <li className="mb-2">
            Close on Escape key. Ensure the close button has a clear
            <code>aria-label</code> (e.g., &quot;Close&quot;).
          </li>
          <li>
            Prevent body scroll when the sheet is open. Use{" "}
            <code>aria-hidden=&quot;true&quot;</code> on the main content.
          </li>
        </ul>
      </DocSection>

      <DocSection title="Usage guidelines">
        <p className="mb-4">
          Use sheets for secondary tasks that don&apos;t need a full page — filters,
          settings, detail views, or short forms. Avoid nesting sheets; if a
          sheet needs to open another, consider a full-page flow instead.
        </p>
        <p>
          On mobile, prefer bottom sheets or full-width panels. Right/left
          sheets work well on desktop. Ensure the sheet is usable at small
          viewport sizes — test with 320px width.
        </p>
      </DocSection>

      <DocSection title="Do / Don't">
        <DoDontGrid
          doItems={[
            {
              description:
                "Use sheets for filters, settings, or detail views that don't need a full page.",
            },
            {
              description:
                "Provide a clear close button and support Escape to close.",
            },
            {
              description:
                "Use a footer for form sheets with explicit Save/Cancel actions.",
            },
            {
              description:
                "Ensure the sheet is scrollable when content exceeds viewport height.",
            },
          ]}
          dontItems={[
            {
              description:
                "Don't nest sheets — it creates confusing navigation.",
            },
            {
              description:
                "Don't use sheets for critical primary flows; use full pages.",
            },
            {
              description:
                "Don't forget to trap focus and return it on close.",
            },
            {
              description:
                "Don't make sheets too wide on desktop — 400–560px is typical.",
            },
          ]}
        />
      </DocSection>

      <DocSection title="Specs">
        <DocTable
          headers={["Property", "Value"]}
          rows={[
            ["Width (default)", "400px"],
            ["Width (wide)", "560px"],
            ["Overlay opacity", "40% black (rgba(0,0,0,0.4))"],
            ["Shadow", "shadow-md on container"],
            ["Border radius", "rounded-md on inner edge(s) only"],
            ["Animation duration", "300ms"],
            ["Animation easing", "ease"],
          ]}
        />
      </DocSection>

      <DocSection title="Examples">
        <DocPreview title="Sheet with header, body, and footer">
          <div className="relative w-full max-w-md h-[280px] rounded-md border border-border-neutral-default overflow-hidden">
            <div className="absolute inset-0 bg-neutral-900/40" />
            <div className="absolute top-0 right-0 h-full w-80 bg-white shadow-md rounded-l-md flex flex-col">
              <div className="flex items-center justify-between px-4 py-3 border-b border-border-neutral-default">
                <h3 className="text-body-02 font-medium text-text-neutral-default m-0">
                  Edit profile
                </h3>
                <button
                  type="button"
                  className="p-1 rounded-md text-text-neutral-placeholder hover:text-text-neutral-default hover:bg-neutral-200"
                  aria-label="Close"
                >
                  <XIcon />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-4">
                <div className="space-y-4">
                  <div>
                    <label className="text-body-02 font-medium text-text-neutral-default block mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      defaultValue="Jane Doe"
                      className="w-full py-2 px-3 border border-border-neutral-default rounded-md text-body-02 bg-white"
                    />
                  </div>
                  <div>
                    <label className="text-body-02 font-medium text-text-neutral-default block mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      defaultValue="jane@example.com"
                      className="w-full py-2 px-3 border border-border-neutral-default rounded-md text-body-02 bg-white"
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-2 justify-end px-4 py-3 border-t border-border-neutral-default">
                <button
                  type="button"
                  className="px-3 py-1.5 text-body-02 font-medium border border-border-neutral-default rounded-md bg-white text-text-neutral-default"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="px-3 py-1.5 text-body-02 font-medium rounded-md bg-primary-900 text-primary-100"
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </DocPreview>
      </DocSection>
    </>
  );
}
