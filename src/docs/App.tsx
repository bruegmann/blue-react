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
    XCircleFill,
    InfoCircleFill,
    CheckCircleFill,
    ExclamationCircleFill,
    HouseFill,
    PuzzleFill,
    Stickies,
    StickiesFill,
    Rss,
    RssFill,
    Eye,
    BoxArrowUpRight
} from "react-bootstrap-icons"

import { ComponentPage } from "./pages/ComponentPage"
import { logo } from "./Global"
import { RecipesPage } from "./pages/RecipesPage"
import { ActionMenuExamplePage } from "./pages/ActionMenuExamplePage"
import BlogPage from "./pages/BlogPage"
import LicenseReportPage from "./pages/LicenseReportPage"
import { useEffect } from "react"
import DemoApp from "./components/DemoApp"
import SidebarMenu from "../components/SidebarMenu"
import SidebarMenuItem from "../components/SidebarMenuItem"

function App() {
    const onHashChange = () => {
        if (window.location.hash !== "" && window.location.hash.includes("css")) {
            let hash = decodeURIComponent(window.location.hash.substring(1)).replace("home/", "")

            const { colorMode, css } = JSON.parse(hash)

            for (const linkEl of document.querySelectorAll(".docs-css")) {
                linkEl.remove()
            }

            document.documentElement.setAttribute("data-bs-theme", colorMode)
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
                                <NavLink to="/component" className="nav-link">
                                    React Components
                                </NavLink>
                                <a href="https://bruegmann.github.io/blue-web/v1/css" className="nav-link">
                                    CSS Classes{" "}
                                    <sup>
                                        <BoxArrowUpRight className="blue-icon" />
                                    </sup>
                                </a>
                                <a href="https://bruegmann.github.io/blue-web/v1/utilities" className="nav-link">
                                    JS Utilities{" "}
                                    <sup>
                                        <BoxArrowUpRight className="blue-icon" />
                                    </sup>
                                </a>
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
                    </Layout>
                </Route>
            </Switch>
        </Router>
    )
}

export default App
