import { createElement, useEffect, useState } from "react"
import { useParams, NavLink, Link } from "react-router-dom"
import Page from "../../components/Page"

import Search from "../../components/Search"
import { appTitle } from "../Global"
import PageBodyWithSide from "../components/PageBodyWithSide"
import cssSections from "../data/cssSections.json"

const sections = cssSections
    .map((s) => ({
        title: s,
        body: createElement(require(`../cssSections/${s}`).default)
    }))
    .sort((a, b) => {
        if (a.title === "CSS Variables") return 1
        if (b.title === "CSS Variables") return -1
        return 0
    })

export const CssPage = () => {
    const { selectedSection } = useParams<any>()

    // State of input Search value
    const [value, setValue] = useState<string>("")

    useEffect(() => {
        const routerPageElement = document.querySelector(".router-page.active")
        if (routerPageElement) {
            routerPageElement.scrollTo(0, 0)
        }
    }, [selectedSection])

    return (
        <Page title={`${selectedSection ? `${selectedSection} - ` : ""}CSS - ${appTitle}`}>
            <PageBodyWithSide
                side={
                    <>
                        <Search
                            body
                            onChange={({ target }) => {
                                setValue(target.value)
                            }}
                            value={value}
                            className="mb-1 ms-5 ms-md-0 neu-input"
                            placeholder="Search..."
                        />

                        <div
                            className="overflow-auto"
                            style={{
                                maxHeight: "calc(100vh - 5rem)"
                            }}
                        >
                            <nav className="nav nav-pills flex-column">
                                <NavLink to="/css" exact className="nav-link">
                                    All
                                </NavLink>
                                {sections.map(
                                    (s, i) =>
                                        (value === "" ||
                                            JSON.stringify(s).toLowerCase().includes(value.toLowerCase())) && (
                                            <div key={i} className="nav-item">
                                                <NavLink
                                                    to={`/css/${encodeURIComponent(s.title)}`}
                                                    className="nav-link"
                                                >
                                                    {s.title}
                                                </NavLink>
                                            </div>
                                        )
                                )}
                            </nav>
                        </div>
                    </>
                }
            >
                <h1 className="page-header">CSS</h1>

                <p className="lead">
                    Some additions and helper classes in CSS. Keep in mind that some classes are designed to be used
                    together with{" "}
                    <a href="https://getbootstrap.com" target="_blank" rel="noopener">
                        Bootstrap classes
                    </a>
                    .
                </p>

                {sections.map(
                    (s, i) =>
                        (!selectedSection || selectedSection === s.title) && (
                            <article key={i} id={"section-" + encodeURIComponent(s.title)}>
                                <h2 className="page-header blue-opacity-hover">
                                    {s.title}{" "}
                                    <Link
                                        to={`/css/${encodeURIComponent(s.title)}`}
                                        className="blue-opacity-hover-content-active"
                                    >
                                        #
                                    </Link>
                                </h2>
                                {s.body}
                            </article>
                        )
                )}
            </PageBodyWithSide>
        </Page>
    )
}
