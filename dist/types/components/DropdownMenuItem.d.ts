/// <reference types="react" />
export interface DropdownMenuItemProps {
    to?: string;
    icon?: any;
    label?: any;
    isActive?: boolean;
    children?: any;
}
/**
 * @deprecated Use nested `MenuItem`s instead.
 * Dropdown with button for sidebar.
 */
export default function DropdownMenuItem(props: DropdownMenuItemProps): JSX.Element;
