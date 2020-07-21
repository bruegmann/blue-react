import React from "react";

export interface IFluentBtnProps {
    /**
     * Inhalt des Buttons. Es werden auch alle anderen Properties unterstützt.
     */
    children?: any;

    className?: string;

    /**
     * Wenn gesetzt, wird ein `<a>`-Element zurückgegeben. Ansonsten ist es ein `<button>`.
     */
    href?: string;

    /**
     * Kann bei Schaltflächen mit weißen Flächen gesetzt werden. Der Schein ist dann etwas dunkler.
     */
    light?: boolean;

    /**
    * Setze Typ.
    */
    type?: string;

    /**
    * Setze Titel des Buttons.
    */
    title?: string

    /**
    * Styling for the FluentBtn.
    */
    style?: any

    /**
    * onClick Eventhandler.
    */
    onClick?: (e?: any) => void
}

/**
 * Shortcut für `<button class="fluent-btn"><div className="fluent-btn-ball"></div></button>`.
 * Erzeugt Button, mit einem Acrylic-Effekt.
 */
declare class FluentBtn extends React.Component<IFluentBtnProps, any> { }
export default FluentBtn;