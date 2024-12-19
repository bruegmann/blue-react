import React, { Fragment, useEffect, useState } from "react"

export interface SidebarMenuProps {
    /**
     * Extends the class name by the sidebar.
     */
    sidebarClass?: string

    /**
     * Sets the `style` prop by the sidebar.
     */
    sidebarStyle?: object

    /**
     * Extends the class name by the menu.
     */
    menuClass?: string

    /**
     * Sets the `style` prop by the menu.
     */
    menuStyle?: object

    /**
     * Content on top of the menu.
     */
    topContent?: any

    /**
     * Content for the bottom part of the sidebar.
     */
    bottomContent?: any

    children?: any
}

/**
 * Sidebar for the `Layout` component.
 */
export default function SidebarMenu(props: SidebarMenuProps) {
    return (
        <div
            className={"d-flex flex-column h-100 " + (props.sidebarClass ? props.sidebarClass : "")}
            style={props.sidebarStyle ? props.sidebarStyle : {}}
        >
            {props.topContent && <div className="blue-sidebar-top">{props.topContent}</div>}

            <div
                className={"flex-grow-1 overflow-auto " + (props.menuClass ? props.menuClass : "")}
                style={props.menuStyle ? props.menuStyle : {}}
            >
                {props.children}
            </div>

            {props.bottomContent && <div className={" "}>{props.bottomContent}</div>}
        </div>
    )
}
