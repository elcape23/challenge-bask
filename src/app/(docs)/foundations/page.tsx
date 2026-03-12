import Link from "next/link";
import Card from "@/components/ui/Card";

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
    <div className="col-span-2 grid grid-cols-2 gap-x-20 gap-y-20">
      <div className="col-span-2 flex flex-col gap-4">
        <h1
          className="font-bold tracking-tight text-text-neutral-default leading-none"
          style={{ fontSize: "120px", lineHeight: 1 }}
        >
          Foundations
        </h1>
        <p className="text-heading-06 font-regular text-text-neutral-secondary max-w-md">
          The visual and interaction building blocks of the Bask design system.
        </p>
      </div>

      <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {foundations.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="no-underline h-full flex"
          >
            <Card
              showHeading={false}
              className="gap-4 h-full flex-1 min-h-[200px]"
            >
              <p className="text-heading-05 font-medium text-text-neutral-default m-0">
                {item.name}
              </p>
              <p className="text-body-01 text-text-neutral-secondary py-4">
                {item.description}
              </p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
