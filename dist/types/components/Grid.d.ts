import { Component, CSSProperties } from "react";
declare global {
    interface Window {
        blueGridRef: any;
        toggleSidebarEvent: any;
    }
}
export interface GridProps {
    id?: string;
    sidebarIn?: boolean;
    style?: CSSProperties;
    /**
     * Sidebar is automatically expanded on wider views.
     */
    expandSidebar?: boolean;
    /**
     * Disables sidebar.
     */
    hideSidebarMenu?: boolean;
    /**
     * Registers pages for the built-in routing system. Example: `[{name: "home", component: <HomePage />}]`
     */
    pages?: {
        name: string;
        component: JSX.Element;
    }[];
    /**
     * When `true`, always the "home" route will be rendered.
     */
    unrouteable?: boolean;
    /**
     * Extends `className`.
     */
    className?: string;
    /**
     * By default, the document title will automatically set. Set this prop to `true` to disable this behaviour.
     */
    disableTitleSet?: boolean;
    /**
     * If you don't use blueicon, you can define another icon element for the sidebar toggle button.
     */
    sidebarToggleIconComponent?: any;
    /**
     * Will replace status icons with custom ones. This will also overwrite the `useBlueicons` option.
     * This can be a SVG component or a normal element component.
     */
    statusIcons?: {
        danger: any;
        info: any;
        success: any;
        warning: any;
    };
    /**
     * Disables the header bars on pages.
     */
    disableHeaders?: boolean;
}
declare type GridState = any;
/**
 * The main component. As soon this component is mounted, it is globally available under `window.blueGridRef`.
 * Also you can append your own event listeners with `blueGridRef.addEventListener(eventName, (prevProps, prevState) => { })`.
 *
 * Allowed event listeners:
 *
 * * **componentDidUpdate** - Component was updated.
 *   Example: `blueGridRef.addEventListener("componentDidUpdate", (prevProps, prevState) => { })`
 * * **pageDidShowAgain** - Page appeared again with the same old state. In the callback function you can reinitialize things.
 *   Example: `blueGridRef.addEventListener("pageDidShowAgain", "home", (prevProps, prevState) => { })`
 * * **pageDidHide** - This page disappeared and another page appears instead.
 *   Example: `blueGridRef.addEventListener("pageDidHide", "home", (prevProps, prevState) => { })`
 */
export default class Grid extends Component<GridProps, GridState> {
    defaultMatch: string[];
    eventListeners: any[];
    constructor(props: GridProps);
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
    componentDidMount(): void;
    componentDidUpdate(prevProps: GridProps, prevState: GridState): void;
    toggleSidebar(event: any): void;
    hideSidebar(e: any): void;
    initMatch(): void;
    addEventListener(param1: any, param2: any, param3: any): void;
    render(): JSX.Element;
}
export {};
