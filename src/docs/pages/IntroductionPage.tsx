import React from "react";
import Page from "../../components/Page";
import Header from "../../components/Header";
import { logo, appTitle } from "../Global";
import FluentBtn from "../../components/FluentBtn";
import Body from "../../components/Body";
import Highlight from "react-highlight";

export interface IntroductionPageProps { }

export interface IntroductionPageState {
    content: any,
    didScroll: boolean
}

export class IntroductionPage extends React.Component<IntroductionPageProps, IntroductionPageState> {
    constructor(props: IntroductionPageProps) {
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
            }
        ];
        return (
            <Page>
                <Header>
                    <Header.Title logo={logo} appTitle={appTitle}>
                        Introduction
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
export default IntroductionPage;