import { Toast } from "bootstrap"
import React, { MutableRefObject } from "react"
import { useEffect, useRef, useState } from "react"
import BsModal from "../../components/BsModal"
import BsModalBody from "../../components/BsModalBody"
import BsModalHeader from "../../components/BsModalHeader"

export interface ToastDemoProps {

}

export function ToastDemo({ }: ToastDemoProps) {
    const [toast, setToast] = useState(false)
    const toggleToast = () => setToast(!toast)
    const toastRef = useRef() as MutableRefObject<HTMLDivElement>

    const [modal, setModal] = useState(false)
    const toggleModal = () => setModal(!modal)

    useEffect(() => {
        const myToast = toastRef.current as unknown as Element
        let bsToast = Toast.getInstance(myToast)

        if (!bsToast) {
            bsToast = new Toast(myToast, { autohide: false })
            bsToast.hide()
            setToast(false)
        }
        else {
            toast ? bsToast.show() : bsToast.hide()
        }
    }, [toast])

    return (
        <div className="py-2">
            <button className="btn btn-primary me-1" onClick={toggleToast}>Toggle Toast</button>
            <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 11 }}>
                <div className="toast" role="alert" ref={toastRef}>
                    <div className="toast-header">
                        <strong className="me-auto">Bootstrap 5</strong>
                        <small>4 mins ago</small>
                        <button type="button" className="btn-close" onClick={() => setToast(false)} aria-label="Close"></button>
                    </div>
                    <div className="toast-body">
                        Hello, world! This is a toast message.
                    </div>
                </div>
            </div>

            <button className="btn btn-secondary me-1" data-bs-target="#collapseTarget" data-bs-toggle="collapse">
                Collapse
            </button>
            <div className="collapse" id="collapseTarget">
                You can see me now!!
            </div>

            <button className="btn btn-danger me-1" onClick={toggleModal}>Toggle Modal</button>

            <BsModal show={modal} setShow={setModal}>
                <BsModalHeader toggle={toggleModal}>Hey</BsModalHeader>

                <BsModalBody>
                    What's up
                </BsModalBody>
            </BsModal>
        </div>
    )
}