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
import { appTitle, logo } from "./Global"
import { RecipesPage } from "./pages/RecipesPage"
import { ActionMenuExamplePage } from "./pages/ActionMenuExamplePage"
import BlogPage from "./pages/BlogPage"
import LicenseReportPage from "./pages/LicenseReportPage"
import { useEffect } from "react"
import DemoApp from "./components/DemoApp"
import SidebarMenu from "../components/SidebarMenu"
import ColorModeSwitch from "./components/ColorModeSwitch"
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
                    <Layout
                        pages={[]}
                        unrouteable
                        sidebarToggleIconComponent={<List />}
                        statusIcons={{
                            danger: <XCircleFill />,
                            info: <InfoCircleFill />,
                            success: <CheckCircleFill />,
                            warning: <ExclamationCircleFill />
                        }}
                        disableHeaders
                    >
                        <div className="h3 blue-header-logo text-white ms-5 blue-sidebar-visible-on-open gap-1">
                            <Link to="/">
                                <img src={logo} alt="Logo" className="blue-header-logo-image" />
                            </Link>
                            <span className="blue-header-logo-title-labels">
                                <Link to="/">{appTitle}</Link>
                            </span>
                        </div>

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
                            <ColorModeSwitch />

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
