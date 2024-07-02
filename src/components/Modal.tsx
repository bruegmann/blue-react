import React, { FormEvent, useEffect, useState, MutableRefObject, useRef, ReactNode } from "react"
import { Modal as BootstrapModal } from "bootstrap"
import { getPhrase, ModalType } from "./shared"

export interface ModalProps {
    modalContent?: string
    modalTitle?: string
    modalIcon?: ReactNode
    unSetModalContent: (modalContent?: string) => void

    /**
     * Type of `input` depends on `type` prop and which action occured.
     * When it's a string, the user entered something. When it's a boolean, the user clicked "Yes" or "No".
     * When it's `null`, the user cancelled the modal.
     */
    onSubmit?: (input: string | boolean | null) => void
    defaultInput?: string
    /**
     * `"ask"` | `"tell"` | `"verify"`
     */
    type: ModalType

    inputType?: string
    switchPrimaryBtn?: boolean
    acceptBtnText?: string
    cancelBtnText?: string
}

/**
 * Simple modal/dialog. Designed to work as an alternative to JavaScript's native `alert()`, `prompt()` and `confirm()` functions.
 * It uses Bootstrap's Modal components.
 *
 * For easy use, you should use the hook `useModal` together with `ModalProvider`. See the example there.
 */
export default function Modal({
    modalContent,
    modalTitle,
    modalIcon,
    unSetModalContent,
    onSubmit,
    defaultInput,
    type,
    inputType = "text",
    switchPrimaryBtn = false,
    acceptBtnText,
    cancelBtnText
}: ModalProps) {
    const modalRef = useRef() as MutableRefObject<HTMLDivElement>
    const [input, setInput] = useState<string>(defaultInput || "")
    const cancel = () => {
        unSetModalContent()
        if (onSubmit) {
            onSubmit(null)
        }
    }
    const sayNo = () => {
        unSetModalContent()
        if (onSubmit) {
            onSubmit(false)
        }
    }
    const submit = (e: FormEvent) => {
        e.preventDefault()
        if (onSubmit) {
            onSubmit(input || true)
        }
    }
    const btnStyle = { maxWidth: "10rem" }

    const focusFirstControl = () => {
        const myModal = modalRef.current as unknown as Element
        myModal.removeEventListener("shown.bs.modal", focusFirstControl)
        const firstControl = myModal.querySelector(".btn-primary, .form-control") as HTMLElement | null
        if (firstControl) {
            firstControl.focus()
        }
    }

    useEffect(() => {
        setInput(defaultInput || "")
    }, [defaultInput])

    useEffect(() => {
        const myModal = modalRef.current as unknown as Element
        let bsModal = BootstrapModal.getInstance(myModal)

        if (!bsModal) {
            bsModal = new BootstrapModal(myModal)
            bsModal.hide()

            // When the user clicks on underlay to close the modal
            myModal.addEventListener("hidden.bs.modal", () => {
                cancel()
            })
        } else {
            modalContent !== undefined ? bsModal.show() : bsModal.hide()

            // Will focus first button or text field inside of modal when it is shown.
            // For accessibility: This way you can control the modal actions with a keyboard.
            myModal.addEventListener("shown.bs.modal", focusFirstControl)
        }
    }, [modalContent])

    return (
        <div className="modal" ref={modalRef} tabIndex={-1}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <form onSubmit={submit}>
                        <div className="modal-header align-items-center">
                            {modalIcon !== undefined && <div className="me-2">{modalIcon}</div>}
                            <h5 className="modal-title">{modalTitle || getPhrase("Message")}</h5>
                            <button type="button" className="btn-close" onClick={cancel} />
                        </div>

                        <div className="modal-body" style={{ whiteSpace: "pre-wrap" }}>
                            {modalContent}
                            {type === "ask" && (
                                <input
                                    type={inputType}
                                    className="form-control mt-1"
                                    value={input}
                                    onChange={({ target }) => setInput(target.value)}
                                    autoFocus
                                />
                            )}
                        </div>

                        <div className="modal-footer">
                            <button
                                type="submit"
                                className={`btn ${
                                    switchPrimaryBtn ? "btn-outline-primary" : "btn-primary"
                                } d-block w-100`}
                                style={btnStyle}
                            >
                                {type === "verify"
                                    ? acceptBtnText
                                        ? acceptBtnText
                                        : getPhrase("Yes")
                                    : acceptBtnText
                                    ? acceptBtnText
                                    : "OK"}
                            </button>
                            {(type === "ask" || type === "verify") &&
                                (type === "verify" ? (
                                    <button
                                        type="button"
                                        className={`btn ${
                                            switchPrimaryBtn ? "btn-primary" : "btn-outline-primary"
                                        } d-block w-100`}
                                        style={btnStyle}
                                        onClick={sayNo}
                                    >
                                        {cancelBtnText ? cancelBtnText : getPhrase("No")}
                                    </button>
                                ) : (
                                    <button
                                        type="button"
                                        className="btn btn-outline-primary d-block w-100"
                                        style={btnStyle}
                                        onClick={cancel}
                                    >
                                        {cancelBtnText ? cancelBtnText : getPhrase("Cancel")}
                                    </button>
                                ))}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
