declare global {
    interface Window {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        blueHashRouterRef: any
    }
}
export default global

export { default as Layout } from "./dist/components/Layout"
export { LayoutProps } from "./dist/components/Layout"

export { default as A } from "./dist/components/A"
export { AProps } from "./dist/components/A"

export { default as ActionMenu } from "./dist/components/ActionMenu"
export { ActionMenuProps } from "./dist/components/ActionMenu"

export { default as Body } from "./dist/components/Body"
export { BodyProps } from "./dist/components/Body"

export { default as Chevron } from "./dist/components/Chevron"
export { ChevronProps } from "./dist/components/Chevron"

export { default as HashRouter } from "./dist/components/HashRouter"
export { HashRouterProps } from "./dist/components/HashRouter"

export { default as Header } from "./dist/components/Header"
export { HeaderProps } from "./dist/components/Header"

export { default as HeaderTitle } from "./dist/components/HeaderTitle"
export { HeaderTitleProps } from "./dist/components/HeaderTitle"

export { default as IconMenuItem } from "./dist/components/IconMenuItem"
export { IconMenuItemProps } from "./dist/components/IconMenuItem"

export { default as Intro } from "./dist/components/Intro"
export { IntroProps } from "./dist/components/Intro"

export { default as MenuItem } from "./dist/components/MenuItem"
export { MenuItemProps } from "./dist/components/MenuItem"

export { default as Modal } from "./dist/components/Modal"
export { ModalProps } from "./dist/components/Modal"

export { ModalProvider, useModal } from "./dist/components/ModalProvider"

export { default as Outside } from "./dist/components/Outside"
export { OutsideProps, useOutside } from "./dist/components/Outside"

export { default as Page } from "./dist/components/Page"
export { PageProps } from "./dist/components/Page"

export { default as Search } from "./dist/components/Search"
export { SearchProps } from "./dist/components/Search"

export { default as SidebarMenu } from "./dist/components/SidebarMenu"
export { SidebarMenuProps } from "./dist/components/SidebarMenu"

export { default as SimpleLayout } from "./dist/components/SimpleLayout"
export { SimpleLayoutProps } from "./dist/components/SimpleLayout"

export { default as SlimContainer } from "./dist/components/SlimContainer"
export { SlimContainerProps } from "./dist/components/SlimContainer"

export { default as Status } from "./dist/components/Status"
export { StatusProps } from "./dist/components/Status"

export { StatusProvider, useStatus } from "./dist/components/StatusProvider"

export {
    ToastProvider,
    ToastProviderProps,
    useToast,
    ToastItem,
    ToastItemType
} from "./dist/components/ToastProvider"

export { default as Utilities } from "./dist/components/Utilities"
