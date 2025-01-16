import Page from "../../components/Page"
import Body from "../../components/Body"
import { logo, appTitle } from "../Global"
import { Bootstrap, BoxSeam, Code, WindowSidebar } from "react-bootstrap-icons"
import { ReactIcon } from "../components/ReactIcon"
import { VersionToggle } from "../components/VersionToggle"
import { Footer } from "../components/Footer"
import IntroductionSections from "../components/IntroductionSections"
import StackblitzEmbed from "../components/StackblitzEmbed"
import A from "../../components/A"

import packageJson from "../../../package.json"

export const HomePage = () => (
    <Page>
        <Body
            className="pt-0"
            containerClass="no-container d-flex flex-column docs-min-height-100vh"
        >
            <main className="flex-grow-1">
                <div className="welcome-jumbotron pt-3 bg-theme text-white">
                    <div className="container pt-3 mt-3 pt-md-0">
                        <div className="d-md-flex">
                            <div className="flex-grow-1">
                                <h1
                                    className="display-2 d-inline-flex align-items-center"
                                    style={{ fontWeight: "600" }}
                                >
                                    <img
                                        src={logo}
                                        alt={appTitle}
                                        style={{ height: "1em" }}
                                        className="me-3"
                                    />{" "}
                                    Blue React
                                </h1>

                                <p className="h2">
                                    React component library based on Bootstrap 5
                                </p>
                                <div className="h2">
                                    <Bootstrap /> <ReactIcon /> <Code />{" "}
                                    <WindowSidebar /> <BoxSeam />
                                </div>
                            </div>

                            <div>
                                <div className="d-flex align-content-center gap-3">
                                    <span
                                        className="text-white rounded-3 px-3 py-2"
                                        style={{
                                            boxShadow:
                                                "var(--neu-shadow-3), var(--neu-shadow-inset-3)"
                                        }}
                                    >
                                        {packageJson.version}
                                    </span>

                                    <VersionToggle />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="mt-5 rounded-top-3 bg-body"
                        style={{ height: "1rem" }}
                    />
                </div>

                <div className="container">
                    <StackblitzEmbed />

                    <h1 className="page-header">Use Blue React</h1>

                    <h2 className="mt-4 mb-3">
                        Create new project with{" "}
                        <A href="https://vitejs.dev/" target="_blank">
                            Vite
                        </A>
                    </h2>
                    <p>
                        To quickly getting started, you can use the{" "}
                        <A
                            href="https://github.com/bruegmann/vite-template-blue-react"
                            target="_blank"
                        >
                            template with Vite, React, TypeScript and Blue React
                        </A>
                        .<br />
                        You can use{" "}
                        <A
                            href="https://github.com/Rich-Harris/degit"
                            target="_blank"
                        >
                            degit
                        </A>{" "}
                        to create a new project with this command:
                    </p>
                    <code>
                        npx degit bruegmann/vite-template-blue-react{" "}
                        <strong>name-of-my-app</strong>
                    </code>

                    <h2 className="mt-4 mb-3">
                        Create new project using{" "}
                        <A href="https://create-react-app.dev/" target="_blank">
                            CRA
                        </A>
                    </h2>
                    <p className="alert alert-warning">
                        Create React App isn't under active development anymore.
                        For new projects you should consider using Vite instead.
                    </p>
                    <code>
                        npx create-react-app@latest{" "}
                        <strong>name-of-my-app</strong> --template blue
                    </code>

                    <h2 className="mt-4 mb-3">Install to existing project</h2>
                    <code>npm i blue-react</code>

                    <IntroductionSections />
                </div>
            </main>

            <Footer />

            <div
                className="RoundedBottom bg-theme pb-1"
                style={{ height: "1rem" }}
            >
                <div className="rounded-bottom bg-body w-100 h-100" />
            </div>
        </Body>
    </Page>
)
