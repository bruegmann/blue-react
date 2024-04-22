import React, { CSSProperties } from "react"

export interface CaretProps {
    /**
     * Indicates if open or not.
     */
    open?: boolean

    /**
     * By default the caret points to the right when closed. Set mirrored and it will point to the left.
     */
    mirrored?: boolean

    className?: string
    style?: CSSProperties
}

/**
 * @deprecated Will be replaced by the `Chevron` component in the next major version.
 * Caret icon component.
 */
export default function Caret({ open, mirrored, className, style }: CaretProps) {
    return (
        <span
            className={
                "blue-caret " +
                (open ? " blue-caret-open " : "") +
                (mirrored ? " blue-caret-mirrored " : "") +
                className
            }
            style={style}
        />
    )
}
