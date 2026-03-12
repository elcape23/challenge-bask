import DocHeader from "@/components/docs/DocHeader";
import DocSection from "@/components/docs/DocSection";
import DocTable from "@/components/docs/DocTable";
import DocCallout from "@/components/docs/DocCallout";
import DoDontGrid from "@/components/docs/DoDontGrid";
import DocPreview from "@/components/docs/DocPreview";
import DocAnatomy from "@/components/docs/DocAnatomy";

export default function PaginationPage() {
  return (
    <>
      <DocHeader
        title="Pagination"
        description="Pagination divides large sets of content or data into discrete pages, giving users control over navigation through the results."
      />

      <DocSection title="Overview">
        <p className="mb-4">
          Pagination is essential when displaying data sets too large to show on
          a single page. It provides clear navigation between pages and
          communicates the user&apos;s position within the total result set.
        </p>
        <p>
          Use pagination when the data has a known total count and users benefit
          from random access (jumping to a specific page). For feeds or timelines
          where sequential loading is sufficient, consider infinite scroll or a
          &quot;Load more&quot; pattern instead.
        </p>
      </DocSection>

      <DocSection title="Anatomy">
        <DocAnatomy
          items={[
            {
              label: "Previous button",
              description:
                "Navigates to the preceding page. Disabled when the user is on the first page.",
            },
            {
              label: "Page numbers",
              description:
                "Clickable buttons representing individual pages. The current page is visually highlighted.",
            },
            {
              label: "Ellipsis",
              description:
                "A non-interactive indicator shown when pages are truncated, signaling that additional pages exist between visible numbers.",
            },
            {
              label: "Next button",
              description:
                "Navigates to the following page. Disabled when the user is on the last page.",
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
              "Previous/Next buttons with numbered pages",
              "Standard data tables and listing pages",
            ],
            [
              "Compact",
              "Previous/Next buttons only, no page numbers",
              "Mobile layouts or tight spaces where simplicity is preferred",
            ],
            [
              "With page size selector",
              "Includes a dropdown to change items per page",
              "Data tables where users control result density",
            ],
          ]}
        />
      </DocSection>

      <DocSection title="Sizes">
        <DocTable
          headers={["Size", "Button height", "Font size"]}
          rows={[
            ["Small", "28px", "var(--font-size-body-03)"],
            ["Medium", "36px", "var(--font-size-body-02)"],
            ["Large", "44px", "var(--font-size-body-01)"],
          ]}
        />
      </DocSection>

      <DocSection title="States">
        <DocTable
          headers={["State", "Description"]}
          rows={[
            ["Default", "Page number buttons in their resting state"],
            ["Hover", "Subtle background change on pointer hover"],
            ["Active / Current", "The current page is highlighted with a filled background"],
            ["Focused", "Keyboard focus ring visible on the focused button"],
            ["Disabled", "Previous/Next buttons are inactive at the bounds of the page range"],
          ]}
        />
      </DocSection>

      <DocSection title="Behavior">
        <ul
          className="list-disc pl-5 space-y-2 text-text-neutral-secondary"
        >
          <li>
            Page numbers are truncated with ellipsis when the total page count
            exceeds a threshold (typically 7 visible slots).
          </li>
          <li>
            The first and last page numbers are always visible, regardless of
            truncation.
          </li>
          <li>
            Clicking a page number navigates immediately. The URL should update
            to reflect the current page for shareable links.
          </li>
          <li>
            When page content loads asynchronously, the pagination controls
            remain interactive but the content area shows a loading state.
          </li>
          <li>
            On small viewports, the component can collapse to the compact
            variant automatically.
          </li>
        </ul>
      </DocSection>

      <DocSection title="Accessibility">
        <DocCallout variant="info" title="Navigation landmark">
          Wrap pagination in a <code>&lt;nav&gt;</code> element with{" "}
          <code>aria-label=&quot;Pagination&quot;</code> to make it
          discoverable as a navigation landmark for screen reader users.
        </DocCallout>
        <ul
          className="list-disc pl-5 space-y-2 text-text-neutral-secondary"
        >
          <li>
            The current page button must have{" "}
            <code>aria-current=&quot;page&quot;</code> to announce the active
            page.
          </li>
          <li>
            Previous and Next buttons should have clear labels, not just arrow
            icons.
          </li>
          <li>
            Disabled buttons must use <code>aria-disabled=&quot;true&quot;</code>{" "}
            rather than being removed from the DOM.
          </li>
          <li>
            Focus should remain on the pagination controls after a page change,
            not jump to the top of the page.
          </li>
        </ul>
      </DocSection>

      <DocSection title="Usage guidelines">
        <p className="mb-4">
          Use pagination for data tables, search results, and listing pages
          where the total count is known. It gives users a sense of scale and
          the ability to jump to any part of the data.
        </p>
        <p>
          Position pagination below the content it controls, right-aligned or
          centered depending on the layout. Always pair it with a visible
          indication of the total items (e.g., &quot;Showing 1–20 of 243 results&quot;).
        </p>
      </DocSection>

      <DocSection title="Do / Don't">
        <DoDontGrid
          doItems={[
            { description: "Always show the first and last page number for orientation." },
            { description: "Update the URL with the current page for shareable links." },
            { description: "Disable Previous/Next at the bounds rather than hiding them." },
            { description: "Show the total item count alongside pagination controls." },
          ]}
          dontItems={[
            { description: "Don't use pagination for sequential content like articles or stories." },
            { description: "Don't show all page numbers when there are dozens of pages — truncate with ellipsis." },
            { description: "Don't reset scroll position on page change if content loads in place." },
            { description: "Don't use pagination for fewer than 2 pages — hide the controls entirely." },
          ]}
        />
      </DocSection>

      <DocSection title="Specs">
        <DocTable
          headers={["Property", "Value"]}
          rows={[
            ["Button min-width", "36px (square)"],
            ["Button border radius", "var(--radius-md)"],
            ["Gap between buttons", "var(--spacing-1)"],
            ["Active background", "var(--color-primary)"],
            ["Active text color", "var(--color-foreground-invert)"],
            ["Hover background", "var(--color-hover)"],
            ["Disabled opacity", "0.4"],
            ["Ellipsis width", "36px"],
            ["Transition", "150ms ease background-color"],
          ]}
        />
      </DocSection>
    </>
  );
}
