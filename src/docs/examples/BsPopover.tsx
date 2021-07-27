import React from "react"
import BsPopover from "../../components/BsPopover"

export default function BsPopoverExample() {
    return (
        <div className="py-4">
            <BsPopover
                options={{
                    title: "I'm a popover",
                    trigger: "hover focus"
                }}
                content={<div>Here is <strong>content</strong></div>}
            >
                <button className="btn btn-primary">Click me</button>
            </BsPopover>
        </div>
    )
}