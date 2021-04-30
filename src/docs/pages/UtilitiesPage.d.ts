import React from "react";
export interface UtilitiesPageProps {
}
export interface UtilitiesPageState {
    content: any;
    didScroll: boolean;
}
export declare class UtilitiesPage extends React.Component<UtilitiesPageProps, UtilitiesPageState> {
    constructor(props: UtilitiesPageProps);
    componentDidMount(): void;
    render(): JSX.Element;
}
export default UtilitiesPage;
