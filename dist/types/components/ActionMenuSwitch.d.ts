export default ActionMenuSwitch;
/**
 * <span class="badge badge-secondary">Deprecated</span> When using <strong>Actions</strong>, please use <strong>SwitchMenuItem</strong> instead.<br>
 * Switch for the Action Menu.
 */
declare class ActionMenuSwitch extends React.Component<any, any, any> {
    static get defaultProps(): {
        className: string;
        href: string;
    };
    constructor(props: any);
    constructor(props: any, context: any);
}
declare namespace ActionMenuSwitch {
    export namespace propTypes {
        export const className: PropTypes.Requireable<string>;
        export const checked: PropTypes.Requireable<boolean>;
        export const onChange: PropTypes.Requireable<(...args: any[]) => any>;
        export const label: PropTypes.Requireable<any>;
    }
}
import React from "react";
import PropTypes from "prop-types";
