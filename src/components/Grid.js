import React from "react";
import PropTypes from "prop-types";

import SidebarMenu from "./SidebarMenu.js";
import Utilities from "./Utilities.js";

// Damit Events auch in IE funktionieren
// require("custom-event-polyfill/custom-event-polyfill.js");

window.toggleSidebarEvent = new CustomEvent("toggleSidebar");

/**
 * Das Grundgerüst. Sobald diese Komponente gemountet wurde, ist sie global über <code>window.blueGridRef</code> zugreifbar.<br>
 * Außerdem kann über <code>blueGridRef.addEventListener(eventName, (prevProps, prevState) => { })</code> ein Event-Listener angefügt werden.
 * <br><br>
 * Erlaubte Event-Listener:
 * <table class="table">
 * <thead><tr><th>Event name</th><th>Description</th><th>Beispiel</th></tr></thead>
 * <tbody>
 * <tr>
 * <th>componentDidUpdate</th>
 * <td>Komponente wurde aktualisiert.</td>
 * <td><code>blueGridRef.addEventListener("componentDidUpdate", (prevProps, prevState) => { })</code></td>
 * </tr>
 * 
 * <tr>
 * <th>pageDidShowAgain</th>
 * <td>Seite wurde erneut angezeigt, mit altem Stand. Im Callback kann Komponente neu initialisiert werden.</td>
 * <td><code>blueGridRef.addEventListener("pageDidShowAgain", "home", (prevProps, prevState) => { })</code></td>
 * </tr>
 * 
 * <tr>
 * <th>pageDidHide</th>
 * <td>Seite wurde versteckt (andere Seite wurde angezeigt).</td>
 * <td><code>blueGridRef.addEventListener("pageDidHide", "home", (prevProps, prevState) => { })</code></td>
 * </tr>
 * </tbody>
 * </table>
 */
class Grid extends React.Component {
    constructor() {
        super();

        window.blueGridRef = this;

        this.defaultMatch = ["home"];

        this.state = {
            sidebarIn: false,
            match: null,
            history: [],
            hash: window.location.hash
        };

        this.hideSidebar = this.hideSidebar.bind(this);

        window.addEventListener("hashchange", event => {
            window.blueGridRef.initMatch();
        });

        this.eventListeners = [];
    }

    static get defaultProps() {
        return {
            expandSidebar: false,
            hideSidebarMenu: false,
            unrouteable: false,
            disableTitleSet: false,
            sidebarToggleIconComponent: <span className="bi-menu" />
        };
    }

    UNSAFE_componentWillMount() {
        document.addEventListener("toggleSidebar", () => {
            this.toggleSidebar();
        }, false);

        this.setState({ sidebarIn: this.props.sidebarIn });

        this.initMatch();
    }

    componentDidMount() {

        const me = this;

        document.addEventListener("touchstart", (event) => {
            const xPos = event.touches[0].pageX;

            if (xPos < 5) {
                me.toggleSidebar(event);
            }
            else if (me.state.sidebarIn && xPos > 20) {
                me.toggleSidebar(event);
            }
        });

        Utilities.registerFluentBtns();
    }

    componentDidUpdate(prevProps, prevState) {
        this.eventListeners.map(eventListener => {
            if (eventListener[0] === "componentDidUpdate") {
                let callback = eventListener[1];
                eventListener[1](prevProps, prevState);
            }

            if (eventListener[0] === "pageDidShowAgain") {
                let pageId = eventListener[1];
                let callback = eventListener[2];

                if (prevState.hash !== this.state.hash && this.state.match[0] === pageId) {
                    callback(prevProps, prevState);
                }
            }

            if (eventListener[0] === "pageDidHide") {
                let pageId = eventListener[1];
                let callback = eventListener[2];

                if (prevState.hash !== this.state.hash && prevState.match[0] === pageId) {
                    callback(prevProps, prevState);
                }
            }
        });
    }

    toggleSidebar(event) {
        if (this.state.sidebarIn) {
            this.hideSidebar(event);
        }
        this.setState({ sidebarIn: true });
    }

    hideSidebar(e) {
        if (!(
            Utilities.hasClass(e.target, "blue-app-open-menu") ||
            Utilities.hasClass(e.target, "bi-menu") ||
            Utilities.hasClass(e.target, "blue-app-search") ||
            Utilities.hasClass(e.target, "blue-app-search-control") ||
            Utilities.hasClass(e.target, "blue-app-search-btn") ||
            Utilities.hasClass(e.target, "blue-app-search-btn-icon") ||
            Utilities.hasClass(e.target, "blue-app-sidebar-dropdown-toggle") ||
            Utilities.hasClass(e.target, "blue-app-sidebar-dropdown-caret") ||
            Utilities.hasClass(e.target, "blue-app-sidebar-dropdown-icon") ||
            Utilities.hasClass(e.target, "blue-app-sidebar-exception")
        )) {
            this.setState({ sidebarIn: false });
        }
    }

    initMatch() {
        let newMatch;

        if (window.location.hash && window.location.hash !== "" && window.location.hash !== "#/") {
            newMatch = window.location.hash.replace("#", "").split("/").filter(n => n !== "");
        }
        else {
            newMatch = this.defaultMatch;
        }

        if (this.props.unrouteable) {
            newMatch = this.defaultMatch;
        }

        if (!(this.state.history.indexOf(newMatch[0]) > -1)) {
            this.state.history.push(newMatch[0]);
        }

        this.setState({ match: newMatch, history: this.state.history, hash: window.location.hash });
    }

    addEventListener(param1, param2, param3) {
        this.eventListeners.push([param1, param2, param3]);
    }

    render() {
        return (
            <div>
                <div className="blue-app-wrapper"></div>
                <div id={this.props.id ? this.props.id : ""}
                    style={this.props.style ? this.props.style : {}}
                    className={"blue-app-grid" + (this.props.className ? " " + this.props.className : "") +
                        (this.state.sidebarIn ? " open" : "") +
                        (this.props.hideSidebarMenu ? " hasNoSidebarMenu" : " hasSidebarMenu") +
                        (this.props.expandSidebar ? " expand-sidebar" : "")}
                    onClick={this.hideSidebar}
                >
                    <div className="blue-app-sidebar-toggler">
                        {
                            !this.props.hideSidebarMenu ?
                                <button
                                    type="button"
                                    className="fluent-btn blue-app-open-menu blue-app-sidebar-btn btn"
                                    onClick={() => {
                                        this.setState({ sidebarIn: !this.state.sidebarIn });
                                    }}
                                >
                                    <div className="fluent-btn-ball blue-app-sidebar-exception" />
                                    {this.props.sidebarToggleIconComponent}
                                </button>
                                :
                                ""
                        }
                    </div>

                    {this.props.children}

                    {this.props.pages.map(page =>
                        this.state.history.indexOf(page.name) > -1 &&
                        <div
                            key={page.name}
                            className={"router-page " + (this.state.match[0] === page.name ? "active" : "")}
                        >
                            {page.component}
                        </div>
                    )}

                    <div className="blue-app-status-circle blue-app-loading blue-app-status-loading">
                        <div className="spinner-bounce-circle">
                            <div></div>
                            <div></div>
                        </div>
                    </div>

                    <div className="blue-app-status-circle blue-app-status-success">
                        <span className="bi-check"></span>
                    </div>

                    <div className="blue-app-status-circle blue-app-status-info">
                        <span className="bi-information"></span>
                    </div>

                    <div className="blue-app-status-circle blue-app-status-warning">
                        <span className="bi-sign_warning"></span>
                    </div>

                    <div className="blue-app-status-circle blue-app-status-danger">
                        <span className="bi-error"></span>
                    </div>

                    <div className="blue-app-status-alert alert">
                        <button
                            type="button"
                            className="close"
                        >&times;</button>
                        <div className="alert-body" />
                    </div>
                </div>
            </div>
        );
    }
}

// Grid.toggleSidebar = null;

Grid.SidebarMenu = SidebarMenu;

Grid.propTypes = {
    /**
     * Die Sidebar ist bei Vollbild automatisch eingeklappt.
     */
    expandSidebar: PropTypes.bool,

    /**
     * Deaktiviert die Sidebar.
     */
    hideSidebarMenu: PropTypes.bool,

    /**
     * Registriert Seiten. Beispiel: [{name: "home", component: <HomePage />}]
     */
    pages: PropTypes.array,

    /**
     * Wenn <code>true</code> wird immer die "home"-Route geladen.
     */
    unrouteable: PropTypes.bool,

    /**
     * Erweitert die <code>className</code>-Eigenschaft.
     */
    className: PropTypes.string,

    /**
     * Normalerweise wird der Dokumenten-Titel automatisch gesetzt. Setze diese Property auf <code>true</code> um das zu
     * deaktivieren.
     */
    disableTitleSet: PropTypes.bool,

    /**
     * If you don't use blueicon, you can define another icon element for the sidebar toggle button.
     */
    sidebarToggleIconComponent: PropTypes.any
};

export default Grid;