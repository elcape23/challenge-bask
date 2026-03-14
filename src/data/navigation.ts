export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}

export const navigation: NavGroup[] = [
  {
    title: "Getting started",
    items: [
      { label: "Overview", href: "/" },
    ],
  },
  {
    title: "Foundations",
    items: [
      { label: "Overview", href: "/foundations" },
      { label: "Colors", href: "/foundations/colors" },
      { label: "Typography", href: "/foundations/typography" },
      { label: "Spacing", href: "/foundations/spacing" },
      { label: "Grid", href: "/foundations/grid" },
      { label: "Radius", href: "/foundations/radius" },
      { label: "Shadows", href: "/foundations/shadows" },
      { label: "Iconography", href: "/foundations/iconography" },
    ],
  },
  {
    title: "Components",
    items: [
      { label: "Overview", href: "/components" },
      { label: "Accordion", href: "/components/accordion" },
      { label: "Alert", href: "/components/alert" },
      { label: "Badge", href: "/components/badge" },
      { label: "Button", href: "/components/button" },
      { label: "Card", href: "/components/card" },
      { label: "Checkbox", href: "/components/checkbox" },
      { label: "Counter", href: "/components/counter" },
      { label: "Input", href: "/components/input" },
      { label: "Label", href: "/components/label" },
      { label: "Radio", href: "/components/radio" },
      { label: "Select", href: "/components/select" },
      { label: "Switch", href: "/components/switch" },
    ],
  },
  {
    title: "Specs",
    items: [
      { label: "Overview", href: "/specs" },
    ],
  },
];
