export default Actions;
/**
 * The new actions menu, better optimized for mobile devices.<br>
 * <strong>Important:</strong> If you use <code>&lt;Actions /&gt;</code> on a page, make sure also to set <strong>hasActions</strong> prop from
 * <strong>Page</strong> component to <code>true</code>.
 */
declare class Actions extends React.Component<any, any, any> {
    static get defaultProps(): {
        className: string;
        controlsClassName: string;
        open: boolean;
        break: string;
    };
    constructor(props: any);
    id: string;
    toggle(): void;
}
declare namespace Actions {
    export const propTypes: {
        /**
         * Content that will appear on the menu when it's expanded.
         */
        children: PropTypes.Requireable<any>;
        /**
         * Extends the <code>className</code> of <code>.blue-actions</code>.
         */
        className: PropTypes.Requireable<string>;
        /**
         * Extends the <code>className</code> of <code>.blue-actions-controls</code>.
         */
        controlsClassName: PropTypes.Requireable<string>;
        /**
         * Content that will appear when the menu is shrunken.
         */
        featured: PropTypes.Requireable<any>;
        open: PropTypes.Requireable<boolean>;
        /**
         * Will fire when the state of <code>open</code> will change inside of the component.<br>
         * <strong>Example:</strong> <code>onToggle={open => this.setState({ open })}</code>
         */
        onToggle: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * <code>sm</code>, <code>md</code>, <code>lg</code> or <code>xl</code>
         */
        break: PropTypes.Requireable<string>;
    };
}
import React from "react";
import PropTypes from "prop-types";
