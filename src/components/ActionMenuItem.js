import React from "react";
import PropTypes from "prop-types";

/**
 * List Item and Link for the current Action Menu.
 */
class ActionMenuItem extends React.Component {
    static get defaultProps() {
        return {
            navItemClassName: "",
            className: "",
            href: "javascript:void(0)"
        };
    }

    render() {
        let props = {};

        Object.keys(this.props).map(key => {
            if (key !== "navItemClassName" && key !== "icon" && key !== "label") {
                props[key] = this.props[key];
            }
        });

        return (
            <li className={"nav-item " + this.props.navItemClassName}>
                <a {...props} href={this.props.href} className={"nav-link blue-app-actions-menu-item " + this.props.className}>
                    <span className={this.props.icon} />
                    {this.props.label &&
                        <span className="blue-app-actions-label">
                            {this.props.icon &&
                                <span>&nbsp;</span>
                            }
                            {this.props.label}
                        </span>
                    }
                </a>
            </li>
        );
    }
}

ActionMenuItem.propTypes = {
    /**
     * Extends className of the <code>.nav-item</code> element.
     */
    navItemClassName: PropTypes.string,

    /**
     * Extends className of the <code>.nav-link</code> element.
     */
    className: PropTypes.string,

    href: PropTypes.string,

    /**
     * className for the icon.
     */
    icon: PropTypes.string,

    /**
     * Label for the link.
     */
    label: PropTypes.any
};

export default ActionMenuItem;