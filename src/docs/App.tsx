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
import MenuItem from "../components/MenuItem"

import {
    House,
    CodeSquare,
    HouseFill,
    Eye,
    SegmentedNav,
    FileCode,
    Link45deg,
    MenuButtonWide,
    ChevronRight,
    LayoutTextWindowReverse,
    App as AppIcon,
    Search,
    Window
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
                                </Actions>
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
                            >
                                {docs && (
                                    <>
                                        {Object.values(docs)
                                            .filter(
                                                (comp) =>
                                                    !comp.description.startsWith(
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
                                                    default:
                                                        icon = <FileCode />
                                                }
                                                return (
                                                    <MenuItem
                                                        key={comp.displayName}
                                                        to={`/component/${comp.displayName}`}
                                                        elementType={NavLink}
                                                        label={comp.displayName}
                                                        icon={icon}
                                                        labelClassName={
                                                            comp.displayName.includes(
                                                                "Search"
                                                            )
                                                                ? "docs-badge docs-badge-update"
                                                                : comp.displayName.includes(
                                                                      "Actions"
                                                                  )
                                                                ? "docs-badge docs-badge-new"
                                                                : undefined
                                                        }
                                                    />
                                                )
                                            })}

                                        <details className="blue-collapse ">
                                            <summary className="blue-collapse-header blue-menu-item btn ">
                                                <span className="blue-menu-item-label text-truncate ">
                                                    Deprecated
                                                </span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="1em"
                                                    height="1em"
                                                    fill="currentColor"
                                                    className="blue-menu-item-dropdown-toggle blue-collapse-chevron blue-menu-item-chevron ms-auto"
                                                    aria-hidden="true"
                                                    style={{
                                                        verticalAlign:
                                                            "-0.125em",
                                                        transition:
                                                            "transform 0.2s"
                                                    }}
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                                                    ></path>
                                                </svg>
                                            </summary>
                                            <div className="d-flex flex-column ms-3 border-start position-relative">
                                                {Object.values(docs)
                                                    .filter((comp) =>
                                                        comp.description.startsWith(
                                                            "@deprecated"
                                                        )
                                                    )
                                                    .map((comp) => (
                                                        <MenuItem
                                                            key={
                                                                comp.displayName
                                                            }
                                                            to={`/component/${comp.displayName}`}
                                                            elementType={
                                                                NavLink
                                                            }
                                                            label={
                                                                comp.displayName
                                                            }
                                                            className="text-decoration-line-through"
                                                        />
                                                    ))}
                                            </div>
                                        </details>
                                    </>
                                )}

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
