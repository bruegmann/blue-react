import {
    useEffect,
    useState,
    ComponentProps,
    ReactNode,
    ElementType
} from "react"
import clsx from "clsx"
import { getPhrase } from "./shared"

export type ButtonVariant =
    | "filled"
    | "soft"
    | "plain"
    | "outline"
    | "link"
    | "menu-item"
export type ButtonColor =
    | "theme"
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"

function getButtonVariantClass(variant: ButtonVariant, color: ButtonColor) {
    switch (variant) {
        case "soft":
            return `blue-btn-soft-${color}`
        case "plain":
            return `blue-btn-plain-${color}`
        case "outline":
            return `btn-outline-${color}`
        case "link":
            return `btn-link link-${color} link-offset-2`
        case "menu-item":
            return "blue-menu-item"
        default:
            return `btn-${color}`
    }
}

export type ButtonProps = ComponentProps<"a"> &
    ComponentProps<"button"> & {
        elementType?: ElementType
        variant?: ButtonVariant
        color?: ButtonColor
        sm?: boolean
        lg?: boolean
        iconBefore?: ReactNode
        iconAfter?: ReactNode
        label?: string
        labelHidden?: boolean
        busy?: boolean
        success?: boolean
        active?: boolean
    } & {
        /**
         * For compatibility with React Router NavLink
         */
        to?: string
        /**
         * For compatibility with React Router NavLink
         */
        exact?: boolean
        /**
         * For compatibility with React Router NavLink
         */
        activeClassName?: string
    }

export default function Button({
    elementType,
    className,
    type,
    variant = "soft",
    color = "secondary",
    sm,
    lg,
    iconBefore,
    iconAfter,
    label,
    labelHidden,
    busy: busyProp,
    success: successProp,
    active,
    activeClassName = "current",
    ...props
}: ButtonProps) {
    const Comp = elementType || (props.href ? "a" : "button")
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        if (successProp) {
            setSuccess(true)
            setTimeout(() => {
                setSuccess(false)
            }, 3000)
        }
    }, [successProp])

    const variantClass = getButtonVariantClass(variant, color)

    const isNavLink =
        typeof elementType === "object" &&
        elementType !== null &&
        "displayName" in elementType &&
        (elementType as any).displayName === "NavLink"

    if (isNavLink) {
        props = { ...props, activeClassName } as ButtonProps
    }

    return (
        <Comp
            type={Comp === "button" && type === undefined ? "button" : type}
            className={clsx(
                "btn",
                {
                    [variantClass]: !success,
                    "btn-success": success,
                    "btn-sm": sm,
                    "btn-lg": lg,
                    "icon-link":
                        busyProp || iconBefore !== null || iconAfter !== null,
                    active: active
                },
                className
            )}
            {...props}
        >
            {busyProp ? (
                <>
                    <span
                        className="spinner-border spinner-border-sm bi me-1"
                        aria-hidden
                    ></span>
                    <span role="status">{getPhrase("Loading")}…</span>
                </>
            ) : success ? (
                <>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="true"
                        className="bi bi-check-lg me-1"
                        viewBox="0 0 16 16"
                    >
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"></path>
                    </svg>
                    <span role="status">{getPhrase("Successful")}</span>
                </>
            ) : (
                <>
                    {iconBefore !== null && (
                        <span className="blue-btn-icon-wrapper" aria-hidden>
                            {iconBefore}
                        </span>
                    )}
                    {label && !labelHidden && label}
                    {props.children}
                    {iconAfter != null && (
                        <span className="blue-btn-icon-wrapper" aria-hidden>
                            {iconAfter}
                        </span>
                    )}
                </>
            )}
        </Comp>
    )
}
