import React from "react";
import PropTypes from "prop-types";
import Highlight from "react-highlight";

class ComponentDocs extends React.Component {
    constructor() {
        super();

        this.state = {
            exampleComponent: null
        };
    }

    componentWillMount() {
        try {
            const exampleComponent = require(`../examples/${this.props.comp.displayName}.js`);
            // console.log(exampleComponent);
            this.setState({ exampleComponent: exampleComponent["default"] });
        }
        catch (ex) {
            // console.error(ex);
            // This component has no example
        }
    }

    render() {
        return (
            <article className="pt-5">
                <h1 className="page-header mt-0">
                    <a href={"#/component/" + this.props.comp.displayName}>#</a> {this.props.comp.displayName}
                </h1>

                <p dangerouslySetInnerHTML={{
                    __html: this.props.comp.description
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

                {this.props.comp.displayName == "Intro" &&
                    <p>
                        <a href="#/blue-intro-demo">Sieh hier eine Demo</a>
                    </p>
                }

                {this.props.comp.props && (
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
                                {this.props.comp.props && Object.keys(this.props.comp.props).map(j =>
                                    <tr key={j}>
                                        <th>{j}</th>
                                        <td>
                                            {this.props.comp.props[j].description && <div dangerouslySetInnerHTML={{
                                                __html: this.props.comp.props[j].description
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
                                            }} />}

                                            {this.props.comp.props[j].defaultValue ?
                                                <div>
                                                    <strong>Default:</strong>
                                                    &nbsp;<code>{this.props.comp.props[j].defaultValue.value}</code>
                                                </div>
                                                : ""
                                            }
                                        </td>
                                        <td>
                                            {this.props.comp.props[j].type && this.props.comp.props[j].type.name}
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>

                        {(this.state.exampleComponent || this.props.comp.exampleCode) &&
                            (
                                this.props.standalone ?
                                    <div>
                                        <h2 className="mt-4 mb-3">Beispiel</h2>

                                        {this.state.exampleComponent &&
                                            <div className="mb-3"><this.state.exampleComponent /></div>
                                        }

                                        {this.props.comp.exampleCode &&
                                            <Highlight className="jsx">{this.props.comp.exampleCode}</Highlight>
                                        }
                                    </div>
                                    :
                                    <a href={"#/component/" + this.props.comp.displayName}>Zeige Beispiel</a>
                            )
                        }
                    </div>
                )}
            </article>
        );
    }
}

ComponentDocs.propTypes = {
    comp: PropTypes.object,
    standalone: PropTypes.bool
};

export default ComponentDocs;