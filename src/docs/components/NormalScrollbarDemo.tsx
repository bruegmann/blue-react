import React, { useState } from "react"
import { Modal } from "reactstrap"

export function NormalScrollbarDemo() {
    const [showModal, setShowModal] = useState<boolean>(false)
    const toggleShowModal = () => setShowModal(!showModal)

    const onClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault()
        toggleShowModal()
    }

    return (
        <>
            <a href="#" onClick={onClick}>Show demo.</a>

            <Modal isOpen={showModal} toggle={toggleShowModal}>
                <div className="m-3">
                    <div className="mb-3">
                        <label>Area without <code>.blue-normal-scrollbar</code></label>
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
                        <label>Area with <code>.blue-normal-scrollbar</code></label>
                        <select className="form-control" multiple aria-readonly>
                            <option>one</option>
                            <option>two</option>
                            <option>three</option>
                            <option>four</option>
                            <option>five</option>
                            <option>six</option>
                        </select>
                    </div>

                    <div className="alert alert-info">
                        Make sure to put <code>.blue-normal-scrollbar</code> to an parent element and not directly to the element with the overflow.
                    </div>

                    <div className="alert alert-info">
                        Bootstrap modals with <code>.modal-body</code> already have the rules of <code>.blue-normal-scrollbar</code>,
                        so you don't have to put the class name there yourself.
                    </div>
                </div>
            </Modal>
        </>
    )
}