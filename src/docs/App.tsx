import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Link
} from "react-router-dom"
import Layout from "../components/Layout"

import "./docs.scss"
import { HomePage } from "./pages/HomePage"

import {
    House,
    CodeSquare,
    Eye,
    SegmentedNav,
    FileCode,
    Link45deg,
    MenuButtonWide,
    ChevronRight,
    LayoutTextWindowReverse,
    App as AppIcon,
    Search,
    Window,
    PlayBtn
} from "react-bootstrap-icons"

import { ComponentPage } from "./pages/ComponentPage"
import { logo } from "./Global"
import LicenseReportPage from "./pages/LicenseReportPage"
import { useEffect } from "react"
import DemoApp from "./components/DemoApp"
import SidebarMenu from "../components/SidebarMenu"
import _docs from "./data/docs.json"
import { ComponentDocumentation } from "./types"
import HeaderTitle from "../components/HeaderTitle"
import Actions from "../components/Actions"
import MenuItem from "../components/MenuItem"

const docs = _docs as { [key: string]: ComponentDocumentation[] }

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

                                <Actions>
                                    <MenuItem
                                        elementType={NavLink}
                                        to="/demo#intro"
                                        iconBefore={<Eye />}
                                        label="Demo App"
                                    />

                                    <MenuItem
                                        href="https://github.com/bruegmann/blue-react"
                                        iconBefore={<CodeSquare />}
                                        label="Code on GitHub"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    />
                                </Actions>
                            </>
                        }
                        side={
                            <SidebarMenu
                                topContent={
                                    <MenuItem
                                        iconBefore={<House />}
                                        // iconForActive={<HouseFill />}
                                        label="Start"
                                        elementType={NavLink}
                                        exact
                                        to="/"
                                    />
                                }
                            >
                                {docs &&
                                    Object.values(docs).map((comps) =>
                                        comps
                                            .filter(
                                                (comp) =>
                                                    !comp.description?.startsWith(
                                                        "@deprecated"
                                                    )
                                            )
                                            .map((comp) => {
                                                let icon
                                                switch (comp.displayName) {
                                                    case "A":
                                                        icon = <Link45deg />
                                                        break
                                                    case "Actions":
                                                        icon = (
                                                            <MenuButtonWide />
                                                        )
                                                        break
                                                    case "Layout":
                                                        icon = (
                                                            <LayoutTextWindowReverse />
                                                        )
                                                        break
                                                    case "MenuItem":
                                                        icon = <AppIcon />
                                                        break
                                                    case "Chevron":
                                                        icon = <ChevronRight />
                                                        break
                                                    case "Search":
                                                        icon = <Search />
                                                        break
                                                    case "SimpleLayout":
                                                        icon = <Window />
                                                        break
                                                    case "Tab":
                                                        icon = <SegmentedNav />
                                                        break
                                                    case "Tabs":
                                                        icon = <SegmentedNav />
                                                        break
                                                    case "Button":
                                                        icon = <PlayBtn />
                                                        break
                                                    default:
                                                        icon = <FileCode />
                                                }
                                                return (
                                                    <MenuItem
                                                        key={comp.displayName}
                                                        to={`/component/${comp.displayName}`}
                                                        elementType={NavLink}
                                                        label={comp.displayName}
                                                        iconBefore={icon}
                                                        buttonContent={
                                                            comp.displayName &&
                                                            [
                                                                "Actions",
                                                                "MenuItem",
                                                                "Button"
                                                            ].includes(
                                                                comp.displayName
                                                            ) ? (
                                                                <span className="docs-badge docs-badge-new"></span>
                                                            ) : undefined
                                                        }
                                                    />
                                                )
                                            })
                                    )}

                                <MenuItem label="Deprecated" as="collapse">
                                    {Object.values(docs).map((comps) =>
                                        comps
                                            .filter((comp) =>
                                                comp.description?.startsWith(
                                                    "@deprecated"
                                                )
                                            )
                                            .map((comp) => (
                                                <MenuItem
                                                    key={comp.displayName}
                                                    to={`/component/${comp.displayName}`}
                                                    elementType={NavLink}
                                                    label={comp.displayName}
                                                    className="text-decoration-line-through"
                                                />
                                            ))
                                    )}
                                </MenuItem>

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
