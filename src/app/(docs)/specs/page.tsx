import DocHeader from "@/components/docs/DocHeader";
import DocSection from "@/components/docs/DocSection";
import DocCallout from "@/components/docs/DocCallout";

export default function SpecsPage() {
  return (
    <>
      <DocHeader
        title="Specs"
        description="Cross-cutting rules and implementation guidelines that apply across the design system."
      />

      <DocSection title="Overview">
        <p className="mb-4">
          Specs govern patterns that span multiple foundations and components.
          While foundations define individual building blocks (color, typography,
          spacing) and components define specific UI elements, specs address the
          implementation decisions that tie everything together.
        </p>
        <p>
          These guidelines ensure consistency in areas where multiple
          foundations intersect — for example, how spacing scales adapt across
          breakpoints, or how interaction states should behave uniformly across
          all interactive components.
        </p>
      </DocSection>

      <DocSection title="Areas covered">
        <ul className="list-none p-0 m-0 space-y-4 text-text-neutral-secondary">
          <li className="flex gap-3">
            <span
              className="flex-shrink-0 text-text-neutral-default font-medium"
              style={{ minWidth: "180px" }}
            >
              Spacing logic
            </span>
            <span>
              Rules for applying the spacing scale consistently — when to use
              tight spacing versus generous whitespace, and how spacing adapts
              between density contexts.
            </span>
          </li>
          <li className="flex gap-3">
            <span
              className="flex-shrink-0 text-text-neutral-default font-medium"
              style={{ minWidth: "180px" }}
            >
              Responsive behavior
            </span>
            <span>
              Guidelines for how layouts, components, and typography scale
              across breakpoints — including stacking order, visibility rules,
              and touch target adjustments.
            </span>
          </li>
          <li className="flex gap-3">
            <span
              className="flex-shrink-0 text-text-neutral-default font-medium"
              style={{ minWidth: "180px" }}
            >
              Interaction states
            </span>
            <span>
              Standardized visual and behavioral definitions for hover, focus,
              active, disabled, and loading states across all interactive
              elements.
            </span>
          </li>
          <li className="flex gap-3">
            <span
              className="flex-shrink-0 text-text-neutral-default font-medium"
              style={{ minWidth: "180px" }}
            >
              Naming conventions
            </span>
            <span>
              Consistent naming patterns for design tokens, component props,
              CSS custom properties, and ARIA attributes to reduce ambiguity
              across teams.
            </span>
          </li>
          <li className="flex gap-3">
            <span
              className="flex-shrink-0 text-text-neutral-default font-medium"
              style={{ minWidth: "180px" }}
            >
              Accessibility expectations
            </span>
            <span>
              Baseline accessibility requirements that apply to every component
              — keyboard navigation patterns, focus management, ARIA usage, and
              color contrast minimums.
            </span>
          </li>
          <li className="flex gap-3">
            <span
              className="flex-shrink-0 text-text-neutral-default font-medium"
              style={{ minWidth: "180px" }}
            >
              Content formatting
            </span>
            <span>
              Rules for how text content is written, truncated, and formatted
              within components — capitalization, sentence structure, date/time
              patterns, and placeholder conventions.
            </span>
          </li>
        </ul>
      </DocSection>

      <DocSection title="How specs work">
        <p className="mb-4">
          Specs are not tied to any single component or foundation. Instead,
          they provide guidance for implementation decisions that arise when
          building features using the design system.
        </p>
        <p className="mb-4">
          When a developer or designer faces a question like &quot;how much
          padding should this container have on mobile?&quot; or &quot;what
          should the focus ring look like on a custom control?&quot;, the
          relevant spec provides the answer. This reduces ad-hoc decisions and
          ensures visual and behavioral coherence across the product.
        </p>
        <p>
          Each spec area defines clear, actionable rules with concrete values
          and examples. They are intended to be referenced during implementation,
          not memorized — treat them as a shared contract between design and
          engineering.
        </p>
      </DocSection>

      <DocCallout variant="info" title="Living document">
        Specs will be expanded as the design system matures. New spec areas will
        be added when recurring cross-cutting patterns emerge that benefit from
        shared documentation. If you identify a pattern that should be
        standardized, propose it as a new spec.
      </DocCallout>
    </>
  );
}
