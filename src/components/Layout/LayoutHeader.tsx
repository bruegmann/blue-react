import React, { CSSProperties } from "react"

export interface LayoutHeaderProps
    extends React.HTMLAttributes<HTMLDivElement> {}

export default function LayoutHeader({
    children,
    className,
    ...rest
}: LayoutHeaderProps) {
    return (
        <header
            className={`d-flex justify-content-between position-relative h-100 ${className}`}
            style={
                {
                    color: "var(--blue-sidebar-color)",
                    background: "var(--blue-sidebar-bg)",
                    zIndex: "var(--blue-layout-header-z-index, 4)",
                    "--blue-menu-item-dropdown-bg": "var(--blue-sidebar-bg)",
                    ...rest.style
                } as CSSProperties
            }
            {...rest}
        >
            {children}
        </header>
    )
}
