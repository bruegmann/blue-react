export default FluentBtn;
/**
 * Shortcut for <code>&lt;button class="fluent-btn"&gt;&lt;div className="fluent-btn-ball"&gt;&lt;/div&gt;&lt;/button&gt;</code>.
 * Button with a fancy and fluent acrylic effect.
 */
declare class FluentBtn extends React.Component<any, any, any> {
    static get defaultProps(): {
        className: string;
        light: boolean;
    };
    constructor(props: any);
    constructor(props: any, context: any);
}
declare namespace FluentBtn {
    export namespace propTypes {
        export const children: PropTypes.Requireable<any>;
        export const className: PropTypes.Requireable<string>;
        export const href: PropTypes.Requireable<string>;
        export const light: PropTypes.Requireable<boolean>;
    }
}
import React from "react";
import PropTypes from "prop-types";
