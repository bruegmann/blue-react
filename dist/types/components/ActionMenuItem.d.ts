export default ActionMenuItem;
/**
 * @deprecated This is only an alias to MenuItem, please use MenuItem instead.
 * <span class="badge badge-warning">Deprecated</span> This is just an alias for <code>MenuItem</code>, so you should use that component instead.
 * If you need the older <code>ActionMenuItem</code>, make sure to the prop <code>useDeprecated</code>.<br/>
 * List Item and Link for the current Action Menu.
 */
declare class ActionMenuItem extends React.Component<any, any, any> {
    static get defaultProps(): {
        navItemClassName: string;
        className: string;
        href: string;
        useDeprecated: boolean;
    };
    constructor(props: any);
    constructor(props: any, context: any);
}
declare namespace ActionMenuItem {
    export namespace propTypes {
        export const navItemClassName: PropTypes.Requireable<string>;
        export const className: PropTypes.Requireable<string>;
        export const href: PropTypes.Requireable<string>;
        export const icon: PropTypes.Requireable<string>;
        export const label: PropTypes.Requireable<any>;
        export const title: PropTypes.Requireable<string>;
        export const useDeprecated: PropTypes.Requireable<boolean>;
    }
}
import React from "react";
import PropTypes from "prop-types";
