import React from "react"
import DocumentView from "../../components/DocumentView"

class DocumentViewExample extends React.Component {
    render() {
        return (
            <div>
                <DocumentView
                    content={`<!DOCTYPE html>
                    <html lang="en">
                    
                    <head>
                        <meta charset="UTF-8">
                        <meta http-equiv="X-UA-Compatible" content="IE=edge">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Demo Document</title>
                    
                        <style type="text/css">
                            body {
                                background-color: #f2f2f2;
                                color: #222;
                                font-family: Arial, Helvetica, sans-serif;
                            }
                        </style>
                    </head>
                    
                    <body>
                        <h1>Hey, this is HTML content</h1>
                    </body>
                    
                    </html>`}
                />
            </div>
        )
    }
}

export default DocumentViewExample
