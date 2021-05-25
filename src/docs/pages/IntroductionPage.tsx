import React, { useEffect, useState } from "react"
import Page from "../../components/Page"
import Body from "../../components/Body"
import Highlight from "react-highlight"
import { GitHubContent } from "../gitHubApiTypes"

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
                    <Highlight className="js">{appCode}</Highlight>

                    <h2>Page (pages/HomePage.tsx)</h2>
                    <Highlight className="js">{pageCode}</Highlight>

                    <h2>CSS (main.scss)</h2>
                    <Highlight className="css">{scssCode}</Highlight>
                </div>
            )
        }
    ]
    return (
        <Page>
            <Body containerClass="container">
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
            </Body>
        </Page>
    )
}
export default IntroductionPage