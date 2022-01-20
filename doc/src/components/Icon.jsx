import React from "react";
import PropTypes from "prop-types";
import BlueIconColored from "blueicon-colored";

// Convert to correct camel case for component names
function hyphensToCamelCase(str) {
    str = str.replace("-", "_");

    var arr = str.split(/[_-]/);
    var newStr = "";
    for (var i = 0; i < arr.length; i++) {
        newStr += arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return newStr;
}

class Icon extends React.Component {
    constructor() {
        super();

        this.state = {
            colorIcon: null,
            componentName: null
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.blueIconColoredOn != this.props.blueIconColoredOn) {
            this.componentDidMount();
        }
    }

    componentDidMount() {
        if (this.props.blueIconColoredOn) {
            const componentName = hyphensToCamelCase(this.props.icon.iconName);

            this.setState({
                colorIcon: BlueIconColored[componentName],
                componentName: componentName
            });
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-3">
                    <h2 className="text-center" style={{ marginTop: "0", marginBottom: "0" }}>
                        {this.props.blueIconColoredOn && this.state.colorIcon ?
                            <this.state.colorIcon />
                            : <span className={"bi-" + this.props.icon.iconName +
                                (this.props.biCclass != "" ? " bi-c-" + this.props.biCclass : "") +
                                (this.props.biAclass != "" ? " bi-a-" + this.props.biAclass : "")} />}
                    </h2>
                </div>

                <div className="col-9">
                    <code style={{ whiteSpace: "pre-wrap" }}>
                        {(this.props.blueIconColoredOn && this.state.componentName) ?
                            `import { ${this.state.componentName} } from "blueicon-colored";\n<${this.state.componentName} />` :
                            `<span className="bi-` + this.props.icon.iconName +
                            (this.props.biCclass != "" ? " bi-c-" + this.props.biCclass : "") +
                            (this.props.biAclass != "" ? " bi-a-" + this.props.biAclass : "") +
                            `" />`}
                    </code>
                </div>
            </div>
        );
    }
}

Icon.propTypes = {
    icon: PropTypes.object,
    blueIconColoredOn: PropTypes.bool,
    biCclass: PropTypes.string,
    biAclass: PropTypes.string
};

export default Icon;