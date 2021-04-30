export default Body;
/**
 * Contains the content of the page.
 */
declare class Body extends React.Component<any, any, any> {
    static get defaultProps(): {
        containerClass: string;
        hasActions: boolean;
        break: string;
    };
    constructor(props: any);
    constructor(props: any, context: any);
}
declare namespace Body {
    export const propTypes: {
        id: PropTypes.Requireable<string>;
        className: PropTypes.Requireable<string>;
        /**
         * Sets the class name for the container. For more information about container: https://getbootstrap.com/docs/4.5/layout/overview/#containers
         */
        containerClass: PropTypes.Requireable<string>;
        /**
         * Set <code>true</code> if this page uses <code>/lt;Actions /&gt;</code>, so this component will get enough padding to avoid overlapping of the content.
         */
        hasActions: PropTypes.Requireable<boolean>;
        /**
         * <code>sm</code>, <code>md</code>, <code>lg</code> or <code>xl</code>
         */
        break: PropTypes.Requireable<string>;
    };
}
import React from "react";
import PropTypes from "prop-types";
