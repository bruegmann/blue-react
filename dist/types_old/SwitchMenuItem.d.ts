import React from "react";
import Switch from "./Switch";

export interface ISwitchMenuItemProps {

    onClick?: (event: React.ChangeEvent) => void;
    Label?: any;
    Icon?: ImageBitmap;
    SwitchMenuItem?: Switch;
}
    /**
    * Switch for **Actions**
    */
declare class SwitchMenuItem extends React.Component<ISwitchMenuItemProps, any> { }
export default SwitchMenuItem;