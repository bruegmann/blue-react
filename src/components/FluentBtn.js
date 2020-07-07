import React from "react";
import PropTypes from "prop-types";

/**
 * Shortcut for <code>&lt;button class="fluent-btn"&gt;&lt;div className="fluent-btn-ball"&gt;&lt;/div&gt;&lt;/button&gt;</code>.
 * Button with a fancy and fluent acrylic effect.
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
            if (key !== "light") {
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
     * Content of the button. You can also set all other props you would give a button or a link.
     */
    children: PropTypes.any,

    className: PropTypes.string,

    /**
     * If set, it will be an <code>&lt;a&gt;</code> element. Otherwise it will be a <code>&lt;button&gt;</code>.
     */
    href: PropTypes.string,

    /**
     * Can be set for buttons with white background. The glow will be a little bit darker than.
     */
    light: PropTypes.bool
};

export default FluentBtn;