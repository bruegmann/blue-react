import React from "react"
import Page from "../../components/Page"
import Body from "../../components/Body"
import { Footer } from "../components/Footer"
import IntroductionSections from "../components/IntroductionSections"

export function IntroductionPage() {
    return (
        <Page>
            <Body containerClass="no-container d-flex flex-column docs-min-height-100vh">
                <div className="container flex-grow-1">
                    <IntroductionSections />
                </div>
                <Footer />
            </Body>
        </Page>
    )
}
export default IntroductionPage