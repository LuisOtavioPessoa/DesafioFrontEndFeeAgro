"use client";

import { useControlSidebar } from "@/app/context/useControlSidebar";
import { MenuModulos } from "@/app/core/data/MenuModulos";
import SidebarItem from "./SidebarItem";

import { Drawer } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import Link from "next/link";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Sidebar() {
  const { isOpen, isCollapse, toggleIsOpen, toggleIsCollapse } =
    useControlSidebar();

  const theme = useTheme();
  const breakpointScreen = useMediaQuery(theme.breakpoints.up("md"));

  const [mounted, setMounted] = useState(false);
  const [isSidebarHover, setIsSidebarHover] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const MIN_WIDTH = 65;
  const MAX_WIDTH = 250;

  const sidebarWidth =
    breakpointScreen && isCollapse && !isSidebarHover ? MIN_WIDTH : MAX_WIDTH;

  function onHoverEnter() {
    if (breakpointScreen && isCollapse) {
      setIsSidebarHover(true);
    }
  }

  function onHoverLeave() {
    if (breakpointScreen && isCollapse) {
      setIsSidebarHover(false);
    }
  }

  return (
    <>
      <Drawer
        anchor="left"
        open={breakpointScreen ? true : isOpen}
        onClose={toggleIsOpen}
        variant={breakpointScreen ? "permanent" : "temporary"}
        sx={{
          width: sidebarWidth,
          flexShrink: 0,

          "& .MuiDrawer-paper": {
            width: sidebarWidth,
            transition: "width 150ms",
            boxSizing: "border-box",
            borderWidth: 0,
            overflowX: "hidden",
            overflowY: "hidden",
            backgroundColor: "var(--color-primary-1)",
            color: "#fff",
            borderRight: "4px solid var(--color-primary-2)",
            boxShadow: "6px 0px 20px rgba(0,0,0,0.15)",
          },
        }}
        slotProps={{
          paper: {
            onMouseEnter: onHoverEnter,
            onMouseLeave: onHoverLeave,
          },
        }}
      >
        {/* HEADER */}
        <div
          className={twMerge(
            "flex items-center justify-between px-4 py-4 border-b border-white/10",
            breakpointScreen && isCollapse && !isSidebarHover && "justify-center px-2"
          )}
        >
          <Link href="/" className="flex items-center gap-2">
            <div
              className={twMerge(
                breakpointScreen && isCollapse && !isSidebarHover && "hidden"
              )}
            >
              <p className="text-sm font-semibold leading-4">RWA Bank</p>
              <p className="text-xs text-white/60">Agro + Web3</p>
            </div>
          </Link>

          {breakpointScreen && !isCollapse && (
            <button
              onClick={toggleIsCollapse}
              className="p-2 rounded-lg hover:bg-white/10 transition"
              title="Recolher sidebar"
            >
              <FiChevronLeft className="w-5 h-5" />
            </button>
          )}

          {breakpointScreen && isCollapse && !isSidebarHover && (
            <button
              onClick={toggleIsCollapse}
              className="p-2 rounded-lg hover:bg-white/10 transition"
              title="Expandir sidebar"
            >
              <FiChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>

        <div className="flex flex-col gap-6 px-3 py-4 overflow-y-auto h-full overflow-x-hidden">
          {MenuModulos.map((group) => (
            <div key={group.groupId} className="flex flex-col gap-2">
              <div className="flex flex-col gap-1">
                {group.groupMenus.map((modulo) => (
                  <SidebarItem
                    key={modulo.id}
                    modulo={modulo}
                    breakpointScreen={breakpointScreen}
                    hideMenu={breakpointScreen && isCollapse && !isSidebarHover}
                    setIsOpen={toggleIsOpen}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Drawer>
    </>
  );
}
