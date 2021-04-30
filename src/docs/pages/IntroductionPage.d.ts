import React from "react";
export interface IntroductionPageProps {
}
export interface IntroductionPageState {
    content: any;
    didScroll: boolean;
}
export declare class IntroductionPage extends React.Component<IntroductionPageProps, IntroductionPageState> {
    constructor(props: IntroductionPageProps);
    componentDidMount(): void;
    render(): JSX.Element;
}
export default IntroductionPage;
