import Link from "next/link";
import Card from "@/components/ui/Card";

const components = [
  { name: "Accordion", href: "/components/accordion", description: "Organizes content into collapsible sections for progressive disclosure." },
  { name: "Alert", href: "/components/alert", description: "Communicates status or feedback through color-coded banners." },
  { name: "Badge", href: "/components/badge", description: "Displays status, counts, or categorical labels." },
  { name: "Button", href: "/components/button", description: "Triggers actions and events with a single click." },
  { name: "Card", href: "/components/card", description: "Groups related content and actions in a container." },
  { name: "Checkbox", href: "/components/checkbox", description: "Allows selection of one or more items from a set." },
  { name: "Counter", href: "/components/counter", description: "Adjusts a numeric value incrementally with stepper controls." },
  { name: "Input", href: "/components/input", description: "Captures short-form text from the user." },
  { name: "Label", href: "/components/label", description: "Identifies form controls and provides essential context." },
  { name: "Radio", href: "/components/radio", description: "Selects a single option from a mutually exclusive group." },
  { name: "Select", href: "/components/select", description: "Lets users choose one option from a dropdown list." },
  { name: "Switch", href: "/components/switch", description: "Toggles a setting between two states instantly." },
];

export default function ComponentsPage() {
  return (
    <div className="col-span-2 grid grid-cols-2 gap-x-10 gap-y-20">
      <div className="col-span-2 flex flex-col gap-4">
        <h1
          className="font-bold tracking-tight text-text-neutral-default leading-none"
          style={{ fontSize: "120px", lineHeight: 1 }}
        >
          Components
        </h1>
        <p className="text-heading-06 font-regular text-text-neutral-secondary max-w-md">
          Reusable UI building blocks for consistent, accessible interfaces.
        </p>
      </div>

      <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {components.map((item) => (
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
