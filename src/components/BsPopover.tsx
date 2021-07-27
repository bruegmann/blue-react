import { Popover } from "bootstrap"
import React, { cloneElement, JSXElementConstructor, MutableRefObject, ReactElement, useEffect, useRef } from "react"
import { renderToStaticMarkup } from "react-dom/server"

export interface BsPopoverProps {
    /**
     * Define the trigger element, such as an button or a link.
     * */
    children: any

    /**
     * Pass the popover content as JSX. Custom components might no work.
     * Alternatively, you can pass a string with `options={{ content: "Your content" }}`.
     * */
    content?: ReactElement<any, string | JSXElementConstructor<any>>

    /**
     * See all available options: https://getbootstrap.com/docs/5.0/components/popovers/#options
     * */
    options?: Partial<Popover.Options>
}

/**
 * Wrapper for Bootstrap's Popover component.
 */
export default function BsPopover({ children, content, options }: BsPopoverProps) {
    const popoverRef = useRef() as MutableRefObject<HTMLButtonElement>

    useEffect(() => {
        const myPopover = popoverRef.current as unknown as Element
        let bsPopover = Popover.getInstance(myPopover)

        if (content !== undefined) {
            const contentHtml = renderToStaticMarkup(content)
            options = { ...options, content: contentHtml, html: true }
        }

        if (!bsPopover) {
            bsPopover = new Popover(myPopover, options)
        }
    }, [])

    return cloneElement(children, { ref: popoverRef })
}