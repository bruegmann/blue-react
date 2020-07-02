import React from "react";

export interface ICaretProps {
    /**
     * Indicates if open or not.
     */
    open?: boolean;

    /**
     * By default the caret points to the right when closed. Set mirrored and it will point to the left.
     */
    mirrored?: boolean;

    className?: string;
}

/**
 * Caret icon component.
 */
declare class Caret extends React.Component<ICaretProps, any> { }
export default Caret;