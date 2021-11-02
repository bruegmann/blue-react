import React, { useEffect, useState } from "react"
import MenuItem from "./MenuItem"
import Utilities from "./Utilities"

export interface SearchProps {
    autoFocus?: boolean

    /**
     * Is component inside of a page?
     */
    body?: boolean

    className?: string
    icon?: any
    onChange?: (event: React.ChangeEvent) => void
    onSubmit?: (event: React.FormEvent) => void
    placeholder?: string

    /**
     * Allow reset?
     */
    reset?: boolean

    /**
     * Define custom icon for the reset button.
     */
    resetIcon?: any

    /**
     * Is component inside of the sidebar?
     */
    sidebar?: boolean

    value?: string
}

/**
 * A search bar that can be placed to the sidebar or on a page.
 */
export default function Search(props: SearchProps) {
    const {
        autoFocus,
        body,
        className,
        icon,
        onChange,
        onSubmit,
        placeholder,
        reset,
        resetIcon,
        sidebar
    } = props
    const SearchControlId = "blue-app-search-control-" + Utilities.guid()

    const [value, setValue] = useState<string>(props.value || "")
    const [focus, setFocus] = useState<boolean>(false)
    const [isLightMode, setIsLightMode] = useState<boolean>(false)

    useEffect(() => {
        if (window.matchMedia) {
            let darkMode = window.matchMedia("(prefers-color-scheme: dark)")
            darkMode.addEventListener("change", () => {
                setLightOrDarkMode()
            })
            setLightOrDarkMode()
        }
    }, [])

    const toggleSidebar = () => {
        if (sidebar) {
            document.dispatchEvent(window.toggleSidebarEvent)
        }
    }

    const setLightOrDarkMode = () => {
        let color: any = window
            .getComputedStyle(document.body, null)
            .getPropertyValue("--sidebar-bg")
        // Checks if the color is light or dark
        let colorCode: string = lightOrDark(color)

        if (colorCode === "light") {
            setIsLightMode(true)
        } else {
            setIsLightMode(false)
        }
    }

    const lightOrDark = (color: any) => {
        let r
        let g
        let b
        // Check the format of the color, HEX or RGB?
        if (color.match(/^rgb/)) {
            // If HEX --> store the red, green, blue values in separate variables
            color = color.match(
                /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/
            )

            r = color[1]
            g = color[2]
            b = color[3]
        } else {
            // If RGB --> Convert it to HEX: http://gist.github.com/983661
            color = +(
                "0x" + color.slice(1).replace(color.length < 5 && /./g, "$&$&")
            )

            r = color >> 16
            g = (color >> 8) & 255
            b = color & 255
        }

        // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
        let hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b))

        // Using the HSP value, determine whether the color is light or dark
        if (hsp > 127.5) {
            return "light"
        } else {
            return "dark"
        }
    }

    return (
        <form
            className={
                "blue-app-search " +
                (body ? "blue-app-search-body " : "") +
                (focus ? "focus " : "") +
                (isLightMode
                    ? "blue-app-search-background-dark "
                    : "blue-app-search-background-light ") +
                className
            }
            onSubmit={(event) => {
                event.preventDefault()
                toggleSidebar()
                if (onSubmit) onSubmit(event)
            }}
        >
            <div className="blue-app-search-input-group input-group">
                <span
                    className="input-group-text"
                    onClick={() =>
                        document.getElementById(SearchControlId)?.focus()
                    }
                >
                    {icon || (
                        <span>
                            <svg
                                width="1em"
                                height="1em"
                                viewBox="0 0 16 16"
                                className={
                                    "bi bi-search mt-n1 " +
                                    (isLightMode
                                        ? ".blue-app-search-color-dark"
                                        : "blue-app-search-color-light")
                                }
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
                                />
                                <path
                                    fillRule="evenodd"
                                    d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
                                />
                            </svg>
                        </span>
                    )}
                </span>

                <input
                    type="search"
                    value={value}
                    onChange={(event) => {
                        setValue(event.target.value)
                        if (onChange) onChange(event)
                    }}
                    id={SearchControlId}
                    className={
                        "blue-app-search-control form-control default input-lg " +
                        (isLightMode
                            ? "blue-app-search-color-dark"
                            : "blue-app-search-color-light")
                    }
                    placeholder={placeholder}
                    autoFocus={autoFocus}
                    style={{
                        zIndex: body ? 0 : undefined
                    }}
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                />

                {reset && value.length > 0 && (
                    <div className="input-group-btn">
                        <button
                            type="button"
                            className={
                                "blue-app-search-reset-btn btn btn-link btn-lg " +
                                (isLightMode
                                    ? "blue-app-search-color-dark"
                                    : "blue-app-search-color-light")
                            }
                            onClick={() => {
                                setValue("")
                                document
                                    .getElementById(SearchControlId)
                                    ?.focus()
                                if (onChange)
                                    onChange({
                                        target: {
                                            value: ""
                                        }
                                    } as any)
                            }}
                        >
                            {resetIcon || (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1em"
                                    height="1em"
                                    fill="currentColor"
                                    className="bi bi-x mt-n1"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M4.646 4.646a.5.5 0 01.708 0L8 7.293l2.646-2.647a.5.5 0 01.708.708L8.707 8l2.647 2.646a.5.5 0 01-.708.708L8 8.707l-2.646 2.647a.5.5 0 01-.708-.708L7.293 8 4.646 5.354a.5.5 0 010-.708z"></path>
                                </svg>
                            )}
                        </button>
                    </div>
                )}
            </div>

            {sidebar && (
                <MenuItem
                    href="#"
                    className="blue-app-search-btn"
                    icon={icon}
                    onClick={(event) => {
                        event.preventDefault()
                        toggleSidebar()
                        setTimeout(() => {
                            ;(
                                document.querySelector(
                                    ".blue-app-search-control"
                                ) as HTMLInputElement | null
                            )?.select()
                        }, 200)
                    }}
                />
            )}
        </form>
    )
}
