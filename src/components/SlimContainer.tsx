import React, { ReactNode } from "react"

export interface SlimContainerProps {
    children?: ReactNode
    className?: string
    innerClassName?: string
}

/**
 * Shortcut for a combination using Bootstrap's Grid System to create a slim responsive container.
 */
export default function SlimContainer({ children, className, innerClassName }: SlimContainerProps) {
    return (
        <div className={"row " + (className || "")}>
            <div className={"col-md-6 col-lg-4 " + (innerClassName || "")}>{children}</div>
        </div>
    )
}
