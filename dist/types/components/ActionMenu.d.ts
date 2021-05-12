/// <reference types="react" />
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
}
/**
 * <span class="badge badge-info">Info</span> You can also use <strong>Actions</strong> instead.<br>
 * The Action Menu on the top right of a page. You can place Actions here which are in context of the current page.
 */
export default function ActionMenu({ hideToggleAction, children, toggleIcon }: ActionMenuProps): JSX.Element;
