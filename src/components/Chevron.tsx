import React, { CSSProperties } from "react"

export interface ChevronProps {
    /**
     * Indicates if open or not.
     */
    open?: boolean

    /**
     * By default the chevron points to the right when closed. Set mirrored and it will point to the left.
     */
    mirrored?: boolean

    className?: string
    style?: CSSProperties
}

/**
 * Chevron icon component with open state.
 */
export default function Chevron({ open, mirrored, className, style }: ChevronProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="currentColor"
            className={className}
            style={{
                ...style,
                display: "inline-block",
                verticalAlign: "-0.125em",
                transform: `rotate(${open && mirrored ? -90 : open ? 90 : 0}deg)`,
                transition: "transform 0.2s"
            }}
            viewBox="0 0 16 16"
        >
            {mirrored ? (
                <path
                    fillRule="evenodd"
                    d="M11.354 1.646a.5.5 0 010 .708L5.707 8l5.647 5.646a.5.5 0 01-.708.708l-6-6a.5.5 0 010-.708l6-6a.5.5 0 01.708 0"
                />
            ) : (
                <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L10.293 8 4.646 2.354a.5.5 0 010-.708"
                />
            )}
        </svg>
    )
}
