import React, { useEffect } from "react"
import Utilities from "./Utilities"

export interface HeaderTitleProps {
    /**
     * Can be an image. Will be placed inside of the `src` attribute.
     */
    logo?: string

    /**
     * Text next to the logo.
     */
    appTitle?: string

    /**
     * Disables that the app title will disappear at a specific view width.
     */
    keepAppTitle?: boolean

    children?: any,

    /**
     * Extends `className` from parent element.
     */
    className?: string

    /**
     * Is the component used on the sidebar?
     */
    sidebar?: boolean
}

/**
 * The title area at the header bar.
 * Depending on its content, the document's title will be set aswell (what will be shown in the browser title bar).
 */
export default function HeaderTitle({ logo, appTitle, keepAppTitle, children, className, sidebar }: HeaderTitleProps) {
    const uniqueId = "HeaderTitle-" + Utilities.guid()

    const setDocumentTitle = () => {
        if (window.blueGridRef && window.blueGridRef.props && window.blueGridRef.props.disableTitleSet === false) {
            const element = document.querySelector(`#${uniqueId} .blue-app-header-logo-title-labels`) as HTMLElement
            const titleElement = document.querySelector("title")
            if (element && element.innerText && titleElement) {
                titleElement.innerText = element.innerText;
            }
        }
    }

    useEffect(setDocumentTitle, [])
    useEffect(setDocumentTitle, [children])

    return (
        <h3 id={uniqueId} className={"blue-app-header-logo" + (className ? ` ${className}` : "") + (sidebar ? " sidebar" : "")}>
            <span className="blue-app-header-logo-title">
                {logo ? <span><a href="#"><img src={logo} className="blue-app-header-logo-image" /></a>&nbsp;</span> : ""}
                <span className={"blue-app-header-logo-title-labels " + (keepAppTitle ? "keep" : "")}>
                    {appTitle ? <span><a href="#">{appTitle}</a> {(children ? "/" : "")}&nbsp;</span> : ""}
                    {children}
                </span>
            </span>
        </h3>
    )
}