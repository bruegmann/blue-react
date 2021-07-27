import React, { ReactNode } from "react"
import clsx from "clsx"

export interface BsModalHeaderProps {
    className?: string
    children?: ReactNode
    toggle?: () => void
}

export default function BsModalHeader({ className, children, toggle }: BsModalHeaderProps) {
    return (
        <div className={clsx("modal-header", className)}>
            <h5 className="modal-title">{children}</h5>
            <button type="button" className="btn-close" onClick={toggle} />
        </div>
    )
}