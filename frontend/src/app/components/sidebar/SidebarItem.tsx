import { IconType } from "react-icons/lib";
import Link from 'next/link'
import { usePathname } from "next/navigation";
import { twMerge } from 'tailwind-merge'


type MenuModulo = {
    id: string
    title: string
    href: string
    icon: IconType
}

type SidebarItemProps = {
    modulo: MenuModulo,
    breakpointScreen: boolean,
    hideMenu: boolean,
    setIsOpen: () => void,
    //setIsSidebarHover: (isHover: boolean) => void,
}

export default function SidebarItem({
    modulo,
    breakpointScreen,
    hideMenu,
    setIsOpen
}: SidebarItemProps){
    const pathname = usePathname();
    const Icon = modulo.icon

    const isActive = pathname === modulo.href;

    return(

        <Link
            href={modulo.href}
            onClick={!breakpointScreen ? setIsOpen : undefined}
             className={twMerge(
                "flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200",
                "hover:bg-white/10 hover:text-white",
                isActive && "bg-white/15 text-white font-semibold" 
             )}
        >
            <div className='flex flex-nowrap items-center gap-2.5'>
                <Icon className={twMerge(
                    'w-8 h-8',
                    isActive ? "opacity-100" : "opacity-80"
                )}/>
                <span className={twMerge(
                    'text-nowrap',
                    !hideMenu ? 'block' : 'hidden'
                )}>
                    {modulo.title}
                </span>
            </div>
        </Link>
    )
}


