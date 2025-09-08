import React, { CSSProperties } from "react"
import clsx from "clsx"
import { getPhrase } from "./shared"

export interface LayoutProps {
    children?: React.ReactNode
    className?: string
    style?: CSSProperties
    header?: React.ReactNode
    side?: React.ReactNode
    noPageBorder?: boolean
}

/**
 * A layout with header, side and main content area. Side is collapsible.
 */
export default function Layout({
    children,
    className,
    style,
    header,
    side,
    noPageBorder = false
}: LayoutProps) {
    return (
        <div className={clsx("blue-layout", className)} style={style}>
            <input
                id="layout-expand"
                type="checkbox"
                className="blue-layout-state blue-layout-state-expand"
                defaultChecked
            />
            <label
                className="blue-layout-toggle blue-layout-toggle-expand"
                htmlFor="layout-expand"
                title={getPhrase("Toggle menu")}
                aria-label={getPhrase("Toggle menu")}
                role="button"
            >
                <span className="btn blue-menu-item w-100 h-100 d-flex align-items-center justify-content-center p-0">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        className="bi bi-layout-sidebar"
                    >
                        <path d="M0 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5-1v12h9a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zM4 2H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h2z"></path>
                    </svg>
                </span>
            </label>

            <input
                id="layout-drawer"
                type="checkbox"
                className="blue-layout-state blue-layout-state-drawer"
            />
            <label
                className="blue-layout-toggle blue-layout-toggle-drawer"
                htmlFor="layout-drawer"
                title={getPhrase("Toggle menu")}
                aria-label={getPhrase("Toggle menu")}
                role="button"
            >
                <span className="btn blue-menu-item w-100 h-100 d-flex align-items-center justify-content-center p-0">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        className="bi bi-layout-sidebar-inset"
                    >
                        <path d="M14 2a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zM2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2z"></path>
                        <path d="M3 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"></path>
                    </svg>
                </span>
            </label>

            <header className="blue-layout-header">{header}</header>

            <aside
                className="blue-layout-side blue-sidebar-state open h-100 overflow-y-auto overflow-x-hidden"
                style={{
                    color: "var(--blue-sidebar-color)",
                    background: "var(--blue-sidebar-bg)"
                }}
            >
                {side}
            </aside>

            <main className="blue-layout-main">
                <div
                    className={clsx("blue-layout-body", {
                        "border-0": noPageBorder
                    })}
                >
                    {children}
                </div>
            </main>

            <label
                aria-label="Close sidebar"
                htmlFor="layout-drawer"
                className="blue-layout-overlay bg-dark w-100 h-100"
                style={{ "--bs-bg-opacity": 0.5 } as CSSProperties}
            ></label>
        </div>
    )
}
