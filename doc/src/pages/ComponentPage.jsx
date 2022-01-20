import React from "react";

import { Page, Header, HeaderTitle, Body, Utilities, FluentBtn } from "../../../index.js";
import doc from "../doc.json";

import Global from "../Global.js";
import ComponentDocs from "../components/ComponentDocs.jsx";

/**
 * Hier befindet sich die Dokumentation zu den React-Blue-Paketen.
 * Dazu gehört der Markup Grundriss, die Implementierung, Blue und dessen statischen Methoden, die React Komponenten
 * und auch sonstige Komponenten.
 */

class ComponentPage extends React.Component {
    constructor() {
        super();

        this.state = {
            components: doc,
            selectedComponent: null
        }
    }

    static get defaultProps() {
        return {
            title: "React Komponenten",
            path: "/component"
        };
    }

    componentWillMount() {
        blueGridRef.addEventListener("pageDidShowAgain", "component", () => {
            this.componentDidMount();
        });
    }

    componentDidMount() {
        if (blueGridRef.state.match[1] && blueGridRef.state.match[1] != "") {
            this.setState({ selectedComponent: blueGridRef.state.match[1] });
        }
        else {
            this.setState({ selectedComponent: null });
        }
    }

    render() {
        return (
            <Page>
                <Header>
                    <HeaderTitle logo={Global.logo} appTitle={Global.appTitle}>
                        {this.state.selectedComponent ? <a href="#/component">React Komponenten</a> : <span>React Komponenten</span>}
                        {this.state.selectedComponent &&
                            <span> / {this.state.selectedComponent}</span>
                        }
                    </HeaderTitle>
                </Header>

                <Body containerClass="container">
                    {this.state.components && Object.keys(this.state.components).map(i =>
                        (!this.state.selectedComponent || this.state.selectedComponent == this.state.components[i].displayName) &&
                        this.state.components[i].props &&
                        <ComponentDocs
                            key={i}
                            comp={this.state.components[i]}
                            standalone={this.state.selectedComponent ? true : false}
                        />
                    )}
                </Body>
            </Page>
        );
    }
}

export default ComponentPage;