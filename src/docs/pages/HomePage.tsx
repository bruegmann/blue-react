import { logo, appTitle } from "../Global"
import { Bootstrap, BoxSeam, Code, WindowSidebar } from "react-bootstrap-icons"
import { ReactIcon } from "../components/ReactIcon"
import { VersionToggle } from "../components/VersionToggle"
import IntroductionSections from "../components/IntroductionSections"
import StackblitzEmbed from "../components/StackblitzEmbed"
import A from "../../components/A"

import packageJson from "../../../package.json"

export const HomePage = () => (
    <>
        <div className="welcome-jumbotron text-center p-5 bg-primary-subtle text-primary-emphasis border-bottom position-relative">
            <div className="d-inline-flex align-content-center gap-1 position-absolute top-0 end-0 mt-2 me-2">
                <span className="border border-primary-subtle rounded-3 px-2 py-1">
                    {packageJson.version}
                </span>
                <VersionToggle />
            </div>

            <h1
                className="display-3 d-inline-flex align-items-center"
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

            <p className="h2">React component library based on Bootstrap 5</p>
            <div className="h2">
                <Bootstrap /> <ReactIcon /> <Code /> <WindowSidebar />{" "}
                <BoxSeam />
            </div>
        </div>

        <div className="container pt-3">
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
                <A href="https://github.com/Rich-Harris/degit" target="_blank">
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
                Create React App isn't under active development anymore. For new
                projects you should consider using Vite instead.
            </p>
            <code>
                npx create-react-app@latest <strong>name-of-my-app</strong>{" "}
                --template blue
            </code>

            <h2 className="mt-4 mb-3">Install to existing project</h2>
            <code>npm i blue-react</code>

            <IntroductionSections />
        </div>
    </>
)
