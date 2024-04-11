import { CheckCircle, CheckCircleFill } from "react-bootstrap-icons"
import HashLink from "../components/HashLink"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { synthwave84 as syntaxHighlighterStyle } from "react-syntax-highlighter/dist/esm/styles/prism"

export default function Visibility() {
    return (
        <>
            <article className="mb-5">
                <HashLink id="blue-opacity-hover">
                    <code>.blue-opacity-hover</code>, <code>.blue-opacity-hover-content-active</code>,{" "}
                    <code>.blue-opacity-hover-content-default</code>
                </HashLink>
                <p>
                    With <code>.blue-opacity-hover</code> you can hide things by default and let them appear when the
                    user hovers the area around it or focuses an element inside.
                    <br />
                    This way you can simplify the UI a bit and make controls disappear when they are not needed. On
                    touch screens the elements will always be visible.
                    <br />
                    Usage:
                </p>

                <div className="card blue-opacity-hover p-3 flex-row justify-content-between">
                    <h5 className="blue-opacity-hover-content-default">Hover here to see a button</h5>
                    <input
                        type="text"
                        className="form-control me-1"
                        placeholder="When you focus me, the button should appear too"
                    />
                    <button className="btn btn-secondary blue-opacity-hover-content-active">Hey there</button>
                </div>
                <SyntaxHighlighter
                    style={syntaxHighlighterStyle}
                    language="html"
                >{`<div className="card blue-opacity-hover p-3 flex-row justify-content-between">
    <h5 className="blue-opacity-hover-content-default">Hover here to see a button</h5>
    <input
        type="text"
        className="form-control me-1"
        placeholder="When you focus me, the button should appear too"
    />
    <button className="btn btn-secondary blue-opacity-hover-content-active">Hey there</button>
</div>`}</SyntaxHighlighter>
            </article>

            <article className="mb-5">
                <HashLink id="blue-d-hover">
                    <code>.blue-d-hover</code>, <code>.blue-d-hover-content-active</code>,{" "}
                    <code>.blue-d-hover-content-default</code>
                </HashLink>
                <p>
                    <code>.blue-d-hover</code> is similar to <code>.blue-opacity-hover</code>, but the elements will
                    disappear and appear with the <code>display</code> property.
                    <br />
                    It is ideal if you want to replace something with something else when the user hovers. On the
                    example I used it to change the edit and delete icons from lineout to filled when hovering.
                    <br />
                    Usage:
                </p>

                <button className="btn btn-secondary blue-d-hover d-inline-flex align-items-center gap-1">
                    <CheckCircle className="blue-d-hover-content-default" />
                    <CheckCircleFill className="blue-d-hover-content-active" /> Hover to fill the icon
                </button>
                <SyntaxHighlighter
                    style={syntaxHighlighterStyle}
                    language="html"
                >{`<button className="btn btn-secondary blue-d-hover d-inline-flex align-items-center gap-1">
    <CheckCircle className="blue-d-hover-content-default" />
    <CheckCircleFill className="blue-d-hover-content-active" /> Hover to fill the icon
</button>`}</SyntaxHighlighter>
            </article>
        </>
    )
}
