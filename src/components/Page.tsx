import React, { ReactNode, useEffect, useRef, useState } from "react"
import clsx from "clsx"

export interface PageProps {
    /**
     * Will be set to the document's `<title>` tag.
     */
    title?: string
    children?: ReactNode
}

/**
 * @deprecated With the new layout design, you don't need this anymore.
 * Main component for each page.
 */
export default function Page({ children, title }: PageProps) {
    const [hasHeader, setHasHeader] = useState(false)
    const elementRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (elementRef && elementRef.current) {
            const headerElement =
                elementRef.current.querySelector(".blue-header")
            setHasHeader(headerElement !== null && headerElement !== undefined)
        }
    }, [elementRef])

    useEffect(() => {
        const titleElement = document.querySelector("title")
        if (title && titleElement) {
            titleElement.innerText = title
        }
    }, [title])

    return (
        <div
            className={clsx("blue-page-wrapper", { hasHeader: hasHeader })}
            ref={elementRef}
        >
            {children}
        </div>
    )
}
