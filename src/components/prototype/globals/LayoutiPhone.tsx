"use client";

import { type ReactNode } from "react";

type LayoutiPhoneProps = {
  className?: string;
  children?: ReactNode;
  type?: "page" | "overlay";
};

function StatusBar() {
  return (
    <div className="flex shrink-0 items-center justify-center gap-[154px] bg-white px-6 pt-[21px] pb-[19px]">
      <div className="flex h-[22px] min-w-0 flex-1 items-center justify-center pt-[1.5px]">
        <p
          className="text-center text-[17px] leading-[22px] font-semibold text-black"
          style={{
            fontFamily:
              '"SF Pro Text", "SF Pro Display", "Segoe UI", system-ui, sans-serif',
          }}
        >
          9:41
        </p>
      </div>

      <div className="flex h-[22px] min-w-0 flex-1 items-center justify-center gap-[7px] pr-px pt-px text-black">
        <CellularIcon />
        <WifiIcon />
        <BatteryIcon />
      </div>
    </div>
  );
}

function CellularIcon() {
  return (
    <svg
      aria-hidden
      className="h-[12.226px] w-[19.2px] shrink-0"
      viewBox="0 0 20 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.2" y="8.2" width="3" height="4" rx="1" fill="currentColor" />
      <rect x="5.2" y="6.2" width="3" height="6" rx="1" fill="currentColor" />
      <rect
        x="10.2"
        y="3.2"
        width="3"
        height="9"
        rx="1"
        fill="currentColor"
      />
      <rect x="15.2" y="0.2" width="3" height="12" rx="1" fill="currentColor" />
    </svg>
  );
}

function WifiIcon() {
  return (
    <svg
      aria-hidden
      className="h-[12.328px] w-[17.142px] shrink-0"
      viewBox="0 0 18 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.2 4.7C5.5 0.9 12.5 0.9 16.8 4.7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M4 7.2C6.6 4.9 11.4 4.9 14 7.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M6.9 9.7C8.1 8.7 9.9 8.7 11.1 9.7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="9" cy="11" r="1.2" fill="currentColor" />
    </svg>
  );
}

function BatteryIcon() {
  return (
    <svg
      aria-hidden
      className="h-[13px] w-[27.328px] shrink-0"
      viewBox="0 0 28 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.7"
        y="0.7"
        width="24"
        height="11.6"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <rect x="2.8" y="2.8" width="18.8" height="7.4" rx="1.8" fill="currentColor" />
      <rect x="25.6" y="4.1" width="2.3" height="4.8" rx="1" fill="currentColor" />
    </svg>
  );
}

/**
 * iPhone shell layout — Status bar, content slot, Home Indicator.
 * Used as the base layout for all prototype screens.
 */
export default function LayoutiPhone({
  className,
  children = null,
  type = "page",
}: LayoutiPhoneProps) {
  const isOverlay = type === "overlay";
  const isPage = type === "page";

  return (
    <div
      className={`flex flex-col h-[874px] w-[402px] items-stretch relative ${
        isOverlay ? "" : "bg-background-default-default"
      } ${className ?? ""}`}
    >
      {isPage && (
        <>
          {/* Status bar */}
          <StatusBar />

          {/* Content slot */}
          <div className="relative flex-1 min-h-0 min-w-0 w-full">
            {children}
          </div>

          {/* Home indicator */}
          <div className="h-[34px] shrink-0 w-full bg-white flex items-end justify-center pb-2">
            <div
              className="w-[144px] h-[5px] rounded-full bg-black"
              aria-hidden
            />
          </div>
        </>
      )}

      {isOverlay && (
        <>
          <div className="h-[840px] shrink-0 w-full overflow-y-auto overflow-x-hidden">
            {children}
          </div>
          <div className="h-[34px] shrink-0 w-full bg-white flex items-end justify-center pb-2">
            <div
              className="w-[144px] h-[5px] rounded-full bg-black"
              aria-hidden
            />
          </div>
        </>
      )}
    </div>
  );
}
