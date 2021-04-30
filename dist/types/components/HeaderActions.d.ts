export default HeaderActions;
/**
 * Hier werden z.B. Buttons für die aktuelle Seite platziert.
 */
declare class HeaderActions extends React.Component<any, any, any> {
    static get defaultProps(): {
        className: string;
        breakpoint: string;
    };
    constructor(props: any);
    constructor(props: any, context: any);
}
declare namespace HeaderActions {
    export namespace propTypes {
        export const className: PropTypes.Requireable<string>;
        export const breakpoint: PropTypes.Requireable<string>;
    }
}
import React from "react";
import PropTypes from "prop-types";
