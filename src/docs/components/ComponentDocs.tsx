import React, { useState, useEffect, createElement, Component, ComponentClass } from "react";
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

    render() {
        const { comp, standalone } = this.props;
        const { ExampleComponent } = this.state;

        return (
            <article className="pt-5">
                <h1 className="page-header mt-0">
                    <Link to={`/component/${comp.displayName}`}>#</Link> {comp.displayName}
                </h1>

                <p dangerouslySetInnerHTML={{
                    __html: comp.description
                        .replace(
                            /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/gi,
                            (match) => {
                                if (match.match(/\.(jpeg|jpg|gif|png)$/) != null) {
                                    return '<a href="' + match + '" target="_blank"><img src="' + match + '"/></a>';
                                }
                                else {
                                    return '<a href="' + match + '" target="_blank">' + match + '</a>';
                                }
                            }
                        )
                }} />

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
                                            {comp.props[j].description && <div dangerouslySetInnerHTML={{
                                                __html: comp.props[j].description
                                                    .replace(
                                                        /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/gi,
                                                        (match: any) => {
                                                            if (match.match(/\.(jpeg|jpg|gif|png)$/) != null) {
                                                                return '<a href="' + match + '" target="_blank"><img src="' + match + '"/></a>';
                                                            }
                                                            else {
                                                                return '<a href="' + match + '" target="_blank">' + match + '</a>';
                                                            }
                                                        }
                                                    )
                                            }} />}

                                            {comp.props[j].defaultValue ?
                                                <div>
                                                    <strong>Default:</strong>
                                                    &nbsp;<code>{comp.props[j].defaultValue.value}</code>
                                                </div>
                                                : ""
                                            }
                                        </td>
                                        <td>
                                            {comp.props[j].type && comp.props[j].type.name}
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
                                    <a href={"#/component/" + comp.displayName}>Show example</a>
                            )
                        }
                    </div>
                )}
            </article>
        );
    }
}