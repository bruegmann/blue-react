import React from "react";
import PropTypes from "prop-types";

import Utilities from "./Utilities";

/**
 * Der Titel-Bereich in der Kopf-Leiste.
 * Anhand dessen wird auch der Dokumenten-Titel gesetzt (was in der Browser Titelzeile gezeigt wird).
 */
class HeaderTitle extends React.Component {
    static get defaultProps() {
        return {
            keepAppTitle: false
        };
    }

    constructor() {
        super();
        this.uniqueId = "HeaderTitle-" + Utilities.guid();
    }

    componentDidMount() {
        this.setDocumentTitle();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.children !== this.props.children) {
            this.setDocumentTitle();
        }
    }

    setDocumentTitle() {
        if (window.blueGridRef && window.blueGridRef.props && window.blueGridRef.props.disableTitleSet === false) {
            const element = document.querySelector(`#${this.uniqueId} .blue-app-header-logo-title-labels`);
            if (element && element.innerText) {
                document.querySelector("title").innerText = element.innerText;
            }
        }
    }

    render() {
        return (
            <h3 id={this.uniqueId} className="blue-app-header-logo">
                <span className="blue-app-header-logo-title">
                    {this.props.logo ? <span><a href="#"><img src={this.props.logo} className="blue-app-header-logo-image" /></a>&nbsp;</span> : ""}
                    <span className={"blue-app-header-logo-title-labels " + (this.props.keepAppTitle ? "keep" : "")}>
                        {this.props.appTitle ? <span><a href="#">{this.props.appTitle}</a> {(this.props.children ? "/" : "")}&nbsp;</span> : ""}
                        {this.props.children}
                    </span>
                </span>
            </h3>
        );
    }
}

HeaderTitle.propTypes = {
    /**
     * Kann ein Bild sein. Wird im src-Attribute implementiert.
     */
    logo: PropTypes.string,

    /**
     * Der Text, der neben dem Logo steht.
     */
    appTitle: PropTypes.string,

    /**
     * Deaktiviert, dass der App-Titel bei bestimmer Bildschirmgröße ausgeblendet wird.
     */
    keepAppTitle: PropTypes.bool
};

export default HeaderTitle;