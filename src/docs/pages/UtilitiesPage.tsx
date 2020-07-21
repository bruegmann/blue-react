import React from "react";
import FluentBtn from "../../components/FluentBtn";
import Utilities from "../../components/Utilities";
import PlayFill from "../icons/PlayFill";
import Highlight from "react-highlight";
import Page from "../../components/Page";
import Header from "../../components/Header";
import { logo, appTitle } from "../Global";
import Body from "../../components/Body";

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
                "danger", true, "Hier ist noch mehr Text.")}
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
        definition: "fetchData(input, init?)",
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
                                    <td><code>.blue-app-header-form</code></td>
                                    <td>
                                        Can be used within <code>{`<Page.Header.Actions />`}</code> to include a form in the Action-Bar.
                                        Can be combined with <code>.form-horizontal</code>.
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
                                    <td><code>.form-control.default</code></td>
                                    <td>
                                        Restores the standard styling of Bootstrap.
                                    </td>
                                </tr>
                                <tr>
                                    <td><code>.form-switch</code></td>
                                    <td>
                                        Switch-Control. Usage: <code>&lt;label className="form-switch"&gt;&lt;input type="checkbox" /&gt;&lt;i /&lt; Do it!&lt;/label&gt;</code>
                                    </td>
                                </tr>
                                <tr>
                                    <td><code>.blue-app-sidebar-bottom</code></td>
                                    <td>
                                        With Sidebar Bottom, for example, a registered user can be displayed at the bottom left. Usable within <code>&lt;SidebarMenu /&gt;</code>.
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
                                        {fun.demo && <td>{fun.demo}</td>}
                                    </tr>
                                )}
                            </tbody>
                        </table>

                        <h2 className="page-header">Example</h2>
                        <Highlight className="js">{`import { Utilities } from "blue-react";
                            
Utilities.startLoading();`}</Highlight>
                    </div>
                )
            }
        ];
        return (
            <Page>
                <Header>
                    <Header.Title logo={logo} appTitle={appTitle}>
                        Utilities
                    </Header.Title>
                </Header>

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
        );
    }
}
export default UtilitiesPage;