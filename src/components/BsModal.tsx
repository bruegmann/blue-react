import { Modal } from "bootstrap"
import React, { ReactNode } from "react"
import { MutableRefObject, useEffect, useRef } from "react"
import clsx from "clsx"

export interface BsModalProps {
    className?: string
    children?: ReactNode
    show: boolean
    setShow: (show: boolean) => void
}


/**
 * Wrapper for Bootstrap's Modal component.
 */
export default function BsModal({ className, children, show, setShow }: BsModalProps) {
    const modalRef = useRef() as MutableRefObject<HTMLDivElement>

    useEffect(() => {
        const myModal = modalRef.current as unknown as Element
        let bsModal = Modal.getInstance(myModal)

        if (!bsModal) {
            bsModal = new Modal(myModal)
            bsModal.hide()
            setShow(false)

            // When the user clicks on underlay to close the modal
            myModal.addEventListener("hide.bs.modal", () => {
                setShow(false)
            })
        }
        else {
            show ? bsModal.show() : bsModal.hide()
        }
    }, [show])

    return (
        <div className={clsx("modal fade", className)} ref={modalRef} tabIndex={-1}>
            <div className="modal-dialog">
                <div className="modal-content">
                    {children}
                </div>
            </div>
        </div>
    )
}