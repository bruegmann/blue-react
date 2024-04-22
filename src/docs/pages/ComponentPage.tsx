import { useEffect, useState } from "react"
import { useParams, NavLink } from "react-router-dom"
import Page from "../../components/Page"

import docs from "../data/docs.json"
import { ComponentDocs } from "../components/ComponentDocs"
import Search from "../../components/Search"
import { appTitle } from "../Global"
import PageBodyWithSide from "../components/PageBodyWithSide"

export const ComponentPage = () => {
    const { selectedComponent } = useParams<any>()

    // State of input Search value
    const [value, setValue] = useState<string>("")

    useEffect(() => {
        const routerPageElement = document.querySelector(".router-page.active")
        if (routerPageElement) {
            routerPageElement.scrollTo(0, 0)
        }
    }, [selectedComponent])

    return (
        <Page title={`${selectedComponent ? `${selectedComponent} - ` : ""}React Components - ${appTitle}`}>
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
                                <NavLink to="/component" exact className="nav-link">
                                    All
                                </NavLink>
                                {docs &&
                                    Object.values(docs).map(
                                        (i: any, index: number) =>
                                            (value === "" ||
                                                JSON.stringify(i).toLowerCase().includes(value.toLowerCase())) && (
                                                <div key={index} className="nav-item">
                                                    <NavLink to={`/component/${i.displayName}`} className="nav-link">
                                                        {i.displayName}
                                                    </NavLink>
                                                </div>
                                            )
                                    )}
                            </nav>
                        </div>
                    </>
                }
            >
                {docs &&
                    Object.values(docs).map(
                        (i: any, index: number) =>
                            (!selectedComponent || selectedComponent === i.displayName) && (
                                <ComponentDocs key={index} comp={i} standalone={selectedComponent ? true : false} />
                            )
                    )}
            </PageBodyWithSide>
        </Page>
    )
}
