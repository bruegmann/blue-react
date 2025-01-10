import { useState } from "react"
import { Link } from "react-router-dom"

export default function ActionMenuExample() {
    const [isChecked, setIsChecked] = useState(false)
    const toggleIsChecked = () => setIsChecked(!isChecked)

    const style = {
        width: isChecked && window.innerWidth > 600 ? "600px" : ""
    }

    return (
        <div>
            <div className="d-flex align-items-center mb-1">
                <div className="form-check form-switch d-inline-block w-auto">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        role="switch"
                        id="Example-ActionMenu-checkbox"
                        onChange={toggleIsChecked}
                    />
                    <label htmlFor="Example-ActionMenu-checkbox">Mobile</label>
                </div>
                <Link to="/action-menu-example" className="btn btn-link">
                    Open in full view
                </Link>{" "}
                <Link
                    to="/action-menu-example"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-link"
                >
                    Open in new tab
                </Link>
            </div>
            <div className="ratio ratio-16x9">
                <iframe
                    src={`${import.meta.env.BASE_URL}/action-menu-example`}
                    style={style}
                    title="Actions Demo page"
                />
                {/**
                 * See the source code of the iframe page on:
                 * https://github.com/bruegmann/blue-react/blob/master/src/docs/pages/ActionMenuExamplePage.tsx
                 */}
            </div>
        </div>
    )
}
