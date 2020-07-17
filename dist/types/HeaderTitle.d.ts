import React from "react";

export interface IHeaderTitleProps {
    /**
     * Kann ein Bild sein. Wird im src-Attribute implementiert.
     */
    logo?: string;

    /**
     * Der Text, der neben dem Logo steht.
     */
    appTitle?: string;

    /**
     * Deaktiviert, dass der App-Titel bei bestimmer Bildschirmgröße ausgeblendet wird.
     */
    keepAppTitle?: boolean;

    /**
     * Werden im HeaderTitle angezeigt.
     */
    children?: any
}

/**
 * Der Titel-Bereich in der Kopf-Leiste.
 * Anhand dessen wird auch der Dokumenten-Titel gesetzt (was in der Browser Titelzeile gezeigt wird).
 */
declare class HeaderTitle extends React.Component<IHeaderTitleProps, any> { }
export default HeaderTitle;