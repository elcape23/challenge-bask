import DocHeader from "@/components/docs/DocHeader";
import DocSection from "@/components/docs/DocSection";
import DocTable from "@/components/docs/DocTable";
import DocCallout from "@/components/docs/DocCallout";
import DoDontGrid from "@/components/docs/DoDontGrid";

export default function MotionPage() {
  return (
    <>
      <DocHeader
        title="Motion"
        description="Motion adds meaning to interactions and guides attention through purposeful animation."
        variant="foundations"
      />

      <DocSection title="Overview">
        <p className="mb-4">
          Motion in the design system is functional, not decorative. Animations
          help users understand state changes, orient themselves during
          navigation, and feel confident that the interface is responding to
          their actions.
        </p>
        <p>
          The motion system defines duration, easing, and usage principles that
          keep animations consistent, performant, and respectful of user
          preferences — including reduced motion settings.
        </p>
      </DocSection>

      <DocCallout variant="warning" title="Tokens in progress">
        Motion tokens have not yet been extracted from Figma. The values
        documented below are recommended defaults that will be refined as the
        design system matures. Implementations should use CSS custom properties
        so values can be updated globally when final tokens are defined.
      </DocCallout>

      <DocSection title="Principles">
        <ul
          className="list-none p-0 m-0 gap-3"
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <li className="gap-3" style={{ display: "flex" }}>
            <span
              className="text-text-neutral-default font-medium"
              style={{ minWidth: "120px" }}
            >
              Purposeful
            </span>
            <span>
              Every animation should serve a function — confirming an action,
              showing a transition, or drawing attention to a change. If removing
              the animation loses no meaning, remove it.
            </span>
          </li>
          <li className="gap-3" style={{ display: "flex" }}>
            <span
              className="text-text-neutral-default font-medium"
              style={{ minWidth: "120px" }}
            >
              Subtle
            </span>
            <span>
              Animations should enhance the experience without distracting from
              the task. Short durations and gentle easing feel polished; long or
              dramatic animations feel sluggish.
            </span>
          </li>
          <li className="gap-3" style={{ display: "flex" }}>
            <span
              className="text-text-neutral-default font-medium"
              style={{ minWidth: "120px" }}
            >
              Accessible
            </span>
            <span>
              Honor the <code>prefers-reduced-motion</code> media query. Users
              who opt out of motion should receive instant state changes with no
              animation.
            </span>
          </li>
          <li className="gap-3" style={{ display: "flex" }}>
            <span
              className="text-text-neutral-default font-medium"
              style={{ minWidth: "120px" }}
            >
              Performant
            </span>
            <span>
              Animate only <code>transform</code> and <code>opacity</code>{" "}
              properties when possible. These are GPU-accelerated and avoid
              layout thrashing or repaints.
            </span>
          </li>
        </ul>
      </DocSection>

      <DocSection title="Recommended duration scale">
        <p className="mb-4">
          Duration values define how long an animation takes. Shorter durations
          suit micro-interactions; longer durations suit page transitions and
          larger element movements. These are recommended values until formal
          tokens are established.
        </p>
        <DocTable
          headers={["Token (proposed)", "Value", "Usage"]}
          rows={[
            [
              "--duration-instant",
              "0ms",
              "Immediate state changes, no visible animation",
            ],
            [
              "--duration-fast",
              "100ms",
              "Button presses, toggle switches, hover states",
            ],
            [
              "--duration-normal",
              "200ms",
              "Dropdowns, tooltips, fade in/out",
            ],
            [
              "--duration-slow",
              "300ms",
              "Modals, drawers, expanding panels",
            ],
            [
              "--duration-slower",
              "500ms",
              "Page transitions, large layout shifts",
            ],
          ]}
        />
      </DocSection>

      <DocSection title="Recommended easing curves">
        <p className="mb-4">
          Easing curves control the acceleration and deceleration of animations.
          Choosing the right curve makes motion feel natural and intentional.
        </p>
        <DocTable
          headers={["Token (proposed)", "Value", "Usage"]}
          rows={[
            [
              "--ease-in-out",
              "cubic-bezier(0.4, 0, 0.2, 1)",
              "Default for most transitions — smooth start and end",
            ],
            [
              "--ease-out",
              "cubic-bezier(0, 0, 0.2, 1)",
              "Elements entering the screen — fast start, gentle landing",
            ],
            [
              "--ease-in",
              "cubic-bezier(0.4, 0, 1, 1)",
              "Elements leaving the screen — gentle start, fast exit",
            ],
            [
              "--ease-linear",
              "linear",
              "Progress bars, continuous animations with constant speed",
            ],
          ]}
        />
      </DocSection>

      <DocSection title="Rules">
        <ul
          className="list-disc pl-5 text-text-neutral-secondary gap-2"
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <li>
            Use duration and easing tokens (once defined) for all CSS
            transitions and animations. Do not hard-code timing values.
          </li>
          <li>
            Always wrap animations with a <code>prefers-reduced-motion</code>{" "}
            check. Provide an instant fallback for users who disable motion.
          </li>
          <li>
            Keep most UI transitions under 300ms. Animations longer than 500ms
            risk feeling slow and blocking the user.
          </li>
          <li>
            Animate only <code>transform</code> and <code>opacity</code> when
            possible. Avoid animating layout properties like width, height, top,
            or left.
          </li>
          <li>
            Do not chain multiple sequential animations unless the sequence
            communicates a meaningful progression (e.g., a multi-step onboarding
            flow).
          </li>
        </ul>
      </DocSection>

      <DocSection title="Do / Don't">
        <DoDontGrid
          doItems={[
            {
              description:
                "Use CSS custom properties for duration and easing so values can be updated globally.",
            },
            {
              description:
                "Test all animations with prefers-reduced-motion enabled to ensure graceful degradation.",
            },
            {
              description:
                "Keep hover and focus transitions fast (100ms) so the interface feels responsive.",
            },
          ]}
          dontItems={[
            {
              description:
                "Add motion purely for visual flair — every animation must serve a communicative purpose.",
            },
            {
              description:
                "Use durations longer than 500ms for standard UI transitions — they feel slow.",
            },
            {
              description:
                "Animate layout properties (width, height, margin) when transform can achieve the same effect.",
            },
          ]}
        />
      </DocSection>

      <DocSection title="Usage">
        <p className="mb-4">
          Apply motion through CSS transition and animation shorthand
          properties. Combine a duration with an easing curve for consistent
          timing across the interface.
        </p>
        <div
          className="bg-background-surface-neutral-default rounded-md p-4 mb-4 text-body-02 text-text-neutral-secondary border border-border-neutral-default"
          style={{
            fontFamily: "var(--font-mono)",
            lineHeight: 1.6,
          }}
        >
          .button &#123;
          <br />
          &nbsp;&nbsp;transition: background-color 100ms
          cubic-bezier(0.4, 0, 0.2, 1);
          <br />
          &#125;
          <br />
          <br />
          .modal &#123;
          <br />
          &nbsp;&nbsp;transition: opacity 300ms cubic-bezier(0, 0, 0.2, 1),
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;transform 300ms cubic-bezier(0, 0, 0.2, 1);
          <br />
          &#125;
          <br />
          <br />
          @media (prefers-reduced-motion: reduce) &#123;
          <br />
          &nbsp;&nbsp;*, *::before, *::after &#123;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;animation-duration: 0ms !important;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;transition-duration: 0ms !important;
          <br />
          &nbsp;&nbsp;&#125;
          <br />
          &#125;
        </div>
        <p>
          For interactive elements (buttons, links, cards), apply a default
          transition using a fast duration (100ms) and ease-in-out so hover and
          focus states feel responsive. For larger transitions (modals, drawers),
          use a slow duration (300ms) with ease-out for entry and ease-in for
          exit.
        </p>
      </DocSection>
    </>
  );
}
