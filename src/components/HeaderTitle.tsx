import React, { createElement, useEffect } from "react"
import { guid } from "blue-web/dist/js/utils"

export interface HeaderTitleProps {
    /**
     * Can be an image. Will be placed inside of the `src` attribute.
     */
    logo?: string
    logoAlt?: string

    /**
     * Text next to the logo.
     */
    appTitle?: string

    /**
     * Disables that the app title will disappear at a specific view width.
     */
    keepAppTitle?: boolean

    children?: any

    /**
     * Extends `className` from parent element.
     */
    className?: string

    /**
     * Is the component used on the sidebar?
     */
    sidebar?: boolean

    /**
     * By default, MenuItem is a `"a"`.
     * If you want to have it another type, you can pass a component reference with this prop (e.g. `Link`).
     */
    elementType?: any

    /**
     * Sets `to` prop, e.g. when you use the `Link` component from React Router.
     */
    to?: string

    href?: string
}

/**
 * The title area at the header bar.
 * Depending on its content, the document's title will be set aswell (what will be shown in the browser title bar).
 */
export default function HeaderTitle({
    logo,
    logoAlt = "Logo",
    appTitle,
    keepAppTitle,
    children,
    className,
    sidebar,
    elementType = "a",
    to,
    href = "#"
}: HeaderTitleProps) {
    const uniqueId = "HeaderTitle-" + guid()

    const setDocumentTitle = () => {
        if (
            window.blueLayoutRef &&
            window.blueLayoutRef.props &&
            window.blueLayoutRef.props.disableTitleSet === false
        ) {
            const element = document.querySelector(`#${uniqueId} .blue-header-title-labels`) as HTMLElement
            const titleElement = document.querySelector("title")
            if (element && element.innerText && titleElement) {
                const titlePaths = element.innerText.split("/")
                if (titlePaths.length > 1) {
                    titleElement.innerText = `${titlePaths[titlePaths.length - 1].trim()} - ${titlePaths[0].trim()}`
                } else {
                    titleElement.innerText = element.innerText
                }
            }
        }
    }

    useEffect(setDocumentTitle, [])
    useEffect(setDocumentTitle, [children])

    return (
        <div
            id={uniqueId}
            className={
                "blue-header-title d-inline-flex gap-2 fw-medium align-items-center px-3 py-2 position-absolute z-1" +
                (className ? ` ${className}` : "") +
                (sidebar ? " sidebar" : "")
            }
        >
            {logo &&
                createElement(
                    elementType,
                    { to, href },
                    <img src={logo} alt={logoAlt} className="blue-header-title-image" />
                )}
            <span className={"blue-header-title-labels " + (keepAppTitle ? "keep" : "")}>
                {appTitle && (
                    <>
                        {createElement(elementType, { to, href }, appTitle)} {children ? "/" : ""}
                        &nbsp;
                    </>
                )}
                {children}
            </span>
        </div>
    )
}
