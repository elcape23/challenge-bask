import Link from "next/link";
import DocHeader from "@/components/docs/DocHeader";
import DocSection from "@/components/docs/DocSection";

const foundations = [
  {
    name: "Colors",
    href: "/foundations/colors",
    description: "Palette, tokens, and usage rules for the color system.",
  },
  {
    name: "Typography",
    href: "/foundations/typography",
    description: "Type scale, font families, weights, and readability rules.",
  },
  {
    name: "Spacing",
    href: "/foundations/spacing",
    description: "Consistent spacing scale for layout and component spacing.",
  },
  {
    name: "Grid",
    href: "/foundations/grid",
    description: "Column structure, breakpoints, and layout alignment.",
  },
  {
    name: "Radius",
    href: "/foundations/radius",
    description: "Border radius values for a cohesive visual feel.",
  },
  {
    name: "Shadows",
    href: "/foundations/shadows",
    description: "Elevation levels that create depth and hierarchy.",
  },
  {
    name: "Iconography",
    href: "/foundations/iconography",
    description: "Icon sizing, style guidelines, and usage principles.",
  },
  {
    name: "Motion",
    href: "/foundations/motion",
    description: "Animation timing, easing, and interaction guidance.",
  },
];

export default function FoundationsPage() {
  return (
    <>
      <DocHeader
        title="Foundations"
        description="The visual and interaction building blocks of the Bask design system."
      />

      <DocSection title="Overview">
        <p className="mb-4">
          Foundations define the core visual language that every component and
          layout is built upon. They ensure a unified look and feel by
          establishing shared rules for color, type, spacing, shadows, and more.
        </p>
        <p>
          Each foundation is documented with its scale, intended usage, and clear
          rules so that designers and developers make consistent decisions
          without guesswork.
        </p>
      </DocSection>

      <DocSection title="What's included">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {foundations.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="docs-card block p-5 border border-border-neutral-default rounded-md bg-white no-underline"
              style={{
                transition: "border-color 0.15s ease, box-shadow 0.15s ease",
              }}
            >
              <span className="block text-body-01 text-text-neutral-default mb-1 font-medium">
                {item.name}
              </span>
              <span className="text-body-02 text-text-neutral-secondary">
                {item.description}
              </span>
            </Link>
          ))}
        </div>
      </DocSection>
    </>
  );
}
