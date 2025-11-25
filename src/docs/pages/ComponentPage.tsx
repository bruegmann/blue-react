import { useParams } from "react-router-dom"

import _docs from "../data/docs.json"
import { ComponentDocs } from "../components/ComponentDocs"
import { appTitle } from "../Global"
import { ComponentDocumentation } from "../types"
import { Footer } from "../components/Footer"

const docs = _docs as { [key: string]: ComponentDocumentation[] }

export const ComponentPage = () => {
    const { selectedComponent } = useParams<{ selectedComponent?: string }>()

    return (
        <>
            <div className="container">
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
            </div>

            <Footer />
        </>
    )
}
