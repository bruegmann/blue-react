import Page from "../../components/Page"
import Body from "../../components/Body"
import { Footer } from "../components/Footer"
import reports from "../data/license-report.json"

export default function LicenseReportPage() {
    console.log(reports)

    return (
        <Page>
            <Body containerClass="d-flex flex-column docs-min-height-100vh">
                <div className="container-fluid pt-5 pt-md-0 flex-grow-1">
                    <article className="docs-blog-content">
                        <h1 className="page-header">License Report</h1>
                        <p>
                            Listed below are all third-party dependencies and development dependencies with their
                            license notices:
                        </p>

                        <div className="list-group">
                            {reports.map((report) => (
                                <div key={report.name} className="list-group-item">
                                    <h5 className="mb-1">
                                        <a
                                            href={`https://npmjs.com/package/${report.name}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {report.name}
                                        </a>
                                    </h5>
                                    {report.installedVersion} ({report.licenseType})
                                    {report.author && (
                                        <>
                                            <br />
                                            {report.author}
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>
                    </article>
                </div>

                <Footer containerClass="container-fluid" />
            </Body>
        </Page>
    )
}
