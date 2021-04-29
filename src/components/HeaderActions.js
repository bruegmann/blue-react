import React from "react";
import PropTypes from "prop-types";

import Utilities from "./Utilities.js";

/**
 * Hier werden z.B. Buttons für die aktuelle Seite platziert.
 */
class HeaderActions extends React.Component {
    static get defaultProps() {
        return {
            className: "",
            breakpoint: "lg"
        }
    }

    render() {
        return (
            <div className={`blue-app-actions navbar ${this.props.className} navbar-expand-${this.props.breakpoint} ${this.props.breakpoint}`}>
                <div className="ui-header-wrapper" onClick={() => Utilities.scrollToTop()} />

                {this.props.children}
            </div>
        );
    }
}

HeaderActions.propTypes = {
    className: PropTypes.string,

    /**
     * Legt fest, ab welcher Breite umgebrochen wird. Mögliche Werte: <code>"sm"</code> (768px), <code>"md"</code> (992px), <code>"lg"</code> (1200px)
     */
    breakpoint: PropTypes.string
}

export default HeaderActions;