/// <reference types="react" />
export interface SidebarMenuProps {
    /**
     * Should menu items have a Fluent effect. Default: `true`
     */
    fluent?: boolean;
    /**
     * Extends the class name by the sidebar.
     */
    sidebarClass?: string;
    /**
     * Sets the `style` prop by the sidebar.
     */
    sidebarStyle?: object;
    /**
     * Extends the class name by the menu.
     */
    menuClass?: string;
    /**
     * Sets the `style` prop by the menu.
     */
    menuStyle?: object;
    /**
     * Content on top of the menu.
     */
    topContent?: any;
    /**
     * Content for the bottom part of the sidebar.
     */
    bottomContent?: any;
    children?: any;
}
/**
 * Sidebar for the `Grid` component.
 */
export default function SidebarMenu(props: SidebarMenuProps): JSX.Element;
