import React, { createContext, ReactNode, useContext, useState } from "react"
import { getPhrase } from "./shared"

const ToastContext = createContext({
    addToast: undefined as unknown as (toastItem: ToastItem) => void,
    clearToasts: undefined as unknown as () => void
})

interface ToastProviderProps {
    children?: ReactNode
    successIcon?: ReactNode
    infoIcon?: ReactNode
    warningIcon?: ReactNode
    dangerIcon?: ReactNode
}

export type ToastItemType = "success" | "danger" | "info" | "warning"

export interface ToastItem {
    type: ToastItemType
    title?: string
    message?: string
}

/**
 * Push notifications to your visitors using Bootstrap's toast component.
 */
export function ToastProvider({
    children,
    successIcon = "✔",
    infoIcon = "ℹ️",
    warningIcon = "⚠️",
    dangerIcon = "❌"
}: ToastProviderProps) {
    const [toastItems, setToastItems] = useState<ToastItem[]>([])

    const addToast = (toastItem: ToastItem) => {
        setToastItems((toastItems) => [...toastItems, toastItem])
    }

    const clearToasts = () => {
        setToastItems([])
    }

    return (
        <ToastContext.Provider value={{ addToast, clearToasts }}>
            {children}

            <div className="blue-normal-scrollbar">
                <div className="toast-container position-fixed bottom-0 end-0 p-3 mh-100 pe-auto overflow-auto me-3">
                    {toastItems.length > 1 && (
                        <div
                            className="toast align-items-center fade show position-sticky top-0"
                            role="alert"
                            aria-live="assertive"
                            aria-atomic="true"
                        >
                            <div className="toast-header">
                                <button
                                    className="btn btn-outline-light blue-btn-silent btn-sm w-100"
                                    onClick={clearToasts}
                                >
                                    {getPhrase("Close all")}
                                </button>
                            </div>
                        </div>
                    )}

                    {toastItems.map(({ type, ...toastItem }, i) => (
                        <div key={i} className="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
                            <div className="toast-header">
                                <span className={`rounded me-2 text-${type || "info"}`}>
                                    {type === "danger"
                                        ? dangerIcon
                                        : type === "success"
                                        ? successIcon
                                        : type === "warning"
                                        ? warningIcon
                                        : infoIcon}
                                </span>

                                <strong className="me-auto">
                                    {toastItem.title ||
                                        (type === "danger" ? getPhrase("Error") : getPhrase("Information"))}
                                </strong>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => {
                                        toastItems.splice(i, 1)
                                        setToastItems([...toastItems])
                                    }}
                                ></button>
                            </div>
                            <div className="toast-body">{toastItem.message}</div>
                        </div>
                    ))}
                </div>
            </div>
        </ToastContext.Provider>
    )
}

export const useToast = () => {
    const context = useContext(ToastContext)
    if (context === undefined) {
        throw new Error("useToast must be used within a ToastProvider")
    }
    return context
}
