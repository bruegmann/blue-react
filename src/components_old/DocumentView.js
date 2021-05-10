import React from "react";
import PropTypes from "prop-types";

import Utilities from "./Utilities";

/**
 * Tries to display content in an iframe. When the content can't displayed in an iframe, it will show a download button instead.
 */
class DocumentView extends React.Component {
    constructor() {
        super();

        this.uniqueId = "document-view-" + Utilities.guid();
    }

    static get defaultProps() {
        return {
            src: "about:blank",
            showDocumentLabel: "Show document"
        };
    }

    componentDidMount() {
        if (this.supportsIframe()) {
            Utilities.startLoading();

            if (this.props.content) {
                let iframe = document.getElementById(this.uniqueId);

                iframe.contentWindow.document.open();
                iframe.contentWindow.document.write(this.props.content);
                iframe.contentWindow.document.close();
            }
        }
    }

    supportsIframe() {
        return this.props.mimeType === "application/pdf" ||
            this.props.mimeType === "image/png" ||
            this.props.mimeType === "image/jpeg" ||
            this.props.mimeType === "image/gif" ||
            this.props.mimeType === "image/tiff" ||
            this.props.mimeType === "text/plain" ||
            this.props.mimeType === "text/html";
    }

    render() {
        return (
            <div>
                {this.supportsIframe() ?
                    <iframe
                        id={this.uniqueId}
                        className="document-view-iframe"
                        src={this.props.src}
                        onLoad={({ target }) => {
                            Utilities.finishLoading();

                            const iframeContent = target.contentDocument || target.contentWindow.document;

                            if (this.props.mimeType.indexOf("image/") > -1) {
                                let image = iframeContent.querySelector("img");

                                if (image) {
                                    if (image.offsetWidth > image.offsetHeight) {
                                        image.style.width = "100%";
                                    }
                                    else {
                                        image.style.height = "100%";
                                    }
                                }
                            }

                        }}
                    />
                    :
                    <a href={this.props.src} className="btn btn-secondary btn-lg btn-block">
                        {this.props.showDocumentLabel}
                    </a>

                }
            </div>
        );
    }
}

DocumentView.propTypes = {
    /**
     * Source of the content (URL)
     */
    src: PropTypes.string,

    /**
     * Instead of a source, you can also set the content directly (HTML)
     */
    content: PropTypes.any,

    /**
     * MIME type of the content (e.g. "application/pdf")
     */
    mimeType: PropTypes.string.isRequired,

    /**
     * Label for the button to display
     */
    showDocumentLabel: PropTypes.string
};

export default DocumentView;