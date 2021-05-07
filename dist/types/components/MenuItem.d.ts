import React from "react";
export interface MenuItemProps {
    /**
     * Sets `to` prop, e.g. when you use the `NavLink` component from React Router.
     */
    to?: string;
    /**
     * Prop for components by React Router.
     */
    exact?: boolean;
    href?: string;
    onClick?: (event: React.MouseEvent) => void;
    /**
     * Icon component or a class name.
     */
    icon?: any;
    /**
     * Label of the link.
     */
    label?: any;
    /**
     * Should be set as active.
     */
    isActive?: boolean;
    /**
     * When using Blue React's routing system: define this link as home page link.
     */
    isHome?: boolean;
    /**
     * Extends class name of the dropdown menu.
     */
    dropdownClassName?: string;
    /**
     * Set children to create a nested `MenuItem`as a dropdown.
     */
    children?: any;
    /**
     * Defines class name.
     */
    className?: any;
    /**
     * Defines dropdown status from outside.
     */
    showDropdown?: boolean;
    /**
     * Close on click outside.
     */
    supportOutside?: boolean;
    /**
     * By default, MenuItem is a `"button"</button>. If you set a `href`, it's a `"a"`.
     * If you want to have it another type, you can pass a component reference with this prop (e.g. `Link`).
     */
    elementType?: any;
    target?: string;
    rel?: string;
}
declare function MenuItem(props: MenuItemProps): JSX.Element;
export default MenuItem;
