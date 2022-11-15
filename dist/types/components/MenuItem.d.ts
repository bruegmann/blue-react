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
     * Will be fired after `onClick`
     */
    onClickAttached?: (event: React.MouseEvent) => void;
    /**
     * Icon component or a class name.
     */
    icon?: any;
    /**
     * Icon component or a class name when the MenuItem is active.
     */
    iconForActive?: any;
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
     * Set children to create a nested `MenuItem` as a dropdown.
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
     * By default, MenuItem is a `"button"`. If you set a `href`, it's a `"a"`.
     * If you want to have it another type, you can pass a component reference with this prop (e.g. `Link`).
     */
    elementType?: any;
    target?: string;
    rel?: string;
    title?: string;
    /**
     * Fired on the draggable target (the source element): occurs when the user starts to drag an element
     */
    onDragStart?: (event: React.DragEvent) => void | React.DragEventHandler;
    /**
     * Fired on the draggable target (the source element): occurs when an element is being dragged
     */
    onDrag?: (event: React.DragEvent) => void | React.DragEventHandler;
    /**
     * Fired on the draggable target (the source element): occurs when the user has finished dragging the element
     */
    onDragEnd?: (event: React.DragEvent) => void | React.DragEventHandler;
    /**
     * Fired on the drop target: occurs when the dragged element enters the drop target
     */
    onDragEnter?: (event: React.DragEvent) => void | React.DragEventHandler;
    /**
     * Fired on the drop target: occurs when the dragged element is over the drop target
     */
    onDragOver?: (event: React.DragEvent) => void | React.DragEventHandler;
    /**
     * Fired on the drop target: occurs when the dragged element leaves the drop target
     */
    onDragLeave?: (event: React.DragEvent) => void | React.DragEventHandler;
    /**
     * Fired on the drop target: occurs when the dragged element is dropped on the drop target
     */
    onDrop?: (event: React.DragEvent) => void | React.DragEventHandler;
    /**
     * Specifies whether an element is draggable or not.
     */
    draggable?: boolean;
    "data-tooltip"?: string;
}
/**
 * Link, button or custom component for Sidebar, Actions or ActionMenu
 */
export default function MenuItem(props: MenuItemProps): JSX.Element;
