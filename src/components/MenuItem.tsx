import { ComponentProps, CSSProperties, ReactNode, useId } from "react"
import Button, { ButtonProps } from "./Button"
import clsx from "clsx"
import { getPhrase } from "blue-web/dist/js/shared"

export type MenuItemProps = ButtonProps & {
    current?: boolean
    defaultDisplay?: boolean
    buttonContent?: ReactNode
    as?: "collapse" | "collapse-group" | "popover-group"
}
// & {
//     popoverClassName?: string
//     popoverStyle?: CSSProperties
// } & {
//     collapseGroupClassName?: string
//     collapseGroupStyle?: CSSProperties
// } & {
//     collapseClassName?: string
//     collapseStyle?: CSSProperties
// }

function ChevronSummary({
    className,
    children,
    ...props
}: ComponentProps<"summary">) {
    return (
        <summary
            className={clsx(
                "btn blue-collapse-header blue-menu-item icon-link",
                {
                    "blue-btn-square": children === undefined
                },
                className
            )}
            {...props}
        >
            {children}
            {children === undefined && (
                <span className="visually-hidden">
                    {getPhrase("Toggle details")}
                </span>
            )}
            <div className="blue-btn-icon-wrapper" aria-hidden>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={clsx("blue-collapse-chevron", {
                        "ms-auto": children !== undefined
                    })}
                    viewBox="0 0 16 16"
                >
                    <path
                        fillRule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                    />
                </svg>
            </div>
        </summary>
    )
}

function Base({
    variant,
    current,
    className,
    defaultDisplay = false,
    children,
    buttonContent,
    ...props
}: MenuItemProps) {
    return (
        <Button
            variant="menu-item"
            className={clsx(
                {
                    current,
                    "d-flex": !defaultDisplay
                },
                className
            )}
            children={buttonContent}
            {...props}
        />
    )
}

function Collapse({
    children,
    iconBefore,
    label,
    labelHidden,
    iconAfter,
    buttonContent
}: MenuItemProps) {
    return (
        <details className="blue-collapse">
            <ChevronSummary className="d-flex">
                {iconBefore !== null && (
                    <span className="blue-btn-icon-wrapper" aria-hidden>
                        {iconBefore}
                    </span>
                )}
                {label && !labelHidden && label}
                {buttonContent}
                {iconAfter != null && (
                    <span className="blue-btn-icon-wrapper" aria-hidden>
                        {iconAfter}
                    </span>
                )}
            </ChevronSummary>

            <div className="blue-collapse-indent vstack border-start">
                {children}
            </div>
        </details>
    )
}

function CollapseGroup({ className, children, ...props }: MenuItemProps) {
    return (
        <div className={clsx("blue-collapse-group")}>
            <Base {...props} />

            <details className="blue-collapse">
                <ChevronSummary />

                <div className="blue-collapse-indent vstack border-start">
                    {children}
                </div>
            </details>
        </div>
    )
}

function PopoverGroup({ children, iconAfter, ...props }: MenuItemProps) {
    const id = useId()
    return (
        <>
            <Base
                popoverTarget={id}
                iconAfter={
                    iconAfter || (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fillRule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                            ></path>
                        </svg>
                    )
                }
                {...props}
            />

            <div
                id={id}
                popover=""
                className={clsx(
                    "blue-anchored blue-anchored-fallback border rounded-4 shadow"
                )}
                style={
                    {
                        "--blue-anchor-name": `--${id}`
                    } as CSSProperties
                }
            >
                <div className="vstack">{children}</div>
            </div>
        </>
    )
}

export default function MenuItem({ as, ...props }: MenuItemProps) {
    const Comp =
        as === "collapse"
            ? Collapse
            : as === "collapse-group"
            ? CollapseGroup
            : as === "popover-group"
            ? PopoverGroup
            : Base
    return <Comp {...props} />
}
