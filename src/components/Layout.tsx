import { CSSProperties, ReactNode } from "react";

export interface LayoutProps {
    children?: ReactNode
    id?: string
    style?: CSSProperties
}

export default function Layout({ children, ...rest }: LayoutProps) {
    return (
        <div className="blue-layout" {...rest}>
            {children}
        </div>
    )
}