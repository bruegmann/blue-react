import { BrowserRouter as Router, Switch, Route, NavLink, Link } from "react-router-dom"
import Layout from "../components/Layout"

import "./docs.scss"
import { HomePage } from "./pages/HomePage"
import MenuItem from "../components/MenuItem"

import {
    List,
    House,
    CodeSquare,
    Puzzle,
    Tools,
    XCircleFill,
    InfoCircleFill,
    CheckCircleFill,
    ExclamationCircleFill,
    Palette2,
    HouseFill,
    PuzzleFill,
    Stickies,
    StickiesFill,
    Rss,
    RssFill,
    Eye
} from "react-bootstrap-icons"

import { ComponentPage } from "./pages/ComponentPage"
import UtilitiesPage from "./pages/UtilitiesPage"
import { appTitle, logo } from "./Global"
import { RecipesPage } from "./pages/RecipesPage"
import { ActionMenuExamplePage } from "./pages/ActionMenuExamplePage"
import BlogPage from "./pages/BlogPage"
import LicenseReportPage from "./pages/LicenseReportPage"
import { useEffect } from "react"
import DemoApp from "./components/DemoApp"
import SidebarMenu from "../components/SidebarMenu"
import ColorModeSwitch from "./components/ColorModeSwitch"

function App() {
    const onHashChange = () => {
        if (window.location.hash !== "" && window.location.hash.includes("css")) {
            let hash = decodeURIComponent(window.location.hash.substring(1)).replace("home/", "")

            const { css } = JSON.parse(hash)

            for (const linkEl of document.querySelectorAll(".docs-css")) {
                linkEl.remove()
            }

            document.getElementById("docs-inline-style")!.innerHTML = css
        }
    }

    useEffect(() => {
        onHashChange()
        window.addEventListener("hashchange", onHashChange)
        return () => {
            window.removeEventListener("hashchange", onHashChange)
        }
    }, [])

    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route path="/demo">
                    <DemoApp />
                </Route>

                <Route path="/action-menu-example">
                    <Layout
                        pages={[
                            {
                                name: "home",
                                component: <ActionMenuExamplePage />
                            }
                        ]}
                    >
                        <SidebarMenu>
                            <MenuItem href="#" label="Home" icon={<span>🏠</span>} isHome />
                        </SidebarMenu>
                    </Layout>
                </Route>

                <Route path="/">
                    <Layout
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
                        hideSidebarMenu
                    >
                        <div className="blue-wc-web-components">
                            <blue-sidebar dynamic-size="">
                                <Link
                                    to="/"
                                    className="docs-sidebar-logo-link h4 fw-normal m-0 p-2 align-middle position-absolute overflow-hidden text-nowrap"
                                    style={{ color: "var(--blue-sidebar-color)" }}
                                >
                                    <img
                                        src={logo}
                                        alt="B"
                                        style={{ width: "2rem", verticalAlign: "-.45rem" }}
                                        className="d-inline-block"
                                    />{" "}
                                    {appTitle}
                                </Link>

                                <div
                                    className="d-flex flex-column justify-content-between"
                                    style={{ height: "calc(100vh - var(--blue-control-size) - 0.5rem)" }}
                                >
                                    <div>
                                        <MenuItem
                                            icon={<House />}
                                            iconForActive={<HouseFill />}
                                            label="Start"
                                            elementType={NavLink}
                                            exact
                                            to="/"
                                        />
                                        <MenuItem
                                            icon={<Rss />}
                                            iconForActive={<RssFill />}
                                            label="Blog"
                                            elementType={NavLink}
                                            to="/blog"
                                        />

                                        <MenuItem
                                            icon={<Tools />}
                                            label="Utilities"
                                            elementType={NavLink}
                                            to="/utilities"
                                        />
                                        <MenuItem
                                            icon={<Puzzle />}
                                            iconForActive={<PuzzleFill />}
                                            label="React Components"
                                            elementType={NavLink}
                                            to="/component"
                                        />
                                        <MenuItem
                                            icon={<Stickies />}
                                            iconForActive={<StickiesFill />}
                                            label="Recipes"
                                            elementType={NavLink}
                                            to="/recipes"
                                        />
                                    </div>

                                    <div>
                                        <MenuItem to="/demo#intro" elementType={Link} icon={<Eye />} label="Demo App" />

                                        <MenuItem
                                            href="https://bruegmann.github.io/themify"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            label="Customize with Themify"
                                            icon={<Palette2 />}
                                        />

                                        <MenuItem
                                            href="https://github.com/bruegmann/blue-react"
                                            icon={<CodeSquare />}
                                            label="Code on GitHub"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        />
                                    </div>
                                </div>
                            </blue-sidebar>

                            <div className="router-page active">
                                <ColorModeSwitch />

                                <Route path="/utilities">
                                    <UtilitiesPage />
                                </Route>

                                <Route path="/blog">
                                    <BlogPage />
                                </Route>

                                <Route path="/component/:selectedComponent?">
                                    <ComponentPage />
                                </Route>

                                <Route path="/recipes/:active?">
                                    <RecipesPage />
                                </Route>

                                <Route path="/license-report">
                                    <LicenseReportPage />
                                </Route>

                                <Route path="/" exact>
                                    <HomePage />
                                </Route>
                            </div>
                        </div>
                    </Layout>
                </Route>
            </Switch>
        </Router>
    )
}

export default App
