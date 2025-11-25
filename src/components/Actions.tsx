import React, {
    CSSProperties,
    ReactNode,
    useEffect,
    useId,
    useRef
} from "react"
import { getPhrase } from "./shared"
import clsx from "clsx"
import { init } from "blue-web/dist/js/actions.js"

export interface ActionsProps {
    children?: ReactNode
    className?: string
    menuClassName?: string
    collapseClassName?: string
    collapseStyle?: CSSProperties
    collapseMenuClassName?: string
    collapseMenuStyle?: CSSProperties
}

/**
 * Combination of toolbar and a dropdown menu. Items in toolbar will only be shown if there is enough space.
 * Otherwise they will be visible in the dropdown menu. JavaScript detects if space is changing and rearranges.
 * IMPORTANT: As of right now, children you pass will be rendered twice. Once in the toolbar and once in the dropdown.
 */
export default function Actions({
    children,
    className,
    menuClassName,
    collapseClassName,
    collapseStyle,
    collapseMenuClassName,
    collapseMenuStyle
}: ActionsProps) {
    const element = useRef<HTMLDivElement>(null)
    const id = `Actions_Dropdown_${useId().replace(/:/g, "-")}`

    useEffect(() => {
        if (element.current) {
            const { destroy } = init(element.current)
            return () => {
                destroy()
            }
        }
    }, [])

    return (
        <div
            ref={element}
            className={clsx("BLUE-actions", className)}
            role="toolbar"
            aria-label={getPhrase("Toolbar with buttons and button groups")}
        >
            <div className={clsx("BLUE-actions-menu", menuClassName)}>
                {children}
            </div>

            <div
                className={clsx("BLUE-actions-collapse", collapseClassName)}
                style={collapseStyle}
            >
                <button
                    type="button"
                    popoverTarget={id}
                    className="blue-anchor blue-menu-item btn px-3"
                >
                    <span className="blue-menu-item-icon" aria-hidden>
                        &#8942;
                    </span>
                    <span className="visually-hidden">
                        {getPhrase("Toggle menu")}
                    </span>
                </button>

                <div
                    id={id}
                    popover=""
                    className={clsx(
                        "BLUE-actions-collapse-menu blue-anchored blue-anchored-end blue-anchored-fallback",
                        "blue-menu-item-dropdown text-body",
                        collapseMenuClassName
                    )}
                    style={
                        {
                            ["--blue-menu-item-dropdown-bg"]: `var(--bs-body-bg)`,
                            ...collapseMenuStyle
                        } as CSSProperties
                    }
                >
                    {children}
                </div>
            </div>
        </div>
    )
}
