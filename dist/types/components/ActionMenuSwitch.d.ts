/// <reference types="react" />
export interface ActionMenuSwitchProps {
    className?: string;
    checked?: boolean;
    onChange?: () => void;
    /**
     * Beschriftung des Controls
     */
    label?: any;
}
/**
 * <span class="badge badge-secondary">Deprecated</span> When using <strong>Actions</strong>, please use <strong>SwitchMenuItem</strong> instead.<br>
 * Switch for the Action Menu.
 */
export default function ActionMenuSwitch(props: ActionMenuSwitchProps): JSX.Element;
