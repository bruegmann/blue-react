import React, { CSSProperties, FC } from "react"
import "blue-web/dist/js/side-layout"

const SideLayout = "side-layout" as unknown as FC<{
    style?: CSSProperties
    children: React.ReactNode
}>

export interface LayoutProps {
    children?: React.ReactNode
    header?: React.ReactNode
    side?: React.ReactNode
    noPageBorder?: boolean
}

export default function Layout({
    children,
    header,
    side,
    noPageBorder = false
}: LayoutProps) {
    return (
        <div className="vh-100">
            <SideLayout
                style={
                    {
                        "--base-z-index": 500,
                        "--side-width": "var(--blue-sidebar-width)",
                        "--toggler-size": "var(--blue-menu-item-height)"
                    } as CSSProperties
                }
            >
                <div
                    slot="expand-toggler"
                    className="w-100 h-100"
                    style={{
                        color: "var(--blue-sidebar-color)",
                        background: "var(--blue-sidebar-bg)"
                    }}
                >
                    <div
                        className="btn blue-menu-item w-100 h-100 d-flex align-items-center justify-content-center p-0"
                        style={{ boxShadow: "var(--trigger-box-shadow)" }}
                    >
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
                    </div>
                </div>
                <div
                    slot="drawer-toggler"
                    className="w-100 h-100"
                    style={{
                        color: "var(--blue-sidebar-color)",
                        background: "var(--blue-sidebar-bg)"
                    }}
                >
                    <div
                        className="btn blue-menu-item w-100 h-100 d-flex align-items-center justify-content-center p-0"
                        style={{ boxShadow: "var(--trigger-box-shadow)" }}
                    >
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
                    </div>
                </div>
                <div
                    slot="overlay"
                    className="bg-dark w-100 h-100"
                    style={{ "--bs-bg-opacity": 0.5 } as CSSProperties}
                ></div>
                <header
                    className="d-flex justify-content-between position-relative h-100"
                    style={
                        {
                            color: "var(--blue-sidebar-color)",
                            background: "var(--blue-sidebar-bg)",
                            zIndex: "var(--blue-layout-header-z-index, 4)",
                            "--blue-menu-item-dropdown-bg":
                                "var(--blue-sidebar-bg)"
                        } as CSSProperties
                    }
                    slot="header"
                >
                    {header}
                </header>
                <div
                    slot="side"
                    className="overflow-x-hidden overflow-y-auto h-100"
                    style={{
                        color: "var(--blue-sidebar-color)",
                        background: "var(--blue-sidebar-bg)"
                    }}
                >
                    {side}
                </div>
                <div className="w-100 h-100 p-1 pt-0">
                    <div
                        className={`"w-100 h-100 overflow-auto rounded-3 ${
                            noPageBorder ? "" : "border "
                        }bg-body shadow-sm"`}
                    >
                        {children}
                    </div>
                </div>
            </SideLayout>
        </div>
    )
}
