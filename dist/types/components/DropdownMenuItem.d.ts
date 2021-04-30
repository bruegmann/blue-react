export default DropdownMenuItem;
/**
 * Dropdown-Button und Link für die Sidebar.
 */
declare class DropdownMenuItem extends React.Component<any, any, any> {
    handleClick(): void;
}
declare namespace DropdownMenuItem {
    export namespace propTypes {
        export const label: PropTypes.Requireable<any>;
        export const isActive: PropTypes.Requireable<boolean>;
        export const to: PropTypes.Requireable<string>;
        export const children: PropTypes.Requireable<any>;
        export const icon: PropTypes.Requireable<any>;
    }
}
import React from "react";
import PropTypes from "prop-types";
