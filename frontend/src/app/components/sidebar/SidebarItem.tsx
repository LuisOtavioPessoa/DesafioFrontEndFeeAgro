import { IconType } from "react-icons/lib";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

type MenuModulo = {
  id: string;
  title: string;
  href: string;
  icon: IconType;
};

type SidebarItemProps = {
  modulo: MenuModulo;
  breakpointScreen: boolean;
  hideMenu: boolean;
  setIsOpen: () => void;
};

export default function SidebarItem({
  modulo,
  breakpointScreen,
  hideMenu,
  setIsOpen,
}: SidebarItemProps) {
  const pathname = usePathname();
  const Icon = modulo.icon;

  const isActive = pathname === modulo.href;

  return (
    <Link
      href={modulo.href}
      onClick={!breakpointScreen ? setIsOpen : undefined}
      className={twMerge(
        "flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200",
        "text-white/80",
        !isActive && "hover:bg-primary-2 hover:text-white",
        isActive && "text-[#FBBF24] font-semibold"
      )}
    >
      <div className="flex flex-nowrap items-center gap-2.5">
        <Icon
          className={twMerge(
            "w-7 h-7 transition-all duration-200",
            isActive ? "text-[#FBBF24]" : "text-white/80"
          )}
        />

        <span className={twMerge("text-nowrap", hideMenu ? "hidden" : "block")}>
          {modulo.title}
        </span>
      </div>
    </Link>
  );
}
