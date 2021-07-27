/// <reference types="react" />
import { breakOption } from "./shared";
export interface ActionMenuProps {
    /**
     * Hides the toggle button in mobile view. Can be useful when using multiple ActionMenus and not show the toggle button for each menu.
     */
    hideToggleAction?: boolean;
    children?: any;
    /**
     * Icon component for the toggle icon.
     */
    toggleIcon?: any;
    className?: string;
    /**
     * "sm" | "md" | "lg" | "xl" | "none"
     */
    break?: breakOption | "none";
}
/**
 * The Action Menu on the top right of a page. You can place Actions here which are in context of the current page.
 */
export default function ActionMenu(props: ActionMenuProps): JSX.Element;
