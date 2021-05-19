import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Page from "../../components/Page";
import Body from "../../components/Body";

import docs from "../data/docs.json";
import { ComponentDocs } from "../components/ComponentDocs";
import { IComponent } from "../types";
import Search from "../../components/Search";
import { appTitle } from "../Global";

console.log({ docs })

export const ComponentPage = () => {

    const { selectedComponent } = useParams<any>();

    // State of input Search value
    const [value, setValue] = useState<string>("");
    // Searched & found Components
    const [components, setComponents] = useState<any>([]);

    const array_docs = Object.values(docs) as IComponent[];

    useEffect(() => {
        const routerPageElement = document.querySelector(".router-page.active")
        if (routerPageElement) {
            routerPageElement.scrollTo(0, 0)
        }
    }, [selectedComponent])

    return (
        <Page title={`${selectedComponent ? `${selectedComponent} - ` : ""}React Components - ${appTitle}`}>
            <Body containerClass="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                        <div className="sticky-top" style={{ zIndex: 0 }}>
                            <div>
                                <nav className="nav nav-pills flex-column">
                                    <div className="nav-item">


                                        <Search
                                            body
                                            // onSubmit={(e: any) => { e.preventDefault(); }}
                                            onChange={
                                                (a: any) => {
                                                    setValue(a.target.value)
                                                    // Array for the searched & found Components
                                                    let arr = [];

                                                    for (let i = 0; i < array_docs.length; i++) {
                                                        const target_value = a.target.value.toLowerCase();
                                                        if (
                                                            typeof array_docs[i].props?.break !== "undefined" ||
                                                            typeof array_docs[i].props?.checked !== "undefined" ||
                                                            typeof array_docs[i].props?.children !== "undefined" ||

                                                            typeof array_docs[i].props?.className !== "undefined" ||
                                                            typeof array_docs[i].props?.containerClass !== "undefined" ||
                                                            typeof array_docs[i].props?.content !== "undefined" ||

                                                            typeof array_docs[i].props?.disableTitleSet !== "undefined" ||
                                                            typeof array_docs[i].props?.expandSidebar !== "undefined" ||
                                                            typeof array_docs[i].props?.featured !== "undefined" ||

                                                            typeof array_docs[i].props?.hasActions !== "undefined" ||
                                                            typeof array_docs[i].props?.hideSidebarMenu !== "undefined" ||
                                                            typeof array_docs[i].props?.hideToggleAction !== "undefined" ||

                                                            typeof array_docs[i].props?.href !== "undefined" ||
                                                            typeof array_docs[i].props?.icon !== "undefined" ||
                                                            typeof array_docs[i].props?.label !== "undefined" ||

                                                            typeof array_docs[i].props?.light !== "undefined" ||
                                                            typeof array_docs[i].props?.mimeType !== "undefined" ||
                                                            typeof array_docs[i].props?.mirrored !== "undefined" ||

                                                            typeof array_docs[i].props?.navItemClassName !== "undefined" ||
                                                            typeof array_docs[i].props?.onChange !== "undefined" ||
                                                            typeof array_docs[i].props?.onToggle !== "undefined" ||

                                                            typeof array_docs[i].props?.open !== "undefined" ||
                                                            typeof array_docs[i].props?.pages !== "undefined" ||
                                                            typeof array_docs[i].props?.showDocumentLabel !== "undefined" ||

                                                            typeof array_docs[i].props?.sidebarToggleIconComponent !== "undefined" ||
                                                            typeof array_docs[i].props?.src !== "undefined" ||
                                                            typeof array_docs[i].props?.unrouteable !== "undefined"

                                                        ) {
                                                            const description = array_docs[i].description?.toLowerCase();
                                                            const display_Name = array_docs[i].displayName?.toLowerCase();
                                                            const props = Object.keys(array_docs[i].props);

                                                            if (
                                                                description?.includes(target_value) ||
                                                                display_Name?.includes(target_value) ||

                                                                array_docs[i].props?.break?.defaultValue?.value?.toLowerCase().includes(target_value) ||
                                                                array_docs[i].props?.break?.description?.toLowerCase().includes(target_value) ||
                                                                array_docs[i].props?.break?.tsType?.name?.toLowerCase().includes(target_value) ||

                                                                array_docs[i].props?.hideToggleAction?.defaultValue?.value?.toLowerCase().includes(target_value) ||
                                                                array_docs[i].props?.hideToggleAction?.description?.toLowerCase().includes(target_value) ||
                                                                array_docs[i].props?.hideToggleAction?.tsType?.name?.toLowerCase().includes(target_value) ||

                                                                array_docs[i].props?.checked?.defaultValue?.value?.toLowerCase().includes(target_value) ||
                                                                array_docs[i].props?.checked?.description?.toLowerCase().includes(target_value) ||
                                                                array_docs[i].props?.checked?.tsType?.name?.toLowerCase().includes(target_value) ||

                                                                array_docs[i].props?.children?.defaultValue?.value?.toLowerCase().includes(target_value) ||
                                                                array_docs[i].props?.children?.description?.toLowerCase().includes(target_value) ||
                                                                array_docs[i].props?.children?.tsType?.name?.toLowerCase().includes(target_value) ||

                                                                array_docs[i].props?.className?.defaultValue?.value?.toLowerCase().includes(target_value) ||
                                                                array_docs[i].props?.className?.description?.toLowerCase().includes(target_value) ||
                                                                array_docs[i].props?.className?.tsType?.name?.toLowerCase().includes(target_value) ||

                                                                array_docs[i].props?.containerClass?.defaultValue?.value?.toLowerCase().includes(target_value) ||
                                                                array_docs[i].props?.containerClass?.description?.toLowerCase().includes(target_value) ||
                                                                array_docs[i].props?.containerClass?.tsType?.name?.toLowerCase().includes(target_value) ||

                                                                array_docs[i].props?.content?.defaultValue?.value?.toLowerCase().includes(target_value) ||
                                                                array_docs[i].props?.content?.description?.toLowerCase().includes(target_value) ||
                                                                array_docs[i].props?.content?.tsType?.name?.toLowerCase().includes(target_value) ||

                                                                array_docs[i].props?.disableTitleSet?.defaultValue?.value?.toLowerCase().includes(target_value) ||
                                                                array_docs[i].props?.disableTitleSet?.description?.toLowerCase().includes(target_value) ||
                                                                array_docs[i].props?.disableTitleSet?.tsType?.name?.toLowerCase().includes(target_value) ||

                                                                array_docs[i].props?.expandSidebar?.defaultValue?.value?.toLowerCase().includes(target_value) ||
                                                                array_docs[i].props?.expandSidebar?.description?.toLowerCase().includes(target_value) ||
                                                                array_docs[i].props?.expandSidebar?.tsType?.name?.toLowerCase().includes(target_value) ||

                                                                array_docs[i].props?.featured?.defaultValue?.value?.toLowerCase().includes(target_value) ||
                                                                array_docs[i].props?.featured?.description?.toLowerCase().includes(target_value) ||
                                                                array_docs[i].props?.featured?.tsType?.name?.toLowerCase().includes(target_value) ||

                                                                array_docs[i].props?.hasActions?.defaultValue?.value?.toLowerCase().includes(target_value) ||
                                                                array_docs[i].props?.hasActions?.description?.toLowerCase().includes(target_value) ||
                                                                array_docs[i].props?.hasActions?.tsType?.name?.toLowerCase().includes(target_value) ||

                                                                array_docs[i].props?.hideSidebarMenu?.defaultValue?.value?.toLowerCase().includes(target_value) ||
                                                                array_docs[i].props?.hideSidebarMenu?.description?.toLowerCase().includes(target_value) ||
                                                                array_docs[i].props?.hideSidebarMenu?.tsType?.name?.toLowerCase().includes(target_value) ||

                                                                array_docs[i].props?.hideToggleAction?.defaultValue?.value?.toLowerCase().includes(target_value) ||
                                                                array_docs[i].props?.hideToggleAction?.description?.toLowerCase().includes(target_value) ||
                                                                array_docs[i].props?.hideToggleAction?.tsType?.name?.toLowerCase().includes(target_value) ||

                                                                array_docs[i].props?.href?.defaultValue?.value?.toLowerCase().includes(target_value) ||
                                                                array_docs[i].props?.href?.description?.toLowerCase().includes(target_value) ||
                                                                array_docs[i].props?.href?.tsType?.name?.toLowerCase().includes(target_value) ||

                                                                array_docs[i].props?.icon?.defaultValue?.value?.toLowerCase().includes(target_value) ||
                                                                array_docs[i].props?.icon?.description?.toLowerCase().includes(target_value) ||
                                                                array_docs[i].props?.icon?.tsType?.name?.toLowerCase().includes(target_value) ||

                                                                array_docs[i].props?.label?.defaultValue?.value?.toLowerCase().includes(target_value) ||
                                                                array_docs[i].props?.label?.description?.toLowerCase().includes(target_value) ||
                                                                array_docs[i].props?.label?.tsType?.name?.toLowerCase().includes(target_value) ||

                                                                array_docs[i].props?.light?.defaultValue?.value?.toLowerCase().includes(target_value) ||
                                                                array_docs[i].props?.light?.description?.toLowerCase().includes(target_value) ||
                                                                array_docs[i].props?.light?.tsType?.name?.toLowerCase().includes(target_value) ||

                                                                array_docs[i].props?.mimeType?.defaultValue?.value?.toLowerCase().includes(target_value) ||
                                                                array_docs[i].props?.mimeType?.description?.toLowerCase().includes(target_value) ||
                                                                array_docs[i].props?.mimeType?.tsType?.name?.toLowerCase().includes(target_value) ||

                                                                array_docs[i].props?.mirrored?.defaultValue?.value?.toLowerCase().includes(target_value) ||
                                                                array_docs[i].props?.mirrored?.description?.toLowerCase().includes(target_value) ||
                                                                array_docs[i].props?.mirrored?.tsType?.name?.toLowerCase().includes(target_value) ||

                                                                array_docs[i].props?.navItemClassName?.defaultValue?.value?.toLowerCase().includes(target_value) ||
                                                                array_docs[i].props?.navItemClassName?.description?.toLowerCase().includes(target_value) ||
                                                                array_docs[i].props?.navItemClassName?.tsType?.name?.toLowerCase().includes(target_value) ||

                                                                array_docs[i].props?.onChange?.defaultValue?.value?.toLowerCase().includes(target_value) ||
                                                                array_docs[i].props?.onChange?.description?.toLowerCase().includes(target_value) ||
                                                                array_docs[i].props?.onChange?.tsType?.name?.toLowerCase().includes(target_value) ||

                                                                array_docs[i].props?.onToggle?.defaultValue?.value?.toLowerCase().includes(target_value) ||
                                                                array_docs[i].props?.onToggle?.description?.toLowerCase().includes(target_value) ||
                                                                array_docs[i].props?.onToggle?.tsType?.name?.toLowerCase().includes(target_value) ||

                                                                array_docs[i].props?.open?.defaultValue?.value?.toLowerCase().includes(target_value) ||
                                                                array_docs[i].props?.open?.description?.toLowerCase().includes(target_value) ||
                                                                array_docs[i].props?.open?.tsType?.name?.toLowerCase().includes(target_value) ||

                                                                array_docs[i].props?.pages?.defaultValue?.value?.toLowerCase().includes(target_value) ||
                                                                array_docs[i].props?.pages?.description?.toLowerCase().includes(target_value) ||
                                                                array_docs[i].props?.pages?.tsType?.name?.toLowerCase().includes(target_value) ||

                                                                array_docs[i].props?.showDocumentLabel?.defaultValue?.value?.toLowerCase().includes(target_value) ||
                                                                array_docs[i].props?.showDocumentLabel?.description?.toLowerCase().includes(target_value) ||
                                                                array_docs[i].props?.showDocumentLabel?.tsType?.name?.toLowerCase().includes(target_value) ||

                                                                array_docs[i].props?.sidebarToggleIconComponent?.defaultValue?.value?.toLowerCase().includes(target_value) ||
                                                                array_docs[i].props?.sidebarToggleIconComponent?.description?.toLowerCase().includes(target_value) ||
                                                                array_docs[i].props?.sidebarToggleIconComponent?.tsType?.name?.toLowerCase().includes(target_value) ||

                                                                array_docs[i].props?.src?.defaultValue?.value?.toLowerCase().includes(target_value) ||
                                                                array_docs[i].props?.src?.description?.toLowerCase().includes(target_value) ||
                                                                array_docs[i].props?.src?.tsType?.name?.toLowerCase().includes(target_value) ||

                                                                array_docs[i].props?.unrouteable?.defaultValue?.value?.toLowerCase().includes(target_value) ||
                                                                array_docs[i].props?.unrouteable?.description?.toLowerCase().includes(target_value) ||
                                                                array_docs[i].props?.unrouteable?.tsType?.name?.toLowerCase().includes(target_value) ||

                                                                props.some(val => val.toLowerCase().includes(target_value)) ||
                                                                array_docs[i].exampleCode?.toLowerCase().includes(target_value)
                                                            ) {
                                                                arr.push(array_docs[i]);
                                                                setComponents(arr);
                                                            }
                                                        }
                                                    }

                                                }}
                                            value={value}
                                            className="mt-3"
                                            placeholder="Search..."
                                        />
                                    </div>
                                    {
                                        components.length > 0 && value !== "" ? components.map((i: any, index: number) =>
                                            <div key={index}>
                                                <Link to={`/component/${i.displayName}`} className="nav-link">{i.displayName}</Link>
                                            </div>
                                        )
                                            : docs && Object.values(docs).map((i: any, index: number) =>
                                                <div key={index} className="nav-item">
                                                    <Link to={`/component/${i.displayName}`} className="nav-link">{i.displayName}</Link>
                                                </div>

                                            )
                                    }
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
        </Page >
    );
}