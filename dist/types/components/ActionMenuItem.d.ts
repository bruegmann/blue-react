/// <reference types="react" />
export interface ActionMenuItemProps {
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
    /**
     * Tooltip on hover.
     */
    title?: string;
    /**
     * Set `true` to use the old ActionMenuItem. Otherwise this component is just an alias to MenuItem.
     */
    useDeprecated?: boolean;
}
/**
 * @deprecated This is just an alias for `MenuItem`, so you should use that component instead.
 * If you need the older `ActionMenuItem`, make sure to the prop `useDeprecated`.
 * List Item and Link for the current Action Menu.
 */
export default function ActionMenuItem(props: ActionMenuItemProps): JSX.Element;
