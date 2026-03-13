import DocHeader from "@/components/docs/DocHeader";
import DocSection from "@/components/docs/DocSection";
import DocTable from "@/components/docs/DocTable";
import DocCallout from "@/components/docs/DocCallout";
import DoDontGrid from "@/components/docs/DoDontGrid";
import DocPreview from "@/components/docs/DocPreview";
import DocAnatomy from "@/components/docs/DocAnatomy";

export default function NavbarPage() {
  return (
    <>
      <DocHeader
        title="Navbar"
        description="The navbar is the primary horizontal navigation element, providing consistent access to top-level sections and key actions across the application."
      />

      <DocSection title="Overview">
        <p className="mb-4">
          The navbar sits at the top of every page and serves as the main
          orientation point for users. It contains the brand identity, primary
          navigation links, and global actions like search or user account
          controls.
        </p>
        <p>
          A well-structured navbar reduces navigation effort and reinforces
          information hierarchy. Keep the number of top-level links manageable
          (typically 4–7) and prioritize the most frequently used destinations.
        </p>
      </DocSection>

      <DocSection title="Anatomy">
        <DocAnatomy
          items={[
            {
              label: "Container",
              description:
                "The full-width bar fixed to the top of the viewport. Provides a consistent visual anchor across all pages.",
            },
            {
              label: "Logo area",
              description:
                "The brand mark or logotype positioned at the leading edge. Clicking it navigates to the home page.",
            },
            {
              label: "Navigation links",
              description:
                "Primary navigation items that link to the top-level sections of the application. The active link is visually distinguished.",
            },
            {
              label: "Actions area",
              description:
                "Global utility controls positioned at the trailing edge, such as search, notifications, theme toggle, or user avatar menu.",
            },
          ]}
        />
      </DocSection>

      <DocSection title="Variants">
        <DocTable
          headers={["Variant", "Description", "Use when"]}
          rows={[
            [
              "Default",
              "Solid background with visible links and actions",
              "Most application pages",
            ],
            [
              "Transparent",
              "No background, blends into the page content",
              "Hero sections or landing pages where the navbar overlays imagery",
            ],
            [
              "Compact",
              "Reduced height with condensed spacing",
              "Secondary or admin interfaces that need more vertical space",
            ],
          ]}
        />
      </DocSection>

      <DocSection title="Sizes">
        <DocTable
          headers={["Size", "Height", "Use case"]}
          rows={[
            ["Default", "64px", "Standard application navbar"],
            ["Compact", "48px", "Admin panels, dense interfaces"],
          ]}
        />
      </DocSection>

      <DocSection title="States">
        <DocTable
          headers={["State", "Description"]}
          rows={[
            ["Default", "Navbar at rest with current page link highlighted"],
            [
              "Scrolled",
              "Elevated with shadow or background change after the user scrolls past the top",
            ],
            [
              "Mobile open",
              "Hamburger menu expanded, revealing navigation links in a slide-down or side panel",
            ],
            [
              "Mobile closed",
              "Navigation links hidden behind a hamburger icon on small viewports",
            ],
          ]}
        />
      </DocSection>

      <DocSection title="Behavior">
        <ul className="list-disc pl-5 space-y-2 text-text-neutral-secondary">
          <li>
            The navbar remains fixed at the top of the viewport on scroll,
            providing constant access to navigation.
          </li>
          <li>
            On small viewports, navigation links collapse into a hamburger menu.
            The logo and key actions remain visible.
          </li>
          <li>
            The active link is determined by the current route and highlighted
            with an underline or filled background.
          </li>
          <li>
            Dropdown menus in the navbar open on click (not hover) to ensure
            reliable behavior on touch devices.
          </li>
          <li>
            Scrolling past the top of the page may add a subtle shadow to
            indicate the navbar is elevated above content.
          </li>
        </ul>
      </DocSection>

      <DocSection title="Accessibility">
        <DocCallout variant="info" title="Landmark navigation">
          Wrap the navbar in a <code>&lt;nav&gt;</code> element with{" "}
          <code>aria-label=&quot;Main navigation&quot;</code> to create a
          navigation landmark. If multiple <code>&lt;nav&gt;</code> elements
          exist, each must have a unique label.
        </DocCallout>
        <ul className="list-disc pl-5 space-y-2 text-text-neutral-secondary">
          <li>
            The current page link must use{" "}
            <code>aria-current=&quot;page&quot;</code> to announce the active
            route.
          </li>
          <li>
            The mobile menu toggle must have an accessible label such as
            &quot;Open menu&quot; / &quot;Close menu&quot; that updates with
            state.
          </li>
          <li>
            Dropdown menus in the navbar must be keyboard navigable with Escape
            to close and arrow keys to move between items.
          </li>
          <li>
            Skip-to-content links should be provided as the first focusable
            element so keyboard users can bypass the navbar.
          </li>
        </ul>
      </DocSection>

      <DocSection title="Usage guidelines">
        <p className="mb-4">
          The navbar should contain only top-level navigation that applies
          globally. Avoid overloading it with secondary links or deeply nested
          menus — those belong in a sidebar or sub-navigation pattern.
        </p>
        <p>
          Ensure the navbar is consistent across all pages. Changing the navbar
          structure between routes creates disorientation and erodes user trust
          in the navigation system.
        </p>
      </DocSection>

      <DocSection title="Do / Don't">
        <DoDontGrid
          doItems={[
            {
              description:
                "Keep navigation links to 4–7 top-level items for clarity.",
            },
            {
              description:
                "Highlight the current page link to orient the user.",
            },
            {
              description:
                "Use a hamburger menu on mobile to conserve horizontal space.",
            },
            {
              description:
                "Include a skip-to-content link as the first focusable element.",
            },
          ]}
          dontItems={[
            {
              description:
                "Don't use the navbar for secondary or contextual navigation.",
            },
            {
              description:
                "Don't change the navbar structure between different pages.",
            },
            {
              description:
                "Don't hide the logo on mobile — it's a key orientation anchor.",
            },
            {
              description:
                "Don't open dropdown menus on hover — use click for touch compatibility.",
            },
          ]}
        />
      </DocSection>

      <DocSection title="Specs">
        <DocTable
          headers={["Property", "Value"]}
          rows={[
            ["Height (default)", "64px"],
            ["Height (compact)", "48px"],
            ["Background", "var(--color-surface)"],
            ["Border bottom", "1px solid var(--color-border-subtle)"],
            ["Logo area min-width", "120px"],
            ["Nav link padding", "var(--spacing-3) var(--spacing-4)"],
            [
              "Active link indicator",
              "2px bottom border, var(--color-primary)",
            ],
            ["Scroll shadow", "var(--shadow-sm)"],
            ["Z-index", "var(--z-navbar)"],
            ["Mobile breakpoint", "768px"],
          ]}
        />
      </DocSection>
    </>
  );
}
