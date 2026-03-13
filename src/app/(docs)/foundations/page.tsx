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
    <div className="col-span-1 grid grid-cols-1 gap-x-10 gap-y-10 lg:col-span-2 lg:grid-cols-2 lg:gap-y-20">
      <div className="col-span-1 flex flex-col gap-3 lg:col-span-2 lg:gap-4">
        <h1 className="text-[clamp(56px,18vw,120px)] font-bold tracking-tight text-text-neutral-default leading-none">
          Foundations
        </h1>
        <p className="max-w-md text-heading-06 font-regular text-text-neutral-secondary">
          The visual and interaction building blocks of the Bask design system.
        </p>
      </div>

      <div className="col-span-1 grid grid-cols-1 gap-4 lg:col-span-2 lg:grid-cols-3">
        {foundations.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="no-underline h-full flex"
          >
            <Card
              showHeading={false}
              className="gap-4 h-full min-h-[160px] flex-1 sm:min-h-[200px]"
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
