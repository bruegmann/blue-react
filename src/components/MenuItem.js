import React from "react";
import PropTypes from "prop-types";

import Utilities from "./Utilities.js";
import Caret from "./Caret";

/**
 * List-Item und Link für die Sidebar.
 */
class MenuItem extends React.Component {
    constructor() {
        super();

        this.state = {
            showDropdown: false,
            active: false
        };

        this.checkActive = this.checkActive.bind(this);

        window.addEventListener("hashchange", event => {
            this.checkActive();
        });
    }

    static get defaultProps() {
        return {
            href: "javascript:void(0)",
            isActive: false,
            dropdownClassName: ""
        };
    }

    componentDidMount() {
        this.checkActive();
    }

    onClick(event) {
        if (this.props.onClick) {
            this.props.onClick(event);
        }

        if (this.props.children) {
            this.setState({ showDropdown: !this.state.showDropdown });
        }

        // When user clicks again on active menu item, scroll to top of page
        if (this.props.href && this.props.href === window.location.hash) {
            Utilities.scrollToTop();
        }
    }

    checkActive() {
        if (this.props) {
            this.setState({
                active: (window.location.hash.indexOf(this.props.href) > -1) || (this.props.isHome && (window.location.hash === "" || window.location.hash === "#/") ? true : false)
            });
        }
    }

    render() {
        const className = "blue-app-toggle-page blue-app-sidebar-btn btn" +
            (this.props.isActive ? " active" : "") +
            (this.props.className ? " " + this.props.className : "") +
            (this.props.children ? " blue-app-sidebar-dropdown-toggle" : "");

        let icon;

        if (typeof (this.props.icon) === "string") {
            // is className
            icon = <span className={this.props.icon + (this.props.children ? " blue-app-sidebar-dropdown-icon" : "")} />;
        }
        else {
            // is element / component
            icon = this.props.icon;
        }

        let props = {
            id: "blue-action-menu-item-" + Utilities.guid()
        };

        Object.keys(this.props).map(key => {
            if (key !== "isActive" && key !== "isHome" && key !== "children" && key !== "dropdownClassName") {
                props[key] = this.props[key];
            }
        });

        return (
            <div>
                <a
                    {...props}
                    className={className + (this.props.isActive || this.state.active ? " active" : "") + (this.props.label ? " has-label" : "")}
                    onClick={event => this.onClick(event)}
                >
                    {icon} <span className="blue-app-sidebar-label">{this.props.label}</span>
                    {this.props.children &&
                        <Caret
                            open={this.state.showDropdown}
                            mirrored
                            className="blue-app-sidebar-dropdown-caret mt-2"
                        />
                    }
                </a>
                {this.state.showDropdown &&
                    <div className={"blue-app-sidebar-dropdown " + this.props.dropdownClassName}>
                        {this.props.children}
                    </div>
                }
            </div>
        );
    }
}

MenuItem.propTypes = {
    /**
     * Setzt to-Property der NavLink-Komponente aus React Router.
     */
    to: PropTypes.string,

    /**
     * Kann als Alternative zu to benutzt werden.
     */
    href: PropTypes.string,

    /**
     * onClick Event
     */
    onClick: PropTypes.func,

    /**
     * Klasse eines Icons oder Element, z.B. von blueicon-colored.
     */
    icon: PropTypes.any,

    /**
     * Beschriftung des Links
     */
    label: PropTypes.any,

    /**
     * Soll Item als "aktiv" markiert werden? Ist die to-Property gesetzt, wird Item automatisch als "aktiv" markiert, wenn entsprechende Seite aktiv ist.
     */
    isActive: PropTypes.bool,

    /**
     * Als MenuItem für Startseite deklariert.
     */
    isHome: PropTypes.bool,

    /**
     * Ergänzung der Klasse vom Dropdown-Menü.
     */
    dropdownClassName: PropTypes.string,

    /**
     * Werden in einem Dropdown-Menü angezeigt.
     */
    children: PropTypes.any
};

export default MenuItem;