import React from "react";
import FluentBtn from "../../components/FluentBtn";
import { Fragment } from "react";
import Highlight from "react-highlight";
import Page from "../../components/Page";
import { logo, appTitle } from "../Global";
import doc from "../data/docs.json";
import MediaPlay from "../icons/MediaPlay";
import Utilities from "../../components/Utilities";
import Header from "../../components/Header";
import Body from "../../components/Body";

//import { Utilities } from "../../../index";

export interface BlueReactPageProps { }

export interface BlueReactPageState {
    didScroll: boolean,
    content: any,
    components: any
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
            <MediaPlay />
        </FluentBtn>)
    },
    {
        definition: "finishLoading()",
        description: "Hides loading animation.",
        demo: (<FluentBtn className="btn btn-light" onClick={() => Utilities.finishLoading()}>
            <MediaPlay />
        </FluentBtn>)
    },
    {
        definition: "showSuccess()",
        description: "Shows success symbol.",
        demo: (<FluentBtn className="btn btn-light" onClick={() => Utilities.showSuccess()}>
            <MediaPlay />
        </FluentBtn>)
    },
    {
        definition: "hideSuccess()",
        description: "Hides success symbol.",
        demo: (<FluentBtn className="btn btn-light" onClick={() => Utilities.hideSuccess()}>
            <MediaPlay />
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
            <MediaPlay />
        </FluentBtn>)
    },
    {
        definition: "resetAlertMessage(alertClassName)",
        description: "Resets alert message and removes it.",
        demo: (<FluentBtn className="btn btn-light"
            onClick={() => Utilities.resetAlertMessage("danger")}
        >
            <MediaPlay />
        </FluentBtn>)
    },
    {
        definition: "guid()",
        description: "Returns string of random characters.",
        demo: (<FluentBtn className="btn btn-light"
            onClick={() => alert("Generated GUID: " + Utilities.guid())}
        >
            <MediaPlay />
        </FluentBtn>)
    },
    {
        definition: "scrollToTop()",
        description: "Scrolls to the top of the page.",
        demo: (<FluentBtn className="btn btn-light"
            onClick={() => Utilities.scrollToTop()}
        >
            <MediaPlay />
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
        demo: (<Fragment>
            <FluentBtn className="btn btn-light"
            // onClick={() => {
            //     const url = "https://jsonplaceholder.typicode.com/todos/1";

            //     Utilities.startLoading();

            //     Utilities.fetchData(url)
            //         .then((res: any) => {
            //             Utilities.finishLoading();
            //             return res.json();
            //         })
            //         .then((json: any) => alert(`Here is the result of ${url}:\n\n ${JSON.stringify(json)}`));
            // }}
            >
                <MediaPlay />
            </FluentBtn>
        </Fragment>)
    }
];

/**
 * Hier befindet sich die Dokumentation zu den React-Blue-Paketen.
 * Dazu gehört der Markup Grundriss, die Implementierung, Blue und dessen statischen Methoden, die React Komponenten
 * und auch sonstige Komponenten.
 */

export class BlueReactPage extends React.Component<BlueReactPageProps, BlueReactPageState> {
    constructor(props: BlueReactPageProps) {
        super(props);
        this.state = {
            didScroll: false,
            content: [],
            components: doc
        }
    }

    static get defaultProps() {
        return {
            title: "Dokumentation",
            path: "/doc"
        };
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
                title: "Bootstrap",
                body: (
                    <div>
                        An adapted bootstrap is mainly used for the stylesheet.
                        There is a preview of it <a href="#/bootstrap-demo">on this page</a>.<br />
                        Bootstrap documentation is available here: <a href="https://getbootstrap.com/docs/">https://getbootstrap.com/docs/</a>
                    </div>
                )
            },
            {
                title: "Implementation",
                body: (
                    <div>
                        <h2>Root (index.jsx)</h2>
                        <Highlight className="js">{
                            `import React from "react";
import { render } from "react-dom";

// Imports Components for Grid, SidebarMenu and Menu-Items
import { Grid, SidebarMenu, MenuItem } from "blue-react";

// Imports a page
import MyPage from "./MyPage.jsx";

// Imported CSS
import "./main.scss";

class App extends React.Component {
    render() {
        return (
            <Router>
                <Grid>
                   <SidebarMenu>
                       <MenuItem href="#/my-page" icon="bi-home" label="My Page" />
                   </SidebarMenu> 

                    {/* Set "/my-page" as Home Page */}
                    <Route exact path="/" render={() =>
                        <Redirect href="#/my-page" />
                    } />

                    {/* Registered Route */}
                    <Route exact path="/my-page" component={MyPage} />
                </Grid>
            </Router>
        );
    }
}

render(<App />, document.getElementById("app"));`
                        }</Highlight>

                        <h2>Page (MyPage.jsx)</h2>
                        <Highlight className="js">{
                            `import React from "react";
import { Page, Header, HeaderTitle, Body } from "blue-react";

class BootstrapDemoPage extends React.Component {
    render() {
        return (
            <Page>
                <Header>
                  <HeaderTitle>Blue React</HeaderTitle>
                </Header>
                <Body>
                   ...
                <Body>
            </Page>
        );
    }
}

export default BootstrapDemoPage;`
                        }</Highlight>

                        <h2>CSS (main.scss)</h2>
                        <Highlight className="css">{
                            `/* Stylesheet for blue-react. Bootstrap 4 is already included.*/
$primary-color: #4dadf7; /* Define primary color */
@import "~blue-react/dist/style.scss";
`
                        }</Highlight>
                    </div>
                )
            },

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
                        Blue React
                    </Header.Title>
                </Header>

                <Body>
                    <div className="row">
                        <div className="col-md-2">
                            <div id="doc-menu" className={(this.state.didScroll ? "fixed" : "")}>
                                <ul className="nav nav-pills flex-column">
                                    {sections ? sections.map((s, i) =>
                                        <li key={i} className="nav-item">
                                            <FluentBtn
                                                light
                                                href="javascript:void(0)"
                                                className="nav-link"
                                                onClick={() => {
                                                    document.querySelector(".router-page.active")?.scrollTo(0, document.getElementById("section-" + encodeURIComponent(s.title))!.offsetTop);

                                                }}
                                            >
                                                {s.title}
                                            </FluentBtn>
                                        </li>
                                    ) : ""}
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-10">
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
export default BlueReactPage;