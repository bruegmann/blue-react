import { Toast } from "bootstrap"
import React, { MutableRefObject, ReactNode, useEffect, useRef } from "react"
import clsx from "clsx"

export interface BsToastProps {
    autohide?: boolean
    className?: string
    children?: ReactNode
    show: boolean
    setShow: (show: boolean) => void
    timeInfo?: string | ReactNode
    title?: string | ReactNode
}

/**
 * Wrapper for Bootstrap's Toast component.
 */
export default function BsToast({ autohide = false, className, children, show, setShow, timeInfo, title }: BsToastProps) {
    const toastRef = useRef() as MutableRefObject<HTMLDivElement>

    useEffect(() => {
        const myToast = toastRef.current as unknown as Element
        let bsToast = Toast.getInstance(myToast)

        if (!bsToast) {
            bsToast = new Toast(myToast, { autohide: autohide })
            bsToast.hide()
            setShow(false)

            myToast.addEventListener("hide.bs.toast", () => {
                setShow(false)
            })
        }
        else {
            show ? bsToast.show() : bsToast.hide()
        }
    }, [show])

    return (
        <div className={clsx("toast hide", className)} role="alert" ref={toastRef}>
            {(title || timeInfo) &&
                <div className="toast-header">
                    <strong className="me-auto">{title}</strong>
                    <small>{timeInfo}</small>
                    <button type="button" className="btn-close" onClick={() => setShow(false)} aria-label="Close" />
                </div>
            }
            <div className="toast-body">
                {children}
            </div>
        </div>
    )
}