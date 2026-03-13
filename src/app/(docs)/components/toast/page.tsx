import DocHeader from "@/components/docs/DocHeader";
import DocSection from "@/components/docs/DocSection";
import DocTable from "@/components/docs/DocTable";
import DocCallout from "@/components/docs/DocCallout";
import DoDontGrid from "@/components/docs/DoDontGrid";
import DocAnatomy from "@/components/docs/DocAnatomy";

export default function ToastPage() {
  return (
    <div className="col-span-2 grid grid-cols-2 gap-x-10 gap-y-10">
      <div className="col-start-1 flex flex-col">
        <DocHeader
          variant="foundations"
          title="Toast"
          description="Toasts are non-intrusive, temporary notifications that inform users about the result of an action without interrupting their current workflow."
        />
      </div>

      <div className="col-start-1">
        <DocSection title="Overview">
          <p className="mb-4">
            Toasts appear briefly at the edge of the viewport to communicate
            feedback on a completed action — such as saving a record, sending a
            message, or encountering an error. They auto-dismiss after a set
            duration and do not require user interaction.
          </p>
          <p>
            Because toasts are ephemeral, they should never be the sole way to
            communicate critical errors or information the user needs to act on.
            Pair them with persistent UI changes when the outcome is important.
          </p>
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Anatomy">
          <DocAnatomy
            items={[
              {
                label: "Container",
                description:
                  "The outer wrapper that holds all toast elements. Positioned at a fixed location in the viewport.",
              },
              {
                label: "Icon",
                description:
                  "A status icon indicating the toast variant (info, success, warning, error). Provides immediate visual cue.",
              },
              {
                label: "Message",
                description:
                  "The primary text content describing what happened. Should be concise and action-oriented.",
              },
              {
                label: "Action",
                description:
                  "An optional text button that lets the user take a follow-up action, such as 'Undo' or 'View'.",
              },
              {
                label: "Dismiss",
                description:
                  "A close icon button that manually removes the toast before it auto-dismisses.",
              },
            ]}
          />
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Variants" hideTitle>
          <DocTable
            variant="surface"
            headers={["Variant", "Icon", "Purpose", "Example"]}
            rows={[
              [
                "Info",
                "ℹ circle",
                "Neutral feedback or general updates",
                "\"Your preferences have been updated.\"",
              ],
              [
                "Success",
                "✓ circle",
                "Confirms a completed action",
                "\"Changes saved successfully.\"",
              ],
              [
                "Warning",
                "⚠ triangle",
                "Alerts to a potential issue that doesn't block the user",
                "\"Connection is unstable. Changes may not sync.\"",
              ],
              [
                "Error",
                "✕ circle",
                "Reports a failed action or system error",
                "\"Unable to save. Please try again.\"",
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
              ["Default", "420px", "Standard notifications with short messages"],
              ["Wide", "560px", "Toasts with action buttons or longer messages"],
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
              ["Entering", "Toast slides in from the edge with a fade animation"],
              ["Visible", "Toast is fully displayed and the auto-dismiss timer is running"],
              ["Paused", "Timer pauses when the user hovers over or focuses the toast"],
              ["Exiting", "Toast slides out and fades before removal from DOM"],
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
              Toasts auto-dismiss after a configurable duration (default 5
              seconds). Error toasts persist longer (8 seconds) by default.
            </li>
            <li>
              Hovering over a toast pauses the dismiss timer. The timer resumes
              when the cursor leaves.
            </li>
            <li>
              Multiple toasts stack vertically with consistent spacing. New toasts
              appear at the top of the stack.
            </li>
            <li>
              A maximum of 3 toasts are shown simultaneously. Additional toasts
              queue until a slot becomes available.
            </li>
            <li>
              Toasts do not block interaction with the rest of the page.
            </li>
          </ul>
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Accessibility">
          <DocCallout variant="info" title="Live region">
            Toast containers must use <code>role=&quot;status&quot;</code> and{" "}
            <code>aria-live=&quot;polite&quot;</code> so screen readers announce
            new toasts without interrupting the current task. For error toasts,
            use <code>aria-live=&quot;assertive&quot;</code>.
          </DocCallout>
          <ul
            className="list-disc pl-5 space-y-2 text-text-neutral-secondary"
          >
            <li>
              The dismiss button must have an accessible label such as
              &quot;Dismiss notification&quot;.
            </li>
            <li>
              Action buttons within toasts must be keyboard accessible.
            </li>
            <li>
              Toast messages should be descriptive enough to understand without
              the icon or color context.
            </li>
            <li>
              Auto-dismiss timing should be long enough for users to read the
              content (minimum 5 seconds).
            </li>
          </ul>
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Usage guidelines">
          <p className="mb-4">
            Use toasts for lightweight, transient feedback that doesn&apos;t require the
            user to take action. They work well for confirming background operations
            or surfacing non-blocking warnings.
          </p>
          <p>
            For errors that prevent the user from continuing, use inline validation
            messages or an alert banner instead. Toasts should supplement — not
            replace — persistent error states in forms.
          </p>
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Do / Don't">
          <div style={{ backgroundColor: "#FFFFFF", padding: "200px" }} className="overflow-hidden flex flex-row gap-10 w-full items-start justify-between">
            <DoDontGrid
              doItems={[
                { description: "Use toasts for transient feedback on completed actions." },
                { description: "Keep messages short and action-oriented (under 120 characters)." },
                { description: "Provide an undo action for reversible operations when appropriate." },
                { description: "Pause the dismiss timer on hover so users can read the content." },
              ]}
              dontItems={[
                { description: "Don't use toasts as the only way to communicate critical errors." },
                { description: "Don't include multiple actions — one action button maximum." },
                { description: "Don't show toasts for events the user didn't initiate." },
                { description: "Don't stack more than 3 toasts at once — queue additional ones." },
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
              ["Position", "Bottom-right of viewport"],
              ["Offset from edge", "var(--spacing-6)"],
              ["Stack gap", "var(--spacing-3)"],
              ["Border radius", "var(--radius-md)"],
              ["Padding", "var(--spacing-4)"],
              ["Shadow", "var(--shadow-lg)"],
              ["Auto-dismiss (default)", "5000ms"],
              ["Auto-dismiss (error)", "8000ms"],
              ["Animation duration", "250ms ease-out"],
              ["Z-index", "var(--z-toast)"],
            ]}
          />
        </DocSection>
      </div>
    </div>
  );
}
