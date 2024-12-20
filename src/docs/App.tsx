import { BrowserRouter as Router, Switch, Route, NavLink, Link } from "react-router-dom"
import Layout from "../components/Layout"
import HashRouter from "../components/HashRouter"

import "./docs.scss"
import { HomePage } from "./pages/HomePage"
import MenuItem from "../components/MenuItem"

import {
    House,
    CodeSquare,
    Puzzle,
    HouseFill,
    PuzzleFill,
    Stickies,
    StickiesFill,
    Rss,
    RssFill,
    Eye
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
                        side={
                            <SidebarMenu>
                                <MenuItem href="#" label="Home" icon={<span>🏠</span>} isHome />
                            </SidebarMenu>
                        }
                    >
                        <HashRouter
                            pages={[
                                {
                                    name: "home",
                                    component: <ActionMenuExamplePage />
                                }
                            ]}
                        />
                    </Layout>
                </Route>

                <Route path="/">
                    <nav className="docs-nav">
                        <Link className="navbar-brand" to="/">
                            <img src={logo} alt="Blue Logo" width="32" height="32" className="d-block" /> Blue React
                        </Link>

                        <div className="navbar-nav">
                            <a href="https://bruegmann.github.io/blue-web" className="nav-link">
                                Web
                            </a>
                            <a
                                href="https://bruegmann.github.io/blue-react"
                                className="nav-link active"
                                aria-current="page"
                            >
                                React
                            </a>
                            <a href="https://bruegmann.github.io/blue-blazor" className="nav-link">
                                Blazor
                            </a>
                        </div>
                    </nav>

                    <Layout
                        noPageBorder
                        side={
                            <SidebarMenu
                                sidebarClass="overflow-visible"
                                menuClass="overflow-visible"
                                bottomContent={
                                    <>
                                        <MenuItem to="/demo#intro" elementType={Link} icon={<Eye />} label="Demo App" />

                                        <MenuItem
                                            href="https://github.com/bruegmann/blue-react"
                                            icon={<CodeSquare />}
                                            label="Code on GitHub"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        />
                                    </>
                                }
                            >
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
                            </SidebarMenu>
                        }
                    >
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
                    </Layout>
                </Route>
            </Switch>
        </Router>
    )
}

export default App
