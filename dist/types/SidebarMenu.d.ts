import React from "react";

export interface ISidebarMenuProps {
    /**
     * Erweiterung der className-Property der Seitenleiste.
     */
    sidebarClass?: string;

    /**
     * Setzt die style-Property der Seitenleiste.
     */
    sidebarStyle?: object;

    /**
     * Erweiterung der className-Property des Menüs.
     */
    menuClass?: string;

    /**
     * Setzt die style-Property des Menüs.
     */
    menuStyle?: object;

    /**
     * Inhalte oberhalb des Sidebar-Menüs
     */
    topContent?: any;

    /**
     * Inhalte für den Footer der Sidebar
     */
    bottomContent?: any;
}

/**
 * Die Seitenleiste für das Grid.
 */
declare class SidebarMenu extends React.Component<ISidebarMenuProps, any> { }
export default SidebarMenu;