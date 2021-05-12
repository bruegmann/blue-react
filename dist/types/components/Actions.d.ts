/// <reference types="react" />
import { breakOption } from "./shared";
export interface ActionsProps {
    /**
     * Content that will appear on the menu when it's expanded.
     */
    children?: any;
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
export default function Actions(props: ActionsProps): JSX.Element;