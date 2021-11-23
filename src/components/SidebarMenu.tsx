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
    const [hasShadow, setHasShadow] = useState<boolean>(false)

    const updateDimensions = () => {
        if (window.innerHeight > 500) {
            setHasShadow(false)
        }
    }

    useEffect(() => {
        const blueAppSidebar = document.querySelector(
            ".blue-sidebar"
        ) as HTMLElement

        window.addEventListener("resize", updateDimensions)

        if (blueAppSidebar.scrollHeight > blueAppSidebar.clientHeight) {
            setHasShadow(true)
        }

        blueAppSidebar.addEventListener("scroll", () => {
            if (
                blueAppSidebar.scrollHeight - blueAppSidebar.scrollTop ===
                blueAppSidebar.clientHeight
            ) {
                setHasShadow(false)
            } else {
                setHasShadow(true)
            }
        })

        return () => {
            window.removeEventListener("resize", updateDimensions)
        }
    }, [])

    return (
        <div
            className={
                "blue-sidebar " +
                (props.sidebarClass ? props.sidebarClass : "")
            }
            style={props.sidebarStyle ? props.sidebarStyle : {}}
        >
            {props.topContent && (
                <div className="blue-sidebar-top">{props.topContent}</div>
            )}

            <div
                className={
                    "blue-menu " + (props.menuClass ? props.menuClass : "")
                }
                style={props.menuStyle ? props.menuStyle : {}}
            >
                {props.children}
            </div>

            {props.bottomContent && (
                <div
                    className={
                        "blue-sidebar-bottom " +
                        (hasShadow ? " has-shadow" : "")
                    }
                >
                    {props.bottomContent}
                </div>
            )}
        </div>
    )
}
