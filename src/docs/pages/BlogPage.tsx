import Page from "../../components/Page"
import Body from "../components/BodyRounded"
import { Footer } from "../components/Footer"

export default function BlogPage() {
    return (
        <Page>
            <Body containerClass="d-flex flex-column docs-min-height-100vh">
                <div className="container-fluid pt-5 pt-md-0 flex-grow-1">
                    <article className="docs-blog-content">
                        <h1 className="page-header blue-opacity-hover">
                            Using Blue Web Components with Blue React{" "}
                            <a href="#use-web-components" className="blue-opacity-hover-content-active">
                                #
                            </a>
                        </h1>

                        <p className="lead">
                            The docs now use <code>&lt;blue-sidebar&gt;</code> instead of <code>SidebarMenu</code>.
                        </p>

                        <p>
                            On{" "}
                            <a href="https://bruegmann.github.io/blue-web-components/" target="github">
                                https://bruegmann.github.io/blue-web-components/
                            </a>{" "}
                            you can now find Web Components designed by the Blue team. For now there is one Web
                            Component ready to be used: <code>&lt;blue-sidebar&gt;</code>
                        </p>

                        <p>
                            You can see how it is implemented in the <code>App.tsx</code> file:{" "}
                            <a
                                href="https://github.com/bruegmann/blue-react/blob/master/src/docs/App.tsx"
                                target="github"
                            >
                                https://github.com/bruegmann/blue-react/blob/master/src/docs/App.tsx
                            </a>
                        </p>

                        <small>Posted 2022-06-29</small>
                    </article>
                </div>

                <Footer containerClass="container-fluid" />
            </Body>
        </Page>
    )
}
