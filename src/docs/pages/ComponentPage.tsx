import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Page from "../../components/Page";
import Body from "../../components/Body";
import { logo, appTitle } from "../Global";
import Header from "../../components/Header";
import HeaderTitle from "../../components/HeaderTitle";

import docs from "../data/docs.json";
import { ComponentDocs } from "../components/ComponentDocs";
import FluentBtn from "../../components/FluentBtn";
import Search from "../../components/Search";

export const ComponentPage = () => {
    const { selectedComponent } = useParams();
    const [search, setSearch] = useState<string>("");

    return (
        <Page>
            <Header>
                <HeaderTitle logo={logo}>
                    <><Link to="/">{appTitle}</Link> / </>
                    {selectedComponent ? <Link to="/component">React Components</Link> : <span>React Components</span>}
                    {selectedComponent &&
                        <span> / {selectedComponent}</span>
                    }
                </HeaderTitle>
            </Header>
            <Body containerClass="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                        <div className="sticky-top" style={{ top: "48px" }}>
                            <div className="overflow-scroll">
                                <nav className="nav nav-pills flex-column">
                                    {docs && Object.values(docs).map((i: any, index: number) =>
                                        <div key={index} className="nav-item">
                                            <Link to={`/component/${i.displayName}`} className="nav-link">{i.displayName}</Link>
                                        </div>
                                    )}
                                </nav>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-10">

                        {docs && Object.values(docs).map((i: any, index: number) =>
                            (!selectedComponent || selectedComponent === i.displayName) &&
                            i.props &&
                            <ComponentDocs
                                key={index}
                                comp={i}
                                standalone={selectedComponent ? true : false}
                            />
                        )}
                    </div>
                </div>
            </Body>
        </Page>
    );
}