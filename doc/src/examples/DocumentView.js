import React from "react";
import { DocumentView } from "../../../index.js";

class DocumentViewExample extends React.Component {
    render() {
        return (
            <div>
                <DocumentView
                    src="http://www.pdf995.com/samples/pdf.pdf"
                    mimeType="application/pdf"
                />
            </div>
        );
    }
}

export default DocumentViewExample;