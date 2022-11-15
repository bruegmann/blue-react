import React, { ReactNode, useEffect, useState } from "react"
import Utilities from "../../components/Utilities"
import { CheckCircle, CheckCircleFill, PlayFill } from "react-bootstrap-icons"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { synthwave84 as syntaxHighlighterStyle } from "react-syntax-highlighter/dist/esm/styles/prism"
import Page from "../../components/Page"
import Body from "../components/BodyRounded"
import { NormalScrollbarDemo } from "../components/NormalScrollbarDemo"
import { Footer } from "../components/Footer"
import HashLink from "../components/HashLink"
import TestCssVars from "../components/TestCssVars"

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
        // demo: (<Fragment>
        //     <button className="btn btn-light"
        //     // onClick={() => {
        //     //     const url = "https://jsonplaceholder.typicode.com/todos/1"

        //     //     Utilities.startLoading()

        //     //     Utilities.fetchData(url)
        //     //         .then((res: any) => {
        //     //             Utilities.finishLoading()
        //     //             return res.json()
        //     //         })
        //     //         .then((json: any) => alert(`Here is the result of ${url}:\n\n ${JSON.stringify(json)}`))
        //     // }}
        //     >
        //         <PlayFill />
        //     </button>
        // </Fragment>)
    }
]

function CssVarDemo({ variable, render }: { variable: string; render: (value: string) => ReactNode }) {
    const [value, setValue] = useState<string>()

    const init = () => {
        const el = document.getElementById(variable)
        if (el) {
            setValue(window.getComputedStyle(el).getPropertyValue(variable))
        }
    }

    useEffect(() => {
        init()
        window.addEventListener("resize", init)

        return () => {
            window.removeEventListener("resize", init)
        }
    }, [])

    return (
        <>
            <p>
                Current value: <code>{value}</code>
                <br />
                {value && render(value)}
            </p>
        </>
    )
}

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
                title: "CSS Variables",
                body: (
                    <>
                        <TestCssVars />
                        <article className="mb-5 mt-5">
                            <HashLink id="--blue-sidebar-width">
                                <code>--blue-sidebar-width</code>
                            </HashLink>
                            <p>Contains current width of the sidebar.</p>
                            <CssVarDemo
                                variable="--blue-sidebar-width"
                                render={(value: string) => (
                                    <div
                                        className="border border-primary border-5 rounded p-1 d-inline-block"
                                        style={{ width: value }}
                                    />
                                )}
                            />
                        </article>

                        <article className="mb-5">
                            <HashLink id="--blue-theme">
                                <code>--blue-theme</code>
                            </HashLink>
                            <p>
                                Theme color, defined using SCSS variable <code>$theme</code>.
                            </p>
                            <CssVarDemo
                                variable="--blue-theme"
                                render={(value: string) => (
                                    <div
                                        className="border-5 rounded p-3 d-inline-block"
                                        style={{ backgroundColor: value }}
                                    >
                                        <input type="color" value={value.trim()} />
                                    </div>
                                )}
                            />
                        </article>
                    </>
                )
            },
            {
                title: "Useful CSS classes",
                body: (
                    <>
                        <article className="mb-5">
                            <HashLink id="blue-sidebar-bottom">
                                <code>.blue-sidebar-bottom</code>
                            </HashLink>
                            <p>
                                With Sidebar Bottom, for example, a registered user can be displayed at the bottom left.
                                Usable within <code>&lt;SidebarMenu {"bottomContent={}"} /&gt;</code>.
                            </p>
                        </article>

                        <article className="mb-5">
                            <HashLink id="blue-sidebar-hidden-on-open">
                                <code>.blue-sidebar-hidden-on-open</code>
                            </HashLink>
                            <p>The element is hidden as long as the sidebar is open.</p>
                        </article>

                        <article className="mb-5">
                            <HashLink id="blue-sidebar-visible-on-open">
                                <code>.blue-sidebar-visible-on-open</code>
                            </HashLink>
                            <p>The element is visible as long as the sidebar is open.</p>
                        </article>

                        <article className="mb-5">
                            <HashLink id="blue-normal-scrollbar">
                                <code>.blue-normal-scrollbar</code>
                            </HashLink>
                            <p>
                                {
                                    "Normalizes elements in areas which still should not have the theme colors for their scrollbars. "
                                }
                                <NormalScrollbarDemo />
                            </p>
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
                            <HashLink id="form-horizontal">
                                <code>.form-horizontal</code>
                            </HashLink>
                            <p>
                                To be used together with{" "}
                                <a href="https://getbootstrap.com/docs/5.1/forms/layout/#horizontal-form">
                                    Bootstraps solutions
                                </a>
                                . <code>.form-horizontal</code> arranges the labels on the right on larger screens.
                            </p>
                        </article>

                        <article className="mb-5">
                            <HashLink id="w-bla-sidebar-width">
                                <code>.w-bla-sidebar-width</code>
                            </HashLink>
                            <p>
                                Gives element the width of the sidebar, defined with <code>$bla-sidebar-width</code>.
                            </p>
                        </article>

                        <article className="mb-5">
                            <HashLink id="blue-tooltip-up">
                                <code>.blue-tooltip-up</code>, <code>.blue-tooltip-down</code>,{" "}
                                <code>.blue-tooltip-start</code>, <code>.blue-tooltip-end</code>
                            </HashLink>
                            <p>
                                Data Attribute of element is used as an tooltip. To be used together with{" "}
                                <code>data-tooltip</code>.<br />
                                Usage:
                            </p>
                            <strong data-tooltip="Put your tooltip text here" className="blue-tooltip-up">
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
                            <HashLink id="blue-btn-silent">
                                <code>.blue-btn-silent</code>
                            </HashLink>
                            <p>
                                Removes border when the button is in normal state (no hover). Should be used together
                                with <code>.btn-outline-*</code>.<br />
                                Usage:
                            </p>
                            <button className="btn btn-outline-secondary blue-btn-silent">Button</button>
                            <SyntaxHighlighter
                                style={syntaxHighlighterStyle}
                                language="html"
                            >{`<button className="btn btn-outline-secondary blue-btn-silent">
    Button
</button>`}</SyntaxHighlighter>
                        </article>

                        <article className="mb-5">
                            <HashLink id="blue-opacity-hover">
                                <code>.blue-opacity-hover</code>, <code>.blue-opacity-hover-content-active</code>,{" "}
                                <code>.blue-opacity-hover-content-default</code>
                            </HashLink>
                            <p>
                                With <code>.blue-opacity-hover</code> you can hide things by default and let them appear
                                when the user hovers the area around it.
                                <br />
                                This way you can simplify the UI a bit and make controls disappear when they are not
                                needed. On touch screens the elements will always be visible.
                                <br />
                                Usage:
                            </p>

                            <div className="card blue-opacity-hover p-3 flex-row justify-content-between">
                                <h5 className="blue-opacity-hover-content-default">Hover here to see a button</h5>
                                <button className="btn btn-secondary blue-opacity-hover-content-active">
                                    Hey there
                                </button>
                            </div>
                            <SyntaxHighlighter
                                style={syntaxHighlighterStyle}
                                language="html"
                            >{`<div className="card blue-opacity-hover p-3 flex-row justify-content-between">
    <h5 className="blue-opacity-hover-content-default">Hover here to see a button</HashLink>
    <button className="btn btn-secondary blue-opacity-hover-content-active">Hey there</button>
</div>`}</SyntaxHighlighter>
                        </article>

                        <article className="mb-5">
                            <HashLink id="blue-d-hover">
                                <code>.blue-d-hover</code>, <code>.blue-d-hover-content-active</code>,{" "}
                                <code>.blue-d-hover-content-default</code>
                            </HashLink>
                            <p>
                                <code>.blue-d-hover</code> is similar to <code>.blue-opacity-hover</code>, but the
                                elements will disappear and appear with the <code>display</code> property.
                                <br />
                                It is ideal if you want to replace something with something else when the user hovers.
                                On the example I used it to change the edit and delete icons from lineout to filled when
                                hovering.
                                <br />
                                Usage:
                            </p>

                            <button className="btn blue-d-hover d-inline-flex align-items-center gap-1">
                                <CheckCircle className="blue-d-hover-content-default" />
                                <CheckCircleFill className="blue-d-hover-content-active" /> Hover to fill the icon
                            </button>
                            <SyntaxHighlighter
                                style={syntaxHighlighterStyle}
                                language="html"
                            >{`<button className="btn blue-d-hover d-inline-flex align-items-center gap-1">
    <CheckCircle className="blue-d-hover-content-default" />
    <CheckCircleFill className="blue-d-hover-content-active" /> Hover to fill the icon
</button>`}</SyntaxHighlighter>
                        </article>
                    </>
                )
            },
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
                                        <h1 className="page-header">{s.title}</h1>
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
