import React from "react";
import { useParams, Link } from "react-router-dom";
import Page from "../../components/Page";
import Body from "../../components/Body";
import { logo, appTitle } from "../Global";
import Header from "../../components/Header";
import HeaderTitle from "../../components/HeaderTitle";

import docs from "../data/docs.json";
import { ComponentDocs } from "../components/ComponentDocs";

export const ComponentPage = () => {
    const { selectedComponent } = useParams();

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
            <Body containerClass="container">
                {docs && Object.values(docs).map((i: any, index: number) =>
                    (!selectedComponent || selectedComponent === i.displayName) &&
                    i.props &&
                    <ComponentDocs
                        key={index}
                        comp={i}
                        standalone={selectedComponent ? true : false}
                    />
                )}
            </Body>
        </Page>
    );
}