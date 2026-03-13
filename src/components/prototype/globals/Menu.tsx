"use client";

import { type ReactNode } from "react";
import CardContent from "./CardContent";
import TopBar from "./TopBar";

export interface MenuItem {
  heading: string;
  description: string;
  imageSrc?: string;
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
}

export interface MenuProps {
  className?: string;
  sections?: MenuSection[];
  onClose?: () => void;
  children?: ReactNode;
}

const DEFAULT_SECTIONS: MenuSection[] = [
  {
    title: "Bestsellers",
    items: [
      {
        heading: "Minoxidil 5% Topical",
        description: "Higher-strength topical",
      },
      {
        heading: "Minoxidil 2% Topical",
        description: "Gentler starting strength",
      },
    ],
  },
  {
    title: "Treatments",
    items: [
      {
        heading: "Hair Regrowth",
        description: "Grow visibility thicker, fuller hair",
      },
      {
        heading: "Mental Health",
        description: "Go beyond traditional services",
      },
    ],
  },
];

/**
 * Global menu overlay matching the Figma mobile menu composition.
 */
export default function Menu({
  className,
  sections = DEFAULT_SECTIONS,
  onClose,
}: MenuProps) {
  return (
    <div
      className={`relative flex w-full max-w-[362px] flex-col items-start pb-3 pt-20 ${className ?? ""}`}
    >
      <TopBar
        className="absolute left-0 right-0 top-0"
        paddingClassName="h-[68px] px-5"
        color="invert"
        state="background"
        showSwitch
        onClose={onClose}
      />

      <div className="flex w-full flex-col gap-6 rounded-xl bg-background-fill-neutral-muted p-5 backdrop-blur-[10px]">
        {sections.map((section) => (
          <section key={section.title} className="flex w-full flex-col">
            <p className="w-full text-body-01 font-medium text-text-primary-invert">
              {section.title}
            </p>
            {section.items.map((item) => (
              <CardContent
                key={`${section.title}-${item.heading}`}
                heading={item.heading}
                description={item.description}
                imageSrc={item.imageSrc}
                imageAlt={item.heading}
                type="menu"
              />
            ))}
          </section>
        ))}
      </div>
    </div>
  );
}
