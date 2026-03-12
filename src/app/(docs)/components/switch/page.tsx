import DocHeader from "@/components/docs/DocHeader";
import DocSection from "@/components/docs/DocSection";
import DocTable from "@/components/docs/DocTable";
import DocCallout from "@/components/docs/DocCallout";
import DoDontGrid from "@/components/docs/DoDontGrid";
import DocPreview from "@/components/docs/DocPreview";
import DocAnatomy from "@/components/docs/DocAnatomy";

export default function SwitchPage() {
  return (
    <>
      <DocHeader
        title="Switch"
        description="Switches toggle a single setting between on and off, taking effect immediately without requiring a form submission."
      />

      <DocSection title="Overview">
        <p className="mb-4">
          A switch is the digital equivalent of a physical toggle. It
          communicates and controls the state of a setting, feature, or
          preference in real time. Because the effect is immediate, switches
          should not be used in forms that require explicit submission.
        </p>
        <p>
          Use switches when the binary nature of the choice is clear and both
          states can be easily described. If the consequences of toggling are
          complex or irreversible, add a confirmation dialog.
        </p>
      </DocSection>

      <DocSection title="Anatomy">
        <DocAnatomy
          items={[
            {
              label: "Track",
              description:
                "The rounded, pill-shaped background that changes color between on and off states.",
            },
            {
              label: "Thumb",
              description:
                "The circular handle that slides between the left (off) and right (on) positions.",
            },
            {
              label: "Label",
              description:
                "Text next to the switch describing the setting. Clicking the label also toggles the switch.",
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
              "Switch with adjacent label text",
              "Settings pages, preference panels, feature flags.",
            ],
            [
              "With description",
              "Switch with a label and a secondary description line",
              "Options that need additional context, like explaining what enabling a feature does.",
            ],
            [
              "Compact",
              "Smaller switch without a visible label (icon or tooltip instead)",
              "Toolbars, table rows, or dense UIs where labels are provided by context.",
            ],
          ]}
        />
      </DocSection>

      <DocSection title="Sizes">
        <DocTable
          headers={["Size", "Track width × height", "Use case"]}
          rows={[
            ["Small", "36×20px", "Table rows, compact settings."],
            ["Medium", "44×24px", "Default for most settings pages."],
          ]}
        />
      </DocSection>

      <DocSection title="States">
        <DocTable
          headers={["State", "Track appearance", "Behavior"]}
          rows={[
            ["Off", "Neutral/muted background", "The feature or setting is inactive."],
            ["On", "Primary color background", "The feature or setting is active."],
            ["Hover", "Slightly darker track", "Visual feedback indicating interactivity."],
            ["Focus", "Focus ring around the track", "Keyboard navigation indicator."],
            ["Disabled", "Reduced opacity on track and thumb", "The setting cannot be changed. Current state is preserved."],
          ]}
        />
      </DocSection>

      <DocSection title="Behavior">
        <p className="mb-4">
          Clicking or tapping the switch, or pressing Space while focused,
          toggles the state. The change takes effect immediately — there is no
          need to press a &quot;Save&quot; button. The thumb animates smoothly
          between positions to reinforce the state change.
        </p>
        <DocCallout variant="warning" title="Immediate effect">
          Because switches apply changes instantly, avoid using them in forms
          that require explicit submission. Use a checkbox instead when the
          change only applies after the user submits.
        </DocCallout>
      </DocSection>

      <DocSection title="Accessibility">
        <ul className="pl-5 mb-4">
          <li className="mb-2">
            Use <code>role=&quot;switch&quot;</code> with <code>aria-checked</code> to communicate state.
          </li>
          <li className="mb-2">
            The label must be associated via <code>aria-labelledby</code> or wrapping <code>&lt;label&gt;</code>.
          </li>
          <li className="mb-2">
            Space key toggles the switch; Enter should not submit a form.
          </li>
          <li className="mb-2">
            Do not rely on color alone to communicate state — the thumb position provides a secondary cue.
          </li>
          <li>
            Ensure sufficient contrast between the track and background in both states.
          </li>
        </ul>
      </DocSection>

      <DocSection title="Usage guidelines">
        <p className="mb-4">
          Write labels that describe the setting, not the action. Use &quot;Dark
          mode&quot; rather than &quot;Enable dark mode&quot; — the switch
          position already communicates whether the setting is enabled. Keep
          labels concise: one to three words is ideal.
        </p>
        <p>
          When grouping multiple switches, keep them vertically aligned so users
          can scan and compare settings quickly. Maintain consistent label
          placement (left or right) within a group.
        </p>
      </DocSection>

      <DocSection title="Do / Don't">
        <DoDontGrid
          doItems={[
            { description: "Use switches for settings that take effect immediately." },
            { description: "Write labels that describe the setting, not the action." },
            { description: "Place the label on the same side consistently across a group." },
            { description: "Add a confirmation step for high-impact or irreversible toggles." },
          ]}
          dontItems={[
            { description: "Don't use switches inside forms that require a submit button." },
            { description: "Don't use a switch when there are more than two states — use a select or radios." },
            { description: "Don't stack switches horizontally — use a vertical list." },
            { description: "Don't rely only on track color to communicate state." },
          ]}
        />
      </DocSection>

      <DocSection title="Specs">
        <DocTable
          headers={["Property", "Value"]}
          rows={[
            ["Track border radius", "9999px (pill)"],
            ["Thumb size (medium)", "20px"],
            ["Off track color", "var(--color-muted)"],
            ["On track color", "var(--color-primary)"],
            ["Thumb color", "white"],
            ["Transition", "transform 150ms ease, background 150ms ease"],
            ["Focus ring", "2px offset, primary color"],
          ]}
        />
      </DocSection>

      <DocSection title="Examples">
        <DocPreview title="Switch (off)">
          <label
            className="gap-3 text-body-02 text-text-neutral-default"
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <span
              className="bg-muted"
              style={{
                display: "inline-flex",
                alignItems: "center",
                width: "44px",
                height: "24px",
                borderRadius: "9999px",
                padding: "2px",
              }}
            >
              <span
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  backgroundColor: "white",
                  boxShadow: "0 1px 2px rgba(0,0,0,0.15)",
                }}
              />
            </span>
            Dark mode
          </label>
        </DocPreview>
        <DocPreview title="Switch (on)">
          <label
            className="gap-3 text-body-02 text-text-neutral-default"
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <span
              className="bg-primary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "flex-end",
                width: "44px",
                height: "24px",
                borderRadius: "9999px",
                padding: "2px",
              }}
            >
              <span
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  backgroundColor: "white",
                  boxShadow: "0 1px 2px rgba(0,0,0,0.15)",
                }}
              />
            </span>
            Notifications
          </label>
        </DocPreview>
      </DocSection>
    </>
  );
}
