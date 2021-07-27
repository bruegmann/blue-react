import React, { ReactNode } from "react"
import clsx from "clsx"

export interface BsModalFooterProps {
    className?: string
    children?: ReactNode
}

export default function BsModalFooter({ className, children }: BsModalFooterProps) {
    return (
        <div className={clsx("modal-footer", className)}>
            {children}
        </div>
    )
}