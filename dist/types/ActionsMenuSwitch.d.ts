import React from "react";

export interface IActionsMenuSwitchProps {
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
declare class ActionsMenuSwitch extends React.Component<IActionsMenuSwitchProps, any> { }
export default ActionsMenuSwitch;