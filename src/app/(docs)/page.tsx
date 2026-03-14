 "use client";

import { useRouter } from "next/navigation";
import SenaLogo from "@/components/prototype/globals/SenaLogo";
import Button from "@/components/ui/Button";

export default function OverviewPage() {
  const router = useRouter();
  const handleDocsClick = () => {
    if (window.matchMedia("(max-width: 1023px)").matches) {
      router.push("/docs-mobile");
      return;
    }

    router.push("/foundations");
  };
  const handlePrototypeClick = () => {
    if (window.matchMedia("(min-width: 1024px)").matches) {
      router.push("/prototype-desktop");
      return;
    }

    router.push("/prototype");
  };

  return (
    <div className="col-span-full flex min-h-full flex-col items-center justify-center gap-10">
      <section className="flex flex-col items-center gap-4 text-center">
        <SenaLogo size="md" />
        <h1 className="text-heading-04 font-medium text-text-neutral-secondary">
          Design System
        </h1>
      </section>

      <div className="flex w-full max-w-[220px] flex-col gap-3">
        <Button
          size="lg"
          variant="primary"
          appearance="outlined"
          className="w-full"
          onClick={handleDocsClick}
        >
          Docs
        </Button>
        <Button
          size="lg"
          variant="primary"
          appearance="filled"
          className="w-full"
          onClick={handlePrototypeClick}
        >
          Prototype
        </Button>
      </div>
    </div>
  );
}
