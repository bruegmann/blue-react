import React from "react";
import PropTypes from "prop-types";

/**
 * Shortcut für <code>&lt;button class="fluent-btn"&gt;&lt;div className="fluent-btn-ball"&gt;&lt;/div&gt;&lt;/button&gt;</code>.
 * Erzeugt Button, mit einem Acrylic-Effekt.
 */

class FluentBtn extends React.Component {
    static get defaultProps() {
        return {
            className: "",
            light: false
        };
    }

    render() {
        const ballClassName = "fluent-btn-ball";

        let props = {};

        Object.keys(this.props).map(key => {
            if (key != "light") {
                props[key] = this.props[key];
            }
        });

        props.className = "fluent-btn " + (this.props.className) + (this.props.light ? " light" : "");

        return (
            this.props.href ?
                <a
                    {...props}
                >
                    <div className={ballClassName} />
                    {this.props.children}
                </a>
                :
                <button
                    {...props}
                >
                    <div className={ballClassName} />
                    {this.props.children}
                </button>
        );
    }
}

FluentBtn.propTypes = {
    /**
     * Inhalt des Buttons. Es werden auch alle anderen Properties unterstützt.
     */
    children: PropTypes.any,

    className: PropTypes.string,

    /**
     * Wenn gesetzt, wird ein <code>&lt;a&gt;</code>-Element zurückgegeben. Ansonsten ist es ein <code>&lt;button&gt;</code>.
     */
    href: PropTypes.string,

    /**
     * Kann bei Schaltflächen mit weißen Flächen gesetzt werden. Der Schein ist dann etwas dunkler.
     */
    light: PropTypes.bool
};

export default FluentBtn;