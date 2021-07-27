import React, { ReactNode } from "react"
import clsx from "clsx"

export interface BsModalBodyProps {
    className?: string
    children?: ReactNode
}

export default function BsModalBody({ className, children }: BsModalBodyProps) {
    return (
        <div className={clsx("modal-body", className)}>
            {children}
        </div>
    )
}