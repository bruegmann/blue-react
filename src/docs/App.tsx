import { BrowserRouter as Router, Switch, Route, NavLink, Link } from "react-router-dom"
import Layout from "../components/Layout"

import "./docs.scss"
import { HomePage } from "./pages/HomePage"
import SidebarMenu from "../components/SidebarMenu"
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
    LayoutTextSidebar,
    CaretRightSquareFill,
    CaretRightFill,
    Rss,
    RssFill
} from "react-bootstrap-icons"

import { ComponentPage } from "./pages/ComponentPage"
import { IntroDemoPage } from "./pages/IntroDemoPage"
import UtilitiesPage from "./pages/UtilitiesPage"
import HeaderTitle from "../components/HeaderTitle"
import { appTitle, logo } from "./Global"
import { RecipesPage } from "./pages/RecipesPage"
import { ActionMenuExamplePage } from "./pages/ActionMenuExamplePage"
import BlogPage from "./pages/BlogPage"

function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
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
                <div className="web-components docs-layout">
                    <blue-sidebar>
                        <Link
                            to="/"
                            className="docs-sidebar-logo-link h4 fw-light text-white m-0 d-inline-block align-middle"
                        >
                            <img
                                src={logo}
                                alt="B"
                                style={{ width: "2rem", verticalAlign: "-.45rem" }}
                                className="d-inline-block"
                            />{" "}
                            {appTitle}
                        </Link>

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

                        <MenuItem icon={<Tools />} label="Utilities" elementType={NavLink} to="/utilities" />
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

                        <MenuItem
                            href="https://bruegmann.github.io/themify"
                            target="_blank"
                            rel="noopener noreferrer"
                            label="Customize with Themify"
                            icon={<Palette2 />}
                            className="mt-auto"
                        />

                        <MenuItem
                            href="https://github.com/bruegmann/blue-react"
                            icon={<CodeSquare />}
                            label="Code on GitHub"
                            target="_blank"
                            rel="noopener noreferrer"
                        />
                    </blue-sidebar>

                    <div className="router-page active">
                        <Switch>
                            <Route path="/utilities">
                                <UtilitiesPage />
                            </Route>

                            <Route path="/blog">
                                <BlogPage />
                            </Route>

                            <Route path="/component/:selectedComponent?">
                                <ComponentPage />
                            </Route>

                            <Route path="/intro-demo">
                                <IntroDemoPage />
                            </Route>

                            <Route path="/action-menu-example">
                                <ActionMenuExamplePage />
                            </Route>

                            <Route path="/recipes/:active?">
                                <RecipesPage />
                            </Route>

                            <Route path="/">
                                <HomePage />
                            </Route>
                        </Switch>
                    </div>
                </div>

                {/* <SidebarMenu
                    bottomContent={
                        <>
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
                    <MenuItem icon={<Tools />} label="Utilities" elementType={NavLink} to="/utilities" />
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
                </SidebarMenu> */}
            </Layout>
        </Router>
    )
}

export default App
