import { useRef, useState } from "react"
import Search from "../../components/Search"

export default function SearchExample() {
    const [value, setValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)

    return (
        <>
            <Search
                inputRef={inputRef}
                body
                className="w-50"
                onChange={({ target }) => setValue(target.value)}
                onSubmit={() => alert("Do form submit now!")}
                placeholder="Begin typing..."
                reset
                value={value}
            />

            <button
                type="button"
                className="btn btn-secondary mt-3"
                onClick={() => {
                    inputRef.current?.focus()
                }}
            >
                Set focus from outside using ref
            </button>
        </>
    )
}
