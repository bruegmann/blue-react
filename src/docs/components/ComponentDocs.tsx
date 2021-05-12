import React, { Component, ComponentClass } from "react";
import MarkdownGitHub from "react-markdown-github"
import Highlight from "react-highlight";
import { Link } from "react-router-dom";

export interface IComponentDocsProps {
    standalone: boolean;
    comp: {
        displayName: string;
        description: string;
        props: any;
        exampleCode?: string;
    }
}

export class ComponentDocs extends Component<IComponentDocsProps, { ExampleComponent: ComponentClass<any>; }> {
    state = {
        ExampleComponent: null as unknown as ComponentClass<any>
    };

    componentDidMount() {
        try {
            const { comp } = this.props;
            const ExampleComponent = require(`../examples/${comp.displayName}.js`);
            // console.log(ExampleComponent);
            this.setState({ ExampleComponent: ExampleComponent["default"] });
        }
        catch (ex) {
            // console.error(ex);
            // This component has no example
        }
    }

    prepareForMarkdown(text: string) {
        return text.replace("@deprecated", "***@deprecated***")
    }

    render() {
        const { comp, standalone } = this.props;
        const { ExampleComponent } = this.state;

        return (
            <article className="pt-5">
                <h1 className="page-header mt-0">
                    <Link to={`/component/${comp.displayName}`}>#</Link> {comp.displayName}
                </h1>

                <MarkdownGitHub>{this.prepareForMarkdown(comp.description)}</MarkdownGitHub>

                {comp.displayName == "Intro" &&
                    <p>
                        <Link to="/intro-demo">Take a look at this demo</Link>
                    </p>
                }

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
                                {comp.props && Object.keys(comp.props).map(j =>
                                    <tr key={j}>
                                        <th>{j}</th>
                                        <td>
                                            <MarkdownGitHub>{this.prepareForMarkdown(comp.props[j].description)}</MarkdownGitHub>

                                            {comp.props[j].defaultValue ?
                                                <div>
                                                    <strong>Default:</strong>
                                                    &nbsp;<code>{comp.props[j].defaultValue.value}</code>
                                                </div>
                                                : ""
                                            }
                                        </td>
                                        <td>
                                            {comp.props[j].tsType && comp.props[j].tsType.name}
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>

                        {(ExampleComponent || comp.exampleCode) &&
                            (
                                standalone ?
                                    <div>
                                        <h2 className="mt-4 mb-3">Example</h2>

                                        {ExampleComponent &&
                                            <div className="mb-3"><ExampleComponent /></div>
                                        }

                                        {comp.exampleCode &&
                                            <Highlight className="jsx">{comp.exampleCode}</Highlight>
                                        }
                                    </div>
                                    :
                                    <Link to={"/component/" + comp.displayName} onClick={() => window.scrollTo(0, 0)}>Show example</Link>
                            )
                        }
                    </div>
                )}
            </article>
        );
    }
}