import { useState } from "react"

const defaultCss = `:root {
--rgb: 8, 155, 121;

--blue-theme: rgb(var(--rgb));
--bs-theme-rgb: var(--rgb);
--bs-primary-rgb: var(--rgb);
}`

export default function TestCssVars() {
    const [css, setCss] = useState(defaultCss)

    return (
        <>
            <div className="form-floating mb-3">
                <textarea
                    className="form-control"
                    value={css}
                    onChange={({ target }) => setCss(target.value)}
                    style={{ height: "16rem" }}
                    id="TestCssVars-input"
                    placeholder="Test CSS variables"
                />
                <label htmlFor="TestCssVars-input">Test CSS variables</label>
            </div>

            <button
                className="btn btn-primary"
                onClick={() => {
                    window.location.hash = encodeURIComponent(JSON.stringify({ css }))
                    window.location.reload()
                }}
            >
                Apply
            </button>
        </>
    )
}
