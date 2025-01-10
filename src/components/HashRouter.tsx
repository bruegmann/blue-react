import React, { Component, ReactNode } from "react"

declare global {
    interface Window {
        blueHashRouterRef: any
    }
}

export interface HashRouterProps {
    /**
     * Registers pages for the built-in routing system. Example: `[{name: "home", component: <HomePage />}]`
     */
    pages?: { name: string; component: ReactNode }[]

    /**
     * When `true`, always the "home" route will be rendered.
     */
    unrouteable?: boolean

    /**
     * By default, the document title will automatically set. Set this prop to `true` to disable this behaviour.
     */
    disableTitleSet?: boolean

    /**
     * Define a function, that will be fired when switching routes. When your function returns `true`, the default route behaviour will be blocked.
     * You can use something like `window.blueHashRouterRef.setState({ blockRouting: onHashChange })` globally to set the value from anywhere in your app.
     */
    blockRouting?: (
        newMatch: string[],
        currentMatch: string[]
    ) => void | boolean

    children?: any
}

export interface HashRouterState {
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
 * Component for simple hash routing. It's recommended to use solutions like `react-router-dom` for more complex routing.
 *
 * As soon this component is mounted, it is globally available under `window.blueHashRouterRef`.
 * You can also append your own event listeners.
 *
 * Allowed events:
 *
 * * **componentDidUpdate** - Component was updated.
 *   Example: `window.blueHashRouterRef.addEventListener("componentDidUpdate", (prevProps, prevState) => { })`
 * * **pageDidShowAgain** - Page appeared again with the same old state. In the callback function you can reinitialize things.
 *   Example: `window.blueHashRouterRef.addEventListener("pageDidShowAgain", "home", (prevProps, prevState) => { })`
 * * **pageDidHide** - This page disappeared and another page appears instead.
 *   Example: `window.blueHashRouterRef.addEventListener("pageDidHide", "home", (prevProps, prevState) => { })`
 *
 * Method to add event listeners:
 * * `window.blueHashRouterRef.`**addEventListener**`(eventName: string, param2: any, param3: any, listenerId?: string)`
 *
 * Methods to remove event listeners:
 * * `window.blueHashRouterRef.`**removeEventListener**`(eventName: string, listenerId: string)`
 * * `window.blueHashRouterRef.`**removeDuplicatedEventListeners**`()` - Will automatically be called when running `addEventListener`
 */
export default class HashRouter extends Component<
    HashRouterProps,
    HashRouterState
> {
    defaultMatch: string[]
    eventListeners: any[]
    constructor(props: HashRouterProps) {
        super(props)

        window.blueHashRouterRef = this

        this.defaultMatch = ["home"]

        this.state = {
            match: null,
            history: [],
            hash: window.location.hash,
            hashHistory: [],
            blockRouting: props.blockRouting || undefined
        }

        this.eventListeners = []
    }

    onHashChange() {
        window.blueHashRouterRef.initMatch()
    }

    static get defaultProps() {
        return {
            unrouteable: false,
            disableTitleSet: false
        }
    }

    componentDidMount() {
        this.initMatch()
        window.addEventListener("hashchange", this.onHashChange)
    }

    componentWillUnmount() {
        window.removeEventListener("hashchange", this.onHashChange)
    }

    componentDidUpdate(prevProps: HashRouterProps, prevState: HashRouterState) {
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

    addEventListener(
        param1: any,
        param2: any,
        param3: any,
        listenerId?: string
    ) {
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
            (value, index, self) =>
                index ===
                self.findIndex((t) => t[3] === value[3] && t[0] === value[0])
        )
    }

    render() {
        return (
            <>
                {this.props.pages?.map(
                    (page) =>
                        this.state.history.indexOf(page.name) > -1 && (
                            <div
                                key={page.name}
                                className={
                                    "router-page " +
                                    (this.state.match[0] === page.name
                                        ? "active"
                                        : "d-none")
                                }
                            >
                                {page.component}
                            </div>
                        )
                )}
            </>
        )
    }
}
