import React from "react"
import { useState } from "react"
import { PencilSquare, PlayFill } from "react-bootstrap-icons"
import FluentBtn from "../../components/FluentBtn"
const image = require("../images/stackblitz.png") as string

export default function StackblitzEmbed() {
    const [loadIframe, setLoadIframe] = useState<boolean>(false)

    return (
        <>
            {loadIframe ?
                <div className="embed-responsive embed-responsive-16by9 bg-light rounded">
                    <iframe className="embed-responsive-item rounded" src="https://stackblitz.com/edit/blue-react-app-stackblitz-tcfafa?embed=1&file=index.tsx&hideExplorer=1" />
                </div>
                :
                <div className="bg-primary text-white rounded p-4 d-flex justify-content-between" style={{ backgroundImage: `url(${image})` }}>
                    <div>
                        <h5>Do you want to load external content from Stackblitz?</h5>
                        <p>It will contain a live editor, which lets you edit a demo app with Blue React.</p>

                        <FluentBtn className="btn btn-white d-inline-flex align-items-center" light onClick={() => setLoadIframe(true)}><PlayFill className="me-1" /> Load content</FluentBtn>
                        <a className="btn btn-link text-white" href="https://stackblitz.com/edit/blue-react-app-stackblitz-tcfafa?" target="_blank" rel="noopener noreferrer">Open content in new tab</a>
                        <a className="btn btn-link text-white" href="https://stackblitz.com/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy by Stackblitz</a>

                    </div>
                    <h1 className="display-1"><PencilSquare /></h1>
                </div>
            }
        </>
    )
}