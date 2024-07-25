import Page from "../../components/Page"
import Body from "../../components/Body"
import { logo, appTitle } from "../Global"
import { Bootstrap, BoxSeam, Code, WindowSidebar } from "react-bootstrap-icons"
import { ReactIcon } from "../components/ReactIcon"
import { VersionToggle } from "../components/VersionToggle"
import { Footer } from "../components/Footer"
import IntroductionSections from "../components/IntroductionSections"
import StackblitzEmbed from "../components/StackblitzEmbed"

const packageJson = require("../../../package.json")

export const HomePage = () => (
    <Page>
        <Body className="pt-0" containerClass="no-container d-flex flex-column docs-min-height-100vh">
            <main className="flex-grow-1">
                <div className="welcome-jumbotron pt-5 bg-theme text-white">
                    <div className="container pt-3 mt-5 pt-md-0">
                        <div className="d-md-flex">
                            <div className="flex-grow-1">
                                <h1
                                    className="display-2 d-inline-flex align-items-center"
                                    style={{ fontWeight: "600" }}
                                >
                                    <img src={logo} alt={appTitle} style={{ height: "1em" }} className="me-3" /> Blue
                                    React
                                </h1>

                                <p className="h2">React component library based on Bootstrap 5</p>
                                <div className="h2">
                                    <Bootstrap /> <ReactIcon /> <Code /> <WindowSidebar /> <BoxSeam />
                                </div>
                            </div>

                            <div>
                                <div className="h3 mt-3 d-flex align-content-center gap-3">
                                    <span
                                        className="badge text-white"
                                        style={{ boxShadow: "var(--neu-shadow-3), var(--neu-shadow-inset-3)" }}
                                    >
                                        {packageJson.version}
                                    </span>

                                    <VersionToggle />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-5 rounded-top bg-body" style={{ height: "1rem" }} />
                </div>

                <div className="container">
                    <StackblitzEmbed />

                    <div className="alert alert-info mt-4" role="alert">
                        Notice: sections for CSS and JavaScript moved to the{" "}
                        <a href="https://bruegmann.github.io/blue-web">Blue Web docs</a>.
                    </div>

                    <h1 className="page-header">Use Blue React</h1>

                    <h2 className="mt-4 mb-3">Create new project using CRA</h2>
                    <code>
                        npx create-react-app@latest <strong>name-of-my-app</strong> --template blue@9
                    </code>

                    <h2 className="mt-4 mb-3">Install to existing project</h2>
                    <code>npm i blue-react</code>

                    <IntroductionSections />
                </div>
            </main>

            <Footer />

            <div className="RoundedBottom bg-theme pb-1" style={{ height: "1rem" }}>
                <div className="rounded-bottom bg-body w-100 h-100" />
            </div>
        </Body>
    </Page>
)
