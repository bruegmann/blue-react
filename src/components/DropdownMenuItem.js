import React from "react";
import PropTypes from "prop-types";
import Utilities from "./Utilities.js";
import Caret from "./Caret.js";

/**
 * Dropdown-Button und Link für die Sidebar.
 */
class DropdownMenuItem extends React.Component {
    constructor() {
        super();

        this.state = {
            active: false,
            showDropdown: false
        }

        this.handleClick = this.handleClick.bind(this);

    }

    handleClick() {
        if (this.props.children) {
            this.setState({ showDropdown: !this.state.showDropdown });
        }
    }

    render() {

        let icon;

        if (typeof (this.props.icon) === "string") {
            // is className
            icon = <span className={this.props.icon + (this.props.children ? " blue-app-sidebar-dropdown-icon" : "")} />;
        }
        else {
            // is element / component
            icon = this.props.icon;
        }

        let id = {
            id: "blue-action-menu-item-" + Utilities.guid()
        };
        return (
            <div>
                <div className="btn-group w-100">

                    <a
                        {...id}
                        className={"blue-app-toggle-page blue-app-sidebar-btn btn pr-0 " + (this.state.active ? "active" : "")}
                        href={this.props.to}
                    >
                        {icon}
                        <span className="blue-app-sidebar-label">{this.props.label}</span>
                    </a>

                    <button
                        type="button"
                        className="btn blue-app-sidebar-btn w-auto pl-0"
                        onClick={this.handleClick}
                    >
                        <span className="sr-only">Toggle Dropdown</span>
                        <Caret
                            open={this.state.showDropdown}
                            mirrored
                            className="w-auto pl-5"
                        />
                    </button>


                </div>
                {this.state.showDropdown &&
                    <div className="blue-app-sidebar-dropdown">
                        {this.props.children}
                    </div>
                }

            </div>
        )
    }
}

DropdownMenuItem.propTypes = {

    /**
     * Beschriftung des Links
     */
    label: PropTypes.any,

    /**
    * Soll Item als "aktiv" markiert werden? Ist die to-Property gesetzt, wird Item automatisch als "aktiv" markiert, wenn entsprechende Seite aktiv ist.
    */
    isActive: PropTypes.bool,

    /**
    * Setzt to-Property der NavLink-Komponente aus React Router.
    */
    to: PropTypes.string,

    /**
     * Werden in einem Dropdown-Menü angezeigt.
     */
    children: PropTypes.any,

    /**
     * Klasse eines Icons oder Element, z.B. von blueicon-colored.
     */
    icon: PropTypes.any
}

export default DropdownMenuItem;