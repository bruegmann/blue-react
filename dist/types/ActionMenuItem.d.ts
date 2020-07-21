import React from "react";

export interface IActionMenuItemProps {
    /**
     * Extends className of the `.nav-item` element.
     */
    navItemClassName?: string;

    /**
     * Extends className of the `.nav-link` element.
     */
    className?: string;

    /**
    * URL.
    */
    href?: string;

    /**
    * onClick Eventhandler.
    */
    onClick?: (e?: any) => void;

    /**
     * className for the icon.
     */
    icon?: string;

    /**
     * Label for the link.
     */
    label?: any;
}

/**
 * List-Item und Link für das Action-Menü.
 */
declare class ActionMenuItem extends React.Component<IActionMenuItemProps, any> { }
export default ActionMenuItem;