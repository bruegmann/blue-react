import React from "react";
import { Page, FluentBtn, Utilities } from "../../../index.js";

import Global from "../Global.js";

import doc from "../doc.json";
import docDoc from "../doc-doc.json";

class SearchResultsPage extends React.Component {
    constructor() {
        super();

        this.state = {
            searchWord: "",
            results: null
        };

        window.addEventListener("hashchange", event => {
            this.componentWillMount();
        });
    }

    componentWillMount() {
        this.setState({ searchWord: blueGridRef.state.match[1] }, () => {
            this.search(this.state.searchWord);
        });
    }

    componentWillReceiveProps(newProps) {
        this.setState({ searchWord: blueGridRef.state.match[1] }, () => {
            this.search(this.state.searchWord);
        });
    }

    occurrences(string, subString, allowOverlapping) {
        string += "";
        subString += "";
        if (subString.length <= 0) return (string.length + 1);

        var n = 0,
            pos = 0,
            step = allowOverlapping ? 1 : subString.length;

        while (true) {
            pos = string.indexOf(subString, pos);
            if (pos >= 0) {
                ++n;
                pos += step;
            } else break;
        }
        return n;
    }

    getHighlightedText(text, higlight) {
        // Split on higlight term and include term into parts, ignore case
        let parts = text.split(new RegExp(`(${higlight})`, 'gi'));
        let out = "<span>";

        parts.forEach((part) => {
            out += `<span class="` + (part.toLowerCase() === higlight.toLowerCase() ? "mark font-weight-bold" : "") + `">` + part + `</span>`;
        });

        out += `</span>`;
        return out;
    }

    search(q = "") {
        q = q.toLowerCase();

        this.state.results = [];

        Object.keys(doc).map(k => {
            const compString = JSON.stringify(doc[k]).toLowerCase();
            const count = this.occurrences(compString, q);

            if (doc[k].props && count > 0) {
                this.state.results.push({
                    to: "/component/" + doc[k].displayName,
                    title: this.getHighlightedText("React Komponente: " + doc[k].displayName, q),
                    description: this.getHighlightedText(doc[k].description, q),
                    count: count
                });
            }
        });

        Object.keys(docDoc).map(k => {
            const itemString = JSON.stringify(docDoc[k]).toLowerCase();
            const count = this.occurrences(itemString, q);

            if (k.toLowerCase().indexOf(q) > -1 || itemString.toLowerCase().indexOf(q) > -1) {
                if (docDoc[k].props && docDoc[k].props.path) {
                    const title = docDoc[k].props.title.defaultValue.value.replace(/"/g, "");
                    const description = docDoc[k].description;

                    this.state.results.push({
                        to: docDoc[k].props.path.defaultValue.value.replace(/"/g, ""),
                        title: this.getHighlightedText(title, q),
                        description: this.getHighlightedText(description, q),
                        count: count
                    });
                }
            }
        });

        this.setState({ results: this.state.results }, Utilities.registerFluentBtns);
    }

    render() {
        return (
            <Page>
                <Page.Header>
                    <Page.Header.Title logo={Global.logo} appTitle={Global.appTitle}>
                        Suche: "{this.state.searchWord}"
                    </Page.Header.Title>
                </Page.Header>

                <Page.Body containerClass="container">
                    {this.state.results &&
                        <div>
                            <div className="list-group" style={{ marginTop: "2rem" }}>
                                {this.state.results.sort((b, a) => (a.count > b.count) ? 1 : ((b.count > a.count) ? -1 : 0)).map((r, i) =>
                                    <FluentBtn
                                        key={i}
                                        light
                                        className="list-group-item list-group-item-action"
                                        href={"#" + r.to}
                                    >
                                        <h4 className="list-group-item-heading" dangerouslySetInnerHTML={{ __html: r.title }} />
                                        <span className="badge badge-secondary">{r.count} mal gefunden</span>
                                        <div dangerouslySetInnerHTML={{ __html: r.description }} />
                                    </FluentBtn>
                                )}
                            </div>

                            {this.state.results.length == 0 &&
                                <h1 className="text-center">Keine Ergebnisse gefunden</h1>
                            }
                        </div>
                    }
                </Page.Body>
            </Page>
        );
    }
}

export default SearchResultsPage;