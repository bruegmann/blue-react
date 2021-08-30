import Utilities from "./Utilities"
import FluentBtn from "./FluentBtn"
import React, {
    FormEvent,
    useEffect,
    useState,
    MutableRefObject,
    useRef
} from "react"
import { Modal } from "bootstrap"
import { BlueModalType } from "./shared"


export interface BlueModalProps {
    modalContent?: string
    unSetModalContent: (modalContent?: string) => void
    onSubmit?: (input: string | boolean) => void
    defaultInput?: string
    type: BlueModalType
}

/**
 * Simple modal/dialog. Designed to be as an alternative to JavaScript's native `alert()`, `prompt()` and `confirm()` functions.
 * It uses Bootstrap's Modal components. 
 */
export default function BlueModal({
    modalContent,
    unSetModalContent,
    onSubmit,
    defaultInput,
    type
}: BlueModalProps) {
    const modalRef = useRef() as MutableRefObject<HTMLDivElement>
    const [input, setInput] = useState<string>(defaultInput || "")
    const cancel = () => {
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
        const myModal = (modalRef.current as unknown) as Element
        let bsModal = Modal.getInstance(myModal)

        if (!bsModal) {
            bsModal = new Modal(myModal)
            bsModal.hide()
            // setShow(false)

            // When the user clicks on underlay to close the modal
            myModal.addEventListener("hide.bs.modal", () => {
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
                            <h5 className="modal-title">Message</h5>
                            <button type="button" className="btn-close" onClick={cancel} />
                        </div>

                        <div className="modal-body">
                            {modalContent}
                            {type === "ask" && (
                                <input
                                    type="text"
                                    className="form-control mt-1"
                                    value={input}
                                    onChange={({ target }) => setInput(target.value)}
                                    autoFocus
                                />
                            )}
                        </div>

                        <div className="modal-footer">
                            <FluentBtn
                                type="submit"
                                className="btn btn-primary d-block w-100"
                                style={btnStyle}
                            >
                                {type === "verify" ? "Yes" : "OK"}
                            </FluentBtn>
                            {(type === "ask" || type === "verify") && (
                                <FluentBtn
                                    className="btn btn-outline-primary d-block w-100"
                                    style={btnStyle}
                                    onClick={cancel}
                                >
                                    {type === "verify" ? "No" : "Cancel"}
                                </FluentBtn>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}