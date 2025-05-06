import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Link
} from "react-router-dom"
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
    Eye
} from "react-bootstrap-icons"

import { ComponentPage } from "./pages/ComponentPage"
import { logo } from "./Global"
import { ActionMenuExamplePage } from "./pages/ActionMenuExamplePage"
import LicenseReportPage from "./pages/LicenseReportPage"
import { useEffect } from "react"
import DemoApp from "./components/DemoApp"
import SidebarMenu from "../components/SidebarMenu"
import _docs from "./data/docs.json"
import { ComponentDocumentation } from "./types"
import clsx from "clsx"
import ActionMenu from "../components/ActionMenu"
import HeaderTitle from "../components/HeaderTitle"

const docs = _docs as { [key: string]: ComponentDocumentation }

function App() {
    const onHashChange = () => {
        if (
            window.location.hash !== "" &&
            window.location.hash.includes("css")
        ) {
            const hash = decodeURIComponent(
                window.location.hash.substring(1)
            ).replace("home/", "")

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
        <Router basename={import.meta.env.BASE_URL}>
            <Switch>
                <Route path="/demo">
                    <DemoApp />
                </Route>

                <Route path="/action-menu-example">
                    <Layout
                        side={
                            <SidebarMenu>
                                <MenuItem
                                    href="#"
                                    label="Home"
                                    icon={<span>🏠</span>}
                                    isHome
                                />
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
                    <Layout
                        header={
                            <>
                                <HeaderTitle
                                    appTitle="Blue React"
                                    logo={logo}
                                    logoAlt="Blue Logo"
                                    to="/"
                                    elementType={Link}
                                />

                                <nav className="docs-nav">
                                    <div className="navbar-nav">
                                        <a
                                            href="https://bruegmann.github.io/blue-web"
                                            className="nav-link"
                                        >
                                            Web
                                        </a>
                                        <a
                                            href="https://bruegmann.github.io/blue-react"
                                            className="nav-link active"
                                            aria-current="page"
                                        >
                                            React
                                        </a>
                                        <a
                                            href="https://bruegmann.github.io/blue-blazor"
                                            className="nav-link"
                                        >
                                            Blazor
                                        </a>
                                    </div>
                                </nav>

                                <ActionMenu break="sm">
                                    <MenuItem
                                        to="/demo#intro"
                                        elementType={Link}
                                        icon={<Eye />}
                                        label="Demo App"
                                    />

                                    <MenuItem
                                        href="https://github.com/bruegmann/blue-react"
                                        icon={<CodeSquare />}
                                        label="Code on GitHub"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    />
                                </ActionMenu>
                            </>
                        }
                        side={
                            <SidebarMenu
                                topContent={
                                    <MenuItem
                                        icon={<House />}
                                        iconForActive={<HouseFill />}
                                        label="Start"
                                        elementType={NavLink}
                                        exact
                                        to="/"
                                    />
                                }
                                menuClass="no-scrollbar"
                            >
                                <MenuItem
                                    icon={<Puzzle />}
                                    iconForActive={<PuzzleFill />}
                                    label="All Components"
                                    elementType={NavLink}
                                    to="/component"
                                    exact
                                />

                                {docs &&
                                    Object.values(docs).map((comp) => (
                                        <MenuItem
                                            key={comp.displayName}
                                            to={`/component/${comp.displayName}`}
                                            elementType={NavLink}
                                            label={comp.displayName}
                                            className={clsx({
                                                ["text-decoration-line-through"]:
                                                    comp.description.startsWith(
                                                        "@deprecated"
                                                    )
                                            })}
                                        />
                                    ))}

                                <div
                                    style={{
                                        background: "var(--blue-sidebar-bg)",
                                        pointerEvents: "none",
                                        position: "sticky",
                                        bottom: 0,
                                        display: "flex",
                                        height: "10rem",
                                        maskImage:
                                            "linear-gradient(transparent,#000)"
                                    }}
                                />
                            </SidebarMenu>
                        }
                    >
                        <Route path="/component/:selectedComponent?">
                            <ComponentPage />
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
