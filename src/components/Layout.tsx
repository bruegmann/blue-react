import React, { Component, CSSProperties } from "react"
import Utilities from "./Utilities"

declare global {
    interface Window {
        blueLayoutRef: any
        toggleSidebarEvent: any
    }
}

window.toggleSidebarEvent = new CustomEvent("toggleSidebar")

export interface LayoutProps {
    id?: string
    sidebarIn?: boolean
    style?: CSSProperties
    /**
     * Sidebar is automatically expanded on wider views.
     */
    expandSidebar?: boolean

    /**
     * Disables sidebar.
     */
    hideSidebarMenu?: boolean

    /**
     * Extends `className`.
     */
    className?: string

    /**
     * By default, the document title will automatically set. Set this prop to `true` to disable this behaviour.
     */
    disableTitleSet?: boolean

    /**
     * If you don't use blueicon, you can define another icon element for the sidebar toggle button.
     */
    sidebarToggleIconComponent?: any

    /**
     * Will replace status icons with custom ones. This will also overwrite the `useBlueicons` option.
     * This can be a SVG component or a normal element component.
     */
    statusIcons?: {
        danger: any
        info: any
        success: any
        warning: any
    }

    /**
     * Disables the header bars on pages.
     */
    disableHeaders?: boolean

    children?: any
}

export interface LayoutState {
    sidebarIn?: boolean
}

/**
 * The main component. As soon this component is mounted, it is globally available under `window.blueLayoutRef`.
 */
export default class Layout extends Component<LayoutProps, LayoutState> {
    eventListeners: any[]
    constructor(props: LayoutProps) {
        super(props)

        window.blueLayoutRef = this

        this.state = {
            sidebarIn: props.sidebarIn
        }

        this.hideSidebar = this.hideSidebar.bind(this)

        this.eventListeners = []
    }

    onHashChange() {
        window.blueLayoutRef.initMatch()
    }

    static get defaultProps() {
        return {
            expandSidebar: false,
            hideSidebarMenu: false,
            disableTitleSet: false,
            sidebarToggleIconComponent: <span className="bi-menu" />,
            statusIcons: {
                danger: <span className="bi-error" />,
                info: <span className="bi-information" />,
                success: <span className="bi-check" />,
                warning: <span className="bi-sign_warning" />
            }
        }
    }

    componentDidMount() {
        const me = this

        document.addEventListener(
            "toggleSidebar",
            () => {
                this.toggleSidebar(undefined)
            },
            false
        )

        document.addEventListener("touchstart", (event) => {
            const xPos = event.touches[0].pageX

            if (xPos < 5) {
                me.toggleSidebar(event)
            } else if (me.state.sidebarIn && xPos > 20) {
                me.toggleSidebar(event)
            }
        })
    }

    toggleSidebar(event: any) {
        if (this.state.sidebarIn) {
            this.hideSidebar(event)
        }
        this.setState({ sidebarIn: true })
    }

    hideSidebar(e: any) {
        if (
            !(
                Utilities.hasClass(e.target, "blue-open-menu") ||
                Utilities.hasClass(e.target, "bi-menu") ||
                Utilities.hasClass(e.target, "blue-search") ||
                Utilities.hasClass(e.target, "blue-search-control") ||
                Utilities.hasClass(e.target, "blue-search-btn") ||
                Utilities.hasClass(e.target, "blue-search-btn-icon") ||
                Utilities.hasClass(e.target, "blue-menu-item-dropdown-toggle") ||
                Utilities.hasClass(e.target, "blue-menu-item-dropdown-caret") ||
                Utilities.hasClass(e.target, "blue-menu-item-dropdown-icon") ||
                Utilities.hasClass(e.target, "blue-sidebar-exception")
            )
        ) {
            this.setState({ sidebarIn: false })
        }
    }

    render() {
        return (
            <div>
                <div className="blue-wrapper"></div>
                <div
                    id={this.props.id ? this.props.id : ""}
                    style={this.props.style ? this.props.style : {}}
                    className={
                        "blue-layout" +
                        (this.props.className ? " " + this.props.className : "") +
                        (this.state.sidebarIn ? " open" : "") +
                        (this.props.hideSidebarMenu ? " hasNoSidebarMenu" : " hasSidebarMenu") +
                        (this.props.expandSidebar ? " expandSidebar" : "") +
                        (this.props.disableHeaders ? " disableHeaders" : "")
                    }
                    onClick={this.hideSidebar}
                >
                    <div className="blue-sidebar-toggler">
                        {!this.props.hideSidebarMenu ? (
                            <button
                                type="button"
                                className="blue-open-menu blue-menu-item btn"
                                onClick={() => {
                                    this.setState({
                                        sidebarIn: !this.state.sidebarIn
                                    })
                                }}
                            >
                                <div className="blue-sidebar-exception position-absolute w-100 h-100" />
                                {this.props.sidebarToggleIconComponent}
                            </button>
                        ) : (
                            ""
                        )}
                    </div>

                    {this.props.children}

                    <div className="blue-status-circle blue-loading blue-status-loading">
                        <div className="spinner-bounce-circle">
                            <div></div>
                            <div></div>
                        </div>
                    </div>

                    <div className="blue-status-circle blue-status-success">{this.props.statusIcons!.success}</div>

                    <div className="blue-status-circle blue-status-info">{this.props.statusIcons!.info}</div>

                    <div className="blue-status-circle blue-status-warning">{this.props.statusIcons!.warning}</div>

                    <div className="blue-status-circle blue-status-danger">{this.props.statusIcons!.danger}</div>

                    <div className="blue-status-alert alert">
                        <button type="button" className="btn-close float-end mb-1" aria-label="Close" />
                        <div className="alert-body" />
                    </div>
                </div>
            </div>
        )
    }
}
