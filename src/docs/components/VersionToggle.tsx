import React, { MutableRefObject, useEffect, useRef, useState } from "react"
import { Dropdown } from "bootstrap"
import Outside from "../../components/Outside"

export function VersionToggle() {
    const [show, setShow] = useState<boolean>(false)
    const toggle = () => setShow(!show)
    const dropdownRef = useRef() as MutableRefObject<HTMLButtonElement>

    useEffect(() => {
        const myElement = dropdownRef.current as unknown as Element
        let bsDropdown = Dropdown.getInstance(myElement)

        if (!bsDropdown) {
            bsDropdown = new Dropdown(myElement)
            bsDropdown.hide()
            setShow(false)
        } else {
            show ? bsDropdown.show() : bsDropdown.hide()
        }
    }, [show])

    return (
        <Outside onClickOutside={() => setShow(false)}>
            <div className="dropdown">
                <button
                    className="btn btn-primary dropdown-toggle"
                    style={{ boxShadow: "var(--neu-shadow-3), var(--neu-shadow-inset-switch-2)" }}
                    type="button"
                    onClick={toggle}
                    ref={dropdownRef}
                    title="Switch to another version"
                >
                    /v9
                </button>
                <ul className="dropdown-menu dropdown-menu-end" style={{ minWidth: "5rem" }}>
                    <li>
                        <a className="dropdown-item" href="/blue-react/v10/">
                            /v10
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="/blue-react/v8/">
                            /v8
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="/blue-react/v7/">
                            /v7
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="/blue-react/v6/">
                            /v6
                        </a>
                    </li>
                </ul>
            </div>
        </Outside>
    )
}
