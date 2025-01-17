import React, { createElement, ReactNode, useEffect } from "react"
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

    children?: ReactNode

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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    elementType?: any

    /**
     * Sets `to` prop, e.g. when you use the `Link` component from React Router.
     */
    to?: string

    href?: string

    /**
     * Breadcrumb items to be shown.
     */
    breadcrumbItems?: ReactNode[]
}

/**
 * The title area at the header bar.
 * Depending on its content, the document's title will be set aswell (what will be shown in the browser title bar).
 */
export default function HeaderTitle({
    logo,
    logoAlt = "Logo",
    appTitle,
    children,
    className,
    sidebar,
    elementType = "a",
    to,
    href = "#",
    breadcrumbItems
}: HeaderTitleProps) {
    const uniqueId = "HeaderTitle-" + guid()

    const setDocumentTitle = () => {
        if (
            window.blueHashRouterRef &&
            window.blueHashRouterRef.props &&
            window.blueHashRouterRef.props.disableTitleSet === false
        ) {
            const element = document.querySelector(
                `#${uniqueId} .blue-header-title-labels`
            ) as HTMLElement
            const titleElement = document.querySelector("title")
            if (element && element.innerText && titleElement) {
                const titlePaths = element.innerText.split("/")
                if (titlePaths.length > 1) {
                    titleElement.innerText = `${titlePaths[
                        titlePaths.length - 1
                    ].trim()} - ${titlePaths[0].trim()}`
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
                "blue-header-title d-inline-flex gap-2 fw-medium align-items-center px-3 py-2" +
                (className ? ` ${className}` : "") +
                (sidebar ? " sidebar" : "")
            }
        >
            {logo &&
                createElement(
                    elementType,
                    { to, href },
                    <img
                        src={logo}
                        alt={logoAlt}
                        className="blue-header-title-image"
                    />
                )}

            <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0">
                    {appTitle !== undefined && appTitle !== "" && (
                        <li className="breadcrumb-item">
                            {createElement(elementType, { to, href }, appTitle)}
                        </li>
                    )}

                    {breadcrumbItems?.map((item, index) => {
                        const active = index === breadcrumbItems.length - 1
                        return (
                            <li
                                key={index}
                                className={`breadcrumb-item ${
                                    active ? "active" : ""
                                }`}
                                aria-current={active ? "page" : undefined}
                            >
                                {item}
                            </li>
                        )
                    })}
                </ol>
            </nav>

            {children}
        </div>
    )
}
