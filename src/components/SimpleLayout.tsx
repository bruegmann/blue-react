import React, { CSSProperties } from "react"
import clsx from "clsx"

export interface SimpleLayoutProps {
    children?: React.ReactNode
    className?: string
    style?: CSSProperties
    header?: React.ReactNode
    noPageBorder?: boolean
}

/**
 * A simple layout with header and main content area.
 */
export default function SimpleLayout({
    children,
    className,
    style,
    header,
    noPageBorder = false
}: SimpleLayoutProps) {
    return (
        <div className={clsx("blue-layout", className)} style={style}>
            <header className="blue-layout-header">{header}</header>

            <main className="blue-layout-main">
                <div
                    className={clsx("blue-layout-body", {
                        "border-0": noPageBorder
                    })}
                >
                    {children}
                </div>
            </main>
        </div>
    )
}
