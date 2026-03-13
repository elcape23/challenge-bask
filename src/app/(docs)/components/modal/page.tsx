import DocHeader from "@/components/docs/DocHeader";
import DocSection from "@/components/docs/DocSection";
import DocTable from "@/components/docs/DocTable";
import DocCallout from "@/components/docs/DocCallout";
import DoDontGrid from "@/components/docs/DoDontGrid";
import DocAnatomy from "@/components/docs/DocAnatomy";

export default function ModalPage() {
  return (
    <div className="col-span-2 grid grid-cols-2 gap-x-10 gap-y-10">
      <div className="col-start-1 flex flex-col">
        <DocHeader
          variant="foundations"
          title="Modal"
          description="Modals interrupt the user's workflow to capture information, confirm an action, or present critical content that requires immediate attention."
        />
      </div>

      <div className="col-start-1">
        <DocSection title="Overview">
          <p className="mb-4">
            A modal is a dialog that appears on top of the main content and blocks
            interaction with the rest of the page until it is dismissed. Use modals
            sparingly — they demand attention and should only appear when the task
            requires focused input or an explicit decision from the user.
          </p>
          <p>
            Modals are best suited for confirming destructive actions, collecting
            short-form input, or displaying content that cannot be deferred. Avoid
            using modals for passive information that could be shown inline or in a
            toast.
          </p>
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Anatomy">
          <DocAnatomy
            items={[
              {
                label: "Overlay",
                description:
                  "A semi-transparent backdrop that covers the page content and visually separates the modal from the underlying interface.",
              },
              {
                label: "Container",
                description:
                  "The main wrapper that holds all modal content. It is centered on the viewport and respects maximum width constraints.",
              },
              {
                label: "Header",
                description:
                  "Contains the modal title and an optional description. Provides context about the modal's purpose.",
              },
              {
                label: "Body",
                description:
                  "The primary content area. Scrollable when content exceeds the viewport height.",
              },
              {
                label: "Footer",
                description:
                  "Houses action buttons (confirm, cancel) aligned to the end of the container.",
              },
              {
                label: "Close button",
                description:
                  "An icon button in the top-right corner that dismisses the modal without taking action.",
              },
            ]}
          />
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Variants" hideTitle>
          <DocTable
            variant="surface"
            headers={["Variant", "Purpose", "Use when"]}
            rows={[
              [
                "Default",
                "General-purpose dialog",
                "Collecting input, showing detail, or presenting a form",
              ],
              [
                "Confirmation",
                "Validates a user decision",
                "The action is destructive or irreversible",
              ],
              [
                "Full-screen",
                "Maximized content area",
                "Complex forms or workflows that need more space",
              ],
            ]}
          />
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Sizes" hideTitle>
          <DocTable
            variant="surface"
            headers={["Size", "Max width", "Use case"]}
            rows={[
              ["Small", "400px", "Simple confirmations, short messages"],
              ["Medium", "560px", "Forms, standard dialogs (default)"],
              ["Large", "720px", "Complex content, multi-step flows"],
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
              ["Opening", "Fade-in animation with overlay transition"],
              ["Open", "Modal is visible and focus is trapped inside"],
              ["Closing", "Fade-out animation before removal from DOM"],
              ["Loading", "Body content is replaced with a loading indicator"],
            ]}
          />
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Behavior">
          <ul
            className="list-disc pl-5 space-y-2 text-text-neutral-secondary"
          >
            <li>Focus is trapped inside the modal while it is open.</li>
            <li>
              Pressing <strong>Escape</strong> closes the modal unless explicitly
              disabled for critical flows.
            </li>
            <li>Clicking the overlay dismisses the modal by default.</li>
            <li>
              When the body content overflows, only the body area scrolls — the
              header and footer remain fixed.
            </li>
            <li>
              Opening a modal disables scrolling on the page behind it.
            </li>
            <li>
              On close, focus returns to the element that triggered the modal.
            </li>
          </ul>
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Accessibility">
          <DocCallout variant="info" title="ARIA requirements">
            Modals must include <code>role=&quot;dialog&quot;</code>,{" "}
            <code>aria-modal=&quot;true&quot;</code>, and an accessible label via{" "}
            <code>aria-labelledby</code> pointing to the header title.
          </DocCallout>
          <ul
            className="list-disc pl-5 space-y-2 text-text-neutral-secondary"
          >
            <li>
              Focus must be moved to the first focusable element inside the modal
              when it opens.
            </li>
            <li>
              Tab and Shift+Tab must cycle through focusable elements within the
              modal (focus trap).
            </li>
            <li>
              The close button must have an accessible label such as
              &quot;Close dialog&quot;.
            </li>
            <li>
              Screen readers should announce the modal title when it opens.
            </li>
          </ul>
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Usage guidelines">
          <p className="mb-4">
            Use modals to capture focused attention for tasks that must be
            completed before the user can continue. They should contain a single,
            clear purpose and always provide a way to dismiss without taking
            action.
          </p>
          <p>
            Avoid stacking modals on top of each other. If a workflow requires
            multiple steps, consider a multi-step modal with progress indication
            or move the flow to a dedicated page.
          </p>
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Do / Don't">
          <div style={{ backgroundColor: "#FFFFFF", padding: "200px" }} className="overflow-hidden flex flex-row gap-10 w-full items-start justify-between">
            <DoDontGrid
              doItems={[
                { description: "Use modals for focused tasks that require user input or confirmation." },
                { description: "Provide a clear title that describes the modal's purpose." },
                { description: "Include a visible close button and support Escape to dismiss." },
                { description: "Return focus to the trigger element when the modal closes." },
              ]}
              dontItems={[
                { description: "Don't use modals for passive content that can be displayed inline." },
                { description: "Don't stack multiple modals on top of each other." },
                { description: "Don't disable all dismiss methods — users must always have a way out." },
                { description: "Don't use modals for long, complex forms that would benefit from a full page." },
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
              ["Overlay opacity", "50%"],
              ["Overlay color", "var(--color-overlay)"],
              ["Container border radius", "var(--radius-md)"],
              ["Header padding", "var(--spacing-6)"],
              ["Body padding", "var(--spacing-6)"],
              ["Footer padding", "var(--spacing-4) var(--spacing-6)"],
              ["Footer gap", "var(--spacing-3)"],
              ["Animation duration", "200ms ease-out"],
              ["Z-index", "var(--z-modal)"],
            ]}
          />
        </DocSection>
      </div>
    </div>
  );
}
