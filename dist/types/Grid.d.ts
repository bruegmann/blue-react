import React from "react";

export interface IGridProps {
    /**
     * Die Sidebar ist bei Vollbild automatisch eingeklappt.
     */
    expandSidebar?: boolean;

    /**
     * Deaktiviert die Sidebar.
     */
    hideSidebarMenu?: boolean;

    /**
     * Registriert Seiten. Beispiel: [{name: "home", component: <HomePage />}]
     */
    pages?: { name: string; component: JSX.Element }[];

    /**
     * Wenn <code>true</code> wird immer die "home"-Route geladen.
     */
    unrouteable?: boolean;

    /**
     * Erweitert die <code>className</code>-Eigenschaft.
     */
    className?: string;

    /**
     * Normalerweise wird der Dokumenten-Titel automatisch gesetzt. Setze diese Property auf <code>true</code> um das zu
     * deaktivieren.
     */
    disableTitleSet?: boolean;

    /**
     * If you don't use blueicon, you can define another icon element for the sidebar toggle button.
     */
    sidebarToggleIconComponent?: any;
}

/**
 * Das Grundgerüst. Sobald diese Komponente gemountet wurde, ist sie global über `window.blueGridRef` zugreifbar.  
 * Außerdem kann über `window.blueGridRef.addEventListener(eventName, (prevProps, prevState) => { })` ein Event-Listener angefügt werden.  

 * Erlaubte Event-Listener:

 * |Event name|Description|Beispiel|
 * |--- |--- |--- |
 * |componentDidUpdate|Komponente wurde aktualisiert.|`window.blueGridRef.addEventListener("componentDidUpdate", (prevProps, prevState) => { })`|
 * |pageDidShowAgain|Seite wurde erneut angezeigt, mit altem Stand. Im Callback kann Komponente neu initialisiert werden.|`window.blueGridRef.addEventListener("pageDidShowAgain", "home", (prevProps, prevState) => { })`|
 * |pageDidHide|Seite wurde versteckt (andere Seite wurde angezeigt).|`window.blueGridRef.addEventListener("pageDidHide", "home", (prevProps, prevState) => { })`|
 */
declare class Grid extends React.Component<IGridProps, any> { }
export default Grid;