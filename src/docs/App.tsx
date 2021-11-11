import React, { useState } from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Link
} from "react-router-dom"
import Grid from "../components/Grid"
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
import Outside from "../components/Outside"

function App() {
    const [open, setOpen] = useState<boolean>(false)
    const closeSidebar = () => setOpen(!open)

    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Layout
                // pages={[]}
                // unrouteable
                expandSidebar
                // sidebarToggleIconComponent={<List />}
                // statusIcons={{
                //     danger: <XCircleFill />,
                //     info: <InfoCircleFill />,
                //     success: <CheckCircleFill />,
                //     warning: <ExclamationCircleFill />
                // }}
                disableHeaders
                open={open}
                onChangeOpen={setOpen}
            >
                <Outside onClickOutside={({ target }) => {
                    if (target) {
                        const t = target as HTMLElement
                        if (t.classList?.contains("blue-sidebar-exception")) {
                            return
                        }
                    }
                    closeSidebar()
                }}>
                    <HeaderTitle sidebar>
                        <Link to="/">
                            <img
                                src={logo}
                                className="blue-header-logo-image"
                                alt="B"
                            />
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
                                    onClickAttached={closeSidebar}
                                />

                                <MenuItem
                                    href="https://github.com/bruegmann/blue-react"
                                    icon={<CodeSquare />}
                                    label="Code on GitHub"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClickAttached={closeSidebar}
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
                            onClickAttached={closeSidebar}
                        />
                        <MenuItem
                            icon={<Tools />}
                            label="Utilities"
                            elementType={NavLink}
                            to="/utilities"
                            onClickAttached={closeSidebar}
                        />
                        <MenuItem
                            icon={<Puzzle />}
                            iconForActive={<PuzzleFill />}
                            label="React Components"
                            elementType={NavLink}
                            to="/component"
                            onClickAttached={closeSidebar}
                        />
                        <MenuItem
                            icon={<Stickies />}
                            iconForActive={<StickiesFill />}
                            label="Recipes"
                            elementType={NavLink}
                            to="/recipes"
                            onClickAttached={closeSidebar}
                        />
                    </SidebarMenu>
                </Outside>

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

function _App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Grid
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
                        <img
                            src={logo}
                            className="blue-header-logo-image"
                            alt="B"
                        />
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
                    <MenuItem
                        icon={<Tools />}
                        label="Utilities"
                        elementType={NavLink}
                        to="/utilities"
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
            </Grid>
        </Router>
    )
}

export default App
