import React from "react"
import { breakOption } from "./shared"
import Utilities from "./Utilities"

export interface HeaderActionsProps {
    className?: string

    /**
     * @deprecated Use `break` prop instead.
     */
    breakpoint?: breakOption

    break?: breakOption
    children?: any
}

/**
 * Here you can place components like `ActionMenu` for the current page.
 */
export default function HeaderActions(props: HeaderActionsProps) {
    const _break = props.break || props.breakpoint || "lg"
    return (
        <div className={`blue-app-actions navbar ${props.className} navbar-expand-${_break} ${_break}`}>
            <div className="ui-header-wrapper" onClick={Utilities.scrollToTop} />
            {props.children}
        </div>
    )
}