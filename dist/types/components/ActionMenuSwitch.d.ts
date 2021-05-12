/// <reference types="react" />
export interface ActionMenuSwitchProps {
    className?: string;
    checked?: boolean;
    onChange?: () => void;
    label?: any;
}
/**
 * Switch for the Action Menu.
 */
export default function ActionMenuSwitch(props: ActionMenuSwitchProps): JSX.Element;
