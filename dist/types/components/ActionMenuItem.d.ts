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
 * @deprecated This is only an alias to MenuItem, please use MenuItem instead.
 * <span class="badge badge-warning">Deprecated</span> This is just an alias for <code>MenuItem</code>, so you should use that component instead.
 * If you need the older <code>ActionMenuItem</code>, make sure to the prop <code>useDeprecated</code>.<br/>
 * List Item and Link for the current Action Menu.
 */
export default function ActionMenuItem(props: ActionMenuItemProps): JSX.Element;
