import React from "react";
import {
    HashRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";
import Grid from "../components/Grid";

import "./docs.scss";
import { HomePage } from "./pages/HomePage";
import SidebarMenu from "../components/SidebarMenu";
import MenuItem from "../components/MenuItem";

import { List, House, CodeSquare, Puzzle, Receipt, Tools, XCircleFill, InfoCircleFill, CheckCircleFill, ExclamationCircleFill, SignpostSplit } from "react-bootstrap-icons"

import { ComponentPage } from "./pages/ComponentPage";
import { IntroDemoPage } from "./pages/IntroDemoPage";
import IntroductionPage from "./pages/IntroductionPage";
import UtilitiesPage from "./pages/UtilitiesPage";
import { ActionsExamplePage } from "./pages/ActionsExamplePage";
import HeaderTitle from "../components/HeaderTitle";
import { appTitle, logo } from "./Global";

const env = process.env.NODE_ENV || "development";

function App() {
    return (
        <Router>
            <Grid
                pages={[]}
                unrouteable
                expandSidebar
                sidebarToggleIconComponent={<List />}
                statusIcons={{
                    danger: <XCircleFill />,
                    info: <InfoCircleFill />,
                    success: <CheckCircleFill />,
                    warning: <ExclamationCircleFill />
                }}
                disableHeaders
            >
                <HeaderTitle logo={logo} appTitle={appTitle} sidebar />

                <SidebarMenu
                    bottomContent={
                        <>
                            <MenuItem
                                href="https://github.com/bruegmann/blue-react"
                                icon={<CodeSquare />}
                                label="Code on GitHub"
                                target="_blank" rel="noopener noreferrer"
                            />
                        </>
                    }
                >
                    <NavLink to="/" exact className="blue-app-toggle-page blue-app-sidebar-btn btn" activeClassName="active">
                        <House /> <span className="blue-app-sidebar-label">Start</span>
                    </NavLink>
                    <NavLink to="/introduction" className="blue-app-toggle-page blue-app-sidebar-btn btn" activeClassName="active">
                        <SignpostSplit /> <span className="blue-app-sidebar-label">Introduction</span>
                    </NavLink>
                    <NavLink to="/utilities" className="blue-app-toggle-page blue-app-sidebar-btn btn" activeClassName="active">
                        <Tools /> <span className="blue-app-sidebar-label">Utilities</span>
                    </NavLink>
                    <NavLink to="/component" className="blue-app-toggle-page blue-app-sidebar-btn btn" activeClassName="active">
                        <Puzzle /> <span className="blue-app-sidebar-label">React Components</span>
                    </NavLink>

                    <MenuItem
                        href="https://github.com/bruegmann/blue-react/tree/master/recipes"
                        target="_blank" rel="noopener noreferrer"
                        icon={<Receipt />}
                        label="Recipes"
                    />
                </SidebarMenu>

                <div className="router-page active">
                    <Switch>
                        <Route path="/introduction">
                            <IntroductionPage />
                        </Route>
                        <Route path="/utilities">
                            <UtilitiesPage />
                        </Route>
                        <Route path="/component/:selectedComponent?">
                            <ComponentPage />
                        </Route>

                        <Route path="/intro-demo">
                            <IntroDemoPage />
                        </Route>

                        <Route path="/example_page">
                            <ActionsExamplePage />
                        </Route>

                        <Route path="/">
                            <HomePage />
                        </Route>
                    </Switch>
                </div>
            </Grid>
        </Router>
    );
}

export default App;
