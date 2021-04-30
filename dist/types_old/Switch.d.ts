import React from "react";

export interface ISwitchProps {

    className?: string;
    checked?: boolean;
    onChange?: (event: React.ChangeEvent) => void;

    /**
     * Sets label inside of the switch. If you set this, you should also set the className "lg" to make the switch larger.
     */
    sliderLabel?: string;

    /**
     * You can change the type of the wrapper element. If you do, the `onChange` event might not be triggered.
     */
    elementType?: string;

    disabled?: boolean;
}

/**
 * Switch.
 */
declare class Switch extends React.Component<ISwitchProps, any> { }
export default Switch;