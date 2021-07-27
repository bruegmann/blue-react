import React from "react"
import Page from "../../components/Page"
import Body from "../../components/Body"
import { logo, appTitle } from "../Global"
import { Bootstrap, BoxSeam, Code, WindowSidebar } from "react-bootstrap-icons"
import { ReactIcon } from "../components/ReactIcon"
import { VersionToggle } from "../components/VersionToggle"
import { Footer } from "../components/Footer"
import IntroductionSections from "../components/IntroductionSections"

const packageJson = require("../../../package.json")

export const HomePage = () => (
    <Page>
        <Body className="pt-0" containerClass="no-container d-flex flex-column docs-min-height-100vh">
            <main className="flex-grow-1">
                <div className="welcome-jumbotron py-5 bg-theme text-white">
                    <div className="container">
                        <section className="d-flex justify-content-between">
                            <div>
                                <h1>React component library based on Bootstrap 5</h1>
                                <h2>
                                    <Bootstrap /> <ReactIcon /> <Code /> <WindowSidebar /> <BoxSeam />
                                </h2>
                                <h3 className="d-flex align-content-center gap-3">
                                    <span className="badge bg-white text-theme">{packageJson.version}</span>

                                    <VersionToggle />
                                </h3>
                            </div>

                            <div>
                                <h1 className="display-1 d-inline-flex align-items-center">
                                    <img src={logo} alt={appTitle} style={{ height: "1em" }} className="me-3" /> Blue
                                </h1>
                            </div>
                        </section>
                    </div>
                </div>

                <div className="container">
                    <h1 className="page-header">Use Blue React</h1>

                    <h2 className="mt-4 mb-3">Create new project using CRA</h2>
                    <code>npx create-react-app <strong>name-of-my-app</strong> --template blue</code>

                    <div className="mt-3">Or if you want to use TypeScript:</div>
                    <code>npx create-react-app <strong>name-of-my-app</strong> --template ts-blue</code>

                    <h2 className="mt-4 mb-3">Install to existing project</h2>
                    <code>npm i blue-react</code>

                    <IntroductionSections />
                </div>
            </main>

            <Footer />
        </Body>
    </Page>
)