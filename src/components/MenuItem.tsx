import React, { createElement, useEffect, useState } from "react"
import Caret from "./Caret"
import Outside from "./Outside"
import Utilities from "./Utilities"

export interface MenuItemProps {
    /**
     * Sets `to` prop, e.g. when you use the `NavLink` component from React Router.
     */
    to?: string

    /**
     * Prop for components by React Router.
     */
    exact?: boolean

    href?: string
    onClick?: (event: React.MouseEvent) => void

    /**
     * Icon component or a class name.
     */
    icon?: any

    /**
     * Label of the link.
     */
    label?: any

    /**
     * Should be set as active.
     */
    isActive?: boolean

    /**
     * When using Blue React's routing system: define this link as home page link.
     */
    isHome?: boolean

    /**
     * Extends class name of the dropdown menu.
     */
    dropdownClassName?: string

    /**
     * Set children to create a nested `MenuItem`as a dropdown.
     */
    children?: any

    /**
     * Defines class name.
     */
    className?: any

    /**
     * Defines dropdown status from outside.
     */
    showDropdown?: boolean

    /**
     * Close on click outside.
     */
    supportOutside?: boolean

    /**
     * By default, MenuItem is a `"button"</button>. If you set a `href`, it's a `"a"`.
     * If you want to have it another type, you can pass a component reference with this prop (e.g. `Link`).
     */
    elementType?: any

    target?: string
    rel?: string
}

function MenuItem(props: MenuItemProps) {
    const [showDropdown, setShowDropdown] = useState<boolean>(false)
    const [active, setActive] = useState<boolean>(false)

    const checkActive = () => {
        setActive(((props.href && window.location.hash.indexOf(props.href) > -1)) || (props.isHome && (window.location.hash === "" || window.location.hash === "#/")) ? true : false)
    }

    const onClick = (event: MouseEvent) => {
        if (props.href === "#") {
            event.preventDefault()
        }

        if (props.onClick) {
            props.onClick(event as any)
        }

        if (props.children) {
            setShowDropdown(!showDropdown)
        }

        // When user clicks again on active menu item, scroll to top of page
        if (props.href && props.href === window.location.hash) {
            Utilities.scrollToTop()
        }
    }

    const onClickOutside = ({ target }: MouseEvent) => {
        // Don't trigger when clicking on MenuItem
        if (!Utilities.hasClass(target, "blue-app-sidebar-dropdown-toggle") &&
            !Utilities.hasClass(target, "blue-app-sidebar-label")) {
            setShowDropdown(false)
        }
    }

    useEffect(() => {
        checkActive()
        window.addEventListener("hashchange", () => {
            checkActive()
        })
    }, [])


    const className = "blue-app-toggle-page blue-app-sidebar-btn btn" +
        (props.isActive ? " active" : "") +
        (props.className ? " " + props.className : "") +
        (props.children ? " blue-app-sidebar-dropdown-toggle" : "")

    let icon

    if (typeof (props.icon) === "string") {
        // is className
        icon = <span className={props.icon + (props.children ? " blue-app-sidebar-dropdown-icon" : "")} />
    }
    else {
        // is element / component
        icon = props.icon
    }

    let passingProps = {
        id: "blue-action-menu-item-" + Utilities.guid()
    } as { [key: string]: any }

    const removeFromAttrs = ["isActive", "isHome", "children", "dropdownClassName", "showDropdown", "supportOutside", "elementType"]

    Object.keys(props).forEach(key => {
        if (!removeFromAttrs.includes(key)) {
            passingProps[key] = (props as { [key: string]: any })[key]
        }
    })

    return (
        <div>
            {createElement(
                props.elementType || (props.href ? "a" : "button"),
                {
                    ...passingProps,
                    className: className + (props.isActive || active ? " active" : "") + (props.label ? " has-label" : ""),
                    onClick
                },
                <>
                    {icon} {props.label && <span className="blue-app-sidebar-label text-truncate">{props.label}</span>}
                    {props.children &&
                        <Caret
                            open={showDropdown}
                            mirrored
                            className="blue-app-sidebar-dropdown-caret mt-2"
                        />
                    }
                </>
            )}

            {showDropdown && (
                props.supportOutside ?
                    <Outside className={`blue-app-sidebar-dropdown ${props.dropdownClassName}`} onClickOutside={onClickOutside}>
                        {props.children}
                    </Outside>
                    :
                    <div className={`blue-app-sidebar-dropdown ${props.dropdownClassName}`}>
                        {props.children}
                    </div>
            )}
        </div>
    )
}

export default MenuItem