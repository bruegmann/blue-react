import React from "react";
import PropTypes from "prop-types";

import MenuItem from "./MenuItem.js";
import Switch from "./Switch.js";

/**
 * Switch for <strong>Actions</strong>
 */
class SwitchMenuItem extends React.Component {
    render() {
        return (
            <MenuItem
                onClick={this.props.onChange}
                icon={
                    <Switch
                        {...this.props}
                        elementType="span"
                    />
                }
                label={this.props.label}
            />
        );
    }
}

SwitchMenuItem.propTypes = Switch.propTypes;

export default SwitchMenuItem;