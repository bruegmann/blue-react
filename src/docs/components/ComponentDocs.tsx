import { Component, ComponentClass } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { synthwave84 as syntaxHighlighterStyle } from "react-syntax-highlighter/dist/esm/styles/prism"
import { Link } from "react-router-dom"
import Markdown from "./Markdown"

export interface IComponentDocsProps {
    standalone: boolean
    comp: {
        composes?: string[]
        displayName: string
        description: string
        props: any
        exampleCode?: string
    }
}

export class ComponentDocs extends Component<IComponentDocsProps, { ExampleComponent: ComponentClass<any> }> {
    state = {
        ExampleComponent: null as unknown as ComponentClass<any>
    }

    componentDidMount() {
        try {
            const { comp } = this.props
            const ExampleComponent = require(`../examples/${comp.displayName}.tsx`)
            this.setState({ ExampleComponent: ExampleComponent["default"] })
        } catch (ex) {
            // console.error(ex)
            // This component has no example
        }

        try {
            const { comp } = this.props
            const ExampleComponent = require(`../examples/${comp.displayName}.js`)
            this.setState({ ExampleComponent: ExampleComponent["default"] })
        } catch (ex) {
            // console.error(ex)
            // This component has no example
        }
    }

    prepareForMarkdown(text: string) {
        return text.replace("@deprecated", "***@deprecated***")
    }

    render() {
        const { comp, standalone } = this.props
        const { ExampleComponent } = this.state

        return (
            <article className="pt-5">
                <h1 className="page-header mt-0 blue-opacity-hover">
                    {comp.displayName}{" "}
                    <Link to={`/component/${comp.displayName}`} className="blue-opacity-hover-content-active">
                        #
                    </Link>
                </h1>

                <Markdown>{this.prepareForMarkdown(comp.description)}</Markdown>

                {comp.displayName == "Intro" && (
                    <p>
                        <Link to="/intro-demo">Take a look at this demo</Link>
                    </p>
                )}

                {comp.composes && comp.composes.length > 0 && (
                    <>
                        <h2 className="mt-4 mb-3">Extending props</h2>

                        {comp.composes.map((comp: string, key: number) => (
                            <div key={key}>
                                <code>{comp}</code>
                            </div>
                        ))}
                    </>
                )}

                {comp.props && (
                    <div>
                        <h2 className="mt-4 mb-3">Props</h2>

                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Type</th>
                                </tr>
                            </thead>

                            <tbody>
                                {comp.props &&
                                    Object.keys(comp.props).map((j) => (
                                        <tr key={j}>
                                            <th>{j}</th>
                                            <td>
                                                <Markdown>
                                                    {this.prepareForMarkdown(comp.props[j].description)}
                                                </Markdown>

                                                {comp.props[j].defaultValue ? (
                                                    <div>
                                                        <strong>Default:</strong>
                                                        &nbsp;
                                                        <code>{comp.props[j].defaultValue.value}</code>
                                                    </div>
                                                ) : (
                                                    ""
                                                )}
                                            </td>
                                            <td>
                                                {comp.props[j].tsType &&
                                                    (comp.props[j].tsType.raw || comp.props[j].tsType.name)}
                                                <code
                                                    className="blue-tooltip-start"
                                                    data-tooltip={comp.props[j].required ? "Required" : "Optional"}
                                                >
                                                    {comp.props[j].required ? "!" : "?"}
                                                </code>
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>

                        {(ExampleComponent || comp.exampleCode) &&
                            (standalone ? (
                                <div>
                                    <h2 className="mt-4 mb-3">Example</h2>

                                    {ExampleComponent && (
                                        <div className="mb-3">
                                            <ExampleComponent />
                                        </div>
                                    )}

                                    {comp.exampleCode && (
                                        <SyntaxHighlighter style={syntaxHighlighterStyle} language="jsx">
                                            {comp.exampleCode}
                                        </SyntaxHighlighter>
                                    )}
                                </div>
                            ) : (
                                <Link to={"/component/" + comp.displayName} onClick={() => window.scrollTo(0, 0)}>
                                    Show example
                                </Link>
                            ))}
                    </div>
                )}
            </article>
        )
    }
}
