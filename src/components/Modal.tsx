import Utilities from "./Utilities"
import React, {
    FormEvent,
    useEffect,
    useState,
    MutableRefObject,
    useRef
} from "react"
import { Modal as BootstrapModal } from "bootstrap"
import { getPhrase, ModalType } from "./shared"

export interface ModalProps {
    modalContent?: string
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
}

/**
 * Simple modal/dialog. Designed to work as an alternative to JavaScript's native `alert()`, `prompt()` and `confirm()` functions.
 * It uses Bootstrap's Modal components.
 *
 * For easy use, you should use the hook `useModal` together with `ModalProvider`. See the example below.
 */
export default function Modal({
    modalContent,
    unSetModalContent,
    onSubmit,
    defaultInput,
    type
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
    useEffect(() => {
        setInput(defaultInput || "")
    }, [defaultInput])
    useEffect(() => {
        Utilities.registerFluentBtns()
    })

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
        }
    }, [modalContent])

    return (
        <div className="modal" ref={modalRef} tabIndex={-1}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <form onSubmit={submit}>
                        <div className="modal-header">
                            <h5 className="modal-title">
                                {getPhrase("Message")}
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                onClick={cancel}
                            />
                        </div>

                        <div className="modal-body">
                            {modalContent}
                            {type === "ask" && (
                                <input
                                    type="text"
                                    className="form-control mt-1"
                                    value={input}
                                    onChange={({ target }) =>
                                        setInput(target.value)
                                    }
                                    autoFocus
                                />
                            )}
                        </div>

                        <div className="modal-footer">
                            <button
                                type="submit"
                                className="btn btn-primary d-block w-100"
                                style={btnStyle}
                            >
                                {type === "verify" ? getPhrase("Yes") : "OK"}
                            </button>
                            {(type === "ask" || type === "verify") &&
                                (type === "verify" ? (
                                    <button
                                        className="btn btn-outline-primary d-block w-100"
                                        style={btnStyle}
                                        onClick={sayNo}
                                    >
                                        {getPhrase("No")}
                                    </button>
                                ) : (
                                    <button
                                        className="btn btn-outline-primary d-block w-100"
                                        style={btnStyle}
                                        onClick={cancel}
                                    >
                                        {getPhrase("Cancel")}
                                    </button>
                                ))}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}