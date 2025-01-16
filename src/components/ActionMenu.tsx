import React, { Children, createContext, useState } from "react"
import MenuItem from "./MenuItem"
import { breakOption } from "./shared"
import Outside from "./Outside"

export const ActionMenuContext = createContext<{
    breakOption: breakOption | "none"
}>({ breakOption: "lg" })

export interface ActionMenuProps {
    /**
     * Hides the toggle button in mobile view. Can be useful when using multiple ActionMenus and not show the toggle button for each menu.
     */
    hideToggleAction?: boolean

    children?: any

    /**
     * Icon component for the toggle icon.
     */
    toggleIcon?: any

    className?: string

    /**
     * "sm" | "md" | "lg" | "xl" | "none". Default is "lg". The responsive breakpoint at which the menu will be shown as a dropdown.
     */
    break?: breakOption | "none"
}

/**
 * The Action Menu on the top right of a page. You can place Actions here which are in context of the current page.
 */
export default function ActionMenu(props: ActionMenuProps) {
    const {
        hideToggleAction,
        children,
        className,
        toggleIcon = (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-three-dots-vertical"
                viewBox="0 0 16 16"
            >
                <path d="M9.5 13a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0-5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0-5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"></path>
            </svg>
        )
    } = props
    const _break = props.break || "lg"

    const [actionsToggledIn, setActionsToggledIn] = useState<boolean>(false)

    const toggleActions = () => setActionsToggledIn(!actionsToggledIn)

    const validChildren = Children.toArray(children).filter(Boolean)

    return (
        <ActionMenuContext.Provider value={{ breakOption: _break }}>
            <Outside
                className={`blue-actions ${_break} ${
                    actionsToggledIn ? "open" : ""
                }`}
                onClickOutside={() => {
                    setActionsToggledIn(false)
                }}
            >
                <div className="blue-actions-menu d-flex">
                    {validChildren.length > 0 &&
                        !actionsToggledIn &&
                        !hideToggleAction && (
                            <MenuItem
                                className="blue-actions-menu-toggle w-100"
                                onClick={() => toggleActions()}
                                icon={toggleIcon}
                                aria-label="Toggle menu"
                            />
                        )}

                    {children}
                </div>
            </Outside>
        </ActionMenuContext.Provider>
    )
}
