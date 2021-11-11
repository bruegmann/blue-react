declare global {
    interface Window {
        blueGridRef: any
        toggleSidebarEvent: any
    }
}
export default global

export { default as Grid } from "./dist/types/components/Grid"
export { GridProps } from "./dist/types/components/Grid"

export { default as ActionMenu } from "./dist/types/components/ActionMenu"
export { ActionMenuProps } from "./dist/types/components/ActionMenu"

export { default as ActionMenuSwitch } from "./dist/types/components/ActionMenuSwitch"
export { ActionMenuSwitchProps } from "./dist/types/components/ActionMenuSwitch"

export { default as Body } from "./dist/types/components/Body"
export { BodyProps } from "./dist/types/components/Body"

export { default as BodyRounded } from "./dist/types/components/BodyRounded"
export { BodyRoundedProps } from "./dist/types/components/BodyRounded"

export { default as Caret } from "./dist/types/components/Caret"
export { CaretProps } from "./dist/types/components/Caret"

export { default as DocumentView } from "./dist/types/components/DocumentView"
export { DocumentViewProps } from "./dist/types/components/DocumentView"

export { default as Header } from "./dist/types/components/Header"
export { HeaderProps } from "./dist/types/components/Header"

export { default as HeaderTitle } from "./dist/types/components/HeaderTitle"
export { HeaderTitleProps } from "./dist/types/components/HeaderTitle"

export { default as Intro } from "./dist/types/components/Intro"
export { IntroProps } from "./dist/types/components/Intro"

export { default as MenuItem } from "./dist/types/components/MenuItem"
export { MenuItemProps } from "./dist/types/components/MenuItem"

export { default as Modal } from "./dist/types/components/Modal"
export { ModalProps } from "./dist/types/components/Modal"

export { ModalProvider, useModal } from "./dist/types/components/ModalProvider"

export { default as Outside } from "./dist/types/components/Outside"
export { OutsideProps, useOutside } from "./dist/types/components/Outside"

export { default as Page } from "./dist/types/components/Page"
export { PageProps } from "./dist/types/components/Page"

export { default as Search } from "./dist/types/components/Search"
export { SearchProps } from "./dist/types/components/Search"

export { default as SidebarMenu } from "./dist/types/components/SidebarMenu"
export { SidebarMenuProps } from "./dist/types/components/SidebarMenu"

export { default as Status } from "./dist/types/components/Status"
export { StatusProps } from "./dist/types/components/Status"

export { default as Switch } from "./dist/types/components/Switch"
export { SwitchProps } from "./dist/types/components/Switch"

export { default as Utilities } from "./dist/types/components/Utilities"
