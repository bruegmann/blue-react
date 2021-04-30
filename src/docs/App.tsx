import React from "react";
import {
    BrowserRouter as Router,
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
import { RecipesPage } from "./pages/RecipesPage";
import { ActionMenuExamplePage } from "./pages/ActionMenuExamplePage";

function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
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
                    <MenuItem icon={<House />} label="Start" elementType={NavLink} exact to="/" />
                    <MenuItem icon={<SignpostSplit />} label="Introduction" elementType={NavLink} to="/introduction" />
                    <MenuItem icon={<Tools />} label="Utilities" elementType={NavLink} to="/utilities" />
                    <MenuItem icon={<Puzzle />} label="React Components" elementType={NavLink} to="/component" />
                    <MenuItem icon={<Receipt />} label="Recipes" elementType={NavLink} to="/recipes" />
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

                        <Route path="/actions-example/:headerless?">
                            <ActionsExamplePage />
                        </Route>

                        <Route path="/action-menu-example">
                            <ActionMenuExamplePage />
                        </Route>

                        <Route path="/recipes/:active?">
                            <RecipesPage />
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
