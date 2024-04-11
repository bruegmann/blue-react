import React from "react"
import Utilities from "../../components/Utilities"
import { PlayFill } from "react-bootstrap-icons"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { synthwave84 as syntaxHighlighterStyle } from "react-syntax-highlighter/dist/esm/styles/prism"
import Page from "../../components/Page"
import Body from "../../components/Body"
import { Footer } from "../components/Footer"

export interface UtilitiesPageProps {}

export interface UtilitiesPageState {
    content: any
    didScroll: boolean
}

const utilitiesFunctions = [
    {
        definition: "hasClass(el, className)",
        description: "Checks if element has a specific class name."
    },
    {
        definition: "addClass(el, className)",
        description: "Adds a class name to an element."
    },
    {
        definition: "removeClass(el, className)",
        description: "Removes a class name from an element."
    },
    {
        definition: "toggleClass(el, className)",
        description: "Adds class name to element, if it doesn't it yet. Otherwise it removes it."
    },
    {
        definition: "startLoading()",
        description: "Shows loading animation.",
        demo: (
            <button className="btn btn-light" onClick={() => Utilities.startLoading()}>
                <PlayFill />
            </button>
        )
    },
    {
        definition: "finishLoading()",
        description: "Hides loading animation.",
        demo: (
            <button className="btn btn-light" onClick={() => Utilities.finishLoading()}>
                <PlayFill />
            </button>
        )
    },
    {
        definition: "showSuccess()",
        description: "Shows success symbol.",
        demo: (
            <button className="btn btn-light" onClick={() => Utilities.showSuccess()}>
                <PlayFill />
            </button>
        )
    },
    {
        definition: "hideSuccess()",
        description: "Hides success symbol.",
        demo: (
            <button className="btn btn-light" onClick={() => Utilities.hideSuccess()}>
                <PlayFill />
            </button>
        )
    },
    {
        definition: "toggleActions()",
        description: "Shows action menu or hides it."
    },
    {
        definition: "setAlertMessage(message, alertClassName, close, detailText)",
        description: (
            <span>
                Shows an alert message.
                <br />
                Possible values for alertClassName: <code>loading</code>, <code>success</code>, <code>info</code>,{" "}
                <code>warning</code>, <code>danger</code>
            </span>
        ),
        demo: (
            <button
                className="btn btn-light"
                onClick={() =>
                    Utilities.setAlertMessage(
                        "Hey, this is a message",
                        "danger",
                        true,
                        `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.   

                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
`
                    )
                }
            >
                <PlayFill />
            </button>
        )
    },
    {
        definition: "resetAlertMessage(alertClassName)",
        description: "Resets alert message and removes it.",
        demo: (
            <button className="btn btn-light" onClick={() => Utilities.resetAlertMessage("danger")}>
                <PlayFill />
            </button>
        )
    },
    {
        definition: "guid()",
        description: "Returns string of random characters.",
        demo: (
            <button className="btn btn-light" onClick={() => alert("Generated GUID: " + Utilities.guid())}>
                <PlayFill />
            </button>
        )
    },
    {
        definition: "scrollToTop()",
        description: "Scrolls to the top of the page.",
        demo: (
            <button className="btn btn-light" onClick={() => Utilities.scrollToTop()}>
                <PlayFill />
            </button>
        )
    },
    {
        definition: "fetchData(input, init?, showErrorDetail? = true)",
        description: (
            <span>
                Uses native <code>fetch</code> function, but adds error handling and shows error messages if there are
                any.
            </span>
        )
    }
]

export class UtilitiesPage extends React.Component<UtilitiesPageProps, UtilitiesPageState> {
    constructor(props: UtilitiesPageProps) {
        super(props)

        this.state = {
            content: [],
            didScroll: false
        }
    }
    componentDidMount() {
        document.querySelector(".router-page.active")!.addEventListener("scroll", () => {
            if (!this.state.didScroll) {
                this.setState({ didScroll: true })
            }
        })
    }
    render() {
        const sections = [
            {
                title: "JavaScript Functions",
                body: (
                    <>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Definition</th>
                                    <th>Description</th>
                                    <th>Demo</th>
                                </tr>
                            </thead>

                            <tbody>
                                {utilitiesFunctions
                                    .sort((a, b) =>
                                        a.definition > b.definition ? 1 : b.definition > a.definition ? -1 : 0
                                    )
                                    .map((fun, index) => (
                                        <tr key={index}>
                                            <td>
                                                <code>Utilities.{fun.definition}</code>
                                            </td>
                                            <td>{fun.description}</td>
                                            {fun.demo ? <td>{fun.demo}</td> : <td />}
                                        </tr>
                                    ))}
                            </tbody>
                        </table>

                        <h2 className="page-header">Example</h2>
                        <SyntaxHighlighter
                            style={syntaxHighlighterStyle}
                            language="javascript"
                        >{`import { Utilities } from "blue-react"
                            
Utilities.startLoading()`}</SyntaxHighlighter>
                    </>
                )
            }
        ]
        return (
            <Page>
                <Body containerClass="no-container pt-5 pt-md-0 d-flex flex-column docs-min-height-100vh">
                    <div className="container flex-grow-1">
                        <div className="row">
                            <div className="col-md-12">
                                {sections.map((s, i) => (
                                    <article key={i} id={"section-" + encodeURIComponent(s.title)}>
                                        <h2 className="page-header">{s.title}</h2>
                                        {s.body}
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>

                    <Footer />
                </Body>
            </Page>
        )
    }
}
export default UtilitiesPage
