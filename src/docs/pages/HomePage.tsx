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
        </Body>
    </Page>
)