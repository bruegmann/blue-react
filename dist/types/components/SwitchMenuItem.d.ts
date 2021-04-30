export default SwitchMenuItem;
/**
 * Switch for <strong>Actions</strong>
 */
declare class SwitchMenuItem extends React.Component<any, any, any> {
    constructor(props: any);
    constructor(props: any, context: any);
}
declare namespace SwitchMenuItem {
    export const propTypes: {
        className: PropTypes.Requireable<string>;
        checked: PropTypes.Requireable<boolean>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        sliderLabel: PropTypes.Requireable<string>;
        elementType: PropTypes.Requireable<string>;
        disabled: PropTypes.Requireable<boolean>;
    };
}
import React from "react";
import PropTypes from "prop-types";
