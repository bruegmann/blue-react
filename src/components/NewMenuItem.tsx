import { CSSProperties, ReactNode, useId } from "react"
import Button, { ButtonProps } from "./Button"
import clsx from "clsx"

export type NewMenuItemProps = ButtonProps & {
    current?: boolean
    defaultDisplay?: boolean
    popoverClassName?: string
    popoverStyle?: CSSProperties
    buttonContent?: ReactNode
}

export default function NewMenuItem({
    variant,
    current,
    className,
    defaultDisplay = false,
    popoverClassName,
    popoverStyle,
    buttonContent,
    style,
    children,
    ...props
}: NewMenuItemProps) {
    const id = useId()
    const hasPopover = children?.valueOf() !== undefined

    return (
        <>
            <Button
                variant="menu-item"
                popoverTarget={hasPopover ? id : undefined}
                iconAfter={
                    props.iconAfter || hasPopover ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fillRule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                            ></path>
                        </svg>
                    ) : undefined
                }
                activeClassName={
                    props.elementType === undefined ||
                    props.elementType === "a" ||
                    props.elementType === "button"
                        ? undefined
                        : "current"
                }
                className={clsx(
                    {
                        current,
                        "d-flex": !defaultDisplay
                    },
                    className
                )}
                style={
                    hasPopover
                        ? ({
                              "--blue-anchor-name": `--${id}`,
                              ...style
                          } as CSSProperties)
                        : style
                }
                children={buttonContent}
                {...props}
            />

            {hasPopover && (
                <div
                    id={id}
                    popover=""
                    className={clsx(
                        "blue-anchored blue-anchored-fallback border rounded-4 shadow",
                        popoverClassName
                    )}
                    style={
                        {
                            "--blue-anchor-name": `--${id}`,
                            ...popoverStyle
                        } as CSSProperties
                    }
                >
                    {children}
                </div>
            )}
        </>
    )
}
