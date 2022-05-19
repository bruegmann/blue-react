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
    StickiesFill
} from "react-bootstrap-icons"

import { ComponentPage } from "./pages/ComponentPage"
import { IntroDemoPage } from "./pages/IntroDemoPage"
import UtilitiesPage from "./pages/UtilitiesPage"
import HeaderTitle from "../components/HeaderTitle"
import { appTitle, logo } from "./Global"
import { RecipesPage } from "./pages/RecipesPage"
import { ActionMenuExamplePage } from "./pages/ActionMenuExamplePage"

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
            >
                <HeaderTitle sidebar>
                    <Link to="/">
                        <img src={logo} className="blue-header-logo-image" alt="B" />
                    </Link>{" "}
                    <Link to="/">{appTitle}</Link>
                </HeaderTitle>

                <SidebarMenu
                    bottomContent={
                        <>
                            <MenuItem
                                href="https://bruegmann.github.io/themify/customize"
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
                </SidebarMenu>

                <div className="router-page active">
                    <Switch>
                        <Route path="/utilities">
                            <UtilitiesPage />
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
            </Layout>
        </Router>
    )
}

export default App
