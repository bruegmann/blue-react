import { Toast } from "bootstrap"
import React, { MutableRefObject, ReactNode, useEffect, useRef } from "react"
import clsx from "clsx"

export interface BsToastProps {
    className?: string
    children?: ReactNode
    show: boolean
    setShow: (show: boolean) => void
    timeInfo?: string | ReactNode
    title?: string | ReactNode
    zIndex?: number
}

/**
 * Wrapper for Bootstrap's Toast component.
 */
export default function BsToast({ className, children, show, setShow, timeInfo, title, zIndex = 11 }: BsToastProps) {
    const toastRef = useRef() as MutableRefObject<HTMLDivElement>

    useEffect(() => {
        const myToast = toastRef.current as unknown as Element
        let bsToast = Toast.getInstance(myToast)

        if (!bsToast) {
            bsToast = new Toast(myToast, { autohide: false })
            bsToast.hide()
            setShow(false)
        }
        else {
            show ? bsToast.show() : bsToast.hide()
        }
    }, [show])

    return (
        <div className={clsx("position-fixed bottom-0 end-0 p-3", className)} style={{ zIndex }}>
            <div className="toast" role="alert" ref={toastRef}>
                <div className="toast-header">
                    <strong className="me-auto">{title}</strong>
                    <small>{timeInfo}</small>
                    <button type="button" className="btn-close" onClick={() => setShow(false)} aria-label="Close"></button>
                </div>
                <div className="toast-body">
                    {children}
                </div>
            </div>
        </div>
    )
}