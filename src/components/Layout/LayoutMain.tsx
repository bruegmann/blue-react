import React from "react"

export interface LayoutMainProps extends React.HTMLAttributes<HTMLDivElement> {
    noPageBorder?: boolean
}

export default function LayoutMain({
    children,
    className,
    noPageBorder = false,
    ...rest
}: LayoutMainProps) {
    return (
        <div className={`w-100 h-100 p-1 pt-0 ${className}`} {...rest}>
            <div
                className={`"w-100 h-100 overflow-auto rounded-3 ${
                    noPageBorder ? "" : "border "
                }bg-body shadow-sm"`}
            >
                {children}
            </div>
        </div>
    )
}
