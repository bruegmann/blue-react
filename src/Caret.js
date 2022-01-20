import React from "react";
import PropTypes from "prop-types";

/**
 * Caret icon component.
 */
class Caret extends React.Component {
    static get defaultProps() {
        return {
            open: false,
            mirrored: false,
            className: ""
        };
    }

    render() {
        return (
            <span
                className={
                    "caret " +
                    (this.props.open ? " caret-open " : "") +
                    (this.props.mirrored ? " caret-mirrored " : "") +
                    this.props.className
                }
            />
        );
    }
}

Caret.propTypes = {
    /**
     * Indicates if open or not.
     */
    open: PropTypes.bool,

    /**
     * By default the caret points to the right when closed. Set mirrored and it will point to the left.
     */
    mirrored: PropTypes.bool,
    className: PropTypes.string
};

export default Caret;