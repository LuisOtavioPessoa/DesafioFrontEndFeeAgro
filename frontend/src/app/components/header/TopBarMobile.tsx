"use client";

import { FiMenu } from "react-icons/fi";
import { useControlSidebar } from "@/app/context/useControlSidebar";

export default function TopBarMobile() {
  const { toggleIsOpen } = useControlSidebar();

  return (
    <div className="flex items-center gap-3 p-4 md:hidden bg-primary-3">
      <button
        onClick={toggleIsOpen}
        className="p-2 rounded-lg bg-primary-1 text-white"
      >
        <FiMenu className="w-6 h-6" />
      </button>
    </div>
  );
}
