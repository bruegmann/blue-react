import React from "react"
import MenuItem, { MenuItemProps } from "./MenuItem"

export interface IconMenuItemProps extends MenuItemProps {
    outerClass?: string

    /**
     * Tooltip will be placed to the end/right by default. You can change the direction with this prop.
     */
    tooltipClass?: string

    /**
     * When used inside of the sidebar: active indicator will be displayed underneath instead of before.
     * The prop to `false` to disable this behavior.
     */
    horizontalOnOpenSidebar?: boolean
}

/**
 * Variant of `MenuItem` to primarily display an icon without a label.
 * The label prop will be displayed as a tooltip.
 */
export default function IconMenuItem({
    label,
    outerClass = "",
    tooltipClass = "blue-tooltip-end",
    horizontalOnOpenSidebar = true,
    className = "",
    ...props
}: IconMenuItemProps) {
    return (
        <div
            className={`${tooltipClass} ${
                horizontalOnOpenSidebar ? "blue-sidebar-menu-horizontal-on-open" : ""
            } ${outerClass}`}
            data-tooltip={label}
        >
            <MenuItem {...props} className={`${className} w-100`} iconClassName="w-100" />
        </div>
    )
}
