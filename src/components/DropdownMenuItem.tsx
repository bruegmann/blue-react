import React, { useState } from "react"
import Caret from "./Caret"
import Utilities from "./Utilities"

export interface DropdownMenuItemProps {
    to?: string
    icon?: any
    label?: any
    isActive?: boolean
    children?: any
}

/**
 * Dropdown with button for sidebar.
 */
export default function DropdownMenuItem(props: DropdownMenuItemProps) {
    const [active, setActive] = useState<boolean>(props.isActive || false)
    const [showDropdown, setShowDropdown] = useState<boolean>(false)

    const handleClick = () => {
        if (props.children) {
            setShowDropdown(!showDropdown)
        }
    }

    let icon

    if (typeof (props.icon) === "string") {
        // is className
        icon = <span className={props.icon + (props.children ? " blue-app-sidebar-dropdown-icon" : "")} />
    }
    else {
        // is element / component
        icon = props.icon
    }

    let id = {
        id: "blue-action-menu-item-" + Utilities.guid()
    }
    return (
        <div>
            <div className="btn-group w-100">

                <a
                    {...id}
                    className={"blue-app-toggle-page blue-app-sidebar-btn btn pr-0 " + (active ? "active" : "")}
                    href={props.to}
                >
                    {icon}
                    <span className="blue-app-sidebar-label">{props.label}</span>
                </a>

                <button
                    type="button"
                    className="btn blue-app-sidebar-btn w-auto pl-0"
                    onClick={handleClick}
                >
                    <span className="sr-only">Toggle Dropdown</span>
                    <Caret
                        open={showDropdown}
                        mirrored
                        className="w-auto pl-5 mt-2"
                    />
                </button>


            </div>
            {showDropdown &&
                <div className="blue-app-sidebar-dropdown">
                    {props.children}
                </div>
            }

        </div>
    )
}