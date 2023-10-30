import { useId, useState } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { synthwave84 as syntaxHighlighterStyle } from "react-syntax-highlighter/dist/esm/styles/prism"

export default function ButtonsExample({ variant }: { variant: string }) {
    const [disabled, setDisabled] = useState(false)
    const [active, setActive] = useState(false)

    const colors = ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"]

    const id = useId()

    return (
        <>
            <div className="mb-3 d-flex gap-3">
                <div className="form-check form-switch">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id={`${id}-disabled-switch`}
                        checked={disabled}
                        onChange={() => {
                            setDisabled(!disabled)
                        }}
                    />
                    <label className="form-check-label" htmlFor={`${id}-disabled-switch`}>
                        Disabled
                    </label>
                </div>

                <div className="form-check form-switch">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id={`${id}-active-switch`}
                        checked={active}
                        onChange={() => {
                            setActive(!active)
                        }}
                    />
                    <label className="form-check-label" htmlFor={`${id}-active-switch`}>
                        Active
                    </label>
                </div>
            </div>

            <div className="d-flex gap-3 mb-3">
                {colors.map((color) => (
                    <button
                        key={color}
                        type="button"
                        className={`btn blue-btn-${variant}-${color}${active ? " active" : ""}`}
                        disabled={disabled}
                    >
                        {color.charAt(0).toUpperCase() + color.slice(1)}
                    </button>
                ))}
            </div>

            <SyntaxHighlighter style={syntaxHighlighterStyle} language="html">
                {colors
                    .map(
                        (color) =>
                            `<button type="button" className="btn blue-btn-${variant}-${color}${
                                active ? " active" : ""
                            }"${disabled ? " disabled" : ""}>${color.charAt(0).toUpperCase() + color.slice(1)}</button>`
                    )
                    .join("\n")}
            </SyntaxHighlighter>
        </>
    )
}
