import React from "react";
import PropTypes from "prop-types";

/**
 * Contains the content of the page.
 */
class Body extends React.Component {
    static get defaultProps() {
        return {
            containerClass: "container-fluid",
            hasActions: false,
            break: "md"
        };
    }

    render() {
        const pageBodyClassName = "blue-app-page";

        return (
            <div id={this.props.id}
                className={this.props.className ? pageBodyClassName + " " + this.props.className : pageBodyClassName
                    + (this.props.hasActions ? " has-actions" : "") + ` break-${this.props.break}`}
                onClick={this.props.onClick}
            >
                <div className={this.props.containerClass}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

Body.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,

    /**
     * Sets the class name for the container. For more information about container: https://getbootstrap.com/docs/4.5/layout/overview/#containers
     */
    containerClass: PropTypes.string,

    /**
     * Set <code>true</code> if this page uses <code>/lt;Actions /&gt;</code>, so this component will get enough padding to avoid overlapping of the content.
     */
    hasActions: PropTypes.bool,

    /**
     * <code>sm</code>, <code>md</code>, <code>lg</code> or <code>xl</code>
     */
    break: PropTypes.string
};

export default Body;