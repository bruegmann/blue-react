import React, { useEffect, useState } from "react"
import Page from "../../components/Page"
import Body from "../../components/Body"
import { GitHubContent } from "../gitHubApiTypes"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { synthwave84 as syntaxHighlighterStyle } from "react-syntax-highlighter/dist/esm/styles/prism"
import { Footer } from "../components/Footer"

export function IntroductionPage() {
    const [appCode, setAppCode] = useState<string>("")
    const [pageCode, setPageCode] = useState<string>("")
    const [scssCode, setScssCode] = useState<string>("")

    const fetchFromGitHub = async (path: string) => {
        const url = `https://api.github.com/repos/bruegmann/cra-template-ts-blue/contents/template/${path}`
        const r = await fetch(`${url}`)

        const ghContent: GitHubContent = await r.json()

        if (ghContent.content) {
            const decoded = atob(ghContent.content)

            return decoded
        }
    }

    const fetchAppCode = async () => {
        setAppCode(await fetchFromGitHub("src/App.tsx") || "")
        setPageCode(await fetchFromGitHub("src/pages/HomePage.tsx") || "")
        setScssCode(await fetchFromGitHub("src/styles/main.scss") || "")
    }

    useEffect(() => {
        fetchAppCode()
    }, [])

    const sections = [
        {
            title: "Bootstrap",
            body: (
                <div>
                    An adapted Bootstrap is mainly used for the stylesheet.<br />
                    Bootstrap documentation is available here: <a href="https://getbootstrap.com/docs/">https://getbootstrap.com/docs/</a>
                </div>
            )
        },
        {
            title: "Implementation",
            body: (
                <div>
                    <p>
                        See the whole project: <a href="https://github.com/bruegmann/cra-template-ts-blue/tree/master/template" target="_blank" rel="noopener noreferrer">https://github.com/bruegmann/cra-template-ts-blue/tree/master/template</a>
                    </p>

                    <h2>App (app.tsx)</h2>
                    <SyntaxHighlighter style={syntaxHighlighterStyle} language="javascript">{appCode}</SyntaxHighlighter>

                    <h2 className="mt-3">Page (pages/HomePage.tsx)</h2>
                    <SyntaxHighlighter style={syntaxHighlighterStyle} language="javascript">{pageCode}</SyntaxHighlighter>

                    <h2 className="mt-3">CSS (main.scss)</h2>
                    <SyntaxHighlighter style={syntaxHighlighterStyle} language="css">{scssCode}</SyntaxHighlighter>
                </div>
            )
        }
    ]
    return (
        <Page>
            <Body containerClass="no-container d-flex flex-column docs-min-height-100vh">
                <div className="container flex-grow-1">
                    <div className="row">
                        <div className="col-md-12">
                            {sections.map((s, i) =>
                                <article key={i} id={"section-" + encodeURIComponent(s.title)}>
                                    <h1 className="page-header">{s.title}</h1>
                                    {s.body}
                                </article>
                            )}
                        </div>
                    </div>
                </div>
                <Footer />
            </Body>
        </Page>
    )
}
export default IntroductionPage