import HashLink from "../components/HashLink"
import ButtonsExample from "../examples/css/ButtonsExample"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { synthwave84 as syntaxHighlighterStyle } from "react-syntax-highlighter/dist/esm/styles/prism"

export default function Buttons() {
    return (
        <>
            <article className="mb-5">
                <HashLink id="blue-btn-smooth">
                    <code>.blue-btn-soft-*</code>
                </HashLink>
                <p>
                    A soft variant of Bootstrap's buttons. Always use together with <code>.btn</code>!
                </p>

                <ButtonsExample variant="soft" />
            </article>

            <article className="mb-5">
                <HashLink id="blue-btn-plain">
                    <code>.blue-btn-plain-*</code>
                </HashLink>
                <p>
                    A plain variant of Bootstrap's buttons. Always use together with <code>.btn</code>!
                </p>

                <ButtonsExample variant="plain" />
            </article>

            <article className="mb-5">
                <HashLink id="btn-black">
                    <code>.btn-black</code>, <code>.btn-outline-black</code>
                </HashLink>
                <p>Additionally Bootstrap theme variable "black" for always black buttons.</p>
            </article>

            <article className="mb-5">
                <HashLink id="btn-white">
                    <code>.btn-white</code>, <code>.btn-outline-white</code>
                </HashLink>
                <p>Additionally Bootstrap theme variable "white" for always white buttons.</p>
            </article>

            <article className="mb-5">
                <HashLink id="blue-btn-silent">
                    <code>.blue-btn-silent</code>
                </HashLink>
                <p>
                    Removes border when the button is in normal state (no hover). Should be used together with{" "}
                    <code>.btn-outline-*</code>.<br />
                    Usage:
                </p>
                <button className="btn btn-outline-secondary blue-btn-silent">Button</button>
                <SyntaxHighlighter
                    style={syntaxHighlighterStyle}
                    language="html"
                >{`<button className="btn btn-outline-secondary blue-btn-silent">Button</button>`}</SyntaxHighlighter>
            </article>
        </>
    )
}
