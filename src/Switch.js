import React from "react";
import PropTypes from "prop-types";

/**
 * Switch.
 */
class Switch extends React.Component {
    static get defaultProps() {
        return {
            className: "",
            checked: false,
            onChange: () => { },
            sliderLabel: null,
            elementType: "label",
            disabled: false
        };
    }

    render() {
        return React.createElement(
            this.props.elementType,
            {
                className: "switch " + (this.props.disabled ? "disabled " : "") + this.props.className
            }, [
                <input
                    key={0}
                    type="checkbox"
                    checked={this.props.checked}
                    onChange={this.props.onChange}
                    disabled={this.props.disabled}
                />,
                <span
                    key={1}
                    className="slider round"
                    data-label={this.props.sliderLabel}
                />
            ]
        );
    }
}

Switch.propTypes = {
    className: PropTypes.string,
    checked: PropTypes.bool,
    onChange: PropTypes.func,

    /**
     * Sets label inside of the switch. If you set this, you should also set the className "lg" to make the switch larger.
     */
    sliderLabel: PropTypes.string,

    /**
     * You can change the type of the wrapper element. If you do, the <code>onChange</code> event might not be triggered.
     */
    elementType: PropTypes.string,

    disabled: PropTypes.bool
};

export default Switch;