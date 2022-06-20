/// <reference types="react" />
import { SwitchProps } from "./Switch";
export interface ActionMenuSwitchProps extends SwitchProps {
    onChange?: () => void;
    label?: any;
}
/**
 * @deprecated
 * Use a solution with Bootstrap's `.form-check.form-switch` or `MenuItem` with a switch icon.
 * Switch for the Action Menu.
 */
export default function ActionMenuSwitch({ label, ...props }: ActionMenuSwitchProps): JSX.Element;
