import React, { useState } from "react"
import BsToast from "../../components/BsToast"

export default function BsToastExample() {
    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)

    return (
        <div className="py-2">
            <button className="btn btn-primary me-1" onClick={() => setShow1(true)}>Show live toast</button>
            <button className="btn btn-primary" onClick={() => setShow2(true)}>Show another one!</button>

            <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 11 }}>
                <BsToast show={show1} setShow={setShow1} title="Toast title" timeInfo="2 seconds ago">
                    Hello from this toast!
                </BsToast>

                <BsToast show={show2} setShow={setShow2} autohide className="bg-primary">
                    <div className="d-flex">
                        You can have as many toasts as you want!<br />
                        I will hide automatically after some time.<br /><br />
                        You can customize this as you like.

                        <button type="button" className="btn-close me-2 m-auto" onClick={() => setShow2(false)} aria-label="Close" />
                    </div>
                </BsToast>
            </div>
        </div>
    )
}