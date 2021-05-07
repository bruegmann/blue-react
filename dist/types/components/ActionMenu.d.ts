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
declare function ActionMenu({ hideToggleAction, children, toggleIcon }: ActionMenuProps): JSX.Element;
export default ActionMenu;
