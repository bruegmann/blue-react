import React from "react"
import Body, { BodyProps } from "./Body"

export interface BodyRoundedProps extends BodyProps {
    classNameTop?: string
    classNameBottom?: string
}

/**
 * Extended variation of `Body` with rounded elements on top and bottom of the page.
 */
export default function BodyRounded({
    classNameTop,
    classNameBottom,
    children,
    ...bodyProps
}: BodyRoundedProps) {
    return (
        <Body {...bodyProps}>
            <div
                className={"RoundedTop bg-theme pt-1 " + classNameTop}
                style={{ height: "1rem" }}
            >
                <div className="rounded-top bg-body w-100 h-100" />
            </div>
            {children}
            <div
                className={"RoundedBottom bg-theme pb-1 " + classNameBottom}
                style={{ height: "1rem" }}
            >
                <div className="rounded-bottom bg-body w-100 h-100" />
            </div>
        </Body>
    )
}
