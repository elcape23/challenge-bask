import Link from "next/link";



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
      <div className="mb-10">
        <h1 className="font-bold tracking-tight text-text-neutral-default mb-3" style={{ fontSize: "120px", lineHeight: 1 }}>
          Foundations
        </h1>
        <p className="text-body-01 font-regular text-text-neutral-secondary">
          The visual and interaction building blocks of the Bask design system.
        </p>
      </div>

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
    </>
  );
}
