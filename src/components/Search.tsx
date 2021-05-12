import React, { useState } from "react"
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
     * Is component inside of the sidebar?
     */
    sidebar?: boolean

    value?: string
}

/**
 * A search bar that can be placed to the sidebar or on a page.
 */
export default function Search(props: SearchProps) {
    const { autoFocus, body, className, icon, onChange, onSubmit, placeholder, reset, sidebar } = props
    const SearchControlId = "blue-app-search-control-" + Utilities.guid()

    const [value, setValue] = useState<string>(props.value || "")
    const [focus, setFocus] = useState<boolean>(false)

    const toggleSidebar = () => {
        if (sidebar) {
            document.dispatchEvent(window.toggleSidebarEvent)
        }
    }

    return (
        <form
            className={
                "blue-app-search " +
                (body ? "blue-app-search-body " : "") +
                (focus ? "focus " : "") +
                className
            }
            onSubmit={event => {
                event.preventDefault()
                toggleSidebar()
                if (onSubmit) onSubmit(event)
            }}
        >
            <div className="blue-app-search-input-group input-group">
                <div
                    className="input-group-prepend"
                    onClick={() => document.getElementById(SearchControlId)?.focus()}
                >
                    <span className="input-group-text">
                        {icon || <span><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-search mt-n1" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
                            <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                        </svg></span>}
                    </span>
                </div>

                <input
                    type="search"
                    value={value}
                    onChange={event => {
                        setValue(event.target.value)
                        if (onChange) onChange(event)
                    }}
                    id={SearchControlId}
                    className="blue-app-search-control form-control default input-lg"
                    placeholder={placeholder}
                    autoFocus={autoFocus}
                    style={{
                        zIndex: (body ? 0 : undefined)
                    }}
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                />

                {reset && value.length > 0 &&
                    <div className="input-group-btn">
                        <button
                            type="button"
                            className="blue-app-search-reset-btn btn btn-link btn-lg"
                            onClick={() => {
                                setValue("")
                                document.getElementById(SearchControlId)?.focus()
                                if (onChange)
                                    onChange({
                                        target: {
                                            value: ""
                                        }
                                    } as any)
                            }}
                        >
                            <span className="bi-navigate_cross" />
                        </button>
                    </div>
                }
            </div>


            {
                sidebar &&
                <MenuItem
                    href="#"
                    className="blue-app-search-btn"
                    icon={icon}
                    onClick={(event) => {
                        event.preventDefault()
                        toggleSidebar()
                        setTimeout(() => {
                            (document.querySelector(".blue-app-search-control") as HTMLInputElement | null)?.select()
                        }, 200)
                    }}
                />
            }

        </form>
    )
}