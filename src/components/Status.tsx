import React, { ReactNode } from "react"
import clsx from "clsx"

export interface StatusProps {
    successIcon?: ReactNode
    showSuccess?: boolean
}

export default function Status({ successIcon, showSuccess = false }: StatusProps) {
    return (
        <>
            <div className={clsx("blue-status-circle blue-status-success", {
                "d-flex": showSuccess
            })}>
                {successIcon || "✔"}
            </div>
        </>
    )
}