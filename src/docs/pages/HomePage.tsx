import React from "react";
import Page from "../../components/Page";
import Body from "../../components/Body";
import { logo, appTitle } from "../Global";
import { VersionToggle } from "../components/VersionToggle";
import { Footer } from "../components/Footer";
import StackblitzEmbed from "../components/StackblitzEmbed";

const packageJson = require("../../../package.json");

export const HomePage = () => (
    <Page>
        <Body className="pt-0" containerClass="no-container d-flex flex-column docs-min-height-100vh">
            <main className="flex-grow-1">
                <div className="welcome-jumbotron jumbotron jumbotron-fluid pb-0 bg-theme text-white">
                    <div className="container text-center mb-5 pb-3">
                        <h1 className="display-1 d-inline-flex align-items-center">
                            <img src={logo} alt={appTitle} style={{ height: "1em" }} className="mr-3" /> Blue
                        </h1>
                        <h4>{packageJson.version} <VersionToggle className="d-inline-block ml-1" /></h4>
                    </div>

                    <div className="mt-5 rounded-top bg-white" style={{ height: "1rem" }} />
                </div>

                <div className="container">
                    <StackblitzEmbed />

                    <h1 className="page-header">Use Blue React</h1>

                    <h2 className="mt-4 mb-3">Create new project using CRA</h2>
                    <code>npx create-react-app <strong>name-of-my-app</strong> --template blue</code>

                    <div className="mt-3">Or if you want to use TypeScript:</div>
                    <code>npx create-react-app <strong>name-of-my-app</strong> --template ts-blue</code>

                    <h2 className="mt-4 mb-3">Install to existing project</h2>
                    <code>npm i blue-react</code>
                </div>
            </main>

            <Footer />
        </Body>
    </Page>
)