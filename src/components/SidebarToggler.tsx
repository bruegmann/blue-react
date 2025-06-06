import React, { MouseEventHandler, ReactNode } from "react"
import { getPhrase } from "./shared"

export interface SidebarTogglerProps {
    className?: string
    sidebarToggleIconComponent: ReactNode
    onClick: MouseEventHandler<HTMLButtonElement>
}

/**
 * @deprecated With the new layout design, you don't need this anymore.
 * Button to toggle sidebar state. Designed for internal use inside of `Layout`.
 */

export default function SidebarToggler({
    className = "",
    sidebarToggleIconComponent,
    onClick
}: SidebarTogglerProps) {
    return (
        <div
            className={`blue-sidebar-toggler position-fixed ${className}`}
            data-tooltip={getPhrase("Toggle menu")}
        >
            <button
                type="button"
                className="blue-open-menu blue-menu-item btn rounded-0"
                onClick={onClick}
                aria-label={getPhrase("Toggle menu")}
            >
                <div className="blue-sidebar-exception position-absolute w-100 h-100" />
                {sidebarToggleIconComponent}
            </button>
        </div>
    )
}
