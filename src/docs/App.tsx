import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
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
import CustomNavLink from "./components/CustomNavLink"

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

                                <button
                                    type="button"
                                    className="btn blue-menu-item icon-link d-flex blue-btn-square me-auto"
                                    popoverTarget="docsNavPopover"
                                >
                                    <span className="visually-hidden">
                                        Navigate to a Blue library
                                    </span>
                                    <span
                                        className="blue-btn-icon-wrapper"
                                        aria-hidden="true"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                                            ></path>
                                        </svg>
                                    </span>
                                </button>
                                <div
                                    id="docsNavPopover"
                                    popover=""
                                    className="blue-anchored blue-anchored-fallback border rounded-4 shadow"
                                >
                                    <div className="vstack">
                                        <a
                                            className="btn blue-menu-item icon-link d-flex"
                                            href="https://bruegmann.github.io/blue-web"
                                        >
                                            <span
                                                className="blue-btn-icon-wrapper"
                                                aria-hidden="true"
                                            ></span>
                                            <span className="text-truncate">
                                                Blue Web
                                            </span>
                                        </a>
                                        <a
                                            className="btn blue-menu-item icon-link d-flex current"
                                            href="https://bruegmann.github.io/blue-react"
                                            aria-current="page"
                                        >
                                            <span
                                                className="blue-btn-icon-wrapper"
                                                aria-hidden="true"
                                            ></span>
                                            <span className="text-truncate">
                                                Blue React
                                            </span>
                                        </a>
                                        <a
                                            className="btn blue-menu-item icon-link d-flex"
                                            href="https://bruegmann.github.io/blue-blazor"
                                        >
                                            <span
                                                className="blue-btn-icon-wrapper"
                                                aria-hidden="true"
                                            ></span>
                                            <span className="text-truncate">
                                                Blue Blazor
                                            </span>
                                        </a>
                                    </div>
                                </div>

                                <Actions>
                                    <MenuItem
                                        elementType={CustomNavLink}
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
                                        elementType={CustomNavLink}
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
                                                        elementType={
                                                            CustomNavLink
                                                        }
                                                        label={comp.displayName}
                                                        iconBefore={icon}
                                                        buttonContent={
                                                            comp.displayName &&
                                                            ([
                                                                "Actions",
                                                                "MenuItem"
                                                            ].includes(
                                                                comp.displayName
                                                            ) ? (
                                                                <span className="docs-badge docs-badge-new"></span>
                                                            ) : [
                                                                  "Button"
                                                              ].includes(
                                                                  comp.displayName
                                                              ) ? (
                                                                <span className="docs-badge docs-badge-update"></span>
                                                            ) : undefined)
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
                                                    elementType={CustomNavLink}
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
