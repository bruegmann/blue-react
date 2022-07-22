import { Component, CSSProperties } from "react";
declare global {
    interface Window {
        blueLayoutRef: any;
        toggleSidebarEvent: any;
    }
}
export interface LayoutLegacyProps {
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
    routes?: {
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
    /**
     * Define a function, that will be fired when switching routes. When your function returns `true`, the default route behaviour will be blocked.
     * You can use something like `window.blueLayoutRef.setState({ blockRouting: onHashChange })` globally to set the value from anywhere in your app.
     */
    blockRouting?: (newMatch: string[], currentMatch: string[]) => void | boolean;
    children?: any;
}
export interface LayoutState {
    sidebarIn?: boolean;
    match: any;
    history: string[];
    hash: string;
    hashHistory: string[];
    blockRouting?: (newMatch: string[], currentMatch: string[]) => void | boolean;
}
/**
 * The main component. As soon this component is mounted, it is globally available under `window.blueLayoutRef`.
 * You can also append your own event listeners.
 *
 * Allowed events:
 *
 * * **componentDidUpdate** - Component was updated.
 *   Example: `window.blueLayoutRef.addEventListener("componentDidUpdate", (prevProps, prevState) => { })`
 * * **pageDidShowAgain** - Page appeared again with the same old state. In the callback function you can reinitialize things.
 *   Example: `window.blueLayoutRef.addEventListener("pageDidShowAgain", "home", (prevProps, prevState) => { })`
 * * **pageDidHide** - This page disappeared and another page appears instead.
 *   Example: `window.blueLayoutRef.addEventListener("pageDidHide", "home", (prevProps, prevState) => { })`
 *
 * Method to add event listeners:
 * * `window.blueLayoutRef.`**addEventListener**`(eventName: string, param2: any, param3: any, listenerId?: string)`
 *
 * Methods to remove event listeners:
 * * `window.blueLayoutRef.`**removeEventListener**`(eventName: string, listenerId: string)`
 * * `window.blueLayoutRef.`**removeDuplicatedEventListeners**`()` - Will automatically be called when running `addEventListener`
 */
export default class Layout extends Component<LayoutLegacyProps, LayoutState> {
    defaultMatch: string[];
    eventListeners: any[];
    constructor(props: LayoutLegacyProps);
    onHashChange(): void;
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
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: LayoutLegacyProps, prevState: LayoutState): void;
    toggleSidebar(event: any): void;
    hideSidebar(e: any): void;
    initMatch(): void;
    addEventListener(param1: any, param2: any, param3: any, listenerId?: string): void;
    removeEventListener(type: string, listenerId: string): void;
    removeDuplicatedEventListeners(): void;
    render(): JSX.Element;
}