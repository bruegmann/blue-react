import React, { useState } from "react"
import BsToast from "../../components/BsToast"

export default function BsToastExample() {
    const [show, setShow] = useState(false)

    return (
        <div className="py-2">
            <button className="btn btn-primary" onClick={() => setShow(true)}>Show live toast</button>
            <BsToast show={show} setShow={setShow} title="Toast title" timeInfo="2 seconds ago">
                Hello from this toast!
            </BsToast>
        </div>
    )
}