import React, { useState } from "react"
import { Modal, ModalHeader } from "reactstrap"

export function NormalScrollbarDemo() {
    const [showModal, setShowModal] = useState<boolean>(false)
    const toggleShowModal = () => setShowModal(!showModal)

    return (
        <>
            <button className="btn btn-link p-0 mb-1" onClick={toggleShowModal}>
                Show demo.
            </button>

            <Modal isOpen={showModal} toggle={toggleShowModal}>
                <ModalHeader toggle={toggleShowModal}>Scrollbar demo</ModalHeader>
                <div className="m-3">
                    <div className="mb-3">
                        <label>
                            Area without <code>.blue-normal-scrollbar</code>
                        </label>
                        <select className="form-control" multiple aria-readonly>
                            <option>one</option>
                            <option>two</option>
                            <option>three</option>
                            <option>four</option>
                            <option>five</option>
                            <option>six</option>
                        </select>
                    </div>

                    <div className="blue-normal-scrollbar mb-3">
                        <label>
                            Area with <code>.blue-normal-scrollbar</code> and also <code>.blue-scroll-shadow</code>
                        </label>
                        <select className="form-control blue-scroll-shadow" multiple aria-readonly>
                            <option>one</option>
                            <option>two</option>
                            <option>three</option>
                            <option>four</option>
                            <option>five</option>
                            <option>six</option>
                        </select>
                    </div>

                    <div className="alert alert-info">
                        Make sure to put <code>.blue-normal-scrollbar</code> to an parent element and not directly to
                        the element with the overflow.
                    </div>

                    <div className="alert alert-info">
                        Bootstrap modals with <code>.modal-body</code> already have the rules of{" "}
                        <code>.blue-normal-scrollbar</code>, so you don't have to put the class name there yourself.
                    </div>
                </div>
            </Modal>
        </>
    )
}
