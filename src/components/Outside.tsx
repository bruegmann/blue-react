import React, { CSSProperties, MouseEventHandler, MutableRefObject, useEffect, useRef } from "react"

/**
 * Hook that alerts clicks outside of the passed ref
 */
export function useOutside(ref: MutableRefObject<any>, callback?: (event: MouseEvent) => void) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target) && callback) {
                callback(event)
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [ref])
}

export interface OutsideProps {
    children: any
    className?: string
    onClickOutside?: (event: MouseEvent) => void
    onClick?: MouseEventHandler<HTMLDivElement> | undefined
    style?: CSSProperties
}

/**
 * Component that fires an event if you click outside of it
 */
export default function Outside({ children, className, onClickOutside, onClick, style }: OutsideProps) {
    const wrapperRef = useRef(null)
    useOutside(wrapperRef, onClickOutside)

    return (
        <div ref={wrapperRef} className={className} style={style} onClick={onClick}>
            {children}
        </div>
    )
}
