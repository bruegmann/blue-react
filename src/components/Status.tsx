import React, { ReactNode } from "react"
import clsx from "clsx"
import { StatusAlert, StatusType } from "./shared"

export interface StatusProps {
    alert?: StatusAlert
    onUnsetAlert?: () => void
    successIcon?: ReactNode
    infoIcon?: ReactNode
    warningIcon?: ReactNode
    dangerIcon?: ReactNode
    status?: StatusType
}

export default function Status({
    alert,
    onUnsetAlert,
    successIcon = "✔",
    infoIcon = "ℹ️",
    warningIcon = "⚠️",
    dangerIcon = "❌",
    status = null
}: StatusProps) {
    return (
        <>
            <div
                className={clsx(
                    "blue-status-circle blue-loading blue-status-loading",
                    {
                        "d-block": status === "loading" || alert && alert.status === "loading"
                    }
                )}
            >
                <div className="spinner-bounce-circle">
                    <div></div>
                    <div></div>
                </div>
            </div>

            <div
                className={clsx("blue-status-circle blue-status-success", {
                    "d-flex": status === "success" || alert && alert.status === "success"
                })}
            >
                {successIcon}
            </div>

            <div
                className={clsx("blue-status-circle blue-status-info", {
                    "d-flex": status === "info" || alert && alert.status === "info"
                })}
            >
                {infoIcon}
            </div>

            <div
                className={clsx("blue-status-circle blue-status-warning", {
                    "d-flex": status === "warning" || alert && alert.status === "warning"
                })}
            >
                {warningIcon}
            </div>

            <div
                className={clsx("blue-status-circle blue-status-danger", {
                    "d-flex": status === "danger" || alert && alert.status === "danger"
                })}
            >
                {dangerIcon}
            </div>

            <div className="blue-status-alert alert">
                <button
                    type="button"
                    className="btn-close float-end mb-1"
                    aria-label="Close"
                />
                <div className="alert-body" />
            </div>

            {alert && (
                <div
                    className={clsx(
                        "blue-status-alert alert d-block",
                        alert.alertClassName,
                        alert.status && `alert-${alert.status}`
                    )}
                >
                    <button
                        type="button"
                        className="btn-close float-end mb-1 d-inline-block"
                        aria-label="Close"
                        onClick={onUnsetAlert}
                    />
                    <div className="alert-body">
                        {alert.title && <h2>{alert.title}</h2>}
                        {alert.detailText && <span>{alert.detailText}</span>}
                    </div>
                </div>
            )}
        </>
    )
}
