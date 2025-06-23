import React, { ReactNode, RefObject, useEffect, useState } from "react"
import { guid } from "blue-web/dist/js/utils.js"
import { getPhrase } from "./shared"

export interface SearchProps {
    autoFocus?: boolean

    /**
     * @deprecated
     * Doesn't have an effect anymore. Prop will be removed in a future version.
     */
    body?: boolean

    className?: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon?: any
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void
    placeholder?: string

    /**
     * Allow reset?
     */
    reset?: boolean

    /**
     * Define custom icon for the reset button.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resetIcon?: any

    /**
     * @deprecated
     * Doesn't have an effect anymore. Prop will be removed in a future version.
     */
    sidebar?: boolean

    value?: string

    children?: ReactNode
    id?: string

    /**
     * Set `ref` prop of the input element. Let's you take control of it from the outside, e.g. to set focus.
     */
    inputRef?: RefObject<HTMLInputElement | null>

    /**
     * Adds additional class name to input element.
     */
    inputClassName?: string
}

/**
 * A search bar that can be placed to the sidebar or on a page.
 */
export default function Search(props: SearchProps) {
    const {
        autoFocus,
        className,
        icon,
        onChange,
        onSubmit,
        placeholder,
        reset,
        resetIcon,
        id,
        inputRef,
        inputClassName = ""
    } = props
    const SearchControlId = id || "blue-search-control-" + guid()

    const [value, setValue] = useState<string>(props.value || "")

    useEffect(() => {
        if (props.value) setValue(props.value)
    }, [props.value])

    return (
        <form
            className={className}
            onSubmit={(event) => {
                event.preventDefault()
                if (onSubmit) onSubmit(event)
            }}
        >
            <div className="blue-input-group input-group">
                <label htmlFor={SearchControlId} className="input-group-text">
                    {icon || (
                        <svg
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            className="bi bi-search"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden
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
                    )}
                    <span className="visually-hidden">
                        {getPhrase("Search")}
                    </span>
                </label>

                {props.children || (
                    <input
                        ref={inputRef}
                        type={reset ? "text" : "search"}
                        value={value}
                        onChange={(event) => {
                            setValue(event.target.value)
                            if (onChange) onChange(event)
                        }}
                        id={SearchControlId}
                        className={"form-control " + inputClassName}
                        placeholder={placeholder}
                        autoFocus={autoFocus}
                    />
                )}

                {reset && value.length > 0 && (
                    <div className="input-group-btn">
                        <button
                            type="button"
                            className="btn btn-link"
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
                                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
        </form>
    )
}
