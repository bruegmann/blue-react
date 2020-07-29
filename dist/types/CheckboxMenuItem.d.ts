import React from "react";

export interface ICheckboxMenuItemProps {
    /**
    * Beschriftung des Links
    */
    label: any,

    /**
     * Setze checked
     */
    checked: boolean,

    /**
     * onClick Event für die Checkbox
     */
    onClick: (e?: any) => void,

    /**
     * Setze Klassen namen
     */
    className: string
}

/**
 * Checkbox MenuItem.
 */
declare class CheckboxMenuItem extends React.Component<ICheckboxMenuItemProps, any> { }
export default CheckboxMenuItem;