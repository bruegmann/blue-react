import { CSSProperties } from "react"
import HashLink from "../components/HashLink"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { synthwave84 as syntaxHighlighterStyle } from "react-syntax-highlighter/dist/esm/styles/prism"

export default function Tooltip() {
    return (
        <>
            <article className="mb-5">
                <HashLink id="blue-tooltip-up">
                    <code>.blue-tooltip-up</code>, <code>.blue-tooltip-down</code>, <code>.blue-tooltip-start</code>,{" "}
                    <code>.blue-tooltip-end</code>
                </HashLink>
                <p>
                    Data Attribute of element is used as an tooltip. To be used together with <code>data-tooltip</code>.
                    <br />
                    Usage:
                </p>
                <strong
                    data-tooltip="Put your tooltip text here. It can also become pretty long if you want to."
                    className="blue-tooltip-up"
                >
                    Hover me!
                </strong>
                <SyntaxHighlighter
                    style={syntaxHighlighterStyle}
                    language="html"
                >{`<strong data-tooltip="Put your tooltip text here" className="blue-tooltip-up">
Hover me!
</strong>`}</SyntaxHighlighter>
            </article>

            <article className="mb-5">
                <HashLink id="blue-tooltip-nowrap">
                    <code>.blue-tooltip-nowrap</code>
                </HashLink>
                <p>
                    Avoid wrapping in the tooltip text. Together with CSS variable <code>--bs-tooltip-max-width</code>{" "}
                    you can limit the width.
                    <br />
                    Usage:
                </p>
                <strong
                    data-tooltip="Put your tooltip text here. It can also become pretty long if you want to."
                    className="blue-tooltip-start blue-tooltip-nowrap"
                    style={{ "--bs-tooltip-max-width": "600px" } as CSSProperties}
                >
                    Or me! My tooltip is not wrapping and is just one line. With a css variable for max-width.
                </strong>
                <SyntaxHighlighter style={syntaxHighlighterStyle} language="html">{`<strong
data-tooltip="Put your tooltip text here. It can also become pretty long if you want to."
className="blue-tooltip-start blue-tooltip-nowrap"
style={{ "--bs-tooltip-max-width": "600px" } as CSSProperties}
>
Or me! My tooltip is not wrapping and is just one line.
</strong>`}</SyntaxHighlighter>
            </article>
        </>
    )
}
