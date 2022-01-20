import React from "react";
import { Page, FluentBtn, Header, HeaderTitle, Body, Actions, SwitchMenuItem, Utilities } from "../../../index.js";

import Global from "../Global.js";
const version = require("../../../package.json").version;

class HomePage extends React.Component {
    constructor() {
        super();

        this.state = {
            checked: true
        };
    }

    componentDidMount() {
        Utilities.startLoading();
        Utilities.fetchData("https://jsonplaceholder.typicode.com/todos/1")
            .then(res => {
                Utilities.finishLoading();
                return res.json();
            })
            .then(json => console.log(json));
    }

    render() {
        const wikiArticles = ["Blue", "Blue_React", "Blue_WPF"];

        return (
            <Page>
                <Body containerClass="no-container">
                    <div className="welcome-jumbotron jumbotron jumbotron-fluid bg-theme text-white">
                        <div className="container text-center">
                            <h1 className="display-1 d-inline-flex align-items-center">
                                <img src={Global.logo} style={{ height: "1em" }} className="mr-3" /> Blue
                            </h1>
                            <h4>{version}</h4>
                        </div>
                    </div>

                    <div className="container text-center">
                        <div className="alert alert-warning">
                            Dies ist eine ältere Version von blue-react und sollte nicht mehr genutzt werden.<br />
Die aktuellste Version befindet sich auf GitHub: <a href="https://bruegmann.github.io/blue-react" target="_blank" rel="noopener noreferrer">https://bruegmann.github.io/blue-react</a>
                        </div>

                        <h1>Brügmann Corporate Identity</h1>

                        <p>
                            Hier findet ihr Infos zu NPM-Paketen, Dokumentationen und Ressourcen wie Logos und Markenzeichen.<br />
                            Infos zu blue.css, blue.js und bluetstrap befinden sich im Wiki.
                        </p>

                        <h2 className="mt-5 mb-3">Nützliche Wiki-Artikel</h2>

                        <div className="row">
                            <div className="offset-md-3 col-md-6">
                                <div className="list-group text-left">
                                    {wikiArticles.map(id =>
                                        <FluentBtn
                                            light
                                            key={id}
                                            href={"http://ijbwiki.patorg.org/index.php/" + id}
                                            className="list-group-item list-group-item-action"
                                        >
                                            {id.replace(/_/g, " ")}
                                        </FluentBtn>
                                    )}
                                </div>
                            </div>
                        </div>



                        <div className="text-muted mt-5">
                            Dies ist die aktuellere Version mit Bootstrap 4.<br />
                            Die alte Version ist noch unter <a href="http://pbgsvn1.patorg.org/svn/bsw/trunk/Web/Blue/react-blue-app/doc/index.html">react-blue-app</a> verfügbar.
                        </div>
                    </div>
                </Body>
            </Page>
        );
    }
}

export default HomePage;