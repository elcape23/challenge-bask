import DocHeader from "@/components/docs/DocHeader";
import DocSection from "@/components/docs/DocSection";
import DocTable from "@/components/docs/DocTable";
import DocCallout from "@/components/docs/DocCallout";
import DoDontGrid from "@/components/docs/DoDontGrid";
import DocAnatomy from "@/components/docs/DocAnatomy";

export default function SidebarPage() {
  return (
    <div className="col-span-2 grid grid-cols-2 gap-x-10 gap-y-10">
      <div className="col-start-1 flex flex-col">
        <DocHeader
          variant="foundations"
          title="Sidebar"
          description="The sidebar provides persistent vertical navigation for applications with deep information architecture, allowing users to move between sections and sub-sections."
        />
      </div>

      <div className="col-start-1">
        <DocSection title="Overview">
          <p className="mb-4">
            Sidebars are ideal when an application has multiple sections with
            nested sub-pages. Unlike a navbar that handles top-level routing, the
            sidebar supports hierarchical navigation with grouped items, expanding
            sections, and visual indicators for the active route.
          </p>
          <p>
            Use a sidebar when the application has more than 6–8 navigation
            destinations or when the information architecture requires grouped
            categories. For simpler structures, a navbar alone may be sufficient.
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
                  "The vertical panel fixed to the left edge of the layout. It spans the full viewport height and has a consistent width.",
              },
              {
                label: "Navigation groups",
                description:
                  "Logical clusters of related navigation items. Groups are separated visually and may be collapsible.",
              },
              {
                label: "Nav items",
                description:
                  "Individual links within a group. Each item displays a label and an optional leading icon. The active item is highlighted.",
              },
              {
                label: "Group headers",
                description:
                  "Optional labels above each group that describe the category. They are non-interactive and provide organizational context.",
              },
            ]}
          />
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Variants" hideTitle>
          <DocTable
            variant="surface"
            headers={["Variant", "Description", "Use when"]}
            rows={[
              [
                "Default",
                "Full-width sidebar with text labels and optional icons",
                "Applications with moderate to deep navigation hierarchies",
              ],
              [
                "Collapsed / Icon-only",
                "Narrow sidebar showing only icons, expanding on hover or click",
                "Maximizing content area while maintaining quick access to sections",
              ],
              [
                "Overlay",
                "Sidebar slides over content on mobile, dismissed by tap outside",
                "Responsive layouts on small viewports",
              ],
            ]}
          />
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Sizes" hideTitle>
          <DocTable
            variant="surface"
            headers={["Size", "Width", "Use case"]}
            rows={[
              ["Collapsed", "64px", "Icon-only mode for compact layouts"],
              ["Default", "240px", "Standard sidebar width"],
              ["Wide", "280px", "Sidebars with longer labels or nested indentation"],
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
              ["Expanded", "Sidebar is fully visible with text labels"],
              ["Collapsed", "Sidebar shows icons only, labels appear in tooltips on hover"],
              ["Mobile open", "Sidebar overlays the content area on small screens"],
              ["Mobile closed", "Sidebar is hidden and accessible via a toggle button"],
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
              The sidebar persists across page navigation, maintaining the
              user&apos;s position and any expanded/collapsed group states.
            </li>
            <li>
              Navigation groups can be expanded or collapsed by clicking the
              group header. The expanded state is preserved in local storage.
            </li>
            <li>
              On small viewports, the sidebar becomes an overlay that slides in
              from the left and is dismissed by tapping outside or pressing
              Escape.
            </li>
            <li>
              Switching between expanded and collapsed modes animates smoothly
              and the content area adjusts its width accordingly.
            </li>
            <li>
              The active nav item is automatically scrolled into view when the
              sidebar contains more items than the viewport height allows.
            </li>
          </ul>
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Accessibility">
          <DocCallout variant="info" title="Landmark navigation">
            Wrap the sidebar in a <code>&lt;nav&gt;</code> element with{" "}
            <code>aria-label=&quot;Sidebar navigation&quot;</code>. If a
            main navbar also exists, ensure both landmarks have distinct labels.
          </DocCallout>
          <ul
            className="list-disc pl-5 space-y-2 text-text-neutral-secondary"
          >
            <li>
              Collapsible groups should use{" "}
              <code>aria-expanded</code> to communicate their open/closed state
              to assistive technologies.
            </li>
            <li>
              The active nav item must use{" "}
              <code>aria-current=&quot;page&quot;</code> to indicate the current
              route.
            </li>
            <li>
              In collapsed icon-only mode, tooltips must provide accessible
              labels for each nav item.
            </li>
            <li>
              The mobile overlay sidebar must trap focus while open and return
              focus to the toggle button when closed.
            </li>
          </ul>
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Usage guidelines">
          <p className="mb-4">
            Use the sidebar for applications with complex or hierarchical
            navigation where users frequently switch between sections. Group
            related items under clear category headers to reduce visual scanning
            effort.
          </p>
          <p>
            Avoid placing actions or status indicators in the sidebar —
            it should focus exclusively on navigation. Utility actions belong in
            the navbar or a dedicated toolbar.
          </p>
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Do / Don't">
          <div style={{ backgroundColor: "#FFFFFF", padding: "200px" }} className="overflow-hidden flex flex-row gap-10 w-full items-start justify-between">
            <DoDontGrid
              doItems={[
                { description: "Group related navigation items under descriptive category headers." },
                { description: "Highlight the active page to orient the user within the hierarchy." },
                { description: "Persist expanded/collapsed group states across sessions." },
                { description: "Provide a toggle to collapse the sidebar for more content space." },
              ]}
              dontItems={[
                { description: "Don't mix navigation links with action buttons in the sidebar." },
                { description: "Don't nest more than two levels deep — flatten or restructure instead." },
                { description: "Don't use a sidebar for fewer than 5 navigation items — a navbar is simpler." },
                { description: "Don't auto-collapse groups on navigation — preserve the user's expansion state." },
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
              ["Width (default)", "240px"],
              ["Width (collapsed)", "64px"],
              ["Background", "var(--color-surface)"],
              ["Border right", "1px solid var(--color-border-subtle)"],
              ["Nav item height", "40px"],
              ["Nav item padding", "var(--spacing-2) var(--spacing-4)"],
              ["Active item background", "var(--color-primary-light)"],
              ["Active item text color", "var(--color-primary)"],
              ["Group header font size", "var(--font-size-body-03)"],
              ["Group spacing", "var(--spacing-6)"],
              ["Collapse transition", "200ms ease"],
              ["Z-index (mobile overlay)", "var(--z-sidebar)"],
            ]}
          />
        </DocSection>
      </div>
    </div>
  );
}
