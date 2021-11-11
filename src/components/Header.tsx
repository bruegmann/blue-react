import React from "react"
import Utilities from "./Utilities"

export interface HeaderProps {
    children?: any
}

/**
 * The top of a page.
 */
export default function Header({ children }: HeaderProps) {
    return (
        <div className="blue-header blue-header-extension">
            <div
                className="ui-header-wrapper"
                onClick={Utilities.scrollToTop}
            />

            {children}
        </div>
    )
}
