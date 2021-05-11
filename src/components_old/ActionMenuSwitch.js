import React from "react";
import PropTypes from "prop-types";

import Switch from "./Switch";

/**
 * <span class="badge badge-secondary">Deprecated</span> When using <strong>Actions</strong>, please use <strong>SwitchMenuItem</strong> instead.<br>
 * Switch for the Action Menu.
 */
class ActionMenuSwitch extends React.Component {
    static get defaultProps() {
        return {
            className: "",
            href: "javascript:void(0)"
        };
    }

    render() {
        return (
            <li className="nav-item">
                <a
                    href="javascript:void(0)"
                    className="nav-link blue-app-actions-menu-item"
                    onClick={() => {
                        console.log("click");
                        this.props.onChange();
                    }}
                >
                    <Switch
                        {...this.props}
                        elementType="span"
                    />

                    {this.props.label &&
                        <span className="blue-app-actions-label">&nbsp;{this.props.label}</span>
                    }
                </a>
            </li>
        );
    }
}

ActionMenuSwitch.propTypes = {
    className: PropTypes.string,
    checked: PropTypes.bool,
    onChange: PropTypes.func,

    /**
     * Label of the control
     */
    label: PropTypes.any
};

export default ActionMenuSwitch;