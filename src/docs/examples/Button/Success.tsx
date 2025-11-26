import { useState } from "react"
import Button from "../../../components/Button"

export default function SuccessExample() {
    const [success, setSuccess] = useState(false)

    return (
        <Button
            label="Click for success"
            onClick={() => {
                setSuccess(true)
            }}
            success={success}
        />
    )
}
