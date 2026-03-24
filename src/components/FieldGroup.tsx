import clsx from "clsx"
import { ComponentProps, ReactNode } from "react"

export type FieldGroupProps = ComponentProps<"details"> & {
    header?: ReactNode
    isExpanded?: boolean
    headerClassName?: string
    id?: string
    heading?: number
    pageHeader?: boolean
}

export default function FieldGroup({
    className,
    children,
    open,
    header,
    isExpanded = true,
    headerClassName,
    id,
    heading,
    pageHeader,
    ...rest
}: FieldGroupProps) {
    return (
        <details
            className={clsx("blue-collapse", className)}
            open={isExpanded}
            {...rest}
        >
            <summary role="heading" aria-level={heading}>
                <header
                    className={clsx(
                        "blue-collapse-header d-flex align-items-center gap-1",
                        headerClassName,
                        {
                            "blue-page-header w-100 mt-0": pageHeader,
                            h1: heading === 1,
                            h2: heading === 2,
                            h3: heading === 3,
                            h4: heading === 4,
                            h5: heading === 5,
                            h6: heading === 6
                        }
                    )}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="true"
                        className="blue-collapse-chevron bi bi-chevron-right fs-6 opacity-50"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fillRule="evenodd"
                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                        />
                    </svg>
                    {header}
                    {id !== undefined && id !== null && id !== "" && (
                        <small className="text-secondary">{id}</small>
                    )}
                </header>
            </summary>
            {children}
        </details>
    )
}
