import React from "react";

export interface IDropdownMenuItem {
    /**
* Setzt to-Property der NavLink-Komponente aus React Router.
*/
    to?: string;

    /**
     * Klasse eines Icons oder Element, z.B. von blueicon-colored.
     */
    icon?: any;

    /**
     * Beschriftung des Links
     */
    label?: any;

    /**
     * Soll Item als "aktiv" markiert werden? Ist die to-Property gesetzt, wird Item automatisch als "aktiv" markiert, wenn entsprechende Seite aktiv ist.
     */
    isActive?: boolean;

    /**
     * Werden in einem Dropdown-Menü angezeigt.
     */
    children?: any;
}

/**
 * Dropdown-Item und Link für die Sidebar.
 */
declare class DropdownMenuItem extends React.Component<IDropdownMenuItem, any> { }
export default DropdownMenuItem;