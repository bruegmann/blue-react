import React, { CSSProperties, ReactNode } from "react"

export interface SidebarMenuProps {
    /**
     * Extends the class name by the sidebar.
     */
    sidebarClass?: string

    /**
     * Sets the `style` prop by the sidebar.
     */
    sidebarStyle?: CSSProperties

    /**
     * Extends the class name by the menu.
     */
    menuClass?: string

    /**
     * Sets the `style` prop by the menu.
     */
    menuStyle?: CSSProperties

    /**
     * Content on top of the menu.
     */
    topContent?: ReactNode

    /**
     * Content for the bottom part of the sidebar.
     */
    bottomContent?: ReactNode

    children?: ReactNode
}

/**
 * Sidebar for the `Layout` component.
 */
export default function SidebarMenu(props: SidebarMenuProps) {
    return (
        <div
            className={"d-flex flex-column h-100 " + (props.sidebarClass || "")}
            style={props.sidebarStyle}
        >
            {props.topContent}

            <div
                className={
                    "flex-grow-1 overflow-auto " + (props.menuClass || "")
                }
                style={props.menuStyle ? props.menuStyle : {}}
            >
                {props.children}
            </div>

            {props.bottomContent}
        </div>
    )
}
