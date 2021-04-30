export default SidebarMenu;
/**
 * Die Seitenleiste für das Grid.
 */
declare class SidebarMenu extends React.Component<any, any, any> {
    static get defaultProps(): {
        fluent: boolean;
    };
    constructor(props: any);
    updateDimensions(): void;
}
declare namespace SidebarMenu {
    export namespace propTypes {
        export const fluent: PropTypes.Requireable<boolean>;
        export const sidebarClass: PropTypes.Requireable<string>;
        export const sidebarStyle: PropTypes.Requireable<object>;
        export const menuClass: PropTypes.Requireable<string>;
        export const menuStyle: PropTypes.Requireable<object>;
        export const topContent: PropTypes.Requireable<any>;
        export const bottomContent: PropTypes.Requireable<any>;
    }
}
import React from "react";
import PropTypes from "prop-types";
