import React, { createElement } from "react";
import PropTypes from "prop-types";

import Utilities from "./Utilities.js";
import Caret from "./Caret";
import Outside from "./Outside";

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
        this.onClick = this.onClick.bind(this);
        this.onClickOutside = this.onClickOutside.bind(this);

        window.addEventListener("hashchange", event => {
            this.checkActive();
        });
    }

    static get defaultProps() {
        return {
            href: undefined,
            isActive: false,
            dropdownClassName: "",
            showDropdown: false,
            supportOutside: false
        };
    }

    componentDidMount() {
        this.checkActive();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.showDropdown !== this.props.showDropdown) {
            this.setState({ showDropdown: this.props.showDropdown })
        }
    }

    onClick(event) {
        if (this.props.href === "#") {
            event.preventDefault();
        }

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

    onClickOutside({ target }) {
        // Don't trigger when clicking on MenuItem
        if (!Utilities.hasClass(target, "blue-app-sidebar-dropdown-toggle") &&
            !Utilities.hasClass(target, "blue-app-sidebar-label")) {
            this.setState({ showDropdown: false })
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

        const removeFromAttrs = ["isActive", "isHome", "children", "dropdownClassName", "showDropdown", "supportOutside", "elementType"];

        Object.keys(this.props).forEach(key => {
            if (!removeFromAttrs.includes(key)) {
                props[key] = this.props[key];
            }
        });

        // Info: https://reactjs.org/warnings/unknown-prop.html
        const { showDropdown, ...rest } = props

        return (
            <div>
                {createElement(
                    this.props.elementType || (this.props.href ? "a" : "button"),
                    {
                        ...rest,
                        className: className + (this.props.isActive || this.state.active ? " active" : "") + (this.props.label ? " has-label" : ""),
                        onClick: this.onClick
                    },
                    <>
                        {icon} {this.props.label && <span className="blue-app-sidebar-label text-truncate">{this.props.label}</span>}
                        {this.props.children &&
                            <Caret
                                open={this.state.showDropdown}
                                mirrored
                                className="blue-app-sidebar-dropdown-caret mt-2"
                            />
                        }
                    </>
                )}

                {
                    this.state.showDropdown &&
                    createElement(
                        this.props.supportOutside ? Outside : "div",
                        {
                            onClickOutside: this.props.supportOutside ? this.onClickOutside : undefined,
                            className: "blue-app-sidebar-dropdown " + this.props.dropdownClassName
                        },
                        this.props.children
                    )
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
    children: PropTypes.any,

    /**
     * Defines dropdown status from outside.
     */
    showDropdown: PropTypes.bool,

    /**
     * Close on click outside.
     */
    supportOutside: PropTypes.bool,

    /**
     * By default, MenuItem is a <code>"button"</button>. If you set a <code>href</code>, it's a <code>"a"</code>.
     * If you want to have it another type, you can pass a component reference with this prop (e.g. <code>Link</code>).
     */
    elementType: PropTypes.any
};

export default MenuItem;