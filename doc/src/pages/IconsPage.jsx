import React from "react";

import { Page, Header, Body, HeaderTitle, Search, Actions, MenuItem } from "../../../index.js";

import formatting from "blueicon/formatting.json";
import keywords from "../blueicon-keywords.json";

import Global from "../Global.js";
import Icon from "../components/Icon.jsx";

/**
 * Auf dieser Seite werden alle unsere Symbole (Icons) aus der O-Collection aufgelistet und können durchsucht werden.
 * Dabei sind die nötigen Code-Schnippsel angegeben, um diese über die Pakete blueicon oder blueicon-colored in eigene Projekte einzubinden.
 */
class IconsPage extends React.Component {
    constructor() {
        super();

        this.state = {
            search: "",
            showAll: false,
            blueIconColoredOn: false,
            itemsToShow: 40,
            biCclass: "",
            biAclass: ""
        }
    }

    static get defaultProps() {
        return {
            title: "Icons",
            path: "/icons"
        };
    }

    render() {
        return (
            <Page>
                <Header>
                    <HeaderTitle logo={Global.logo} appTitle={Global.appTitle} keepAppTitle>
                        Icons
                    </HeaderTitle>

                    {/*}
                    <Page.Header.Actions>

                    </Page.Header.Actions>
        */}
                </Header>

                <Actions
                    break="lg"
                    featured={[
                        <MenuItem
                            key={0}
                            href="javascript:void(0)"
                            icon="bi-photos"
                            label="Icon als PNG/SVG/XAML"
                            onClick={() => {
                                prompt("Dafür einmal diese URL im Browser aufrufen:", "file:///Q:/VBRest.NET/Icons%20%28gekaufte%29/o_collection/search.html");
                            }}
                        />
                    ]}
                >

                    <div className="fluent-btn">
                        <div className="fluent-btn-ball" />
                        <MenuItem
                            icon={"bi-switch3_" + (this.state.blueIconColoredOn ? "on" : "off")}
                            onClick={() => this.setState({ blueIconColoredOn: !this.state.blueIconColoredOn })}
                            label="Mehrfarbige Icons"
                        />
                    </div>

                    <div className="fluent-btn">
                        <div className="fluent-btn-ball" />
                        <MenuItem
                            href="javascript:void(0)"
                            icon="bi-photos"
                            label="Icon als PNG/SVG/XAML"
                            onClick={() => {
                                prompt("Dafür einmal diese URL im Browser aufrufen:", "file:///Q:/VBRest.NET/Icons%20%28gekaufte%29/o_collection/search.html");
                            }}
                        />
                    </div>

                    {!this.state.blueIconColoredOn &&
                        <div>
                            <select className="form-control default" value={this.state.biCclass}
                                onChange={({ target }) => this.setState({ biCclass: target.value })}>
                                <option value="">Keine Färbung</option>

                                {formatting.colors.map(c =>
                                    <option key={c} value={c}>{c}</option>
                                )}
                            </select>
                        </div>
                    }

                    {!this.state.blueIconColoredOn &&
                        <div>
                            <select className="form-control default" value={this.state.biAclass}
                                onChange={({ target }) => this.setState({ biAclass: target.value })}>
                                <option value="">Keine Animation</option>

                                {formatting.animations.map(a =>
                                    <option key={a} value={a}>{a}</option>
                                )}
                            </select>
                        </div>
                    }
                </Actions>

                <Body containerClass="container" hasActions break="lg">
                    <div style={{ margin: "2rem 0" }}>
                        <Search
                            body
                            reset
                            autoFocus
                            placeholder="Icons durchsuchen"
                            value={this.state.search}
                            onChange={({ target }) => {
                                if (target.value != "") {
                                    this.state.itemsToShow = keywords.length;
                                }

                                this.setState({
                                    search: target.value,
                                    itemsToShow: this.state.itemsToShow
                                });
                            }}
                        />
                    </div>



                    <div className="row">
                        {keywords.map((icon, i) =>
                            (
                                (icon.iconName.indexOf(this.state.search) > -1) ||
                                (icon.keywords.join(",").indexOf(this.state.search) > -1)
                            ) &&
                            (i <= this.state.itemsToShow) &&
                            <div key={i} className="col-md-6" style={{ marginBottom: "2rem" }}>
                                <Icon
                                    icon={icon}
                                    blueIconColoredOn={this.state.blueIconColoredOn}
                                    biCclass={this.state.biCclass}
                                    biAclass={this.state.biAclass}
                                />
                            </div>
                        )}
                    </div>

                    {this.state.itemsToShow < keywords.length &&
                        <button type="button" className="btn btn-secondary btn-block" onClick={() => this.setState({ itemsToShow: keywords.length })}>
                            Alle anzeigen
                        </button>
                    }
                </Body>
            </Page>
        );
    }
}

export default IconsPage;