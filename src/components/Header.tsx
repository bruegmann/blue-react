import React, { CSSProperties, ReactNode } from "react"

export interface HeaderProps {
    children?: ReactNode
    className?: string
}

/**
 * The top of a page.
 */
export default function Header({ children, className = "" }: HeaderProps) {
    return (
        <header
            className={`bg-body position-sticky top-0 border-bottom d-flex justify-content-between ${className}`}
            style={
                {
                    ["--bs-bg-opacity"]: 1,
                    ["--blue-menu-item-dropdown-bg"]:
                        "rgba(var(--bs-body-bg-rgb), var(--bs-bg-opacity))",
                    zIndex: "var(--blue-header-z-index, 3)"
                } as CSSProperties
            }
        >
            {children}
        </header>
    )
}
