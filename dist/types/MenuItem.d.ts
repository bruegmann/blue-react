import React from "react";

export interface IMenuItemProps {
    /**
 * Setzt to-Property der NavLink-Komponente aus React Router.
 */
    to?: string;

    /**
     * Kann als Alternative zu to benutzt werden.
     */
    href?: string;

    /**
     * onClick Event
     */
    onClick?: (event: React.MouseEvent) => void;

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
     * Als MenuItem für Startseite deklariert.
     */
    isHome?: boolean;

    /**
     * Ergänzung der Klasse vom Dropdown-Menü.
     */
    dropdownClassName?: string;

    /**
     * Werden in einem Dropdown-Menü angezeigt.
     */
    children?: any;

    /**
     * Setzt Klassen namen.
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

/**
 * List-Item und Link für die Sidebar.
 */
declare class MenuItem extends React.Component<IMenuItemProps, any> { }
export default MenuItem;