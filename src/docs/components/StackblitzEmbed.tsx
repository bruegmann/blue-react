import { useState } from "react"
import { PencilSquare, PlayFill } from "react-bootstrap-icons"
import image from "../images/stackblitz.png"

export default function StackblitzEmbed() {
    const [loadIframe, setLoadIframe] = useState<boolean>(false)

    return (
        <>
            {loadIframe ? (
                <div className="ratio ratio-16x9 bg-light rounded">
                    <iframe
                        className="rounded"
                        src="https://stackblitz.com/edit/blue-react-app-stackblitz-rr6xeh?embed=1&file=index.tsx&hideExplorer=1"
                    />
                </div>
            ) : (
                <div
                    className="bg-primary text-white rounded p-4 d-flex justify-content-between"
                    style={{ backgroundImage: `url(${image})` }}
                >
                    <div>
                        <h5>
                            Do you want to load external content from
                            Stackblitz?
                        </h5>
                        <p>
                            It will contain a live editor, which lets you edit a
                            demo app with Blue React.
                        </p>

                        <button
                            className="btn btn-white d-inline-flex align-items-center"
                            onClick={() => setLoadIframe(true)}
                        >
                            <PlayFill className="me-1" /> Load content
                        </button>
                        <a
                            className="btn btn-link text-white"
                            href="https://stackblitz.com/edit/blue-react-app-stackblitz-rr6xeh?"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Open content in new tab
                        </a>
                        <a
                            className="btn btn-link text-white"
                            href="https://stackblitz.com/privacy-policy"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Privacy Policy by Stackblitz
                        </a>
                    </div>
                    <h1 className="display-1">
                        <PencilSquare />
                    </h1>
                </div>
            )}
        </>
    )
}
