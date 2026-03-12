import DocHeader from "@/components/docs/DocHeader";
import DocSection from "@/components/docs/DocSection";
import DocCallout from "@/components/docs/DocCallout";

export default function OverviewPage() {
  return (
    <>
      <DocHeader
        title="Sena Design System"
        description="A structured documentation experience for exploring the foundations, components, specs, and usage rules of the Sena design system."
      />

      <DocSection title="What is this?">
        <p className="mb-4">
          The Sena Design System is a collection of design foundations,
          reusable UI components, and implementation guidelines that help teams
          build consistent, accessible, and scalable user interfaces.
        </p>
        <p>
          This documentation site serves as the single source of truth for
          understanding and using the system. It covers visual foundations,
          component specifications, behavior rules, and practical guidance for
          both designers and developers.
        </p>
      </DocSection>

      <DocSection title="Why it exists">
        <p className="mb-4">
          Design systems reduce inconsistency, speed up decision-making, and
          make it easier for teams to collaborate across disciplines. The Sena
          system exists to:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-text-neutral-secondary">
          <li>Establish shared visual and interaction standards</li>
          <li>Reduce duplication in design and code</li>
          <li>Provide clear rules for when and how to use each element</li>
          <li>Support accessibility and usability across all touchpoints</li>
          <li>Enable faster, more confident iteration</li>
        </ul>
      </DocSection>

      <DocSection title="What is documented">
        <p className="mb-4">
          The documentation is organized into four main sections:
        </p>
        <ul className="list-none p-0 m-0 space-y-3 text-text-neutral-secondary">
          <li className="flex gap-3">
            <span
              className="text-text-neutral-default font-medium"
              style={{ minWidth: "120px" }}
            >
              Foundations
            </span>
            <span>
              Colors, typography, spacing, grid, radius, shadows, iconography,
              and motion — the building blocks of the visual language.
            </span>
          </li>
          <li className="flex gap-3">
            <span
              className="text-text-neutral-default font-medium"
              style={{ minWidth: "120px" }}
            >
              Components
            </span>
            <span>
              UI components with anatomy, variants, states, behavior, and
              accessibility documentation.
            </span>
          </li>
          <li className="flex gap-3">
            <span
              className="text-text-neutral-default font-medium"
              style={{ minWidth: "120px" }}
            >
              Specs
            </span>
            <span>
              Cross-cutting rules for spacing logic, responsive behavior,
              interaction states, naming, and accessibility expectations.
            </span>
          </li>
        </ul>
      </DocSection>

      <DocSection title="How to navigate">
        <p className="mb-4">
          Use the sidebar to browse by section. Each page follows a consistent
          template so you always know where to find the information you need.
        </p>
        <DocCallout variant="info" title="Getting started">
          Start with the Foundations section to understand the visual language,
          then explore Components to see how the system comes together in UI
          elements.
        </DocCallout>
      </DocSection>

      <DocSection title="Current scope">
        <p>
          This documentation currently covers the structural scaffold of the
          design system. Foundation values, component specifications, and
          detailed usage guidance will be populated as the system matures. The
          architecture is designed to scale incrementally.
        </p>
      </DocSection>
    </>
  );
}
