export default MenuItem;
/**
 * List-Item und Link für die Sidebar.
 */
declare class MenuItem extends React.Component<any, any, any> {
    static get defaultProps(): {
        href: undefined;
        isActive: boolean;
        dropdownClassName: string;
        showDropdown: boolean;
        supportOutside: boolean;
    };
    checkActive(): void;
    onClick(event: any): void;
    onClickOutside({ target }: {
        target: any;
    }): void;
}
declare namespace MenuItem {
    export namespace propTypes {
        export const to: PropTypes.Requireable<string>;
        export const href: PropTypes.Requireable<string>;
        export const onClick: PropTypes.Requireable<(...args: any[]) => any>;
        export const icon: PropTypes.Requireable<any>;
        export const label: PropTypes.Requireable<any>;
        export const isActive: PropTypes.Requireable<boolean>;
        export const isHome: PropTypes.Requireable<boolean>;
        export const dropdownClassName: PropTypes.Requireable<string>;
        export const children: PropTypes.Requireable<any>;
        export const showDropdown: PropTypes.Requireable<boolean>;
        export const supportOutside: PropTypes.Requireable<boolean>;
        export const elementType: PropTypes.Requireable<any>;
    }
}
import React from "react";
import PropTypes from "prop-types";
