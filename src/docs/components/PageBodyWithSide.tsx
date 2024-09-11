import { ReactNode } from "react"
import Body from "../../components/Body"
import { Footer } from "./Footer"

export interface PageBodyWithSideProps {
    side?: ReactNode
    children?: ReactNode
}

export default function PageBodyWithSide({ side, children }: PageBodyWithSideProps) {
    return (
        <Body containerClass="d-flex flex-column docs-min-height-100vh">
            <div className="container-fluid flex-grow-1">
                <div className="row">
                    <div className="col-md-2">
                        <div className="docs-sticky-top sticky-top z-0">
                            <div className="pt-1 pt-sm-3">{side}</div>
                        </div>
                    </div>

                    <div className="col-md-10">{children}</div>
                </div>
            </div>

            <Footer containerClass="container-fluid" />
        </Body>
    )
}
