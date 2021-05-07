import React, { useEffect, useState } from "react"
import MenuItem from "./MenuItem"
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
}

function ActionMenu({ hideToggleAction, children, toggleIcon = "bi-iconmonstr-menu-7" }: ActionMenuProps) {
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
    )
}

export default ActionMenu