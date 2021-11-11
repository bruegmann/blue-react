import React, { Component, CSSProperties } from "react"
import Utilities from "./Utilities"

declare global {
    interface Window {
        blueGridRef: any
        toggleSidebarEvent: any
    }
}

window.toggleSidebarEvent = new CustomEvent("toggleSidebar")

export interface GridProps {
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
     * You can use something like `window.blueGridRef.setState({ blockRouting: onHashChange })` globally to set the value from anywhere in your app.
     */
    blockRouting?: (
        newMatch: string[],
        currentMatch: string[]
    ) => void | boolean
}

export interface GridState {
    sidebarIn?: boolean
    match: any
    history: string[]
    hash: string
    hashHistory: string[]
    blockRouting?: (
        newMatch: string[],
        currentMatch: string[]
    ) => void | boolean
}

/**
 * The main component. As soon this component is mounted, it is globally available under `window.blueGridRef`.
 * Also you can append your own event listeners with `blueGridRef.addEventListener(eventName, (prevProps, prevState) => { })`.
 *
 * Allowed event listeners:
 *
 * * **componentDidUpdate** - Component was updated.
 *   Example: `blueGridRef.addEventListener("componentDidUpdate", (prevProps, prevState) => { })`
 * * **pageDidShowAgain** - Page appeared again with the same old state. In the callback function you can reinitialize things.
 *   Example: `blueGridRef.addEventListener("pageDidShowAgain", "home", (prevProps, prevState) => { })`
 * * **pageDidHide** - This page disappeared and another page appears instead.
 *   Example: `blueGridRef.addEventListener("pageDidHide", "home", (prevProps, prevState) => { })`
 */
export default class Grid extends Component<GridProps, GridState> {
    defaultMatch: string[]
    eventListeners: any[]
    constructor(props: GridProps) {
        super(props)

        window.blueGridRef = this

        this.defaultMatch = ["home"]

        this.state = {
            sidebarIn: props.sidebarIn,
            match: null,
            history: [],
            hash: window.location.hash,
            hashHistory: [],
            blockRouting: props.blockRouting || undefined
        }

        this.hideSidebar = this.hideSidebar.bind(this)

        this.eventListeners = []
    }

    onHashChange(event: HashChangeEvent) {
        window.blueGridRef.initMatch()
    }

    static get defaultProps() {
        return {
            expandSidebar: false,
            hideSidebarMenu: false,
            unrouteable: false,
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

    componentDidUpdate(prevProps: GridProps, prevState: GridState) {
        if (
            prevProps.blockRouting !== this.props.blockRouting &&
            this.props.blockRouting !== this.state.blockRouting
        ) {
            this.setState({ blockRouting: this.props.blockRouting })
        }

        this.eventListeners.forEach((eventListener) => {
            if (eventListener[0] === "componentDidUpdate") {
                eventListener[1](prevProps, prevState)
            }

            if (eventListener[0] === "pageDidShowAgain") {
                let pageId = eventListener[1]
                let callback = eventListener[2]

                if (
                    prevState.hash !== this.state.hash &&
                    this.state.match[0] === pageId
                ) {
                    callback(prevProps, prevState)
                }
            }

            if (eventListener[0] === "pageDidHide") {
                let pageId = eventListener[1]
                let callback = eventListener[2]

                if (
                    prevState.hash !== this.state.hash &&
                    prevState.match[0] === pageId
                ) {
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
                Utilities.hasClass(
                    e.target,
                    "blue-sidebar-dropdown-toggle"
                ) ||
                Utilities.hasClass(
                    e.target,
                    "blue-sidebar-dropdown-caret"
                ) ||
                Utilities.hasClass(
                    e.target,
                    "blue-sidebar-dropdown-icon"
                ) ||
                Utilities.hasClass(e.target, "blue-sidebar-exception")
            )
        ) {
            this.setState({ sidebarIn: false })
        }
    }

    initMatch() {
        let newMatch

        if (
            window.location.hash &&
            window.location.hash !== "" &&
            window.location.hash !== "#/"
        ) {
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

        if (
            this.state.blockRouting &&
            this.state.blockRouting(newMatch, this.state.match) === true
        ) {
            window.location.hash = this.state.hash
        } else {
            if (!(this.state.history.indexOf(newMatch[0]) > -1)) {
                this.state.history.push(newMatch[0])
            }

            this.setState({
                match: newMatch,
                history: this.state.history,
                hash: window.location.hash,
                hashHistory: this.state.hashHistory.concat([
                    window.location.hash
                ])
            })
        }
    }

    addEventListener(param1: any, param2: any, param3: any) {
        this.eventListeners.push([param1, param2, param3])
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
                        (this.props.className
                            ? " " + this.props.className
                            : "") +
                        (this.state.sidebarIn ? " open" : "") +
                        (this.props.hideSidebarMenu
                            ? " hasNoSidebarMenu"
                            : " hasSidebarMenu") +
                        (this.props.expandSidebar ? " expand-sidebar" : "") +
                        (this.props.disableHeaders ? " disableHeaders" : "")
                    }
                    onClick={this.hideSidebar}
                >
                    <div className="blue-sidebar-toggler">
                        {!this.props.hideSidebarMenu ? (
                            <button
                                type="button"
                                className="blue-open-menu blue-sidebar-btn btn"
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

                    {this.props.pages?.map(
                        (page) =>
                            this.state.history.indexOf(page.name) > -1 && (
                                <div
                                    key={page.name}
                                    className={
                                        "router-page " +
                                        (this.state.match[0] === page.name
                                            ? "active"
                                            : "")
                                    }
                                >
                                    {page.component}
                                </div>
                            )
                    )}

                    <div className="blue-status-circle blue-loading blue-status-loading">
                        <div className="spinner-bounce-circle">
                            <div></div>
                            <div></div>
                        </div>
                    </div>

                    <div className="blue-status-circle blue-status-success">
                        {this.props.statusIcons!.success}
                    </div>

                    <div className="blue-status-circle blue-status-info">
                        {this.props.statusIcons!.info}
                    </div>

                    <div className="blue-status-circle blue-status-warning">
                        {this.props.statusIcons!.warning}
                    </div>

                    <div className="blue-status-circle blue-status-danger">
                        {this.props.statusIcons!.danger}
                    </div>

                    <div className="blue-status-alert alert">
                        <button
                            type="button"
                            className="btn-close float-end mb-1"
                            aria-label="Close"
                        />
                        <div className="alert-body" />
                    </div>
                </div>
            </div>
        )
    }
}
