export default Grid;
/**
 * Das Grundgerüst. Sobald diese Komponente gemountet wurde, ist sie global über <code>window.blueGridRef</code> zugreifbar.<br>
 * Außerdem kann über <code>blueGridRef.addEventListener(eventName, (prevProps, prevState) => { })</code> ein Event-Listener angefügt werden.
 * <br><br>
 * Erlaubte Event-Listener:
 * <table class="table">
 * <thead><tr><th>Event name</th><th>Description</th><th>Beispiel</th></tr></thead>
 * <tbody>
 * <tr>
 * <th>componentDidUpdate</th>
 * <td>Komponente wurde aktualisiert.</td>
 * <td><code>blueGridRef.addEventListener("componentDidUpdate", (prevProps, prevState) => { })</code></td>
 * </tr>
 *
 * <tr>
 * <th>pageDidShowAgain</th>
 * <td>Seite wurde erneut angezeigt, mit altem Stand. Im Callback kann Komponente neu initialisiert werden.</td>
 * <td><code>blueGridRef.addEventListener("pageDidShowAgain", "home", (prevProps, prevState) => { })</code></td>
 * </tr>
 *
 * <tr>
 * <th>pageDidHide</th>
 * <td>Seite wurde versteckt (andere Seite wurde angezeigt).</td>
 * <td><code>blueGridRef.addEventListener("pageDidHide", "home", (prevProps, prevState) => { })</code></td>
 * </tr>
 * </tbody>
 * </table>
 */
declare class Grid extends React.Component<any, any, any> {
    static get defaultProps(): {
        expandSidebar: boolean;
        hideSidebarMenu: boolean;
        unrouteable: boolean;
        disableTitleSet: boolean;
        sidebarToggleIconComponent: JSX.Element;
        statusIcons: {
            danger: JSX.Element;
            info: JSX.Element;
            success: JSX.Element;
            warning: JSX.Element;
        };
    };
    constructor(props: any);
    defaultMatch: string[];
    hideSidebar(e: any): void;
    eventListeners: any[];
    toggleSidebar(event: any): void;
    initMatch(): void;
    addEventListener(param1: any, param2: any, param3: any): void;
}
declare namespace Grid {
    export { SidebarMenu };
    export namespace propTypes {
        export const expandSidebar: PropTypes.Requireable<boolean>;
        export const hideSidebarMenu: PropTypes.Requireable<boolean>;
        export const pages: PropTypes.Requireable<any[]>;
        export const unrouteable: PropTypes.Requireable<boolean>;
        export const className: PropTypes.Requireable<string>;
        export const disableTitleSet: PropTypes.Requireable<boolean>;
        export const sidebarToggleIconComponent: PropTypes.Requireable<any>;
        export const statusIcons: PropTypes.Requireable<PropTypes.InferProps<{
            danger: PropTypes.Requireable<any>;
            info: PropTypes.Requireable<any>;
            success: PropTypes.Requireable<any>;
            warning: PropTypes.Requireable<any>;
        }>>;
        export const disableHeaders: PropTypes.Requireable<boolean>;
    }
}
import React from "react";
import SidebarMenu from "./SidebarMenu.js";
import PropTypes from "prop-types";
