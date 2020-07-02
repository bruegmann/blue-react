import React from "react";

export interface IIntroProps {
    /**
     * Kann ein Bild sein. Wird im src-Attribute implementiert.
     */
    logo?: string;

    /**
     * Maximale Breite des Logos.
     */
    logoMaxWidth?: string;

    /**
     * Der Text, der unter dem Logo erscheint
     */
    title?: string;

    /**
     * Inhalt
     */
    children?: any;
}

/**
 * Geeignet als Login-Bildschirm.
 */
declare class Intro extends React.Component<IIntroProps, any> { }
export default Intro;