import DocHeader from "@/components/docs/DocHeader";
import DocSection from "@/components/docs/DocSection";
import DocTable from "@/components/docs/DocTable";
import DocCallout from "@/components/docs/DocCallout";
import DoDontGrid from "@/components/docs/DoDontGrid";
import DocPreview from "@/components/docs/DocPreview";
import DocAnatomy from "@/components/docs/DocAnatomy";

/* ─── User icon for default placeholder ─── */
function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-1/2">
      <circle cx="12" cy="8" r="4" />
      <path d="M20 21a8 8 0 0 0-16 0" />
    </svg>
  );
}

export default function AvatarPage() {
  return (
    <div className="col-span-2 grid grid-cols-2 gap-x-10 gap-y-10">
      <div className="col-start-1 flex flex-col">
        <DocHeader
          variant="foundations"
          title="Avatar"
          description="Avatars represent users or entities with a profile image, initials, or a default icon, providing visual identity across the interface."
        />
      </div>

      <div className="col-start-1">
        <DocSection title="Overview">
          <p className="mb-4">
            Avatars represent users or entities with a profile image, initials, or
            a default icon, providing visual identity across the interface. They
            appear in headers, comments, user lists, and cards to quickly identify
            who is associated with content or actions.
          </p>
          <p>
            Use avatars to humanize the interface and create a sense of presence.
            When a photo is unavailable, initials or a generic user icon provide
            a consistent fallback that maintains the layout and hierarchy.
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
                  "A circular frame that defines the avatar boundary. Uses rounded-full for a perfect circle.",
              },
              {
                label: "Image",
                description:
                  "The user's profile photo when available. Fills the container and is cropped to a circle.",
              },
              {
                label: "Initials fallback",
                description:
                  "Two-letter text displayed when no image is available. Typically derived from first and last name.",
              },
              {
                label: "Default icon",
                description:
                  "A generic user silhouette shown when neither image nor initials are available.",
              },
              {
                label: "Status indicator",
                description:
                  "Optional dot positioned at the bottom-right to show online/offline/away status.",
              },
            ]}
          />
          <DocPreview rounded={false} border={false} verticalPaddingOnly aspectSquare>
            <div className="flex gap-6 items-end w-full max-w-sm">
              <div className="relative">
                <div className="size-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-900 text-body-02 font-medium">
                  JL
                </div>
                <span className="absolute bottom-0 right-0 size-3 rounded-full bg-success-500 border-2 border-white" />
              </div>
              <div className="size-12 rounded-full bg-neutral-200 flex items-center justify-center text-text-neutral-placeholder">
                <UserIcon />
              </div>
            </div>
          </DocPreview>
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Variants" hideTitle>
          <DocTable
            variant="surface"
            headers={["Variant", "Description", "When to use"]}
            rows={[
              [
                "Image",
                "Displays the user's profile photo",
                "When a photo URL is available and the user has consented to display it.",
              ],
              [
                "Initials",
                "Two-letter text derived from the user's name",
                "When no photo is available but the user's name is known.",
              ],
              [
                "Icon",
                "Generic user silhouette placeholder",
                "When neither photo nor name is available, or for anonymous/guest users.",
              ],
            ]}
          />
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Sizes" hideTitle>
          <DocTable
            variant="surface"
            headers={["Size", "Dimension", "Use case"]}
            rows={[
              ["Small (sm)", "32px", "Inline with text, table rows, compact lists."],
              ["Medium (md)", "40px", "Default for most contexts — comments, cards, user lists."],
              ["Large (lg)", "56px", "Profile headers, user detail views."],
              ["Extra large (xl)", "80px", "Hero sections, profile pages, prominent user displays."],
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
              ["Default", "The avatar displays its content (image, initials, or icon) in a neutral state."],
              ["Loading", "A skeleton or placeholder while the image loads."],
              ["Error", "Falls back to initials or icon if the image fails to load."],
              ["Status indicator", "Optional green (online), gray (offline), or amber (away) dot."],
            ]}
          />
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Behavior">
          <p className="mb-4">
            Avatars are typically non-interactive but may be clickable when they
            link to a user profile. When grouped (e.g., showing multiple
            contributors), avatars can overlap with a 2px white border to create
            visual separation.
          </p>
          <DocCallout variant="info" title="Grouped avatars">
            For stacked or overlapping avatars, use a 2px solid white border to
            separate each avatar and maintain readability.
          </DocCallout>
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Accessibility">
          <ul className="pl-5 mb-4">
            <li className="mb-2">
              Provide an <code>alt</code> attribute for image avatars (e.g., &quot;Profile photo of Jane Lee&quot;).
            </li>
            <li className="mb-2">
              For initials avatars, use <code>aria-label</code> to announce the user&apos;s name to screen readers.
            </li>
            <li className="mb-2">
              Decorative avatars (purely visual, no semantic meaning) should use <code>aria-hidden=&quot;true&quot;</code>.
            </li>
            <li>
              Ensure sufficient contrast between initials and background — at least 4.5:1 for body text.
            </li>
          </ul>
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Usage guidelines">
          <p className="mb-4">
            Use consistent sizing within a context. Don&apos;t mix avatar sizes in
            the same list or card unless there is a clear hierarchy (e.g., primary
            author vs. commenters).
          </p>
          <p>
            For initials, use the first letter of the first name and the first
            letter of the last name. For single names, use the first two letters.
            Keep the format consistent across the product.
          </p>
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Do / Don't">
          <div style={{ backgroundColor: "#FFFFFF", padding: "200px" }} className="overflow-hidden flex flex-row gap-10 w-full items-start justify-between">
            <DoDontGrid
              doItems={[
                { description: "Use initials when no photo is available — they're more personal than a generic icon." },
                { description: "Maintain consistent avatar sizes within the same context." },
                { description: "Provide meaningful alt text or aria-label for screen readers." },
                { description: "Use a 2px white border when stacking or overlapping avatars." },
              ]}
              dontItems={[
                { description: "Don't use more than two letters for initials." },
                { description: "Don't mix avatar sizes arbitrarily in the same list." },
                { description: "Don't use low-contrast combinations for initials and background." },
                { description: "Don't rely on avatars alone to identify users — pair with names when possible." },
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
              ["Border radius", "9999px (rounded-full)"],
              ["Font weight (initials)", "500 (medium)"],
              ["Border (grouped)", "2px solid white"],
              ["Status indicator size", "12px"],
              ["Status indicator position", "Bottom-right, 2px inset"],
            ]}
          />
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Examples">
          <div className="grid grid-cols-2 gap-10 items-stretch">
            <DocPreview rounded={false} border={false} verticalPaddingOnly aspectSquare className="h-full min-h-0">
              <div className="flex gap-6 items-end w-full max-w-sm">
                <div className="size-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-900 text-body-03 font-medium">
                  JL
                </div>
                <div className="size-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-900 text-body-02 font-medium">
                  JL
                </div>
                <div className="size-14 rounded-full bg-primary-100 flex items-center justify-center text-primary-900 text-body-01 font-medium">
                  JL
                </div>
                <div className="size-20 rounded-full bg-primary-100 flex items-center justify-center text-primary-900 text-body-01 font-medium">
                  JL
                </div>
              </div>
            </DocPreview>
            <DocPreview rounded={false} border={false} verticalPaddingOnly aspectSquare className="h-full min-h-0">
              <div className="flex gap-4 items-center w-full max-w-sm">
                <div className="size-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-900 text-body-02 font-medium">
                  JL
                </div>
                <div className="size-12 rounded-full bg-neutral-200 flex items-center justify-center text-text-neutral-placeholder">
                  <UserIcon />
                </div>
              </div>
            </DocPreview>
            <DocPreview rounded={false} border={false} verticalPaddingOnly aspectSquare className="h-full min-h-0">
              <div className="flex gap-4 items-center w-full max-w-sm">
                <div className="relative">
                  <div className="size-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-900 text-body-02 font-medium">
                    JL
                  </div>
                  <span className="absolute bottom-0 right-0 size-3 rounded-full bg-success-500 border-2 border-white" />
                </div>
                <div className="relative">
                  <div className="size-12 rounded-full bg-neutral-200 flex items-center justify-center text-text-neutral-placeholder">
                    <UserIcon />
                  </div>
                  <span className="absolute bottom-0 right-0 size-3 rounded-full bg-neutral-400 border-2 border-white" />
                </div>
              </div>
            </DocPreview>
            <DocPreview rounded={false} border={false} verticalPaddingOnly aspectSquare className="h-full min-h-0">
              <div className="flex -space-x-2 w-full max-w-sm">
                {["JL", "AB", "CD"].map((initials, i) => (
                  <div
                    key={i}
                    className="size-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-900 text-body-02 font-medium border-2 border-white"
                  >
                    {initials}
                  </div>
                ))}
              </div>
            </DocPreview>
          </div>
        </DocSection>
      </div>
    </div>
  );
}
