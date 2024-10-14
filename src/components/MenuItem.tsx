import clsx from "clsx"
import React, { CSSProperties, createElement, useEffect, useRef, useState } from "react"
import Outside from "./Outside"
import Chevron from "./Chevron"

function findParentWithClass(element: HTMLElement | null, className: string) {
    while (element && !element.classList.contains(className)) {
        element = element.parentElement
    }
    return element
}

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
     * Will be fired after `onClick`
     */
    onClickAttached?: (event: React.MouseEvent) => void

    /**
     * Icon component or a class name.
     */
    icon?: any

    /**
     * Addition to class name of icon wrapper element
     */
    iconClassName?: string

    /**
     * Icon component or a class name when the MenuItem is active.
     */
    iconForActive?: any

    /**
     * Label of the link.
     */
    label?: any

    /**
     * Addition to class name of label wrapper element
     */
    labelClassName?: string

    /**
     * Addition to class name of caret
     */
    caretClassName?: string

    /**
     * Addition to style of caret
     */
    caretStyle?: CSSProperties

    /**
     * Should be set as active.
     */
    isActive?: boolean

    /**
     * Set true to highlight the current menu item.
     */
    highlighted?: boolean

    /**
     * When using Blue React's routing system: define this link as home page link.
     */
    isHome?: boolean

    /**
     * Extends class name of the dropdown menu.
     */
    dropdownClassName?: string

    /**
     * Extends style of the dropdown menu.
     */
    dropdownStyle?: CSSProperties

    /**
     * Set children to create a nested `MenuItem` as a dropdown.
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
     * Callback when `showDropdown` changes.
     */
    onShowDropdown?: (showDropdown: boolean) => void

    /**
     * Close on click outside.
     */
    supportOutside?: boolean

    /**
     * Overrides default class list to be ignored on click outside.
     * Hint: If you want this menu item to stay open when others will open, set:
     * `outsideIgnoreClasses={["blue-menu-item-wrapper"]}`.
     */
    outsideIgnoreClasses?: string[]

    /**
     * By default, MenuItem is a `"button"`. If you set a `href`, it's a `"a"`.
     * If you want to have it another type, you can pass a component reference with this prop (e.g. `Link`).
     */
    elementType?: any

    target?: string
    rel?: string
    title?: string
    type?: string

    /**
     * Fired on the draggable target (the source element): occurs when the user starts to drag an element
     */
    onDragStart?: (event: React.DragEvent) => void | React.DragEventHandler

    /**
     * Fired on the draggable target (the source element): occurs when an element is being dragged
     */
    onDrag?: (event: React.DragEvent) => void | React.DragEventHandler

    /**
     * Fired on the draggable target (the source element): occurs when the user has finished dragging the element
     */
    onDragEnd?: (event: React.DragEvent) => void | React.DragEventHandler

    /**
     * Fired on the drop target: occurs when the dragged element enters the drop target
     */
    onDragEnter?: (event: React.DragEvent) => void | React.DragEventHandler

    /**
     * Fired on the drop target: occurs when the dragged element is over the drop target
     */
    onDragOver?: (event: React.DragEvent) => void | React.DragEventHandler

    /**
     * Fired on the drop target: occurs when the dragged element leaves the drop target
     */
    onDragLeave?: (event: React.DragEvent) => void | React.DragEventHandler

    /**
     * Fired on the drop target: occurs when the dragged element is dropped on the drop target
     */
    onDrop?: (event: React.DragEvent) => void | React.DragEventHandler

    /**
     * Specifies whether an element is draggable or not.
     *
     * **Important:** To make draggable menu items work in Firefox, the elementType must not be `"button"`. Set it to something else, like `"div"`.
     */
    draggable?: boolean

    hideDraggableIcon?: boolean

    "data-tooltip"?: string
    /**
     * Specifies whether an element is disabled or not.
     */
    disabled?: boolean
    /**
     * Specifies style of an element.
     */
    style?: React.CSSProperties

    id?: string
}

/**
 * Link, button or custom component for Sidebar, Actions or ActionMenu
 */
export default function MenuItem(props: MenuItemProps) {
    const id = `blue-menu-item-wrapper-${Math.random().toString(36).substring(7)}`

    const [showDropdown, setShowDropdown] = useState<boolean>(false)
    const [active, setActive] = useState<boolean>(false)

    const menuRef = useRef<HTMLDivElement>(null)

    const checkActive = () => {
        setActive(
            (props.href && window.location.hash.indexOf(props.href) > -1) ||
                (props.isHome && (window.location.hash === "" || window.location.hash === "#/"))
                ? true
                : false
        )
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

        if (props.onClickAttached !== undefined) {
            props.onClickAttached(event as any)
        }
    }

    const onClickOutside = ({ target }: MouseEvent) => {
        const ignoreClasses = props.outsideIgnoreClasses || [id]

        if (ignoreClasses && target) {
            for (let i = 0; i < ignoreClasses.length; i++) {
                if (
                    (target as HTMLElement | null)?.classList.contains(ignoreClasses[i]) ||
                    findParentWithClass(target as HTMLElement, ignoreClasses[i])
                ) {
                    return
                }
            }
        }

        setShowDropdown(false)
    }

    useEffect(() => {
        checkActive()
        window.addEventListener("hashchange", () => {
            checkActive()
        })
    }, [])

    useEffect(() => {
        if (props.showDropdown !== undefined) setShowDropdown(props.showDropdown)
    }, [props.showDropdown])

    useEffect(() => {
        if (props.onShowDropdown) {
            props.onShowDropdown(showDropdown)
        }
    }, [props.onShowDropdown, showDropdown])

    useEffect(() => {
        if (menuRef && menuRef.current) {
            const el = menuRef.current
            const rect = el.getBoundingClientRect()
            el.style.setProperty("--offset-top", Math.round(rect.top) + "px")
        }
    }, [menuRef, showDropdown])

    const className =
        "blue-menu-item btn" +
        (props.isActive ? " active" : "") +
        (props.className ? " " + props.className : "") +
        (props.children ? " blue-menu-item-dropdown-toggle w-100" : "") +
        (props.highlighted ? " highlighted" : "")

    let icon, iconForActive

    if (typeof props.icon === "string") {
        // is className
        icon = <span className={props.icon + (props.children ? " blue-menu-item-dropdown-icon" : "")} />
    } else {
        // is element / component
        icon = props.icon
    }

    if (typeof props.iconForActive === "string") {
        // is className
        iconForActive = (
            <span className={props.iconForActive + (props.children ? " blue-menu-item-dropdown-icon" : "")} />
        )
    } else {
        // is element / component
        iconForActive = props.iconForActive
    }

    return (
        <div className={`blue-menu-item-wrapper ${id}`}>
            {createElement(
                props.elementType || (props.href ? "a" : "button"),
                {
                    to: props.to,
                    href: props.href,
                    exact: props.exact,
                    className:
                        className + (props.isActive || active ? " active" : "") + (props.label ? " has-label" : ""),
                    onClick,
                    target: props.target,
                    rel: props.rel,
                    title: props.title,
                    onDragStart: props.onDragStart,
                    onDrag: props.onDrag,
                    onDragEnd: props.onDragEnd,
                    onDragEnter: props.onDragEnter,
                    onDragOver: props.onDragOver,
                    onDragLeave: props.onDragLeave,
                    onDrop: props.onDrop,
                    draggable: props.draggable,
                    "data-tooltip": props["data-tooltip"],
                    disabled: props.disabled,
                    style: props.style,
                    type: props.type,
                    id: props.id
                },
                <>
                    {props.draggable && props.hideDraggableIcon !== true && (
                        <>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width=".5em"
                                height="1em"
                                fill="currentColor"
                                className="bi bi-grip-vertical opacity-50"
                                viewBox="0 0 8 16"
                            >
                                <path d="M3.376 1.876c0 .55-.45 1-1 1-.549 0-1-.45-1-1 0-.549.451-1 1-1 .55 0 1 .451 1 1m3 0c0 .55-.45 1-1 1-.549 0-1-.45-1-1 0-.549.451-1 1-1 .55 0 1 .451 1 1m-3 3c0 .55-.45 1-1 1-.549 0-1-.45-1-1 0-.549.451-1 1-1 .55 0 1 .451 1 1m3 0c0 .55-.45 1-1 1-.549 0-1-.45-1-1 0-.549.451-1 1-1 .55 0 1 .451 1 1m-3 3c0 .55-.45 1-1 1-.549 0-1-.45-1-1 0-.549.451-1 1-1 .55 0 1 .451 1 1m3 0c0 .55-.45 1-1 1-.549 0-1-.45-1-1 0-.549.451-1 1-1 .55 0 1 .451 1 1m-3 3c0 .55-.45 1-1 1-.549 0-1-.45-1-1 0-.549.451-1 1-1 .55 0 1 .451 1 1m3 0c0 .55-.45 1-1 1-.549 0-1-.45-1-1 0-.549.451-1 1-1 .55 0 1 .451 1 1m-3 3c0 .55-.45 1-1 1-.549 0-1-.45-1-1 0-.549.451-1 1-1 .55 0 1 .451 1 1m3 0c0 .55-.45 1-1 1-.549 0-1-.45-1-1 0-.549.451-1 1-1 .55 0 1 .451 1 1"></path>
                            </svg>{" "}
                        </>
                    )}

                    {props.icon !== undefined && (
                        <span
                            className={clsx("blue-menu-item-icon", props.iconClassName, {
                                hasIconForActive: iconForActive
                            })}
                        >
                            {icon}
                        </span>
                    )}
                    {iconForActive && (
                        <span className={clsx("blue-menu-item-icon iconForActive", props.iconClassName)}>
                            {iconForActive}
                        </span>
                    )}
                    {props.label && (
                        <span className={clsx("blue-menu-item-label text-truncate", props.labelClassName)}>
                            {props.label}
                        </span>
                    )}
                    {props.children && (
                        <Chevron
                            open={showDropdown}
                            mirrored
                            className={clsx("blue-menu-item-dropdown-caret ms-auto", props.caretClassName)}
                            style={props.caretStyle}
                        />
                    )}
                </>
            )}

            {showDropdown &&
                (props.supportOutside ? (
                    <Outside
                        wrapperRef={menuRef}
                        className={clsx("blue-menu-item-dropdown", props.dropdownClassName)}
                        onClickOutside={onClickOutside}
                        style={props.dropdownStyle}
                    >
                        {props.children}
                    </Outside>
                ) : (
                    <div
                        ref={menuRef}
                        className={clsx("blue-menu-item-dropdown", props.dropdownClassName)}
                        style={props.dropdownStyle}
                    >
                        {props.children}
                    </div>
                ))}
        </div>
    )
}
