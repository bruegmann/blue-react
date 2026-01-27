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

function getButtonVariantClass(
    variant: ButtonVariant,
    buttonColor?: ButtonColor
) {
    const color = buttonColor || "secondary"

    switch (variant) {
        case "soft":
            return `blue-btn-soft-${color}`
        case "plain":
            return `blue-btn-plain-${color}`
        case "outline":
            return `btn-outline-${color}`
        case "link":
            return `btn-link${
                buttonColor !== undefined ? ` link-${color}` : ""
            }`
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

        /** Button will be displayed as successful for 3 seconds. */
        success?: boolean

        active?: boolean

        /** Button's width and height should be equal. Useful, if you want your body only to have one symbol.
         *  When your body only has an icon and hidden label, this will be set automatically. */
        square?: boolean
    } & {
        /**
         * For compatibility with React Router NavLink
         */
        to?: string
        /**
         * For compatibility with React Router NavLink
         */
        exact?: boolean
    }

export default function Button({
    elementType,
    className,
    type,
    variant = "soft",
    color,
    sm,
    lg,
    iconBefore,
    iconAfter,
    label,
    labelHidden,
    busy: busyProp,
    success: successProp,
    active,
    square,
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
                        busyProp ||
                        iconBefore !== undefined ||
                        iconAfter !== undefined,
                    active: active,
                    "blue-btn-square": square
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
                    {label && !labelHidden && (
                        <span className="text-truncate">{label}</span>
                    )}
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
