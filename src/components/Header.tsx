import React, { ReactNode } from "react"

export interface HeaderProps {
    children?: ReactNode
}

/**
 * The top of a page.
 */
export default function Header({ children }: HeaderProps) {
    return <div className="blue-header blue-header-extension">{children}</div>
}
