import React, { CSSProperties, ReactNode } from "react"
import clsx from "clsx"

export interface LayoutProps {
    children?: ReactNode
    className?: string
    disableHeaders?: boolean
    expandSidebar?: boolean
    hideSidebarMenu?: boolean
    id?: string
    open: boolean
    onChangeOpen: (open: boolean) => void
    style?: CSSProperties,
    toggleIcon?: ReactNode
}

export default function Layout({
    children,
    className,
    disableHeaders = false,
    expandSidebar = false,
    hideSidebarMenu = false,
    open,
    onChangeOpen,
    toggleIcon = "☰",
    ...rest
}: LayoutProps) {
    const toggleOpen = () => onChangeOpen(!open)

    return (
        <div
            className={clsx("blue-layout", className, {
                expandSidebar,
                disableHeaders,
                hasNoSidebarMenu: hideSidebarMenu,
                hasSidebarMenu: !hideSidebarMenu,
                open
            })}
            {...rest}
        >
            <div className="blue-sidebar-toggler">
                {!hideSidebarMenu && (
                    <button
                        type="button"
                        className="blue-open-menu blue-menu-item btn"
                        onClick={toggleOpen}
                    >
                        <div className="blue-sidebar-exception position-absolute w-100 h-100" />
                        {toggleIcon}
                    </button>
                )}
            </div>
            {children}
        </div>
    )
}
