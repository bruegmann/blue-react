import React from "react";

export interface IActionMenuSwitchProps {
    className?: string;
    checked?: boolean;
    onChange?: () => void;

    /**
     * Beschriftung des Controls
     */
    label?: any;
}

/**
 * @deprecated(When using Actions, please use SwitchMenuItem instead.)
 * Switch für das Action-Menü.
 */
declare class ActionMenuSwitch extends React.Component<IActionMenuSwitchProps, any> { }
export default ActionMenuSwitch;