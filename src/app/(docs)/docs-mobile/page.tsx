"use client";

import { useRouter } from "next/navigation";
import SenaLogo from "@/components/prototype/globals/SenaLogo";
import Button from "@/components/ui/Button";

export default function DocsMobilePage() {
  const router = useRouter();

  return (
    <div className="col-span-full flex min-h-full flex-col items-center px-5 text-center">
      <div className="flex h-[68px] items-center">
        <SenaLogo size="sm" />
      </div>
      <div className="flex flex-1 flex-col items-center justify-center gap-10 max-w-[300px]">
        <h1 className="text-heading-06 font-medium text-text-neutral-default">
          Please, open the docs in desktop version
        </h1>
        <Button
          size="lg"
          variant="primary"
          appearance="filled"
          onClick={() => router.push("/prototype")}
        >
          Prototype
        </Button>
      </div>
    </div>
  );
}
