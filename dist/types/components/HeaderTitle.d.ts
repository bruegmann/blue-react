export default HeaderTitle;
/**
 * Der Titel-Bereich in der Kopf-Leiste.
 * Anhand dessen wird auch der Dokumenten-Titel gesetzt (was in der Browser Titelzeile gezeigt wird).
 */
declare class HeaderTitle extends React.Component<any, any, any> {
    static get defaultProps(): {
        keepAppTitle: boolean;
    };
    uniqueId: string;
    setDocumentTitle(): void;
}
declare namespace HeaderTitle {
    export namespace propTypes {
        export const logo: PropTypes.Requireable<string>;
        export const appTitle: PropTypes.Requireable<string>;
        export const keepAppTitle: PropTypes.Requireable<boolean>;
        export const className: PropTypes.Requireable<string>;
        export const sidebar: PropTypes.Requireable<boolean>;
    }
}
import React from "react";
import PropTypes from "prop-types";
