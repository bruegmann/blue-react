import { Component, ComponentClass, Fragment } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { synthwave84 as syntaxHighlighterStyle } from "react-syntax-highlighter/dist/esm/styles/prism"
import { Link } from "react-router-dom"
import Markdown from "./Markdown"
import { ComponentDocumentation } from "../types"

export interface IComponentDocsProps {
    standalone: boolean
    comp: ComponentDocumentation
}

export class ComponentDocs extends Component<
    IComponentDocsProps,
    {
        ExampleComponent: ComponentClass
        exampleComponents: {
            [file: string]: ComponentClass
        }
    }
> {
    state = {
        ExampleComponent: null as unknown as ComponentClass,
        exampleComponents: {}
    }

    async componentDidMount() {
        const { comp } = this.props

        try {
            const ExampleComponent = await import(
                `../examples/${comp.displayName}.tsx`
            )
            this.setState({ ExampleComponent: ExampleComponent.default })
        } catch (ex) {
            // console.error(ex)
            // This component has no example
        }

        if (comp.examples) {
            for (const file in comp.examples) {
                try {
                    const ExampleComponent = await import(
                        `../examples/${comp.displayName}/${file.replace(
                            ".tsx",
                            ""
                        )}.tsx`
                    )
                    this.setState((state) => ({
                        exampleComponents: {
                            ...state.exampleComponents,
                            [file]: ExampleComponent.default
                        }
                    }))
                } catch (ex) {
                    console.error(ex)
                    // This component has no example
                }
            }
        }
    }

    prepareForMarkdown(text: string) {
        return text.replace("@deprecated", "***@deprecated***")
    }

    render() {
        const { comp, standalone } = this.props
        const { ExampleComponent, exampleComponents } = this.state

        return (
            <article className="pt-5">
                <h1 className="page-header mt-0 blue-opacity-hover">
                    {comp.displayName}{" "}
                    <Link
                        to={`/component/${comp.displayName}`}
                        className="blue-opacity-hover-content-active"
                    >
                        #
                    </Link>
                </h1>

                <p>
                    <a
                        href={`https://github.com/bruegmann/blue-react/blob/master/src/components/${comp.displayName}.tsx`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Show code on GitHub
                    </a>
                </p>

                <Markdown>
                    {comp.description
                        ? this.prepareForMarkdown(comp.description)
                        : ""}
                </Markdown>

                {comp.displayName == "Intro" && (
                    <p>
                        <Link to="/demo#intro" target="_blank">
                            Take a look at this demo
                        </Link>
                    </p>
                )}

                {standalone && (
                    <ul>
                        {(ExampleComponent || comp.exampleCode) && (
                            <li>
                                <a href="#example">Example</a>
                            </li>
                        )}
                        {Object.keys(exampleComponents).length > 0 && (
                            <li>
                                <a href="#examples">Examples</a>
                                <ul>
                                    {Object.keys(exampleComponents).map(
                                        (key) => (
                                            <li key={key}>
                                                <a href={`#${key}`}>
                                                    {key.replace(".tsx", "")}
                                                </a>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </li>
                        )}
                        {comp.composes && comp.composes.length > 0 && (
                            <li>
                                <a href="#extending-props">Extending props</a>
                            </li>
                        )}
                        <li>
                            <a href="#props">Props</a>
                        </li>
                    </ul>
                )}

                {(ExampleComponent || comp.exampleCode) &&
                    (standalone ? (
                        <div>
                            <h2 id="example" className="page-header">
                                Example
                            </h2>

                            {ExampleComponent && (
                                <div className="border p-2 rounded-5">
                                    <div className="p-3">
                                        <ExampleComponent />
                                    </div>

                                    {comp.exampleCode && (
                                        <SyntaxHighlighter
                                            style={syntaxHighlighterStyle}
                                            language="jsx"
                                        >
                                            {comp.exampleCode}
                                        </SyntaxHighlighter>
                                    )}
                                </div>
                            )}
                        </div>
                    ) : (
                        <Link
                            to={"/component/" + comp.displayName}
                            onClick={() => window.scrollTo(0, 0)}
                        >
                            Show example
                        </Link>
                    ))}

                {Object.keys(exampleComponents).length > 0 && (
                    <>
                        <h2 id="examples" className="page-header">
                            Examples
                        </h2>

                        {Object.keys(exampleComponents).map((key) => {
                            // @ts-expect-error: Is dynamic loading.
                            const ExampleComponent = exampleComponents[key]

                            return (
                                <Fragment key={key}>
                                    <h3 id={key} className="mt-4 mb-3">
                                        {key.replace(".tsx", "")}
                                    </h3>

                                    <div className="border p-2 rounded-5">
                                        <div className="p-3">
                                            <ExampleComponent />
                                        </div>

                                        {comp.examples && (
                                            <SyntaxHighlighter
                                                style={syntaxHighlighterStyle}
                                                language="jsx"
                                            >
                                                {comp.examples[key]}
                                            </SyntaxHighlighter>
                                        )}
                                    </div>
                                </Fragment>
                            )
                        })}
                    </>
                )}

                {comp.composes && comp.composes.length > 0 && (
                    <>
                        <h2 id="extending-props" className="page-header">
                            Extending props
                        </h2>

                        {comp.composes.map((comp: string, key: number) => (
                            <div key={key}>
                                <Link
                                    to={`/component/${comp.replace(
                                        "Props",
                                        ""
                                    )}`}
                                >
                                    {" "}
                                    <code>{comp}</code>
                                </Link>
                            </div>
                        ))}
                    </>
                )}

                {comp.props && (
                    <>
                        <h2 id="props" className="page-header">
                            Props
                        </h2>

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
                                                    {comp.props?.[j].description
                                                        ? this.prepareForMarkdown(
                                                              comp.props[j]
                                                                  .description
                                                          )
                                                        : ""}
                                                </Markdown>

                                                {comp.props?.[j]
                                                    .defaultValue ? (
                                                    <div>
                                                        <strong>
                                                            Default:
                                                        </strong>
                                                        &nbsp;
                                                        <code>
                                                            {
                                                                comp.props?.[j]
                                                                    .defaultValue
                                                                    .value as any
                                                            }
                                                        </code>
                                                    </div>
                                                ) : (
                                                    ""
                                                )}
                                            </td>
                                            <td>
                                                {comp.props?.[j].tsType &&
                                                    ("raw" in
                                                    comp.props[j].tsType
                                                        ? comp.props[j].tsType
                                                              .raw
                                                        : comp.props[j].tsType
                                                              .name)}

                                                <span
                                                    className={`badge ${
                                                        comp.props?.[j].required
                                                            ? "bg-secondary"
                                                            : "text-bg-light"
                                                    } ms-1`}
                                                >
                                                    {comp.props?.[j].required
                                                        ? "required"
                                                        : "optional"}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </>
                )}
            </article>
        )
    }
}
