import React, { useState } from "react"
import BsModal from "../../components/BsModal"
import BsModalBody from "../../components/BsModalBody"
import BsModalHeader from "../../components/BsModalHeader"

export default function BsModalExample() {
    const [modal, setModal] = useState(false)
    const toggleModal = () => setModal(!modal)

    return (
        <div className="py-2">
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