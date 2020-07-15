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

import List from "./icons/List";
import House from "./icons/House";
import CodeSquare from "./icons/CodeSquare";
import Puzzle from "./icons/Puzzle";
import FileCode from "./icons/FileCode";
import BlueReactPage from "./pages/BlueReactPage";
import { ComponentPage } from "./pages/ComponentPage";
import { IntroDemoPage } from "./pages/IntroDemoPage";

const env = process.env.NODE_ENV || "development";

function App() {
    return (
        <Router>
            <Grid
                pages={[]}
                unrouteable
                expandSidebar
                sidebarToggleIconComponent={<List />}
            >
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
                    <NavLink to="/doc" className="blue-app-toggle-page blue-app-sidebar-btn btn" activeClassName="active">
                        <FileCode /> <span className="blue-app-sidebar-label">Blue React</span>
                    </NavLink>
                    <NavLink to="/component" className="blue-app-toggle-page blue-app-sidebar-btn btn" activeClassName="active">
                        <Puzzle /> <span className="blue-app-sidebar-label">React Components</span>
                    </NavLink>
                </SidebarMenu>

                <div className="router-page active">
                    <Switch>
                        <Route path="/doc">
                            <BlueReactPage />
                        </Route>
                        <Route path="/component/:selectedComponent?">
                            <ComponentPage />
                        </Route>

                        <Route path="/intro-demo">
                            <IntroDemoPage />
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
