import React from "react";
import Superagent from "superagent";

import { Page } from "../../../index.js";

import Global from "../Global.js";

/**
 * Hier werden alle eigenen verfügbare NPM-Packages (Software-Pakete) aufgelistet, inklusive der nötigen Kommandos, um diese in eigenen Node.js-Projekten zu installieren.
 * Die Versionsnummern hier sind immer auf dem neuesten Stand, da diese dynamsisch aus SVN abgerufen werden.
 * Die Pakete sind react-blue-app, blueicon und blueicon-colored.
 */
class PackagesPage extends React.Component {
    constructor() {
        super();

        this.state = {
            packages: null
        }
    }

    static get defaultProps() {
        return {
            title: "Packages",
            path: "/packages"
        };
    }

    componentWillMount() {
        Superagent.get("http://pbgweb1.patorg.org/intranet/blue/service.php?action=packages").end((err, res) => {
            if (err) throw err;

            console.log(res);

            this.setState({ packages: res.body });
        });
    }

    renderPackageIcon(name) {
        let IconComponent;

        switch (name) {
            case "blue-react":
                IconComponent = require("blueicon-colored").WindowExplorer;
                break;
            case "blueicon":
                return <span className="bi-font bi-c-gray" />;
            case "blueicon-colored":
                IconComponent = require("blueicon-colored").Font;
                break;
            default:
                IconComponent = require("blueicon-colored").BoxClosed;
        }

        return <IconComponent />;
    }

    render() {
        return (
            <Page>
                <Page.Header>
                    <Page.Header.Title logo={Global.logo} appTitle={Global.appTitle}>
                        Packages
                    </Page.Header.Title>
                </Page.Header>

                <Page.Body containerClass="container">
                    <h1 className="page-header">Verfügbare NPM-Packages</h1>

                    <p>
                        Dies sind die aktuellsten NPM-Packages, die in SVN eingecheckt sind.<br />
                        Beachte, dass SVN lokal neu abgerufen werden sollte, bevor du eins der Packages einbindest.
                    </p>

                    <div className="row">
                        {this.state.packages && this.state.packages.map((p, i) =>
                            p.name != "react-blue-app" && <div key={i} className="col-md-6">
                                <div className="card mb-4">
                                    <div className="card-body text-center">
                                        <h1 style={{ marginBottom: "0" }}>
                                            {this.renderPackageIcon(p.name)}
                                        </h1>
                                        <h2 style={{ marginTop: "0" }}>{p.fileName}</h2>
                                        <input type="text" className="form-control" value={"npm i -S " + p.filePath} spellCheck={false} readOnly />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </Page.Body>
            </Page >
        );
    }
}

export default PackagesPage;