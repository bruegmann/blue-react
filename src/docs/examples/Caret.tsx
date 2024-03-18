import { useState } from "react"
import Caret from "../../components/Caret"

export default function CaretExample() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <button className="btn btn-secondary" onClick={() => setIsOpen(!isOpen)}>
            <Caret open={isOpen} /> <span>Click to toggle the caret</span>
        </button>
    )
}
