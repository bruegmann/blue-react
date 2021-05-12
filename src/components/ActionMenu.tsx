import React, { useEffect, useState } from "react"
import MenuItem from "./MenuItem"
import { breakOption } from "./shared"
import Utilities from "./Utilities"

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
    break?: breakOption
}

/**
 * You can also use `Actions` instead.
 * The Action Menu on the top right of a page. You can place Actions here which are in context of the current page.
 */
export default function ActionMenu(props: ActionMenuProps) {
    const { hideToggleAction, children, className, toggleIcon = "bi-iconmonstr-menu-7" } = props
    const _break = props.break || "lg"

    const [actionsToggledIn, setActionsToggledIn] = useState<boolean>(false)

    const toggleActions = () => {
        Utilities.toggleActions()
        initToggleStatus()
    }

    const initToggleStatus = () => {
        setActionsToggledIn(Utilities.hasClass(document.querySelector(".blue-app-actions"), "open"))
    }

    useEffect(() => {
        initToggleStatus()

        const appWrapper = document.querySelector(".blue-app-wrapper") as HTMLElement
        if (appWrapper) {
            appWrapper.onclick = toggleActions
        }

        document.querySelectorAll(".blue-app-actions-menu .nav-link").forEach(link => {
            link.addEventListener("click", () => {
                if (actionsToggledIn) {
                    toggleActions()
                }
            })
        })
    }, [])

    return (
        <div className={`blue-app-actions navbar ${className} navbar-expand-${_break} ${_break}`}>
            <div className="ui-header-wrapper" onClick={Utilities.scrollToTop} />
            <ul className="blue-app-actions-menu nav navbar-nav navbar-right fluent-btn">
                <div className="fluent-btn-ball" />

                {!actionsToggledIn && !hideToggleAction ?
                    <MenuItem
                        className="blue-app-actions-menu-toggle"
                        onClick={() => toggleActions()}
                        icon={toggleIcon}
                        aria-label="Toggle menu"
                    />
                    : ""
                }

                {children}
            </ul>
        </div>
    )
}