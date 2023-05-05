import React, { Component, CSSProperties } from "react"
import Utilities from "./Utilities"
import SidebarToggler from "./SidebarToggler"

declare global {
    interface Window {
        blueLayoutRef: any
        toggleSidebarEvent: any
    }
}

window.toggleSidebarEvent = new CustomEvent("toggleSidebar")

export interface LayoutProps {
    id?: string

    /**
     * By default, the side bar is "in".
     * You can control the state from outside, by also using `onChangeSidebarIn`.
     */
    sidebarIn?: boolean

    /**
     * React to changes of the `sidebarIn` state.
     */
    onChangeSidebarIn?: (sidebarIn: boolean) => void

    style?: CSSProperties

    /**
     * Set `true` to hide button to toggle `expandSidebar` state.
     */
    hideToggleExpandSidebar?: boolean

    /**
     * Sidebar is automatically expanded on wider views.
     */
    expandSidebar?: boolean

    /**
     * React to changes of the `expandSidebar` state.
     */
    onChangeExpandSidebar?: (expandSidebar: boolean) => void

    /**
     * Disables sidebar.
     */
    hideSidebarMenu?: boolean

    /**
     * Registers pages for the built-in routing system. Example: `[{name: "home", component: <HomePage />}]`
     */
    pages?: { name: string; component: JSX.Element }[]

    /**
     * When `true`, always the "home" route will be rendered.
     */
    unrouteable?: boolean

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
     * Set `true` if you want to use the Utilities functions for status and alert.
     * Set `false` if you want to use `StatusProvider` instead.
     */
    enableStatus?: boolean

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

    /**
     * Define a function, that will be fired when switching routes. When your function returns `true`, the default route behaviour will be blocked.
     * You can use something like `window.blueLayoutRef.setState({ blockRouting: onHashChange })` globally to set the value from anywhere in your app.
     */
    blockRouting?: (newMatch: string[], currentMatch: string[]) => void | boolean

    children?: any
}

export interface LayoutState {
    sidebarIn: boolean
    expandSidebar: boolean
    match: any
    history: string[]
    hash: string
    hashHistory: string[]
    blockRouting?: (newMatch: string[], currentMatch: string[]) => void | boolean
}

/**
 * The main component. As soon this component is mounted, it is globally available under `window.blueLayoutRef`.
 * You can also append your own event listeners.
 *
 * Allowed events:
 *
 * * **componentDidUpdate** - Component was updated.
 *   Example: `window.blueLayoutRef.addEventListener("componentDidUpdate", (prevProps, prevState) => { })`
 * * **pageDidShowAgain** - Page appeared again with the same old state. In the callback function you can reinitialize things.
 *   Example: `window.blueLayoutRef.addEventListener("pageDidShowAgain", "home", (prevProps, prevState) => { })`
 * * **pageDidHide** - This page disappeared and another page appears instead.
 *   Example: `window.blueLayoutRef.addEventListener("pageDidHide", "home", (prevProps, prevState) => { })`
 *
 * Method to add event listeners:
 * * `window.blueLayoutRef.`**addEventListener**`(eventName: string, param2: any, param3: any, listenerId?: string)`
 *
 * Methods to remove event listeners:
 * * `window.blueLayoutRef.`**removeEventListener**`(eventName: string, listenerId: string)`
 * * `window.blueLayoutRef.`**removeDuplicatedEventListeners**`()` - Will automatically be called when running `addEventListener`
 */
export default class Layout extends Component<LayoutProps, LayoutState> {
    defaultMatch: string[]
    eventListeners: any[]
    constructor(props: LayoutProps) {
        super(props)

        window.blueLayoutRef = this

        this.defaultMatch = ["home"]

        this.state = {
            sidebarIn: props.sidebarIn || false,
            expandSidebar: props.expandSidebar || localStorage.getItem("blueLayoutShrinkSidebar") === null,
            match: null,
            history: [],
            hash: window.location.hash,
            hashHistory: [],
            blockRouting: props.blockRouting || undefined
        }

        this.hideSidebar = this.hideSidebar.bind(this)
        this.toggleExpandSidebar = this.toggleExpandSidebar.bind(this)

        this.eventListeners = []
    }

    onHashChange() {
        window.blueLayoutRef.initMatch()
    }

    static get defaultProps() {
        return {
            hideSidebarMenu: false,
            unrouteable: false,
            disableTitleSet: false,
            sidebarToggleIconComponent: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    style={{ display: "inline-block", verticalAlign: "-0.125em" }}
                >
                    <path
                        fillRule="evenodd"
                        d="M2.5 12a.5.5 0 01.5-.5h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5zm0-4a.5.5 0 01.5-.5h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5zm0-4a.5.5 0 01.5-.5h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5z"
                    ></path>
                </svg>
            ),
            enableStatus: true,
            statusIcons: {
                danger: <span className="bi-error" />,
                info: <span className="bi-information" />,
                success: <span className="bi-check" />,
                warning: <span className="bi-sign_warning" />
            },
            hideToggleExpandSidebar: false
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

        this.initMatch()

        document.addEventListener("touchstart", (event) => {
            const xPos = event.touches[0].pageX

            if (xPos < 5) {
                me.toggleSidebar(event)
            } else if (me.state.sidebarIn && xPos > 20) {
                me.toggleSidebar(event)
            }
        })

        window.addEventListener("hashchange", this.onHashChange)
    }

    componentWillUnmount() {
        window.removeEventListener("hashchange", this.onHashChange)
    }

    componentDidUpdate(prevProps: LayoutProps, prevState: LayoutState) {
        if (prevProps.sidebarIn !== this.props.sidebarIn) {
            this.setState({ sidebarIn: this.props.sidebarIn || false })
        }

        if (this.props.onChangeSidebarIn && prevState.sidebarIn !== this.state.sidebarIn) {
            this.props.onChangeSidebarIn(this.state.sidebarIn)
        }

        if (prevProps.expandSidebar !== this.props.expandSidebar) {
            this.setState({ expandSidebar: this.props.expandSidebar || false })
        }

        if (this.props.onChangeExpandSidebar && prevState.expandSidebar !== this.state.expandSidebar) {
            this.props.onChangeExpandSidebar(this.state.expandSidebar)
        }

        if (prevProps.blockRouting !== this.props.blockRouting && this.props.blockRouting !== this.state.blockRouting) {
            this.setState({ blockRouting: this.props.blockRouting })
        }

        this.eventListeners.forEach((eventListener) => {
            if (eventListener[0] === "componentDidUpdate") {
                eventListener[1](prevProps, prevState)
            }

            if (eventListener[0] === "pageDidShowAgain") {
                let pageId = eventListener[1]
                let callback = eventListener[2]

                if (prevState.hash !== this.state.hash && this.state.match[0] === pageId) {
                    callback(prevProps, prevState)
                }
            }

            if (eventListener[0] === "pageDidHide") {
                let pageId = eventListener[1]
                let callback = eventListener[2]

                if (prevState.hash !== this.state.hash && prevState.match[0] === pageId) {
                    callback(prevProps, prevState)
                }
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

    initMatch() {
        let newMatch

        if (window.location.hash && window.location.hash !== "" && window.location.hash !== "#/") {
            newMatch = window.location.hash
                .replace("#", "")
                .split("/")
                .filter((n) => n !== "")
        } else {
            newMatch = this.defaultMatch
        }

        if (this.props.unrouteable) {
            newMatch = this.defaultMatch
        }

        if (this.state.blockRouting && this.state.blockRouting(newMatch, this.state.match) === true) {
            window.location.hash = this.state.hash
        } else {
            if (!(this.state.history.indexOf(newMatch[0]) > -1)) {
                this.state.history.push(newMatch[0])
            }

            this.setState({
                match: newMatch,
                history: this.state.history,
                hash: window.location.hash,
                hashHistory: this.state.hashHistory.concat([window.location.hash])
            })
        }
    }

    addEventListener(param1: any, param2: any, param3: any, listenerId?: string) {
        this.eventListeners.push([param1, param2, param3, listenerId])
        this.removeDuplicatedEventListeners()
    }

    removeEventListener(type: string, listenerId: string) {
        this.eventListeners = this.eventListeners.filter((param: any[]) => {
            if (param[0] !== type) {
                return param
            } else if (param[0] === type && param[3] !== listenerId) {
                return param
            }
        })
    }

    removeDuplicatedEventListeners() {
        this.eventListeners = this.eventListeners.filter(
            (value, index, self) => index === self.findIndex((t) => t[3] === value[3] && t[0] === value[0])
        )
    }

    toggleExpandSidebar() {
        const { expandSidebar } = this.state
        if (expandSidebar) {
            localStorage.setItem("blueLayoutShrinkSidebar", "true")
        } else {
            localStorage.removeItem("blueLayoutShrinkSidebar")
        }
        this.setState({ expandSidebar: !expandSidebar })
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
                        (this.state.expandSidebar ? " expandSidebar" : "") +
                        (this.props.disableHeaders ? " disableHeaders" : "") +
                        (this.props.hideToggleExpandSidebar ? " hideToggleExpandSidebar" : "")
                    }
                    onClick={this.hideSidebar}
                >
                    {!this.props.hideSidebarMenu && (
                        <SidebarToggler
                            sidebarToggleIconComponent={this.props.sidebarToggleIconComponent}
                            onClick={() => {
                                this.setState({
                                    sidebarIn: !this.state.sidebarIn
                                })
                            }}
                        />
                    )}

                    {!this.props.hideSidebarMenu && !this.props.hideToggleExpandSidebar && (
                        <SidebarToggler
                            sidebarToggleIconComponent={this.props.sidebarToggleIconComponent}
                            onClick={this.toggleExpandSidebar}
                            className="d-none d-xxl-block"
                        />
                    )}

                    {this.props.children}

                    {this.props.pages?.map(
                        (page) =>
                            this.state.history.indexOf(page.name) > -1 && (
                                <div
                                    key={page.name}
                                    className={"router-page " + (this.state.match[0] === page.name ? "active" : "")}
                                >
                                    {page.component}
                                </div>
                            )
                    )}

                    {this.props.enableStatus && (
                        <>
                            <div className="blue-status-circle blue-loading blue-status-loading">
                                <div className="spinner-bounce-circle">
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>

                            <div className="blue-status-circle blue-status-success">
                                {this.props.statusIcons!.success}
                            </div>

                            <div className="blue-status-circle blue-status-info">{this.props.statusIcons!.info}</div>

                            <div className="blue-status-circle blue-status-warning">
                                {this.props.statusIcons!.warning}
                            </div>

                            <div className="blue-status-circle blue-status-danger">
                                {this.props.statusIcons!.danger}
                            </div>

                            <div className="blue-status-alert alert">
                                <button type="button" className="btn-close float-end mb-1" aria-label="Close" />
                                <div className="alert-body" />
                            </div>
                        </>
                    )}
                </div>
            </div>
        )
    }
}
