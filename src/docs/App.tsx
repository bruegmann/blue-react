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
    Eye,
    LayersHalf,
    LayersFill,
    BracesAsterisk
} from "react-bootstrap-icons"

import { ComponentPage } from "./pages/ComponentPage"
import UtilitiesPage from "./pages/UtilitiesPage"
import { logo } from "./Global"
import { RecipesPage } from "./pages/RecipesPage"
import { ActionMenuExamplePage } from "./pages/ActionMenuExamplePage"
import BlogPage from "./pages/BlogPage"
import LicenseReportPage from "./pages/LicenseReportPage"
import { useEffect } from "react"
import DemoApp from "./components/DemoApp"
import SidebarMenu from "../components/SidebarMenu"
import SidebarMenuItem from "../components/SidebarMenuItem"
import NeumorphismPage from "./pages/NeumorphismPage"
import { CssPage } from "./pages/CssPage"

function App() {
    const onHashChange = () => {
        if (window.location.hash !== "" && window.location.hash.includes("css")) {
            let hash = decodeURIComponent(window.location.hash.substring(1)).replace("home/", "")

            const { css } = JSON.parse(hash)

            for (const linkEl of document.querySelectorAll(".docs-css")) {
                linkEl.remove()
            }

            document.getElementById("docs-inline-style")!.innerHTML = css
        } else if (window.location.hash !== "") {
            setTimeout(() => {
                document.querySelector(window.location.hash)?.scrollIntoView({
                    behavior: "smooth"
                })
            }, 500)
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
                    <nav className="docs-nav navbar navbar-expand navbar-dark bg-dark shadow-lg position-fixed top-0 rounded-4 z-1 py-1 mt-1 ms-1">
                        <div className="container-fluid px-2">
                            <Link className="navbar-brand" to="/">
                                <img src={logo} alt="Blue Logo" width="32" height="32" className="d-block" />
                            </Link>

                            <div className="navbar-nav flex-grow-1">
                                <NavLink to="/css" className="nav-link">
                                    CSS Classes
                                </NavLink>
                                <NavLink to="/utilities" className="nav-link">
                                    JS Utilities
                                </NavLink>
                                <NavLink to="/component" className="nav-link">
                                    React Components
                                </NavLink>
                            </div>
                        </div>
                    </nav>
                    <Layout
                        unrouteable
                        sidebarToggleIconComponent={<List />}
                        statusIcons={{
                            danger: <XCircleFill />,
                            info: <InfoCircleFill />,
                            success: <CheckCircleFill />,
                            warning: <ExclamationCircleFill />
                        }}
                        disableHeaders
                        className="docs-layout"
                        expandSidebar={false}
                    >
                        <SidebarMenu
                            sidebarClass="overflow-visible"
                            menuClass="overflow-visible"
                            bottomContent={
                                <>
                                    <SidebarMenuItem
                                        to="/demo#intro"
                                        elementType={Link}
                                        icon={<Eye />}
                                        label="Demo App"
                                    />

                                    <SidebarMenuItem
                                        href="https://bruegmann.github.io/themify"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        label="Customize with Themify"
                                        icon={<Palette2 />}
                                    />

                                    <SidebarMenuItem
                                        href="https://github.com/bruegmann/blue-react"
                                        icon={<CodeSquare />}
                                        label="Code on GitHub"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    />
                                </>
                            }
                        >
                            <SidebarMenuItem
                                icon={<House />}
                                iconForActive={<HouseFill />}
                                label="Start"
                                elementType={NavLink}
                                exact
                                to="/"
                            />
                            <SidebarMenuItem
                                icon={<Rss />}
                                iconForActive={<RssFill />}
                                label="Blog"
                                elementType={NavLink}
                                to="/blog"
                            />
                            <SidebarMenuItem
                                icon={<LayersHalf />}
                                iconForActive={<LayersFill />}
                                label="Neumorphism"
                                elementType={NavLink}
                                to="/neu"
                            />

                            <SidebarMenuItem
                                icon={<BracesAsterisk />}
                                label="CSS Classes"
                                elementType={NavLink}
                                to="/css"
                            />
                            <SidebarMenuItem icon={<Tools />} label="Utilities" elementType={NavLink} to="/utilities" />
                            <SidebarMenuItem
                                icon={<Puzzle />}
                                iconForActive={<PuzzleFill />}
                                label="React Components"
                                elementType={NavLink}
                                to="/component"
                            />
                            <SidebarMenuItem
                                icon={<Stickies />}
                                iconForActive={<StickiesFill />}
                                label="Recipes"
                                elementType={NavLink}
                                to="/recipes"
                            />
                        </SidebarMenu>

                        <div className="router-page active">
                            <Route path="/utilities">
                                <UtilitiesPage />
                            </Route>

                            <Route path="/blog">
                                <BlogPage />
                            </Route>

                            <Route path="/neu">
                                <NeumorphismPage />
                            </Route>

                            <Route path="/css/:selectedSection?">
                                <CssPage />
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
                    </Layout>
                </Route>
            </Switch>
        </Router>
    )
}

export default App
