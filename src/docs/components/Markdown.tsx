import ReactMarkdown from "react-markdown"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { synthwave84 as syntaxHighlighterStyle } from "react-syntax-highlighter/dist/esm/styles/prism"

export interface MarkdownProps {
    children: string
}

export default function Markdown({ children }: MarkdownProps) {
    return (
        <ReactMarkdown
            children={children}
            components={{
                code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || "")
                    return !inline && match ? (
                        <SyntaxHighlighter
                            children={String(children).replace(/\n$/, "")}
                            style={syntaxHighlighterStyle as { [key: string]: any }}
                            language={match[1]}
                            PreTag="div"
                            {...props}
                        />
                    ) : (
                        <code className={className} {...props}>
                            {children}
                        </code>
                    )
                }
            }}
            urlTransform={(src: string) =>
                `https://raw.githubusercontent.com/bruegmann/blue-react/master/recipes/${src}`
            }
        />
    )
}
