/// <reference types="react" />
export interface DocumentViewProps {
    /**
     * Source of the content (URL)
     */
    src?: string;
    /**
     * Instead of a source, you can also set the content directly (HTML)
     */
    content?: string;
    /**
     * MIME type of the content (e.g. "application/pdf")
     */
    mimeType: string;
    /**
     * Label for the button to display
     */
    showDocumentLabel: string;
}
/**
 * Tries to display content in an iframe. When the content can't displayed in an iframe, it will show a download button instead.
 */
export default function DocumentView({ content, mimeType, src, showDocumentLabel }: DocumentViewProps): JSX.Element;
