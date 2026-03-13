"use client";

import { useState } from "react";
import DocHeader from "@/components/docs/DocHeader";
import DocSection from "@/components/docs/DocSection";
import DocTable from "@/components/docs/DocTable";
import DocPreview from "@/components/docs/DocPreview";
import Switch, {
  type SwitchBackground,
  type SwitchMode,
} from "@/components/ui/Switch";

function SegmentedControl<T extends string>({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: T;
  onChange: (value: T) => void;
  options: { label: string; value: T }[];
}) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-body-03 font-medium text-text-neutral-secondary">
        {label}
      </p>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const active = option.value === value;

          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onChange(option.value)}
              className={[
                "rounded-full border px-3 py-1 text-body-03 transition-colors",
                active
                  ? "border-primary-900 bg-primary-900 text-text-primary-invert"
                  : "border-border-neutral-default text-text-neutral-secondary hover:border-border-neutral-hover",
              ].join(" ")}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function VariantGrid() {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="flex flex-col items-center gap-3">
        <Switch mode="light" background="blur" aria-label="Light blur switch" />
        <p className="text-body-03 text-text-neutral-placeholder">
          Light / Blur
        </p>
      </div>
      <div className="flex flex-col items-center gap-3">
        <Switch mode="light" background="solid" aria-label="Light solid switch" />
        <p className="text-body-03 text-text-neutral-placeholder">
          Light / Solid
        </p>
      </div>
      <div className="flex flex-col items-center gap-3">
        <Switch mode="dark" background="blur" aria-label="Dark blur switch" />
        <p className="text-body-03 text-text-neutral-placeholder">
          Dark / Blur
        </p>
      </div>
      <div className="flex flex-col items-center gap-3">
        <Switch mode="dark" background="solid" aria-label="Dark solid switch" />
        <p className="text-body-03 text-text-neutral-placeholder">
          Dark / Solid
        </p>
      </div>
    </div>
  );
}

function Playground() {
  const [mode, setMode] = useState<SwitchMode>("light");
  const [background, setBackground] = useState<SwitchBackground>("blur");

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_280px]">
      <div className="rounded-md border border-border-neutral-default">
        <div className="border-b border-border-neutral-default bg-background-surface-neutral-default px-4 py-2 text-body-03 font-medium text-text-neutral-placeholder">
          Preview
        </div>
        <div className="flex min-h-[220px] items-center justify-center bg-white p-8">
          <Switch
            mode={mode}
            background={background}
            onChange={setMode}
            aria-label="Interactive theme switch"
          />
        </div>
      </div>

      <div className="flex flex-col gap-5 rounded-md border border-border-neutral-default bg-background-surface-neutral-default p-4">
        <SegmentedControl
          label="Mode"
          value={mode}
          onChange={setMode}
          options={[
            { label: "Light", value: "light" },
            { label: "Dark", value: "dark" },
          ]}
        />
        <SegmentedControl
          label="Background"
          value={background}
          onChange={setBackground}
          options={[
            { label: "Blur", value: "blur" },
            { label: "Solid", value: "solid" },
          ]}
        />

        <div className="rounded-sm border border-border-neutral-default bg-white p-4">
          <p className="mb-2 text-body-03 font-medium text-text-neutral-secondary">
            Code
          </p>
          <pre className="overflow-x-auto text-body-03 text-text-neutral-default">
            <code>{`<Switch mode="${mode}" background="${background}" />`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

export default function SwitchPage() {
  return (
    <div className="col-span-2 grid grid-cols-2 gap-x-10 gap-y-10">
      <div className="col-start-1 flex flex-col">
        <DocHeader
          title="Switch"
          description="A theme switch with a fixed 68 by 36 frame, icon thumb, and the exact light, dark, blur, and solid variants defined in Figma."
          variant="foundations"
        />
      </div>

      <div className="col-span-2">
        <DocSection title="Overview">
          <p className="mb-4">
            This component maps directly to the Figma switch family. It toggles
            between light and dark modes and supports the two background
            treatments shown in design: blur and solid.
          </p>
          <p>
            The component is intentionally compact and icon-only. It does not
            include the labeled settings-switch layout that existed previously.
          </p>
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Variants">
          <DocPreview rounded={false} border={false} verticalPaddingOnly aspectSquare>
            <VariantGrid />
          </DocPreview>
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Measurements">
          <DocTable
            variant="surface"
            headers={["Element", "Value", "Notes"]}
            rows={[
              ["Outer frame", "68x36px", "Fixed size across every variant."],
              ["Outer padding", "4px", "Matches Figma space-1."],
              ["Icon container", "28x28px", "20px icon inside a 4px inset."],
              ["Corner radius", "9999px", "Pill track and circular thumb."],
              ["Blur variant", "20px", "Background blur token from Figma."],
            ]}
          />
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Design Tokens">
          <DocTable
            variant="surface"
            headers={["Variant", "Track", "Thumb", "Icon"]}
            rows={[
              [
                "Blur",
                "bg-background-fill-neutral-muted + blur-20",
                "bg-background-default-default",
                "icon-neutral-default",
              ],
              [
                "Solid",
                "bg-background-default-default + border-neutral-default",
                "bg-neutral-800",
                "icon-neutral-invert",
              ],
            ]}
          />
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Interactive Playground">
          <Playground />
        </DocSection>
      </div>

      <div className="col-span-2">
        <DocSection title="Props Reference">
          <DocTable
            variant="surface"
            headers={["Prop", "Type", "Default", "Description"]}
            rows={[
              ["mode", '"light" | "dark"', '"light"', "Controlled visual state."],
              [
                "defaultMode",
                '"light" | "dark"',
                '"light"',
                "Initial mode for uncontrolled usage.",
              ],
              [
                "background",
                '"blur" | "solid"',
                '"blur"',
                "Figma background treatment.",
              ],
              [
                "onChange",
                "(mode: SwitchMode) => void",
                "undefined",
                "Fires with the next mode after toggle.",
              ],
              ["disabled", "boolean", "false", "Disables interaction and dims the control."],
              ["className", "string", "undefined", "Additional classes on the root button."],
            ]}
          />
        </DocSection>
      </div>
    </div>
  );
}
