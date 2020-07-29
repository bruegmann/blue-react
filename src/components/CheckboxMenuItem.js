import React from "react";
import PropTypes from "prop-types";


/**
 * Checkbox Menuitem for DropdownMenuItem that works only in Actions
 */
class CheckboxMenuItem extends React.Component {
    constructor() {
        super();

        this.state = {
        }

    }

    render() {
        return (
            <div>
                <div className="btn-group w-100">

                    <a

                        className={"blue-app-toggle-page blue-app-sidebar-btn btn pr-0 "}
                    >
                        <input type="checkbox" onClick={this.props.onClick} checked={this.props.checked}></input>

                        <span className={"blue-app-sidebar-label pl-2 " + this.props.className}>{this.props.label}</span>
                    </a>

                </div>
            </div>
        )
    }
}

CheckboxMenuItem.propTypes = {

    /**
     * Beschriftung des Links
     */
    label: PropTypes.any,

    checked: PropTypes.bool,

    onClick: PropTypes.func,


    className: PropTypes.string

}

export default CheckboxMenuItem;