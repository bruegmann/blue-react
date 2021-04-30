export default DocumentView;
/**
 * Tries to display content in an iframe. When the content can't displayed in an iframe, it will show a download button instead.
 */
declare class DocumentView extends React.Component<any, any, any> {
    static get defaultProps(): {
        src: string;
        showDocumentLabel: string;
    };
    uniqueId: string;
    supportsIframe(): boolean;
}
declare namespace DocumentView {
    export namespace propTypes {
        export const src: PropTypes.Requireable<string>;
        export const content: PropTypes.Requireable<any>;
        export const mimeType: PropTypes.Validator<string>;
        export const showDocumentLabel: PropTypes.Requireable<string>;
    }
}
import React from "react";
import PropTypes from "prop-types";
