import React from "react";
import { breakOption } from "./shared";

export interface IActionsProps {
    /**
     * Content that will appear on the menu when it's expanded.
     */
    children?: any,

    /**
     * Extends the `className` of `.blue-actions`.
     */
    className?: string;

    /**
     * Extends the <code>className</code> of <code>.blue-actions-controls</code>.
     */
    controlsClassName?: string;

    /**
     * Content that will appear when the menu is shrunken.
     */
    featured?: any;
    open?: boolean;

    /**
     * Will fire when the state of `open` will change inside of the component.
     * **Example:** `onToggle={open => this.setState({ open })}`
     */
    onToggle?: (open: boolean) => void;
    break?: breakOption;
}

/**
 * The new actions menu, better optimized for mobile devices.
 * **Important:** If you use `<Actions />` on a page, make sure also to set **hasActions** prop from
 * **Page** component to `true`.
 */
declare class Actions extends React.Component<IActionsProps, any> { }
export default Actions;