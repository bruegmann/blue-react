import React, { Fragment, useEffect } from "react"
import Utilities from "./Utilities"

export interface DocumentViewProps {
    /**
     * Source of the content (URL)
     */
    src?: string

    /**
     * Instead of a source, you can also set the content directly (HTML)
     */
    content?: string

    /**
     * MIME type of the content (e.g. "application/pdf")
     */
    mimeType: string

    /**
     * Label for the button to display
     */
    showDocumentLabel: string
}

/**
 * @deprecated Only used by one project (Florence). Component will be moved to that project instead.
 * Tries to display content in an iframe. When the content can't displayed in an iframe, it will show a download button instead.
 */
export default function DocumentView({
    content,
    mimeType,
    src = "about:blank",
    showDocumentLabel = "Show document"
}: DocumentViewProps) {
    const uniqueId = "document-view-" + Utilities.guid()

    const supportsIframe = () =>
        mimeType === "application/pdf" ||
        mimeType === "image/png" ||
        mimeType === "image/jpeg" ||
        mimeType === "image/gif" ||
        mimeType === "image/tiff" ||
        mimeType === "image/bmp" ||
        mimeType === "image/x-bmp" ||
        mimeType === "image/x-ms-bmp" ||
        mimeType === "text/plain" ||
        mimeType === "text/html"

    useEffect(() => {
        if (supportsIframe()) {
            Utilities.startLoading()

            if (content) {
                let iframe = document.getElementById(uniqueId) as HTMLIFrameElement

                if (iframe && iframe.contentWindow) {
                    iframe.contentWindow.document.open()
                    iframe.contentWindow.document.write(content)
                    iframe.contentWindow.document.close()
                }
            }
        }
    }, [])

    return (
        <Fragment>
            {supportsIframe() ? (
                <iframe
                    id={uniqueId}
                    className="document-view-iframe border-0 w-100 d-block"
                    style={{
                        height: "calc(100vh - 6.875rem)"
                    }}
                    src={src}
                    onLoad={({ target }: any) => {
                        Utilities.finishLoading()

                        const iframeContent = target.contentDocument || target.contentWindow.document

                        if (mimeType.indexOf("image/") > -1) {
                            let image = iframeContent.querySelector("img")

                            if (image) {
                                if (image.offsetWidth > image.offsetHeight) {
                                    image.style.width = "100%"
                                } else {
                                    image.style.height = "100%"
                                }
                            }
                        }
                    }}
                />
            ) : (
                <a href={src} className="btn btn-secondary btn-lg d-block">
                    {showDocumentLabel}
                </a>
            )}
        </Fragment>
    )
}
