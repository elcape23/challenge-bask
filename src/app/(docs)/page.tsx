import SenaLogo from "@/components/prototype/globals/SenaLogo";
import ButtonContainer from "@/components/prototype/globals/ButtonContainer";

export default function OverviewPage() {
  return (
    <>
      <section className="mb-10 flex flex-col items-center gap-4 text-center">
        <SenaLogo size="xl" />
        <h1 className="text-heading-04 font-medium text-text-neutral-default">
          Design System
        </h1>
      </section>

      <ButtonContainer primaryLabel="Prototype" secondaryLabel="Docs" />
    </>
  );
}
