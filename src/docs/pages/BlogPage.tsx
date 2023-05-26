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
                            Theming using CSS Custom Properties (aka CSS Variables){" "}
                            <a href="#theming-with-css-custom-properties" className="blue-opacity-hover-content-active">
                                #
                            </a>
                        </h1>

                        <p className="lead">Easier theming without build tools thanks to Bootstrap 5.2.0!</p>

                        <p>
                            Blue React 8.5 now uses Bootstrap 5.2, which brings a big new improvement. All variables can
                            now be overridden with CSS variables instead of SCSS variables. This means that an SCSS
                            compiler is no longer required if you want to override the default theme values.
                        </p>

                        <p>
                            You can still use{" "}
                            <a href="https://bruegmann.github.io/themify" target="_blank">
                                Themify
                            </a>{" "}
                            to create themes: Check the "Export CSS Variables Only" option. Download the CSS file and
                            embed it in your HTML after importing the Blue React style.css.
                        </p>

                        <p>
                            With CSS variables, it's much easier to create separate themes for light/dark mode or even
                            high contrast mode. Just use{" "}
                            <a
                                href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                prefers-color-scheme
                            </a>{" "}
                            and place the variables in it.
                        </p>

                        <small>Posted 2022-08-216</small>
                    </article>

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

                        <p>
                            <strong>Update:</strong> Because of some conflicts, I removed{" "}
                            <code>&lt;blue-sidebar&gt;</code> again. We are now using <code>SidebarMenu</code> again
                            together with the new <code>SidebarMenuItem</code> component for the menu items.
                        </p>

                        <small>Posted 2022-06-29, Updated 2023-05-26</small>
                    </article>
                </div>

                <Footer containerClass="container-fluid" />
            </Body>
        </Page>
    )
}
