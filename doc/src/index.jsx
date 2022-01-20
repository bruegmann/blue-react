import React from "react";
import { render } from "react-dom";
import { Grid, MenuItem, Search, SidebarMenu } from "../../index.js";
import { Home, BoxOpen, Code, PortfolioFolder, Airbrush, Font, OfficeBuilding2, AdhesiveTape } from "blueicon-colored";

import HomePage from "./pages/HomePage.jsx";
import PackagesPage from "./pages/PackagesPage.jsx";
import BlueReactPage from "./pages/BlueReactPage.jsx";
import ComponentPage from "./pages/ComponentPage.jsx";
import IconsPage from "./pages/IconsPage.jsx";
import BrandingPage from "./pages/BrandingPage.jsx";
import BootstrapDemoPage from "./pages/BootstrapDemoPage.jsx";
import SearchResultsPage from "./pages/SearchResultsPage.jsx";
import IntroDemoPage from "./pages/IntroDemoPage.jsx";

import ThemifyIcon from "./components/ThemifyIcon.jsx";

import "./main.scss";

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            searchInput: "",
            signedIn: localStorage.getItem("signedIn") ? true : false
        };
    }

    // Nutze dies für eine page in Grid für component, wenn die Seite eine Authentifizierung benötigt
    requireAuth(Component) {
        return (
            <div>
                {this.state.signedIn ?
                    <Component />
                    :
                    <IntroDemoPage />
                }
            </div>
        );
    }

    render() {
        return (
            <Grid
                expandSidebar
                pages={[
                    {
                        name: "home",
                        component: <HomePage />
                    },
                    {
                        name: "packages",
                        component: <PackagesPage />
                    },
                    {
                        name: "blue-react",
                        component: <BlueReactPage />
                    },
                    {
                        name: "component",
                        component: <ComponentPage />
                    },
                    {
                        name: "icons",
                        component: <IconsPage />
                    },
                    {
                        name: "branding",
                        component: <BrandingPage />
                    },
                    {
                        name: "search",
                        component: <SearchResultsPage />
                    },
                    {
                        name: "blue-intro-demo",
                        component: <IntroDemoPage />
                    },
                    {
                        name: "bootstrap-demo",
                        component: <BootstrapDemoPage />
                    }
                ]}
            >
                <SidebarMenu
                    sidebarclassName="text-muted"
                    topContent={
                        <Search
                            sidebar
                            reset
                            value={this.state.searchInput}
                            onChange={({ target }) => {
                                this.setState({ searchInput: target.value });
                            }}
                            onSubmit={() => {
                                console.log("submit");
                                console.log(history);

                                location.href = "#/search/" + this.state.searchInput;
                            }}
                            placeholder="Suchen..."
                        />
                    }
                    bottomContent={
                        <MenuItem
                            href="http://ijbwiki.patorg.org/index.php/Themify#Themify_Desktop_App"
                            target="_blank"
                            rel="noopener noreferrer"
                            icon={<ThemifyIcon />}
                            label="Themify"
                            className="d-flex align-items-center"
                        />
                    }
                >
                    <MenuItem href="#/home" icon={<Home />} label="Start" isHome>
<MenuItem href="#/packages" icon={<BoxOpen />} label="NPM Packages" />
                    </MenuItem>
                    <MenuItem href="#/packages" icon={<BoxOpen />} label="NPM Packages" />
                    <MenuItem href="#/blue-react" icon={<Code />} label="Blue React" />
                    <MenuItem href="#/component" icon={<PortfolioFolder />} label="React Komponenten" />
                    <MenuItem href="#/icons" icon={<Font />} label="Icons" />
                    <MenuItem href="#/branding" icon={<OfficeBuilding2 />} label="Branding" />
                </SidebarMenu>
            </Grid>
        );
    }
}

render(<App />, document.getElementById("app"));