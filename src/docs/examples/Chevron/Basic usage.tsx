import { useState } from "react"
import Chevron from "../../../components/Chevron"

export default function CaretExample() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <button className="btn btn-secondary me-3" onClick={() => setIsOpen(!isOpen)}>
                <Chevron open={isOpen} /> Click to toggle the caret
            </button>

            <button className="btn btn-secondary" onClick={() => setIsOpen(!isOpen)}>
                Chevron on the right side <Chevron open={isOpen} mirrored />
            </button>
        </>
    )
}
