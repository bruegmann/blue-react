import React from "react"
import DocumentView from "../../components/DocumentView"

class DocumentViewExample extends React.Component {
    render() {
        return (
            <div>
                <DocumentView
                    src="/blue-react/v7/example-document.pdf"
                    mimeType="application/pdf"
                />
            </div>
        )
    }
}

export default DocumentViewExample
