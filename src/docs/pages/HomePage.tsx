import React from "react";
import Page from "../../components/Page";
import Body from "../../components/Body";
import { logo, appTitle } from "../Global";

const packageJson = require("../../../package.json");

export const HomePage = () => (
    <Page>
        <Body containerClass="no-container">
            <div className="welcome-jumbotron jumbotron jumbotron-fluid bg-theme text-white">
                <div className="container text-center">
                    <h1 className="display-1 d-inline-flex align-items-center">
                        <img src={logo} alt={appTitle} style={{ height: "1em" }} className="mr-3" /> Blue
                    </h1>
                    <h4>{packageJson.version}</h4>
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
            </div>
        </Body>
    </Page>
)