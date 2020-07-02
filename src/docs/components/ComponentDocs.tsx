import React from "react";
import Highlight from "react-highlight";
import { Link } from "react-router-dom";

export interface IComponentDocsProps {
    standalone: boolean;
    comp: {
        displayName: string;
        description: string;
        props: any;
    }
}

export const ComponentDocs = ({ comp }: IComponentDocsProps) => (
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
                <a href="#/blue-intro-demo">Sieh hier eine Demo</a>
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

                {/* {(this.state.exampleComponent || comp.exampleCode) &&
                    (
                        this.props.standalone ?
                            <div>
                                <h2 className="mt-4 mb-3">Beispiel</h2>

                                {this.state.exampleComponent &&
                                    <div className="mb-3"><this.state.exampleComponent /></div>
                                }

                                {comp.exampleCode &&
                                    <Highlight className="jsx">{comp.exampleCode}</Highlight>
                                }
                            </div>
                            :
                            <a href={"#/component/" + comp.displayName}>Zeige Beispiel</a>
                    )
                } */}
            </div>
        )}
    </article>
);