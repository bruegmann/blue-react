import React, { useEffect, useState } from "react"
import { breakOption } from "./shared"
import Utilities from "./Utilities"

export interface ActionsProps {
    /**
     * Content that will appear on the menu when it's expanded.
     */
    children?: any

    /**
     * Extends the `className` of `.blue-actions`.
     */
    className?: string

    /**
     * Extends the <code>className</code> of <code>.blue-actions-controls</code>.
     */
    controlsClassName?: string

    /**
     * Content that will appear when the menu is shrunken.
     */
    featured?: any
    open?: boolean

    /**
     * Will fire when the state of `open` will change inside of the component.
     * **Example:** `onToggle={open => this.setState({ open })}`
     */
    onToggle?: (open: boolean) => void
    break?: breakOption
}

function collapseSection(element: HTMLElement) {
    /* Source of these functions: https://css-tricks.com/using-css-transitions-auto-dimensions/ */
    var sectionHeight = element.scrollHeight
    var elementTransition = element.style.transition
    element.style.transition = ""

    requestAnimationFrame(function () {
        element.style.height = sectionHeight + "px"
        element.style.transition = elementTransition
        requestAnimationFrame(function () {
            element.style.height = 84 + "px"
        })
    })
    element.setAttribute("data-collapsed", "true")
}

function expandSection(element: HTMLElement) {
    var sectionHeight = element.scrollHeight
    element.style.height = sectionHeight + "px"

    const fun = function (e: TransitionEvent) {
        element.removeEventListener("transitionend", fun)
        element.style.height = ""
    }
    element.addEventListener("transitionend", fun)
    element.setAttribute("data-collapsed", "false")
}

function Actions(props: ActionsProps) {
    const [open, setOpen] = useState<boolean>(props.open || false)
    const id = `Actions-${Utilities.guid()}`

    const toggle = () => {
        const newOpen = !open
        const element = document.getElementById(id) as HTMLElement
        if (element) {
            setOpen(newOpen)
            if (newOpen) {
                expandSection(element)
            }
            else {
                collapseSection(element)
            }

            if (props.onToggle) {
                props.onToggle(open)
            }
        }
    }

    useEffect(() => {
        if (props.open !== open && props.open !== undefined) {
            setOpen(props.open)
        }
    }, [props.open])

    return (
        <div
            id={id}
            className={"blue-actions " + props.className + " " + (open ? "open" : "closed") + ` break-${props.break || "md"}`}
        >
            <div className={`blue-actions-indicator d-${props.break}-none`} onClick={toggle} />

            <div className={"blue-actions-controls " + props.controlsClassName}>
                {props.children}
            </div>

            <div className={`blue-actions-featured d-${props.break}-none`}>
                <div className="fluent-btn">
                    <div className="fluent-btn-ball" />
                    {props.featured}
                </div>
            </div>
        </div>
    )
}

export default Actions