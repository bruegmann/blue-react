import React from "react";
import Utilities from "./Utilities.js";
import PropTypes from "prop-types";

function collapseSection(element) {
    /* Source of these functions: https://css-tricks.com/using-css-transitions-auto-dimensions/ */
    var sectionHeight = element.scrollHeight;
    var elementTransition = element.style.transition;
    element.style.transition = '';

    requestAnimationFrame(function () {
        element.style.height = sectionHeight + 'px';
        element.style.transition = elementTransition;
        requestAnimationFrame(function () {
            element.style.height = 84 + 'px';
        });
    });
    element.setAttribute('data-collapsed', 'true');
}

function expandSection(element) {
    var sectionHeight = element.scrollHeight;
    element.style.height = sectionHeight + 'px';

    const fun = function (e) {
        element.removeEventListener('transitionend', fun);
        element.style.height = null;
    };
    element.addEventListener('transitionend', fun);
    element.setAttribute('data-collapsed', 'false');
}


/**
 * The new actions menu, better optimized for mobile devices.<br>
 * <strong>Important:</strong> If you use <code>&lt;Actions /&gt;</code> on a page, make sure also to set <strong>hasActions</strong> prop from
 * <strong>Page</strong> component to <code>true</code>.
 */
class Actions extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: props.open
        };

        this.id = "Actions-" + Utilities.guid();

        this.toggle = this.toggle.bind(this);
    }

    static get defaultProps() {
        return {
            className: "",
            controlsClassName: "",
            open: false,
            break: "md"
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.open !== this.props.open) {
            this.setState({ open: this.props.open });
        }
    }

    toggle() {
        const open = !this.state.open;
        const element = document.getElementById(this.id);

        // expandSection(element);

        this.setState({ open }, () => {
            if (open) {
                expandSection(element);
            }
            else {
                collapseSection(element);
            }
        });

        if (this.props.onToggle) {
            this.props.onToggle(open);
        }
    }

    render() {
        return (
            <div
                id={this.id}
                className={"blue-actions " + this.props.className + " " + (this.state.open ? "open" : "closed") + ` break-${this.props.break}`}
            >
                <div className={`blue-actions-indicator d-${this.props.break}-none`} onClick={this.toggle} />

                <div className={"blue-actions-controls " + this.props.controlsClassName}>
                    {this.props.children}
                </div>

                <div className={`blue-actions-featured d-${this.props.break}-none`}>
                    <div className="fluent-btn">
                        <div className="fluent-btn-ball" />
                        {this.props.featured}
                    </div>
                </div>
            </div>
        );
    }
}

Actions.propTypes = {
    /**
     * Content that will appear on the menu when it's expanded.
     */
    children: PropTypes.any,

    /**
     * Extends the <code>className</code> of <code>.blue-actions</code>.
     */
    className: PropTypes.string,

    /**
     * Extends the <code>className</code> of <code>.blue-actions-controls</code>.
     */
    controlsClassName: PropTypes.string,

    /**
     * Content that will appear when the menu is shrunken.
     */
    featured: PropTypes.any,
    open: PropTypes.bool,

    /**
     * Will fire when the state of <code>open</code> will change inside of the component.<br>
     * <strong>Example:</strong> <code>onToggle={open => this.setState({ open })}</code>
     */
    onToggle: PropTypes.func,

    /**
     * <code>sm</code>, <code>md</code>, <code>lg</code> or <code>xl</code>
     */
    break: PropTypes.string
};

export default Actions;