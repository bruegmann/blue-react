import React from "react"
import FluentBtn from "../../components/FluentBtn"
import Utilities from "../../components/Utilities"
import { PlayFill } from "react-bootstrap-icons"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { synthwave84 as syntaxHighlighterStyle } from "react-syntax-highlighter/dist/esm/styles/prism"
import Page from "../../components/Page"
import Body from "../../components/Body"
import { NormalScrollbarDemo } from "../components/NormalScrollbarDemo"
import { Footer } from "../components/Footer"

export interface UtilitiesPageProps { }

export interface UtilitiesPageState {
    content: any,
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
        demo: (<FluentBtn className="btn btn-light" onClick={() => Utilities.startLoading()}>
            <PlayFill />
        </FluentBtn>)
    },
    {
        definition: "finishLoading()",
        description: "Hides loading animation.",
        demo: (<FluentBtn className="btn btn-light" onClick={() => Utilities.finishLoading()}>
            <PlayFill />
        </FluentBtn>)
    },
    {
        definition: "showSuccess()",
        description: "Shows success symbol.",
        demo: (<FluentBtn className="btn btn-light" onClick={() => Utilities.showSuccess()}>
            <PlayFill />
        </FluentBtn>)
    },
    {
        definition: "hideSuccess()",
        description: "Hides success symbol.",
        demo: (<FluentBtn className="btn btn-light" onClick={() => Utilities.hideSuccess()}>
            <PlayFill />
        </FluentBtn>)
    },
    {
        definition: "toggleActions()",
        description: "Shows action menu or hides it."
    },
    {
        definition: "setAlertMessage(message, alertClassName, close, detailText)",
        description: (<span>Shows an alert message.<br />
            Possible values for alertClassName:{" "}
            <code>loading</code>, <code>success</code>, <code>info</code>, <code>warning</code>, <code>danger</code></span>),
        demo: (<FluentBtn className="btn btn-light"
            onClick={() => Utilities.setAlertMessage("Hey, dies ist eine Nachricht",
                "danger", true, `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.   

                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
`)}
        >
            <PlayFill />
        </FluentBtn>)
    },
    {
        definition: "resetAlertMessage(alertClassName)",
        description: "Resets alert message and removes it.",
        demo: (<FluentBtn className="btn btn-light"
            onClick={() => Utilities.resetAlertMessage("danger")}
        >
            <PlayFill />
        </FluentBtn>)
    },
    {
        definition: "guid()",
        description: "Returns string of random characters.",
        demo: (<FluentBtn className="btn btn-light"
            onClick={() => alert("Generated GUID: " + Utilities.guid())}
        >
            <PlayFill />
        </FluentBtn>)
    },
    {
        definition: "scrollToTop()",
        description: "Scrolls to the top of the page.",
        demo: (<FluentBtn className="btn btn-light"
            onClick={() => Utilities.scrollToTop()}
        >
            <PlayFill />
        </FluentBtn>)
    },
    {
        definition: "registerFluentBtns()",
        description: "Enables the effect of Fluent buttons."
    },
    {
        definition: "unregisterFluentBtns()",
        description: "Disables the effect of Fluent buttons."
    },
    {
        definition: "fetchData(input, init?, showErrorDetail? = true)",
        description: <span>Uses native <code>fetch</code> function, but adds error handling and shows error messages if there are any.</span>,
        // demo: (<Fragment>
        //     <FluentBtn className="btn btn-light"
        //     // onClick={() => {
        //     //     const url = "https://jsonplaceholder.typicode.com/todos/1";

        //     //     Utilities.startLoading();

        //     //     Utilities.fetchData(url)
        //     //         .then((res: any) => {
        //     //             Utilities.finishLoading();
        //     //             return res.json();
        //     //         })
        //     //         .then((json: any) => alert(`Here is the result of ${url}:\n\n ${JSON.stringify(json)}`));
        //     // }}
        //     >
        //         <PlayFill />
        //     </FluentBtn>
        // </Fragment>)
    }
];

export class UtilitiesPage extends React.Component<UtilitiesPageProps, UtilitiesPageState> {
    constructor(props: UtilitiesPageProps) {
        super(props);

        this.state = {
            content: [],
            didScroll: false
        }
    }
    componentDidMount() {

        document.querySelector(".router-page.active")!.addEventListener("scroll", () => {
            if (!this.state.didScroll) {
                this.setState({ didScroll: true });
            }
        });
    }
    render() {
        const sections = [
            {
                title: "Utilities",
                body: (
                    <div>
                        <p>A static class with a few useful helper functions</p>

                        <h2 className="page-header">Useful CSS-Classes</h2>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Definition</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><code>.blue-app-header-form</code></td>
                                    <td>
                                        Can be used within <code>{`<Page.Header.Actions />`}</code> to include a form in the Action-Bar.
                                        Can be combined with <code>.form-horizontal</code>.
                                    </td>
                                </tr>
                                <tr>
                                    <td><code>.blue-app-sidebar-bottom</code></td>
                                    <td>
                                        With Sidebar Bottom, for example, a registered user can be displayed at the bottom left. Usable within <code>&lt;SidebarMenu /&gt;</code>.
                                    </td>
                                </tr>
                                <tr>
                                    <td><code>.blue-app-sidebar-hidden-on-open</code></td>
                                    <td>
                                        The element is hidden as long as the sidebar is open.
                                    </td>
                                </tr>
                                <tr>
                                    <td><code>.blue-app-sidebar-visible-on-open</code></td>
                                    <td>
                                        The element is visible as long as the sidebar is open.
                                    </td>
                                </tr>
                                <tr>
                                    <td><code>.blue-normal-scrollbar</code></td>
                                    <td>
                                        <span className="badge bg-primary">NEW</span> {"Normalizes elements in areas which still should not have the theme colors for their scrollbars. "}
                                        <NormalScrollbarDemo />
                                    </td>
                                </tr>
                                <tr>
                                    <td><code>.btn-black</code>, <code>.btn-outline-black</code></td>
                                    <td>
                                        Additionally Bootstrap theme variable "black" for always black buttons.
                                    </td>
                                </tr>
                                <tr>
                                    <td><code>.btn-white</code>, <code>.btn-outline-white</code></td>
                                    <td>
                                        Additionally Bootstrap theme variable "white" for always white buttons.
                                    </td>
                                </tr>
                                <tr>
                                    <td><code>.form-control.underlined</code></td>
                                    <td>
                                        <span>Use underlined look for controls instead of the Bootstrap default.</span>
                                        <input className="form-control underlined mb-1" placeholder="Like this (.form-control.underlined)" />
                                        <input className="form-control" placeholder="Instead of this (.form-control)" />
                                    </td>
                                </tr>
                                <tr>
                                    <td><code>.form-horizontal</code></td>
                                    <td>
                                        To be used together with <a href="https://getbootstrap.com/docs/4.0/components/forms/#horizontal-form">Bootstraps Solutions</a>
                                        &nbsp;. <code>.form-horizontal</code> arranges the labels on the right on larger screens.
                                    </td>
                                </tr>
                                <tr>
                                    <td><code>.form-switch</code></td>
                                    <td>
                                        Switch-Control. Usage: <code>&lt;label className="form-switch"&gt;&lt;input type="checkbox" /&gt;&lt;i /&lt; Do it!&lt;/label&gt;</code>
                                    </td>
                                </tr>
                                <tr>
                                    <td><code>.w-bla-sidebar-width</code></td>
                                    <td>
                                        Gives element the width of the sidebar, defined with <code>$bla-sidebar-width</code>.
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <h2 className="page-header">JavaScript Functions</h2>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Definition</th>
                                    <th>Description</th>
                                    <th>Demo</th>
                                </tr>
                            </thead>

                            <tbody>
                                {utilitiesFunctions.sort((a, b) => (a.definition > b.definition) ? 1 : ((b.definition > a.definition) ? -1 : 0)).map((fun, index) =>
                                    <tr key={index}>
                                        <td><code>Utilities.{fun.definition}</code></td>
                                        <td>{fun.description}</td>
                                        {fun.demo ? <td>{fun.demo}</td> : <td />}
                                    </tr>
                                )}
                            </tbody>
                        </table>

                        <h2 className="page-header">Example</h2>
                        <SyntaxHighlighter style={syntaxHighlighterStyle} language="javascript">{`import { Utilities } from "blue-react"
                            
Utilities.startLoading()`}</SyntaxHighlighter>
                    </div>
                )
            }
        ];
        return (
            <Page>
                <Body containerClass="no-container pt-5 pt-md-0 d-flex flex-column docs-min-height-100vh">
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
        );
    }
}
export default UtilitiesPage;