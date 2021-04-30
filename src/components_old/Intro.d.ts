export default Intro;
/**
 * Geeignet als Login-Bildschirm.
 */
declare class Intro extends React.Component<any, any, any> {
    static get defaultProps(): {
        logoMaxWidth: string;
    };
    constructor(props: any);
    constructor(props: any, context: any);
}
declare namespace Intro {
    export namespace propTypes {
        export const logo: PropTypes.Requireable<string>;
        export const logoMaxWidth: PropTypes.Requireable<string>;
        export const title: PropTypes.Requireable<string>;
        export const children: PropTypes.Requireable<any>;
    }
}
import React from "react";
import PropTypes from "prop-types";
