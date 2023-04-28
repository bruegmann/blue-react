import React, { useEffect, useRef, useState } from "react"
import MenuItem, { MenuItemProps } from "./MenuItem"
import Outside from "./Outside"

export interface SidebarMenuItemProps extends MenuItemProps {
    outerClass?: string
}

function getOffset(el: HTMLElement) {
    const rect = el.getBoundingClientRect()
    return {
        left: Math.round(rect.left + window.scrollX),
        top: Math.round(rect.top + window.scrollY)
    }
}

/**
 * Extends `MenuItem` with following features:
 * * Shows provided label as tooltip if sidebar is closed.
 * * Children will be displayed on the right side of the parent item.
 *
 * **Important!** Set the following props to the surrounding `SidebarMenu` to provide problems with tooltips:
 * ```jsx
 * <SidebarMenu
 *     sidebarClass="overflow-visible"
 *     menuClass="overflow-visible"
 * >
 *     ...
 * </SidebarMenu>
 * ```
 */

export default function SidebarMenuItem({ outerClass = "", children, onClick, ...props }: SidebarMenuItemProps) {
    const [open, setOpen] = useState(false)
    const toggle = () => setOpen(!open)
    const [offsetTop, setOffsetTop] = useState(0)

    const menuRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        setOpen(false)
    }, [window.location.hash])

    useEffect(() => {
        if (menuRef && menuRef.current) {
            const offset = getOffset(menuRef.current)
            setOffsetTop(offset.top)
        }
    }, [menuRef, open])

    return (
        <>
            {children ? (
                <Outside
                    className={`position-relative ${outerClass}`}
                    onClickOutside={() => {
                        setOpen(false)
                    }}
                >
                    <SidebarMenuItem {...props} isActive={open} onClick={toggle} />

                    {open && (
                        <div
                            ref={menuRef}
                            className={[
                                "position-absolute",
                                "shadow",
                                "top-0",
                                "ms-1",
                                "rounded",
                                "w-bla-sidebar-width",
                                "blue-menu-item-dropdown",
                                "blue-menu-item-dropdown-from-start"
                            ].join(" ")}
                            style={{
                                left: "var(--blue-sidebar-width, 3rem)",
                                maxHeight: `calc(100vh - (${offsetTop}px + 1rem))`,
                                overflowY: "auto",
                                overflowX: "hidden",
                                backgroundColor: "var(--blue-sidebar-bg)"
                            }}
                        >
                            <div className="blue-sidebar-control open">{children}</div>
                        </div>
                    )}
                </Outside>
            ) : (
                <div
                    className={`blue-tooltip-end blue-sidebar-pseudo-hidden-on-open ${outerClass}`}
                    data-tooltip={!props.isActive ? props.label : ""}
                    title={props.isActive ? props.label : ""}
                >
                    <MenuItem {...props} onClick={onClick} />
                </div>
            )}
        </>
    )
}
