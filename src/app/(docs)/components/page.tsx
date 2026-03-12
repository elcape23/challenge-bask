import Link from "next/link";
import DocHeader from "@/components/docs/DocHeader";
import DocSection from "@/components/docs/DocSection";

const components = [
  { name: "Accordion", href: "/components/accordion", description: "Organizes content into collapsible sections for progressive disclosure." },
  { name: "Alert", href: "/components/alert", description: "Communicates status or feedback through color-coded banners." },
  { name: "Avatar", href: "/components/avatar", description: "Represents users with a profile image, initials, or icon." },
  { name: "Badge", href: "/components/badge", description: "Displays status, counts, or categorical labels." },
  { name: "Button", href: "/components/button", description: "Triggers actions and events with a single click." },
  { name: "Card", href: "/components/card", description: "Groups related content and actions in a container." },
  { name: "Checkbox", href: "/components/checkbox", description: "Allows selection of one or more items from a set." },
  { name: "Counter", href: "/components/counter", description: "Adjusts a numeric value incrementally with stepper controls." },
  { name: "Divider", href: "/components/divider", description: "Creates visual separation between content sections." },
  { name: "Input", href: "/components/input", description: "Captures short-form text from the user." },
  { name: "Label", href: "/components/label", description: "Identifies form controls and provides essential context." },
  { name: "Navigation Bar", href: "/components/navbar", description: "Provides top-level navigation across the application." },
  { name: "Radio", href: "/components/radio", description: "Selects a single option from a mutually exclusive group." },
  { name: "Select", href: "/components/select", description: "Lets users choose one option from a dropdown list." },
  { name: "Sheet", href: "/components/sheet", description: "Presents secondary content in a sliding side panel." },
  { name: "Switch", href: "/components/switch", description: "Toggles a setting between two states instantly." },
  { name: "Textarea", href: "/components/textarea", description: "Captures multi-line text input from the user." },
  { name: "Toast", href: "/components/toast", description: "Delivers brief, non-blocking feedback messages." },
];

export default function ComponentsPage() {
  return (
    <>
      <DocHeader
        title="Components"
        description="Reusable UI building blocks for consistent, accessible interfaces."
      />

      <DocSection title="Overview">
        <p className="mb-4">
          The component library provides a curated set of production-ready UI
          primitives designed to work together seamlessly. Each component follows
          consistent API patterns, supports theming through design tokens, and
          meets WCAG 2.1 AA accessibility standards out of the box.
        </p>
        <p>
          Components are built to be composable — combine them to construct
          complex interfaces without sacrificing maintainability. Use this
          catalog to explore available components, understand their intended use
          cases, and learn best practices for implementation.
        </p>
      </DocSection>

      <DocSection title="Component catalog">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-2">
          {components.map((component) => (
            <Link
              key={component.name}
              href={component.href}
              className="docs-card block p-5 border border-border-neutral-default rounded-md no-underline"
              style={{
                transition: "border-color 0.15s, box-shadow 0.15s",
              }}
            >
              <span className="block text-body-02 text-text-neutral-default mb-1 font-medium">
                {component.name}
              </span>
              <span className="text-body-03 text-text-neutral-placeholder">
                {component.description}
              </span>
            </Link>
          ))}
        </div>
      </DocSection>
    </>
  );
}
