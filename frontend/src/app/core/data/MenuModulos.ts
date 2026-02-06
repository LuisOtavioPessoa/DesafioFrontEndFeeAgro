import { IconType } from "react-icons";
import { MdDashboard } from "react-icons/md";
import { FaExchangeAlt } from "react-icons/fa";
import { FiPlusCircle } from "react-icons/fi";

type MenuModulo = {
  id: string
  title: string
  href: string
  icon: IconType
}

type MenuModulosProps = {
  groupId: number
  groupTitle: string
  groupMenus: MenuModulo[]
}

export const MenuModulos: MenuModulosProps[] = [
  {
    groupId: 1,
    groupTitle: 'Módulos',
    groupMenus: [
      {
        id: 'M00',
        title: 'Dashboard',
        href: '/dashboard',
        icon: MdDashboard,
      },
      {
        id: 'M01',
        title: 'Página de Transações',
        href: '/transacoes',
        icon: FaExchangeAlt,
      },
      {
        id: 'M02',
        title: 'Página Nova Operação',
        href: '/operacao',
        icon: FiPlusCircle,
      },
    ]
  }
]