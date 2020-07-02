import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Grid from "../components/Grid";

import "./docs.scss";
import { HomePage } from "./pages/HomePage";
import SidebarMenu from "../components/SidebarMenu";
import MenuItem from "../components/MenuItem";

import List from "./icons/List";
import House from "./icons/House";
import CodeSquare from "./icons/CodeSquare";

function App() {
    return (
        <Router>
            <Grid
                pages={[]}
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
                    <MenuItem icon={<House />} label="Start" href="/" isHome />
                </SidebarMenu>

                <Switch>
                    <Route path="/">
                        <HomePage />
                    </Route>
                </Switch>
            </Grid>
        </Router>
    );
}

export default App;
