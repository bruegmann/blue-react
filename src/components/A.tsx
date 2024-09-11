import React from "react"

export interface AProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

/**
 * The `<a>` element automatically sets `rel="noreferrer"` for external links with `target="_blank"`.\
 * `A` allows all props of the `<a>` element.\
 * `<A href="https://example.com" target="_blank">Example</A>` ➡️ `<a href="https://example.com" target="_blank" rel="noreferrer">Example</a>`
 */
export default function A({ children, rel, ...rest }: AProps) {
    return (
        <a {...rest} rel={`${rel ? `${rel} ` : ""}${rest.target === "_blank" ? "noreferrer" : ""}`}>
            {children}
        </a>
    )
}
