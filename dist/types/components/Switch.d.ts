export default Switch;
/**
 * Switch.
 */
declare class Switch extends React.Component<any, any, any> {
    static get defaultProps(): {
        className: string;
        checked: boolean;
        onChange: () => void;
        sliderLabel: null;
        elementType: string;
        disabled: boolean;
    };
    constructor(props: any);
    constructor(props: any, context: any);
}
declare namespace Switch {
    export namespace propTypes {
        export const className: PropTypes.Requireable<string>;
        export const checked: PropTypes.Requireable<boolean>;
        export const onChange: PropTypes.Requireable<(...args: any[]) => any>;
        export const sliderLabel: PropTypes.Requireable<string>;
        export const elementType: PropTypes.Requireable<string>;
        export const disabled: PropTypes.Requireable<boolean>;
    }
}
import React from "react";
import PropTypes from "prop-types";
