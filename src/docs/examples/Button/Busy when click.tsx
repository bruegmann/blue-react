import { useState } from "react"
import Button from "../../../components/Button"

function delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

export default function BusyWhenClickExample() {
    const [busy, setBusy] = useState(false)

    return (
        <Button
            busy={busy}
            onClick={async () => {
                setBusy(true)
                await delay(3000)
                setBusy(false)
            }}
        >
            Click me
        </Button>
    )
}
