/// <reference types="react" />
export interface HeaderTitleProps {
    /**
     * Can be an image. Will be placed inside of the `src` attribute.
     */
    logo?: string;
    /**
     * Text next to the logo.
     */
    appTitle?: string;
    /**
     * Disables that the app title will disappear at a specific view width.
     */
    keepAppTitle?: boolean;
    children?: any;
    /**
     * Extends `className` from parent element.
     */
    className?: string;
    /**
     * Is the component used on the sidebar?
     */
    sidebar?: boolean;
}
/**
 * The title area at the header bar.
 * Depending on its content, the document's title will be set aswell (what will be shown in the browser title bar).
 */
export default function HeaderTitle({ logo, appTitle, keepAppTitle, children, className, sidebar }: HeaderTitleProps): JSX.Element;
