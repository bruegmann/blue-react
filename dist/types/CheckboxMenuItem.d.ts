import React from "react";

export interface ICheckboxMenuItem {
    /**
    * Beschriftung des Links
    */
    label: any,

    /**
    * Setze checked 
    */
    checked: boolean,
    /**
        * onClick event für die Checkbox.
        */
    onClick: (e?: any) => void,

    /**
     * Setze Klasse namen
    */
    className: string
}

/**
 * Checkbox MenuItem.
 */
declare class CheckboxMenuItem extends React.Component<ICheckboxMenuItemProps, any> { }
export default CheckboxMenuItem;