import React, { Fragment, useEffect, useState } from "react"

export interface SidebarMenuProps {
    /**
     * Should menu items have a Fluent effect. Default: `true`
     */
    fluent?: boolean

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
 * Sidebar for the `Grid` component.
 */
export default function SidebarMenu(props: SidebarMenuProps) {
    const { fluent = true } = props

    const [hasShadow, setHasShadow] = useState<boolean>(false)

    const updateDimensions = () => {
        if (window.innerHeight > 500) {
            setHasShadow(false)
        }
    }

    useEffect(() => {
        const blueAppSidebar = document.querySelector(
            ".blue-app-sidebar"
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
                "blue-app-sidebar " +
                (props.sidebarClass ? props.sidebarClass : "")
            }
            style={props.sidebarStyle ? props.sidebarStyle : {}}
        >
            {props.topContent && (
                <div className="blue-app-sidebar-top">{props.topContent}</div>
            )}

            <div
                className={
                    "blue-app-menu " + (props.menuClass ? props.menuClass : "")
                }
                style={props.menuStyle ? props.menuStyle : {}}
            >
                <div className={fluent === true ? "fluent-btn" : ""}>
                    {fluent === true ? (
                        <div className="fluent-btn-ball" />
                    ) : (
                        <Fragment />
                    )}
                    {props.children}
                </div>
            </div>

            {props.bottomContent && (
                <div
                    className={
                        "blue-app-sidebar-bottom " +
                        (hasShadow ? " has-shadow" : "")
                    }
                >
                    {props.bottomContent}
                </div>
            )}
        </div>
    )
}
