import React, { Fragment } from "react";
import Highlight from "react-highlight";
import { MediaPlay } from "blueicon-colored";
import Superagent from "superagent";

import { Page, MenuItem, Utilities, FluentBtn } from "../../../index.js";
import doc from "../doc.json";

import Global from "../Global.js";

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
                onClick={() => {
                    const url = "https://jsonplaceholder.typicode.com/todos/1";

                    Utilities.startLoading();
                    Utilities.fetchData(url)
                        .then(res => {
                            Utilities.finishLoading();
                            return res.json();
                        })
                        .then(json => alert(`Here is the result of ${url}:\n\n ${JSON.stringify(json)}`));
                }}
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

class BlueReactPage extends React.Component {
    constructor() {
        super();

        this.state = {
            components: doc,
            content: [],
            didScroll: false
        }
    }

    static get defaultProps() {
        return {
            title: "Dokumentation",
            path: "/doc"
        };
    }

    componentDidMount() {
        if (blueGridRef.state.match[1]) {
            const scrollToEl = document.getElementById(blueGridRef.state.match[1]);
            if (scrollToEl) {
                scrollToEl.scrollIntoView();
            }
        }

        document.querySelector(".router-page.active").addEventListener("scroll", () => {
            if (!this.state.didScroll) {
                this.setState({ didScroll: true });
            }
        });
    }

    render() {
        const sections = [
            {
                title: "Neues Projekt",
                body: (
                    <div>
                        <p>
                            Mit dem Script <code>create-blue-app</code> ist es mega easy, ein neues Projekt zu erstellen.
                        </p>

                        <ol>
                            <li>Bringe SVN bei dir auf den neuesten Stand (SVN Update).</li>
                            <li><code>npx create-blue-app <strong>name-of-my-new-app</strong></code></li>
                        </ol>

                        <p>
                            That's it!<br />
                            Was passiert hier? Zunächst wird{" "}
                            <a href="https://facebook.github.io/create-react-app/" target="_blank" ref="noopener">Create React App</a>{" "}
                            ausgeführt, um ein React-Projekt zu erzeugen.<br />
                            Danach werden die nötigen Pakete für Blue React
                            installiert und alle nötigen JS- und SCSS-Dateien angelegt, damit du sofort loslegen kannst.
                        </p>
                    </div>
                )
            },
            {
                title: "Bootstrap",
                body: (
                    <div>
                        Für das Stylesheet wird hauptsächlich ein angepasstes Bootstrap verwendet.
                        Eine Vorschau davon befindet sich <a href="#/bootstrap-demo">auf dieser Seite</a>.<br />
                        Eine Dokumentation zu Bootstrap gibt es hier: <a href="https://getbootstrap.com/docs/">https://getbootstrap.com/docs/</a>
                    </div>
                )
            },
            {
                title: "Markup Grundriss",
                body: (
                    <div>
                        <Highlight className="html">{
                            `<Grid>
    <Grid.SidebarMenu>
        <MenuItem href="#/home" icon="bi-home" label="Start" />
        ...
    </Grid.SidebarMenu>

    <Page>
        <Page.Header>
            <Page.Header.Title>
                ...
            </Page.Header.Title>

            <Page.Header.Actions>
                <ActionMenu>
                    <ActionMenuItem icon="bi-athlete" label="Click me and nothing will happen" />
                    ...
                </ActionMenu>
            </Page.Header.Actions>
        </Page.Header>

        <Page.Body>
            ...
        </Page.Body>
    </Page>
</Grid>`
                        }</Highlight>
                    </div>
                )
            },

            {
                title: "Implementierung",
                body: (
                    <div>
                        <h2>Root (index.jsx)</h2>
                        <Highlight className="js">{
                            `import React from "react";
import { render } from "react-dom";

// Importiert Komponenten für das Grid und den Menu-Items
import { Grid, MenuItem } from "blue-react";

// Importiert eine Seite
import MyPage from "./MyPage.jsx";

// Importiert CSS
import "./main.scss";

class App extends React.Component {
    render() {
        return (
            <Router>
                <Grid>
                    <Grid.SidebarMenu>
                        <MenuItem href="#/my-page" icon="bi-home" label="My Page" />
                    </Grid.SidebarMenu>

                    {/* Legt "/my-page" als Startseite fest */}
                    <Route exact path="/" render={() =>
                        <Redirect href="#/my-page" />
                    } />

                    {/* Registriert Route */}
                    <Route exact path="/my-page" component={MyPage} />
                </Grid>
            </Router>
        );
    }
}

render(<App />, document.getElementById("app"));`
                        }</Highlight>

                        <h2>Seite (MyPage.jsx)</h2>
                        <Highlight className="js">{
                            `import React from "react";
import { Page, Utilities, ActionMenu, ActionMenuItem } from "blue-react";

class BootstrapDemoPage extends React.Component {
    render() {
        return (
            <Page>
                ...
            </Page>
        );
    }
}

export default BootstrapDemoPage;`
                        }</Highlight>

                        <h2>CSS (main.scss)</h2>
                        <Highlight className="css">{
                            `/* Stylesheet für blue-react. Enthält bereits Bootstrap 4. */
$primary-color: #4dadf7; /* Definiert die Primärfarbe */
@import "~blue-react/dist/style.scss";

/* Stylesheet für blueicon */
$bi-fonts-direction: "~blueicon/fonts/";
@import "~blueicon/blueicon";

/* Stylesheet für blueicon-colored */
@import "~blueicon-colored/style.css";
`
                        }</Highlight>
                    </div>
                )
            },

            {
                title: "Utilities",
                body: (
                    <div>
                        <p>Eine statische Klasse mit ein paar nützlichen Helfer-Funktionen</p>

                        <h2 className="page-header">Nützliche CSS-Klassen</h2>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Definition</th>
                                    <th>Beschreibung</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><code>.blue-app-sidebar-hidden-on-open</code></td>
                                    <td>
                                        Das Element wird versteckt solange die Sidebar geöffnet ist.
                                    </td>
                                </tr>
                                <tr>
                                    <td><code>.blue-app-sidebar-visible-on-open</code></td>
                                    <td>
                                        Das Element ist sichtbar solange die Sidebar geöffnet ist.
                                    </td>
                                </tr>
                                <tr>
                                    <td><code>.blue-app-header-form</code></td>
                                    <td>
                                        Nutzbar innerhalb von <code>{`<Page.Header.Actions />`}</code> um in der Action-Leiste
                                        ein Formular einzubinden. Kombinierbar mit <code>.form-horizontal</code>.
                                    </td>
                                </tr>
                                <tr>
                                    <td><code>.form-horizontal</code></td>
                                    <td>
                                        Zusammen mit <a href="https://getbootstrap.com/docs/4.0/components/forms/#horizontal-form">Bootstraps Lösung</a>
                                        &nbsp;zu nutzen. Durch <code>.form-horizontal</code> werden die Labels auf größeren Bildschirmen rechts angeordnet.
                                    </td>
                                </tr>
                                <tr>
                                    <td><code>.form-control.default</code></td>
                                    <td>
                                        Stellt das Standard-Styling von Bootstrap wieder her.
                                    </td>
                                </tr>
                                <tr>
                                    <td><code>.form-switch</code></td>
                                    <td>
                                        Switch-Control. Nutzung: <code>&lt;label className="form-switch"&gt;&lt;input type="checkbox" /&gt;&lt;i /&lt; Do it!&lt;/label&gt;</code>
                                    </td>
                                </tr>
                                <tr>
                                    <td><code>.blue-app-sidebar-bottom</code></td>
                                    <td>
                                        Mit Sidebar Bottom lässt sich zum Beispiel ein angemeldeter Benutzer links unten anzeigen. Nutzbar innerhalb von <code>&lt;SidebarMenu /&gt;</code>.
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <h2 className="page-header">JavaScript Funktionen</h2>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Definition</th>
                                    <th>Beschreibung</th>
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

                        <h2 className="page-header">Beispiel</h2>
                        <Highlight className="js">{`import { Utilities } from "blue-react";
                            
Utilities.startLoading();`}</Highlight>
                    </div>
                )
            }
        ];

        return (
            <Page>
                <Page.Header>
                    <Page.Header.Title logo={Global.logo} appTitle={Global.appTitle}>
                        Blue React
                    </Page.Header.Title>
                </Page.Header>

                <Page.Body>
                    <div className="row">
                        <div className="col-md-2">
                            <div id="doc-menu" className={(this.state.didScroll ? "fixed" : "")}>
                                <ul className="nav nav-pills flex-column">
                                    {sections.map((s, i) =>
                                        <li key={i} className="nav-item">
                                            <FluentBtn
                                                light
                                                href="javascript:void(0)"
                                                className="nav-link"
                                                onClick={() => {
                                                    document.querySelector(".router-page.active").scrollTo(0, document.getElementById("section-" + encodeURIComponent(s.title)).offsetTop);
                                                }}
                                            >
                                                {s.title}
                                            </FluentBtn>
                                        </li>
                                    )}
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
                </Page.Body>
            </Page>
        );
    }
}

export default BlueReactPage;