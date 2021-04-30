export default Caret;
/**
 * Caret icon component.
 */
declare class Caret extends React.Component<any, any, any> {
    static get defaultProps(): {
        open: boolean;
        mirrored: boolean;
        className: string;
    };
    constructor(props: any);
    constructor(props: any, context: any);
}
declare namespace Caret {
    export namespace propTypes {
        export const open: PropTypes.Requireable<boolean>;
        export const mirrored: PropTypes.Requireable<boolean>;
        export const className: PropTypes.Requireable<string>;
    }
}
import React from "react";
import PropTypes from "prop-types";
