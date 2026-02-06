import { create } from 'zustand';

type useControlSidebarProps = {
  isOpen: boolean,
  toggleIsOpen: () => void,
  isCollapse: boolean,
  toggleIsCollapse: () => void,
}

export const useControlSidebar = create<useControlSidebarProps>()(
  (set) => ({
    isOpen: false,
    toggleIsOpen: () => set((state) => ({isOpen: !state.isOpen})),

    isCollapse: false,
    toggleIsCollapse: () => set((state) => ({isCollapse: !state.isCollapse}))
  })
)