import { useParams } from "react-router-dom"
import Page from "../../components/Page"

import _docs from "../data/docs.json"
import { ComponentDocs } from "../components/ComponentDocs"
import { appTitle } from "../Global"
import { ComponentDocumentation } from "../types"
import { Footer } from "../components/Footer"
import Body from "../../components/Body"

const docs = _docs as { [key: string]: ComponentDocumentation[] }

export const ComponentPage = () => {
    const { selectedComponent } = useParams<{ selectedComponent?: string }>()

    return (
        <Page
            title={`${
                selectedComponent ? `${selectedComponent} - ` : ""
            }React Components - ${appTitle}`}
        >
            <Body containerClass="container">
                {docs &&
                    Object.values(docs).map((comps) =>
                        comps.map(
                            (comp) =>
                                (!selectedComponent ||
                                    selectedComponent === comp.displayName) && (
                                    <ComponentDocs
                                        key={comp.displayName}
                                        comp={comp}
                                        standalone={
                                            selectedComponent ? true : false
                                        }
                                    />
                                )
                        )
                    )}
            </Body>

            <Footer />
        </Page>
    )
}
