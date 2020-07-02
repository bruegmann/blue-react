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

function App() {
    return (
        <Router>
            <Grid
                pages={[]}
                expandSidebar
                sidebarToggleIconComponent={<List />}
            >
                <SidebarMenu>
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
