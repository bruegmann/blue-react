import React from "react"
import "blue-web/dist/js/side-layout"
import LayoutHeader from "./Layout/LayoutHeader"
import LayoutMain from "./Layout/LayoutMain"

export interface SimpleLayoutProps {
    children?: React.ReactNode
    header?: React.ReactNode
    noPageBorder?: boolean
}

/**
 * A simple layout with header and main content area.
 */
export default function SimpleLayout({
    children,
    header,
    noPageBorder = false
}: SimpleLayoutProps) {
    return (
        <div
            className="vh-100 d-grid"
            style={{ gridTemplateRows: "var(--blue-menu-item-height) auto" }}
        >
            <LayoutHeader slot="header">{header}</LayoutHeader>
            <LayoutMain noPageBorder={noPageBorder}>{children}</LayoutMain>
        </div>
    )
}
