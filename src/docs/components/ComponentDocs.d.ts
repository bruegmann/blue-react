import React, { Component, ComponentClass } from "react";
export interface IComponentDocsProps {
    standalone: boolean;
    comp: {
        displayName: string;
        description: string;
        props: any;
        exampleCode?: string;
    };
}
export declare class ComponentDocs extends Component<IComponentDocsProps, {
    ExampleComponent: ComponentClass<any>;
}> {
    state: {
        ExampleComponent: React.ComponentClass<any, any>;
    };
    componentDidMount(): void;
    render(): JSX.Element;
}
