import React from "react";
import PropTypes from "prop-types";
import MenuItem from "./MenuItem";

/**
 * <span class="badge badge-secondary">Info</span> This is just an alias for <code>MenuItem</code>, so you should use that component instead.
 * If you need the older <code>ActionMenuItem</code>, make sure to the prop <code>useDeprecated</code>.
 * List Item and Link for the current Action Menu.
 */
class ActionMenuItem extends React.Component {
    static get defaultProps() {
        return {
            navItemClassName: "",
            className: "",
            href: "javascript:void(0)",
            useDeprecated: false
        };
    }

    render() {
        if (this.props.useDeprecated) {
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
        else {
            return <MenuItem {...this.props} />;
        }
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
    label: PropTypes.any,

    /**
     * Tooltip on hover.
     */
    title: PropTypes.string,

    /**
     * Set `true` to use the old ActionMenuItem. Otherwise this component is just an alias to MenuItem.
     */
    useDeprecated: PropTypes.bool
};

export default ActionMenuItem;