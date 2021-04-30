import React from "react";

export interface IDocumentViewProps {
    /**
     * Quelle des Inhalts (URL)
     */
    src?: string;

    /**
     * Statt Quelle, kann der Inhalt (HTML) auch direkt übergeben werden.
     */
    content?: string;

    /**
     * MIME-Typ des Inhalts (z.B. "application/pdf")
     */
    mimeType: string;

    /**
     * Beschriftung für den Button für das Anzeigen
     */
    showDocumentLabel: string;
}

/**
 * Zeigt Inhalt anhand einer URL in einem iFrame an.
 * Wenn der Inhalt nicht in einem iFrame angezeigt werden kann, wird stattdessen ein Download-Button angeboten.
 */
declare class DocumentView extends React.Component<IDocumentViewProps, any> { }
export default DocumentView;