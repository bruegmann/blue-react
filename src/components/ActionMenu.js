import React from "react";
import PropTypes from "prop-types";

import Utilities from "./Utilities.js";
import MenuItem from "./MenuItem.js";

/**
 * <span class="badge badge-info">Info</span> You can also use <strong>Actions</strong> instead.<br>
 * The Action Menu on the top right of a page. You can place Actions here which are in context of the current page.
 */
class ActionMenu extends React.Component {
    constructor() {
        super();

        this.state = {
            actionsToggledIn: null
        }
    }

    static get defaultProps() {
        return {
            hideToggleAction: false,
            toggleIcon: "bi-iconmonstr-menu-7"
        };
    }

    componentDidMount() {
        this.initToggleStatus();

        document.querySelector(".blue-app-wrapper").onclick = (event) => {
            this.toggleActions();
        };

        document.querySelectorAll(".blue-app-actions-menu .nav-link").forEach(link => {
            link.addEventListener("click", () => {
                if (this.state.actionsToggledIn) {
                    this.toggleActions();
                }
            });
        });
    }

    toggleActions() {
        Utilities.toggleActions();
        this.initToggleStatus();
    }

    initToggleStatus() {
        this.setState({
            actionsToggledIn: Utilities.hasClass(document.querySelector(".blue-app-actions"), "open")
        });
    }

    render() {
        return (
            <ul className="blue-app-actions-menu nav navbar-nav navbar-right fluent-btn">
                <div className="fluent-btn-ball" />

                {!this.state.actionsToggledIn && !this.props.hideToggleAction ?
                    <MenuItem
                        className="blue-app-actions-menu-toggle"
                        onClick={() => this.toggleActions()}
                        icon={this.props.toggleIcon}
                        aria-label="Toggle menu"
                    />
                    : ""
                }

                {this.props.children}
            </ul>
        );
    }
}

ActionMenu.propTypes = {
    /**
     * Hides the three points in mobile view.
     * Can be useful when you use multiple ActionMenus, but don't want all of them have the toggle button.
     */
    hideToggleAction: PropTypes.bool,

    toggleIcon: PropTypes.any
};

export default ActionMenu;