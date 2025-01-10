import { createElement, useEffect, useRef, useState } from "react"
import {
    Check,
    CircleHalf,
    Icon,
    MoonStarsFill,
    SunFill
} from "react-bootstrap-icons"
// import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap"
import { Dropdown } from "bootstrap"
import Outside from "../../components/Outside"

const storedTheme = localStorage.getItem("theme")

const getPreferredTheme = () => {
    if (storedTheme) {
        return storedTheme
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
}

function Item({
    theme,
    setTheme,
    thisTheme,
    icon
}: {
    theme: string
    setTheme: (theme: string) => void
    thisTheme: string
    icon: Icon
}) {
    return (
        <button
            type="button"
            className={`dropdown-item d-flex align-items-center ${
                theme === thisTheme ? "active" : ""
            }`}
            onClick={() => {
                setTheme(thisTheme)
            }}
        >
            {createElement(icon, { className: "me-2 opacity-50" })}
            {thisTheme.charAt(0).toUpperCase() + thisTheme.slice(1)}{" "}
            {theme === thisTheme && <Check className="bi ms-auto" />}
        </button>
    )
}

export default function ColorModeSwitch() {
    const [open, setOpen] = useState(false)
    const toggle = () => {
        setOpen(!open)
    }
    const [theme, setTheme] = useState(getPreferredTheme())
    const dropdownRef = useRef(null)

    useEffect(() => {
        if (
            theme === "auto" &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
        ) {
            document.documentElement.setAttribute("data-bs-theme", "dark")
        } else {
            document.documentElement.setAttribute("data-bs-theme", theme)
        }
        localStorage.setItem("theme", theme)
        setOpen(false)
    }, [theme])

    const onMatchMediaChange = () => {
        localStorage.removeItem("theme")
        setTheme(getPreferredTheme())
    }

    useEffect(() => {
        window
            .matchMedia("(prefers-color-scheme: dark)")
            .addEventListener("change", onMatchMediaChange)

        return () => {
            window
                .matchMedia("(prefers-color-scheme: dark)")
                .removeEventListener("change", onMatchMediaChange)
        }
    }, [])

    useEffect(() => {
        const myElement = dropdownRef.current as unknown as Element
        let bsDropdown = Dropdown.getInstance(myElement)

        if (!bsDropdown) {
            bsDropdown = new Dropdown(myElement)
            bsDropdown.hide()
            setOpen(false)
        } else {
            open ? bsDropdown.show() : bsDropdown.hide()
        }
    }, [open])

    const itemProps = { theme, setTheme }

    return (
        <Outside onClickOutside={() => setOpen(false)}>
            <div className="dropdown">
                <button
                    className="btn blue-btn-soft-secondary dropdown-toggle"
                    type="button"
                    onClick={toggle}
                    ref={dropdownRef}
                >
                    {createElement(
                        theme === "light"
                            ? SunFill
                            : theme === "dark"
                            ? MoonStarsFill
                            : CircleHalf,
                        {
                            className: "bi"
                        }
                    )}
                </button>
                <ul
                    className="dropdown-menu dropdown-menu-end"
                    style={{ minWidth: "5rem" }}
                >
                    <li>
                        <Item thisTheme="light" {...itemProps} icon={SunFill} />
                    </li>
                    <li>
                        <Item
                            thisTheme="dark"
                            {...itemProps}
                            icon={MoonStarsFill}
                        />
                    </li>
                    <li>
                        <Item
                            thisTheme="auto"
                            {...itemProps}
                            icon={CircleHalf}
                        />
                    </li>
                </ul>
            </div>
        </Outside>
    )
}
