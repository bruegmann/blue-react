import { createElement, useEffect, useState } from "react"
import { Check, CircleHalf, Icon, MoonStarsFill, SunFill } from "react-bootstrap-icons"
import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap"

const storedTheme = localStorage.getItem("theme")

const getPreferredTheme = () => {
    if (storedTheme) {
        return storedTheme
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
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
            className={`dropdown-item d-flex align-items-center ${theme === thisTheme ? "active" : ""}`}
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

    useEffect(() => {
        if (theme === "auto" && window.matchMedia("(prefers-color-scheme: dark)").matches) {
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
        window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", onMatchMediaChange)

        return () => {
            window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", onMatchMediaChange)
        }
    }, [])

    const itemProps = { theme, setTheme }

    return (
        <Dropdown isOpen={open} toggle={toggle}>
            <DropdownToggle
                caret
                className="position-fixed end-0 mt-3 me-3"
                color="theme"
                aria-label={`Toggle theme (${theme})`}
            >
                {createElement(theme === "light" ? SunFill : theme === "dark" ? MoonStarsFill : CircleHalf, {
                    className: "bi"
                })}
            </DropdownToggle>

            <DropdownMenu>
                <Item thisTheme="light" {...itemProps} icon={SunFill} />
                <Item thisTheme="dark" {...itemProps} icon={MoonStarsFill} />
                <Item thisTheme="auto" {...itemProps} icon={CircleHalf} />
            </DropdownMenu>
        </Dropdown>
    )
}
